"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-transparent relative overflow-hidden">
        {/* Subtle mesh and glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_100%)] z-0" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-[0.2em]">Contact Us</span>
          </div>
          <h1 className="animate-fade-in-up animate-delay-100 text-5xl sm:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Let&apos;s build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">together.</span>
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-lg text-neutral-400 max-w-xl mx-auto font-light leading-relaxed">
            Have a question about our API, a partnership idea, or just want to say hello?
            We read every single message.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-8 px-6 bg-transparent relative z-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ScrollReveal delay={0} className="h-full">
            <a
              href="mailto:hello@advayant.com"
              className="group glass-card bg-neutral-900/40 rounded-3xl p-8 border border-white/10 text-center block h-full hover:bg-white/[0.04] transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:border-primary-500/30 transition-colors relative z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 group-hover:text-primary-400 transition-colors">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">Direct Email</h3>
              <p className="text-sm text-primary-400 font-mono tracking-tight">hello@advayant.com</p>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={100} className="h-full">
            <div className="glass-card bg-neutral-900/40 rounded-3xl p-8 border border-white/10 text-center h-full hover:bg-white/[0.02] transition-colors relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 relative z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 group-hover:text-accent-400 transition-colors">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2 text-lg">HQ Location</h3>
              <p className="text-sm text-neutral-400 tracking-tight">Bengaluru, India</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-24 px-6 bg-transparent">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto relative">
            {/* Background glow for form */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/10 to-accent-500/10 blur-2xl rounded-[3rem] -z-10" />

            <div className="glass-card bg-neutral-900/60 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,theme(colors.accent.500/20)_0%,transparent_100%)] pointer-events-none" />

              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
                Send us a message
              </h2>
              <p className="text-sm text-neutral-400 mb-8 font-light">
                Have a question or want to work with us? Drop us a note below.
              </p>

              <form
                action="mailto:hello@advayant.com"
                method="POST"
                encType="text/plain"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-bold text-primary-400 uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all focus:bg-white/[0.07]"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-bold text-primary-400 uppercase tracking-widest mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all focus:bg-white/[0.07]"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[11px] font-bold text-primary-400 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all resize-none focus:bg-white/[0.07]"
                    placeholder="Describe your inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-white text-black text-sm font-bold rounded-2xl hover:scale-[1.02] transition-all active:scale-[0.98] flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-neutral-950 border-t border-white/5 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-2xl mx-auto relative z-10">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-white mb-10 text-center tracking-tight">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {[
                { q: "Is FLUX AI free?", a: "Yes, completely free. No credit card required, no hidden charges, no premium tier. We believe optimization should be accessible." },
                { q: "How is my data protected?", a: "With absolute cryptographic certainty. All data is encrypted on your device using AES-256 before it reaches our servers. We mathematically cannot read your financial information." },
                { q: "Which banks and cards do you support?", a: "We support the top 200+ Indian credit and debit cards across all major issuers — HDFC, SBI Card, ICICI, Axis, Amex, Standard Chartered, and more." },
                { q: "Can I suggest a feature?", a: "Absolutely. Use the secure form above or email us directly. We review every payload and actively incorporate user telemetry into our roadmap." },
              ].map((faq, i) => (
                <div key={i} className="glass-card bg-neutral-900/40 rounded-2xl p-6 border border-white/10 hover:bg-white/[0.04] transition-colors group">
                  <h4 className="font-bold text-white text-base mb-2 group-hover:text-primary-400 transition-colors">{faq.q}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">{faq.a}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder note */}
      <section className="py-24 px-6 bg-transparent">
        <ScrollReveal>
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-900 to-black rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-lg relative">
              <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full -z-10" />
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500">RG</span>
            </div>
            <p className="text-neutral-400 leading-relaxed italic text-lg font-light mb-8">
              &ldquo;I review every single transmission personally. Whether it&apos;s architectural feedback,
              a technical partnership idea, or just a ping — I look forward to hearing from
              you.&rdquo;
            </p>
            <div className="inline-flex flex-col items-center">
              <p className="text-base font-bold text-white mb-1">
                Rajeev Gupta
              </p>
              <p className="text-[10px] text-primary-400 font-bold uppercase tracking-widest">Founder, Advayant Intelligence</p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
