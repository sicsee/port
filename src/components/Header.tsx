import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="sm:flex sm:justify-between sm:items-center">
      <div className="flex items-center gap-4 mb-4 sm:mb-0">
        <h1 className="font-bold">Nicolas Godinho</h1>
        <span className="text-white/50 font-bold">/</span>
        <h1 className="font-bold">Portfolio</h1>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
}
