import React from 'react';
import { coupleInfo } from '../data/mock';

const HomePage = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image - Grand Teton style mountains */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20">
        {/* Monogram Logo Card */}
        <div className="bg-white shadow-lg mb-8 px-8 py-10 max-w-[200px]">
          <svg
            viewBox="0 0 100 140"
            className="w-28 h-40 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top flowers cluster */}
            <g className="flowers">
              {/* Main flower left */}
              <g transform="translate(25, 20)">
                <ellipse cx="0" cy="-8" rx="6" ry="8" fill="#faf8f2" stroke="#d4c8a8" strokeWidth="0.3"/>
                <ellipse cx="6" cy="-4" rx="6" ry="8" fill="#faf8f2" stroke="#d4c8a8" strokeWidth="0.3" transform="rotate(30)"/>
                <ellipse cx="-6" cy="-4" rx="6" ry="8" fill="#faf8f2" stroke="#d4c8a8" strokeWidth="0.3" transform="rotate(-30)"/>
                <circle cx="0" cy="0" r="4" fill="#e8dbb8"/>
              </g>
              
              {/* Main flower right */}
              <g transform="translate(75, 18)">
                <ellipse cx="0" cy="-7" rx="5" ry="7" fill="#faf8f2" stroke="#d4c8a8" strokeWidth="0.3"/>
                <ellipse cx="5" cy="-3" rx="5" ry="7" fill="#faf8f2" stroke="#d4c8a8" strokeWidth="0.3" transform="rotate(35)"/>
                <ellipse cx="-5" cy="-3" rx="5" ry="7" fill="#faf8f2" stroke="#d4c8a8" strokeWidth="0.3" transform="rotate(-35)"/>
                <circle cx="0" cy="0" r="3" fill="#e8dbb8"/>
              </g>
              
              {/* Small buds */}
              <ellipse cx="18" cy="30" rx="3" ry="5" fill="#faf8f2" stroke="#d4c8a8" strokeWidth="0.2"/>
              <ellipse cx="82" cy="28" rx="2.5" ry="4" fill="#faf8f2" stroke="#d4c8a8" strokeWidth="0.2"/>
            </g>
            
            {/* Leaves and stems */}
            <g className="leaves" fill="#7a8c69" opacity="0.85">
              <path d="M25 25 Q15 35 20 50 Q28 40 25 25" />
              <path d="M22 32 Q10 40 15 55 Q25 45 22 32" />
              <path d="M75 23 Q85 33 80 48 Q72 38 75 23" />
              <path d="M78 30 Q90 38 85 53 Q75 43 78 30" />
            </g>
            
            {/* Stems curving down */}
            <g stroke="#7a8c69" strokeWidth="1.2" fill="none" opacity="0.8">
              <path d="M28 35 Q35 55 45 70" />
              <path d="M72 33 Q65 53 55 70" />
            </g>
            
            {/* Intertwined S & J */}
            <text
              x="28"
              y="105"
              fontFamily="'Cormorant Garamond', Georgia, serif"
              fontSize="50"
              fill="#9a7c4e"
              fontStyle="italic"
              fontWeight="400"
            >
              S
            </text>
            
            <text
              x="52"
              y="105"
              fontFamily="'Cormorant Garamond', Georgia, serif"
              fontSize="50"
              fill="#9a7c4e"
              fontStyle="italic"
              fontWeight="400"
            >
              J
            </text>
            
            {/* Bottom decorative leaves */}
            <g className="bottom-leaves" fill="#7a8c69" opacity="0.75">
              <path d="M35 108 Q45 120 50 132 Q48 118 38 106 Z" />
              <path d="M65 108 Q55 120 50 132 Q52 118 62 106 Z" />
              <path d="M42 112 Q48 125 50 135 Q49 122 44 110 Z" />
              <path d="M58 112 Q52 125 50 135 Q51 122 56 110 Z" />
            </g>
          </svg>
        </div>

        {/* Names */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#5a6a4d] mb-4 tracking-wide drop-shadow-sm">
          <span className="font-light">{coupleInfo.bride}</span>
          <span className="mx-4 md:mx-6 text-[#7a8c69] italic font-light">&</span>
          <span className="font-light italic">{coupleInfo.groom}</span>
        </h1>

        {/* Tagline */}
        <p className="text-[#5a6a4d] text-sm md:text-base tracking-[0.3em] mt-6 uppercase drop-shadow-sm bg-white/60 px-6 py-2">
          {coupleInfo.tagline}
        </p>

        {/* Subtitle */}
        <p className="font-serif text-[#5a6a4d] text-xl md:text-2xl mt-8 italic drop-shadow-sm">
          {coupleInfo.subtitle}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[#6b7c5e]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HomePage;
