// ────────────────────────────────────────────────────────────────
// BLACKBURN REALTY GROUP — IMAGE MANIFEST
// ----------------------------------------------------------------
// Every photo on the site lives here, in ONE place, so you can:
//   1. See at a glance what each slot shows (`intent`)
//   2. Swap an image by changing one `src` line
//   3. Never ship a wrong image silently — each slot is labeled
//
// THE RULE (per Jim): Florida settings ONLY. No foreign homelands.
// Show the FLORIDA LIFE the buyer is moving toward, populated with
// attractive, aspirational PEOPLE thriving *here*.
//
// REAL PHOTOS: slots marked `team: true` are real photos of Olga &
// Jim Blackburn (in /public/images/team). These are approved — the
// label band hides for team photos so they display clean.
// Jim = mortgage/financing. Olga = founder/realty face.
// ────────────────────────────────────────────────────────────────

export interface SiteImage {
  src: string;
  intent: string;
  credit?: string;
  team?: boolean;   // real Olga/Jim photo — display clean, no label
  alt?: string;     // proper alt text for real people
}

// Draws a label band over STOCK images so you can audit for wrong
// shots. Team photos never show a label. Set false before deploy.
export const SHOW_IMAGE_LABELS = true;

const px = (id: string, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const team = (file: string) => `/images/team/${file}`;

export const IMAGES = {
  // ─── HOMEPAGE (front door · silver) ───
  homeHero: {
    src: team('jim-balcony-wide.jpg'),
    intent: 'Jim Blackburn on a Miami balcony, full downtown construction skyline — dimmed behind the title.',
    alt: 'Miami skyline from a Blackburn Realty Group balcony',
    team: true,
    credit: 'Blackburn Realty Group',
  },

  // ─── ABOUT / OUR STORY (soul room · amber) ───
  aboutHero: {
    src: team('olga-red-balcony-skyline.png'),
    intent: 'Olga Blackburn on a Miami balcony against the downtown skyline.',
    alt: 'Olga Blackburn, Founder of Blackburn Realty Group, on a Miami balcony',
    team: true,
    credit: 'Blackburn Realty Group',
  },
  aboutStory1: {
    src: team('olga-blue-seated.png'),
    intent: 'Olga Blackburn, seated portrait.',
    alt: 'Olga Blackburn, Founder of Blackburn Realty Group',
    team: true,
    credit: 'Blackburn Realty Group',
  },
  aboutStory2: {
    src: team('olga-jim-skyline-tall.jpg'),
    intent: 'Olga and Jim Blackburn together, Miami skyline behind them.',
    alt: 'Olga and Jim Blackburn against the Miami skyline',
    team: true,
    credit: 'Blackburn Realty Group',
  },
  aboutInvite: {
    src: team('olga-red-fulllength.png'),
    intent: 'Olga Blackburn, full-length portrait — warm, welcoming close.',
    alt: 'Olga Blackburn, Founder of Blackburn Realty Group',
    team: true,
    credit: 'Blackburn Realty Group',
  },

  // ─── CONTACT (threshold · coral) ───
  contactHero: {
    src: team('jim-olga-pool-1.jpg'),
    intent: 'Olga and Jim Blackburn poolside, Miami skyline — the leadership you reach.',
    alt: 'Olga and Jim Blackburn poolside in Miami',
    team: true,
    credit: 'Blackburn Realty Group',
  },

  // ─── TOOLS (concierge desk · sky-cyan) ───
  // Pre-Approval = mortgage → Jim. Consultation = the team working.
  toolPreapproval: {
    src: team('jim-balcony-laptop-1.jpg'),
    intent: 'Jim Blackburn (mortgage) at his laptop on a Miami balcony — getting you approved.',
    alt: 'Jim Blackburn working on a mortgage pre-approval, Miami skyline behind',
    team: true,
    credit: 'Blackburn Realty Group',
  },
  toolProperty: {
    src: team('jim-olga-balcony-tablet.jpg'),
    intent: 'Olga and Jim Blackburn reviewing listings on a tablet, Miami balcony — the team you search with.',
    alt: 'Olga and Jim Blackburn reviewing property listings together',
    team: true,
    credit: 'Blackburn Realty Group',
  },
  toolHomevalue: {
    src: team('jim-olga-balcony-laptop.jpg'),
    intent: 'Olga and Jim Blackburn at the laptop, Miami balcony — running your home value together.',
    alt: 'Olga and Jim Blackburn reviewing a home valuation',
    team: true,
    credit: 'Blackburn Realty Group',
  },
  toolConsultation: {
    src: team('jim-olga-balcony-looking.jpg'),
    intent: 'Jim and Olga Blackburn talking together on the balcony — booking a conversation.',
    alt: 'Jim and Olga Blackburn in conversation on a Miami balcony',
    team: true,
    credit: 'Blackburn Realty Group',
  },

  // ─── DIY GUIDES (the study · terracotta) ───
  diySell: {
    src: px('7415009', 1600),
    intent: 'FLORIDA home with sale/handover feel — sunlit exterior or interior. In-state, aspirational.',
    credit: 'Pexels',
  },
  diyImprove: {
    src: px('1571460', 1600),
    intent: 'Beautiful renovated FLORIDA interior/exterior — value being added. Bright, upscale, in-state.',
    credit: 'Pexels',
  },
  diyBuy: {
    src: px('1200062', 1600),
    intent: 'International BUYER receiving keys to a Florida home — the purchase moment. People, Florida.',
    credit: 'Pexels',
  },
  // Finance guide = mortgage → Jim.
  diyFinance: {
    src: team('jim-balcony-laptop-3.jpg'),
    intent: 'Jim Blackburn at his laptop on the balcony — the financing expert.',
    alt: 'Jim Blackburn working through mortgage financing, Miami skyline behind',
    team: true,
    credit: 'Blackburn Realty Group',
  },

  // ─── THE KEYES COMPANY (heritage library · bronze) ───
  keyesHero: {
    src: team('jim-olga-balcony-pointing.jpg'),
    intent: 'Olga and Jim Blackburn reviewing plans on a downtown balcony above a rising Florida skyline — hands-on, Florida-rooted leadership.',
    alt: 'Olga and Jim Blackburn reviewing plans on a balcony overlooking a developing Florida skyline',
    team: true,
    credit: 'Blackburn Realty Group',
  },

  // ─── BLOG (the salon · sage) ───
  blogHero: {
    src: team('jim-olga-balcony-pointing.jpg'),
    intent: 'Olga and Jim Blackburn on a Miami balcony, discussing the market — editorial, in-state.',
    alt: 'Olga and Jim Blackburn discussing the Miami market',
    team: true,
    credit: 'Blackburn Realty Group',
  },

  // ─── STANDALONE HEADSHOTS (available for bios / author blocks) ───
  jimHeadshot: {
    src: team('jim-headshot.png'),
    intent: 'Jim Blackburn headshot — mortgage professional.',
    alt: 'Jim Blackburn, Stairway Mortgage',
    team: true,
    credit: 'Blackburn Realty Group',
  },
  olgaHeadshot: {
    src: team('olga-red-headshot.png'),
    intent: 'Olga Blackburn headshot — founder.',
    alt: 'Olga Blackburn, Founder',
    team: true,
    credit: 'Blackburn Realty Group',
  },
} satisfies Record<string, SiteImage>;
