# Soumi & James Wedding Website - PRD

## Current Status: POST-WEDDING / OPEN HOUSE CELEBRATION
They got married on September 25, 2026 in a private ceremony. Now hosting an Open House celebration.

## Key Info
- **Married:** September 25, 2026 (private ceremony)
- **Open House:** Saturday, October 24, 2026, 1:00 PM to 5:00 PM
- **Venue:** 4450 Smoke Rise Road, Casper, WY 82604 (their home)
- **Site password:** sj2026
- **Admin password:** casper
- **Live URL:** https://soumiandjameswedding.netlify.app

## Architecture
- Frontend: React + TailwindCSS + React Router (Netlify)
- Backend: FastAPI + MongoDB (RSVP storage, admin APIs)
- Admin: localStorage for guest list + MongoDB for RSVPs

## Pages
- Homepage ("We're Married!" + countdown to Oct 24)
- Our Story
- Timeline (with "We Said I Do" Sept 25 final entry)
- Celebration (Open House event details)
- We Did It (wedding photos + announcement)
- Gallery (includes wedding ceremony photos)
- Travel & Stay (hotels + directions to home)
- FAQ (updated for open house)
- Registry (Amazon)
- Guestbook
- RSVP (Open House celebration)
- Admin (/admin)

## Admin Features
- Guest management with groups: "Wedding Only" vs "Rehearsal + Wedding"
- Two invite messages: Open House only / Rehearsal + Open House
- Send via WhatsApp, SMS, Copy
- RSVP Responses tab (from website + QR code)
- QR Code tab for direct RSVP
- Invite card download
