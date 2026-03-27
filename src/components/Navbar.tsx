"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
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

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <header
        className={`pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full ${scrolled
          ? "glass shadow-2xl shadow-black/80 scale-[1.02]"
          : "bg-transparent"
          }`}
      >
        <nav className="px-6 h-14 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0 relative z-10 transition-transform duration-500 hover:scale-105">
            <div className="h-10 sm:h-12 w-auto">
              <Logo className="h-full w-auto text-white overflow-visible transition-transform duration-500 hover:drop-shadow-[0_0_12px_rgba(255,224,130,0.5)]" />
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
              href="https://klaryx.advayant.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-1.5 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-all active:scale-[0.97] mr-2"
            >
              Klaryx
            </a>
            <a
              href="https://pryz.advayant.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-1.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] active:scale-[0.97]"
            >
              Try Pryz
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-3 -mr-2 text-neutral-400 hover:text-white transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
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
          <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href="https://klaryx.advayant.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-3 border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Klaryx
            </a>
            <a
              href="https://pryz.advayant.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-3 bg-white text-black text-sm font-semibold rounded-xl hover:bg-neutral-200 transition-colors"
            >
              Try Pryz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
