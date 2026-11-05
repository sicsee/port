"use client";

import { useEffect, useMemo, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type DayCount = { date: string; count: number };

type Stats = {
  total: number;
  activeDays: number;
  bestDay: number;
  currentStreak: number;
  longestStreak: number;
  days: DayCount[]; // one per calendar day (gaps included with count 0)
};

const DAY_MS = 86_400_000;

function computeStats(events: { created_at: string }[]): Stats {
  const counts = new Map<string, number>();
  for (const event of events) {
    const date = event.created_at.slice(0, 10);
    counts.set(date, (counts.get(date) ?? 0) + 1);
  }

  // Window: from the first event day (bounded — the public API only lists recent
  // events) up to today, laid out per-week for the heatmap grid.
  const today = new Date();
  let minDate = today.getTime();
  for (const key of counts.keys()) {
    const t = new Date(`${key}T00:00:00Z`).getTime();
    if (t < minDate) minDate = t;
  }
  // cap the window at 365 days so the grid stays a reasonable width
  minDate = Math.max(minDate, today.getTime() - 365 * DAY_MS);

  const days: DayCount[] = [];
  for (let t = minDate; t <= today.getTime(); t += DAY_MS) {
    const key = new Date(t).toISOString().slice(0, 10);
    days.push({ date: key, count: counts.get(key) ?? 0 });
  }

  const activeDays = days.filter((d) => d.count > 0).length;
  const bestDay = days.reduce((max, d) => Math.max(max, d.count), 0);
  const total = [...counts.values()].reduce((sum, n) => sum + n, 0);

  let longestStreak = 0;
  let run = 0;
  for (const day of days) {
    run = day.count > 0 ? run + 1 : 0;
    longestStreak = Math.max(longestStreak, run);
  }

  let currentStreak = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) currentStreak++;
    else break;
  }

  return { total, activeDays, bestDay, currentStreak, longestStreak, days };
}

function levelFor(count: number, bestDay: number): number {
  if (count === 0) return 0;
  const ratio = count / Math.max(bestDay, 1);
  if (ratio <= 0.25) return 1;
  if (ratio <= 0.5) return 2;
  if (ratio <= 0.75) return 3;
  return 4;
}

export function Contributions() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${site.githubUser}/events/public?per_page=300`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((events) => {
        if (!cancelled && Array.isArray(events)) setStats(computeStats(events));
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const levels = useMemo(() => {
    if (!stats) return [];
    return stats.days.map((d) => levelFor(d.count, stats.bestDay));
  }, [stats]);

  return (
      <section id="contributions" className="border-t border-neutral-700 py-5 sm:py-6">
        <SectionHeader title="contributions" className="mb-4" />
        <Reveal className="reveal-delay-1">
          {stats ? (
            <>
              <p className="mb-4 text-sm text-neutral-400">
                <span className="text-neutral-500">total:</span> <span className="text-white">{stats.total}</span>
                <span className="text-neutral-500"> active days:</span> <span className="text-white">{stats.activeDays}</span>
                <span className="text-neutral-500"> best day:</span> <span className="text-white">{stats.bestDay}</span>
                <span className="text-neutral-500"> current streak:</span> <span className="text-white">{stats.currentStreak}d</span>
                <span className="text-neutral-500"> longest streak:</span> <span className="text-white">{stats.longestStreak}d</span>
              </p>
              <div
                className="contrib-grid"
                role="img"
                aria-label="GitHub contribution activity heatmap for the last 365 days"
              >
                {stats.days.map((day, i) => (
                  <div
                    key={day.date}
                    className={cn("contrib-cell", i < 9 ? `reveal-delay-${(i % 9) + 1}` : "reveal-delay-9")}
                    style={levels[i] > 0 ? { background: `var(--c${levels[i]})` } : undefined}
                    title={`${day.count} event${day.count === 1 ? "" : "s"} on ${day.date}`}
                  />
                ))}
              </div>
            </>
          ) : failed ? (
            <p className="text-sm text-neutral-500">stats unavailable right now.</p>
          ) : (
            <p className="text-sm text-neutral-500">loading stats…</p>
          )}
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-neutral-400 transition-colors duration-300 hover:text-accent hover:underline"
          >
            view on github <span className="text-neutral-500">→</span>
          </a>
        </Reveal>
      </section>
    );
  }
