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
    <section className="min-h-screen flex flex-col justify-center items-start space-y-12 md:space-y-16 max-w-3xl">
      {/* Main heading with gradient effect */}
      <div className="space-y-6">
        <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight text-black">
          Nicolas <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Godinho</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed max-w-2xl">
          Software Development student building modern web applications with React, Next.js, Laravel, and beyond.
        </p>
      </div>

      {/* Featured stats or quick info */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 text-sm text-gray-600">
        <div>
          <p className="text-gray-400 mb-1">Focus</p>
          <p className="text-black font-medium">Full-stack Development</p>
        </div>
        <div>
          <p className="text-gray-400 mb-1">Location</p>
          <p className="text-black font-medium">Brazil</p>
        </div>
        <div>
          <p className="text-gray-400 mb-1">Available</p>
          <p className="text-black font-medium">For Projects</p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link href="/projects">
          <Button variant="primary" size="sm" className="px-6">
            View Projects
          </Button>
        </Link>
        <Button
          variant="secondary"
          size="sm"
          onClick={handleDownloadCV}
          className="px-6"
        >
          Download CV
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:block absolute bottom-10 left-0 text-gray-400 text-sm animate-bounce">
        <p>↓ Scroll to explore</p>
      </div>
    </section>
  );
}
