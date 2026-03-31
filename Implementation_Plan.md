# Floe: Implementation Plan & Checklist

### ❄️ Phase 1: Brand Environment & Design System (COMPLETED)
- [x] **Define Global CSS Variables:** Set up color tokens including `--glacial-blue` (#a2c2e1), `--arctic-white` (#f0f8ff), `--frost-silver` (#dcdcdc), and `--deep-ice` (#003366).
- [x] **Establish Typography:** Import and configure Google Fonts (Montserrat/Inter) for headings and body text.
- [x] **Implement Glassmorphism Utilities:** Create CSS classes for `.glass-card` using `backdrop-filter: blur(12px)`.
- [x] **Design Navigation Framework:** Build sticky frosted-glass navbar with navigation links.
- [x] **Build Hero Section:** Develop full-height landing section with high-res "frozen" imagery and primary CTA.

### 🌬️ Phase 2: The Glacial Catalog & UI Layout (COMPLETED)
- [x] **Develop Product Card Component:** Build reusable card with image container, flavor title, price ($15), and a "Quick Add" button.
- [x] **Configure Responsive Grid:** Nest products in a CSS Grid that adjusts column counts based on viewport size.
- [x] **Integrate Hover Animations:** Add a layer of "frost" that subtly grows over the product image when the user hovers.
- [x] **Add Flavor Tags:** Label syrups with categories (e.g., "Sweet", "Earthy", "Limited Edition").

### 🛒 Phase 3: "Frozen" Cart Logic & Promotions
- [ ] **Set Up JavaScript Cart State:** Initialize a client-side cart using Local Storage for persistence.
- [ ] **Implement 3-for-$35 Bundle Algorithm:** Code the logic to detect sets of 3 and apply the discounted rate.
- [ ] **Create Promotional Threshold Logic:** Listener to detect `$60+` totals and automatically add the "Free Branded Mug".
- [ ] **Design Slide-out Cart Drawer:** Side-accessible menu with itemized breakdowns and total cost.
- [ ] **Ensure Data Persistence:** Ensure the cart state is consistent across page refreshes.

### 🏪 Phase 4: Wholesale & B2B Integration
- [ ] **Build Wholesale Inquiry Page:** Dedicated section for cafe owners to request bulk pricing.
- [ ] **Develop Robust Contact Form:** Include fields for `Cafe Name`, `Monthly Volume`, and `Contact Info`.
- [ ] **Build Delivery Order Mockup:** Integrated form to capture shipping data for individual home delivery orders.
- [ ] **Submit State Feedback:** Custom themed success/error confirmation messages.

### ✨ Phase 5: The "Arctic" Polish & Testing
- [ ] **Add Scroll Reveal Animations:** Use the Intersection Observer API for fade-in/slide-up effects as users scroll.
- [ ] **Perform Visual Consistency Audit:** Ensure all buttons, borders, and blurs follow the "Floe" design language.
- [ ] **Optimize Asset Loading:** Compress all product images and implement lazy loading.
- [ ] **Final Cross-Browser Validation:** Conduct full testing on Chrome, Safari, and mobile browsers.
