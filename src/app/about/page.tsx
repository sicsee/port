import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="content space-y-8 p-6 md:p-7 lg:p-10">
      <div className="sm:flex sm:justify-between sm:items-center">
        <Header />
        <Navbar />
      </div>

      {/* Title */}
      <section className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">About Me</h1>
      </section>

      {/* Main Content */}
      <section className="max-w-3xl space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Who I Am</h2>
          <p className="text-white/70 leading-relaxed text-base sm:text-lg">
            I'm <span className="text-white font-semibold">Nicolas Godinho</span>, a Software Development student
            passionate about building modern web applications. I love combining clean code with beautiful user
            experiences.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">My Journey</h2>
          <p className="text-white/70 leading-relaxed text-base sm:text-lg">
            Starting from the basics of web development, I've continuously grown my skills across frontend and backend
            technologies. Each project has taught me something new about software architecture, best practices, and
            user-centered design.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border border-white/10 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Frontend</h3>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• React & Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• JavaScript</li>
              </ul>
            </div>
            <div className="p-4 border border-white/10 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Backend</h3>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• Laravel & PHP</li>
                <li>• Node.js</li>
                <li>• REST APIs</li>
                <li>• SQL Databases</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Let's Connect</h2>
          <p className="text-white/70 leading-relaxed text-base sm:text-lg">
            I'm always interested in collaborating on exciting projects and learning from other developers. Feel free to
            reach out through any of these channels:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="https://github.com/sicsee" target="_blank">
              <Button variant="secondary">GitHub</Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Button variant="secondary">LinkedIn</Button>
            </Link>
            <Link href="mailto:contact@example.com">
              <Button variant="secondary">Email</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
