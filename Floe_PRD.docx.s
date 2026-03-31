# Floe: Product Requirements & Implementation Checklist

## 1. Executive Summary
- [ ] **Project Name:** Floe E-Commerce Website
- [ ] **Company Name:** Floe
- [ ] **Core Objective:** Launch a premium coffee syrup brand website with a sleek, icy theme.
- [ ] **Target Capabilities:** Retail browsing, shopping cart, home delivery orders, and B2B wholesale inquiries.

## 2. Target Audience Requirements
- [ ] **Retail Features:** High-end visual display for home coffee enthusiasts.
- [ ] **B2B Features:** Dedicated entry point for cafe owners and bulk purchasers.

## 3. Product & Pricing Logic
- [ ] **Base Pricing:** Single bottle cost set at $15.00.
- [ ] **Flavor Variety:** Support for multiple flavors (Vanilla Glacier, Caramel Frost, etc.).
- [ ] **Bundle Logic:** Implement 3 bottles for $35.00 discount logic.
- [ ] **Loyalty Reward:** Free branded mug for all orders over $60.00.

## 4. Key Website Features
### 4.1 E-Commerce & Checkout
- [x] **Product Catalog:** High-resolution display of syrup flavors and descriptions.
- [ ] **Dynamic Shopping Cart:** Real-time updates for single items and bundle calculations.
- [ ] **Threshold Monitoring:** Automated notification when "Free Mug" status is reached.
- [ ] **Unified Checkout:** Integrated capture of shipping and delivery details.

### 4.2 B2B & Wholesale
- [ ] **Wholesale Section:** Custom landing area or form for cafe inquiries.
- [ ] **Lead Capture:** Automated collection of business details for bulk pricing requests.

### 4.3 UI/UX & Brand Identity
- [x] **Theme Concept:** Consistent "Ice Floe" aesthetic.
- [x] **Color Palette:** Gradients of Snowy White, Icy Blue, and Deep Glacial Blue.
- [x] **Glassmorphism:** Use of frosted-glass UI elements for a premium feel.
- [x] **Typography:** Clean, modern fonts (e.g., Montserrat or Inter).
- [ ] **Micro-Animations:** Fluid transitions that mimic ice and water interactions.

## 5. Technical Constraints
- [x] **Core Stack:** React (Vite), CSS3, Framer Motion (for premium animations).
- [x] **Platform Hosting:** Optimized for Netlify deployment and GitHub version control.
- [ ] **API Scope:** No external API integrations for Phase 1.
- [ ] **Data Persistence:** Use of Local Storage for cart management.
- [x] **Containerization:** Support for Docker and Docker Compose deployment.

---

# Robust Development Roadmap (Checklist)

### Phase 1: Brand Environment & Design System
- [x] **Define Global CSS Variables:** Set up color tokens including `--glacial-blue` (#a2c2e1), `--arctic-white` (#f0f8ff), `--frost-silver` (#dcdcdc), and `--deep-ice` (#003366).
- [x] **Establish Typography:** Import and configure fonts for headings and body text.
- [x] **Implement Glassmorphism Utilities:** Create CSS classes for `.glass-card` using `backdrop-filter`.
- [x] **Design Navigation Framework:** Build sticky frosted-glass navbar with navigation links.
- [x] **Build Hero Section:** Develop full-height landing section with high-res "frozen" imagery and primary CTA.

### Phase 2: The Glacial Catalog & UI Layout (COMPLETED)
- [x] **Develop Product Card Component:** Build reusable card with image, title, price, and "Quick Add".
- [x] **Configure Responsive Grid:** Implement CSS Grid that adjusts column counts for mobile/desktop.
- [x] **Integrate Hover Animations:** Add "frosting" growth effect on product card hover.
- [x] **Add Flavor Tags:** Label syrups by taste profile (Sweet, Earthy, Limited).

### Phase 3: "Frozen" Cart Logic & Promotions
- [ ] **Set Up JavaScript Cart State:** Initialize array-based state to track item IDs and quantities.
- [ ] **Implement 3-for-$35 Bundle Algorithm:** Mathematical logic to apply bundle pricing automatically.
- [ ] **Create Promotional Threshold Logic:** Listener to detect `$60+` totals and add the "Free Mug".
- [ ] **Design Slide-out Cart Drawer:** Visual side-cart with itemized breakdowns and total cost.
- [ ] **Ensure Data Persistence:** Connect cart logic to `localStorage`.

### Phase 4: Wholesale & B2B Integration
- [ ] **Build Wholesale Inquiry Page:** Professional B2B section for cafe partnerships.
- [ ] **Develop Robust Contact Form:** Fields for `Cafe Name`, `Monthly Volume`, and `Contact Info`.
- [ ] **Build Delivery Order Mockup:** Integrated form to capture shipping data for home orders.
- [ ] **Submit State Feedback:** Custom themed success/error confirmation messages.

### Phase 5: The "Arctic" Polish & Launch Prep
- [ ] **Add Scroll Reveal Animations:** Use Intersection Observer for fade-in/slide-up effects.
- [ ] **Perform Visual Consistency Audit:** Ensure all elements adhere to the "Floe" design system.
- [ ] **Optimize Asset Loading:** Compress images and implement lazy loading.
- [ ] **Final Cross-Browser Validation:** Test across Chrome and Safari (iOS/macOS).

### 🐳 Bonus Phase: Containerization
- [x] **Generate Dockerfile:** Build from Nginx Alpine for lightweight static serving.
- [x] **Create Docker Compose:** Map local ports (8080) for easy environment spin-up.
- [ ] **Secure Deployment:** Set up basic Nginx security headers and environment variables.
