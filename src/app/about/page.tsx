"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-32 px-6 bg-transparent relative overflow-hidden flex items-center min-h-[70vh]">
        {/* Deep starry/glowing background */}
        <div className="absolute inset-0 bg-[#000000] z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.neutral.900/40),transparent_60%)] z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Subtle moving particles (simulated via CSS abstract shapes) */}
        <div className="absolute top-1/4 right-[15%] w-2 h-2 rounded-full bg-white/20 animate-pulse-soft blur-[1px]" />
        <div className="absolute bottom-1/3 left-[20%] w-3 h-3 rounded-full bg-primary-400/20 animate-pulse-soft blur-[2px]" style={{ animationDelay: '1s' }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] mb-8">
            <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-[0.2em]">Our Manifesto</span>
          </div>
          <h1 className="animate-fade-in-up animate-delay-100 text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            Intelligence built
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">with conviction.</span>
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
            We believe that the most powerful technology shouldn&apos;t be a luxury. It should be an invisible utility that empowers every Indian consumer.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 px-6 bg-neutral-950 relative border-y border-white/5">
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent absolute left-[10%] hidden lg:block" />
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent absolute right-[10%] hidden lg:block" />

        <div className="max-w-3xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-px bg-primary-500/50" />
              <h2 className="text-sm font-bold text-primary-400 uppercase tracking-widest">
                The Origin
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-8 text-neutral-400 leading-[1.8] text-lg font-light">
              <p className="text-2xl text-white font-medium leading-snug">
                India&apos;s financial landscape is breathtaking in its complexity.
              </p>
              <p>
                Hundreds of credit cards, each with intricate reward structures,
                category bonuses, spending caps, and redemption quirks. The result? Consumers
                leave <strong className="text-white font-semibold">thousands of rupees on the table</strong> every
                year simply because they can&apos;t mentally compute it all.
              </p>
              <p>
                We started Advayant Intelligence because we realized the system was broken by design.
              </p>

              {/* Sanskrit name visual */}
              <div className="my-16 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 blur-xl rounded-3xl" />
                <div className="relative py-12 px-8 bg-transparent/50 border border-white/10 rounded-3xl text-center backdrop-blur-sm">
                  <p className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 mb-4 tracking-tighter">advayant</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                    <p className="text-[10px] text-accent-200 uppercase tracking-widest font-semibold">Sanskrit — &ldquo;Unique, Unparalleled&rdquo;</p>
                  </div>
                  <p className="text-sm text-neutral-400 mt-6 max-w-sm mx-auto font-light leading-relaxed">
                    Our name reflects our absolute baseline: the intelligence we build must be unlike anything that came before it.
                  </p>
                </div>
              </div>

              <p>
                Our flagship engine, <strong className="text-white font-semibold flex items-center inline-flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />FLUX AI</strong>, uses state-of-the-art predictive
                intelligence to instantly compute which card to use for any
                purchase — maximizing your rewards natively, without the spreadsheet
                gymnastics.
              </p>
              <p>
                But FLUX is merely the foundation.
              </p>
              <p>
                We&apos;re orchestrating a complete suite of intelligent tools that empower Indian
                consumers to navigate their financial ecosystem with cryptographic certainty — from
                spending optimization to investment intelligence, fundamentally rooted in
                privacy, transparency, and architectural elegance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-transparent relative border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary.900/30)_0%,transparent_100%)] z-0" />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <ScrollReveal delay={0} className="h-full">
            <div className="glass-card bg-neutral-900/40 rounded-[2rem] p-10 border border-white/10 h-full backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-colors" />
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-primary-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Mission</h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                To build AI-powered tools that put enterprise-grade financial intelligence natively in the
                hands of every Indian consumer — not just the wealthy or the
                technically savvy.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100} className="h-full">
            <div className="glass-card bg-neutral-900/40 rounded-[2rem] p-10 border border-white/10 h-full backdrop-blur-md relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl group-hover:bg-accent-500/20 transition-colors" />
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 text-accent-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Vision</h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                A world orchestrated by silent intelligence — where AI works securely in the background to automate
                better financial decisions, so you literally never leave value out of reach.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Innovation */}
      <section className="py-32 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-500 mb-4">
                Innovation & R&D
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                Building our own financial AI
              </h2>
              <p className="text-neutral-400 max-w-xl mx-auto text-lg font-light">
                We don&apos;t just wrap APIs. We build proprietary financial intelligence infrastructure modeled specifically for the Indian economy.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Open Reward Intelligence API", desc: "India's first open, community-verified database of every card's reward structure. API-first — any fintech can query the best card for any purchase.", badge: "In Development" },
              { title: "On-Device Financial AI", desc: "Fine-tuned models that run entirely on your phone. Sensitive financial data never leaves your device — true zero-knowledge intelligence.", badge: "R&D Phase" },
              { title: "Proprietary Model Suite", desc: "FluxClassifier, FluxRewardParser, FluxAnomalyNet — domain-specific AI trained on Indian financial data, replacing third-party dependency.", badge: "Training Data" },
              { title: "Multilingual Voice AI", desc: "Voice-first financial intelligence in Hindi and regional languages. Ask in your language, get the best card instantly.", badge: "2026 Roadmap" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80} className="h-full">
                <div className="glass-card rounded-[2rem] p-8 border border-white/5 bg-white/[0.02] h-full hover:bg-white/[0.04] transition-colors relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] pointer-events-none" />
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 bg-white/5 text-neutral-400 border border-white/10">
                    {item.badge}
                  </span>
                  <h4 className="font-bold text-white mb-3 text-xl tracking-tight">{item.title}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="py-32 px-6 bg-transparent relative border-y border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-16 text-center tracking-tight">
              What sets us apart.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Zero-Knowledge Architecture", desc: "Your data is encrypted client-side with your password. We cannot read your financial data — even if compelled by law." },
              { title: "India-Specific Intelligence", desc: "Our models understand UPI, RuPay, HDFC SmartBuy, Axis GrabDeals, and 200+ complex Indian card structures." },
              { title: "No Data Selling. No Ads.", desc: "We make money by building products worth paying for. Your data is absolutely never sold, shared, or brokered." },
              { title: "Open & Transparent", desc: "We're building the Open Reward Intelligence API — a free, open database of every card's dynamic reward structure." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80} className="h-full">
                <div className="glass-card bg-neutral-900/40 rounded-2xl p-6 border border-white/10 h-full backdrop-blur-md hover:bg-white/[0.04] transition-colors">
                  <h4 className="font-bold text-white mb-3 text-lg">{item.title}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 px-6 bg-neutral-950">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-500 mb-4">
              The Team
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Built by builders.
            </h2>
            <p className="text-neutral-400 leading-relaxed max-w-xl mx-auto text-lg font-light">
              Advayant Intelligence is led by engineers passionate about building elegant, mathematically sound solutions to everyday financial problems.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="glass-card bg-neutral-900/40 rounded-3xl p-8 border border-white/10 text-left max-w-sm w-full hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-colors" />
              <div className="w-16 h-16 bg-gradient-to-br from-primary-900 to-black border border-white/10 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500 tracking-tighter">RG</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-1">Rajeev Gupta</h4>
              <p className="text-[11px] text-primary-400 font-bold uppercase tracking-widest mb-4">Founder</p>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Architecting at the technical intersection of predictive AI and consumer finance for the Indian ecosystem.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-transparent relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,theme(colors.accent.900/10)_0%,transparent_60%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-900/20 blur-[150px] rounded-full pointer-events-none" />

        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center relative z-10 glass-card rounded-[3rem] p-10 sm:p-16 border border-white/10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to stop leaving <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">money on the table?</span>
            </h2>
            <p className="text-neutral-400 mb-10 max-w-xl mx-auto text-lg font-light leading-relaxed">
              Join thousands of Indians deploying FLUX AI to orchestrate and maximize their credit card rewards — automatically, securely, and completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://flux.advayant.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-white text-black text-sm font-bold rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full sm:w-auto flex justify-center items-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10 flex items-center">
                  Try FLUX AI — It&apos;s Free
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              <a
                href="/contact"
                className="px-8 py-4 glass text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all border border-white/10 w-full sm:w-auto flex justify-center items-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
