import Link from "next/link";

export default function Hero() {
  return (
    <section className="mt-25 space-y-5 md:max-w-4xl md:text-lg md:px-10 lg:px-20">
      <h1 className="font-bold text-white text-5xl mb-10">Portfolio</h1>
      <p className="text-white/80 leading-relaxed">
        My name is <span className="bold">Nicolas Godinho</span>, and I'm a{" "}
        <span className="bold">Software Development</span> student.
      </p>

      <p className="text-white/80 leading-relaxed mt-4">
        I enjoy building web applications with modern technologies such as{" "}
        <span className="bold">React</span>,{" "}
        <span className="bold">Next.js</span>,{" "}
        <span className="bold">JavaScript</span>,{" "}
        <span className="bold">Laravel</span>, and{" "}
        <span className="bold">PHP</span>.
      </p>

      <div className="flex items-center gap-3">
        <Link href="/about">
          <button className="btn text-sm">read more</button>
        </Link>
        <Link href="/download">
          <button className="btn text-sm">download cv</button>
        </Link>
      </div>
    </section>
  );
}
