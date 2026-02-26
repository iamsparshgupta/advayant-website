"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
        <div className="absolute top-1/3 right-[15%] w-[300px] h-[300px] bg-primary-100/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.25em] text-accent-500 mb-4">
            About Us
          </p>
          <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
            We believe intelligence
            <br />
            should be{" "}
            <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">accessible</span>
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Advayant Intelligence was founded with a simple conviction: the most
            powerful technology should serve everyone — not just the privileged few.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8">
              Our Story
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="space-y-6 text-neutral-600 leading-relaxed">
              <p>
                India&apos;s financial landscape is breathtaking in its complexity.
                Hundreds of credit cards, each with intricate reward structures,
                category bonuses, spending caps, and redemption quirks — consumers
                leave <strong className="text-neutral-900">thousands of rupees on the table</strong> every
                year simply because they can&apos;t keep track of it all.
              </p>
              <p>
                We started Advayant Intelligence to change that. Our name comes from
                Sanskrit — <em className="text-primary-700 font-medium not-italic">advayant</em>, meaning &ldquo;unique,
                unparalleled.&rdquo; It reflects our belief that the intelligence we
                build should be unlike anything that came before.
              </p>
              <p>
                Our first product,{" "}
                <strong className="text-neutral-900">FLUX AI</strong>, uses artificial
                intelligence to instantly tell you which card to use for any
                purchase — maximizing your rewards without the spreadsheet
                gymnastics. But FLUX is just the beginning.
              </p>
              <p>
                We&apos;re building a suite of intelligent tools that help Indian
                consumers navigate their financial lives with confidence — from
                spending optimization to investment intelligence, all rooted in
                privacy, transparency, and respect for the user.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal delay={0}>
            <div className="card-hover bg-white rounded-2xl p-8 border border-neutral-200 h-full">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Mission</h3>
              <p className="text-neutral-500 leading-relaxed">
                To build AI-powered tools that put financial intelligence in the
                hands of every Indian consumer — not just the wealthy or the
                technically savvy.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="card-hover bg-white rounded-2xl p-8 border border-neutral-200 h-full">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-700">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Vision</h3>
              <p className="text-neutral-500 leading-relaxed">
                A world where AI works quietly in the background to help you make
                better financial decisions — so you never leave money on the table
                again.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Innovation */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-500 mb-3">
                Innovation
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                Building our own financial AI
              </h2>
              <p className="text-neutral-500 max-w-xl mx-auto">
                We&apos;re building proprietary financial intelligence infrastructure for India.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Open Reward Intelligence API", desc: "India's first open, community-verified database of every card's reward structure. API-first — any fintech can query the best card for any purchase.", badge: "In Development" },
              { title: "On-Device Financial AI", desc: "Fine-tuned models that run entirely on your phone. Sensitive financial data never leaves your device — true zero-knowledge intelligence.", badge: "R&D Phase" },
              { title: "Proprietary Model Suite", desc: "FluxClassifier, FluxRewardParser, FluxAnomalyNet — domain-specific AI trained on Indian financial data, replacing third-party dependency.", badge: "Training Data" },
              { title: "Multilingual Voice AI", desc: "Voice-first financial intelligence in Hindi and regional languages. Ask in your language, get the best card instantly.", badge: "2026" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="card-hover rounded-2xl p-6 border border-neutral-200 bg-white h-full">
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

      {/* What sets us apart */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-12 text-center">
              What sets us apart
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Zero-Knowledge Architecture", desc: "Your data is encrypted client-side with your password. We cannot read your financial data — even if compelled by law." },
              { title: "India-Specific Intelligence", desc: "Our models understand UPI, RuPay, HDFC SmartBuy, Axis GrabDeals, and 200+ Indian cards." },
              { title: "No Data Selling. No Ads.", desc: "We make money by building products worth paying for. Your data is never sold, shared, or used for advertising." },
              { title: "Open & Transparent", desc: "We're building the Open Reward Intelligence API — a free, open database of every card's reward structure." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="card-hover bg-white rounded-2xl p-6 border border-neutral-200 h-full">
                  <h4 className="font-semibold text-neutral-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-500 mb-3">
              The Team
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
              Built by builders
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-12">
              Advayant Intelligence is led by people who are passionate about using
              technology to solve real problems for real people.
            </p>
            <div className="inline-block card-hover bg-white rounded-2xl p-8 border border-neutral-200 text-left max-w-sm">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary-700">RG</span>
              </div>
              <h4 className="text-lg font-bold text-neutral-900">Rajeev Gupta</h4>
              <p className="text-sm text-accent-600 font-medium mb-3">Founder</p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Building at the intersection of AI and consumer finance for India.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
