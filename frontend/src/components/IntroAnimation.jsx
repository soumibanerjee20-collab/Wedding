import React, { useState, useEffect } from 'react';
import { coupleInfo } from '../data/mock';

const IntroAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [textReveal, setTextReveal] = useState(0);
  // Phase 0: Initial dark
  // Phase 1: Logo appears with glow
  // Phase 2: Invitation text appears with typewriter effect
  // Phase 3: Bloom effect - transitioning out
  // Phase 4: Complete - unmount

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),       // Logo fades in
      setTimeout(() => setPhase(2), 2500),      // Text starts
      setTimeout(() => setTextReveal(1), 2800), // "You are cordially invited"
      setTimeout(() => setTextReveal(2), 4200), // "to celebrate the love story of"
      setTimeout(() => setTextReveal(3), 5600), // Names appear
      setTimeout(() => setTextReveal(4), 7000), // Heart appears
      setTimeout(() => setPhase(3), 8500),      // Start bloom transition
      setTimeout(() => {
        setPhase(4);
        onComplete();
      }, 10000),                                  // Complete
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (phase === 4) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-1500 ${
        phase >= 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: phase >= 3 
          ? 'radial-gradient(circle at center, rgba(250,248,244,1) 0%, rgba(0,0,0,0) 100%)'
          : 'linear-gradient(135deg, #1a2a1f 0%, #2d3d32 25%, #1f2f24 50%, #283828 75%, #1a2a1f 100%)',
      }}
    >
      {/* Animated gradient overlay for depth */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(184,149,107,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(138,154,124,0.1) 0%, transparent 50%)',
        }}
      />

      {/* Floating particles */}
      {phase >= 1 && phase < 3 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: i % 3 === 0 ? '#d4b896' : i % 3 === 1 ? '#8a9a7c' : '#f5f0e8',
                opacity: 0.3 + Math.random() * 0.4,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Ambient glow behind logo - enhanced */}
      <div 
        className={`absolute transition-all duration-1500 ${
          phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(212,184,150,0.25) 0%, rgba(184,149,107,0.15) 30%, rgba(138,154,124,0.08) 60%, transparent 80%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Secondary glow ring */}
      <div 
        className={`absolute transition-all duration-2000 ${
          phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, transparent 40%, rgba(184,149,107,0.08) 50%, transparent 60%)',
          animation: phase >= 1 ? 'pulse 3s ease-in-out infinite' : 'none',
        }}
      />

      {/* Bloom effect overlay */}
      <div 
        className={`absolute inset-0 transition-all duration-1500 ${
          phase >= 3 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle at center, rgba(250,248,244,0.98) 0%, rgba(250,248,244,0.95) 30%, rgba(250,248,244,0.8) 60%, transparent 100%)',
        }}
      />

      {/* Logo with shimmer effect */}
      <div 
        className={`relative z-10 transition-all duration-1500 ease-out ${
          phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        } ${phase >= 3 ? 'scale-75 -translate-y-20' : ''}`}
      >
        <div className="relative">
          <img
            src={coupleInfo.logoUrl}
            alt="S & J Monogram"
            className="w-52 h-52 md:w-72 md:h-72 object-contain"
            style={{
              filter: phase >= 1 && phase < 3 
                ? 'drop-shadow(0 0 40px rgba(212,184,150,0.5)) drop-shadow(0 0 80px rgba(184,149,107,0.3))'
                : 'none',
            }}
          />
          {/* Shimmer overlay */}
          {phase >= 1 && phase < 3 && (
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
                animation: 'shimmer 3s ease-in-out infinite',
              }}
            />
          )}
        </div>
      </div>

      {/* Invitation Text with Calligraphy Animation */}
      <div className={`relative z-10 text-center mt-10 ${phase >= 3 ? 'opacity-0' : ''}`}>
        {/* Line 1: "You are cordially invited" */}
        <div className={`overflow-hidden transition-all duration-700 ${textReveal >= 1 ? 'max-h-20' : 'max-h-0'}`}>
          <p 
            className={`font-cormorant text-lg md:text-xl tracking-[0.3em] uppercase mb-4 transition-all duration-1000 ${
              textReveal >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              color: '#d4c4a8',
              textShadow: '0 0 20px rgba(212,196,168,0.3)',
            }}
          >
            <span className="inline-block" style={{ animation: textReveal >= 1 ? 'typewriter 1.2s steps(25) forwards' : 'none' }}>
              You are cordially invited
            </span>
          </p>
        </div>

        {/* Line 2: "to celebrate the love story of" */}
        <div className={`overflow-hidden transition-all duration-700 ${textReveal >= 2 ? 'max-h-20' : 'max-h-0'}`}>
          <p 
            className={`font-cormorant text-2xl md:text-3xl italic mb-4 transition-all duration-1000 ${
              textReveal >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              color: '#e8dcc8',
              textShadow: '0 0 30px rgba(232,220,200,0.2)',
            }}
          >
            to celebrate the love story of
          </p>
        </div>

        {/* Line 3: Names with special styling */}
        <div className={`overflow-hidden transition-all duration-700 ${textReveal >= 3 ? 'max-h-32' : 'max-h-0'}`}>
          <h1 
            className={`font-display text-5xl md:text-6xl mt-2 tracking-wide transition-all duration-1000 ${
              textReveal >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <span 
              className="inline-block"
              style={{
                color: '#f0e6d3',
                textShadow: '0 0 40px rgba(240,230,211,0.4), 0 2px 10px rgba(0,0,0,0.3)',
                animation: textReveal >= 3 ? 'glow 2s ease-in-out infinite alternate' : 'none',
              }}
            >
              {coupleInfo.bride}
            </span>
            <span 
              className="mx-4 italic"
              style={{
                color: '#8a9a7c',
                textShadow: '0 0 20px rgba(138,154,124,0.5)',
              }}
            >
              &
            </span>
            <span 
              className="inline-block italic"
              style={{
                color: '#f0e6d3',
                textShadow: '0 0 40px rgba(240,230,211,0.4), 0 2px 10px rgba(0,0,0,0.3)',
                animation: textReveal >= 3 ? 'glow 2s ease-in-out infinite alternate' : 'none',
                animationDelay: '1s',
              }}
            >
              {coupleInfo.groom}
            </span>
          </h1>
        </div>
      </div>

      {/* Decorative heart element */}
      <div 
        className={`absolute bottom-16 transition-all duration-1000 ${
          textReveal >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } ${phase >= 3 ? 'opacity-0' : ''}`}
      >
        <div className="flex items-center gap-4">
          <div 
            className="w-20 h-[1px]"
            style={{
              background: 'linear-gradient(to right, transparent, #b8956b)',
              animation: textReveal >= 4 ? 'expandRight 0.8s ease-out forwards' : 'none',
            }}
          />
          <div className="relative">
            <svg 
              className="w-5 h-5"
              style={{
                color: '#d4b896',
                filter: 'drop-shadow(0 0 10px rgba(212,184,150,0.6))',
                animation: textReveal >= 4 ? 'heartbeat 1.5s ease-in-out infinite' : 'none',
              }}
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <div 
            className="w-20 h-[1px]"
            style={{
              background: 'linear-gradient(to left, transparent, #b8956b)',
              animation: textReveal >= 4 ? 'expandLeft 0.8s ease-out forwards' : 'none',
            }}
          />
        </div>
        
        {/* Scroll hint */}
        <p 
          className={`text-center mt-6 text-sm tracking-widest transition-opacity duration-1000 ${
            textReveal >= 4 ? 'opacity-60' : 'opacity-0'
          }`}
          style={{ color: '#a09080' }}
        >
          scroll to explore
        </p>
      </div>
    </div>
  );
};

export default IntroAnimation;
