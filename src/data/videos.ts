// ============================================================
//  VIDEO DATA — src/data/videos.ts
//  Generated via Graphical Admin Dashboard
// ============================================================

export interface MovieScene {
  sceneNumber: number;
  title: string;
  filename: string;
  size: string;
  downloadUrl?: string;
  streamUrl?: string;
  duration?: string;
  actors?: string[];
  previewImage?: string;
}

export interface MovieSpecs {
  format?: string;
  resolution?: string;
  videoCodec?: string;
  fps?: string;
  audioCodec?: string;
  audioChannels?: string;
  language?: string;
}

export interface Video {
  id: string;
  title: string;              // Full post release title
  cleanTitle?: string;        // Clean display title
  thumbnail: string;          // Movie poster URL (portrait 2:3 ratio)
  poster?: string;            // Alias for thumbnail
  preview?: string;
  embedUrl?: string;
  category: string;
  genres?: string[];
  tags: string[];
  duration: string;
  date: string;
  views?: number;

  quality?: string;           // "1080p", "720p", "4K", "WEB-DL"
  releaseYear?: string | number;
  studio?: string;            // e.g. "Reality Kings", "Team Skeet", "Zero Tolerance"
  size?: string;              // e.g. "5.69 GB", "2.38 GB"
  downloadUrl?: string;       // Direct Movie Download link
  likes?: number;
  dislikes?: number;
  cast?: string[];
  synopsis?: string;
  splitScenes?: boolean;
  specs?: MovieSpecs;
  scenes?: MovieScene[];
  screenshots?: string[];
}

export type Movie = Video;

export const SITE_CONFIG = {
  name:         'Porno XXX',
  tagline:      'Free Porn Videos & Sex Movies',
  accentColor:  '#e63946',
  siteUrl:      'https://pornoxxx.top',
  videosPerPage: 20,
};

export const ALLOWED_EMBED_HOSTS: string[] = [
  "porntapes.rpmvip.com",
  "pornhub.com",
  "www.xvideos.com",
  "xvideos.com",
  "www.xnxx.com",
  "xnxx.com",
  "www.xhamster.com",
  "xhamster.com",
  "player.example.com",
  "embed.example.com",
  "stream.xcloud1.lol"
];

export const CATEGORIES = [
  "Team Skeet",
  "Reality Kings",
  "MILFY",
  "Mommys Girl",
  "Life Selector",
  "Mile High Media",
  "Lesbian Older Younger",
  "Evil Angel"
] as const;

export const NAV_CATEGORIES: string[] = [
  "Team Skeet",
  "Zero Tolerance",
  "Reality Kings",
  "Anal",
  "Blowjob",
  "Creampie",
  "Family Roleplay",
  "Latina"
];

export function normalizeCategory(rawCategory: string, tags: string[] = []): string {
  const all = [rawCategory, ...tags].map((s) => s.toLowerCase().replace(/[-_\s]+/g, ''));

  const has = (...terms: string[]) =>
    terms.some((t) => all.some((s) => s.includes(t.toLowerCase().replace(/[-_\s]+/g, ''))));

  if (has('teamskeet', 'team-skeet', 'skeet')) return 'Team Skeet';
  if (has('zerotolerance', 'zero-tolerance')) return 'Zero Tolerance';
  if (has('realitykings', 'reality-kings')) return 'Reality Kings';
  if (has('family', 'stepbrother', 'stepsister', 'roleplay', 'stepmom')) return 'Family Roleplay';
  if (has('latina', 'latin')) return 'Latina';
  if (has('anal', 'mranal', 'analgape', 'tightanalgape', 'analwhore')) return 'Anal';
  if (has('creampie', 'cuminpanties', 'cumswallowing', 'deepcreampie')) return 'Creampie';
  if (has('blowjob', 'deepthroat', 'facefucking', 'blowjobtease', 'sloppy')) return 'Blowjob';
  if (has('bbw', 'chubby', 'hugebody', 'fatass', 'plussize')) return 'BBW';
  if (has('bigcock', 'bigdick', 'monstercock', 'bbc', 'blackcock', 'hugecocks', 'fatdick')) return 'Big Cock';
  if (has('teen', 'teens', 'teen18', 'teens18', '18yo', 'young', 'petite')) return 'Teen';
  if (has('amateur', 'homemade', 'couple', 'pov')) return 'Amateur';

  return rawCategory || 'Movies';
}

export type Category = (typeof CATEGORIES)[number];

export const videos: Video[] = [
  {
    "id": "movie-6",
    "title": "Hookup Hotshot Internet Sex Addicts Vol. 10 [Evil Angel 2026] XXX WEB-DL 1080p",
    "cleanTitle": "Hookup Hotshot Internet Sex Addicts Vol. 10",
    "thumbnail": "https://imgxclub.com/p/2026/10/06/6ac4e542be65e.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/06/6ac4e542be65e.jpeg",
    "category": "Evil Angel",
    "studio": "Evil Angel",
    "quality": "1080p",
    "duration": "2 hrs. 41 mins.",
    "cast": [
      "Addison",
      "Dez Hansen",
      "Iris Leon",
      "Sona Bella",
      "Bryan Gozzling",
      "Nade Nasty"
    ],
    "genres": [
      "Anal",
      "Appearance",
      "Big Dicks",
      "Character",
      "Clothing",
      "Deep Throat",
      "Gonzo",
      "Niche",
      "Oral",
      "Pantyhose & Stockings",
      "Rimming",
      "Rimming - F on M",
      "Rough Sex",
      "Webcam Girls"
    ],
    "tags": [
      "Anal",
      "Appearance",
      "Big Dicks",
      "Character",
      "Clothing",
      "Deep Throat",
      "Gonzo",
      "Niche",
      "Oral",
      "Pantyhose & Stockings",
      "Rimming",
      "Rimming - F on M",
      "Rough Sex",
      "Webcam Girls"
    ],
    "synopsis": "Raunchy pornographer Bryan Gozzling presents submissive dolls getting the rough sex they love in Hookup Hotshot: Internet Sex Addicts Vol. 10. Four cute, young explorers tease in distinctive, girly outfits and then succumb to the dirty whims of dominant stud Nade Nasty.",
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "size": "500 MB",
        "duration": "38:26",
        "downloadUrl": "https://stream.xcloud1.lol/5e4006eb0692c53"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "size": "500 MB",
        "duration": "31:45",
        "downloadUrl": "https://stream.xcloud1.lol/63a9e0d4f55ec07"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "size": "500 MB",
        "duration": "43:22",
        "downloadUrl": "https://stream.xcloud1.lol/d52a009310b0bd9"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/06/6ac4e4954a8ec.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4955ec97.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4958976f.jpeg"
    ],
    "releaseYear": "2026",
    "date": "2026-10-08"
  },
  {
    "id": "movie-5",
    "title": "MILF Teen Sexual Escapades 2 [Lesbian Older Younger 2026] XXX WEB-DL",
    "cleanTitle": "MILF Teen Sexual Escapades 2",
    "thumbnail": "https://imgxclub.com/p/2026/10/06/6ac4e53f075eb.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/06/6ac4e53f075eb.jpeg",
    "category": "Lesbian Older Younger",
    "studio": "Lesbian Older Younger",
    "quality": "1080p",
    "duration": "2 hrs. 8 mins.",
    "cast": [
      "Alex Little",
      "Anastasia Devine",
      "Ashlee Graham",
      "Chloe Cherry",
      "Engel White",
      "India Summer",
      "Scarlett Fay",
      "Stevie Lix"
    ],
    "genres": [
      "18+ Teens",
      "Age",
      "Compilation",
      "Cunnilingus",
      "Lesbian",
      "Lesbian - 18+ Teens",
      "MILF",
      "Old & Young Females (18+)",
      "Oral"
    ],
    "tags": [
      "18+ Teens",
      "Age",
      "Compilation",
      "Cunnilingus",
      "Lesbian",
      "Lesbian - 18+ Teens",
      "MILF",
      "Old & Young Females (18+)",
      "Oral"
    ],
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "size": "500 MB",
        "duration": "28:33",
        "downloadUrl": "https://stream.xcloud1.lol/41dc23373fdedb0"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "size": "500 MB",
        "duration": "31:15",
        "downloadUrl": "https://stream.xcloud1.lol/79c813c68d92ae9"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "size": "500 MB",
        "duration": "24:03",
        "downloadUrl": "https://stream.xcloud1.lol/d7469af40ccd001"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "size": "500 MB",
        "duration": "44:35",
        "downloadUrl": "https://stream.xcloud1.lol/7cdb46425a20e1a"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/06/6ac4e45b852ce.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e45b96536.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e45bb0d54.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e45bcded5.jpeg"
    ],
    "releaseYear": "2026",
    "date": "2026-10-08"
  },
  {
    "id": "movie-4",
    "title": "My Dysfunctional Family [Mile High Media 2026] XXX WEB-DL 1080p",
    "cleanTitle": "My Dysfunctional Family",
    "thumbnail": "https://imgxclub.com/p/2026/10/06/6ac4e540d51d1.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/06/6ac4e540d51d1.jpeg",
    "category": "Mile High Media",
    "studio": "Mile High Media",
    "quality": "1080p",
    "duration": "1 hrs. 37 mins",
    "cast": [
      "Devon Lee",
      "Madison Sky",
      "Rachel Rivers",
      "River Lynn"
    ],
    "genres": [
      "18+ Teens",
      "Age",
      "Character",
      "Compilation",
      "Erotic Vignette",
      "Family Roleplay",
      "Plot Oriented"
    ],
    "tags": [
      "18+ Teens",
      "Age",
      "Character",
      "Compilation",
      "Erotic Vignette",
      "Family Roleplay",
      "Plot Oriented"
    ],
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "size": "500 MB",
        "duration": "23:59",
        "downloadUrl": "https://stream.xcloud1.lol/897bba87653868c"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "size": "500 MB",
        "duration": "24:07",
        "downloadUrl": "https://stream.xcloud1.lol/daa7f6f3ccae69a"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "size": "500 MB",
        "duration": "24:03",
        "downloadUrl": "https://stream.xcloud1.lol/ef83d8fb4fb8525"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "size": "500 MB",
        "duration": "24:45",
        "downloadUrl": "https://stream.xcloud1.lol/7b5ed8e2484e02f"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/06/6ac4e4761e5bb.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e476364b0.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4765c6c8.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4767aaba.jpeg"
    ],
    "releaseYear": "2026",
    "date": "2026-10-08"
  },
  {
    "id": "movie-3",
    "title": "POV Foot Fetish With Blonde Temptresses [Life Selector 2026] XXX WEB-DL 1080p",
    "cleanTitle": "POV Foot Fetish With Blonde Temptresses",
    "thumbnail": "https://imgxclub.com/p/2026/10/06/6ac4e544c47e8.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/06/6ac4e544c47e8.jpeg",
    "category": "Life Selector",
    "studio": "Life Selector",
    "quality": "1080p",
    "duration": "2h 10m",
    "cast": [
      "Candee Licious",
      "Elizabeth Jolie",
      "Geisha Kyd",
      "Goldie Rush",
      "Jessa Rhodes",
      "Karina King"
    ],
    "genres": [
      "Anal",
      "Appearance",
      "Big Dicks",
      "Big Tits",
      "Blondes",
      "Compilation",
      "Cumshots",
      "Fetish",
      "Foot Fetish",
      "Footjob",
      "International",
      "Masturbation",
      "Office",
      "POV",
      "Settings"
    ],
    "tags": [
      "Anal",
      "Appearance",
      "Big Dicks",
      "Big Tits",
      "Blondes",
      "Compilation",
      "Cumshots",
      "Fetish",
      "Foot Fetish",
      "Footjob",
      "International",
      "Masturbation",
      "Office",
      "POV",
      "Settings"
    ],
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "size": "500 MB",
        "duration": "16:49",
        "downloadUrl": "https://stream.xcloud1.lol/78dac80b97fb963"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "size": "500 MB",
        "duration": "11:16",
        "downloadUrl": "https://stream.xcloud1.lol/be6e6120097e65b"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "size": "500 MB",
        "duration": "12:04",
        "downloadUrl": "https://stream.xcloud1.lol/614b98f15b56356"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "size": "500 MB",
        "duration": "19:23",
        "downloadUrl": "https://stream.xcloud1.lol/6996746338839e4"
      },
      {
        "sceneNumber": 5,
        "title": "Scene 5",
        "filename": "scene-5.mp4",
        "size": "500 MB",
        "duration": "27:37",
        "downloadUrl": "https://stream.xcloud1.lol/3e1fb3645b07bad"
      },
      {
        "sceneNumber": 6,
        "title": "Scene 6",
        "filename": "scene-6.mp4",
        "size": "500 MB",
        "duration": "41:39",
        "downloadUrl": "https://stream.xcloud1.lol/1f9662de01ba092"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/06/6ac4e4aebdea4.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4aed5a7b.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4af0632e.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4af12ff1.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4af298c3.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4af363a3.jpeg"
    ],
    "releaseYear": "2026",
    "date": "2026-10-08"
  },
  {
    "id": "movie-2",
    "title": "Sneaky Checkup [Mommys Girl 2026] XXX WEB-DL 1080p",
    "cleanTitle": "Sneaky Checkup",
    "thumbnail": "https://imgxclub.com/p/2026/10/06/6ac4e53d0fa12.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/06/6ac4e53d0fa12.jpeg",
    "category": "Mommys Girl",
    "studio": "Mommys Girl",
    "quality": "1080p",
    "duration": "1h 31m",
    "cast": [
      "Harley Love",
      "Isabella Jules",
      "Penny Barber",
      "Serene Siren",
      "Siouxsie Q.",
      "Summer Col",
      "Vivianne DeSilva"
    ],
    "tags": [],
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "size": "500 MB",
        "duration": "29:27",
        "downloadUrl": "https://stream.xcloud1.lol/04745a62b1ece86"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "size": "500 MB",
        "duration": "37:32",
        "downloadUrl": "https://stream.xcloud1.lol/4a4c3a02d121a60"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "size": "500 MB",
        "duration": "24:25",
        "downloadUrl": "https://stream.xcloud1.lol/0814c8b65cdf20b"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/06/6ac4e4414f9e3.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e441608ae.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4419ab74.jpeg"
    ],
    "releaseYear": "2026",
    "date": "2026-10-08"
  },
  {
    "id": "movie-1",
    "title": "Women And Boys Vol. 3 [MILFY 2026] XXX WEB-DL 1080p",
    "cleanTitle": "Women And Boys Vol. 3",
    "thumbnail": "https://media.themoviedb.org/t/p/w440_and_h660_face/pf7mS72AGC3GyjvDEfqm02JLEEd.jpg",
    "poster": "https://media.themoviedb.org/t/p/w440_and_h660_face/pf7mS72AGC3GyjvDEfqm02JLEEd.jpg",
    "category": "MILFY",
    "studio": "MILFY",
    "quality": "1080p",
    "duration": "2h 24m",
    "size": "5.28 GB",
    "cast": [
      "Julia Grandi",
      "Lauren Phillips",
      "Melissa Stratton",
      "Shalina Devine",
      "Sophia Locke",
      "Alberto Blanco",
      "Chocolate God",
      "Derek Dozer",
      "Dwayne Foxxx",
      "Hollywood Cash",
      "Isiah Maxwell",
      "Jay Rogue",
      "Matthew Meier",
      "Parker Ambrose",
      "Sheem The Dream",
      "W.C. Walker"
    ],
    "genres": [
      "Age",
      "Anal",
      "Appearance",
      "BBC",
      "Big Dicks",
      "Big Tits",
      "Cougars",
      "Double Penetration",
      "Erotic Vignette",
      "Group Sex",
      "Interracial",
      "Interracial - Black Men",
      "Interracial - Caucasian Girls",
      "MILF",
      "Plot Oriented",
      "Popporn #1 Bestsellers",
      "Redheads",
      "Threesome - FMM",
      "Threesomes"
    ],
    "tags": [
      "Age",
      "Anal",
      "Appearance",
      "BBC",
      "Big Dicks",
      "Big Tits",
      "Cougars",
      "Double Penetration",
      "Erotic Vignette",
      "Group Sex",
      "Interracial",
      "Interracial - Black Men",
      "Interracial - Caucasian Girls",
      "MILF",
      "Plot Oriented",
      "Popporn #1 Bestsellers",
      "Redheads",
      "Threesome - FMM",
      "Threesomes"
    ],
    "synopsis": "Sophia Locke has a son who's acting a fool online, and when his behavior gets their address doxxed, she takes the opportunity to teach him a lesson with two of his biggest haters. Melissa Stratton, Shalina Devine, and Lauren Phillips are all initiating their charges into erotic worlds they had never imagined possible. Tawdry tales, sun-kissed settings, and hardcore where the women know what they want.",
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "MILFY - Women And Boys 3 Scene 1 1080p.mp4",
        "size": "1.33 GB",
        "duration": "00:35:20",
        "downloadUrl": "https://stream.xcloud1.lol/8575f8e52e87c41"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "MILFY - Women And Boys 3 Scene 2 1080p.mp4",
        "size": "1.28 GB",
        "duration": "00:34:26",
        "downloadUrl": "https://stream.xcloud1.lol/0b74c63fae43944"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "MILFY - Women And Boys 3 Scene 3 1080p.mp4",
        "size": "1.37 GB",
        "duration": "00:37:24",
        "downloadUrl": "https://stream.xcloud1.lol/a3c21a5656b5bca"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "MILFY - Women And Boys 3 Scene 4 1080p.mp4",
        "size": "1.3 GB",
        "duration": "00:37:06",
        "downloadUrl": "https://stream.xcloud1.lol/6471f736bf7ee3e"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/06/6ac4e4cb1ab28.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4cb2b10d.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4cb6ab62.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4cb77430.jpeg"
    ],
    "releaseYear": "2026",
    "date": "2026-10-07"
  }
];

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getVideoBySlug(slug: string): Video | undefined {
  return videos.find((v) => slugify(v.title) === slug);
}

export function formatDate(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 60)       return 'Just now';
  if (diff < 3600)     return `${Math.floor(diff / 60)} mins ago`;
  if (diff < 86400)    return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 2678400) {
    const d = Math.floor(diff / 86400);
    return d === 1 ? '1 day ago' : `${d} days ago`;
  }
  if (diff < 32140800) {
    const m = Math.floor(diff / 2678400);
    return m === 1 ? '1 month ago' : `${m} months ago`;
  }
  const y = Math.floor(diff / 31536000);
  return y === 1 ? '1 year ago' : `${y} years ago`;
}

export function isAllowedEmbedUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, '');
    return ALLOWED_EMBED_HOSTS.some((h) => {
      const allowed = h.replace(/^www\./, '');
      return host === allowed || host.endsWith('.' + allowed);
    });
  } catch {
    return false;
  }
}

export function parseViews(str: string): number {
  if (!str) return 0;
  const n = parseFloat(str);
  const upper = str.toUpperCase();
  if (upper.includes('M')) return n * 1_000_000;
  if (upper.includes('K')) return n * 1_000;
  return n || 0;
}

export function getQualityTag(tags: string[] = []): string | null {
  for (const raw of tags) {
    const t = raw.trim().toLowerCase();
    if (t === '1080' || t === '1080p') return '1080p';
    if (t === '720' || t === '720p') return '720p';
    if (t === '480' || t === '480p') return '480p';
    if (t === '4k' || t === '2160' || t === '2160p') return '4K';
    const match = t.match(/^(\d{3,4}p)$/i);
    if (match) return match[1].toLowerCase();
  }
  return null;
}

export function getQualityTierBadge(video: { quality?: string; tags?: string[]; title?: string }): { label: string; tierClass: string } {
  const text = `${video.quality || ''} ${(video.tags || []).join(' ')} ${video.title || ''}`.toLowerCase();
  if (text.includes('4k') || text.includes('2160p') || text.includes('uhd')) {
    return { label: '4K UHD', tierClass: 'tier-4k' };
  }
  if (text.includes('1080p') || text.includes('1080') || text.includes('fhd')) {
    return { label: '1080p HD', tierClass: 'tier-1080p' };
  }
  if (text.includes('720p') || text.includes('720')) {
    return { label: '720p HD', tierClass: 'tier-720p' };
  }
  if (text.includes('web-dl') || text.includes('webrip')) {
    return { label: 'WEB-DL', tierClass: 'tier-hd' };
  }
  if (video.quality) {
    return { label: video.quality.toUpperCase(), tierClass: 'tier-hd' };
  }
  const tagQual = getQualityTag(video.tags || []);
  if (tagQual) {
    return { label: tagQual.toUpperCase(), tierClass: tagQual === '1080p' ? 'tier-1080p' : tagQual === '720p' ? 'tier-720p' : 'tier-hd' };
  }
  return { label: 'HD', tierClass: 'tier-hd' };
}

export function getAllCategories(): string[] {
  const set = new Set<string>();
  CATEGORIES.forEach((c) => set.add(c));
  videos.forEach((v) => {
    if (v.category?.trim()) set.add(v.category.trim());
  });
  return Array.from(set);
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  videos.forEach((v) => {
    (v.tags || []).forEach((t) => {
      const trimmed = t.trim();
      if (trimmed) set.add(trimmed);
    });
  });
  return Array.from(set);
}

export function getVideosForCategory(categorySlugOrName: string): Video[] {
  const slug = slugify(categorySlugOrName);
  let result: Video[] = [];

  if (slug === 'popular') {
    result = [...videos].sort((a, b) => (b.views || 0) - (a.views || 0));
  } else if (slug === 'trending') {
    result = [...videos].sort((a, b) => {
      const vDiff = (b.views || 0) - (a.views || 0);
      const dDiff = new Date(b.date).getTime() - new Date(a.date).getTime();
      return vDiff || dDiff;
    });
  } else if (slug === 'latest') {
    result = [...videos].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else {
    result = videos.filter((v) => {
      const catSlug = slugify(v.category);
      const isCat = catSlug === slug || catSlug.replace(/-/g, '_') === slug.replace(/-/g, '_');
      const isTag = (v.tags || []).some((t) => {
        const tSlug = slugify(t);
        return tSlug === slug || tSlug.replace(/-/g, '_') === slug.replace(/-/g, '_');
      });
      return isCat || isTag;
    });
    result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  return result;
}

export function getVideosForTag(tagSlugOrName: string): Video[] {
  const slug = slugify(tagSlugOrName);
  const result = videos.filter((v) =>
    (v.tags || []).some((t) => {
      const tSlug = slugify(t);
      return tSlug === slug || tSlug.replace(/-/g, '_') === slug.replace(/-/g, '_');
    })
  );
  result.sort((a, b) => (b.views || 0) - (a.views || 0) || new Date(b.date).getTime() - new Date(a.date).getTime());
  return result;
}

export function getAllGenres(): string[] {
  const set = new Set<string>();
  videos.forEach((v) => {
    (v.genres || []).forEach((g) => {
      const trimmed = g.trim();
      if (trimmed) set.add(trimmed);
    });
  });
  return Array.from(set);
}

export function getAllCast(): string[] {
  const set = new Set<string>();
  videos.forEach((v) => {
    (v.cast || []).forEach((c) => {
      const trimmed = c.trim();
      if (trimmed) set.add(trimmed);
    });
  });
  return Array.from(set);
}

export function getVideosForGenre(genreSlugOrName: string): Video[] {
  const slug = slugify(genreSlugOrName);
  const result = videos.filter((v) => {
    const matchGenre = (v.genres || []).some((g) => {
      const gSlug = slugify(g);
      return gSlug === slug || gSlug.replace(/-/g, '_') === slug.replace(/-/g, '_');
    });
    const matchTag = (v.tags || []).some((t) => {
      const tSlug = slugify(t);
      return tSlug === slug || tSlug.replace(/-/g, '_') === slug.replace(/-/g, '_');
    });
    return matchGenre || matchTag;
  });
  result.sort((a, b) => (b.views || 0) - (a.views || 0) || new Date(b.date).getTime() - new Date(a.date).getTime());
  return result;
}

export function getVideosForCast(actorSlugOrName: string): Video[] {
  const slug = slugify(actorSlugOrName);
  const result = videos.filter((v) =>
    (v.cast || []).some((c) => {
      const cSlug = slugify(c);
      return cSlug === slug || cSlug.replace(/-/g, '_') === slug.replace(/-/g, '_');
    })
  );
  result.sort((a, b) => (b.views || 0) - (a.views || 0) || new Date(b.date).getTime() - new Date(a.date).getTime());
  return result;
}
