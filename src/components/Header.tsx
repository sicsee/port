import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center gap-4 mb-5 sm:mb-0">
      <Link href="https://github.com/sicsee/" target="_blank">
        <h1 className="text-white/50 hover:text-white transition ease-linear">
          Nicolas Godinho
        </h1>
      </Link>
      <span className="text-white/50 font-bold">/</span>
      <h1>Portfolio</h1>
    </header>
  );
}
