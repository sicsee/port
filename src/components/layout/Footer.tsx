import { footerNote, site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-700 pt-4 pb-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm text-neutral-500">
        <p>
          © {year} {site.name}
        </p>
        <p>{footerNote}</p>
      </div>
    </footer>
  );
}
