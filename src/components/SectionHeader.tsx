import { cn } from "@/lib/utils";

/**
 * Section heading in the markdown-ish prompt style: `* title`
 * with the title rendered in the Doto display font (via the h2 base style).
 */
export function SectionHeader({ title, className }: { title: string; className?: string }) {
  return (
    <h2 className={cn("flex items-baseline gap-2", className)}>
      <span className="marker prompt">*</span>
      <span>{title}</span>
    </h2>
  );
}
