// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "backdrop-blur bg-white/70 dark:bg-zinc-900/60 border-b" : ""}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-bold">Affan.dev</Link>
        <ul className="hidden gap-6 md:flex">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="hover:underline">{l.label}</a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-zinc-800 md:inline-block"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
