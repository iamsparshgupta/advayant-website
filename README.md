# Advayant Intelligence — Building Intelligence for India

Corporate website for **Advayant Intelligence**, an AI-powered fintech company building intelligent products for Indian consumers. Home of **FLUX AI** — India's smartest credit card optimizer.

**Live:** [advayant.com](https://advayant.com) | **FLUX AI:** [flux.advayant.com](https://flux.advayant.com)

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
│   ├── products/page.tsx   # FLUX AI product page with features, how-it-works, roadmap
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

### FLUX AI Product
- **Credit Card Optimization** — Best card recommendation for any merchant/amount across 200+ Indian cards
- **UPI on Credit** — Full support for RuPay UPI, Zagg, SuperCard Pro, and other UPI-on-credit products
- **AI Chat (Kautilya)** — Conversational financial intelligence with natural language
- **Smart Import Pipeline** — Proprietary OCR/parsers for bank statements, screenshots, SMS
- **Expense Rings** — Collaborative expense splitting
- **WhatsApp Bot** — Native WhatsApp integration

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
- Four color palettes: Neutral, Primary (Indigo/Saffron), FLUX (Cyan/Emerald), Klaryx (Electric Blue/Indigo)
- Scroll-reveal entrance animations with staggered delays
- Fonts: Inter (body), Outfit (product UI), Georgia (logo)

## SEO & Structured Data

The site includes two JSON-LD schemas:

1. **Organization** — Advayant Intelligence company info, address, founding date
2. **SoftwareApplication** — FLUX AI as a free FinanceApplication with feature list

Regional hreflang tags cover `en`, `hi`, and `x-default`.

## Roadmap (shown on /products)

| Feature | Status |
|---------|--------|
| Open Financial Intelligence API | Developer Beta |
| On-Device Prediction Models | R&D Phase |
| NPCI FiMI Ecosystem Integration | Exploring |
| Multilingual Voice Intelligence | 2026 Roadmap |

## Contact

- **Email:** hello@advayant.com
- **Location:** Bengaluru, India
- **Founder:** Rajeev Gupta
