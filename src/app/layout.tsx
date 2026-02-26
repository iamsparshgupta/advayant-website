import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
      </head>
      <body className="bg-white text-neutral-800 font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
