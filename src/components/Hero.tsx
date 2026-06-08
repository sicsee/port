"use client";

import Link from "next/link";
import Button from "./Button";

export default function Hero() {
  const handleDownloadCV = async () => {
    try {
      const response = await fetch("/api/download-cv");
      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Nicolas-Godinho-CV.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading CV:", error);
      alert("Failed to download CV. Please try again.");
    }
  };

  return (
    <section className="space-y-12 md:space-y-16">
      {/* Main intro */}
      <div className="space-y-6 md:max-w-4xl">
        <h1 className="font-bold text-white text-5xl sm:text-6xl lg:text-7xl leading-tight">
          Portfolio
        </h1>
        <p className="text-white/80 leading-relaxed text-base sm:text-lg">
          My name is <span className="font-semibold text-white">Nicolas Godinho</span>, and I'm a{" "}
          <span className="font-semibold text-white">Software Development</span> student passionate about building modern web applications.
        </p>

        <p className="text-white/80 leading-relaxed text-base sm:text-lg">
          I specialize in full-stack development with <span className="font-semibold text-white">React</span>,{" "}
          <span className="font-semibold text-white">Next.js</span>,{" "}
          <span className="font-semibold text-white">TypeScript</span>,{" "}
          <span className="font-semibold text-white">Laravel</span>, and{" "}
          <span className="font-semibold text-white">PHP</span>.
        </p>
      </div>

      {/* Featured info cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="border border-white/10 rounded-lg p-6 hover:border-white/30 transition-colors">
          <p className="text-white/50 text-sm mb-2">Focus</p>
          <p className="text-white font-semibold text-lg">Full-Stack Development</p>
        </div>
        <div className="border border-white/10 rounded-lg p-6 hover:border-white/30 transition-colors">
          <p className="text-white/50 text-sm mb-2">Specialization</p>
          <p className="text-white font-semibold text-lg">Web Applications</p>
        </div>
        <div className="border border-white/10 rounded-lg p-6 hover:border-white/30 transition-colors">
          <p className="text-white/50 text-sm mb-2">Status</p>
          <p className="text-white font-semibold text-lg">Available for Work</p>
        </div>
      </div>

      {/* Tech stack highlight */}
      <div className="space-y-4">
        <h2 className="text-white text-xl font-semibold">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["React", "Next.js", "TypeScript", "Tailwind", "Laravel", "PHP", "Node.js", "PostgreSQL"].map((tech) => (
            <div
              key={tech}
              className="border border-white/10 rounded px-4 py-2 text-center text-white/70 hover:text-white hover:border-white/30 transition-all"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link href="/projects">
          <Button variant="primary" size="sm">
            View Projects
          </Button>
        </Link>
        <Button
          variant="secondary"
          size="sm"
          onClick={handleDownloadCV}
        >
          Download CV
        </Button>
        <Link href="/about">
          <Button variant="secondary" size="sm">
            Learn More
          </Button>
        </Link>
      </div>
    </section>
  );
}
