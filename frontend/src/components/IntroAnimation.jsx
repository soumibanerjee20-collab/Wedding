import React, { useState, useEffect } from 'react';
import { coupleInfo } from '../data/mock';
import { Volume2, VolumeX, Play } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

const IntroAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const { isMuted, startMusic, fadeToBackground, toggleMute } = useAudio();
  
  // Phase 0: Waiting for user to click "Enter"
  // Phase 1: Logo starts fading in slowly
  // Phase 2: Invitation text appears (all together)
  // Phase 3: Bloom effect - transitioning out
  // Phase 4: Complete - unmount

  // Gradual logo fade-in effect
  useEffect(() => {
    if (phase === 1) {
      let opacity = 0;
      const fadeInterval = setInterval(() => {
        opacity += 0.02;
        if (opacity >= 1) {
          setLogoOpacity(1);
          clearInterval(fadeInterval);
        } else {
          setLogoOpacity(opacity);
        }
      }, 50);

      return () => clearInterval(fadeInterval);
    }
  }, [phase]);

  // Handle user clicking to start
  const handleStart = () => {
    setHasStarted(true);
    setPhase(1);
    startMusic(); // Start the global music
  };

  useEffect(() => {
    if (!hasStarted) return;

    const timers = [
      setTimeout(() => setPhase(2), 2700),      // Text appears (after logo is visible)
      setTimeout(() => setPhase(3), 5900),      // Start bloom transition
      setTimeout(() => {
        fadeToBackground(); // Fade music to soft background level
        setPhase(4);
        onComplete();
      }, 7500),                                   // Complete
    ];

    return () => timers.forEach(clearTimeout);
  }, [hasStarted, onComplete, fadeToBackground]);

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
      {/* Click to Enter Screen */}
      {!hasStarted && (
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo preview (faded) */}
          <img
            src={coupleInfo.logoUrl}
            alt="S & J Monogram"
            className="w-40 h-40 md:w-52 md:h-52 object-contain opacity-60 mb-8"
          />
          
          <button
            onClick={handleStart}
            className="group flex flex-col items-center gap-4 transition-all duration-300"
          >
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'rgba(212,184,150,0.15)',
                border: '2px solid rgba(212,184,150,0.4)',
              }}
            >
              <Play className="w-8 h-8 text-[#d4c4a8] ml-1" fill="rgba(212,184,150,0.5)" />
            </div>
            <span 
              className="text-[#d4c4a8] text-lg tracking-[0.2em] uppercase font-cormorant"
              style={{ textShadow: '0 0 20px rgba(212,196,168,0.3)' }}
            >
              Click to Enter
            </span>
          </button>
          
          <p className="text-[#8a9a7c]/60 text-sm mt-6 tracking-wider">
            🎵 Best experienced with sound
          </p>
        </div>
      )}

      {/* Main Animation Content - Only shows after user clicks */}
      {hasStarted && (
        <>
          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className={`absolute top-6 right-6 z-20 p-3 rounded-full transition-all duration-300 ${
              phase >= 3 ? 'opacity-0' : 'opacity-70 hover:opacity-100'
            }`}
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(4px)',
            }}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-[#d4c4a8]" />
            ) : (
              <Volume2 className="w-5 h-5 text-[#d4c4a8]" />
            )}
          </button>

          {/* Subtle gradient overlay for depth */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(ellipse at 50% 30%, rgba(184,149,107,0.12) 0%, transparent 60%)',
            }}
          />

          {/* Ambient glow behind logo */}
          <div 
            className="absolute transition-all duration-1000"
            style={{
              width: '450px',
              height: '450px',
              background: 'radial-gradient(circle, rgba(212,184,150,0.2) 0%, rgba(184,149,107,0.1) 40%, transparent 70%)',
              filter: 'blur(50px)',
              opacity: logoOpacity * 0.8,
              transform: `scale(${0.5 + logoOpacity * 0.5})`,
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

          {/* Logo - Slow fade in */}
          <div 
            className={`relative z-10 transition-all duration-1500 ease-out ${
              phase >= 3 ? 'scale-75 -translate-y-20' : ''
            }`}
            style={{
              opacity: phase >= 1 ? logoOpacity : 0,
              transform: phase >= 3 
                ? 'scale(0.75) translateY(-80px)' 
                : `scale(${0.9 + logoOpacity * 0.1})`,
            }}
          >
            <img
              src={coupleInfo.logoUrl}
              alt="S & J Monogram"
              className="w-52 h-52 md:w-72 md:h-72 object-contain"
              style={{
                filter: phase >= 1 && phase < 3 
                  ? `drop-shadow(0 0 ${40 * logoOpacity}px rgba(212,184,150,${0.4 * logoOpacity})) drop-shadow(0 0 ${80 * logoOpacity}px rgba(184,149,107,${0.2 * logoOpacity}))`
                  : 'none',
              }}
            />
          </div>

          {/* Invitation Text */}
          <div 
            className={`relative z-10 text-center mt-10 transition-all duration-1000 ease-out ${
              phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            } ${phase >= 3 ? 'opacity-0' : ''}`}
          >
            <p 
              className="font-cormorant text-lg md:text-xl tracking-[0.3em] uppercase mb-4"
              style={{
                color: '#d4c4a8',
                textShadow: '0 0 20px rgba(212,196,168,0.3)',
              }}
            >
              You are cordially invited
            </p>
            
            <p 
              className="font-cormorant text-2xl md:text-3xl italic mb-6"
              style={{
                color: '#e8dcc8',
                textShadow: '0 0 30px rgba(232,220,200,0.2)',
              }}
            >
              to celebrate the love story of
            </p>
            
            <h1 className="font-display text-5xl md:text-6xl tracking-wide">
              <span 
                style={{
                  color: '#f0e6d3',
                  textShadow: '0 0 40px rgba(240,230,211,0.4), 0 2px 10px rgba(0,0,0,0.3)',
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
                className="italic"
                style={{
                  color: '#f0e6d3',
                  textShadow: '0 0 40px rgba(240,230,211,0.4), 0 2px 10px rgba(0,0,0,0.3)',
                }}
              >
                {coupleInfo.groom}
              </span>
            </h1>
          </div>

          {/* Decorative heart element */}
          <div 
            className={`absolute bottom-16 transition-all duration-1000 ${
              phase >= 2 ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-4'
            } ${phase >= 3 ? 'opacity-0' : ''}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#b8956b]" />
              <svg 
                className="w-5 h-5"
                style={{
                  color: '#d4b896',
                  filter: 'drop-shadow(0 0 8px rgba(212,184,150,0.5))',
                }}
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#b8956b]" />
            </div>
          </div>

          {/* Subtle floating particles */}
          {phase >= 1 && phase < 3 && (
            <>
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#d4b896] rounded-full animate-pulse opacity-30" />
              <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#b8956b] rounded-full animate-pulse opacity-25" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#8a9a7c] rounded-full animate-pulse opacity-30" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#d4b896] rounded-full animate-pulse opacity-25" style={{ animationDelay: '0.3s' }} />
              <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-[#e8dcc8] rounded-full animate-pulse opacity-20" style={{ animationDelay: '0.7s' }} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default IntroAnimation;
