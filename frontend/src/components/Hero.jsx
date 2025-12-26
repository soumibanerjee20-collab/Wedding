import React from 'react';
import { coupleInfo } from '../data/mock';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image - Grand Teton style mountains */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1920&q=80')`,
        }}
      >
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Monogram Logo Card */}
        <div className="bg-white shadow-lg mb-8 px-8 py-12 max-w-[220px]">
          <svg
            viewBox="0 0 120 160"
            className="w-32 h-44 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Floral decorations - top */}
            <g className="flowers">
              {/* Top flower 1 */}
              <circle cx="45" cy="25" r="8" fill="#f5f0e6" stroke="#c9b896" strokeWidth="0.5" />
              <circle cx="45" cy="25" r="3" fill="#e8d4a8" />
              
              {/* Top flower 2 */}
              <circle cx="75" cy="20" r="7" fill="#f5f0e6" stroke="#c9b896" strokeWidth="0.5" />
              <circle cx="75" cy="20" r="2.5" fill="#e8d4a8" />
              
              {/* Small buds */}
              <ellipse cx="35" cy="35" rx="3" ry="5" fill="#f5f0e6" stroke="#c9b896" strokeWidth="0.3" />
              <ellipse cx="85" cy="30" rx="2.5" ry="4" fill="#f5f0e6" stroke="#c9b896" strokeWidth="0.3" />
            </g>
            
            {/* Leaves */}
            <g className="leaves" fill="#7a8c69" opacity="0.8">
              <path d="M30 50 Q35 40 45 35 Q40 45 35 55 Z" />
              <path d="M90 45 Q85 35 75 30 Q80 40 85 50 Z" />
              <path d="M25 70 Q30 60 40 55 Q35 65 30 75 Z" />
              <path d="M95 65 Q90 55 80 50 Q85 60 90 70 Z" />
            </g>
            
            {/* Stems */}
            <g stroke="#7a8c69" strokeWidth="1" fill="none" opacity="0.7">
              <path d="M45 35 Q50 50 55 70" />
              <path d="M75 30 Q70 50 65 70" />
            </g>
            
            {/* S letter */}
            <text
              x="38"
              y="115"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="55"
              fill="#9a7c4e"
              fontStyle="italic"
              fontWeight="500"
            >
              S
            </text>
            
            {/* J letter - intertwined */}
            <text
              x="62"
              y="115"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="55"
              fill="#9a7c4e"
              fontStyle="italic"
              fontWeight="500"
            >
              J
            </text>
            
            {/* Bottom decorative leaves */}
            <g className="bottom-leaves" fill="#7a8c69" opacity="0.7">
              <path d="M40 120 Q50 130 60 140 Q55 125 45 115 Z" />
              <path d="M80 120 Q70 130 60 140 Q65 125 75 115 Z" />
              <path d="M50 125 Q55 140 60 150 Q58 135 52 122 Z" />
              <path d="M70 125 Q65 140 60 150 Q62 135 68 122 Z" />
            </g>
          </svg>
        </div>

        {/* Names */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#5a6a4d] mb-4 tracking-wide">
          <span className="font-light">{coupleInfo.bride}</span>
          <span className="mx-4 md:mx-6 text-[#7a8c69] italic font-light">&</span>
          <span className="font-light italic">{coupleInfo.groom}</span>
        </h1>

        {/* Tagline */}
        <p className="text-[#6b7c5e] text-sm md:text-base tracking-[0.3em] mt-6 uppercase">
          {coupleInfo.tagline}
        </p>

        {/* Subtitle */}
        <p className="font-serif text-[#5a6a4d] text-xl md:text-2xl mt-8 italic">
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

export default Hero;
