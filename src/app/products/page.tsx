"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export default function ProductsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
        <div className="absolute bottom-1/4 left-[10%] w-[300px] h-[300px] bg-accent-100/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.25em] text-accent-500 mb-4">
            Products
          </p>
          <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight mb-6">
            Intelligence products
            <br />
            for{" "}
            <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">everyday life</span>
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-lg text-neutral-500 max-w-xl mx-auto">
            Tools that work quietly in the background to help you make smarter
            financial decisions.
          </p>
        </div>
      </section>

      {/* FLUX AI — Main Product */}
      <section className="py-16 px-6">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl shadow-neutral-900/20 relative">
              {/* Subtle glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary-400/5 to-accent-400/5 -z-10 blur-2xl" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Text side */}
                <div className="p-8 sm:p-12 lg:p-14 text-white">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 100 100" fill="white">
                        <path d="M 50 15 L 60 45 L 50 55 L 40 45 Z" />
                        <path d="M 85 50 L 55 60 L 45 50 L 55 40 Z" />
                        <path d="M 50 85 L 40 55 L 50 45 L 60 55 Z" />
                        <path d="M 15 50 L 45 40 L 55 50 L 45 60 Z" />
                      </svg>
                    </div>
                    <span className="text-2xl font-bold tracking-tight">FLUX AI</span>
                    <span className="ml-2 text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                      Live
                    </span>
                  </div>

                  <p className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
                    India&apos;s smartest
                    <br />
                    credit card optimizer
                  </p>

                  <p className="text-neutral-300 leading-relaxed mb-8 text-sm">
                    FLUX analyzes your cards, understands merchant categories, and
                    tells you exactly which card to swipe — maximizing your
                    cashback, reward points, and miles on every transaction.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {[
                      { label: "Card Optimizer", desc: "Best card for any purchase" },
                      { label: "Spending Analytics", desc: "Track where money goes" },
                      { label: "AI Chat (Kautilya)", desc: "Ask anything about finances" },
                      { label: "Smart Import", desc: "CSV, SMS, photo, email" },
                      { label: "Expense Circles", desc: "Split bills with friends" },
                      { label: "WhatsApp Bot", desc: "Card recs on the go" },
                    ].map((f) => (
                      <div key={f.label} className="flex items-start gap-2.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-accent-400 shrink-0 mt-1">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium">{f.label}</p>
                          <p className="text-xs text-neutral-500">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://flux.advayant.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center px-6 py-2.5 bg-white text-neutral-900 text-sm font-semibold rounded-full hover:bg-neutral-100 transition-all active:scale-[0.97]"
                    >
                      Try FLUX AI
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Visual side */}
                <div className="bg-neutral-950 p-8 sm:p-12 flex items-center justify-center">
                  <div className="space-y-2.5 w-full max-w-sm">
                    <div className="bg-white/[0.04] rounded-xl p-5 border border-white/[0.06]">
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Searching</p>
                      <p className="text-white font-medium text-sm">Swiggy — Food Delivery</p>
                      <p className="text-xs text-neutral-500 mt-1">₹1,200</p>
                    </div>
                    <div className="bg-white/[0.04] rounded-xl p-5 border border-white/[0.06]">
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Recommended</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium text-sm">HDFC Swiggy Card</p>
                          <p className="text-xs text-neutral-500 mt-0.5">₹120 cashback</p>
                        </div>
                        <span className="text-accent-400 font-bold text-2xl">10%</span>
                      </div>
                    </div>
                    <div className="bg-white/[0.04] rounded-xl p-5 border border-white/[0.06]">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-neutral-500">Runner up</p>
                          <p className="text-neutral-300 font-medium text-sm">ICICI Amazon Pay</p>
                        </div>
                        <span className="text-neutral-400 font-semibold">2%</span>
                      </div>
                    </div>
                    <div className="bg-accent-500/10 rounded-xl p-4 border border-accent-400/15 text-center">
                      <p className="text-[10px] uppercase tracking-widest text-accent-400/60 mb-0.5">Extra saved</p>
                      <p className="text-2xl font-bold text-accent-400">₹96</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-500 mb-3">
                Under the Hood
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Built with precision
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "3-Tier AI", desc: "Gemini 3 + 2.5 Flash + Lite" },
              { label: "AES-256", desc: "Zero-knowledge encryption" },
              { label: "pgvector", desc: "Semantic search embeddings" },
              { label: "Real-time", desc: "Live offer verification" },
            ].map((t, i) => (
              <ScrollReveal key={t.label} delay={i * 80}>
                <div className="card-hover rounded-xl p-5 border border-neutral-200 bg-white text-center h-full">
                  <p className="font-semibold text-neutral-900 text-sm mb-1">{t.label}</p>
                  <p className="text-xs text-neutral-500">{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-500 mb-3">
              What&apos;s Next
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
              More products, coming soon
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto mb-12">
              We&apos;re working on more intelligence tools for Indian consumers.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              { title: "Open Reward Intelligence API", desc: "India's first open, community-verified database of every card's reward structure. Free for developers.", badge: "In Development" },
              { title: "On-Device Financial AI", desc: "Fine-tuned models on your phone. True zero-knowledge — data never leaves your device.", badge: "R&D Phase" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="card-hover rounded-2xl p-7 border border-neutral-200 text-left bg-white h-full">
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 bg-neutral-100 text-neutral-500">
                    {item.badge}
                  </span>
                  <h4 className="font-semibold text-neutral-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
