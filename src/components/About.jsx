
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 pt-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">About Me</h2>

          <div className="mt-4 space-y-5 text-sm leading-relaxed text-zinc-400">
            <p>
              I'm a recent Software Engineering graduate with a
              growing interest in artificial intelligence, data,
              and building reliable software. I enjoy understanding
              how things work, solving problems, and exploring how
              technology can be used to create practical solutions.
            </p>

            <p>
              My interests span software development, data analysis,
              and AI, particularly machine learning and large
              language models. I'm always looking to strengthen my
              foundations, explore new ideas, and put what I learn
              into practice through projects.
            </p>

            <p>
              I'm still at the beginning of my professional journey,
              and I see every challenge as an opportunity to learn,
              improve, and become a better engineer. I'm looking
              forward to working with others, contributing what I
              can, and continuing to grow along the way.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/cat.jpg"
            alt="Pixel art cat"
            className="w-64 sm:w-80"
          />
        </div>
      </div>
    </section>
  );
}
