# JobsForAll Haryana — PRD

## Original Problem Statement
Build a highly premium, modern, trustworthy Job Portal Registration Web App named "JobsForAll Haryana" — a single-page multi-screen wizard (no vertical scrolling between sections) with 3 screens:
1. 3D Hero (Start)
2. Job Seeker Registration (Apply)
3. Payment Verification & Trust (Verify)

Aesthetic: Apple/Stripe premium. Glassmorphism, soft gradients, corporate blue + emerald green + pearl white. Frontend-only, no backend.

## Architecture
- React (CRA + craco), Tailwind CSS, Framer Motion, lucide-react, canvas-confetti
- Single-page state machine via `useState` step (1|2|3) + `<AnimatePresence mode="wait">`
- Fixed glass header with 3-step progress stepper + subtle back button

## Tasks Done (2026-02-01)
- Global styles: Cabinet Grotesk (headings) + Plus Jakarta Sans (body) via Fontshare
- App shell with ambient blue/emerald blobs + grain overlay
- Header with glowing logo, animated stepper (start → apply → verify)
- Screen 1 Hero: pure-CSS 3D briefcase cube (perspective + translateZ faces + handle + clasp), floating chips, gradient headline, glass trust badges, magnetic pulsing CTA
- Screen 2 Register: bento glass cards, floating-label inputs w/ blue focus glow, custom select w/ chevron, premium radio cards for status w/ emerald active state, spinner-on-submit
- Screen 3 Verify: stylized QR frame with SVG QR placeholder + finder patterns, glowing UTR input, emerald "Verify & Complete" CTA, soft-blue 30-day refund guarantee box, dynamic company name
- Success modal with confetti + welcome + next-steps + "Register Another"
- Toast validation via sonner
- Full data-testid coverage

## User Personas
- **Job seekers in Haryana** (10th/12th pass, diploma holders, graduates) targeting large employers (Maruti Suzuki, TCS, Hero MotoCorp, Zomato Gurugram, etc.)

## Core Requirements (Static)
- No vertical scrolling between screens (mobile-app feel)
- Premium glassmorphism, soft gradients, crisp typography
- 3D CSS illustration on hero
- Framer Motion slide + blur transitions
- Confetti on success
- 30-day refund guarantee prominently shown
- Absolutely mobile-responsive with 48px+ tap targets

## Prioritized Backlog
- **P1** — Persist registrations (backend + MongoDB) so a real ops team can pick them up
- **P1** — Real UPI QR code generation via UPI intent (pa/pn/am/tn) with the client's UPI ID
- **P2** — Admin dashboard: view/filter registrations by company, status
- **P2** — WhatsApp / Email confirmation after successful registration
- **P2** — i18n (Hindi + Haryanvi) for wider accessibility
- **P3** — OTP-based phone verification prior to payment step
