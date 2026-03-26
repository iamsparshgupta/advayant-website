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
    "Advayant Intelligence builds AI-powered products that solve real problems for Indian consumers. Our first product, FLUX AI, is India's smartest credit card optimizer.",
  keywords: [
    "Advayant Intelligence",
    "FLUX AI",
    "credit card optimizer India",
    "best credit card for rewards",
    "UPI credit card optimizer",
    "AI fintech India",
    "DPDPA compliant",
    "zero-knowledge finance",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Advayant Intelligence",
    description:
      "Building AI-powered intelligence products for India. Home of FLUX AI.",
    url: "https://advayant.com",
    siteName: "Advayant Intelligence",
    type: "website",
    images: [
      {
        url: "/og-image.png",
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
      "Building AI-powered intelligence products for India. Home of FLUX AI.",
    images: ["/og-image.png"],
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
              ],
            }),
          }}
        />
        {/* FLUX AI — SoftwareApplication Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "FLUX AI",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web, Android, iOS",
              url: "https://flux.advayant.com",
              description:
                "India's smartest credit card optimizer. AI-powered rewards maximization across 200+ cards including UPI-on-credit, expense splitting, and real-time card suggestions.",
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
                "Credit Card Optimization, AI Chat (Kautilya), Smart Import Pipeline, Expense Rings, WhatsApp Bot, UPI-on-Credit Support",
            }),
          }}
        />
      </head>
      <body className="bg-black text-neutral-50 font-sans antialiased">
        <CosmicBackground />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-neutral-900 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content"><PageTransition>{children}</PageTransition></main>
        <Footer />
      </body>
    </html>
  );
}
