"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#", label: "Home" },
  { href: "#libraries", label: "Libraries" },
  { href: "https://docs.tooliton.com", label: "Docs" },
  { href: "https://github.com/tooliton", label: "GitHub" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between rounded-full border border-white/10 px-5 py-3 transition-all duration-300 backdrop-blur-xl ${
        isScrolled ? "bg-[#10131e]/90 shadow-lg shadow-black/30" : "bg-[#0b0d13]/70"
      }`}
    >
      <Link href="#" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white">
        <span className="text-xl">⚙️</span>
        Tooliton
      </Link>
      <nav className="flex items-center gap-2 text-sm">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="rounded-full px-3 py-1.5 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
