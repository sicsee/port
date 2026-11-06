import { Github, Linkedin, Mail } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

const contacts = [
  { label: "email", href: `mailto:${site.email}`, icon: Mail },
  { label: "github", href: site.links.github, icon: Github },
  { label: "linkedin", href: site.links.linkedin, icon: Linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-neutral-700 py-5 sm:py-6">
      <SectionHeader title="contact" className="mb-4" />
      <p className="mb-4 text-neutral-400">you can find me at:</p>
      <ul className="flex flex-wrap items-start gap-[var(--gap-tight)]" aria-label="Contact links">
        {contacts.map((contact, index) => (
          <li key={contact.label}>
            <Reveal className={`reveal-delay-${Math.min(index + 1, 9)}`}>
              <a
                href={contact.href}
                target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="tech-tag link-tag"
              >
                <contact.icon className="h-4 w-4" aria-hidden="true" />
                <span className="font-pixel tracking-wider">{contact.label}</span>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
