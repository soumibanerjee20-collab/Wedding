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

### ✅ Completed Features (January 2025)

1. **Homepage with Intro Animation**
   - Multi-stage ~16.5 second intro with "Click to Enter"
   - Sequential text reveal with soft bloom transition
   - Wyoming mountain backdrop with logo
   - "TWO HEARTS, ONE JOURNEY" tagline

2. **Wedding Countdown Timer** ✅ NEW
   - Live countdown to September 26, 2026
   - Days, Hours, Minutes, Seconds display
   - Elegant frosted glass design

3. **Polaroid Style Gallery** ✅ NEW
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
   - Photo galleries for key events (Edinburgh, Proposal)
   - Passive-voice, catchy titles

7. **Gallery Page**
   - User-arranged photo order
   - Polaroid style layout with captions

8. **Families Page**
   - Banerjee family (including Bruno, furry brother)
   - Adams family

9. **Events Page**
   - US Wedding (Mid 2026, Wyoming/Ohio)
   - Indian Reception (2027, Kolkata)

10. **Travel & Stay Page**
    - Information for both US and India locations
    - Local landmarks and attractions

11. **Guestbook Page**
    - Leave messages functionality
    - localStorage persistence

12. **RSVP Page (Placeholder)**
    - Coming soon sections for both events

13. **Vercel Deployment Config**
    - vercel.json for client-side routing

## Pages & Routes
- `/` - Homepage (with intro animation on first visit)
- `/our-story` - Our Story
- `/timeline` - Timeline
- `/events` - Events
- `/gallery` - Gallery (Polaroid style)
- `/families` - Families
- `/travel` - Travel & Stay
- `/guestbook` - Guestbook
- `/rsvp` - RSVP (placeholder)

## Key Files
- `/app/frontend/src/data/mock.js` - All content data
- `/app/frontend/src/pages/HomePage.jsx` - Homepage with countdown
- `/app/frontend/src/pages/GalleryPage.jsx` - Polaroid gallery
- `/app/frontend/src/components/IntroAnimation.jsx` - Intro sequence
- `/app/frontend/src/context/AudioContext.jsx` - Global audio state
- `/app/frontend/vercel.json` - Vercel deployment config

## Backlog (P0-P2)

### P0 - High Priority
- None currently

### P1 - Medium Priority
- Guest photo upload feature (QR code to cloud drive)
- Wedding registry links
- Map integration for venues

### P2 - Low Priority
- Dress code page with visual examples
- Accommodation details when finalized
- Full RSVP functionality when dates confirmed

## Notes
- Wedding Date: September 26, 2026 (tentative)
- All data is frontend-only (no backend database)
- Logo URL stored in mock.js
- Music file in public/assets/
