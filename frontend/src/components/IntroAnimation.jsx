import React, { useState, useEffect } from 'react';
import { coupleInfo } from '../data/mock';

const IntroAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  // Phase 0: Initial dark
  // Phase 1: Logo appears with glow
  // Phase 2: Invitation text appears
  // Phase 3: Bloom effect - transitioning out
  // Phase 4: Complete - unmount

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),      // Logo fades in
      setTimeout(() => setPhase(2), 1800),     // Text appears
      setTimeout(() => setPhase(3), 4000),     // Start bloom transition
      setTimeout(() => {
        setPhase(4);
        onComplete();
      }, 5200),                                  // Complete
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (phase === 4) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-1000 ${
        phase >= 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: phase >= 3 
          ? 'radial-gradient(circle at center, rgba(250,248,244,1) 0%, rgba(0,0,0,0) 100%)'
          : 'linear-gradient(135deg, #0a0a0a 0%, #1a1a18 50%, #0a0a0a 100%)',
      }}
    >
      {/* Ambient glow behind logo */}
      <div 
        className={`absolute transition-all duration-1000 ${
          phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(184,149,107,0.15) 0%, rgba(184,149,107,0.05) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Bloom effect overlay */}
      <div 
        className={`absolute inset-0 transition-all duration-1200 ${
          phase >= 3 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle at center, rgba(250,248,244,0.98) 0%, rgba(250,248,244,0.95) 30%, rgba(250,248,244,0.8) 60%, transparent 100%)',
        }}
      />

      {/* Logo */}
      <div 
        className={`relative z-10 transition-all duration-1000 ease-out ${
          phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        } ${phase >= 3 ? 'scale-75 -translate-y-20' : ''}`}
      >
        <img
          src={coupleInfo.logoUrl}
          alt="S & J Monogram"
          className="w-48 h-48 md:w-64 md:h-64 object-contain"
          style={{
            filter: phase >= 1 && phase < 3 
              ? 'drop-shadow(0 0 30px rgba(184,149,107,0.4)) drop-shadow(0 0 60px rgba(184,149,107,0.2))'
              : 'none',
          }}
        />
      </div>

      {/* Invitation Text */}
      <div 
        className={`relative z-10 text-center mt-8 transition-all duration-700 ease-out ${
          phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } ${phase >= 3 ? 'opacity-0' : ''}`}
      >
        <p className="font-cormorant text-lg md:text-xl text-[#b8956b]/80 tracking-[0.3em] uppercase mb-4">
          You are cordially invited
        </p>
        <p className="font-cormorant text-2xl md:text-3xl text-[#d4c4a8] italic">
          to celebrate the love story of
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-white mt-4 tracking-wide">
          <span className="text-[#d4b896]">{coupleInfo.bride}</span>
          <span className="mx-3 text-[#8a9a7c]">&</span>
          <span className="text-[#d4b896] italic">{coupleInfo.groom}</span>
        </h1>
      </div>

      {/* Decorative elements */}
      <div 
        className={`absolute bottom-12 transition-all duration-700 ${
          phase >= 2 ? 'opacity-60' : 'opacity-0'
        } ${phase >= 3 ? 'opacity-0' : ''}`}
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#b8956b]" />
          <svg className="w-4 h-4 text-[#b8956b]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#b8956b]" />
        </div>
      </div>

      {/* Particle/sparkle effects */}
      {phase >= 1 && phase < 3 && (
        <>
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#d4b896] rounded-full animate-pulse opacity-40" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#b8956b] rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#8a9a7c] rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#d4b896] rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.3s' }} />
        </>
      )}
    </div>
  );
};

export default IntroAnimation;
