"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * Dark/light toggle matching the atxl.in theme system.
 * Dark is the default; `html.light` switches to the cream/paper palette.
 * Renders as a small square icon chip (flat system: 1px border, no shadow).
 */
export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains("light"));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !isLight;
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      // storage unavailable — theme won't persist, that's fine
    }
    setIsLight(next);
  }

  const label = isLight ? "Switch to dark theme" : "Switch to light theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-[4px] border border-neutral-700 text-neutral-400 transition-colors duration-300 hover:border-accent hover:text-accent"
    >
      {mounted ? (
        isLight ? (
          <Moon className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <Sun className="h-3.5 w-3.5" aria-hidden="true" />
        )
      ) : (
        // pre-mount: system prefs applied its theme; default icon fits the dark default
        <Sun className="h-3.5 w-3.5" aria-hidden="true" />
      )}
    </button>
  );
}
