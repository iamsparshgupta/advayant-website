"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountUp } from "@/components/CountUp";

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Deep Aesthetic Backgrounds */}
      <div className="absolute inset-0 bg-[#000000] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.neutral.900/80)_0%,transparent_100%)] z-0" />

      {/* Floating Animated Orbs */}
      <div className="absolute top-1/4 right-[25%] w-[400px] h-[400px] bg-neutral-800/30 rounded-full blur-[100px] animate-pulse-soft pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-[20%] w-[350px] h-[350px] bg-accent-900/10 rounded-full blur-[90px] animate-pulse-soft pointer-events-none z-0" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Logo */}
        <div className="animate-fade-in-up mb-8 flex justify-center">
          <div className="relative group">
            <Image
              src="/logo-transparent.png"
              alt="Advayant Intelligence"
              width={200}
              height={96}
              className="h-24 sm:h-28 w-auto object-contain brightness-0 invert opacity-95 relative z-10 transition-transform duration-700 group-hover:scale-105 [clip-path:inset(0_0_20%_0)] -mb-8"
              priority
            />
          </div>
        </div>



        <h1 className="animate-fade-in-up animate-delay-200 text-5xl sm:text-7xl lg:text-[5rem] font-bold tracking-tight text-white leading-[1.05]">
          Building Intelligence
          <br />
          <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            for India.
          </span>
        </h1>

        <p className="animate-fade-in-up animate-delay-300 mt-8 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
          AI-powered solutions that solve real, everyday problems
          for a billion Indian consumers. Silent, intelligent, and secure.
        </p>

        <div className="animate-fade-in-up animate-delay-400 mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/products"
            className="group relative px-8 py-4 bg-white text-black text-sm font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10 flex items-center">
              Explore Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-2 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
          <Link
            href="/about"
            className="group px-8 py-4 glass text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all border border-white/10"
          >
            Read Our Story
          </Link>
        </div>

        {/* Global Keyframes additions */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes shimmer { 100% { transform: translateX(100%); } }
        `}} />

        {/* Trust line */}
        <div className="animate-fade-in-up animate-delay-500 mt-20 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest font-medium">
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-400">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Zero-knowledge
          </span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-neutral-700" />
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-400">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Built for Bharat
          </span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-neutral-700" />
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            On-Device AI
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─── PHILOSOPHY BENTO GRID (REMOVED) ─── */


/* ─── PRODUCT SHOWCASE — FLUX AI (DARK MODE UI MOCK) ─── */
function ProductShowcase() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-flux-900 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-flux-900 to-transparent" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-flux-900/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-flux-500/30 bg-flux-500/10 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-flux-400" />
                <span className="text-[10px] font-semibold text-flux-50 uppercase tracking-widest">Flagship Product</span>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8 mt-12">
                {/* FLUX Flow Essence Logo (No Square Background) */}
                <div className="flex items-center justify-center shrink-0 relative group w-12 h-12">
                  <svg width="42" height="42" viewBox="0 0 100 100" className="relative z-10 drop-shadow-[0_0_12px_theme(colors.flux.500/60)] group-hover:scale-110 transition-transform duration-500">
                    <defs>
                      <linearGradient id="fluxEssenceGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e0f8f8" />
                        <stop offset="50%" stopColor="#00c4c4" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>
                    <path d="M 50 15 L 60 45 L 50 55 L 40 45 Z" fill="url(#fluxEssenceGlow)" className="transition-all duration-500 group-hover:-translate-y-1" />
                    <path d="M 85 50 L 55 60 L 45 50 L 55 40 Z" fill="url(#fluxEssenceGlow)" className="transition-all duration-500 group-hover:translate-x-1" />
                    <path d="M 50 85 L 40 55 L 50 45 L 60 55 Z" fill="url(#fluxEssenceGlow)" className="transition-all duration-500 group-hover:translate-y-1" />
                    <path d="M 15 50 L 45 40 L 55 50 L 45 60 Z" fill="url(#fluxEssenceGlow)" className="transition-all duration-500 group-hover:-translate-x-1" />
                  </svg>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-white tracking-tight">
                  FLUX AI.
                </h2>
              </div>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
                India&apos;s smartest credit card optimizer. AI-powered rewards maximization, expense splitting, and real-time card suggestions.
              </p>
            </div>

            <a
              href="https://flux.advayant.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all group"
            >
              Access FLUX Studio
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Visual — Premium Dark UI Mockup */}
          <div className="lg:col-span-7 relative group">
            <ScrollReveal direction="left" className="relative z-10">
              {/* Glow behind mockup container */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-flux-500/30 to-flux-accent-500/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative rounded-[2rem] bg-neutral-950 border border-white/10 p-2 shadow-2xl overflow-hidden glass">
                {/* Mac OS like top bar */}
                <div className="bg-neutral-900 rounded-[1.5rem] overflow-hidden border border-white/5">
                  <div className="h-12 border-b border-white/5 flex items-center px-6 gap-2 bg-neutral-950/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="mx-auto flex h-7 items-center rounded-md bg-white/5 px-4 text-xs font-medium text-neutral-400 border border-white/5 shadow-inner">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2 opacity-50"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                      flux.advayant.com/optimize
                    </div>
                  </div>

                  {/* UI App Content */}
                  <div className="p-6 md:p-10 relative font-outfit">

                    <div className="relative z-10 space-y-4">
                      {/* Search Bar mock */}
                      <div className="glow-border rounded-2xl">
                        <div className="bg-neutral-950 rounded-2xl p-4 flex items-center gap-4 text-white">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-flux-400"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                          <div>
                            <p className="font-medium text-lg tracking-tight">Apple Store BKC</p>
                            <p className="text-xs text-neutral-500 font-sans tracking-normal">Amount: ₹1,29,000</p>
                          </div>
                          <div className="ml-auto flex items-center gap-2 text-xs font-mono text-neutral-500">
                            <span className="px-2 py-1 rounded bg-white/10 uppercase border border-white/5">⌘</span>
                            <span className="px-2 py-1 rounded bg-white/10 uppercase border border-white/5">K</span>
                          </div>
                        </div>
                      </div>

                      {/* Best recommendation */}
                      <div className="glow-border rounded-2xl shadow-[0_0_30px_theme(colors.flux.500/15)] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-flux-400 to-flux-600" />
                        <div className="bg-neutral-950 rounded-2xl p-6 relative">
                          <div className="absolute -right-10 -top-10 w-40 h-40 bg-flux-600/10 rounded-full blur-2xl" />
                          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-flux-400 mb-3 ml-1 flex items-center gap-2 font-sans">
                            <span className="w-1.5 h-1.5 rounded-full bg-flux-400 animate-pulse" /> Optimal Card AI Match
                          </p>
                          <div className="flex items-end justify-between">
                            <div>
                              <h4 className="text-2xl font-bold text-white mb-1 tracking-tight">HDFC Infinia Metal</h4>
                              <p className="text-sm text-neutral-400 font-sans tracking-normal">Via SmartBuy Multiplier</p>
                            </div>
                            <div className="text-right">
                              <p className="text-3xl font-bold text-white tracking-tighter">16.5%</p>
                              <p className="text-xs font-medium text-flux-400 mt-1 font-sans tracking-normal">Reward Value</p>
                            </div>
                          </div>

                          <div className="mt-5 pt-5 border-t border-white/10 flex justify-between items-center text-sm font-sans tracking-normal">
                            <span className="text-neutral-400">Total savings generated</span>
                            <span className="font-mono text-green-400 font-bold bg-green-400/10 px-3 py-1 rounded-lg border border-green-400/20 shadow-[0_0_10px_rgba(7ade80,0.2)]">₹ 21,285</span>
                          </div>
                        </div>
                      </div>

                      {/* Runner up */}
                      <div className="bg-neutral-950 rounded-2xl p-5 border border-white/5 flex items-center justify-between opacity-80 backdrop-blur-md">
                        <div className="flex gap-4 items-center">
                          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 font-mono">2</div>
                          <div>
                            <p className="text-xs text-neutral-500 mb-0.5 font-sans tracking-normal">Runner up</p>
                            <p className="font-medium text-white text-sm tracking-tight">SBI Cashback Card</p>
                          </div>
                        </div>
                        <span className="text-neutral-400 font-semibold tracking-tighter">5.0%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Features Text */}
          <div className="lg:col-span-5 relative z-20">
            <ScrollReveal direction="right">
              <div className="space-y-4">
                {[
                  {
                    title: "Instant Optimization",
                    desc: "Don't memorize reward charts. Tell us the merchant and amount — FLUX runs the math instantly to find the best card.",
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                    ),
                  },
                  {
                    title: "AI Chat — Kautilya",
                    desc: "An intelligent, conversational interface to your finances. Ask natural language questions, get precise financial maneuvers.",
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    ),
                  },
                  {
                    title: "Smart Import Pipeline",
                    desc: "Feed it bank statements, screenshots, or raw text. FLUX's proprietary OCR and parsers extract transaction data flawlessly.",
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2h7M16 5l3 3-3 3M19 8H9" /></svg>
                    ),
                  },
                ].map((f) => (
                  <div key={f.title} className="group glass-card p-6 rounded-2xl flex gap-5 border border-white/5 hover:bg-white/5 transition-colors cursor-default">
                    <div className="w-12 h-12 shrink-0 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-flux-400 group-hover:bg-flux-500 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_theme(colors.flux.500/50)] group-hover:scale-110">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">{f.title}</h4>
                      <p className="text-sm text-neutral-400 leading-relaxed font-light">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

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
    <section className="py-32 px-6 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-500 mb-4">
              Innovation & R&D
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-4">
              Building India&apos;s AI intelligence stack
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
              <div className="group glass-card rounded-2xl p-8 border border-white/5 bg-white/[0.02] h-full hover:bg-white/[0.04] transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-accent-400 group-hover:text-white group-hover:bg-accent-500/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-neutral-400 border border-white/10">
                    {item.badge}
                  </span>
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">
                  {item.title}
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
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
    <section className="py-24 px-6 bg-transparent relative overflow-hidden border-y border-white/5">
      {/* Grid lines background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-neutral-900/60 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/5">
            {[
              { value: "200+", label: "Indian Cards Supported", animate: true },
              { value: "100%", label: "Client-Side Encrypted", animate: true },
              { value: "Zero", label: "Data Sold to Anyone", animate: false },
              { value: "3-Tier", label: "AI Intelligence Stack", animate: false },
            ].map((stat, i) => (
              <div key={stat.label} className={i % 2 === 0 ? "border-l-0" : ""}>
                <p className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500 mb-3 tracking-tighter">
                  {stat.animate ? (
                    <CountUp value={stat.value} />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="text-[10px] sm:text-xs text-neutral-400 tracking-widest uppercase font-semibold">{stat.label}</p>
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
    <section className="py-32 px-6 relative overflow-hidden bg-transparent">
      {/* Complex gradient background for modern feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.accent.500/10)_0%,transparent_50%)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-900/20 blur-[150px] rounded-full pointer-events-none" />

      <ScrollReveal>
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Main CTA card */}
          <div className="glass-card rounded-[2.5rem] p-8 md:p-16 border border-white/10 text-center relative overflow-hidden">
            {/* Inner glow */}
            <div className="absolute -inset-24 bg-gradient-to-br from-primary-400/10 via-transparent to-accent-400/10 blur-3xl rounded-[3rem] -z-10" />

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Ready to redefine <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">intelligent finance?</span>
            </h2>
            <p className="text-neutral-400 text-lg sm:text-xl mb-12 max-w-xl mx-auto leading-relaxed font-light">
              Join the quiet revolution. Experience privacy-first intelligence built explicitly for the Indian ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="https://flux.advayant.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-white text-black text-sm font-semibold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10 flex items-center justify-center">
                  Try FLUX AI Now
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 glass text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all border border-white/10 w-full sm:w-auto"
              >
                Contact Engineering
              </Link>
            </div>
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
      <ProductShowcase />
      <Innovation />
      <Numbers />
      <CTA />
    </>
  );
}
