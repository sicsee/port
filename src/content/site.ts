// Centralized site content. Edit values here — the UI reads everything from this file.

export const site = {
  name: 'Nicolas David',
  handle: 'Nicolas David',
  role: 'Backend Developer',
  title: 'Nicolas David',
  description:
    'Backend developer in training — computer science student building real systems: payments, auth, bots and cron jobs.',
  email: 'nicolasdsgodinho@gmail.com',
  links: {
    github: 'https://github.com/sicsee',
    linkedin: 'https://linkedin.com/in/sicsee',
    // TODO: attach real resume file to /public before shipping a resume chip again
  },
  githubUser: 'sicsee',
} as const;

export const intro =
  "hey, i'm nicolas — computer science student sharpening as a backend developer.\n" +
  "i like the unglamorous side of systems: payments that verify, databases that lie less, and the failure paths everyone skips.";

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
    role: 'Self-Directed Projects',
    company: 'Personal',
    dates: '2024 — now',
    duration: 'ongoing',
    current: true,
    description:
      'no formal job yet — and the portfolio says that plainly. meanwhile: a técnico capstone with real payments and auth, a telegram bot on php/mysql, game-script tooling, and this very site. self-taught, self-directed, shipped.',
  },
];

// real education history (school omitted where the user didn't name it)
export type Education = {
  degree: string;
  school?: string;
  dates: string;
};

export const education: Education[] = [
  {
    degree: 'Computer Science',
    school: 'Newton Paiva',
    dates: 'in progress',
  },
  {
    degree: 'Systems Development (technical diploma)',
    dates: '2024 — 2025',
  },
  {
    degree: 'English studies',
    school: 'Wizard',
    dates: 'in progress',
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

export const projects: Project[] = [
  {
    slug: 'la-ascensao',
    title: 'La Ascensión',
    description:
      'B2B funeral-services site with a purchase path — my técnico capstone: cart, stripe checkout and plan management.',
  },
  {
    slug: 'aim-trainer',
    title: 'Roblox Aim Trainer',
    description: 'Aim trainer in the style of aim lab / kovaaks, built with luau and raycasting.',
  },
  {
    slug: 'habit-tracker',
    title: 'Habit Tracker',
    description: 'Habit tracker with a contribution-style heatmap, dashboard and a telegram bot.',
  },
  {
    slug: 'si-sociedade',
    title: 'SI e Sociedade',
    description:
      'Knowledge base for an information-society course, organized as a zettelkasten with dataview.',
  },
  {
    slug: 'velocegarage',
    title: 'VeloceGarage',
    description:
      'Landing page for a diecast car-miniatures shop — vanilla html/css/js, fast and self-maintainable.',
  },
  {
    slug: 'portfolio-v1',
    title: 'Portfolio v1',
    description: 'First version of this portfolio — next.js 14 with framer motion.',
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
    icon: 'devicon-nextjs-plain',
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
