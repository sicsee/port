import { Project } from "@/lib/projects";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group border border-black/10 rounded-lg overflow-hidden hover:border-black/30 transition-colors duration-300">
      {/* Image */}
      <div className="relative w-full aspect-video bg-gradient-to-br from-black/5 to-black/10 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-black/30">
            No image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-3">
        <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-black/80 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-black/60 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs sm:text-sm bg-black/5 border border-black/10 text-black/70 rounded hover:bg-black/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2 pt-4">
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              className="flex-1 px-3 py-2 text-sm bg-black/10 hover:bg-black/20 border border-black/20 text-black rounded transition-colors text-center"
            >
              View
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="flex-1 px-3 py-2 text-sm bg-black/10 hover:bg-black/20 border border-black/20 text-black rounded transition-colors text-center"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
