import React from 'react';
import { Link } from 'react-router-dom';
import { coupleInfo } from '../data/mock';

const HomePage = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image - Wyoming Mountains */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')`,
        }}
      >
        {/* Fade overlay matching logo colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f4]/90 via-[#faf8f4]/70 to-[#faf8f4]/90\" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20">
        {/* Logo Image - Seamless stamp effect */}
        <div 
          className="mb-10 p-6 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(250,248,244,0.85) 0%, rgba(245,243,238,0.75) 100%)',
            boxShadow: '0 8px 32px rgba(139, 105, 20, 0.08)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <img
            src={coupleInfo.logoUrl}
            alt="S & J Monogram"
            className="w-44 h-44 md:w-56 md:h-56 object-contain"
            style={{
              mixBlendMode: 'multiply',
            }}
          />
        </div>

        {/* Names - Higher contrast for readability */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#8B6914] mb-4 tracking-wide drop-shadow-sm">
          <span className="font-medium">{coupleInfo.bride}</span>
          <span className="mx-4 md:mx-6 text-[#6b7c5e] italic font-light">&</span>
          <span className="font-medium italic">{coupleInfo.groom}</span>
        </h1>

        {/* Tagline */}
        <p className="text-[#3d3d38] text-base md:text-lg tracking-[0.25em] mt-8 uppercase font-bold drop-shadow-md">
          {coupleInfo.tagline}
        </p>

        {/* CTA Button */}
        <Link
          to="/our-story"
          className="mt-12 inline-flex items-center gap-3 bg-[#8a9a7c] hover:bg-[#6b7c5e] text-white px-8 py-4 rounded-full text-sm tracking-wider transition-all duration-300 group shadow-md"
        >
          <span>Discover Our Story</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
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
  );
};

export default HomePage;
