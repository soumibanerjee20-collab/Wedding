# Soumi & James Wedding Website - PRD

## Original Problem Statement
Build a pixel-perfect, multi-page wedding website for "Soumi & James" with a regal, elegant, magical, and classic feel. The website should feature their personal love story, timeline, gallery, family information, events, and guestbook.

## Design Requirements
- **Color Palette:** Sage green (#8a9a7c, #6b7c5e), cream (#faf8f4), warm gold (#b8956b, #8B6914)
- **Typography:** Elegant display fonts with handwritten accents
- **Vibe:** Regal, elegant, magical, classic

## Tech Stack
- **Frontend:** React, React Router, TailwindCSS
- **Animation:** CSS keyframe animations, Framer Motion
- **State Management:** React Hooks, Context API (for audio)
- **Data:** localStorage for guestbook, hardcoded data in mock.js
- **Deployment:** Vercel (configured with vercel.json)

## User Personas
- **Primary:** Wedding guests (family and friends from US and India)
- **Secondary:** The couple (Soumi & James)

## Core Features

### Completed Features

1. **Homepage with Intro Animation**
   - Multi-stage ~16.5 second intro with "Click to Enter"
   - Sequential text reveal with soft bloom transition
   - Wyoming mountain backdrop with logo
   - "TWO HEARTS, ONE JOURNEY" tagline

2. **Wedding Countdown Timer**
   - Live countdown to August 8, 2026 (US Wedding)
   - Days, Hours, Minutes, Seconds display
   - Elegant frosted glass design

3. **Polaroid Style Gallery**
   - Authentic scattered polaroid layout with random rotations
   - Handwritten-style captions (Caveat font)
   - Tape effect and hover animations
   - Lightbox for full-size viewing

4. **Background Music**
   - Global audio player with "River Flows in You"
   - Persistent mute button in header
   - Plays across all pages

5. **Our Story Page**
   - Couple's narrative and meeting story
   - Individual profiles for Soumi & James

6. **Timeline Page**
   - Chronological love story from October 2023 to present
   - Photo galleries for key events (Edinburgh, Proposal, "The Day Fate Intervened")
   - Passive-voice, catchy titles
   - Polaroid-style photos with Caveat font dates

7. **Gallery Page**
   - User-arranged photo order
   - Polaroid style layout with captions

8. **Families Page**
   - Banerjee family (including Bruno, furry brother)
   - Adams family

9. **Events Page**
   - US Wedding: August 7-8, 2026, Casper, Wyoming (Rehearsal Dinner, Ceremony, Reception)
   - Indian Wedding: November 5-6, 2027 (Tentative), Kolkata (Sangeet & Mehendi on Nov 5, Wedding Reception on Nov 6)
   - Dual cultural themes (sage green for US, marigold/alpana for India)

10. **Travel & Stay Page**
    - Information for both US and India locations
    - Local landmarks and attractions

11. **Guestbook Page**
    - Leave messages functionality
    - localStorage persistence

12. **RSVP Page**
    - US Wedding with plus-one logic
    - Indian Wedding RSVP
    - "Regretfully Decline" redirects to Guestbook for well wishes

13. **Vercel Deployment Config**
    - vercel.json for client-side routing

14. **WhatsApp Invite GIF**
    - wedding-invite.gif generated from intro animation

## Pages & Routes
- `/` - Homepage (with intro animation on first visit)
- `/our-story` - Our Story
- `/timeline` - Timeline
- `/events` - Events
- `/gallery` - Gallery (Polaroid style)
- `/families` - Families
- `/travel` - Travel & Stay
- `/guestbook` - Guestbook
- `/rsvp` - RSVP

## Key Files
- `/app/frontend/src/data/mock.js` - All content data
- `/app/frontend/src/pages/HomePage.jsx` - Homepage with countdown
- `/app/frontend/src/pages/GalleryPage.jsx` - Polaroid gallery
- `/app/frontend/src/pages/EventsPage.jsx` - Dual-themed events
- `/app/frontend/src/pages/TimelinePage.jsx` - Timeline with polaroid photos
- `/app/frontend/src/pages/RSVPPage.jsx` - RSVP with conditional flows
- `/app/frontend/src/components/IntroAnimation.jsx` - Intro sequence
- `/app/frontend/src/context/AudioContext.jsx` - Global audio state
- `/app/frontend/vercel.json` - Vercel deployment config

## Backlog (P0-P2)

### P1 - Medium Priority
- Vercel deployment debugging (user reported errors)
- Guest photo upload feature (QR code to cloud drive)
- Wedding registry links
- Map integration for venues

### P2 - Low Priority
- Dress code page with visual examples
- Accommodation details when finalized

## Key Dates
- US Wedding: August 8, 2026 (Casper, Wyoming)
- Indian Wedding Sangeet & Mehendi: November 5, 2027 (Tentative, Kolkata)
- Indian Wedding Reception: November 6, 2027 (Tentative, Kolkata)

## Notes
- All data is frontend-only (no backend database)
- Logo URL stored in mock.js
- Music file in public/assets/
- All external image URLs hosted on customer-assets.emergentagent.com
- "Made with Emergent" watermark only appears in preview, not on Vercel deployment
