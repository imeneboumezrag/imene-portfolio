
export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-5 pt-16 text-center"
    >
      <span className="mb-6 rounded-full border border-brand/60 bg-brand/10 px-4 py-1.5 text-xs">
        Open to New Opportunities
      </span>

      <h1 className="text-5xl font-extrabold sm:text-6xl">
        Hi, I'm <span className="text-brand">Imene</span>
      </h1>

      <h2 className="mt-6 text-3xl font-semibold text-zinc-300 sm:text-4xl">
        Full-Stack Developer
      </h2>

      <p className="mt-8 max-w-xl text-base leading-relaxed">
        I'm a recent Software Engineering graduate with a passion
        for building useful, thoughtful digital solutions. I enjoy
        exploring new technologies, solving problems, and turning
        ideas into reality. Always learning, growing, and looking
        forward to new opportunities.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="rounded-full bg-brand px-8 py-3 text-sm font-medium transition-colors hover:bg-brand-dark"
        >
          View My Projects
        </a>

        <a
          href="#contact"
          className="rounded-full border-2 border-brand px-8 py-3 text-sm font-medium transition-colors hover:bg-brand/10"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}

