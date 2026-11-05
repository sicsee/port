# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: tech recruiters and hiring managers evaluating Nicolas David ("Backend Developer" positioning) for backend/junior/internship roles. They arrive via a shared link — LinkedIn, CV, project README, or direct referral — on desktop or mobile, and spend a short decision window scanning for: real work shipped, working demos, honest scope, and easy contact. Curious engineers (peers, communities) are a secondary audience reached through the same link.

## Product Purpose

A personal portfolio that proves backend engineering ability through shipped artifacts, not adjectives. Success = a recruiter within one session can (1) grasp the positioning, (2) open at least one real project (repo or live demo), (3) see reliable activity evidence, and (4) reach Nicolas to start a conversation.

## Positioning

Backend engineer with shipped full stack follow-through: production paths (payments, auth, cron/bots, persistence) treated as first-class concerns — the claim is "systems correctness first, and the interfaces back it up".

## Operating Context

Candidates compare portfolios side-by-side in minutes; the page is often evaluated on a phone between other tabs. GitHub is the natural second click — everything here must выдерж cross-checking against the public profile https://github.com/sicsee.

## Capabilities and Constraints

- Real projects with real repos (authoritative, from `src/content/carousel-projects.ts`):
  La Ascensión (e-commerce + Stripe), Roblox Aim Trainer (Luau, MVP in development),
  Habit Tracker (PHP/MySQL + Telegram bot), SI e Sociedade (Obsidian knowledge base),
  VeloceGarage (landing, live at https://velocegarage.vercel.app), Portfolio v1.
- Case-study pages exist (`/projects/[slug]`, static); currently 2 fully narrated (velocegarage, la-ascensao), others auto-generated summaries.
- English-only content (decided deliberately); copy voice is lowercase, understated, no marketing superlatives.
- **No availability claim ("open to work") anywhere** — user did not confirm it; do not add without confirmation.
- **No resume file exists yet** (`/resume.pdf` referenced in data is a TODO) — do not ship a resume chip/link until a real file lands in `public/`.
- No fabricated metrics, testimonials, work history, or education; placeholders present in `src/content/site.ts` (experience/education sections) are pending the user's real data.
- One visual identity decision already made by the user and binding: the dark-first minimalist world inspired by atxl.in (Doto pixel headings, terminal-style prompts) — visual reference lives in code/DESIGN, not here.

## Brand Commitments

- Name: "Nicolas David" (display; used as logo/handle `site.handle` in `src/content/site.ts`).
- Voice: lowercase, first-person terse sentences, technical honesty ("the 20% sdk / 80% failure paths" style) — no exclamation-mark marketing.

## Evidence on Hand

- Public GitHub: https://github.com/sicsee (contributions heatmap shown on the site pulls from it live).
- Working demos: velocegarage.vercel.app, portfolio-v1.vercel.app.
- Project repositories for all six projects (paths in `carousel-projects.ts`).
- Real written case studies (2 of 6) in `src/content/case-studies.ts`.
- Absences that must not be fabricated: resume.pdf, project screenshots (carousel references `/projects/*.jpg` that don't exist yet — fallback placeholder is shipped instead), professional photography, employment history details.

## Product Principles

1. **Artifacts over adjectives** — every claim should sit next to a thing a stranger can open (repo, demo, heatmap).
2. **Honesty as material** — admit in-development state, ≤3-day boilerplate, and limits; it reads as seniority in a junior.
3. **Hire-me friction stays low** — always-under-2-clicks path from any scroll depth to contact.
4. **One position, consistently** — Backend Developer forward; full stack work qualifies it, never substitutes it.
5. **Calm surface, sharp signal** — nothing on the page should outperform the artifacts in loudness.
