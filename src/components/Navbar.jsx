import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", id: "hero" },
  { label: "Couple", id: "couple" },
  { label: "Story", id: "story" },
  { label: "Events", id: "events" },
  { label: "Gallery", id: "gallery" },
  { label: "RSVP", id: "rsvp" },
];

export default function Navbar({ visible }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-ivory/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-5 sm:px-8 py-3 sm:py-4">
        <button
          onClick={() => scrollTo("hero")}
          className={`font-heading text-lg sm:text-xl focus-ring rounded transition-colors ${
            scrolled ? "text-maroon" : "text-ivory"
          }`}
        >
          G <span className="text-gold-light">&amp;</span> A
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`text-sm tracking-wide uppercase transition-colors focus-ring rounded hover:text-gold ${
                  scrolled ? "text-brown/80" : "text-ivory/90"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`md:hidden focus-ring rounded p-1 transition-colors ${
            scrolled ? "text-maroon" : "text-ivory"
          }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-ivory/98 backdrop-blur-sm border-t border-gold/30"
          >
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="w-full text-left px-6 py-3 text-sm tracking-wide uppercase text-brown/80 hover:text-maroon hover:bg-gold/5 transition-colors focus-ring"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
