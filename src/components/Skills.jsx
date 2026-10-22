
const skills = [
  {
    title: "Software Development",
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "Node.js",
      "Express.js",
      "Object-Oriented Programming",
      "REST APIs",
    ],
  },
  {
    title: "AI & Emerging Technologies",
    tags: [
      "Python",
      "Machine Learning",
      "Blockchain",
      "Hyperledger Fabric",
    ],
  },
  {
    title: "Databases & Networking",
    tags: [
      "SQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "CCNA 1",
      "CCNA 2 – SRWE",
    ],
  },
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-20">
      <h2 className="text-2xl font-bold">
        Skills &amp; Technologies
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {skills.map((s) => (
          <div
            key={s.title}
            className="rounded-lg border border-line bg-card p-4"
          >
            <h3 className="text-sm font-semibold">{s.title}</h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="cursor-default rounded-full border border-brand/50 px-3 py-1 text-[10px] transition-all duration-200 hover:border-purple-500 hover:bg-purple-500 hover:text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

