import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { CosmicBackground } from "@/components/CosmicBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advayant Intelligence — Building Intelligence for India",
  description:
    "Advayant Intelligence builds AI-powered products that solve real problems for Indian consumers. Our first product, FLUX AI, is India's smartest credit card optimizer.",
  keywords: [
    "Advayant Intelligence",
    "FLUX AI",
    "credit card optimizer",
    "financial intelligence",
    "India",
    "AI",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        url: "https://advayant.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Advayant Intelligence — Building Intelligence for India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advayant Intelligence",
    description:
      "Building AI-powered intelligence products for India. Home of FLUX AI.",
    images: ["https://advayant.com/og-image.png"],
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
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
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
                "Financial Technology",
                "Credit Card Optimization",
              ],
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
