import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-black/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 md:py-6 flex justify-between items-center">
          <Header />
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-24 md:pt-32 max-w-6xl mx-auto px-6 md:px-10">
        <Hero />
      </div>

      {/* Scroll divider */}
      <div className="h-20"></div>
    </main>
  );
}
