"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-4 uppercase text-sm">
        <li>
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-black font-semibold"
                : "text-black/50 hover:text-black transition-all ease-linear"
            }
          >
            Home
          </Link>
        </li>

        <span className="text-black/30 text-lg">|</span>

        <li>
          <Link
            href="/projects"
            className={
              pathname === "/projects"
                ? "text-black font-semibold"
                : "text-black/50 hover:text-black transition-all ease-linear"
            }
          >
            Projects
          </Link>
        </li>

        <span className="text-black/30 text-lg">|</span>

        <li>
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "text-black font-semibold"
                : "text-black/50 hover:text-black transition-all ease-linear"
            }
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
