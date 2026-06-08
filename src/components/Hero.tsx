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
    <section className="space-y-6 md:space-y-8 md:max-w-4xl">
      <h1 className="font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
        Portfolio
      </h1>

      <div className="space-y-4 text-base sm:text-lg">
        <p className="text-white/80 leading-relaxed">
          My name is <span className="font-semibold text-white">Nicolas Godinho</span>, and I'm a{" "}
          <span className="font-semibold text-white">Software Development</span> student.
        </p>

        <p className="text-white/80 leading-relaxed">
          I enjoy building web applications with modern technologies such as{" "}
          <span className="font-semibold text-white">React</span>,{" "}
          <span className="font-semibold text-white">Next.js</span>,{" "}
          <span className="font-semibold text-white">JavaScript</span>,{" "}
          <span className="font-semibold text-white">Laravel</span>, and{" "}
          <span className="font-semibold text-white">PHP</span>.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Link href="/about">
          <Button variant="secondary" size="sm">
            Read More
          </Button>
        </Link>
        <button onClick={handleDownloadCV}>
          <Button variant="secondary" size="sm">
            Download CV
          </Button>
        </button>
      </div>
    </section>
  );
}
