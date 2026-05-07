# Soumi & James Wedding Website - PRD

## Original Problem Statement
Build a pixel-perfect, multi-page wedding website for "Soumi & James" with a regal, elegant, magical, and classic feel. Sage green, cream, and warm gold color palette. Two cultural celebrations: US Wedding in Casper, Wyoming (Sept 9, 2026) and Indian Wedding in Kolkata, India (TBD).

## Architecture
- **Frontend**: React + TailwindCSS + React Router (deployed on Netlify)
- **Backend**: FastAPI + MongoDB (used for admin features on preview)
- **Admin**: localStorage-based guest management (Netlify-compatible)
- **Deployment**: Netlify at https://soumiandjameswedding.netlify.app

## What's Been Implemented

### Pages
- Homepage (with countdown to Sept 9, 2026)
- Our Story
- Timeline
- Events (US + Indian wedding sections)
- Wedding Party
- Gallery (polaroid-style)
- Families
- Travel & Stay (with Google Maps embed for Casper, WY)
- FAQ (separate page, 7 questions)
- Guestbook
- RSVP (US wedding active, Indian wedding disabled/Coming Soon)
- Admin (/admin, password: casper)

### Features
- Password gate (password: sj2026) before site entry
- Intro animation with background music ("I Get To Love You")
- Audio starts immediately on click, 300ms before animation
- Scroll-to-top on route change
- Leaf decorations across pages
- WhatsApp invite manager (Admin page, localStorage)
- Invite message: "Hi [Name]! We're getting married! Nothing would make our day more special than having you by our side. Your presence means the world to us. Celebrate with us: https://soumiandjameswedding.netlify.app"
- RSVP with meal preference (Vegetarian/Vegan/Non-Vegetarian) for US wedding
- Post-RSVP guestbook prompt for all guests (attending or declining)
- Indian wedding RSVP disabled with "Coming Soon"
- Netlify _redirects file for SPA routing
- Removed "Made with Emergent" watermark

### Cleanup Done
- Removed VideoInvitePage, record_video.py, generate_sora_video.py
- Removed video files and backend video endpoints

## Pending / Future Tasks
- P1: Full program itinerary (once date details finalized)
- P2: Guest photo upload (QR code → Google Shared Album)
- P3: Wedding registry links
- P4: Dress code / Accommodation details
- P5: Mobile responsiveness review
- P6: Social meta tags (WhatsApp/Facebook link previews)
- P7: Indian wedding RSVP (re-enable when ready)
- P8: Update password from sj2026 if needed after date change

## Key Credentials
- Site password: sj2026
- Admin password: casper
- Wedding date: September 9, 2026
- Live URL: https://soumiandjameswedding.netlify.app
