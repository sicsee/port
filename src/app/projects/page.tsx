import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <main className="content space-y-8 p-6 md:p-7 lg:p-10">
      <div className="sm:flex sm:justify-between sm:items-center">
        <Header />
        <Navbar />
      </div>

      {/* Title */}
      <section className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">Projects</h1>
        <p className="text-white/60 text-base sm:text-lg max-w-2xl">
          Here are some of my recent projects. Each one represents a step in my journey as a developer.
        </p>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
