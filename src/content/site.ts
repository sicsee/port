// Centralized site content. Edit values here — the UI reads everything from this file.

export const site = {
  name: 'Nicolas David',
  handle: 'Nicolas David',
  role: 'Backend Developer',
  title: 'Nicolas David',
  description:
    'Full stack developer building clean, performant web applications with React, Node.js and PostgreSQL.',
  email: 'nicolas@nicolasdavid.dev',
  links: {
    github: 'https://github.com/sicsee',
    linkedin: 'https://linkedin.com/in/nicolasdavid',
    // TODO: attach real resume file to /public and point to it
    resume: '/resume.pdf',
  },
  githubUser: 'sicsee',
} as const;

export const intro =
  "hey, i'm nicolas — a full stack developer who builds clean, performant web apps with react, node and postgresql.\n" +
  "apart from code, you'll find me tinkering with game scripts or deep in a knowledge base.";

// TODO: review/replace with real work history (periods, durations, descriptions).
export type Experience = {
  role: string;
  company: string;
  dates: string;
  duration: string;
  description?: string;
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    dates: '2024 — now',
    duration: 'ongoing',
    description:
      'designing and shipping full stack web apps for clients — e-commerce with stripe, landing pages and custom tools.',
    current: true,
  },
  {
    role: 'Independent Projects',
    company: 'Personal',
    dates: '2022 — 2024',
    duration: '2 years',
    description:
      'built roblox tooling (luau, raycasting), a habit tracker with a telegram bot, and obsidian knowledge-base workflows.',
  },
];

// TODO: replace with real education history.
export type Education = {
  degree: string;
  school: string;
  dates: string;
};

export const education: Education[] = [
  {
    degree: 'Computer Science',
    school: 'Your University',
    dates: '2022 — 2026',
  },
];

export type Project = {
  // slug that links to the case-study page (/projects/[slug]) —
  // must match carouselProjects[].slug when set
  slug?: string;
  title: string;
  description: string;
  href?: string;
};

// TODO: add real repo/demo URLs.
export const projects: Project[] = [
  {
    slug: 'la-ascensao',
    title: 'La Ascensión',
    description: 'E-commerce for a clothing brand — cart, checkout and payments via stripe.',
    // href: "https://…",
  },
  {
    slug: 'aim-trainer',
    title: 'Roblox Aim Trainer',
    description: 'Aim trainer in the style of aim lab / kovaaks, built with luau and raycasting.',
    // href: "https://…",
  },
  {
    slug: 'habit-tracker',
    title: 'Habit Tracker',
    description: 'Habit tracker with a contribution-style heatmap, dashboard and a telegram bot.',
    // href: "https://…",
  },
  {
    slug: 'si-sociedade',
    title: 'SI e Sociedade',
    description:
      'Knowledge base for an information-society course, organized as a zettelkasten with dataview.',
    // href: "https://…",
  },
  {
    slug: 'velocegarage',
    title: 'VeloceGarage',
    description: 'Landing page for an auto repair shop — fast, responsive and self-contained.',
    // href: "https://…",
  },
  {
    slug: 'portfolio-v1',
    title: 'Portfolio v1',
    description: 'First version of this portfolio — next.js 14 with framer motion.',
    // href: "https://…",
  },
];

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export type Skill = {
  name: string;
  /** devicon classes (both alias generations, e.g. "devicon-nodejs-plain devicon-nodejsdevicon") */
  icon?: string;
  /** 5 = core/daily driver … 1 = touched once */
  level: SkillLevel;
  /** short line shown on hover */
  blurb: string;
  /** titles of projects where it was used; `slug` links the name when set */
  usedIn: { title: string; slug?: string }[];
};

export const skillsIntro =
  "tools i've picked up building web apps with react and node.";

export const skills: Skill[] = [
  {
    name: 'React',
    icon: 'devicon-react-original',
    level: 5,
    blurb: 'core stack — everything i build on the web goes through it.',
    usedIn: [
      { title: 'La Ascensión', slug: 'la-ascensao' },
      { title: 'Portfolio v1', slug: 'portfolio-v1' },
    ],
  },
  {
    name: 'Next.js',
    icon: 'devicon-nextjs-original',
    level: 4,
    blurb: 'my default full stack framework, from routing to deploy.',
    usedIn: [{ title: 'Portfolio v1', slug: 'portfolio-v1' }],
  },
  {
    name: 'TypeScript',
    icon: 'devicon-typescript-plain devicon-typescript-original',
    level: 4,
    blurb: 'strict types wherever JS is allowed to roam.',
    usedIn: [{ title: 'Portfolio v1', slug: 'portfolio-v1' }],
  },
  {
    name: 'Tailwind CSS',
    icon: 'devicon-tailwindcss-plain devicon-tailwindcss-original',
    level: 5,
    blurb: 'utility classes all the way down — this very page.',
    usedIn: [
      { title: 'La Ascensión', slug: 'la-ascensao' },
      { title: 'Portfolio v1', slug: 'portfolio-v1' },
    ],
  },
  {
    name: 'Node.js',
    icon: 'devicon-nodejs-plain',
    level: 4,
    blurb: 'apis, cron jobs and bots — the backend side of my projects.',
    usedIn: [
      { title: 'La Ascensión', slug: 'la-ascensao' },
      { title: 'Habit Tracker', slug: 'habit-tracker' },
    ],
  },
  {
    name: 'MySQL',
    icon: 'devicon-mysql-plain devicon-mysql-original',
    level: 3,
    blurb: 'used for trackers and dashboards before moving to postgres.',
    usedIn: [{ title: 'Habit Tracker', slug: 'habit-tracker' }],
  },
  {
    name: 'PHP',
    icon: 'devicon-php-plain',
    level: 3,
    blurb: 'where my backend journey started — vps deploys included.',
    usedIn: [{ title: 'Habit Tracker', slug: 'habit-tracker' }],
  },
  {
    name: 'Git',
    icon: 'devicon-git-plain',
    level: 4,
    blurb: 'branch, rebase, review — daily workflow tool.',
    usedIn: [{ title: 'every project' }],
  },
];

export const footerNote = 'built with next.js & tailwind css — design inspired by atxl.in';
