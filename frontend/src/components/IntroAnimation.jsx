import React, { useState, useEffect, useRef } from 'react';
import { coupleInfo } from '../data/mock';
import { Volume2, VolumeX } from 'lucide-react';

const IntroAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  // Phase 0: Initial
  // Phase 1: Logo appears with glow
  // Phase 2: Invitation text appears (all together)
  // Phase 3: Bloom effect - transitioning out
  // Phase 4: Complete - unmount

  // Initialize and play audio
  useEffect(() => {
    // Romantic piano music - royalty-free (similar style to River Flows in You)
    // Using a soft, emotional piano track perfect for wedding intros
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3');
    audio.loop = false;
    audio.volume = 0;
    audioRef.current = audio;

    // Try to play audio (may be blocked by browser autoplay policy)
    const playAudio = async () => {
      try {
        await audio.play();
        // Fade in audio
        let volume = 0;
        const fadeIn = setInterval(() => {
          if (volume < 0.5) {
            volume += 0.025;
            audio.volume = Math.min(volume, 0.5);
          } else {
            clearInterval(fadeIn);
          }
        }, 100);
      } catch (error) {
        console.log('Autoplay blocked, user interaction required');
      }
    };

    // Small delay to ensure component is mounted
    setTimeout(playAudio, 500);

    return () => {
      // Fade out and cleanup
      if (audioRef.current) {
        const fadeOut = setInterval(() => {
          if (audioRef.current && audioRef.current.volume > 0.05) {
            audioRef.current.volume -= 0.05;
          } else {
            clearInterval(fadeOut);
            if (audioRef.current) {
              audioRef.current.pause();
              audioRef.current = null;
            }
          }
        }, 50);
      }
    };
  }, []);

  // Handle mute toggle
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),       // Logo fades in
      setTimeout(() => setPhase(2), 2200),      // Text appears (all together)
      setTimeout(() => setPhase(3), 5500),      // Start bloom transition
      setTimeout(() => {
        setPhase(4);
        onComplete();
      }, 7000),                                   // Complete
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
        className={`absolute transition-all duration-1500 ${
          phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(212,184,150,0.2) 0%, rgba(184,149,107,0.1) 40%, transparent 70%)',
          filter: 'blur(50px)',
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

      {/* Logo */}
      <div 
        className={`relative z-10 transition-all duration-1500 ease-out ${
          phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        } ${phase >= 3 ? 'scale-75 -translate-y-20' : ''}`}
      >
        <img
          src={coupleInfo.logoUrl}
          alt="S & J Monogram"
          className="w-52 h-52 md:w-72 md:h-72 object-contain"
          style={{
            filter: phase >= 1 && phase < 3 
              ? 'drop-shadow(0 0 40px rgba(212,184,150,0.4)) drop-shadow(0 0 80px rgba(184,149,107,0.2))'
              : 'none',
          }}
        />
      </div>

      {/* Invitation Text - All appears together */}
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
    </div>
  );
};

export default IntroAnimation;
