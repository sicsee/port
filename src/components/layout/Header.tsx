"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/content/site";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/#contact", label: "contact" },
] as const;

export function Header() {
  return (
    <header className="mx-auto w-full max-w-3xl px-4 py-4 flex items-baseline justify-between">
      <Link
        href="/"
        className="marker text-neutral-500 hover:text-white transition-colors"
        aria-label="Home"
      >
        {site.handle}
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}