"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountUp } from "@/components/CountUp";

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white to-accent-50/20 animate-gradient" />

      {/* Floating ambient orbs */}
      <div className="absolute top-1/4 right-[20%] w-[500px] h-[500px] bg-primary-200/10 rounded-full blur-[120px] animate-pulse-soft pointer-events-none" />
      <div className="absolute bottom-1/3 left-[15%] w-[350px] h-[350px] bg-accent-200/10 rounded-full blur-[100px] animate-pulse-soft pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Logo */}
        <div className="animate-fade-in-up mb-6">
          <Image
            src="/logo-transparent.png"
            alt="Advayant Intelligence"
            width={200}
            height={96}
            className="h-20 sm:h-24 w-auto mx-auto object-contain"
            priority
          />
        </div>

        <div className="animate-fade-in-up animate-delay-100">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-primary-400 mb-8">
            Advayant Intelligence
          </p>
        </div>

        <h1 className="animate-fade-in-up animate-delay-200 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.05]">
          Building Intelligence
          <br />
          <span className="bg-gradient-to-r from-primary-800 via-primary-600 to-primary-500 bg-clip-text text-transparent">
            for India
          </span>
        </h1>

        <p className="animate-fade-in-up animate-delay-300 mt-8 text-lg sm:text-xl text-neutral-400 max-w-xl mx-auto leading-relaxed font-light">
          AI-powered products that solve real, everyday problems
          for a billion Indian consumers.
        </p>

        <div className="animate-fade-in-up animate-delay-400 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/products"
            className="group px-8 py-3.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all hover:shadow-xl hover:shadow-neutral-900/15 active:scale-[0.97]"
          >
            Explore Products
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline ml-2 transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/about"
            className="px-8 py-3.5 border border-neutral-200 text-neutral-600 text-sm font-medium rounded-full hover:text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 transition-all"
          >
            Our Story
          </Link>
        </div>

        {/* Trust line */}
        <div className="animate-fade-in animate-delay-600 mt-20 flex items-center justify-center gap-6 text-[11px] text-neutral-400 uppercase tracking-wider">
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-300">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Zero-knowledge
          </span>
          <span className="w-1 h-1 rounded-full bg-neutral-300" />
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-300">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Made in India
          </span>
          <span className="w-1 h-1 rounded-full bg-neutral-300" />
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-300">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            AI-first
          </span>
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
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Privacy as a Right",
      description:
        "AES-256 encryption happens on your device before data reaches our servers. We literally cannot read your financial data — and that's by design.",
      highlight: "Client-side encryption",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Built for Bharat",
      description:
        "Our AI understands UPI, RuPay, 200+ credit cards, festival spending patterns, and how real Indian families manage money. Not recycled global models.",
      highlight: "India-specific intelligence",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
        </svg>
      ),
      title: "AI that Serves You",
      description:
        "No data selling. No ads. No dark patterns. Our AI works silently in the background so you keep more of what you earn — not so we can sell your attention.",
      highlight: "Zero data monetization",
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-500 mb-4">
              Our Philosophy
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-neutral-900 leading-tight">
              What drives everything we build
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 120}>
              <div className="group relative">
                <div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center mb-6 text-neutral-400 group-hover:bg-primary-50 group-hover:text-primary-600 transition-all duration-500">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {p.title}
                </h3>
                <p className="text-[13px] text-neutral-500 leading-relaxed mb-4">
                  {p.description}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-500">
                  {p.highlight}
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
    <section className="py-32 px-6 bg-neutral-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-500 mb-4">
              Our First Product
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-neutral-900 mb-4">
              FLUX AI
            </h2>
            <p className="text-lg text-neutral-400 max-w-lg mx-auto">
              India&apos;s smartest credit card optimizer. Know exactly which card to swipe — every time.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Features */}
          <ScrollReveal direction="left">
            <div>
              <div className="space-y-6">
                {[
                  {
                    title: "Instant Optimization",
                    desc: "Tell us the merchant and amount — FLUX instantly tells you which card maximizes your rewards.",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    ),
                  },
                  {
                    title: "Zero-Knowledge Security",
                    desc: "Your card data is encrypted on your device. We never see your financial information — mathematically impossible.",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                    ),
                  },
                  {
                    title: "AI Chat — Kautilya",
                    desc: "Ask anything about your cards, spending, or rewards. Get intelligent answers in natural language.",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    ),
                  },
                  {
                    title: "Smart Import",
                    desc: "Import transactions from bank statements, SMS, screenshots, or email — AI parses everything automatically.",
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    ),
                  },
                ].map((f) => (
                  <div key={f.title} className="flex gap-4 group">
                    <div className="w-10 h-10 shrink-0 bg-white rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-primary-600 group-hover:border-primary-200 group-hover:bg-primary-50 transition-all duration-300">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">{f.title}</h4>
                      <p className="text-sm text-neutral-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://flux.advayant.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-7 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all hover:shadow-lg active:scale-[0.97]"
                >
                  Try FLUX AI — Free
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
              <div className="bg-neutral-900 rounded-2xl p-6 sm:p-8 text-white shadow-2xl shadow-neutral-900/25">
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.06]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="flex items-center gap-2 px-4 py-1 bg-white/[0.04] rounded-lg">
                      <svg width="14" height="14" viewBox="0 0 100 100" fill="white" opacity="0.4">
                        <path d="M 50 15 L 60 45 L 50 55 L 40 45 Z" />
                        <path d="M 85 50 L 55 60 L 45 50 L 55 40 Z" />
                        <path d="M 50 85 L 40 55 L 50 45 L 60 55 Z" />
                        <path d="M 15 50 L 45 40 L 55 50 L 45 60 Z" />
                      </svg>
                      <span className="text-xs text-neutral-500">flux.advayant.com</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1.5">Searching</p>
                    <p className="font-medium">Amazon — Electronics</p>
                    <p className="text-xs text-neutral-500 mt-0.5">₹45,000</p>
                  </div>
                  <div className="bg-white/[0.06] rounded-xl p-4 border border-accent-400/10">
                    <p className="text-[10px] uppercase tracking-widest text-accent-400/60 mb-1.5">Best Card</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">HDFC Infinia</p>
                        <p className="text-xs text-neutral-500 mt-0.5">₹1,485 reward value</p>
                      </div>
                      <span className="text-accent-400 font-bold text-3xl">3.3%</span>
                    </div>
                  </div>
                  <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-neutral-500 mb-0.5">Runner up</p>
                        <p className="font-medium text-neutral-300">ICICI Amazon Pay</p>
                      </div>
                      <span className="text-neutral-400 font-semibold text-lg">2%</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-accent-500/10 to-accent-400/5 rounded-xl p-4 border border-accent-400/15 text-center">
                    <p className="text-[10px] uppercase tracking-widest text-accent-400/50 mb-0.5">You save extra</p>
                    <p className="text-3xl font-bold text-accent-400">₹585</p>
                    <p className="text-[10px] text-accent-400/40 mt-1">on this single transaction</p>
                  </div>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary-400/8 to-accent-400/8 -z-10 blur-2xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
    </section>
  );
}

/* ─── INNOVATION ─── */
function Innovation() {
  const innovations = [
    {
      title: "Open Reward Intelligence API",
      description:
        "India's first open, community-verified database of every card's reward structure. Any app can query the best card for any purchase.",
      badge: "In Development",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: "On-Device Financial AI",
      description:
        "Fine-tuned models that run entirely on your phone. Sensitive data never leaves your device — true zero-knowledge.",
      badge: "R&D Phase",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      title: "Proprietary Model Suite",
      description:
        "FluxClassifier, FluxRewardParser, FluxAnomalyNet — domain-specific AI trained on Indian financial data.",
      badge: "Training",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
    },
    {
      title: "Multilingual Voice AI",
      description:
        "Voice-first financial intelligence in Hindi and regional languages. Ask in your language, get the best card.",
      badge: "2026",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-500 mb-4">
              Innovation & R&D
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-neutral-900 mb-4">
              Building India&apos;s financial AI stack
            </h2>
            <p className="text-neutral-400 max-w-lg mx-auto">
              We&apos;re not just using AI — we&apos;re building proprietary
              intelligence infrastructure from the ground up.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {innovations.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="card-hover rounded-2xl p-7 border border-neutral-200 bg-white h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-neutral-50 rounded-xl flex items-center justify-center text-neutral-400">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-500">
                    {item.badge}
                  </span>
                </div>
                <h4 className="font-bold text-neutral-900 mb-2">
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
    <section className="py-20 px-6 bg-primary-900 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-700/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: "200+", label: "Indian Cards Supported", animate: true },
              { value: "100%", label: "Client-Side Encrypted", animate: true },
              { value: "Zero", label: "Data Sold to Anyone", animate: false },
              { value: "3-Tier", label: "AI Intelligence Stack", animate: false },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {stat.animate ? (
                    <CountUp value={stat.value} />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="text-[11px] text-primary-300 tracking-wider uppercase">{stat.label}</p>
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
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50/30 to-white" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-100/10 rounded-full blur-[100px] pointer-events-none" />

      <ScrollReveal>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-neutral-900 mb-6 leading-tight">
            Interested in what we&apos;re building?
          </h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            We&apos;re just getting started. Reach out to learn more about
            Advayant Intelligence and our products.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group px-8 py-3.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all hover:shadow-xl hover:shadow-neutral-900/15 active:scale-[0.97]"
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline ml-2 transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="https://flux.advayant.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3.5 border border-neutral-200 text-neutral-600 text-sm font-medium rounded-full hover:border-neutral-300 hover:bg-neutral-50 transition-all"
            >
              Try FLUX AI
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline ml-2 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
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
