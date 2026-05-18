# 🛒 M Departmental Store — Lucknow's Trusted Grocer, Reimagined

[![Live Site](https://img.shields.io/badge/Live%20Demo-mukesh--chi.vercel.app-E11D2E?style=for-the-badge&logo=vercel&logoColor=white)](https://mukesh-chi.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind%20CSS-v4.0.0-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

> **"Serving Lucknow with Love & Quality Since 1995"**
>
> What began as a humble 200 sq. ft. local neighborhood *kirana* store founded by **Mr. Mukesh Kumar** in Alambagh, Lucknow, has now been digitized into a premium, ultra-fast online departmental storefront. This platform brings the promise of **Freshness, Trust, and Community** straight to your doorstep with 10-15 minute grocery deliveries.

---

## 🌟 Visual & Interactive Highlights

M Departmental Store is built for the modern web—featuring rich aesthetics, dark mode by default, glassmorphic headers, and dynamic animations:
- **Premium Design System**: Immersive custom dark palette (`#0f1115` base) tailored with vibrant crimson-red (`#E11D2E`) and fresh emerald highlights.
- **Kinetic Micro-interactions**: Smooth page transitions, cards scaling on hover, and active feedback states powered by **Framer Motion** and **GSAP**.
- **Dynamic Offer Marquees**: High-impact scrolling banner strips showing real-time deals.
- **Mobile-App Native feel**: Optimized layouts featuring a beautiful persistent bottom navigation bar on mobile devices.

---

## ⚙️ Core Features

1. **⚡ Hyper-Local Quick Commerce**: Promised delivery in 30-60 minutes for Alambagh and surrounding areas (5km radius). Free shipping on orders above ₹199.
2. **🛒 Dynamic Shopping Cart (`CartContext`)**: Seamless add-to-cart, sliding drawer, item quantity increments, and total calculations powered by a lightweight global React Context.
3. **🏷️ Dynamic Offers & Popups**: Gamified *Flash Deal Popups* and *Daily Deals* components to drive customer engagement and conversions.
4. **📦 Category & Filter Systems**: Advanced category sorting (Groceries, Snacks & Beverages, Personal Care, Beauty, Baby Care, etc.) with responsive sidebar filters.
5. **📑 Comprehensive Blog & Recipes**: A built-in blog system detailing healthy living, grocery hacks, and recipe ideas.
6. **🔒 Interactive Checkout**: Fully responsive forms validating shipping details, payment preferences, and computing delivery fees in real-time.
7. **🤝 Store Policies Accordion**: Interactive, clean FAQ accordion mapping out Return & Refund policies ("Start-to-Finish" freshness guarantee), Shipping, and Privacy terms.

---

## 🛠️ Technical Stack & Tools

The storefront is engineered using cutting-edge, production-ready libraries:

| Layer | Technology | Version | Description |
| :--- | :--- | :--- | :--- |
| **Core Framework** | [Next.js](https://nextjs.org/) (App Router) | `16.1.6` | Modern file-based routing and React Server Components. |
| **Logic Engine** | [React](https://react.dev/) / [TypeScript](https://www.typescriptlang.org/) | `19.2.3` / `5.x` | Strongly typed component tree with stateful hooks. |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) v4 | `^4.0.0` | Next-generation performance, zero-runtime, modern CSS features. |
| **Post-Processing** | `@tailwindcss/postcss` | `^4` | Seamless PostCSS compilation for Tailwind. |
| **Animations (GSAP)** | [GSAP](https://gsap.com/) | `^3.14.2` | High-performance, low-latency animations for complex timelines. |
| **Animations (Motion)** | [Framer Motion](https://www.framer.com/motion/) | `^12.34.0` | Fluid CSS transitions and layout morphing. |
| **Icons** | [Lucide React](https://lucide.dev/) | `^0.564.0` | Clean, modern vector icon set. |
| **Linter** | [ESLint](https://eslint.org/) | `^9` | Static analysis for clean, error-free JavaScript and TypeScript. |

---

## 📂 Project Architecture

The workspace follows a highly organized Next.js src layout structure:

```bash
mukesh/
├── src/
│   ├── app/                      # Next.js App Router (Routes & Layouts)
│   │   ├── about/                # Story page (Since 1995, Mukesh Kumar)
│   │   ├── blog/                 # Store articles and updates
│   │   ├── category/             # Category grid & listing
│   │   ├── checkout/             # Shopping checkout flow
│   │   ├── contact/              # Support, Policies Accordion, and Contacts
│   │   ├── deals/                # Flash sales & Discount listings
│   │   ├── product/              # Dynamic single product page
│   │   │   └── [id]/             # Dynamic routing for product details
│   │   ├── globals.css           # Custom CSS variables and Tailwind imports
│   │   └── layout.tsx            # Global state context injector and layout
│   ├── components/               # Reusable Modular UI Components
│   │   ├── ui/                   # Generic elements (Buttons, Input cards)
│   │   ├── Navbar.tsx            # Sticky desktop header & mobile hamburger drawer
│   │   ├── Hero.tsx              # Dynamic marketing banner
│   │   ├── CartDrawer.tsx        # Slide-over cart state manager
│   │   ├── ProductCard.tsx       # Standard grid card for items
│   │   ├── Location.tsx          # Lucknow retail outlet Google Maps locator
│   │   └── StoreExperience.tsx   # Premium features slider
│   ├── context/                  # Global State Providers
│   │   └── CartContext.tsx       # React Context managing shopping items, drawer open/close
│   └── types/                    # Core Type Definitions
│       └── product.ts            # Type definitions for products & reviews
├── public/                       # Static Assets & Imagery
│   └── images/                   # AI-Generated rich assets
├── tsconfig.json                 # TypeScript configurations
├── next.config.ts                # Next.js bundler settings
└── package.json                  # Dependencies and build scripts
```

---

## 🚀 Local Development Setup

To run the project locally on your machine, follow these simple steps:

### 1. Prerequisites
Make sure you have **Node.js** (v18.x or later) and **npm** installed on your system.

### 2. Clone the Repository
```bash
git clone https://github.com/vs-sam007/mukesh.git
cd mukesh
```

### 3. Install Dependencies
Install all core and dev dependencies:
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to **`http://localhost:3000`** to view the application in action.

### 5. Build for Production
To generate an optimized production bundle:
```bash
npm run build
```

### 6. Lint & Format Code
To test for static syntax or linting issues:
```bash
npm run lint
```

---

## 📍 Store Operations & Physical Presence

For customers based in Lucknow, we operate a fully stocked physical retail store:

- **🏢 Address**:  
  565-KA/226-A, opposite Police Chowki Saraffa,  
  Amrudhi Bagh, Alambagh,  
  Lucknow, Uttar Pradesh - 226005
- **📞 Phone Support**: `094153 30844`  
- **📧 Email Support**: `support@mukeshstore.com`  
- **⏰ Timings**: `Mon - Sun, 8:00 AM - 10:00 PM`

---

## 🛡️ Guarantees & Returns
- **Start-to-Finish Freshness**: 24-hour no-questions-asked replacement for fresh fruits & vegetables.
- **Refund Processing**: Handled securely back to original payment methods within 5–7 business days.
- **Fast Commerce Radius**: Standard 30-60 min dispatch inside a 5km radius of Alambagh.

---

*Made with ❤️ for Mr. Mukesh Kumar's Departmental Store, Alambagh, Lucknow. Deployed live on [Vercel](https://mukesh-chi.vercel.app/).*
