"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50/30 animate-gradient" />

      {/* Floating ambient orbs */}
      <div className="absolute top-1/4 right-[20%] w-[400px] h-[400px] bg-primary-200/15 rounded-full blur-[100px] animate-pulse-soft pointer-events-none" />
      <div className="absolute bottom-1/3 left-[15%] w-[300px] h-[300px] bg-accent-200/15 rounded-full blur-[80px] animate-pulse-soft pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        {/* Logo */}
        <div className="animate-fade-in-up mb-8">
          <img
            src="/logo-transparent.png"
            alt="Advayant Intelligence"
            className="h-20 sm:h-28 w-auto mx-auto object-contain animate-float"
          />
        </div>

        <div className="animate-fade-in-up animate-delay-100">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500 mb-6">
            Advayant Intelligence
          </p>
        </div>

        <h1 className="animate-fade-in-up animate-delay-200 text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-neutral-900 leading-[1.1]">
          Building Intelligence
          <br />
          <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
            for India
          </span>
        </h1>

        <p className="animate-fade-in-up animate-delay-300 mt-6 text-lg text-neutral-500 max-w-lg mx-auto leading-relaxed">
          AI-powered products that solve real, everyday problems
          for Indian consumers.
        </p>

        <div className="animate-fade-in-up animate-delay-400 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/products"
            className="group px-7 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all hover:shadow-xl hover:shadow-neutral-900/10 active:scale-[0.97]"
          >
            Our Products
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline ml-2 transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/about"
            className="px-7 py-3 text-neutral-500 text-sm font-medium rounded-full hover:text-neutral-900 hover:bg-neutral-50 transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-600">
        <div className="w-5 h-8 rounded-full border-2 border-neutral-300 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-neutral-400 rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
}

/* ─── PHILOSOPHY ─── */
function Philosophy() {
  const pillars = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Privacy as a Right",
      description:
        "Your data is encrypted on your device before it reaches us. We cannot read your financial information — by design.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Built for Bharat",
      description:
        "Every product starts with understanding Indian realities — UPI, RuPay, 200+ cards, festival spending, and how real people manage money.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
      title: "AI that Serves You",
      description:
        "No data selling, no ads. Our AI works silently in the background so you keep more of what you earn.",
    },
  ];

  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-500 mb-3">
              Our Philosophy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
              What drives everything we build
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100}>
              <div className="group text-center md:text-left">
                <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-5 text-neutral-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-all duration-300">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRODUCT SHOWCASE — FLUX AI ─── */
function ProductShowcase() {
  return (
    <section className="py-28 px-6 bg-neutral-50 relative overflow-hidden grain">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-600 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Live Product
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                FLUX AI
              </h2>
              <p className="text-lg text-neutral-500 leading-relaxed mb-2">
                India&apos;s smartest credit card optimizer.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-8">
                FLUX tells you which card to use for every purchase — maximizing
                your cashback, reward points, and miles.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "Instant card recommendations for any merchant",
                  "Zero-knowledge encryption — your data stays yours",
                  "AI-powered spending insights & leakage detection",
                  "WhatsApp bot for on-the-go optimization",
                  "Smart import via CSV, SMS, photo, or email",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-accent-500 shrink-0 mt-0.5">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://flux.advayant.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-6 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all hover:shadow-lg active:scale-[0.97]"
                >
                  Try FLUX AI
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Visual — FLUX optimizer mockup */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="bg-neutral-900 rounded-2xl p-7 sm:p-8 text-white shadow-2xl shadow-neutral-900/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 100 100" fill="white">
                      <path d="M 50 15 L 60 45 L 50 55 L 40 45 Z" />
                      <path d="M 85 50 L 55 60 L 45 50 L 55 40 Z" />
                      <path d="M 50 85 L 40 55 L 50 45 L 60 55 Z" />
                      <path d="M 15 50 L 45 40 L 55 50 L 45 60 Z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold tracking-tight">FLUX AI</span>
                  <div className="ml-auto flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1.5">Searching</p>
                    <p className="font-medium text-sm">Amazon — Electronics</p>
                    <p className="text-xs text-neutral-500 mt-0.5">₹45,000</p>
                  </div>
                  <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1.5">Recommended</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">HDFC Infinia</p>
                        <p className="text-xs text-neutral-500 mt-0.5">₹1,485 reward value</p>
                      </div>
                      <span className="text-accent-400 font-bold text-2xl">3.3%</span>
                    </div>
                  </div>
                  <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-neutral-500">Runner up</p>
                        <p className="font-medium text-sm text-neutral-300">ICICI Amazon Pay</p>
                      </div>
                      <span className="text-neutral-400 font-semibold">2%</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-accent-500/10 to-accent-400/5 rounded-xl p-4 border border-accent-400/15 text-center">
                    <p className="text-[10px] uppercase tracking-widest text-accent-400/60 mb-0.5">Extra savings</p>
                    <p className="text-2xl font-bold text-accent-400">₹585</p>
                    <p className="text-[10px] text-accent-400/50 mt-0.5">per transaction with FLUX</p>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary-400/10 to-accent-400/10 -z-10 blur-xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── INNOVATION ─── */
function Innovation() {
  const innovations = [
    {
      title: "Open Reward Intelligence API",
      description:
        "India's first open, community-verified database of every card's reward structure. API-first — any app can query the best card for any purchase.",
      badge: "In Development",
      icon: "{ }",
    },
    {
      title: "On-Device Financial AI",
      description:
        "Fine-tuned models that run entirely on your phone. Your financial data never leaves your device — true zero-knowledge intelligence.",
      badge: "R&D Phase",
      icon: "AI",
    },
    {
      title: "Proprietary Model Suite",
      description:
        "FluxClassifier, FluxRewardParser, FluxAnomalyNet — domain-specific AI models trained on Indian financial data.",
      badge: "Training Data",
      icon: "ML",
    },
    {
      title: "Multilingual Voice AI",
      description:
        "Voice-first financial intelligence in Hindi and regional languages. Ask in your language, get the best card instantly.",
      badge: "2026",
      icon: "Hi",
    },
  ];

  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-500 mb-3">
              Innovation
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Building India&apos;s financial AI
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              We&apos;re building proprietary financial intelligence
              infrastructure for India.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {innovations.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <div className="card-hover rounded-2xl p-6 border border-neutral-200 bg-white h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-neutral-50 rounded-xl flex items-center justify-center text-xs font-bold text-neutral-400">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-500">
                    {item.badge}
                  </span>
                </div>
                <h4 className="font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── NUMBERS ─── */
function Numbers() {
  return (
    <section className="py-24 px-6 bg-primary-900 text-white relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-700/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "200+", label: "Indian Cards" },
              { value: "100%", label: "Client-Side Encrypted" },
              { value: "Zero", label: "Data Sold" },
              { value: "3-Tier", label: "AI Stack" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1.5">
                  {stat.value}
                </p>
                <p className="text-xs text-primary-300 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/50 to-white" />

      <ScrollReveal>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-5">
            Interested in what we&apos;re building?
          </h2>
          <p className="text-neutral-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            We&apos;re just getting started. Reach out to learn more about
            Advayant Intelligence and our products.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center px-7 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all hover:shadow-xl hover:shadow-neutral-900/10 active:scale-[0.97]"
          >
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}

/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ProductShowcase />
      <Innovation />
      <Numbers />
      <CTA />
    </>
  );
}
