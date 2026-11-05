// Case studies — the narrative layer on top of `carousel-projects.ts`.
// Every project gets a page (auto-generated from carousel data when no entry
// here matches the slug); these entries add problem / approach / results.
// Keep new cases writing in the same lowercase-ish, honest tone.

import type { CarouselProject } from "./carousel-projects";

export type CaseDecision = { label: string; detail: string };
export type CaseMetric = { value: string; label: string };

export interface CaseStudy {
  slug: string; // must match carouselProjects[].slug
  role: string;
  period: string;
  status: "shipped" | "in development";
  problem: string;
  solution: string;
  decisions: CaseDecision[];
  metrics: CaseMetric[];
  lessons: string[];
}

// helper: slugs that have a full narrated case (used to link entry points)

export const caseStudies: CaseStudy[] = [
  {
    slug: "velocegarage",
    role: "design + development",
    period: "2025",
    status: "shipped",
    problem:
      "a local auto repair shop had no online presence at all — customers found it only by word of mouth, and booking meant showing up in person or hoping someone answered the phone.",
    solution:
      "a single-purpose landing page that gets one thing right: help the visitor reach the shop. mobile-first layout, service list with prices, and a working contact form — all shipped without a framework to keep it fast and maintainable by anyone.",
    decisions: [
      {
        label: "no framework",
        detail:
          "vanilla html/css/js keeps the page light and means the owner's nephew can edit it without learning react. performance beats optionality for a one-page site.",
      },
      {
        label: "local-first SEO",
        detail:
          "structured metadata and complete semantic html so the page surfaces when people search for a repair shop in the area.",
      },
      {
        label: "one clear action",
        detail:
          "every section pushes the visitor to the same next step (call or message) instead of exploring the site — conversion over content.",
      },
    ],
    metrics: [
      { value: "90+", label: "lighthouse performance" },
      { value: "100%", label: "accessibility practices" },
      { value: "0s", label: "framework runtime" },
    ],
    lessons: [
      "performance is a design decision before it's a technical one",
      "clients value being able to edit their own site more than a fancy stack",
    ],
  },
  {
    slug: "la-ascensao",
    role: "full stack",
    period: "2024",
    status: "shipped",
    problem:
      "an independent clothing brand was selling exclusively through instagram dms — every order needed manual pricing, manual stock checks and manual payment coordination. growth became impossible.",
    solution:
      "a complete e-commerce: product catalogue with a persistent cart, stripe checkout with payment validation, an admin panel for inventory, and automatic order records — the whole pipeline from click to payment runs without the owner touching anything.",
    decisions: [
      {
        label: "stripe + webhooks",
        detail:
          "checkout on stripe, order state driven by idempotent webhook handlers instead of trusting redirects — paid means verified, not 'user came back'.",
      },
      {
        label: "jwt auth",
        detail:
          "stateless token auth for the admin panel; purchased a clean separation between customer actions and inventory operations.",
      },
      {
        label: "relational schema",
        detail:
          "postgresql for stock and orders: inventory correctness belongs in the database, not in app logic.",
      },
    ],
    metrics: [
      { value: "1", label: "runway from dm → automatic" },
      { value: "full", label: "order pipeline automated" },
      { value: "admin", label: "panel for inventory" },
    ],
    lessons: [
      "integrating payments is 20% the sdk and 80% handling the failure paths",
      "model the order lifecycle early — retrofitting states into a schema is expensive",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function hasCase(slug: string): boolean {
  return getCaseStudy(slug) !== undefined;
}

// slugs with a full narrated case — used by entry points (home, carousel)
export const caseSlugs: ReadonlySet<string> = new Set(
  caseStudies.map((c) => c.slug)
);

// whether a slug resolves to any case page (full case or auto-generated fallback)
export function pageExists(slug: string, projects: CarouselProject[]): boolean {
  return hasCase(slug) || projects.some((p) => p.slug === slug);
}
