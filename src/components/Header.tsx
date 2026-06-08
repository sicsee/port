import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center gap-4">
      <Link href="https://github.com/sicsee/" target="_blank">
        <h1 className="text-black/60 hover:text-black transition ease-linear">
          Nicolas Godinho
        </h1>
      </Link>
      <span className="text-black/60 font-bold">/</span>
      <h1 className="text-black">Portfolio</h1>
    </header>
  );
}
