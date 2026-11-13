# NOIR & NEST — Haute Gastronomy & Dining Sanctuary

> *"An Experience Beyond the Plate."*

A modern, editorial, conversion-focused luxury restaurant website designed for **NOIR & NEST**—a fictional haute gastronomy establishment based in Bengaluru, blending classical French precision with indigenous spice alchemy and wood-hearth culinary discipline.

---

## 1. Project Overview

- **Brand:** NOIR & NEST
- **Tagline:** "An Experience Beyond the Plate."
- **Category:** UI/UX Design, Web Design, Hospitality Architecture
- **Style:** Modern, Editorial, Minimalist, Atmospheric Luxury, Conversion-Focused
- **Development:** Semantic HTML5, Modular Modern CSS3, Vanilla JavaScript (ES6+)
- **Dependencies:** Zero external runtime script libraries (self-contained, ultra-performant)

---

## 2. Directory Structure

```
NOIR-AND-NEST/
├── index.html                   # Semantic HTML5 single-page application
├── css/
│   └── style.css                # Custom properties, typography, layout, breakpoints
├── js/
│   └── script.js                # Interactivity, Lightbox, Form validation, Modals
├── assets/
│   ├── images/                  # 17 Curated high-resolution gastronomy assets
│   │   ├── hero-bg.jpg          # Full-bleed atmosphere dining table setting
│   │   ├── about-chef.jpg       # Executive Chef Julian Vance at the pass
│   │   ├── about-interior.jpg   # Architectural dining room
│   │   ├── dish-scallops.jpg    # Pan-Seared Hokkaido Scallops
│   │   ├── dish-risotto.jpg     # Smoked Wild Forest Morel Risotto
│   │   ├── dish-lamb.jpg        # New Zealand Lamb Cutlets
│   │   ├── dish-dessert.jpg     # Valrhona Noir 70% Chocolate Sphere
│   │   ├── gallery-1.jpg..6.jpg # Editorial gallery photography
│   │   ├── avatar-1.jpg..3.jpg  # Guest testimonial portraits
│   │   └── cta-bg.jpg           # Evening dining ambient background
│   ├── icons/                   # Reusable vector SVG emblems & symbols
│   │   ├── logo-monogram.svg    # Brand diamond monogram
│   │   ├── wine-glass.svg       # Sommelier symbol
│   │   ├── flame-hearth.svg     # Wood hearth symbol
│   │   └── star-gold.svg        # Michelin-inspired gold rating star
│   └── fonts/                   # Typography guide and self-hosting documentation
└── README.md                    # Project documentation & Webflow conversion guide
```

---

## 3. Brand Identity & Design System

### Visual Palette
| Token | Hex / Value | Usage |
| :--- | :--- | :--- |
| `--color-bg-base` | `#0B0D0F` | Deep charcoal foundation |
| `--color-bg-surface` | `#12151B` | Raised cards and panels |
| `--color-bg-card` | `#171B22` | Interactive cards and drawers |
| `--color-gold` | `#C5A059` | Primary brushed gold accent |
| `--color-gold-light`| `#E0C07F` | Hover states, highlights, prices |
| `--color-text-primary`| `#F8F5EE` | Ivory editorial serif headlines |
| `--color-text-secondary`| `#C8C4BA` | Cream body text |
| `--color-text-muted` | `#827E74` | Subtitles, footnotes, captions |
| `--color-veg` | `#2E9B57` | Green framed vegetarian badge |
| `--color-nonveg` | `#B83A3A` | Crimson non-vegetarian badge |

### Typography Pairing
- **Headings & Display:** `Cormorant Garamond` (Weights 300, 400, 500, 600, 700, Italic) — conveys Michelin-starred gravitas, classical elegance, and culinary poetry.
- **Body & UI Elements:** `Plus Jakarta Sans` (Weights 300, 400, 500, 600) — clean geometric letterforms ensuring effortless legibility in low-light dark mode interfaces.

---

## 4. Key Features & Sections

1. **Sticky Glassmorphic Navigation Bar:**
   - Animated diamond monogram logo (`NOIR & NEST`).
   - Smooth scroll anchor links with active section highlight.
   - Prominent gold "Book a Table" primary CTA button.
   - Fully responsive hamburger menu with mobile drawer.
   - Live service status indicator (auto-detects lunch vs. dinner service hours).

2. **Full-Screen Hero Experience:**
   - Cinematic full-bleed restaurant photography with dark vignette gradient overlay.
   - Headline: *"Where Every Bite Tells a Story."*
   - Dual conversion paths: "Explore Our Menu" and "Reserve a Table".
   - Heritage credential strip: *Artisanal Wood Hearth • Micro-Seasonal Terroir • Evening Degustation*.
   - Animated mouse scroll cue.

3. **Signature Dishes ("A Taste of Excellence"):**
   - 4 masterwork cards with zoom hover effects and realistic pricing in INR (₹):
     - *Pan-Seared Hokkaido Scallops* (₹1,850) [Non-Veg, Chef's Choice]
     - *Smoked Wild Forest Morel Risotto* (₹1,450) [Veg, Guest Favorite]
     - *New Zealand Lamb Cutlets* (₹2,350) [Non-Veg, Signature]
     - *Valrhona Noir 70% Chocolate Sphere* (₹950) [Veg, Pastry Art]
   - Quick "Reserve for This Dish" trigger that prefills the reservation request field.

4. **About the Brand ("More Than Just Dining"):**
   - Editorial 2-column layout with stacked imagery and floating testimonial badge.
   - Three core brand pillars: *Micro-Seasonal Provenance*, *Artisanal Wood Fire*, and *Uncompromising Hospitality*.
   - Interactive "Discover Our Story" button opening an Atelier Manifesto modal from Executive Chef Julian Vance.

5. **Interactive Seasonal Menu Section:**
   - Dynamic tabbed filtering across 4 categories: *Starters*, *Main Course*, *Desserts*, and *Beverages & Cellar*.
   - 12 comprehensive dishes with authentic culinary descriptions, dietary indicators (Veg/Non-Veg), dietary tags (Gluten-Free, Vegan, Handcrafted), and sommelier wine pairings.

6. **Luxury Reservation Console ("Your Table Awaits"):**
   - Left side: Dining etiquette, dress code guidelines (Smart Elegant), seating windows, and direct concierge contact.
   - Right side: Full interactive booking form with client-side validation:
     - Name, Email, Phone (+91 support), Date (min date set to current date), Time slots (Lunch & Dinner), Party size (1 to 8 guests), Seating preference (Main Dining Room, Chef's Counter, Glasshouse, Private Cellar), Special dietary requests.
   - Loading animation on confirmation button.
   - Digital Reservation Ticket Modal with generated Reference ID (`NN-2026-XXXX`), reservation details recap, and clear demo notice.

7. **Testimonials ("Words From Our Guests"):**
   - 3 authentic editorial review cards with star ratings, reviewer avatars, and critical commentary from food critics and patrons. Clearly noted as demo reviews.

8. **Sensory Food & Architecture Gallery:**
   - Asymmetric editorial grid showcasing raw bar plating, dining salons, master chef at pass, mixology, patisserie, and private wine cellar.
   - Built-in Fullscreen Lightbox with:
     - Next / Previous buttons.
     - Keyboard navigation (Left arrow, Right arrow, Escape key).
     - Counter indicator (`Photo X of 6`) and titles.

9. **Call-to-Action ("Make Tonight Memorable"):**
   - Full-bleed ambient background with dual conversion triggers.

10. **Comprehensive Footer:**
    - Brand tagline and philosophy recap.
    - Quick navigation links.
    - Operating hours (Lunch, Dinner, Closed Monday for culinary R&D).
    - Fictional Lavelle Road Bangalore demo address, telephone, and email.
    - Privé Society newsletter subscription with interactive toast notification.
    - Social media icon links and back-to-top button.

---

## 5. Webflow Implementation Guide

This project was built following Webflow-native layout paradigms, making direct migration into Webflow effortless:

| HTML Element | Webflow Native Structure | Notes |
| :--- | :--- | :--- |
| `.site-header` | `Navbar` Component | Fixed position, background transition on scroll |
| `.hero-section` | `Section` + `Background Video / Image` | 100vh min height, Flexbox center |
| `.signature-grid` | `CSS Grid` (4 columns desktop, 2 laptop, 1 mobile) | CMS Collection or static components |
| `.menu-nav-tabs` | Webflow `Tabs` or Custom Attributes | Category filtering via Finsweet Attributes or custom JS |
| `.menu-grid` | `Collection List` (CMS Collection: Menu Items) | Fields: Name, Price, Category, Diet, Description |
| `.gallery-editorial-grid` | `Grid` with manual spans | Items 1-6 with custom row/column spans |
| `.reservation-wrapper` | `Form Block` + 2-Column Grid | Form field interactions & custom error states |
| Lightbox | Webflow `Lightbox` component | Directly links images in group |

---

## 6. How to Run & Preview

### Option A: Direct Browser Preview
Double-click `index.html` or open it directly in Google Chrome, Microsoft Edge, Safari, or Mozilla Firefox.

### Option B: Local HTTP Server (Recommended)
Using Python:
```bash
cd C:\Users\roysh\.gemini\antigravity\scratch\NOIR-AND-NEST
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

Using Node.js / npx:
```bash
npx serve .
```

---

## 7. Accessibility & Performance
- **Reduced Motion Support:** Respects `prefers-reduced-motion: reduce` for smooth degradation.
- **Semantic Structure:** Proper `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- **Form Accessibility:** Accessible labels (`<label for="...">`), ARIA attributes (`aria-expanded`, `aria-label`, `role="dialog"`), visible `:focus-visible` gold rings.
- **Image Optimization:** High-fidelity webp/jpg images with explicit aspect ratios and `loading="lazy"` attributes.
