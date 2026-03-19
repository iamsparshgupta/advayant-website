import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog — Advayant Intelligence | AI & Credit Card Insights for India",
  description:
    "Expert guides on maximizing credit card rewards, UPI-on-credit strategies, and AI-powered financial intelligence for Indian consumers.",
  keywords: [
    "best credit card India 2026",
    "credit card rewards optimization",
    "UPI credit card",
    "AI fintech India",
    "FLUX AI blog",
  ],
};

const posts = [
  {
    slug: "best-credit-card-swiggy-zomato-2026",
    title: "Best Credit Card for Swiggy & Zomato in 2026",
    excerpt:
      "Food delivery is a daily habit for millions. But which credit card actually maximizes your cashback on Swiggy, Zomato, and other food platforms? We break down the top picks across HDFC, SBI, ICICI, Axis, and fintech co-brand cards.",
    category: "Card Guides",
    readTime: "5 min read",
    date: "2026-03-18",
  },
  {
    slug: "upi-credit-cards-explained",
    title: "UPI on Credit Cards: The Complete Guide for 2026",
    excerpt:
      "UPI-on-credit is reshaping how India pays. With RuPay credit on UPI, Zagg, and SuperCard Pro entering the space, understanding which UPI credit card gives you the best rewards per scan is now essential.",
    category: "UPI & Payments",
    readTime: "7 min read",
    date: "2026-03-12",
  },
  {
    slug: "how-flux-ai-saves-you-money",
    title: "How FLUX AI Saves You Money on Every Transaction",
    excerpt:
      "Most Indians leave thousands of rupees on the table every year by swiping the wrong card. Here's how FLUX AI's 3-layer intelligence engine finds the optimal card for every purchase — automatically.",
    category: "Product Deep Dive",
    readTime: "4 min read",
    date: "2026-03-05",
  },
  {
    slug: "dpdpa-what-it-means-for-your-financial-data",
    title: "DPDPA 2026: What It Means for Your Financial Data",
    excerpt:
      "India's Digital Personal Data Protection Act is now fully enforced. We explain what changes for consumers, why zero-knowledge architecture matters, and how Advayant is built for compliance from day one.",
    category: "Privacy & Security",
    readTime: "6 min read",
    date: "2026-02-28",
  },
  {
    slug: "best-credit-card-amazon-flipkart-online-shopping",
    title: "Best Credit Card for Amazon & Flipkart Shopping in 2026",
    excerpt:
      "Online shopping dominates Indian e-commerce. From ICICI Amazon Pay to Flipkart Axis, we compare real reward rates, hidden multipliers, and how to stack offers for maximum savings.",
    category: "Card Guides",
    readTime: "6 min read",
    date: "2026-02-20",
  },
];

const categoryColors: Record<string, string> = {
  "Card Guides": "text-flux-400 bg-flux-500/10 border-flux-500/20",
  "UPI & Payments": "text-accent-400 bg-accent-500/10 border-accent-500/20",
  "Product Deep Dive": "text-primary-400 bg-primary-500/10 border-primary-500/20",
  "Privacy & Security": "text-green-400 bg-green-500/10 border-green-500/20",
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6 bg-transparent relative overflow-hidden">
        <div className="absolute bottom-1/4 right-[10%] w-[500px] h-[300px] bg-primary-900/15 rounded-[100%] blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-500/20 bg-primary-500/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-400 shadow-[0_0_8px_theme(colors.primary.500/80)]" />
            <span className="text-[10px] font-semibold text-primary-200 uppercase tracking-widest">
              Insights
            </span>
          </div>
          <h1 className="animate-fade-in-up animate-delay-100 text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            The Advayant{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              Blog
            </span>
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            Expert guides on maximizing credit card rewards, understanding
            UPI-on-credit, and making smarter financial decisions with AI.
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

                  <h2 className="font-bold text-white mb-3 text-xl tracking-tight group-hover:text-flux-50 transition-colors">
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
                    <span className="text-xs text-neutral-500 group-hover:text-flux-400 transition-colors flex items-center gap-1">
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

          {/* Newsletter CTA */}
          <ScrollReveal>
            <div className="mt-20 glass-card rounded-[2.5rem] p-8 md:p-14 border border-white/10 text-center relative overflow-hidden">
              <div className="absolute -inset-24 bg-gradient-to-br from-primary-400/5 via-transparent to-flux-400/5 blur-3xl rounded-[3rem] -z-10" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                Get smarter with every swipe
              </h3>
              <p className="text-neutral-400 mb-8 max-w-md mx-auto font-light">
                Full articles and weekly credit card insights are coming soon.
                Meanwhile, try FLUX AI to start optimizing today.
              </p>
              <a
                href="https://flux.advayant.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-8 py-4 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10 flex items-center">
                  Try FLUX AI Free
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
