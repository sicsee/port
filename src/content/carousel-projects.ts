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
    tagline: "B2B funeral-services platform — public landing + purchase path (cart, checkout) · técnico capstone",
    image: "/projects/la-ascensao.jpg",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
    highlights: ["Cart + checkout path", "Admin panel", "JWT auth", "Stripe flow"],
    repoUrl: "https://github.com/sicsee/WebPage-FunerariaB2B",
  },
  {
    slug: "aim-trainer",
    title: "Roblox Aim Trainer",
    tagline: "Aim trainer in the style of Aim Lab/Kovaaks — Gridshot 30s, raycasting, 3 simultaneous targets",
    image: "/projects/aim-trainer.jpg",
    stack: ["Roblox Studio", "Luau", "Raycasting", "UI/UX", "DataStores"],
    highlights: ["MVP in development", "Gridshot 30s", "3 simultaneous targets", "Camera raycast"],
  },
  {
    slug: "habit-tracker",
    title: "Habit Tracker",
    tagline: "Habit tracker with SVG + HTML heatmap, Telegram bot and streak tracking",
    image: "/projects/habit-tracker.jpg",
    stack: ["PHP", "MySQL", "Telegram Bot API", "SVG/HTML", "Cron Jobs", "Chart.js"],
    highlights: ["Streaks ≥5 habits", "SVG + HTML heatmap", "Working Telegram bot", "VPS deployment"],
    repoUrl: "https://github.com/sicsee/habit-tracker",
  },
  {
    slug: "si-sociedade",
    title: "SI e Sociedade",
    tagline: "Obsidian knowledge base for an academic course — zettelkasten + dataview",
    image: "/projects/si-sociedade.jpg",
    stack: ["Obsidian", "Markdown", "Dataview", "Templater", "Graph View", "Canvas"],
    highlights: ["~20k chars of summaries", "Zettelkasten structure", "Navigable graph view", "2 complete themes"],
  },
  {
    slug: "velocegarage",
    title: "VeloceGarage",
    tagline: "Landing for a diecast car-miniatures shop — vanilla html/css/js · técnico exercise",
    image: "/projects/velocegarage.jpg",
    stack: ["HTML", "CSS", "JavaScript", "Vercel", "Google Fonts"],
    highlights: ["Blend of catalog + prices", "Fully responsive", "Working form", "SEO basics"],
    repoUrl: "https://github.com/sicsee/WebPage-VeloceGarage",
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    tagline: "First version of this portfolio — Next.js 14, Framer Motion, theme toggle",
    image: "/projects/portfolio-v1.jpg",
    stack: ["Next.js 14", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
    highlights: ["Theme toggle", "Scroll animations", "Project filter", "On-air at vercel"],
    demoUrl: "https://portfolio-v1.vercel.app",
  },
];
