"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.25em] text-accent-500 mb-4">
            Contact
          </p>
          <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight mb-6">
            Let&apos;s talk
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-lg text-neutral-500 max-w-xl mx-auto">
            Have a question, partnership idea, or just want to say hello?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-4 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ScrollReveal delay={0}>
            <a
              href="mailto:hello@advayant.com"
              className="group card-hover bg-white rounded-2xl p-8 border border-neutral-200 text-center block h-full"
            >
              <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary-50 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400 group-hover:text-primary-700 transition-colors">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
              <p className="text-sm text-neutral-500">hello@advayant.com</p>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="card-hover bg-white rounded-2xl p-8 border border-neutral-200 text-center h-full">
              <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center mx-auto mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-1">Location</h3>
              <p className="text-sm text-neutral-500">Bengaluru, India</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 px-6">
        <ScrollReveal>
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">
                Send us a message
              </h2>
              <form
                action="mailto:hello@advayant.com"
                method="POST"
                encType="text/plain"
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 transition-all resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-xl hover:bg-neutral-800 transition-all active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <h3 className="text-lg font-bold text-neutral-900 mb-8 text-center">
              Frequently asked questions
            </h3>
            <div className="space-y-4">
              {[
                { q: "Is FLUX AI free?", a: "Yes, completely free. No credit card required, no hidden charges, no premium tier." },
                { q: "How is my data protected?", a: "All data is encrypted on your device using AES-256 before it reaches our servers. We mathematically cannot read your financial information." },
                { q: "Which banks and cards do you support?", a: "We support 200+ Indian credit and debit cards across all major banks — HDFC, SBI, ICICI, Axis, Amex, and many more." },
                { q: "Can I suggest a feature?", a: "Absolutely! Use the contact form above or email us directly. We read every message and actively incorporate user feedback." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-neutral-200">
                  <h4 className="font-semibold text-neutral-900 text-sm mb-1.5">{faq.q}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder note */}
      <section className="py-16 px-6">
        <ScrollReveal>
          <div className="max-w-xl mx-auto text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-primary-700">RG</span>
            </div>
            <p className="text-neutral-500 leading-relaxed italic">
              &ldquo;I read every email personally. Whether it&apos;s feedback,
              a partnership idea, or just a hello — I&apos;d love to hear from
              you.&rdquo;
            </p>
            <p className="text-sm font-semibold text-neutral-900 mt-4">
              Rajeev Gupta
            </p>
            <p className="text-xs text-accent-600">Founder, Advayant Intelligence</p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
