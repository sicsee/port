import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { education, experience, type Education, type Experience } from "@/content/site";

function ExperienceItem({ item, index }: { item: Experience; index: number }) {
  const delayClass = index < 9 ? `reveal-delay-${index + 1}` : "reveal-delay-9";
  return (
    <li className={`timeline-item${item.current ? " timeline-current" : ""}`}>
      <Reveal className={delayClass}>
        <div className="timeline-header">
          <div>
            <h3 className="flex items-baseline gap-2">
              <span className="marker text-neutral-500">{index + 1}.</span>
              <span>{item.role}</span>
            </h3>
            <p className="timeline-company text-neutral-400">{item.company}</p>
          </div>
          <div className="timeline-dates text-neutral-400">{item.dates}</div>
        </div>
        <p className="timeline-duration text-sm text-neutral-500">{item.duration}</p>
        {item.description ? (
          <p className="mt-3 text-neutral-300">{item.description}</p>
        ) : null}
      </Reveal>
    </li>
  );
}

function EducationItem({ item, index }: { item: Education; index: number }) {
  const delayClass = index < 9 ? `reveal-delay-${index + 1}` : "reveal-delay-9";
  return (
    <li>
      <Reveal className={delayClass}>
        <div className="timeline-header">
          <div>
            <h3>{item.degree}</h3>
            <p className="text-neutral-400">{item.school}</p>
          </div>
          <p className="text-neutral-500">{item.dates}</p>
        </div>
      </Reveal>
    </li>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-t border-neutral-700 py-4">
      <SectionHeader title="experience" className="mb-4" />
      <Reveal className="reveal-delay-1">
        <ol className="timeline">
          {experience.map((item, index) => (
            <ExperienceItem key={`${item.company}-${item.dates}`} item={item} index={index} />
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="border-t border-neutral-700 py-4">
      <SectionHeader title="education" className="mb-4" />
      <ul className="grid gap-[var(--gap-relaxed)]">
        {education.map((item, index) => (
          <EducationItem key={item.degree} item={item} index={index} />
        ))}
      </ul>
    </section>
  );
}
