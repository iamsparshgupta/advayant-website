import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/components/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white relative overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-accent-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-4 group cursor-default inline-block">
              <Logo className="h-10 w-auto text-white opacity-90 transition-[transform,filter] duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(255,224,130,0.3)] mb-2" />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-8">
              Building AI-powered products that solve real, everyday problems
              for Indian consumers. Intelligence, thoughtfully applied.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-600">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 shadow-[0_0_8px_theme(colors.primary.500/60)]" />
              Made in India
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 mb-5">
              Company
            </h4>
            <ul className="space-y-3.5">
              <li>
                <Link href="/about" className="text-sm text-neutral-500 hover:text-white transition-colors link-underline">
                  About
                </Link>
              </li>
              <li>
                <span className="text-sm text-neutral-600 cursor-default">
                  Careers
                </span>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-neutral-500 hover:text-white transition-colors link-underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-neutral-500 hover:text-white transition-colors link-underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Research */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 mb-5">
              Research
            </h4>
            <ul className="space-y-3.5">
              <li>
                <span className="text-sm text-neutral-600 cursor-default">
                  Publications
                </span>
              </li>
              <li>
                <span className="text-sm text-neutral-600 cursor-default">
                  Open Source
                </span>
              </li>
              <li>
                <span className="text-sm text-neutral-600 cursor-default">
                  Safety &amp; Ethics
                </span>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 mb-5">
              Products
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a href="https://flux.advayant.com" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-500 hover:text-white transition-colors link-underline">
                  FLUX AI
                </a>
              </li>
              <li>
                <a href="https://klaryx.advayant.com" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-500 hover:text-white transition-colors link-underline">
                  Klaryx
                </a>
              </li>
              <li>
                <span className="text-sm text-neutral-600 cursor-default">
                  Developer APIs
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            &copy; {year} Advayant Intelligence Pvt. Ltd.
          </p>
          <a href="mailto:hello@advayant.com" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
            hello@advayant.com
          </a>
        </div>
      </div>
    </footer>
  );
}
