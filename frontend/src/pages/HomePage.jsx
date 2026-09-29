import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { coupleInfo } from '../data/mock';
import IntroAnimation from '../components/IntroAnimation';
import { Heart } from 'lucide-react';

const HomePage = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const introShown = sessionStorage.getItem('introShown');
    if (introShown) {
      setShowIntro(false);
      setContentVisible(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('introShown', 'true');
    setShowIntro(false);
    setTimeout(() => setContentVisible(true), 100);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      <section className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Background Image - Wyoming Grand Teton Mountains */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1756916475010-64d80096a394?w=1920&q=85')`,
            backgroundPosition: 'center 75%',
          }}
        >
          <div className="absolute inset-0 bg-[#faf8f4]/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 pt-16 pb-8">
          {/* Logo */}
          <div className={`mb-6 transition-all duration-1000 delay-300 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <img
              src={coupleInfo.logoUrl}
              alt="S & J Monogram"
              className="w-40 h-40 md:w-56 md:h-56 object-contain"
              style={{
                filter: 'drop-shadow(0 4px 20px rgba(184, 149, 107, 0.3))',
              }}
            />
          </div>

          {/* Names */}
          <h1 
            className={`font-display text-4xl md:text-6xl lg:text-7xl text-[#6b5a1a] mb-2 tracking-wide font-semibold transition-all duration-1000 delay-500 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span>{coupleInfo.bride}</span>
            <span className="mx-3 md:mx-5 text-[#4a5a40] italic font-medium">&</span>
            <span className="italic">{coupleInfo.groom}</span>
          </h1>

          {/* Tagline */}
          <p className={`text-[#3d3d38] text-base md:text-lg tracking-[0.25em] mt-4 uppercase font-bold transition-all duration-1000 delay-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {coupleInfo.tagline}
          </p>

          {/* Marriage Date & Message - replaces countdown */}
          <div className={`mt-10 transition-all duration-1000 delay-900 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Bold marriage date */}
            <div className="mb-5">
              <div className="flex items-center justify-center gap-3 md:gap-5">
                <span className="font-display text-5xl md:text-7xl text-[#6b5a1a] tracking-wide">25</span>
                <span className="font-display text-3xl md:text-5xl text-[#b8956b]">.</span>
                <span className="font-display text-5xl md:text-7xl text-[#6b5a1a] tracking-wide">09</span>
                <span className="font-display text-3xl md:text-5xl text-[#b8956b]">.</span>
                <span className="font-display text-5xl md:text-7xl text-[#6b5a1a] tracking-wide">2026</span>
              </div>
              <p className="text-[#4a4a42] text-sm mt-2 tracking-[0.15em] font-semibold">
                Casper, Wyoming
              </p>
            </div>

            {/* Thin divider */}
            <div className="w-20 h-[1px] bg-[#b8956b]/40 mx-auto mb-5" />

            {/* Personal message */}
            <div className="max-w-lg mx-auto mb-6">
              <p className="font-cormorant text-lg md:text-xl text-[#3d3d38] italic leading-relaxed">
                After crossing oceans and time zones, we said "I do" in a private ceremony.
                Now we want to celebrate with you.
              </p>
            </div>

            {/* Open house teaser */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl px-6 py-4 inline-block border border-[#b8956b]/15 shadow-sm">
              <p className="text-[#5a6b4e] text-xs tracking-[0.2em] uppercase font-semibold mb-1">
                Open House Celebration
              </p>
              <p className="text-[#3d3d38] text-sm font-medium">
                October 24, 2026 · 1:00 - 5:00 PM
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`mt-8 flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Link
              to="/our-story"
              className="inline-flex items-center gap-3 bg-[#8a9a7c] hover:bg-[#6b7c5e] text-white px-8 py-4 rounded-full text-sm tracking-wider transition-all duration-300 group shadow-md"
            >
              <span>Discover Our Story</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/rsvp"
              className="inline-flex items-center gap-2 bg-[#b8956b] hover:bg-[#a07c5a] text-white px-8 py-4 rounded-full text-sm tracking-wider transition-all duration-300 shadow-md"
            >
              <Heart className="w-4 h-4" />
              <span>RSVP</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-1000 delay-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <svg
            className="w-6 h-6 text-[#b8956b]"
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
    </>
  );
};

export default HomePage;
