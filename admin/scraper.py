import re
import json
import html
import requests
from bs4 import BeautifulSoup
from datetime import datetime
import sys

def parse_xvideos_html(html_content, url=""):
    data = {
        "id": "",
        "title": "",
        "thumbnail": "",
        "preview": "",
        "embedUrl": "",
        "category": "",
        "tags": [],
        "duration": "",
        "date": ""
    }
    
    # 1. Parse window.xv.conf
    conf_match = re.search(r'window\.xv\.conf\s*=\s*(\{.*?\});', html_content, re.DOTALL)
    xv_conf = {}
    if conf_match:
        try:
            xv_conf = json.loads(conf_match.group(1))
        except json.JSONDecodeError:
            pass

    # Dynamic / Data dictionaries
    dyn = xv_conf.get('dyn', {}) if isinstance(xv_conf, dict) else {}
    conf_data = xv_conf.get('data', {}) if isinstance(xv_conf, dict) else {}

    # Encoded ID for embed frame
    encoded_id = (
        conf_data.get('encoded_id_video') or 
        xv_conf.get('encoded_id_video') or 
        ""
    )

    if not encoded_id and url:
        m = re.search(r'/video\.?([a-zA-Z0-9]+)/', url)
        if m:
            encoded_id = m.group(1)

    if not encoded_id:
        m = re.search(r'/embedframe/([a-zA-Z0-9]+)', html_content)
        if m:
            encoded_id = m.group(1)

    if encoded_id:
        data['embedUrl'] = f"https://www.xvideos.com/embedframe/{encoded_id}"

    # Title
    raw_title = dyn.get('video_title') or ""
    if not raw_title:
        soup_temp = BeautifulSoup(html_content, 'html.parser')
        og_title = soup_temp.find('meta', property='og:title')
        if og_title and og_title.get('content'):
            raw_title = og_title['content']
    data['title'] = html.unescape(raw_title).strip()

    # Tags
    raw_tags = dyn.get('video_tags') or conf_data.get('video_tags') or []
    if isinstance(raw_tags, list):
        data['tags'] = [html.unescape(str(t)).strip() for t in raw_tags if str(t).strip()]

    # Category
    if data['tags']:
        data['category'] = data['tags'][-2] if len(data['tags']) > 1 else data['tags'][0]
    else:
        main_cat = dyn.get('page_main_cat') or ""
        data['category'] = main_cat if main_cat else "General"

    # 2. Extract HTML5Player data for media URLs
    thumb_match = re.search(r"html5player\.setThumbUrl\('([^']+)'\);", html_content)
    if thumb_match:
        thumbnail_url = thumb_match.group(1)
        data['thumbnail'] = thumbnail_url
        directory_path = thumbnail_url.rsplit('/', 1)[0]
        data['preview'] = f"{directory_path}/preview.mp4"
    else:
        soup_temp = BeautifulSoup(html_content, 'html.parser')
        og_img = soup_temp.find('meta', property='og:image')
        if og_img and og_img.get('content'):
            data['thumbnail'] = og_img['content']
            directory_path = og_img['content'].rsplit('/', 1)[0]
            data['preview'] = f"{directory_path}/preview.mp4"

    # 3. Parse duration and set current date
    data['date'] = datetime.now().strftime('%Y-%m-%d')

    soup = BeautifulSoup(html_content, 'html.parser')
    
    og_duration = soup.find('meta', property='og:duration')
    if og_duration and og_duration.get('content'):
        try:
            duration_seconds = int(og_duration['content'])
            mins, secs = divmod(duration_seconds, 60)
            data['duration'] = f"{mins}:{secs:02d}"
        except (ValueError, TypeError):
            pass

    ld_json_script = soup.find('script', type='application/ld+json')
    if ld_json_script and ld_json_script.string:
        try:
            schema = json.loads(ld_json_script.string)
            if not data['duration'] and schema.get('duration'):
                # Schema duration ISO 8601 e.g. PT12M30S
                m = re.match(r'PT(?:(\d+)M)?(?:(\d+)S)?', schema.get('duration'))
                if m:
                    mins = int(m.group(1) or 0)
                    secs = int(m.group(2) or 0)
                    data['duration'] = f"{mins}:{secs:02d}"
        except (json.JSONDecodeError, ValueError):
            pass

    # ID
    vid_id = conf_data.get('id_video') or dyn.get('id') or ""
    if not vid_id:
        id_match = re.search(r"id_video\s*:\s*(\d+)", html_content)
        if id_match:
            vid_id = id_match.group(1)
    data['id'] = str(vid_id)

    return data

def scrape_url(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=12)
        response.raise_for_status() 
        return parse_xvideos_html(response.text, url=url)
    except requests.RequestException as e:
        print(f"Error fetching {url}: {e}", file=sys.stderr)
        return None

if __name__ == "__main__":
    if len(sys.argv) > 1:
        target_url = sys.argv[1]
    else:
        target_url = "https://www.xvideos.com/video.ktuovtd18bf/you_have_to_see_this_luna_lovely_with_4_huge_cocks_taking_it_like_the_awesome_slut_she_is_aa048"
    
    result = scrape_url(target_url)
    if result:
        print(json.dumps(result))
    else:
        sys.exit(1)
