# Advayant Intelligence — Building Intelligence for India

Corporate website for **Advayant Intelligence**, an AI-powered company building intelligent products for Indian consumers and enterprises. Home of **Pryz AI** and **Klaryx**.

**Live:** [advayant.com](https://advayant.com) | **Pryz AI:** [pryz.advayant.com](https://pryz.advayant.com) | **Klaryx:** [klaryx.advayant.com](https://klaryx.advayant.com)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5.7 |
| UI | React 19 with React Compiler |
| Styling | Tailwind CSS 4 |
| Hosting | Vercel (standalone output) |
| PWA | Web App Manifest + Apple Web App meta |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, structured data, PWA config
│   ├── page.tsx            # Homepage (Hero, Product Showcase, Innovation, Numbers, CTA)
│   ├── globals.css         # Theme, animations, glass effects, scroll reveals
│   ├── products/page.tsx   # Pryz AI + Klaryx product pages with features, how-it-works, roadmap
│   ├── about/page.tsx      # Company story, mission, team, differentiators
│   ├── blog/page.tsx       # Blog index with SEO-optimized article cards
│   ├── contact/page.tsx    # Contact form, FAQ, founder message
│   └── not-found.tsx       # Custom 404
├── components/
│   ├── Navbar.tsx          # Sticky floating nav with animated logo
│   ├── Footer.tsx          # Site footer with navigation links
│   ├── ScrollReveal.tsx    # Intersection observer scroll animations
│   ├── CountUp.tsx         # Animated number counter
│   ├── SpotlightCard.tsx   # Mouse-tracking spotlight effect
│   ├── CosmicBackground.tsx # Animated mesh gradient background
│   └── PageTransition.tsx  # Route transition fade effect
public/
├── manifest.json           # PWA manifest
├── icon-192.png            # PWA icon 192x192
├── icon-512.png            # PWA icon 512x512
├── apple-touch-icon.png    # iOS home screen icon
├── og-image.png            # Open Graph social preview
└── logo-*.{svg,png}        # Brand assets
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Key Features

### Pryz AI — Consumer Financial Intelligence
- **Recovery System** — Proactively detects wrong-card swaps, EMI-eligible transactions, fee-waiver milestone gaps, and expiring benefits with value shown per opportunity
- **Truth Reconciliation Engine** — Multi-source data engine reconciling bank PDFs, RBI MITC documents, user observations, and AI verifications with honesty badges
- **Card Optimization** — 230+ cards from 38 Indian banks with MCC-aware routing, tiered rewards, cap tracking, and category exclusions
- **Kautilya AI** — 31 financial intelligence tools with sourced confidence and provenance
- **Circles** — Splitwise CSV import, UPI deep-link settlement, item-wise receipts, food delivery auto-split, recurring expenses
- **MITC Monitor** — Daily refresh from RBI-mandated bank PDFs for variant-specific accuracy
- **WhatsApp & Telegram Bots** — Full circle management from messaging apps
- **Multi-Platform** — Web, Android, iOS via Capacitor with Google OAuth

### Klaryx — Zero-Trust AI Governance
- **Semantic DLP** — ONNX transformer models redact PII at the endpoint before it leaves your network (Chrome + Edge extension)
- **LLM Proxy Gateway** — OpenAI-compatible proxy with cost tracking, request filtering, and SIEM streaming (Splunk, Sentinel, Datadog)
- **AI Vendor Crawler** — Puppeteer-driven autonomous discovery of vendor policies and capabilities
- **Compliance Engine** — EU AI Act, ISO 42001, NIST AI RMF, SOC 2 with 6 board-ready report templates
- **Evidence Vault** — Pre-signed S3 storage with auditor tokens for external review
- **MSSP Portal** — Multi-tenant white-label deployment for managed security providers
- **FinOps Intelligence** — Real-time cost tracking across LLM providers with anomaly detection
- **SAML & Entra ID** — Enterprise SSO, password reset, email verification flows
- **DNS Proxy** — CLI and IDE coverage beyond browser extensions

### Website Features
- **DPDPA Compliant** — Zero-knowledge architecture, fully compliant with India's Digital Personal Data Protection Act 2025
- **PWA Installable** — Web App Manifest with theme color, icons, and standalone display mode
- **SEO Optimized** — Structured data (Organization + SoftwareApplication JSON-LD), hreflang tags (en/hi), rich keywords
- **Performance** — React Compiler enabled, `will-change` GPU hints on all animations, CSS-only motion (no JS animation libs)
- **Accessibility** — Skip-to-content link, focus-visible styles, ARIA labels, semantic HTML
- **Blog** — SEO-driven content hub for credit card guides and AI fintech insights

### Design System
- Premium dark mode (pure black background)
- Glassmorphism with backdrop blur effects
- Four color palettes: Neutral, Primary (Indigo/Saffron), Pryz (Cyan/Emerald), Klaryx (Electric Blue/Indigo)
- Scroll-reveal entrance animations with staggered delays
- Fonts: Inter (body), Outfit (product UI), Georgia (logo)

## SEO & Structured Data

The site includes two JSON-LD schemas:

1. **Organization** — Advayant Intelligence company info, address, founding date
2. **SoftwareApplication** — Pryz AI as a free FinanceApplication with feature list

Regional hreflang tags cover `en`, `hi`, and `x-default`.

## Roadmap (shown on /products)

| Feature | Status |
|---------|--------|
| Pryz Recovery System | Live |
| Truth Reconciliation Engine | Live |
| Klaryx Semantic DLP (ONNX) | Live |
| Klaryx LLM Proxy Gateway | Live |
| Polymorphic Payment Architecture | Foundation Shipped |
| NPCI FiMI Integration | Exploring |

## Contact

- **Email:** hello@advayant.com
- **Location:** Bengaluru, India
- **Founder:** Rajeev Gupta
