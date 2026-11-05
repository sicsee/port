---
name: Nicolas David — Portfolio
description: Minimalist terminal-grade personal portfolio (atxl-inspired dark-first design)
colors:
  canvas: "#000000"
  paper: "#f4efe4"
  heading: "#ffffff"
  body-ink: "#d4d4d4"
  body-ink-dark: "#34302a"
  muted: "#a3a3a3"
  faint: "#737373"
  hairline: "#404040"
  chip-border: "#262626"
  chip-bg: "#171717"
  accent: "#ffffff"
  teal-signal: "#0f766e"
typography:
  display:
    fontFamily: '"Doto", "Atkinson Hyperlegible", sans-serif'
    fontSize: "1.125rem"
    fontWeight: 900
    lineHeight: 1.55
    letterSpacing: "0.05em"
  body:
    fontFamily: '"Atkinson Hyperlegible", ui-sans-serif, system-ui, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.1em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "6px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  chip-tag:
    backgroundColor: "{colors.chip-bg}"
    textColor: "{colors.body-ink}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
  chip-tag-hover:
    backgroundColor: "{colors.chip-bg}"
    textColor: "{colors.heading}"
  nav-link:
    textColor: "{colors.muted}"
    typography: '0.875rem "Atkinson Hyperlegible", sans-serif'
---

# Design System: Nicolas David — Portfolio

## Overview

**Creative North Star: "The Quiet Terminal"** — named from the incumbent system itself (the user confirmed this world and keeps it): a calibrated command line that never raises its voice. The interface is a well-organized shell session — `$`-precise section prompts, greyscale as default state, one visible prompt mark per section — while dot-matrix type stamps the headings like punched plates. Mood: **Terminal** + **Contido**.

Density is information-first: short source, high scanability, zero ornament between the reader and the artifacts. Motion exists as confirmation, never as spectacle — elements rise 16px and fade in on a 50ms stepped stagger, and that is the only "big" animation on a resting page.

**Key Characteristics:**
- greyscale-first; the accent is punctuation, not paint
- dot-matrix (Doto 900) headings over quiet humanist body copy (Atkinson Hyperlegible)
- 1px hairlines and tonal fills instead of shadows and gradients
- terminal prompts (`* …`) as section headers; lowercase copy voice
- reveals: fade + 16px rise, staggered 50ms; flat at rest, precision on interaction

## Colors

A near-monochrome system with two states: the dark terminal (default) and a paper inversion for light mode. Colors are about **role** (canvas → ink → hairline → accent) more than hue.

### Primary
- **Signal White** (#000/`#ffffff` on canvas): the dark theme's accent doubles as the heading color — section prompts, current-work timeline dot, selection highlight, hover accents on links and chips. Its scarcity is the point: on a resting screen it appears mainly as headings.

### Secondary (light theme only)
- **Fountain Teal** (`#0f766e`): the light "paper" theme's accent — selection highlight, link hovers, heatmap ramp top. Never used in the dark theme (dark stays greyscale + white).

### Neutral
- **Signal Black** (`#000000`): canvas of the dark theme.
- **Void White** (`#ffffff`): headings, prompt marks, `* ` glyphs, active timeline dot.
- **Ink Grey / Body** (`#d4d4d4` dark · `#34302a` light): body copy on both themes.
- **Faded Pencil** (`#a3a3a3` mute): secondary text, dates, descriptions.
- **Faint Lead** (`#737373` faint): tertiary text, hints, the "##" in markers and durations.
- **Hairline** (`#404040` dark): section separators, timeline line, skin of the interface.
- **Chip Border / Chip Bed** (`#262626` / `#171717`): resting chip edges and fill.
- **Manila Paper** (`#f4efe4`): light theme canvas — aged paper, not white; the whole light palette is warm (browns, `#34302a`, `#8a8174`) to keep the chat-printer feel.

### Named Rules
- **The One Voice Rule.** Accent (white or teal) is punctuation: ≤ a handful of touched pixels per viewport. If a screen needs accent to be readable, it is wrong.
- **The Prompt Rule.** Every section is introduced by a terminal-style prompt — `* title` — never by a decorative banner or icon.

## Typography

**Display Font:** Doto (dot-matrix, weight 900; fallback Atkinson Hyperlegible)
**Body Font:** Atkinson Hyperlegible (accessibility-grade humanist sans, 400/700)
**Label/Mono Font:** system ui-monospace (timestamps, coords, counters)

**Character:** a typewriter with a stamp — humanist, tall-x body copy reads clean and modest; headings are punched dot-matrix plates that feel printed by an old matrix printer. Legibility lives in the body; personality lives in the display.

### Hierarchy
- **Display** (Doto 900, 1.125rem / 1.55, tracking 0.05em): section headings (`* experience`), chip labels. The hero title scales the same voice up to 1.5–1.875rem (`text-2xl sm:text-3xl`), leading-tight.
- **Title** (Atkinson 700, ~1.1rem): project titles, work roles — plain bold, no display font.
- **Body** (Atkinson 400, 1rem / 1.625): paragraphs, descriptions, blurbs; max line length ≈ the 48rem container keeps ~70ch.
- **Label** (mono, 0.65–0.8rem, wide tracking): counters (`02 / 06`), timestamps, ramp hints, placeholder paths like `~/projects/slug`.

### Named Rules
- **The Stamp Rule.** Doto exists only in displays: headings, markers, chip labels, big metric numbers. Never body text and never long labels — dot-matrix at reading size is texture, not prose.
- **The Lowercase Line.** Narrative copy is written lowercase (voice commitment), not styled `lowercase` — the runts are data, not decoration.

## Layout

Single centered column, `max-w-3xl` (48rem) with 16px side gutters, on every route. Vertical rhythm: `space-y-4` (16px) between top-level sections; each section keeps its own small internal breathing (border-t + ~16px padding). Sections are separated by full-width-feel 1px rules in Hairline — never whitespace alone, never boxes.

`/projects` breaks the scroll model on purpose: a fixed-viewport stage (`h-dvh`, `overflow-hidden`) where the 3D coverflow carousel owns the middle; page furniture compresses so the tab never scrolls.

## Elevation & Depth

Flat, deliberately. **No box-shadows anywhere** — depth is carried by 1px borders over tonal fills (`color-mix(in srgb, currentColor 6–20%, transparent)`) and by opacity stepping. The one intentional cheat is the carousel's CSS `perspective` (translateZ / rotateY on off-slides with opacity 0.5 → 0.2), which is state-driven, not ornamental elevation.

### Named Rules
- **The Flat-By-Default Rule.** Nothing is lifted by shadow, ever. Hover states move (2px rise) and recolor — they never "float".

## Shapes

Near-sharp geometry: radii live in the 2–6px range (chips 4px, case-image containers 2px, carousel slides 6px, heatmap cells 2px). Perfect circles are reserved for semantic markers (the timeline activity dots). Borders are always 1px and tonal (neutral scale or `color-mix` on currentColor) — never colored fills around deep curves. A fixed `feTurbulence` grain overlay (7% opacity) rests over every page; it is texture, not decoration, and never animates.

## Components

### Chips (tech-tag / link-tag / skill-tag)
- **Character:** the system's workhorse — precise instrument labels.
- **Shape:** 4px radius, 1px Chip Border edge, Chip Bed fill (0.75rem × 12px padding).
- **Label:** Doto 900, wide-tracked, 0.8rem.
- **Hover:** border → accent, text → heading; skill chips rise 2px and their devicon glyph recolors to accent. No scale, no shadow.
- **Skill tooltip (signature):** 15rem card, Hairline border, Chip Bed-dark fill, 0.75rem text; drops 6px→0 + fades on hover/focus-within; states a named proficiency (Doto 0.65rem) with a 5-dot mono meter, one-line blurb, and `used in:` project list. Touch devices never see it.

### Section Headers
- **Style:** 0.75rem Doto marker `*` raised 2px above baseline + 1.125rem Doto title; muted `##`/heavy marks belong to the old generation — current system uses the bare prompt.

### Navigation
- **Style:** marker-font handle on the left (muted → white hover); mono-free plain links right (0.875rem, muted → white); no underlines, no pills, no sticky bar. Theme toggle is text (`theme` → `light`/`dark`), never an icon.

### Carousel Slides (signature)
- **Shape:** 6px radius card, 1px tonal border, 6% currentColor fill; 16/10 aspect.
- **Off-state:** translateX ±64% / rotateY ±34° / scale −6% per step, opacity 0.5 → 0.2 → hidden; transform-only, 600ms expo-out.
- **Fallback art:** nonexistent screenshots render a typographic plate (`~/projects/slug` in mono + title in Doto) instead of a broken image.

### Heatmap
- 7-row × 12px cell grid, 2px gap; 5-step ramp (`--c0..c4`) — greyscale in dark, Fountain Teal ramp in light; internal scroll only, never page scroll.

### Buttons
- The system has **no filled primary button**; every action is a chip/link-tag anchor (see Chips). Hierarchy comes from the accent on hover.

## Do's and Don'ts

### Do:
- **Do** keep everything greyscale at rest; introduce accent only on meaning (hover, selection, current-state, prompt marks).
- **Do** separate sections with 1px hairlines + a `* title` prompt at ~0.05em tracking.
- **Do** stagger entrances 50ms apart (50–450ms) with translateY(16px) + fade, `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Do** label machine facts in mono with wide tracking (`02 / 06`, `~/projects/slug`).
- **Do** let the carousel express depth with transforms/opacity only.

### Don't:
- **Don't** use gradients, neon, or glow anywhere — flatness is the identity (confirmed anti-reference).
- **Don't** round beyond 6px — no pills, no `rounded-2xl` cards (confirmed anti-reference).
- **Don't** add box-shadows — even on hover states (The Flat-By-Default Rule).
- **Don't** set Doto below ~0.65rem or for full sentences (The Stamp Rule).
- **Don't** ship accent-heavy screens: if white/teal dominates a viewport, the hierarchy broke.
- **Don't** replace the grain overlay with heavier decorative textures — 7% opacity, always.
