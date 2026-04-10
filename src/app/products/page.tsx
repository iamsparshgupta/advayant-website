"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Logo } from "@/components/Logo";
import { PryzLogo } from "@/components/PryzLogo";
import { KlaryxLogo } from "@/components/KlaryxLogo";

export default function ProductsPage() {
  return (
    <div className="pt-16">
      {/* ─── HERO ─── */}
      <section className="py-24 px-6 bg-transparent relative overflow-hidden">
        {/* Deep background mesh */}
        <div className="absolute bottom-1/4 left-[10%] w-[500px] h-[300px] bg-pryz-900/20 rounded-[100%] blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pryz-500/20 bg-pryz-500/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-pryz-400 shadow-[0_0_8px_theme(colors.pryz.500/80)]" />
            <span className="text-[10px] font-semibold text-pryz-200 uppercase tracking-widest">Our Ecosystem</span>
          </div>
          <h1 className="animate-fade-in-up animate-delay-100 text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Intelligence built
            <br />
            for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pryz-400 to-pryz-accent-400">everyday life.</span>
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            Silent, powerful tools that work securely in the background to help you orchestrate smarter decisions and solve real problems.
          </p>
        </div>
      </section>

      {/* Pryz AI — Main Product */}
      <section className="py-16 px-6 bg-transparent relative z-10" id="pryz-ai">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="bg-neutral-950 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-pryz-900/10 relative border border-white/10 glass-card">
              {/* Subtle glows over card */}
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-pryz-600/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pryz-accent-600/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
                {/* Text side */}
                <div className="p-8 sm:p-12 lg:p-16 text-white border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="flex items-center justify-center relative group shrink-0 w-12 h-12">
                      <PryzLogo className="w-10 h-10 relative z-10 drop-shadow-[0_0_12px_theme(colors.pryz.500/60)] group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <span className="text-3xl font-medium tracking-tight">Pryz AI</span>
                      <div className="flex items-center mt-1">
                        <span className="relative flex h-2 w-2 mr-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-green-400 font-medium">Flagship Consumer AI</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.15] tracking-tight">
                    Maximize
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500">Every Swipe.</span>
                  </h2>

                  <p className="text-neutral-400 leading-relaxed mb-10 text-lg font-light">
                    India&apos;s most advanced card optimization engine. AI-powered rewards maximization across 230+ cards from 38 banks, with WhatsApp &amp; Telegram bots, expense circles, and 18 Kautilya AI financial tools.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {[
                      { label: "230+ Card Engine", desc: "38 banks, MCC-aware routing" },
                      { label: "Kautilya AI", desc: "18 financial intelligence tools" },
                      { label: "WhatsApp & Telegram", desc: "Full circle management bots" },
                      { label: "Email Auto-Import", desc: "18+ bank-specific parsers" },
                      { label: "Community & Loyalty", desc: "Social + reward tracking" },
                      { label: "Google OAuth", desc: "One-tap sign-in + UPI" },
                    ].map((f) => (
                      <div key={f.label} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-pryz-400 shrink-0 group-hover:bg-pryz-500/20 transition-all">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-200">{f.label}</p>
                          <p className="text-xs text-neutral-500">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://pryz.advayant.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center px-8 py-4 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-[transform,box-shadow] duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400/20 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                      <span className="relative z-10 flex items-center">
                        Launch Pryz Studio
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                          <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

                {/* Visual side - Mockup */}
                <div className="bg-neutral-950 p-8 sm:p-12 lg:p-16 flex items-center justify-center relative overflow-hidden font-outfit">
                  <div className="space-y-4 w-full max-w-sm relative z-10">
                    <div className="bg-neutral-900 rounded-2xl p-5 border border-white/5 shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-pryz-500" />
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 font-medium ml-2 font-sans">Active Search</p>
                      <p className="text-white font-semibold text-lg ml-2 tracking-tight">Swiggy — Food Delivery</p>
                      <p className="text-sm text-neutral-400 mt-1 ml-2 font-mono">₹1,200.00</p>
                    </div>

                    <div className="glow-border rounded-2xl relative shadow-[0_0_40px_theme(colors.pryz.500/15)]">
                      <div className="absolute inset-0 bg-gradient-to-r from-pryz-500/10 to-pryz-accent-500/10 rounded-2xl" />
                      <div className="bg-neutral-950 rounded-2xl p-6 border border-white/10 relative backdrop-blur-md">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="w-2 h-2 rounded-full bg-pryz-400 animate-pulse" />
                          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-pryz-400 font-sans">Optimal Match</p>
                        </div>
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-white font-bold text-xl mb-1 tracking-tight">HDFC Swiggy Card</p>
                            <p className="text-xs text-neutral-400 font-sans tracking-normal">Direct integration</p>
                          </div>
                          <div className="text-right">
                            <span className="text-white font-black text-3xl tracking-tighter">10%</span>
                            <p className="text-[10px] text-pryz-400 font-medium uppercase mt-1">Cashback</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-pryz-900/30 to-black rounded-xl p-4 border border-pryz-500/20 text-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-pryz-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex items-center justify-center gap-3 relative z-10">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pryz-400"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        <p className="text-[11px] uppercase tracking-widest text-pryz-200/60 font-medium">Extra Value Unlocked</p>
                        <p className="text-2xl font-black text-pryz-400 tracking-tighter ml-auto">₹96</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* How it works (Tied to Pryz) */}
      <section className="py-24 px-6 bg-transparent relative border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.primary.900/10)_0%,transparent_100%)] z-0" />
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-pryz-500 mb-4">
                Pryz Workflow
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                Three steps. <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-600">Maximum rewards.</span>
              </h2>
              <p className="text-neutral-400 text-lg font-light">Zero downloads. Bank-grade client-side encryption.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

            {[
              {
                step: "1",
                title: "Add your cards",
                desc: "Tell Pryz which credit and debit cards you carry. We encrypt everything natively on your device.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                ),
              },
              {
                step: "2",
                title: "Search any merchant",
                desc: "Type where you're shopping. Pryz's proprietary models understand MCCs and routing automatically.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                ),
              },
              {
                step: "3",
                title: "Swipe the right card",
                desc: "Pryz instantly surfaces the math—showing you the exact card that maximizes your points or cashback.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                ),
              },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 120} className="relative z-10">
                <div className="glass-card rounded-[2rem] p-8 border border-white/5 h-full hover:bg-white/[0.02] transition-colors relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-pryz-500/10 rounded-full blur-2xl group-hover:bg-pryz-500/20 transition-colors" />

                  <div className="w-16 h-16 bg-neutral-900 rounded-2xl border border-white/10 flex items-center justify-center mb-8 text-pryz-400 relative z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    {s.icon}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-pryz-500 text-black flex items-center justify-center text-[10px] font-bold">
                      {s.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-white mb-3 text-xl tracking-tight">{s.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Base (Tied to Pryz) */}
      <section className="py-24 px-6 bg-transparent pb-32">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-pryz-500 mb-3">
                Pryz Engine
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Built with strict precision.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Gemini 3 AI", desc: "Latest-gen models for precision" },
              { label: "AES-256", desc: "Bank-grade, zero-knowledge DB" },
              { label: "MCC Routing", desc: "Context-aware card matching" },
              { label: "Multi-Platform", desc: "Web, Android, iOS via Capacitor" },
            ].map((t, i) => (
              <ScrollReveal key={t.label} delay={i * 80}>
                <div className="glass-card rounded-2xl p-6 border border-white/5 bg-white/[0.02] text-center h-full hover:bg-white/[0.05] transition-colors group">
                  <div className="w-1.5 h-1.5 rounded-full bg-pryz-500/50 mx-auto mb-4 group-hover:bg-pryz-400 transition-all" />
                  <p className="font-bold text-white text-base mb-2">{t.label}</p>
                  <p className="text-xs text-neutral-500 font-light">{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* KLARYX — Enterprise Product */}
      <section className="py-24 px-6 bg-neutral-950 relative z-10 border-t border-white/5" id="klaryx">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto mt-8">
            <div className="bg-neutral-950 rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-white/10 glass">
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-klaryx-500/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-klaryx-accent-600/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
                {/* Visual side - Mockup */}
                <div className="bg-neutral-950 p-8 sm:p-12 lg:p-16 flex items-center justify-center relative overflow-hidden font-outfit border-b lg:border-b-0 lg:border-r border-white/5 order-last lg:order-first">
                  <div className="space-y-4 w-full max-w-sm relative z-10">
                    <div className="bg-neutral-900 rounded-2xl p-5 border border-white/5 shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-neutral-500" />
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium font-sans ml-2">AI Governance Alert</p>
                        <span className="w-2 h-2 rounded-full bg-red-500/80 animate-pulse" />
                      </div>
                      <p className="text-white font-semibold text-lg tracking-tight ml-2">Unauthorized LLM Ping</p>
                      <p className="text-sm text-neutral-400 mt-1 font-mono ml-2">Model: DeepSeek-R1</p>
                    </div>

                    <div className="glow-border rounded-2xl relative shadow-[0_0_40px_theme(colors.klaryx.500/15)]">
                      <div className="bg-neutral-950 rounded-2xl p-6 border border-white/10 relative backdrop-blur-md">
                        <div className="flex items-center gap-2 mb-4">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white font-sans">Policy Enforced</p>
                        </div>
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-white font-bold text-xl mb-1 tracking-tight">Data Masking</p>
                            <p className="text-xs text-neutral-400 font-sans tracking-normal">PII Redacted Automatically</p>
                          </div>
                          <div className="text-right">
                            <span className="text-white font-black text-3xl tracking-tighter">100%</span>
                            <p className="text-[10px] text-neutral-400 font-medium uppercase mt-1">Secured</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text side */}
                <div className="p-8 sm:p-12 lg:p-16 text-white">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="flex items-center justify-center relative shrink-0 w-12 h-12">
                      <KlaryxLogo className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <span className="text-3xl font-medium tracking-tight">Klaryx</span>
                      <div className="flex items-center mt-1">
                        <span className="relative flex h-2 w-2 mr-2">
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-klaryx-500"></span>
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-klaryx-400 font-medium">B2B Enterprise</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.15] tracking-tight">
                    Secure your
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-klaryx-300 to-klaryx-500 text-klaryx-400">AI Infrastructure.</span>
                  </h2>

                  <p className="text-neutral-400 leading-relaxed mb-10 text-lg font-light">
                    EU AI Act compliant in 24 hours. The enterprise AISPM platform with compliance reporting, SIEM integration, FinOps intelligence, MSSP portal, and DLP enforcement — deployed in a single day.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {[
                      { label: "AISPM + SIEM", desc: "Splunk & Sentinel integration" },
                      { label: "Compliance Vault", desc: "EU AI Act & NIST reports" },
                      { label: "FinOps Dashboard", desc: "AWS, GCP, Azure cost tracking" },
                      { label: "MSSP Portal", desc: "Multi-tenant client management" },
                      { label: "Semantic DLP", desc: "AI-powered PII redaction" },
                      { label: "SAML & Entra ID", desc: "Enterprise SSO integration" },
                    ].map((f) => (
                      <div key={f.label} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-klaryx-400 shrink-0 group-hover:bg-klaryx-500/20 transition-all">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-200">{f.label}</p>
                          <p className="text-xs text-neutral-500">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://klaryx.advayant.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center px-8 py-4 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Launch Klaryx
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-2 transition-transform group-hover:translate-x-1">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Coming Soon */}
      <section className="py-24 px-6 bg-transparent border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pryz-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-pryz-500 mb-4">
              What&apos;s Next
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              More intelligence, <span className="italic font-medium text-neutral-500">coming soon.</span>
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto mb-16 text-lg font-light leading-relaxed">
              We&apos;re expanding our proprietary intelligence models to solve more complex challenges for Indian consumers across multiple domains.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            {[
              { title: "Open Financial Intelligence API", desc: "India's first open, community-verified database of every card's dynamic reward structure. Build the future of finance with us.", badge: "Developer Beta" },
              { title: "On-Device Prediction Models", desc: "Next-generation fine-tuned SLMs running natively on your smartphone. The ultimate zero-knowledge architecture.", badge: "R&D Phase" },
              { title: "NPCI FiMI Ecosystem Integration", desc: "Leveraging NPCI's FiMI — India's first payments-specific AI model — for richer transaction categorization and smarter UPI-on-credit optimization.", badge: "Exploring" },
              { title: "Multilingual Voice Intelligence", desc: "Voice-first financial commands in Hindi and regional languages. Ask in your language, get the optimal card instantly.", badge: "2026 Roadmap" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="glass-card rounded-[2rem] p-8 border border-white/10 bg-gradient-to-br from-neutral-900 to-black h-full group hover:border-white/20 transition-[border-color,transform] duration-500 hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-pryz-500 opacity-60" />
                      {item.badge}
                    </span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-600 group-hover:text-pryz-400 transition-colors"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h4 className="font-bold text-white mb-3 text-xl tracking-tight">{item.title}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
