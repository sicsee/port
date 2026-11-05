// 3D carousel data
// project screenshots go in /public/projects/

export interface CarouselProject {
  slug: string;
  title: string;
  tagline: string;
  image?: string;
  stack: string[];
  highlights: string[];
  repoUrl?: string;
  demoUrl?: string;
}

export const carouselProjects: CarouselProject[] = [
  {
    slug: "la-ascensao",
    title: "La Ascensión",
    tagline: "E-commerce for a clothing brand — cart, checkout and payments via Stripe",
    image: "/projects/la-ascensao.jpg",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
    highlights: ["Cart + checkout", "Admin panel", "JWT auth", "Stripe webhooks"],
    repoUrl: "https://github.com/sicsee/laascensao",
    // demoUrl: "https://laascensao.vercel.app",
  },
  {
    slug: "aim-trainer",
    title: "Roblox Aim Trainer",
    tagline: "Aim trainer in the style of Aim Lab/Kovaaks — Gridshot 30s, raycasting, 3 simultaneous targets",
    image: "/projects/aim-trainer.jpg",
    stack: ["Roblox Studio", "Luau", "Raycasting", "UI/UX", "DataStores"],
    highlights: ["MVP in development", "Gridshot 30s", "3 simultaneous targets", "Camera raycast"],
    repoUrl: "https://github.com/sicsee/aim-trainer",
    // demoUrl: "https://roblox.com/games/aim-trainer",
  },
  {
    slug: "habit-tracker",
    title: "Habit Tracker",
    tagline: "Habit tracker with SVG + HTML heatmap, Telegram bot and streak tracking",
    image: "/projects/habit-tracker.jpg",
    stack: ["PHP", "MySQL", "Telegram Bot API", "SVG/HTML", "Cron Jobs", "Chart.js"],
    highlights: ["Streaks ≥5 habits", "SVG + HTML heatmap", "Working Telegram bot", "VPS deployment"],
    repoUrl: "https://github.com/sicsee/habit-tracker",
    // demoUrl: "https://habit-tracker.vercel.app",
  },
  {
    slug: "si-sociedade",
    title: "SI e Sociedade",
    tagline: "Obsidian knowledge base for an academic course — Zettelkasten + Dataview",
    image: "/projects/si-sociedade.jpg",
    stack: ["Obsidian", "Markdown", "Dataview", "Templater", "Graph View", "Canvas"],
    highlights: ["~20k chars of summaries", "Zettelkasten structure", "Navigable graph view", "2 complete themes"],
    repoUrl: "https://github.com/sicsee/si-sociedade-vault",
    // demoUrl: "https://obsidian.md",
  },
  {
    slug: "velocegarage",
    title: "VeloceGarage",
    tagline: "Landing page for an auto repair shop — Lighthouse 90+, SEO optimized",
    image: "/projects/velocegarage.jpg",
    stack: ["HTML", "CSS", "JavaScript", "Vercel", "Google Fonts"],
    highlights: ["Lighthouse 90+", "Fully responsive", "Working form", "SEO optimized"],
    repoUrl: "https://github.com/sicsee/velocegarage",
    demoUrl: "https://velocegarage.vercel.app",
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    tagline: "First version of this portfolio — Next.js 14, Framer Motion, theme toggle",
    image: "/projects/portfolio-v1.jpg",
    stack: ["Next.js 14", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
    highlights: ["Theme toggle", "Scroll animations", "Project filter", "Vercel deployment"],
    repoUrl: "https://github.com/sicsee/portfolio-v1",
    demoUrl: "https://portfolio-v1.vercel.app",
  },
];
