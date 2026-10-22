
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "PoultryChain",
    subtitle: "AI & Blockchain Supply Chain",
    description:
      "A supply chain management system combining demand forecasting, anomaly detection, and vehicle routing optimization with blockchain-based traceability for poultry products.",
    tags: [
      "Python",
      "Machine Learning",
      "Hyperledger Fabric",
      "Flask",
      "Node.js",
      "OR-Tools",
    ],
    image: null,
    live: null,
  },
  {
    id: 2,
    title: "Souqna",
    subtitle: "Online Classifieds Marketplace",
    description:
      "A classifieds marketplace inspired by platforms like Ouedkniss, built to let users browse and publish listings through a structured web application.",
    tags: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST APIs",
    ],
    image: null,
    live: null,
  },
  {
    id: 3,
    title: "Maison Élise",
    subtitle: "Fashion E-commerce Store",
    description:
      "An elegant fashion storefront featuring product collections, image galleries, and an admin dashboard for managing products and images.",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Supabase",
    ],
    image: null,
    live: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-5 pt-24"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-zinc-300">
          A few projects through which I've explored software
          development, artificial intelligence, and practical
          solutions to real-world problems.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.id}
            className="group overflow-hidden rounded-lg border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/60"
          >
            {p.image ? (
              <img
                src={p.image}
                alt={`${p.title} preview`}
                className="h-40 w-full object-cover"
              />
            ) : (
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-violet-950 via-purple-800 to-indigo-950">
                <span className="text-2xl font-semibold tracking-wide text-white/90">
                  {p.title}
                </span>
              </div>
            )}

            <div className="p-5">
              <p className="text-[10px] uppercase tracking-widest text-brand">
                {p.subtitle}
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                {p.title}
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="cursor-default rounded-full border border-brand/50 px-3 py-1 text-[10px] transition-colors duration-200 hover:border-purple-500 hover:bg-purple-500 hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-brand transition-colors hover:text-purple-400"
                >
                  Live Demo
                  <FiExternalLink size={13} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

