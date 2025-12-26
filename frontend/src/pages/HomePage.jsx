import React from 'react';
import { Link } from 'react-router-dom';
import { coupleInfo } from '../data/mock';

const HomePage = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image - Wyoming Mountain Beauty */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-white/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20">
        {/* Logo Image */}
        <div className="bg-white shadow-xl mb-8 p-4">
          <img
            src={coupleInfo.logoUrl}
            alt="S & J Monogram"
            className="w-40 h-40 md:w-48 md:h-48 object-contain"
          />
        </div>

        {/* Names */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#5a6a4d] mb-4 tracking-wide drop-shadow-sm">
          <span className="font-normal">{coupleInfo.bride}</span>
          <span className="mx-4 md:mx-6 text-[#9a7c4e] italic font-light">&</span>
          <span className="font-normal italic">{coupleInfo.groom}</span>
        </h1>

        {/* Tagline */}
        <p className="text-[#5a6a4d] text-sm md:text-base tracking-[0.25em] mt-6 uppercase drop-shadow-sm bg-white/70 backdrop-blur-sm px-6 py-3">
          {coupleInfo.tagline}
        </p>

        {/* Subtitle */}
        <p className="font-cormorant text-[#5a6a4d] text-xl md:text-2xl lg:text-3xl mt-8 italic bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full">
          {coupleInfo.subtitle}
        </p>

        {/* CTA Button */}
        <Link
          to="/our-story"
          className="mt-12 inline-flex items-center gap-3 bg-[#6b7c5e]/90 hover:bg-[#5a6a4d] text-white px-8 py-4 rounded-full text-sm tracking-wider transition-all duration-300 group backdrop-blur-sm"
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
          className="w-6 h-6 text-[#5a6a4d]"
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
