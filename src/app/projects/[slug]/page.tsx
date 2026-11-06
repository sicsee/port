import { type Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { carouselProjects, type CarouselProject } from "@/content/carousel-projects";
import { getCaseStudy, type CaseStudy } from "@/content/case-studies";
import { notFound } from "next/navigation";

const LINE = "color-mix(in srgb, currentColor 20%, transparent)";

export function generateStaticParams() {
  return carouselProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = carouselProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.tagline,
  };
}

function StatusBadge({ status }: { status: CaseStudy["status"] }) {
  const label =
    status === "shipped"
      ? "✓ shipped"
      : status === "course exercise"
        ? "· course exercise"
        : "· in development";
  return (
    <span
      className="text-xs font-mono tracking-wider opacity-70"
      aria-label={`project status: ${status}`}
    >
      {label}
    </span>
  );
}

function Metrics({ metrics }: { metrics: CaseStudy["metrics"] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-sm border p-4 text-center"
          style={{ borderColor: LINE }}
        >
          <p className="font-pixel text-2xl font-black tracking-wider">{metric.value}</p>
          <p className="mt-1 text-xs opacity-60">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

function CaseImage({ project }: { project: CarouselProject }) {
  return (
    <div
      className="aspect-[16/10] overflow-hidden rounded-sm border mt-8"
      style={{ borderColor: LINE }}
    >
      {project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="h-full w-full object-cover object-top"
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-2"
          style={{ backgroundColor: "color-mix(in srgb, currentColor 6%, transparent)" }}
        >
          <p className="font-mono text-xs text-neutral-400">~/projects/{project.slug}</p>
          <p className="font-pixel text-xl font-black tracking-wider">{project.title}</p>
        </div>
      )}
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = carouselProjects.find((p) => p.slug === slug);
  if (!project) notFound();
  const study = getCaseStudy(slug);

  const index = carouselProjects.findIndex((p) => p.slug === slug);
  const neighbors = [
    carouselProjects[(index - 1 + carouselProjects.length) % carouselProjects.length],
    carouselProjects[(index + 1) % carouselProjects.length],
  ];

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl px-4 pt-6 pb-12">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h1 className="font-pixel text-2xl font-black tracking-wider">
              * {project.slug}
            </h1>
            {study ? <StatusBadge status={study.status} /> : null}
          </div>
          <p className="mt-2 opacity-70">{project.tagline}</p>
          <p className="mt-1 text-sm opacity-60">
            {study ? `${study.role} · ${study.period}` : project.stack.join(" · ").toLowerCase()}
          </p>
        </Reveal>

        <CaseImage project={project} />
        {study ? <Metrics metrics={study.metrics} /> : null}

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm opacity-70 transition-opacity hover:opacity-100"
            >
              <Github className="h-4 w-4" aria-hidden="true" /> source
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm opacity-70 transition-opacity hover:opacity-100"
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" /> live
            </a>
          )}
        </div>

        {study ? (
          <>
            {study.problem ? (
              <section className="mt-10">
                <SectionHeader title="context" className="mb-3" />
                <p className="max-w-[65ch] opacity-80">{study.problem}</p>
              </section>
            ) : null}

            {study.solution ? (
              <section className="mt-10">
                <SectionHeader title="approach" className="mb-3" />
                <p className="max-w-[65ch] opacity-80">{study.solution}</p>
              </section>
            ) : null}

            {study.decisions.length > 0 ? (
              <section className="mt-10">
                <SectionHeader title="key decisions" className="mb-3" />
                <ul
                  className="space-y-2 p-4 rounded-sm border text-sm"
                  style={{ borderColor: LINE }}
                >
                  {study.decisions.map((decision) => (
                    <li key={decision.label} className="flex gap-2">
                      <span className="opacity-60" aria-hidden="true">
                        ›
                      </span>
                      <p>
                        <span className="font-semibold">{decision.label}</span>
                        <span className="opacity-70">: {decision.detail}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {study.lessons.length > 0 ? (
              <section className="mt-10">
                <SectionHeader title="lessons learned" className="mb-3" />
                <ul className="space-y-2">
                  {study.lessons.map((lesson) => (
                    <li key={lesson} className="flex gap-2 opacity-80">
                      <span className="opacity-60" aria-hidden="true">
                        ›
                      </span>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </>
        ) : (
          <section className="mt-10">
            <SectionHeader title="what it does" className="mb-3" />
            <p className="opacity-80">{project.tagline}</p>
            {project.highlights.length > 0 ? (
              <ul
                className="mt-4 space-y-2 rounded-sm border p-4 text-sm"
                style={{ borderColor: LINE }}
              >
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2 opacity-80">
                    <span className="opacity-60" aria-hidden="true">
                      ›
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        )}

        {project.stack.length > 0 ? (
          <section className="mt-10">
            <SectionHeader title="stack" className="mb-3" />
            <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
              {project.stack.map((tech) => (
                <li key={tech} className="tech-tag">
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <nav
          aria-label="Project navigation"
          className="mt-12 flex items-baseline justify-between gap-4 border-t pt-4"
          style={{ borderColor: LINE }}
        >
          <Link
            href={`/projects/${neighbors[0].slug}`}
            className="text-sm opacity-60 transition-opacity hover:opacity-100"
          >
            ← {neighbors[0].title}
          </Link>
          <Link
            href={`/projects/${neighbors[1].slug}`}
            className="text-sm opacity-60 transition-opacity hover:opacity-100"
          >
            {neighbors[1].title} →
          </Link>
        </nav>
      </main>
      <div className="mx-auto w-full max-w-3xl px-4">
        <Footer />
      </div>
    </>
  );
}
