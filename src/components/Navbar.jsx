
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(`#${e.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#home"
          onClick={() => handleLinkClick("#home")}
          className="font-logo text-2xl text-brand"
        >
          imenecodes
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-6 text-sm sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => handleLinkClick(l.href)}
                className={`transition-colors hover:text-brand ${
                  active === l.href ? "text-brand" : "text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition-colors hover:border-brand hover:text-brand sm:hidden"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        {/* Mobile dropdown */}
        {menuOpen && (
          <ul className="absolute inset-x-0 top-16 flex flex-col gap-1 border-b border-white/10 bg-black/95 p-4 shadow-xl sm:hidden">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => handleLinkClick(l.href)}
                  className={`block rounded-lg px-4 py-3 text-sm transition-colors hover:bg-brand/10 hover:text-brand ${
                    active === l.href
                      ? "bg-brand/10 text-brand"
                      : "text-white"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

