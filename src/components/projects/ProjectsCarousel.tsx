"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github } from "lucide-react";

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

const LINE = "color-mix(in srgb, currentColor 20%, transparent)";
const FILL = "color-mix(in srgb, currentColor 6%, transparent)";

const pad = (value: number) => String(value).padStart(2, "0");

function offsetOf(index: number, active: number, total: number) {
  let diff = index - active;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

function Preview({ project }: { project: CarouselProject }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  if (project.image && !failed) {
    return (
      <img
        ref={ref}
        src={project.image}
        alt=""
        draggable={false}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover object-top"
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
      <p className="font-mono text-xs text-neutral-400">~/projects/{project.slug}</p>
      <p className="font-pixel text-xl font-black tracking-wider sm:text-2xl">
        {project.title}
      </p>
    </div>
  );
}

export function ProjectsCarousel({
  projects,
  caseSlugs,
}: {
  projects: CarouselProject[];
  /** Slugs that have a case study page — renders "view case →" for them. */
  caseSlugs?: ReadonlySet<string>;
}) {
  const total = projects.length;
  const [active, setActive] = useState(0);
  const startX = useRef<number | null>(null);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<number | null>(null);

  const go = useCallback(
    (delta: number) => setActive((value) => (value + delta + total) % total),
    [total],
  );

  // structurally-compatible surface used by BOTH the native listener
  // (DOM WheelEvent) and the React handler (React.WheelEvent)
  const handleWheel = useCallback(
    (event: { deltaY: number; preventDefault(): void }) => {

      event.preventDefault();
      if (isScrolling.current) return;
      isScrolling.current = true;

      if (event.deltaY > 0) {
        go(1);
      } else if (event.deltaY < 0) {
        go(-1);
      }

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = window.setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    },
    [go],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable]")) return;
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    const carousel = document.querySelector('[aria-roledescription="carousel"]') as HTMLElement | null;
    if (carousel) {
      carousel.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      const el = document.querySelector('[aria-roledescription="carousel"]') as HTMLElement | null;
      if (el) el.removeEventListener("wheel", handleWheel);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [handleWheel]);

  if (total === 0) return null;
  const current = projects[active];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Projects"
      className="flex h-full w-full flex-col overflow-hidden"
      onWheel={handleWheel}
    >
      <div
        className="touch-pan-y select-none overflow-hidden pt-4 sm:pt-6"
        onPointerDown={(event) => {
          startX.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (startX.current === null) return;
          const dx = event.clientX - startX.current;
          startX.current = null;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        }}
        onPointerCancel={() => {
          startX.current = null;
        }}
      >
        <div
          className="relative mx-auto aspect-[16/10] w-[min(72vw,34rem,max(14rem,calc((100dvh-25rem)*1.6)))]"
          style={{ perspective: "1400px" }}
        >
          {projects.map((project, index) => {
            const d = offsetOf(index, active, total);
            const abs = Math.abs(d);
            const isActive = d === 0;

            const style: CSSProperties = {
              transform: `translateX(${d * 64}%) translateZ(${-abs * 120}px) rotateY(${-d * 34}deg) scale(${1 - abs * 0.06})`,
              opacity: abs === 0 ? 1 : abs === 1 ? 0.5 : abs === 2 ? 0.2 : 0,
              zIndex: 10 - abs,
              visibility: abs > 2 ? "hidden" : "visible",
              pointerEvents: abs > 2 ? "none" : "auto",
              transition:
                "transform 750ms cubic-bezier(0.16, 1, 0.3, 1), opacity 750ms ease",
              borderColor: LINE,
              backgroundColor: FILL,
            };

            return (
              <div
                key={project.slug}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${total}`}
                aria-hidden={!isActive}
                className="absolute inset-0 overflow-hidden rounded-md border bg-clip-padding"
                style={style}
              >
                <Preview project={project} />

                {!isActive && (
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => setActive(index)}
                    aria-label={`View ${project.title}`}
                    className="absolute inset-0 cursor-pointer"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="cursor-pointer p-2 opacity-60 transition-opacity hover:opacity-100"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <span className="font-mono text-xs tracking-widest opacity-60">
          {pad(active + 1)} / {pad(total)}
        </span>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="cursor-pointer p-2 opacity-60 transition-opacity hover:opacity-100"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div
        aria-live="polite"
        className="mx-auto mt-3 max-w-2xl px-4 text-center"
      >
        <div className="flex items-center justify-center gap-3">
          <h2 className="text-2xl sm:text-3xl">{current.title}</h2>
          {current.repoUrl && (
            <a
              href={current.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Source code for ${current.title}`}
              title="código"
              className="opacity-50 transition-opacity hover:opacity-100"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
          {current.demoUrl && (
            <a
              href={current.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${current.title}`}
              title="abrir"
              className="opacity-50 transition-opacity hover:opacity-100"
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>

        <p className="mt-1 text-sm opacity-70">{current.tagline}</p>
        <p className="mt-2 font-mono text-xs text-neutral-400">
          {current.stack.join(" · ").toLowerCase()}
        </p>

        {current.highlights.length > 0 && (
          <ul
            className="mx-auto mt-3 max-w-xl space-y-1.5 rounded-sm border p-3 text-left text-sm max-h-[18dvh] overflow-y-auto"
            style={{ borderColor: LINE }}
          >
            {current.highlights.map((item) => (
              <li key={item} className="flex gap-2 opacity-80">
                <span className="opacity-60" aria-hidden="true">
                  ›
                </span>
                {item}
              </li>
            ))}
          </ul>
        )}

        {caseSlugs?.has(current.slug) && (
          <Link
            href={`/projects/${current.slug}`}
            className="mt-3 inline-block text-sm opacity-60 transition-opacity hover:opacity-100"
          >
            view case study <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </section>
  );
}