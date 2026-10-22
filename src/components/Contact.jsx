
import { useState } from "react";
import { FiMail, FiLinkedin, FiSend } from "react-icons/fi";

const email = "boumeezraag.imeene@gmail.com";

const socials = [
  {
    label: "Email",
    href: `mailto:${email}`,
    Icon: FiMail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/imene-boumezrag-7692442b6/",
    Icon: FiLinkedin,
  },
];

const inputClass =
  "w-full rounded-lg border border-brand/50 bg-transparent px-3 py-2.5 text-sm outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact - ${form.name}`
    );

    const body = encodeURIComponent(
      `Hi Imene,\n\n${form.message}\n\nBest regards,\n${form.name}\n${form.email}`
    );

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-5 py-24"
    >
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-brand">
          Get in touch
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          Let's Connect
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-zinc-400">
          I'm always happy to connect with people, learn from
          new experiences, and explore opportunities to grow
          as a software engineer. If you'd like to talk about
          a project, an opportunity, or technology, feel free
          to reach out.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <form
          onSubmit={onSubmit}
          className="rounded-xl border border-line bg-card p-5"
        >
          <h3 className="text-sm font-semibold">
            Send me a message
          </h3>

          <label
            className="mt-5 block text-xs font-medium"
            htmlFor="name"
          >
            Your name
          </label>

          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            required
            className={`mt-2 ${inputClass}`}
            placeholder="How should I address you?"
          />

          <label
            className="mt-4 block text-xs font-medium"
            htmlFor="email"
          >
            Your email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
            className={`mt-2 ${inputClass}`}
            placeholder="you@example.com"
          />

          <label
            className="mt-4 block text-xs font-medium"
            htmlFor="message"
          >
            Your message
          </label>

          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={onChange}
            required
            className={`mt-2 resize-none ${inputClass}`}
            placeholder="I'd love to hear from you..."
          />

          <button
            type="submit"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3 text-xs font-medium transition-all hover:bg-purple-600"
          >
            <FiSend size={14} />
            Send Message
          </button>

          <p className="mt-3 text-center text-[10px] text-zinc-500">
            Opens your email app to send your message.
          </p>
        </form>

        <div className="flex flex-col gap-6">
          <div className="flex-1 rounded-xl border border-line bg-card p-5">
            <h3 className="text-sm font-semibold">
              A little about what I do
            </h3>

            <p className="mt-3 text-xs leading-relaxed text-zinc-400">
              I'm a recent Software Engineering graduate
              interested in building useful software and
              exploring the possibilities of artificial
              intelligence and machine learning. I'm eager
              to keep learning, take on new challenges, and
              contribute to meaningful projects.
            </p>

            <div className="mt-5 space-y-3">
              {[
                "Software Development",
                "Artificial Intelligence & Machine Learning",
                "Blockchain & Emerging Technologies",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-xs text-zinc-300"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-line bg-card p-5">
            <h3 className="text-sm font-semibold">
              Find me online
            </h3>

            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={label === "LinkedIn" ? "_blank" : undefined}
                  rel={
                    label === "LinkedIn"
                      ? "noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-2 rounded-full border border-brand/40 px-4 py-2 text-xs transition-all duration-200 hover:border-purple-500 hover:bg-purple-500 hover:text-white"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>

            <a
              href={`mailto:${email}`}
              className="mt-5 block break-all text-xs text-zinc-400 transition-colors hover:text-purple-400"
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
