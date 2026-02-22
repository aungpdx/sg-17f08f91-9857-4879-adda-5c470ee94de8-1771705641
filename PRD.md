# Product Requirements Document: Toba Charity Rebuild

## 1. Executive Summary
Rebuild the Toba Charity website with a primary focus on **premium UI/UX** and **conversion optimization**. The platform must support complex donation flows (one-time/monthly), user authentication (Donor Portal), and content management (Admin Dashboard), replacing a previous solution that lacked visual polish.

## 2. Design System & Aesthetics
*   **Vibe:** Professional, Transparent, Islamic, High-End.
*   **Color Strategy:**
    *   Primary: Deep Emerald (`#064e3b`) - Trust, Growth.
    *   Secondary: Muted Gold (`#d97706`) - Premium accents.
    *   Backgrounds: Clean White / Light Gray - Readability.
*   **Components:** Shadcn/UI with customized border radii and typography.

## 3. Core Features

### A. Public Facing (Conversion Focused)
1.  **Hero Section:** High-impact imagery, clear value prop, immediate "Donate" CTA.
2.  **Donation Widget:** Tabbed interface (One-time vs Monthly), preset amounts, custom amount.
3.  **Project Showcase:** Grid view of active campaigns (Zakat, Sadaqah, Emergency Relief).
4.  **Impact Stats:** Animated counters showing funds raised/people helped.
5.  **Trust Signals:** Badges, certificates, 100% donation policy verification.

### B. User Features (Donor Portal)
1.  **Authentication:** Login/Signup via Supabase Auth (Magic Link / Password).
2.  **Dashboard:** View donation history, download tax receipts.
3.  **Subscription Management:** Cancel/Pause recurring donations.
4.  **Profile:** Update contact details.

### C. Admin Features (Backend)
1.  **Overview Dashboard:** Total revenue charts, recent activity.
2.  **Donation Management:** View all transactions, manual entry.
3.  **Project Management:** Create/Edit campaigns (Title, Image, Goal, Description).

## 4. Technical Architecture
*   **Frontend:** Next.js (Pages Router), Tailwind CSS, Framer Motion (animations).
*   **Backend:** Supabase (PostgreSQL).
*   **Auth:** Supabase Auth.
*   **Payments:** Stripe (via API Routes).
*   **Database Schema (Planned):**
    *   `users` (id, email, role)
    *   `campaigns` (id, title, goal, current_amount, slug)
    *   `donations` (id, user_id, amount, status, type, stripe_id)

## 5. Development Roadmap
*   **Phase 1:** Setup Design System & Database Schema.
*   **Phase 2:** Build Core Layout & Homepage (The "Look").
*   **Phase 3:** Implement Auth & User Dashboard.
*   **Phase 4:** Build Donation Flow & Stripe Integration.
*   **Phase 5:** Admin Dashboard & Content Management.