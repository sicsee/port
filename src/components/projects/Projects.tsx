import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { projects, skills, skillsIntro, type SkillLevel } from "@/content/site";
import { cn } from "@/lib/utils";

// home shows only the three flagship projects — the full shelf lives at /projects
const FEATURED_COUNT = 3;

export function Projects() {
  const featured = projects.slice(0, FEATURED_COUNT);

  return (
    <section id="projects" className="border-t border-neutral-700 py-5 sm:py-6">
      <SectionHeader title="projects" className="mb-4" />
      <ul className="grid gap-[var(--spacing-6)]">
        {featured.map((project, index) => (
          <li key={project.title}>
            <Reveal className={index < 9 ? `reveal-delay-${index + 1}` : "reveal-delay-9"}>
              {project.href ? (
                <h3>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors duration-300"
                  >
                    {project.title}
                  </a>
                </h3>
              ) : project.slug ? (
                <h3>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:text-accent transition-colors duration-300"
                  >
                    {project.title}
                  </Link>
                </h3>
              ) : (
                <h3>{project.title}</h3>
              )}
              <p className="mt-1 text-neutral-400">{project.description}</p>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-neutral-400 hover:text-accent hover:underline"
                >
                  view project <span className="text-neutral-500">→</span>
                </a>
              ) : project.slug ? (
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-2 inline-block text-sm text-neutral-400 hover:text-accent hover:underline"
                >
                  view case <span className="text-neutral-500">→</span>
                </Link>
              ) : null}
            </Reveal>
          </li>
        ))}
      </ul>

      {/* invitation to the projects gallery */}
      <Reveal className="mt-6 reveal-delay-4">
        <Link
          href="/projects"
          className="tech-tag link-tag inline-flex"
        >
          <span className="font-pixel text-[0.8rem] tracking-wider">the full shelf</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  );
}

const LEVEL_LABELS: Record<SkillLevel, string> = {
  5: "core stack",
  4: "strong",
  3: "working",
  2: "explored",
  1: "touched",
};

function SkillChip({ skill, index }: { skill: (typeof skills)[number]; index: number }) {
  return (
    <li>
      <Reveal className={`reveal-delay-${Math.min(index + 1, 9)}`}>
        <span
          tabIndex={0}
          className="tech-tag skill-tag"
          title={`${skill.name} — ${LEVEL_LABELS[skill.level]}`}
        >
          {skill.icon ? <i className={cn("devicon", skill.icon)} aria-hidden="true" /> : null}
          <span className="font-pixel tracking-wider">{skill.name}</span>

          {/* hover tooltip: proficiency + where it was used */}
          <span className="skill-tip" role="tooltip">
            <span className="flex items-baseline justify-between gap-2">
              <span className="font-pixel text-[0.65rem] font-black tracking-wider text-white">
                {LEVEL_LABELS[skill.level]}
              </span>
              <span aria-hidden="true" className="font-mono text-[0.7rem] leading-none">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < skill.level ? "text-accent" : "text-neutral-700"}>
                    ●
                  </span>
                ))}
              </span>
            </span>
            <span className="mt-1 block opacity-80">{skill.blurb}</span>
            {skill.usedIn.length > 0 ? (
              <span className="mt-2 block text-[0.65rem] text-neutral-500">
                used in: {skill.usedIn.map((item) => item.title).join(" · ")}
              </span>
            ) : (
              <span className="mt-2 block text-[0.65rem] text-neutral-500">
                not tied to a project yet
              </span>
            )}
          </span>
        </span>
      </Reveal>
    </li>
  );
}

export function Skills() {
  return (
    <section id="skills" className="border-t border-neutral-700 py-5 sm:py-6">
      <SectionHeader title="skills" className="mb-4" />
      <p className="mb-4 text-neutral-400">{skillsIntro}</p>
      <ul className="flex flex-wrap items-start gap-x-3 gap-y-3" aria-label="Skills">
        {skills.map((skill, index) => (
          <SkillChip key={skill.name} skill={skill} index={index} />
        ))}
      </ul>
    </section>
  );
}
