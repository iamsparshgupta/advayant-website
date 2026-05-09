import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog — Advayant Intelligence | AI Security & Financial Intelligence",
  description:
    "Expert insights on securing enterprise AI infrastructure, AI governance, and maximizing consumer financial intelligence.",
  keywords: [
    "AI governance",
    "LLM governance",
    "credit card rewards optimization",
    "Enterprise AI security",
    "DPDPA compliant",
    "AI fintech India",
  ],
};

const posts = [
  {
    slug: "pryz-recovery-system-money-on-table",
    title: "Pryz Recovery: Find Money You Didn't Know You Had",
    excerpt:
      "Most card optimizers tell you which card to swipe. Pryz Recovery finds the money already slipping through your fingers — wrong-card swaps, EMI-eligible transactions, fee-waiver gaps, and expiring benefits — before they cost you.",
    category: "Product Deep Dive",
    readTime: "6 min read",
    date: "2026-05-04",
  },
  {
    slug: "klaryx-zero-trust-ai-governance",
    title: "Zero-Trust AI: Why Detection Alone Is No Longer Enough",
    excerpt:
      "Shadow AI detection is table stakes. The new bar is endpoint redaction, autonomous vendor discovery, and LLM proxy gateways. Here's how Klaryx delivers Zero-Trust AI governance that auditors actually accept.",
    category: "AI Security",
    readTime: "7 min read",
    date: "2026-04-30",
  },
  {
    slug: "truth-reconciliation-self-healing-data",
    title: "Truth Reconciliation: How Pryz Keeps Itself Honest",
    excerpt:
      "Card reward structures change without notice. Pryz reconciles bank PDFs, RBI MITC documents, user observations, and AI verifications into a single confidence-scored truth — and auto-corrects when it's wrong.",
    category: "Engineering",
    readTime: "8 min read",
    date: "2026-04-25",
  },
  {
    slug: "eu-ai-act-compliance-24-hours",
    title: "EU AI Act Compliance in 24 Hours with Klaryx",
    excerpt:
      "The EU AI Act is here and enforcement is real. Learn how Klaryx's six compliance report templates, evidence vault, and SIEM integration can make your organization compliant in a single day.",
    category: "Compliance",
    readTime: "8 min read",
    date: "2026-04-08",
  },
  {
    slug: "pryz-230-cards-38-banks",
    title: "Pryz Now Covers 230+ Cards Across 38 Indian Banks",
    excerpt:
      "From PSU banks to fintech co-brands to foreign issuers — Pryz's card database has tripled. Here's what changed, how MCC-aware routing works, and why 31 Kautilya AI tools matter.",
    category: "Product Deep Dive",
    readTime: "5 min read",
    date: "2026-04-06",
  },
  {
    slug: "rise-of-shadow-ai-enterprises",
    title: "The Rise of Shadow AI in Modern Enterprises",
    excerpt:
      "Employees are pasting sensitive corporate data into unsanctioned public LLMs. We measure the actual cost of Shadow AI and how Klaryx's AISPM platform can instantly illuminate your blind spots.",
    category: "AI Security",
    readTime: "6 min read",
    date: "2026-03-24",
  },
  {
    slug: "whatsapp-telegram-expense-circles",
    title: "Managing Shared Expenses via WhatsApp & Telegram Bots",
    excerpt:
      "Create circles, add expenses, settle up — all from your chat app. Pryz's messaging bots bring full financial circle management to the platforms you already use every day.",
    category: "Product Deep Dive",
    readTime: "4 min read",
    date: "2026-03-18",
  },
  {
    slug: "dpdpa-llm-firewall-compliance",
    title: "DPDPA 2026: Why Your Company Needs an LLM Firewall",
    excerpt:
      "India's Digital Personal Data Protection Act is fully enforced. We explain why basic DLP is no longer enough and how an LLM Firewall actively redacts PII before it hits third-party APIs.",
    category: "Compliance",
    readTime: "7 min read",
    date: "2026-03-12",
  },
  {
    slug: "best-credit-card-swiggy-zomato-2026",
    title: "Best Credit Card for Swiggy & Zomato in 2026",
    excerpt:
      "Food delivery is a daily habit. But which card actually maximizes cashback on Swiggy and Zomato? We break down the top picks across HDFC, SBI, ICICI, Axis, and fintech co-brand cards.",
    category: "Card Guides",
    readTime: "5 min read",
    date: "2026-03-05",
  },
  {
    slug: "securing-corporate-data-rogue-prompts",
    title: "Securing Corporate R&D from Rogue Prompts",
    excerpt:
      "A single prompt can expose months of proprietary research. Learn how Klaryx implements SAML SSO, semantic DLP, and MSSP portals to govern exactly what data flows to AI models.",
    category: "AI Security",
    readTime: "5 min read",
    date: "2026-02-28",
  },
  {
    slug: "upi-credit-cards-explained",
    title: "UPI on Credit Cards: The Complete Guide for 2026",
    excerpt:
      "UPI-on-credit is reshaping how India pays. With RuPay credit on UPI and SuperCard Pro entering the space, understanding which UPI credit card gives you the best rewards per scan is now essential.",
    category: "UPI & Payments",
    readTime: "7 min read",
    date: "2026-02-20",
  },
];

const categoryColors: Record<string, string> = {
  "Card Guides": "text-pryz-400 bg-pryz-500/10 border-pryz-500/20",
  "UPI & Payments": "text-green-400 bg-green-500/10 border-green-500/20",
  "Product Deep Dive": "text-primary-400 bg-primary-500/10 border-primary-500/20",
  "AI Security": "text-white bg-white/10 border-white/20",
  "Compliance": "text-neutral-400 bg-neutral-500/10 border-neutral-500/20",
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-transparent relative overflow-hidden">
        <div className="absolute bottom-1/4 right-[10%] w-[500px] h-[300px] bg-neutral-900/40 rounded-[100%] blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            <span className="text-[10px] font-semibold text-neutral-300 uppercase tracking-widest">
              Insights & Engineering
            </span>
          </div>
          <h1 className="animate-fade-in-up animate-delay-100 text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            The Advayant{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500">
              Blog
            </span>
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Expert guides on enterprise AI governance, AI threat mitigation,
            maximizing credit card rewards, and making smarter decisions with AI.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-6 bg-transparent relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 80}>
                <article className="group glass-card rounded-[2rem] p-8 border border-white/5 bg-white/[0.02] h-full hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                        categoryColors[post.category] ||
                        "text-neutral-400 bg-white/5 border-white/10"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-[10px] text-neutral-600 uppercase tracking-wider">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-bold text-white mb-3 text-xl tracking-tight group-hover:text-neutral-200 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                    <time className="text-xs text-neutral-600">
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="text-xs text-neutral-500 group-hover:text-white transition-colors flex items-center gap-1">
                      Coming soon
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Combined CTA */}
          <ScrollReveal>
            <div className="mt-20 glass-card rounded-[2.5rem] p-8 md:p-14 border border-white/10 text-center relative overflow-hidden">
              <div className="absolute -inset-24 bg-gradient-to-br from-white/5 via-transparent to-neutral-500/5 blur-3xl rounded-[3rem] -z-10" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                Secure your enterprise. Optimize your life.
              </h3>
              <p className="text-neutral-400 mb-8 max-w-lg mx-auto font-light">
                Discover how Advayant's intelligence stack can protect your corporate AI infrastructure and maximize your personal finances.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://klaryx.advayant.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center px-8 py-4 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] overflow-hidden w-full sm:w-auto justify-center"
                >
                  <span className="relative z-10 flex items-center">
                    Launch Klaryx
                  </span>
                </a>
                <a
                  href="https://pryz.advayant.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 glass text-white text-sm font-medium rounded-full hover:bg-neutral-900 transition-all border border-white/10 w-full sm:w-auto text-center"
                >
                  Try Pryz AI Free
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
