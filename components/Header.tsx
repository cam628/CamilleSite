"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const navItems = [
  { href: "#about", key: "about" },
  { href: "#experience", key: "experience" },
  { href: "#services", key: "services" },
  { href: "#travel", key: "travel" },
  { href: "#contact", key: "contact" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link
          href="#top"
          className="text-xl font-light tracking-wider text-charcoal transition-opacity hover:opacity-70"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Camille Fénéon
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden gap-8 text-sm font-light tracking-wide md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 transition-all duration-300 hover:text-[#c9a961] hover:tracking-wider relative group"
              >
                {t(`nav.${item.key}`)}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9a961] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 rounded-sm border border-[#c9a961] bg-transparent px-4 py-2 text-xs font-light uppercase tracking-wider text-[#4a4a4a] transition-all duration-300 hover:bg-[#c9a961] hover:text-white"
            aria-label="Toggle language"
          >
            <span className={language === "fr" ? "font-medium" : ""}>FR</span>
            <span className="text-[#c9a961]">/</span>
            <span className={language === "en" ? "font-medium" : ""}>EN</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
