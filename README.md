# Altrustity - Software Company Portfolio Website

A modern, production-ready portfolio website for a software development company built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, professional design with blue/purple color palette
- 🌓 Dark/Light mode with system preference detection
- 📱 Fully responsive (mobile-first design)
- ⚡ Smooth animations with Framer Motion
- ♿ Accessible components with ARIA labels
- 🔍 SEO-friendly structure
- 🎯 7 complete pages: Home, About, Services, Products, Pricing, Portfolio, Contact
- 🧩 Reusable component architecture
- 📝 Form validation
- 🎭 Smooth page transitions

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS 3** for styling
- **React Router** for navigation
- **Framer Motion** for animations
- **Headless UI** for accessible components
- **React Icons** for icons

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, ThemeToggle, ScrollToTop
│   ├── ui/              # Button, Card, Section, FormInput (base components)
│   ├── sections/        # Hero, TrustedClients, ServicesOverview, etc.
│   └── shared/          # ServiceCard, ProductCard, PricingCard, PortfolioCard, ContactForm
├── pages/               # All 7 page components
├── data/                # Mock data (services, products, pricing, portfolio, testimonials)
├── hooks/               # Custom hooks (useTheme)
├── utils/               # Utility functions (validations)
└── styles/              # Global CSS with Tailwind imports
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Pages

1. **Home** - Hero section, services overview, featured products, testimonials, CTA
2. **About** - Company overview, mission & vision, core values, technologies
3. **Services** - Detailed service pages with processes and tools
4. **Products** - Product listings with features and tech stacks
5. **Pricing** - 3 pricing tiers with feature comparison table
6. **Portfolio** - Case studies with problem/solution/result format
7. **Contact** - Contact form with validation and company details

## Customization

### Changing Company Name

The company name "Altrustity" can be changed in:
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `index.html` (title and meta tags)
- All page hero sections

### Colors

Colors are defined in `tailwind.config.js`:
- Primary: Blue shades (`primary-500` to `primary-900`)
- Secondary: Purple shades (`secondary-500` to `secondary-900`)

### Content

All content is stored in `src/data/`:
- `services.ts` - Service definitions
- `products.ts` - Product listings
- `pricing.ts` - Pricing plans and features
- `portfolio.ts` - Case studies
- `testimonials.ts` - Client testimonials

## Features Overview

### Dark Mode
- Automatically detects system preference
- Toggle button in header
- Persists user preference in localStorage

### Animations
- Page transitions
- Scroll-triggered fade-ins
- Hover effects on cards and buttons
- Smooth mobile menu transitions

### Form Validation
- Real-time validation
- Email and phone format validation
- Required field checking
- Accessible error messages

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Mobile hamburger menu
- Responsive grid layouts

## License

This project is private and proprietary.
