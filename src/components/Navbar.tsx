"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <header
        className={`pointer-events-auto transition-all duration-500 rounded-full ${scrolled
          ? "glass shadow-xl shadow-black/20"
          : "bg-transparent"
          }`}
      >
        <nav className="px-6 h-14 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0 gap-3">
            {/* Cosmic animated icon */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* Outer orbit/glow */}
              <div className="absolute inset-0 rounded-full border border-white/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-[-4px] rounded-full border border-dashed border-primary-500/30 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Inner core */}
              <div className="relative z-10 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-accent-400 opacity-80 animate-pulse-soft" />
              </div>

              {/* Orbital particle */}
              <div className="absolute top-0 right-1/2 w-1.5 h-1.5 bg-accent-400 rounded-full blur-[1px] animate-[spin_3s_linear_infinite] origin-[50%_16px]" />
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 group-hover:from-white group-hover:via-white group-hover:to-neutral-300 transition-colors">
                advayant
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 text-sm font-medium transition-all rounded-full ${pathname === link.href
                  ? "text-white bg-white/10"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-px h-4 bg-white/10 mx-3" />
            <a
              href="https://flux.advayant.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-1.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] active:scale-[0.97]"
            >
              Try FLUX AI
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 text-neutral-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 pointer-events-auto ${mobileOpen ? "visible" : "invisible"
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${mobileOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute top-20 left-4 right-4 glass rounded-3xl border border-white/10 px-6 py-6 space-y-2 shadow-2xl transition-all duration-300 ${mobileOpen
            ? "translate-y-0 opacity-100 scale-100"
            : "-translate-y-4 opacity-0 scale-95"
            }`}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 text-base font-medium rounded-xl transition-all ${pathname === link.href
                ? "text-white bg-white/10"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-white/10">
            <a
              href="https://flux.advayant.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-3 bg-white text-black text-sm font-semibold rounded-xl hover:bg-neutral-200 transition-colors"
            >
              Try FLUX AI
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
