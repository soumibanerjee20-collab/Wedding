# PRD - Soumi & James Wedding Website

## Overview
Post-wedding celebration website for Soumi Banerjee and James M. Adams. The couple married privately on **September 25, 2026** in Wyoming. The site now serves as an invitation platform for their **Wedding Reception & Open House** on **October 24, 2026, 1:00-5:00 PM** at their home: 4450 Smoke Rise Road, Casper, WY 82604.

## Architecture
- **Frontend**: React + TailwindCSS, deployed to Netlify (soumiandjameswedding.netlify.app)
- **Backend**: FastAPI + MongoDB (RSVP persistence only)
- **Auth**: Site password gate (sj2026), Admin password (casper)
- **Data**: Hardcoded in mock.js, localStorage for guest management, MongoDB for RSVP responses

## Pages & Features
| Page | Route | Status |
|------|-------|--------|
| Homepage | / | Done - "We're Married!" + countdown to Oct 24 |
| Our Story | /our-story | Done |
| Timeline | /timeline | Done - includes "We Said I Do" final entry |
| Celebration | /events | Done - Combined "We Did It" + Open House details |
| Gallery | /gallery | Done - includes wedding ceremony photos |
| Travel & Stay | /travel | Done - Casper hotels, directions to home address |
| FAQ | /faq | Done - Open house context |
| Registry | /registry | Done - Amazon registry link |
| Guestbook | /guestbook | Done |
| RSVP | /rsvp | Done - Open House RSVP, casual dress code |
| Admin | /admin | Done - Celebration Dashboard, single Open House invite |

## Completed (Latest Session - Sept 28, 2026)
- Generated fresh Open House invite card (botanical sage/cream/gold theme)
- Combined Celebration + We Did It into single page
- Full site audit: removed all stale references (Indian wedding, Tate Pumphouse, Oct 25, rehearsal dinner, Save the Date, two continents, Chapter One)
- Admin guest group cleanup: removed Wedding Only / Rehearsal + Wedding, simplified to single Open House
- Admin message: single Open House invitation for all guests
- RSVP dress code: changed from "Formal Attire" to "Casual and comfortable"
- Updated OG/social meta tags for post-wedding context
- Cleaned dead code (WeddingPartyPage.jsx deleted, indiaLocation/weddingParty removed from mock.js)
- Testing agent verified 100% pass rate

## Backlog
- P1: Deploy latest changes to Netlify (user action)
- P2: Backend RSVP needs production hosting (currently only works via preview URL)
- P2: Add catch-all 404 route in App.js
- P3: WhatsApp preview cache may still show old image until cache expires
- P3: Generate Facebook-ready announcement graphic
