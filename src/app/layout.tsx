import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible, Doto } from "next/font/google";
import { site } from "@/content/site";
import { RevealObserver } from "@/components/RevealObserver";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
  display: "swap",
});

const doto = Doto({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-doto",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    type: "website",
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

// Prevents theme flash: applies the persisted/system light class before paint.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var prefersLight=window.matchMedia("(prefers-color-scheme: light)").matches;if(t==="light"||(!t&&prefersLight)){document.documentElement.classList.add("light")}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${atkinson.variable} ${doto.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* devicon glyphs for the skill chips (loaded like atxl.in does) */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      {/* suppressHydrationWarning: browser extensions inject attributes directly
          on <body> (e.g. cz-shortcut-listen), which breaks React's HTML diff */}
      <body className="antialiased" suppressHydrationWarning>
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
