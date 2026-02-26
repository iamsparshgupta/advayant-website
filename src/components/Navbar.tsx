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
          <Link href="/" className="flex items-center group shrink-0 relative z-10 transition-transform duration-500 hover:scale-105">
            <div className="h-10 sm:h-12 w-auto">
              <svg viewBox="0 0 520 140" className="h-full w-auto text-white overflow-visible">
                {/* Icon Group */}
                <g transform="translate(60, 60)">
                  {/* Arc: Radius 28, centered at (0,0), exactly 36-degree gap at -36 deg (top-right) */}
                  <path 
                    d="M 26.6 -8.6 A 28 28 0 1 1 16.5 -22.6" 
                    stroke="currentColor" 
                    strokeWidth="3.5" 
                    fill="none" 
                    strokeLinecap="round" 
                  />
                  
                  {/* Center Nucleus Dot (Gold) */}
                  <circle cx="0" cy="0" r="5" fill="#C5A55A"/>
                  
                  {/* Swooping Tail (Gold) - matching original aesthetic */}
                  <path 
                    d="M -18 25 Q -38 15 -28 -5" 
                    stroke="#C5A55A" 
                    strokeWidth="1.5" 
                    fill="none" 
                    strokeLinecap="round" 
                    opacity="0.8"
                  />

                  {/* 36-Degree Ray of Gold Light Animation - shoots exactly from center dot */}
                  <line 
                    x1="0" y1="0" 
                    x2="36.4" y2="-26.4" 
                    stroke="#C5A55A" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    className="opacity-0 drop-shadow-[0_0_8px_#C5A55A] animate-[goldRay_2s_ease-out_infinite]"
                  />
                  
                  <style>{`
                    @keyframes goldRay {
                      0% { stroke-dasharray: 0, 100; stroke-dashoffset: 0; opacity: 0; }
                      20% { opacity: 1; stroke-dasharray: 20, 100; stroke-dashoffset: 0; }
                      70% { stroke-dasharray: 35, 100; stroke-dashoffset: -35; opacity: 1; }
                      100% { stroke-dasharray: 0, 100; stroke-dashoffset: -60; opacity: 0; }
                    }
                  `}</style>
                </g>

                {/* Typography (Scaled Up 1.5x to keep it large) */}
                <text x="110" y="65" fontFamily="Georgia, 'Playfair Display', serif" fontSize="54" fontWeight="400" fill="currentColor" letterSpacing="3">advayant</text>
                <line x1="110" y1="90" x2="177" y2="90" stroke="#C5A55A" strokeWidth="1" opacity="0.6"/>
                <text x="186" y="94" fontFamily="'Inter', 'Helvetica', sans-serif" fontSize="15" fontWeight="400" fill="rgba(255,255,255,0.7)" letterSpacing="9">INTELLIGENCE</text>
                <line x1="418" y1="90" x2="485" y2="90" stroke="#C5A55A" strokeWidth="1" opacity="0.6"/>
                <circle cx="297.5" cy="115" r="3.5" fill="#C5A55A" opacity="0.8"/>
              </svg>
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
