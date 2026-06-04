import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="content space-y-5 p-6 md:p-7 lg:p-10">
      <div className="sm:flex sm:justify-between sm:items-center">
        <Header />
        <Navbar />
      </div>
      <Hero />
    </main>
  );
}
