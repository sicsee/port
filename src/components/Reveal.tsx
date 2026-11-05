import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Milliseconds added to the CSS transition delay, for staggered reveals. */
  delayMs?: number;
};

/**
 * Plain wrapper that marks its subtree for scroll reveal.
 * The transition itself is CSS (globals.css: `.reveal` + `.reveal-delay-N`),
 * and the global <RevealObserver /> (mounted in the root layout) adds `.in-view`
 * when the element enters the viewport. No per-instance observer here —
 * one observer handles every `reveal` on the page.
 */
export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  return (
    <div
      className={cn("reveal", className)}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
