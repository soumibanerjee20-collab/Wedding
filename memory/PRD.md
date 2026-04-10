# Soumi & James Wedding Website - PRD

## Original Problem Statement
Build a pixel-perfect, multi-page wedding website for "Soumi & James" with a regal, elegant, magical, and classic feel. The website should feature their personal love story, timeline, gallery, family information, events, and guestbook.

## Design Requirements
- **Color Palette:** Sage green (#8a9a7c, #6b7c5e), cream (#faf8f4), warm gold (#b8956b, #8B6914)
- **Typography:** Elegant display fonts with handwritten accents (Caveat for polaroid captions)
- **Vibe:** Regal, elegant, magical, classic
- **Decorations:** Sage green botanical leaf SVGs (eucalyptus branches, single leaves, corner vines, leaf garlands) on RSVP, Guestbook, Families pages

## Tech Stack
- **Frontend:** React, React Router, TailwindCSS
- **Animation:** CSS keyframe animations, Framer Motion
- **State Management:** React Hooks, Context API (for audio)
- **Data:** localStorage for guestbook/RSVP, hardcoded data in mock.js
- **Deployment:** Vercel (configured with vercel.json)

## Core Features (All Completed)

1. **Homepage** — Intro animation, countdown timer (Aug 8, 2026), Grand Teton backdrop
2. **Our Story** — Couple's narrative, individual profiles
3. **Timeline** — Chronological love story with polaroid photos (Oct 2023 - Present)
4. **Events** — US Wedding (Aug 7-8, 2026, Wyoming) + Indian Wedding (Nov 5-6, 2027 Tentative, Kolkata)
5. **Gallery** — Polaroid-style scattered photos with lightbox
6. **Families** — Banerjees + Adams families with sage green leaf decorations
7. **Travel & Stay** — Info for both US and India locations with landmarks
8. **Guestbook** — Leave messages with hearts, localStorage persistence, leaf decorations
9. **RSVP** — Dual-event selection, plus-one logic, decline-to-guestbook redirect, leaf decorations
10. **Background Music** — "River Flows in You" persistent player
11. **WhatsApp Invite GIF** — wedding-invite.gif from intro animation

## Key Dates
- US Wedding: August 8, 2026 (Casper, Wyoming)
- Indian Sangeet & Mehendi: November 5, 2027 (Tentative, Kolkata)
- Indian Wedding Reception: November 6, 2027 (Tentative, Kolkata)

## Pages & Routes
- `/` - Homepage
- `/our-story` - Our Story
- `/timeline` - Timeline
- `/events` - Events
- `/gallery` - Gallery
- `/families` - Families
- `/travel` - Travel & Stay
- `/guestbook` - Guestbook
- `/rsvp` - RSVP

## Key Files
- `/app/frontend/src/data/mock.js` - All content data
- `/app/frontend/src/components/LeafDecorations.jsx` - Shared sage green leaf SVG components
- `/app/frontend/src/pages/*.jsx` - All page components
- `/app/frontend/vercel.json` - Vercel deployment config
- `/app/frontend/public/wedding-invite.gif` - WhatsApp invite GIF

## Backlog

### P1 - Medium Priority
- Vercel deployment debugging (user reported errors)
- Guest photo upload feature (QR code to cloud drive)
- Wedding registry links
- Map integration for venues

### P2 - Low Priority
- Dress code page with visual examples
- Accommodation details when finalized

## Notes
- All data is frontend-only (no backend database)
- All external image URLs hosted on customer-assets.emergentagent.com
- "Made with Emergent" watermark only in preview, not on Vercel deployment
