import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProjectsCarousel } from "@/components/projects/ProjectsCarousel";
import { carouselProjects } from "@/content/carousel-projects";
import { caseSlugs } from "@/content/case-studies";

export default function ProjectsPage() {
  return (
    // fixed-viewport layout: the tab itself never scrolls
    // (the wheel/arrow keys still navigate the carousel)
    <div className="flex h-dvh flex-col overflow-hidden">
      <Header />
      <main className="relative flex w-full min-h-0 flex-1 flex-col">
        <div className="mx-auto w-full max-w-3xl px-4 pt-4 pb-2">
          <h1 className="font-pixel text-lg font-black tracking-wider mb-1">
            * projects
          </h1>
          <p className="text-sm opacity-60">
            use the mouse wheel, arrow keys, drag, or click the side cards.
          </p>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden">
          <ProjectsCarousel projects={carouselProjects} caseSlugs={caseSlugs} />
        </div>

        <Footer />
      </main>
    </div>
  );
}
