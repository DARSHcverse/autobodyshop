# Crown Auto Trading — Next.js Website

A full-featured, SEO-optimised website for Crown Auto Trading built with **Next.js 14**, **Tailwind CSS**, and best-practice SEO metadata.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
crown-auto/
├── app/
│   ├── layout.tsx          # Root layout — global SEO metadata, fonts, structured data
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + animations
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   ├── robots.ts           # Auto-generated robots.txt
│   ├── not-found.tsx       # Custom 404 page
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ServicesPreview.tsx
│   │   ├── FeaturedInventory.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTABanner.tsx
│   ├── inventory/
│   │   └── page.tsx        # Full inventory listing with filters
│   ├── services/
│   │   └── page.tsx        # Services detail page
│   ├── about/
│   │   └── page.tsx        # About us with team & timeline
│   └── contact/
│       ├── page.tsx        # Server wrapper (metadata)
│       └── ContactForm.tsx # Interactive contact form
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

## 🔍 SEO Features

- ✅ **Next.js Metadata API** — per-page title, description, keywords
- ✅ **Open Graph tags** — rich previews on Facebook, LinkedIn, WhatsApp
- ✅ **Twitter Card meta tags**
- ✅ **JSON-LD structured data** — AutoDealer schema for Google rich results
- ✅ **sitemap.xml** — auto-generated via `app/sitemap.ts`
- ✅ **robots.txt** — auto-generated via `app/robots.ts`
- ✅ **Canonical URLs** — prevents duplicate content
- ✅ **Google verification meta tag** placeholder
- ✅ **Semantic HTML** — proper h1/h2 hierarchy throughout
- ✅ **Mobile-responsive** — all pages fully responsive

---

## 🎨 Design System

**Colors:**
- Gold: `#fbbf24` / `#f59e0b` / `#d97706`
- Background: `#050505` / `#0a0a0a`
- Card: `#111111`

**Fonts:**
- Display: Playfair Display (serif)
- Body: Rajdhani (sans-serif)

---

## ⚙️ Customisation Checklist

- [ ] Replace `crownautotrading.com.au` with your actual domain
- [ ] Add real vehicle photos to inventory cards
- [ ] Connect contact form to your email (Resend, EmailJS, or Formspree)
- [ ] Embed real Google Maps iframe in Contact page
- [ ] Add real Google verification code in `layout.tsx`
- [ ] Add your Facebook Pixel / Google Analytics in `layout.tsx`
- [ ] Upload `/public/og-image.jpg` (1200×630px) for social sharing
- [ ] Add `/public/favicon.ico` and `/public/apple-touch-icon.png`
- [ ] Update ABN in Footer
- [ ] Add real Google reviews (or connect to Google Places API)

---

## 📦 Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

---

## 📞 Business Info Used

- **Address:** 37 Corners Drive, Thane, VIC 3029
- **Phone:** 0450 758 282
- **Email:** info@crownautotrading.com.au
- **Hours:** Mon–Fri 9am–6pm, Sat 9am–5pm
