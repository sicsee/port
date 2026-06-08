"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-4 uppercase">
        <li>
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-white"
                : "text-white/50 hover:text-white transition-all ease-linear"
            }
          >
            Home
          </Link>
        </li>

        <span className="text-white/50 text-xl">|</span>

        <li>
          <Link
            href="/projects"
            className={
              pathname === "/projects"
                ? "text-white"
                : "text-white/50  hover:text-white transition-all ease-linear"
            }
          >
            Projects
          </Link>
        </li>

        <span className="text-white/50 text-xl">|</span>

        <li>
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "text-white"
                : "text-white/50 hover:text-white transition-all ease-linear"
            }
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
