# Implementation Plan: Toba Charity Frontend

## Goal
Build a premium, responsive frontend for Toba Charity based on provided screenshots.
**Target Output:** Clean React components easily exportable to other projects.

## 1. Design System & Config
- [ ] **Tailwind Config**: Define custom colors (Emerald Green, Gold).
- [ ] **Fonts**: Configure accessible, premium fonts.
- [ ] **Utils**: Ensure `cn()` utility is ready for conditional classes.

## 2. Core Components (The "Building Blocks")
- [ ] **Button Variants**: Primary (Green), Secondary (Gold), Outline (White).
- [ ] **DonationCard**: The floating widget with amount presets.
- [ ] **ProductCard**: Reusable card with image, price button, and quantity stepper.
- [ ] **SectionHeader**: Standardized centered heading + subtext.

## 3. Page Structure (Home)
- [ ] **Navbar**: Sticky, responsive, with logo and "Donate" CTA.
- [ ] **Hero Section**: Background image + Overlay + Text + DonationCard.
- [ ] **Campaign Grid**: "Brighten Someone's Ramadan" (ProductCard list).
- [ ] **Obligations Grid**: "Complete Your Fasting Obligations".
- [ ] **Pathways Grid**: "Give With Purpose" (Icon + Text).
- [ ] **Stats Bar**: Simple flex layout with large numbers.
- [ ] **Trust Section**: "Why Choose Us" icons.
- [ ] **FAQ**: Shadcn Accordion implementation.
- [ ] **Blog Preview**: 3-column grid of articles.
- [ ] **Pre-Footer CTA**: Dark section with final call to action.
- [ ] **Footer**: Navigation links and copyright.

## 4. Assets
- [ ] Use `public/the-olive-branch-australia-logo.svg`.
- [ ] Use placeholders for images (Unsplash) since we don't have the source files yet.

## 5. Export Strategy
- All components will be modular in `src/components/` for easy copy-pasting.