"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-4">
        <li>
          <Link
            href="/"
            className={
              pathname === "/" ? "text-white/50 font-bold" : "text-white"
            }
          >
            Home
          </Link>
        </li>

        <span className="text-white/50 font-bold text-xl">|</span>

        <li>
          <Link
            href="/projects"
            className={
              pathname === "/projects"
                ? "text-white/50 font-bold"
                : "text-white"
            }
          >
            Projects
          </Link>
        </li>

        <span className="text-white/50 font-bold text-xl">|</span>

        <li>
          <Link
            href="/about"
            className={
              pathname === "/about" ? "text-white/50 font-bold" : "text-white"
            }
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
