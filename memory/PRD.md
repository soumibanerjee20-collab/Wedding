# Soumi & James Wedding Website - PRD

## Original Problem Statement
Build a pixel-perfect, multi-page wedding website for "Soumi & James" with a regal, elegant, magical, and classic feel.

## Design Requirements
- **Color Palette:** Sage green (#8a9a7c, #6b7c5e), cream (#faf8f4), warm gold (#b8956b, #8B6914)
- **Typography:** Elegant display fonts, Caveat for handwritten accents, Cormorant for quotes
- **Decorations:** Sage green botanical leaf SVGs across all secondary pages
- **Text:** Dark readable fonts (#2d2d28/#3d3d38), no font-light

## Tech Stack
- React, React Router, TailwindCSS, localStorage, Vercel deployment

## All Pages & Routes
- `/` - Homepage (intro animation + countdown)
- `/our-story` - Our Story (faded London backdrop)
- `/timeline` - Timeline (polaroid photos, object-position: center 25%)
- `/events` - Events (US + Indian dual themes)
- `/wedding-party` - **NEW** Wedding Party (outdoor wedding backdrop)
- `/gallery` - Gallery (polaroid style)
- `/families` - Families (names + roles only, Bruno keeps description)
- `/travel` - Travel (panoramic images, leaf decorations)
- `/guestbook` - Guestbook (leaf decorations)
- `/rsvp` - RSVP (button-only click, formal dress code)

## Key Dates & Venues
- **US Wedding Ceremony**: August 8, 2026 — Outdoor, Casper, Wyoming
- **US Reception**: August 8, 2026 — 4450 Smoke Rise Road, Casper WY 82604
- **Indian Sangeet & Mehendi**: November 5, 2027 (Tentative) — Kolkata
- **Indian Reception**: November 6, 2027 (Tentative) — Kolkata

## Wedding Party (US Wedding)
- **Bride's Best Women**: Mars, Devyani
- **Groomsmen**: Patrick Adams, Robert Adams (Robby)
- **Indian Wedding**: Everyone is part of the wedding party (Bengali tradition)

## Key Files
- `/app/frontend/src/data/mock.js` - All content data + wedding party
- `/app/frontend/src/components/LeafDecorations.jsx` - Shared SVG components
- `/app/frontend/src/pages/WeddingPartyPage.jsx` - NEW Wedding Party page
- `/app/frontend/src/pages/*.jsx` - All page components
- `/app/frontend/vercel.json` - Vercel deployment config

## Backlog
### P1
- Vercel deployment debugging
- Guest photo upload (QR code)
- Wedding registry links
- Map integration for venues

### P2
- Dress code page with visuals
- Accommodation details when finalized
