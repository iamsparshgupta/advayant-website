import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { CosmicBackground } from "@/components/CosmicBackground";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://advayant.com"),
  title: "Advayant Intelligence — Building Intelligence for India",
  description:
    "Advayant Intelligence builds AI-powered products that solve real problems for Indian consumers. Our first product, Pryz AI, is India's most advanced credit card optimization engine.",
  keywords: [
    "Advayant Intelligence",
    "Pryz AI",
    "credit card optimizer India",
    "best credit card for rewards",
    "UPI credit card optimizer",
    "AI fintech India",
    "DPDPA compliant",
    "zero-knowledge finance",
  ],
  icons: {
    icon: [{ url: "/favicon-advayant.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon-advayant.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Advayant Intelligence",
    description:
      "Building the next generation of personal and enterprise intelligence for India. Home of Pryz AI.",
    url: "https://advayant.com",
    siteName: "Advayant Intelligence",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Advayant Intelligence — Building Intelligence for India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advayant Intelligence",
    description:
      "Building the next generation of personal and enterprise intelligence for India. Home of Pryz AI.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Advayant" />
        {/* Hreflang for regional SEO */}
        <link rel="alternate" hrefLang="en" href="https://advayant.com" />
        <link rel="alternate" hrefLang="hi" href="https://advayant.com" />
        <link rel="alternate" hrefLang="x-default" href="https://advayant.com" />
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Advayant Intelligence",
              url: "https://advayant.com",
              logo: "https://advayant.com/logo-transparent.png",
              description:
                "AI-powered products that solve real, everyday problems for Indian consumers.",
              foundingDate: "2025",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bengaluru",
                addressCountry: "IN",
              },
              sameAs: [],
              knowsAbout: [
                "Artificial Intelligence",
                "Credit Card Optimization",
                "UPI Payments",
                "Financial Technology",
                "AI Governance",
                "Enterprise AI Security",
                "Shadow AI Detection",
              ],
            }),
          }}
        />
        {/* Pryz AI — SoftwareApplication Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Pryz AI",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web, Android, iOS",
              url: "https://pryz.advayant.com",
              description:
                "India's most advanced card optimization engine. AI-powered rewards maximization across 230+ cards from 38 banks, with WhatsApp and Telegram bots, expense circles, and 18 Kautilya AI financial intelligence tools.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
              },
              author: {
                "@type": "Organization",
                name: "Advayant Intelligence",
              },
              featureList:
                "Credit Card Optimization, Kautilya AI (18 Tools), WhatsApp & Telegram Bots, Expense Circles, Email Auto-Import, Community, Loyalty Tracking, Credit Score, UPI-on-Credit, Google OAuth",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased text-white selection:bg-primary-500/30">
        <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-primary-500/30">
          <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none z-0" />
          <CosmicBackground />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-neutral-900 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="relative z-10 flex flex-col min-h-screen">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
