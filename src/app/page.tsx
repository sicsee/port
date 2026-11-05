import type { CSSProperties } from 'react';
import { Header } from '@/components/layout/Header';
import { Experience, Education } from '@/components/experience/Experience';
import { Projects, Skills } from '@/components/projects/Projects';
import { Contact } from '@/components/contact/Contact';
import { Contributions } from '@/components/github/Contributions';
import { Footer } from '@/components/layout/Footer';
import { intro, site } from '@/content/site';

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-3xl space-y-4 px-4">
        <section className="pt-0">
          <h1
            className="print-line font-pixel text-2xl leading-tight font-black tracking-wide sm:text-3xl"
            style={{ '--print-steps': site.role.length } as CSSProperties}
          >
            {site.role}
          </h1>
          {intro.split('\n').map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 24)}
              className={`reveal mt-2 text-neutral-300 first:mt-3 ${index < 8 ? `reveal-delay-${index + 2}` : 'reveal-delay-9'}`}
            >
              {paragraph}
            </p>
          ))}
        </section>

        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <Contributions />
      </main>

      <footer className="mx-auto w-full max-w-3xl py-4 px-4">
        <Footer />
      </footer>
    </>
  );
}
