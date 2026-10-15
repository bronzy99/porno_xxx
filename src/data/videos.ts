// ============================================================
//  VIDEO DATA — src/data/videos.ts
//  Generated via Graphical Admin Dashboard
// ============================================================

export interface MovieScene {
  sceneNumber: number;
  title: string;
  filename?: string;
  size?: string;
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
  streamUrl?: string;         // External Streamable URL
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
  "Evil Angel",
  "True Amateurs",
  "All Niche Productions",
  "Devils Film",
  "True X",
  "Erotica X",
  "Lesbea",
  "The Score Group",
  "Zero Tolerance",
  "Jules Jordan Video"
] as const;

export const NAV_CATEGORIES: string[] = [
  "Team Skeet",
  "Reality Kings",
  "MILFY",
  "Mommys Girl",
  "Life Selector",
  "Mile High Media",
  "Lesbian Older Younger",
  "Evil Angel",
  "True Amateurs",
  "All Niche Productions",
  "Devils Film",
  "True X",
  "Erotica X",
  "Lesbea",
  "The Score Group",
  "Zero Tolerance",
  "Jules Jordan Video"
];

export function normalizeCategory(rawCategory: string, tags: string[] = []): string {
  if (rawCategory && rawCategory.trim()) {
    return rawCategory.trim();
  }
  return 'Movies';
}

export type Category = (typeof CATEGORIES)[number];

export const videos: Video[] = [
  {
    "id": "movie-21",
    "title": "Manuel Opens Their Asses 10 [Jules Jordan Video 2026] XXX WEB-DL 1080p",
    "cleanTitle": "Manuel Opens Their Asses 10",
    "thumbnail": "https://imgxclub.com/p/2026/08/25/6a8db56143ee1.jpeg",
    "poster": "https://imgxclub.com/p/2026/08/25/6a8db56143ee1.jpeg",
    "category": "Jules Jordan Video",
    "studio": "Jules Jordan Video",
    "quality": "1080p",
    "duration": "2 hrs. 8 mins.",
    "cast": [
      "Jane Wilde",
      "Kitana Montana",
      "Lily Starfire",
      "Scarlett Alexis",
      "Manuel Ferrara"
    ],
    "genres": [
      "Anal",
      "Appearance",
      "Ass to Mouth",
      "Big Butt",
      "Big Dicks",
      "Big Tits",
      "Black Women",
      "Clothing",
      "Ethnic",
      "International Star Showcase",
      "Interracial",
      "Interracial - Black Girls",
      "Interracial - Caucasian Men",
      "Lingerie",
      "Star Showcase"
    ],
    "tags": [
      "Anal",
      "Appearance",
      "Ass to Mouth",
      "Big Butt",
      "Big Dicks",
      "Big Tits",
      "Black Women",
      "Clothing",
      "Ethnic",
      "International Star Showcase",
      "Interracial",
      "Interracial - Black Girls",
      "Interracial - Caucasian Men",
      "Lingerie",
      "Star Showcase"
    ],
    "synopsis": "Scarlett Alexis takes every inch of cock in her ass. Jade Wilde opens up her asshole for Manuel Ferrara. Kitana Montana is a big tit anal cum slut and ebony goddess Lily Starfire gets deep anal penetration.",
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "duration": "41:08",
        "size": "1.62 GB",
        "streamUrl": "https://stream.xcloud1.lol/0c18af4f5f64a97",
        "downloadUrl": "https://xcloud1.lol/0c18af4f5f64a97"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "21:31",
        "size": "861 MB",
        "streamUrl": "https://stream.xcloud1.lol/bf5f4bdd879f2f9",
        "downloadUrl": "https://xcloud1.lol/bf5f4bdd879f2f9"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "33:22",
        "size": "1.33 GB",
        "streamUrl": "https://stream.xcloud1.lol/3b70a018f655caf",
        "downloadUrl": "https://xcloud1.lol/3b70a018f655caf"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "29:08",
        "size": "1.14 GB",
        "streamUrl": "https://stream.xcloud1.lol/8d43bd4db4e2593",
        "downloadUrl": "https://xcloud1.lol/8d43bd4db4e2593"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/08/25/6a8db50557837.jpeg",
      "https://imgtraffic.com/1/2026/08/25/6a8db50565777.jpeg",
      "https://imgtraffic.com/1/2026/08/25/6a8db5057d4c7.jpeg",
      "https://imgtraffic.com/1/2026/08/25/6a8db5058a74d.jpeg"
    ],
    "releaseYear": "2026"
  },
  {
    "id": "movie-20",
    "title": "Mine Are Big And Natural [Mile High Media 2026] XXX WEB-DL 1080p",
    "cleanTitle": "Mine Are Big And Natural",
    "thumbnail": "https://imgxclub.com/p/2026/10/15/6ad00885b7fcb.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/15/6ad00885b7fcb.jpeg",
    "category": "Mile High Media",
    "studio": "Mile High Media",
    "quality": "1080p",
    "duration": "1 hr 36 min",
    "cast": [
      "Ashlyn Peaks",
      "Crystal Chase",
      "Oklahoma",
      "Vanessa Leon"
    ],
    "tags": [],
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "duration": "24:01",
        "size": "1015 MB",
        "streamUrl": "https://stream.xcloud1.lol/f851c1e37e4df88",
        "downloadUrl": "https://xcloud1.lol/f851c1e37e4df88"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "24:07",
        "size": "1002 MB",
        "streamUrl": "https://stream.xcloud1.lol/b1a2c15c246b747",
        "downloadUrl": "https://xcloud1.lol/b1a2c15c246b747"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "27:27",
        "size": "1.11 GB",
        "streamUrl": "https://stream.xcloud1.lol/f9c21e749b5439c",
        "downloadUrl": "https://xcloud1.lol/f9c21e749b5439c"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "21:21",
        "size": "875 MB",
        "streamUrl": "https://stream.xcloud1.lol/7a9eac82ab60e95",
        "downloadUrl": "https://xcloud1.lol/7a9eac82ab60e95"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/15/6ad00813ad66b.jpeg",
      "https://imgtraffic.com/1/2026/10/15/6ad00813bb269.jpeg",
      "https://imgtraffic.com/1/2026/10/15/6ad00813e0f2d.jpeg",
      "https://imgtraffic.com/1/2026/10/15/6ad00813ed9f0.jpeg"
    ],
    "releaseYear": "2026"
  },
  {
    "id": "movie-19",
    "title": "Nymphomanic Fuck Sluts [Traudich 2026] XXX WEB-DL 1080p",
    "cleanTitle": "Nymphomanic Fuck Sluts",
    "thumbnail": "https://imgxclub.com/p/2026/10/15/6ad00884a58b7.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/15/6ad00884a58b7.jpeg",
    "category": "Zero Tolerance",
    "studio": "Traudich",
    "quality": "1080p",
    "duration": "1 hr 57 Min",
    "cast": [
      "Kitty",
      "Laura",
      "Lia Amalia",
      "Maria Gail",
      "Yoshira",
      "Jean Pallett"
    ],
    "tags": [],
    "synopsis": "If there's one thing that can never be said about the sluts in this wonderful adventure, it's that they're not enthusiastic when it comes to satisfying the hard dicks they get rewarded with. Indeed, if the thought of watching a collection of cock-hungry whores living their dreams for the camera is the kind of thing that turns you on, then rest assured that you've literally come to the right place here. No question about it, there's not a moment of hesitancy from the sluts in question as they get down on their knees and worship one thick, meaty schlong after the next for all the world to see, before opening their legs and riding those same cocks hard for all they're worth. Culminating in the kind of cum-inducing climax that'll leave you utterly dry.",
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "duration": "24:14",
        "size": "929 MB",
        "streamUrl": "https://stream.xcloud1.lol/39a6b4e389a95dd",
        "downloadUrl": "https://xcloud1.lol/39a6b4e389a95dd"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "20:32",
        "size": "814 MB",
        "streamUrl": "https://stream.xcloud1.lol/d0045a3462b3bc6",
        "downloadUrl": "https://xcloud1.lol/d0045a3462b3bc6"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "22:42",
        "size": "897 MB",
        "streamUrl": "https://stream.xcloud1.lol/4e0629ce4f74e88",
        "downloadUrl": "https://xcloud1.lol/4e0629ce4f74e88"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "25:32",
        "size": "1004 MB",
        "streamUrl": "https://stream.xcloud1.lol/5ce743ab020aa5c",
        "downloadUrl": "https://xcloud1.lol/5ce743ab020aa5c"
      },
      {
        "sceneNumber": 5,
        "title": "Scene 5",
        "filename": "scene-5.mp4",
        "duration": "24:39",
        "size": "914 MB",
        "streamUrl": "https://stream.xcloud1.lol/68ae6edec0a8e4e",
        "downloadUrl": "https://xcloud1.lol/68ae6edec0a8e4e"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/15/6ad007fb69139.jpeg",
      "https://imgtraffic.com/1/2026/10/15/6ad007fb761b0.jpeg",
      "https://imgtraffic.com/1/2026/10/15/6ad007fb82e92.jpeg",
      "https://imgtraffic.com/1/2026/10/15/6ad007fba1d7e.jpeg",
      "https://imgtraffic.com/1/2026/10/15/6ad007fbaef23.jpeg"
    ],
    "releaseYear": "2026"
  },
  {
    "id": "movie-18",
    "title": "Raunchy Times 2 [Zero Tolerance] (2025) HD 1080p",
    "cleanTitle": "Raunchy Times 2",
    "thumbnail": "https://imgxclub.com/p/2026/10/15/6ad0accad8fad.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/15/6ad0accad8fad.jpeg",
    "category": "Zero Tolerance",
    "studio": "Zero Tolerance",
    "quality": "1080p",
    "duration": "02:15:00",
    "cast": [
      "Jenna Starr",
      "Kenna James",
      "Lauren Phillips",
      "Lily Starfire"
    ],
    "genres": [
      "Anal",
      "Big Butt",
      "Big Tits",
      "Blowjob",
      "Cumshot",
      "Creampie",
      "Facial",
      "Redhead"
    ],
    "tags": [
      "Anal",
      "Big Butt",
      "Big Tits",
      "Blowjob",
      "Cumshot",
      "Creampie",
      "Facial",
      "Redhead"
    ],
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "duration": "36:18",
        "size": "1.63 GB",
        "streamUrl": "https://stream.xcloud1.lol/02f3129dabf65ea",
        "downloadUrl": "https://xcloud1.lol/02f3129dabf65ea"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "29:27",
        "size": "1.33 GB",
        "streamUrl": "https://stream.xcloud1.lol/66eb3d4a2d16b4d",
        "downloadUrl": "https://xcloud1.lol/66eb3d4a2d16b4d"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "30:05",
        "size": "1.37 GB",
        "streamUrl": "https://stream.xcloud1.lol/af55672c58b1412",
        "downloadUrl": "https://xcloud1.lol/af55672c58b1412"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "31:14",
        "size": "1.4 GB",
        "streamUrl": "https://stream.xcloud1.lol/f3c682e86a7555d",
        "downloadUrl": "https://xcloud1.lol/f3c682e86a7555d"
      }
    ],
    "screenshots": [
      "https://rintor.space/images/2026/10/14/Raunchy-Times-2-1.jpg",
      "https://rintor.space/images/2026/10/14/Raunchy-Times-2-2.jpg",
      "https://rintor.space/images/2026/10/14/Raunchy-Times-2-3.jpg",
      "https://rintor.space/images/2026/10/14/Raunchy-Times-2-4.jpg"
    ],
    "releaseYear": "2026"
  },
  {
    "id": "movie-17",
    "title": "Big Tit Bimbofication 2 [ 2026] | Watch Free Porn Video",
    "cleanTitle": "Big Tit Bimbofication 2",
    "thumbnail": "https://imgxclub.com/p/2026/10/13/6ace9e8769faf.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/13/6ace9e8769faf.jpeg",
    "category": "The Score Group",
    "studio": "The Score Group",
    "quality": "1080p",
    "duration": "2 hrs 3 mins",
    "cast": [
      "Crystal Taylor",
      "Jessy Bunny",
      "Lia Lovely",
      "Patty Michova"
    ],
    "genres": [
      "Age",
      "Appearance",
      "Big Butt",
      "Big Dicks",
      "Big Tits",
      "Black Women",
      "Ethnic",
      "Interracial",
      "Interracial - Black Girls",
      "Interracial - Caucasian Men",
      "MILF",
      "Niche",
      "Tit Fucking",
      "Voluptuous"
    ],
    "tags": [
      "Age",
      "Appearance",
      "Big Butt",
      "Big Dicks",
      "Big Tits",
      "Black Women",
      "Ethnic",
      "Interracial",
      "Interracial - Black Girls",
      "Interracial - Caucasian Men",
      "MILF",
      "Niche",
      "Tit Fucking",
      "Voluptuous"
    ],
    "synopsis": "Step into a world where bimbos rule and fantasies come to life. Welcome to a world where bold beauty and over-the-top tits take center stage. Patty is showing off her latest artwork to a coworker, but his attention drifts from the canvas to the true masterpiece-her irresistible body.",
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "duration": "29:55",
        "size": "1.17 GB",
        "streamUrl": "https://stream.xcloud1.lol/b95f0d5edb1e621",
        "downloadUrl": "https://xcloud1.lol/b95f0d5edb1e621"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "32:01",
        "size": "1.22 GB",
        "streamUrl": "https://stream.xcloud1.lol/38665a0f3f390f8",
        "downloadUrl": "https://xcloud1.lol/38665a0f3f390f8"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "31:01",
        "size": "1.18 GB",
        "streamUrl": "https://stream.xcloud1.lol/0157a5c3675931a",
        "downloadUrl": "https://xcloud1.lol/0157a5c3675931a"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "30:36",
        "size": "1.18 GB",
        "streamUrl": "https://stream.xcloud1.lol/7bfc20f2b9ba6eb",
        "downloadUrl": "https://xcloud1.lol/7bfc20f2b9ba6eb"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/13/6ace9dc7ddf47.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9dc7eaca7.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9dc80348a.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9dc810010.jpeg"
    ],
    "releaseYear": "2026"
  },
  {
    "id": "movie-16",
    "title": "Butt Stuffed Babes [2026] | Free Porn Videos",
    "cleanTitle": "Butt Stuffed Babes",
    "thumbnail": "https://imgxclub.com/p/2026/10/13/6ace9e8cc9aef.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/13/6ace9e8cc9aef.jpeg",
    "category": "All Niche Productions",
    "studio": "All Niche Productions",
    "quality": "1080p",
    "duration": "1 hrs.  33 min.",
    "cast": [
      "Ludmilla",
      "Maya Simpson",
      "Assia",
      "Jennifer"
    ],
    "tags": [],
    "synopsis": "Nasty euro sluts want their asses eaten, fucked and filled up! These butt stuffed babes are desperate for a hot beef injection right up their sweet pink assholes!",
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "duration": "20:05",
        "size": "825 MB",
        "streamUrl": "https://stream.xcloud1.lol/abee873572f41b9",
        "downloadUrl": "https://xcloud1.lol/abee873572f41b9"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "20:05",
        "size": "824 MB",
        "streamUrl": "https://stream.xcloud1.lol/0942b45f0b2dac7",
        "downloadUrl": "https://xcloud1.lol/0942b45f0b2dac7"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "23:59",
        "size": "941 MB",
        "streamUrl": "https://stream.xcloud1.lol/45eabdc38a6f97a",
        "downloadUrl": "https://xcloud1.lol/45eabdc38a6f97a"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "29:35",
        "size": "1.19 GB",
        "streamUrl": "https://stream.xcloud1.lol/8cc163053bac087",
        "downloadUrl": "https://xcloud1.lol/8cc163053bac087"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/13/6ace9dfd23bc4.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9dfd3504b.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9dfd4e1d8.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9dfd5acb4.jpeg"
    ],
    "releaseYear": "2026"
  },
  {
    "id": "movie-15",
    "title": "For The Girls [Lesbea 2026] | Watch Free Porn Video",
    "cleanTitle": "For The Girls",
    "thumbnail": "https://imgxclub.com/p/2026/10/13/6ace9e84e4df4.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/13/6ace9e84e4df4.jpeg",
    "category": "Lesbea",
    "studio": "Lesbea",
    "quality": "1080p",
    "duration": "01:30:52",
    "cast": [
      "Emylia Argan",
      "Izzy Delphine",
      "Lady Dee",
      "Lovita Fate",
      "Lucy Mendez",
      "Mini MitziX",
      "Olivia Zlota",
      "Shona River",
      "Una Fairy"
    ],
    "tags": [],
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "duration": "25:54",
        "size": "999 MB",
        "streamUrl": "https://stream.xcloud1.lol/bbfac27ff16d479",
        "downloadUrl": "https://xcloud1.lol/bbfac27ff16d479"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "26:20",
        "size": "994 MB",
        "streamUrl": "https://stream.xcloud1.lol/8b13b59538c3717",
        "downloadUrl": "https://xcloud1.lol/8b13b59538c3717"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "22:34",
        "size": "856 MB",
        "streamUrl": "https://stream.xcloud1.lol/50842ac631d36d5",
        "downloadUrl": "https://xcloud1.lol/50842ac631d36d5"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "20:26",
        "size": "775 MB",
        "streamUrl": "https://stream.xcloud1.lol/d71638c96590c6f",
        "downloadUrl": "https://xcloud1.lol/d71638c96590c6f"
      },
      {
        "sceneNumber": 5,
        "title": "Scene 5",
        "filename": "scene-5.mp4",
        "duration": "19:25",
        "size": "737 MB",
        "streamUrl": "https://stream.xcloud1.lol/1340f9d45626734",
        "downloadUrl": "https://xcloud1.lol/1340f9d45626734"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/13/6ace9da6882f6.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9da694964.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9da6aba64.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9da6e5598.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9da6f2353.jpeg"
    ],
    "releaseYear": "2026"
  },
  {
    "id": "movie-14",
    "title": "Meant To Fuck [2026] | Watch Free Porn Video",
    "cleanTitle": "Meant To Fuck",
    "thumbnail": "https://imgxclub.com/p/2026/10/13/6ace9e928eb99.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/13/6ace9e928eb99.jpeg",
    "category": "Erotica X",
    "studio": "Erotica X",
    "quality": "1080p",
    "duration": "2 hrs. 11 mins.",
    "cast": [
      "Chloe Amour",
      "Gal Ritchie",
      "Katrina Colt",
      "Vanna Bardot",
      "Codey Steele",
      "Lucas Frost",
      "Seth Gamble"
    ],
    "genres": [
      "Appearance",
      "Brunettes",
      "Clothing",
      "Couples",
      "Erotic Vignette",
      "Lingerie",
      "Plot Oriented",
      "Romance"
    ],
    "tags": [
      "Appearance",
      "Brunettes",
      "Clothing",
      "Couples",
      "Erotic Vignette",
      "Lingerie",
      "Plot Oriented",
      "Romance"
    ],
    "synopsis": "Gal Ritchie Shares an Intimate Evening, Passion and Romance With Katrina Colt\nLove and Desire With Vanna Bardot, Chloe Amour and Her Lover's Heated Affair",
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "duration": "30:07",
        "size": "1.13 GB",
        "streamUrl": "https://stream.xcloud1.lol/65aab206fd35b84",
        "downloadUrl": "https://xcloud1.lol/65aab206fd35b84"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "35:48",
        "size": "1.34 GB",
        "streamUrl": "https://stream.xcloud1.lol/c5c49bb0aaef34b",
        "downloadUrl": "https://xcloud1.lol/c5c49bb0aaef34b"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "30:43",
        "size": "1.15 GB",
        "streamUrl": "https://stream.xcloud1.lol/08eeb17c06146b0",
        "downloadUrl": "https://xcloud1.lol/08eeb17c06146b0"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "34:12",
        "size": "1.25 GB",
        "streamUrl": "https://stream.xcloud1.lol/cf52495fb2e3219",
        "downloadUrl": "https://xcloud1.lol/cf52495fb2e3219"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/13/6ace9e45d89ee.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9e45e868e.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9e4613ea8.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9e4620b70.jpeg"
    ],
    "releaseYear": "2026"
  },
  {
    "id": "movie-13",
    "title": "Tight Fit: Jovan Jordan 9 | Free Watch Porn Video",
    "cleanTitle": "Tight Fit: Jovan Jordan 9",
    "thumbnail": "https://imgxclub.com/p/2026/10/13/6ace9e8a28c8b.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/13/6ace9e8a28c8b.jpeg",
    "category": "True X",
    "studio": "True X",
    "quality": "1080p",
    "duration": "2 hrs. 29 mins.",
    "cast": [
      "Avery Wilds",
      "Frenchy",
      "Rose Carter",
      "Spencer Scott",
      "Jovan Jordan"
    ],
    "genres": [
      "Appearance",
      "BBC",
      "Black Men",
      "Ethnic",
      "Interracial",
      "Interracial - Black Men",
      "Interracial - Caucasian Girls",
      "Petite",
      "Star Showcase"
    ],
    "tags": [
      "Appearance",
      "BBC",
      "Black Men",
      "Ethnic",
      "Interracial",
      "Interracial - Black Men",
      "Interracial - Caucasian Girls",
      "Petite",
      "Star Showcase"
    ],
    "synopsis": "A dick this big will always put a smile on a queen's face. Petite Rose takes on a cock that is almost as big as she is.",
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "duration": "36:38",
        "size": "1.48 GB",
        "streamUrl": "https://stream.xcloud1.lol/dae0318200accbf",
        "downloadUrl": "https://xcloud1.lol/dae0318200accbf"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "36:14",
        "size": "1.45 GB",
        "streamUrl": "https://stream.xcloud1.lol/da464cc1d027c6b",
        "downloadUrl": "https://xcloud1.lol/da464cc1d027c6b"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "34:54",
        "size": "1.39 GB",
        "streamUrl": "https://stream.xcloud1.lol/7b024d881ccaaa1",
        "downloadUrl": "https://xcloud1.lol/7b024d881ccaaa1"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "40:27",
        "size": "1.54 GB",
        "streamUrl": "https://stream.xcloud1.lol/40cbe880bf58c3f",
        "downloadUrl": "https://xcloud1.lol/40cbe880bf58c3f"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/13/6ace9de0f1eb9.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9de117473.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9de133b83.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9de140353.jpeg"
    ],
    "releaseYear": "2026"
  },
  {
    "id": "movie-12",
    "title": "WTF You Cant Do That At A Wedding | Free Watch Porn Video",
    "cleanTitle": "WTF You Cant Do That At A Wedding",
    "thumbnail": "https://imgxclub.com/p/2026/10/13/6ace9e8fa3b87.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/13/6ace9e8fa3b87.jpeg",
    "category": "Devils Film",
    "studio": "Devils Film",
    "quality": "1080p",
    "duration": "2h 10min",
    "cast": [
      "Ameena Green",
      "Elizabeth Skylar",
      "Lexi Lore",
      "Stella Luxx",
      "Axel Haze",
      "Jason Sarcinelli",
      "Seth Gamble",
      "Will Pounder"
    ],
    "tags": [],
    "synopsis": "Stella Luxx and Will Pounder\nLexi Lore and Seth Gamble\nElizabeth Skylar and Axel Haze\nAmeena Green and Jason Sarcinelli",
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "duration": "31:21",
        "size": "1.29 GB",
        "streamUrl": "https://stream.xcloud1.lol/496edc98d0c8a6e",
        "downloadUrl": "https://xcloud1.lol/496edc98d0c8a6e"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "32:33",
        "size": "1.31 GB",
        "streamUrl": "https://stream.xcloud1.lol/f98b55c2d5f3a07",
        "downloadUrl": "https://xcloud1.lol/f98b55c2d5f3a07"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "31:17",
        "size": "1.26 GB",
        "streamUrl": "https://stream.xcloud1.lol/09abdf263fbdfe6",
        "downloadUrl": "https://xcloud1.lol/09abdf263fbdfe6"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "33:49",
        "size": "1.38 GB",
        "streamUrl": "https://stream.xcloud1.lol/3b8a621475db3b4",
        "downloadUrl": "https://xcloud1.lol/3b8a621475db3b4"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/13/6ace9e1d6d3be.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9e1d7b713.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9e1d88320.jpeg",
      "https://imgtraffic.com/1/2026/10/13/6ace9e1d94e00.jpeg"
    ],
    "releaseYear": "2026"
  },
  {
    "id": "movie-11",
    "title": "Anal Teachings 2026 | Free Watch Porn Video",
    "cleanTitle": "Anal Teachings 2026",
    "thumbnail": "https://imgxclub.com/p/2026/10/12/6accc803cfda4.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/12/6accc803cfda4.jpeg",
    "category": "Evil Angel",
    "studio": "Evil Angel",
    "quality": "720p",
    "duration": "2 hrs and 45 min",
    "cast": [
      "Dallas Rae",
      "Julia James",
      "McKenzie Mae",
      "Nicole Nichols"
    ],
    "genres": [
      "Anal",
      "Blowjob",
      "Cumshot",
      "Facial",
      "Rough Sex"
    ],
    "tags": [
      "Anal",
      "Blowjob",
      "Cumshot",
      "Facial",
      "Rough Sex"
    ],
    "synopsis": "Anal Teachings [Evil Angel] (2026) HD 720p Split Scenes",
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "duration": "27:56",
        "size": "775 MB",
        "streamUrl": "https://stream.xcloud1.lol/acf5f46ec34c2c7",
        "downloadUrl": "https://xcloud1.lol/acf5f46ec34c2c7"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "42:05",
        "size": "995 MB",
        "streamUrl": "https://stream.xcloud1.lol/d27d3e9f1e8ece0",
        "downloadUrl": "https://xcloud1.lol/d27d3e9f1e8ece0"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "47:05",
        "size": "1.09 GB",
        "streamUrl": "https://stream.xcloud1.lol/ada8292e3167101",
        "downloadUrl": "https://xcloud1.lol/ada8292e3167101"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "46:30",
        "size": "1.08 GB",
        "streamUrl": "https://stream.xcloud1.lol/69b35147283c244",
        "downloadUrl": "https://xcloud1.lol/69b35147283c244"
      }
    ],
    "screenshots": [
      "https://rintor.space/images/2026/10/07/Anal-Teachings-1.jpg",
      "https://rintor.space/images/2026/10/07/Anal-Teachings-2.jpg",
      "https://rintor.space/images/2026/10/07/Anal-Teachings-3.jpg",
      "https://rintor.space/images/2026/10/07/Anal-Teachings-4.jpg"
    ],
    "releaseYear": "2026"
  },
  {
    "id": "movie-10",
    "title": "Hello Titties! | Free Watch Porn Video",
    "thumbnail": "https://imgxclub.com/p/2026/10/12/6acc20fb1204e.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/12/6acc20fb1204e.jpeg",
    "category": "All Niche Productions",
    "studio": "All Niche Productions",
    "quality": "1080p",
    "duration": "1 hr  43 mins",
    "cast": [
      "Katie Kox",
      "Honey West",
      "Mitch Hawkins",
      "Trinity Maze",
      "Mark Zane",
      "Juliana Jolene",
      "Jonny Slim"
    ],
    "genres": [
      "Appearance",
      "Big Tits",
      "Blowjobs",
      "Oral"
    ],
    "tags": [
      "Appearance",
      "Big Tits",
      "Blowjobs",
      "Oral"
    ],
    "synopsis": "Sweet babes with impressive tits take on cock every way possible! Ain't much better than a big rack and a tight pussy to fuck, and these horny bimbos want nothing more than to suck and fuck and drain some cock!",
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "duration": "20:25",
        "size": "842 MB",
        "streamUrl": "https://stream.xcloud1.lol/ab293b0df293c65",
        "downloadUrl": "https://xcloud1.lol/ab293b0df293c65"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "27:53",
        "size": "1.12 GB",
        "streamUrl": "https://stream.xcloud1.lol/2b280d0ac47e2f8",
        "downloadUrl": "https://xcloud1.lol/2b280d0ac47e2f8"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "36:30",
        "size": "1.49 GB",
        "streamUrl": "https://stream.xcloud1.lol/79439d8dd33a523",
        "downloadUrl": "https://xcloud1.lol/79439d8dd33a523"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "18:21",
        "size": "749 MB",
        "streamUrl": "https://stream.xcloud1.lol/b9766ef4ea66fce",
        "downloadUrl": "https://xcloud1.lol/b9766ef4ea66fce"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/12/6acc206ca4fd2.jpeg",
      "https://imgtraffic.com/1/2026/10/12/6acc206cb2677.jpeg",
      "https://imgtraffic.com/1/2026/10/12/6acc206ccda32.jpeg",
      "https://imgtraffic.com/1/2026/10/12/6acc206ce8c12.jpeg"
    ],
    "releaseYear": "2026"
  },
  {
    "id": "movie-9",
    "title": "Horny Anal Babes | Free Watch Porn Video",
    "cleanTitle": "Horny Anal Babes",
    "thumbnail": "https://imgxclub.com/p/2026/10/12/6acc20ff4886e.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/12/6acc20ff4886e.jpeg",
    "category": "Evil Angel",
    "studio": "Evil Angel",
    "quality": "1080p",
    "duration": "2 hrs. 25 mins.",
    "cast": [
      "Claire Roos",
      "Jena LaRose",
      "Mercy Muse",
      "Texas Patti",
      "Mick Blue"
    ],
    "genres": [
      "4K Ultra HD",
      "Anal",
      "Appearance",
      "Ass to Mouth",
      "Big Dicks",
      "Creampie",
      "Cumshots",
      "Deep Throat",
      "Gaping",
      "Oral",
      "Short Hair & Pixie"
    ],
    "tags": [
      "Anal",
      "Appearance",
      "Ass to Mouth",
      "Big Dicks",
      "Creampie",
      "Cumshots",
      "Deep Throat",
      "Gaping",
      "Oral",
      "Short Hair & Pixie"
    ],
    "synopsis": "The prurient pornographers at BAM Visions, co-director/award-winning stud Mick Blue and co-director/master cinematographer Maestro Claudio, present hot, lusty ladies that love taking big cocks up the bunghole in Horny Anal Babes. Every scene includes passionate backdoor reaming and tasty, ass-to-mouth fellatio. Curvaceous porn star Jena LaRose models a skimpy swimsuit with matching leg warmers and sexy high heels.",
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "duration": "36:16",
        "size": "1.38 GB",
        "streamUrl": "https://stream.xcloud1.lol/0ec3dd9b1f52eda",
        "downloadUrl": "https://xcloud1.lol/0ec3dd9b1f52eda"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "35:42",
        "size": "1.33 GB",
        "streamUrl": "https://stream.xcloud1.lol/dbb2adc88a8f34b",
        "downloadUrl": "https://xcloud1.lol/dbb2adc88a8f34b"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "36:42",
        "size": "1.38 GB",
        "streamUrl": "https://stream.xcloud1.lol/609a693241e021b",
        "downloadUrl": "https://xcloud1.lol/609a693241e021b"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "34:04",
        "size": "1.28 GB",
        "streamUrl": "https://stream.xcloud1.lol/47ac99dfbbbbfda",
        "downloadUrl": "https://xcloud1.lol/47ac99dfbbbbfda"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/12/6acc209e88061.jpeg",
      "https://imgtraffic.com/1/2026/10/12/6acc209e99939.jpeg",
      "https://imgtraffic.com/1/2026/10/12/6acc209ea619a.jpeg",
      "https://imgtraffic.com/1/2026/10/12/6acc209eb2b13.jpeg"
    ],
    "releaseYear": "2026"
  },
  {
    "id": "movie-8",
    "title": "The Return Of The Wedding Crasher | Free Watch Porn Video",
    "cleanTitle": "The Return Of The Wedding Crasher",
    "thumbnail": "https://media.themoviedb.org/t/p/w440_and_h660_face/z7u0x2mnoXJPqdX1uek4bvgQpZD.jpg",
    "poster": "https://media.themoviedb.org/t/p/w440_and_h660_face/z7u0x2mnoXJPqdX1uek4bvgQpZD.jpg",
    "category": "Life Selector",
    "studio": "Life Selector",
    "quality": "1080p",
    "duration": "2h 36m",
    "cast": [
      "Alexa Flexy",
      "Alexis Crystal",
      "Eva Generosi",
      "Karina King",
      "Leya Desantis",
      "Lily Blossom",
      "Milan Cheek",
      "Shalina Devine",
      "Frank Major",
      "Kristof Cale"
    ],
    "tags": [],
    "synopsis": "Meet the kinky Waitress (Leya Desantis), discover the secret of the Mother of the Bride (Shalina Devine), support the revenge of the Groom's ex (Karina King) and the Bride's ex (Lily Blossom), keep the Sexy Bridesmaid (Alexis Crystal) company with the Groom's pretty guest (Eva Generosi), and help out the Beautiful Bride (Milan Cheek) and her other cute Bridesmaid (Alexa Flexy) in a time of need.",
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "duration": "50:07",
        "size": "1.83 GB",
        "streamUrl": "https://stream.xcloud1.lol/1464a42946eec36",
        "downloadUrl": "https://xcloud1.lol/1464a42946eec36"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "25:15",
        "size": "950 MB",
        "streamUrl": "https://stream.xcloud1.lol/a9be8909dbf4342",
        "downloadUrl": "https://xcloud1.lol/a9be8909dbf4342"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "45:12",
        "size": "1.68 GB",
        "streamUrl": "https://stream.xcloud1.lol/f90d73c671b492c",
        "downloadUrl": "https://xcloud1.lol/f90d73c671b492c"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "35:31",
        "size": "1.28 GB",
        "streamUrl": "https://stream.xcloud1.lol/626b63205d991d4",
        "downloadUrl": "https://xcloud1.lol/626b63205d991d4"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/12/6acc20d44915d.jpeg",
      "https://imgtraffic.com/1/2026/10/12/6acc20d45ac87.jpeg",
      "https://imgtraffic.com/1/2026/10/12/6acc20d48465c.jpeg",
      "https://imgtraffic.com/1/2026/10/12/6acc20d490ec8.jpeg"
    ],
    "releaseYear": "2024"
  },
  {
    "id": "movie-7",
    "title": "True Amateurs Homemade Anal 2 | Free Watch Porn Video",
    "cleanTitle": "True Amateurs Homemade Anal 2",
    "thumbnail": "https://imgxclub.com/p/2026/10/12/6acc21018beab.jpeg",
    "poster": "https://imgxclub.com/p/2026/10/12/6acc21018beab.jpeg",
    "category": "True Amateurs",
    "studio": "True Amateurs",
    "quality": "HD",
    "duration": "1 hrs. 33 mins.",
    "genres": [
      "Amateur",
      "Anal",
      "Blowjobs",
      "Couples",
      "Gonzo",
      "Homemade Movies",
      "Oral",
      "POV"
    ],
    "tags": [
      "Amateur",
      "Anal",
      "Blowjobs",
      "Couples",
      "Gonzo",
      "Homemade Movies",
      "Oral",
      "POV"
    ],
    "synopsis": "True Amateurs: Homemade Anal 2 shows real amateur couples who love to please their partners anyway possible, including hot anal sex.",
    "splitScenes": true,
    "scenes": [
      {
        "sceneNumber": 1,
        "title": "Scene 1",
        "filename": "scene-1.mp4",
        "duration": "13:28",
        "size": "198 MB",
        "streamUrl": "https://stream.xcloud1.lol/1390e9306073711",
        "downloadUrl": "https://xcloud1.lol/1390e9306073711"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "18:03",
        "size": "266 MB",
        "streamUrl": "https://stream.xcloud1.lol/823d3c43d086955",
        "downloadUrl": "https://xcloud1.lol/823d3c43d086955"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "23:09",
        "size": "319 MB",
        "streamUrl": "https://stream.xcloud1.lol/779b587da8a44bc",
        "downloadUrl": "https://xcloud1.lol/779b587da8a44bc"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "20:43",
        "size": "304 MB",
        "streamUrl": "https://stream.xcloud1.lol/844e1d66adc66c2",
        "downloadUrl": "https://xcloud1.lol/844e1d66adc66c2"
      },
      {
        "sceneNumber": 5,
        "title": "Scene 5",
        "filename": "scene-5.mp4",
        "duration": "18:30",
        "size": "269 MB",
        "streamUrl": "https://stream.xcloud1.lol/16a1ddcf8771a08",
        "downloadUrl": "https://xcloud1.lol/16a1ddcf8771a08"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/12/6acc20b88adf6.jpeg",
      "https://imgtraffic.com/1/2026/10/12/6acc20b898572.jpeg",
      "https://imgtraffic.com/1/2026/10/12/6acc20b8c15db.jpeg",
      "https://imgtraffic.com/1/2026/10/12/6acc20b8d5e12.jpeg",
      "https://imgtraffic.com/1/2026/10/12/6acc20b8e2a4a.jpeg"
    ],
    "releaseYear": "2026"
  },
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
        "duration": "38:26",
        "size": "1.41 GB",
        "streamUrl": "https://stream.xcloud1.lol/5e4006eb0692c53",
        "downloadUrl": "https://xcloud1.lol/5e4006eb0692c53"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "31:45",
        "size": "1.18 GB",
        "streamUrl": "https://stream.xcloud1.lol/63a9e0d4f55ec07",
        "downloadUrl": "https://xcloud1.lol/63a9e0d4f55ec07"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "43:22",
        "size": "1.59 GB",
        "streamUrl": "https://stream.xcloud1.lol/d52a009310b0bd9",
        "downloadUrl": "https://xcloud1.lol/d52a009310b0bd9"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/06/6ac4e4954a8ec.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4955ec97.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4958976f.jpeg"
    ],
    "releaseYear": "2026"
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
        "duration": "28:33",
        "size": "1.12 GB",
        "streamUrl": "https://stream.xcloud1.lol/41dc23373fdedb0",
        "downloadUrl": "https://xcloud1.lol/41dc23373fdedb0"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "31:15",
        "size": "1.21 GB",
        "streamUrl": "https://stream.xcloud1.lol/79c813c68d92ae9",
        "downloadUrl": "https://xcloud1.lol/79c813c68d92ae9"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "24:03",
        "size": "955 MB",
        "streamUrl": "https://stream.xcloud1.lol/d7469af40ccd001",
        "downloadUrl": "https://xcloud1.lol/d7469af40ccd001"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "44:35",
        "size": "1.79 GB",
        "streamUrl": "https://stream.xcloud1.lol/7cdb46425a20e1a",
        "downloadUrl": "https://xcloud1.lol/7cdb46425a20e1a"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/06/6ac4e45b852ce.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e45b96536.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e45bb0d54.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e45bcded5.jpeg"
    ],
    "releaseYear": "2026"
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
        "duration": "23:59",
        "size": "1009 MB",
        "streamUrl": "https://stream.xcloud1.lol/897bba87653868c",
        "downloadUrl": "https://xcloud1.lol/897bba87653868c"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "24:07",
        "size": "987 MB",
        "streamUrl": "https://stream.xcloud1.lol/daa7f6f3ccae69a",
        "downloadUrl": "https://xcloud1.lol/daa7f6f3ccae69a"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "24:03",
        "size": "965 MB",
        "streamUrl": "https://stream.xcloud1.lol/ef83d8fb4fb8525",
        "downloadUrl": "https://xcloud1.lol/ef83d8fb4fb8525"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "24:45",
        "size": "991 MB",
        "streamUrl": "https://stream.xcloud1.lol/7b5ed8e2484e02f",
        "downloadUrl": "https://xcloud1.lol/7b5ed8e2484e02f"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/06/6ac4e4761e5bb.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e476364b0.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4765c6c8.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4767aaba.jpeg"
    ],
    "releaseYear": "2026"
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
        "duration": "16:49",
        "size": "664 MB",
        "streamUrl": "https://stream.xcloud1.lol/78dac80b97fb963",
        "downloadUrl": "https://xcloud1.lol/78dac80b97fb963"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "11:16",
        "size": "475 MB",
        "streamUrl": "https://stream.xcloud1.lol/be6e6120097e65b",
        "downloadUrl": "https://xcloud1.lol/be6e6120097e65b"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "12:04",
        "size": "488 MB",
        "streamUrl": "https://stream.xcloud1.lol/614b98f15b56356",
        "downloadUrl": "https://xcloud1.lol/614b98f15b56356"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "scene-4.mp4",
        "duration": "19:23",
        "size": "753 MB",
        "streamUrl": "https://stream.xcloud1.lol/6996746338839e4",
        "downloadUrl": "https://xcloud1.lol/6996746338839e4"
      },
      {
        "sceneNumber": 5,
        "title": "Scene 5",
        "filename": "scene-5.mp4",
        "duration": "27:37",
        "size": "1.12 GB",
        "streamUrl": "https://stream.xcloud1.lol/3e1fb3645b07bad",
        "downloadUrl": "https://xcloud1.lol/3e1fb3645b07bad"
      },
      {
        "sceneNumber": 6,
        "title": "Scene 6",
        "filename": "scene-6.mp4",
        "duration": "41:39",
        "size": "1.62 GB",
        "streamUrl": "https://stream.xcloud1.lol/1f9662de01ba092",
        "downloadUrl": "https://xcloud1.lol/1f9662de01ba092"
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
    "releaseYear": "2026"
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
        "duration": "29:27",
        "size": "1.14 GB",
        "streamUrl": "https://stream.xcloud1.lol/04745a62b1ece86",
        "downloadUrl": "https://xcloud1.lol/04745a62b1ece86"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "scene-2.mp4",
        "duration": "37:32",
        "size": "1.45 GB",
        "streamUrl": "https://stream.xcloud1.lol/4a4c3a02d121a60",
        "downloadUrl": "https://xcloud1.lol/4a4c3a02d121a60"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "scene-3.mp4",
        "duration": "24:25",
        "size": "906 MB",
        "streamUrl": "https://stream.xcloud1.lol/0814c8b65cdf20b",
        "downloadUrl": "https://xcloud1.lol/0814c8b65cdf20b"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/06/6ac4e4414f9e3.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e441608ae.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4419ab74.jpeg"
    ],
    "releaseYear": "2026"
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
        "duration": "00:35:20",
        "size": "1.33 GB",
        "streamUrl": "https://stream.xcloud1.lol/8575f8e52e87c41",
        "downloadUrl": "https://xcloud1.lol/8575f8e52e87c41"
      },
      {
        "sceneNumber": 2,
        "title": "Scene 2",
        "filename": "MILFY - Women And Boys 3 Scene 2 1080p.mp4",
        "duration": "00:34:26",
        "size": "1.28 GB",
        "streamUrl": "https://stream.xcloud1.lol/0b74c63fae43944",
        "downloadUrl": "https://xcloud1.lol/0b74c63fae43944"
      },
      {
        "sceneNumber": 3,
        "title": "Scene 3",
        "filename": "MILFY - Women And Boys 3 Scene 3 1080p.mp4",
        "duration": "00:37:24",
        "size": "1.37 GB",
        "streamUrl": "https://stream.xcloud1.lol/a3c21a5656b5bca",
        "downloadUrl": "https://xcloud1.lol/a3c21a5656b5bca"
      },
      {
        "sceneNumber": 4,
        "title": "Scene 4",
        "filename": "MILFY - Women And Boys 3 Scene 4 1080p.mp4",
        "duration": "00:37:06",
        "size": "1.3 GB",
        "streamUrl": "https://stream.xcloud1.lol/6471f736bf7ee3e",
        "downloadUrl": "https://xcloud1.lol/6471f736bf7ee3e"
      }
    ],
    "screenshots": [
      "https://imgtraffic.com/1/2026/10/06/6ac4e4cb1ab28.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4cb2b10d.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4cb6ab62.jpeg",
      "https://imgtraffic.com/1/2026/10/06/6ac4e4cb77430.jpeg"
    ],
    "releaseYear": "2026"
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
