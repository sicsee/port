"use client";

import { useEffect, useState } from "react";

/**
 * Dark/light toggle matching the atxl.in theme system.
 * Dark is the default; `html.light` switches to the cream/paper palette.
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

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      className="marker text-neutral-400 transition-colors duration-300 hover:text-white cursor-pointer"
    >
      <span aria-hidden="true">{mounted ? (isLight ? "dark" : "light") : "theme"}</span>
    </button>
  );
}
