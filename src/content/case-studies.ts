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
  status: "shipped" | "in development" | "course exercise";
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
    period: "técnico exercise",
    status: "course exercise",
    problem:
      "a course brief: build a sales page for a diecast car-miniatures shop. the page had to make the catalog feel worth buying, load fast, and stay editable by someone who won't touch js.",
    solution:
      "a single-purpose landing page: product showcase with prices, contact/lead form, mobile-first, all in vanilla html/css/js with zero framework runtime — shipped the way the owner of a small shop would need to maintain it.",
    decisions: [
      {
        label: "no framework",
        detail:
          "vanilla html/css/js keeps the page light and means anyone can edit it without learning react. performance beats optionality for a one-page site.",
      },
      {
        label: "local-first SEO",
        detail:
          "structured metadata and complete semantic html so the page surfaces when people search for the products.",
      },
      {
        label: "one clear action",
        detail:
          "every section pushes the visitor to the same next step instead of exploring the site — conversion over content.",
      },
    ],
    metrics: [
      { value: "0", label: "framework dependencies" },
      { value: "1", label: "page, one job: sell" },
      { value: "vercel", label: "hosting (redeploy pending)" },
    ],
    lessons: [
      "performance is a design decision before it's a technical one",
      "a page anyone can edit is worth more than a fancier stack",
    ],
  },
  {
    slug: "la-ascensao",
    role: "full stack",
    period: "técnico capstone",
    status: "course exercise",
    problem:
      "my técnico capstone: la ascensión, a b2b services company (funeral plans) still coordinating everything manually — pricing, availability and payments handled person-to-person, with no online presence to receive customers.",
    solution:
      "the public landing plus a purchase path: plan catalog with a persistent cart, stripe checkout flow, plan management in an admin panel, and jwt auth separating customer actions from internal ones. end-to-end: from page visit to a recorded order.",
    decisions: [
      {
        label: "stripe + webhooks",
        detail:
          "checkout on stripe, order state driven by webhook handlers instead of trusting redirects: paid means verified, not 'user came back'.",
      },
      {
        label: "jwt auth",
        detail:
          "stateless token auth for the admin panel, which gives a clean separation between customer actions and management operations.",
      },
      {
        label: "relational schema",
        detail:
          "postgresql for orders and plan data: correctness of the catalog belongs in the database, not in app logic.",
      },
    ],
    metrics: [
      { value: "webhooks", label: "order state verification" },
      { value: "jwt", label: "admin/customer separation" },
      { value: "postgres", label: "orders + catalog schema" },
    ],
    lessons: [
      "integrating payments is 20% the sdk and 80% handling the failure paths",
      "model the order lifecycle early: retrofitting states into a schema is expensive",
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
