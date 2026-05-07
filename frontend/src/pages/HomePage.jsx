import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { coupleInfo } from '../data/mock';
import IntroAnimation from '../components/IntroAnimation';

import { Lock } from 'lucide-react';

// Password Gate Component - styled to match intro animation
const PasswordGate = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'ForeverBegins2026') {
      setFadeOut(true);
      sessionStorage.setItem('siteUnlocked', 'true');
      setTimeout(() => onSuccess(), 600);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #1a2a1f 0%, #2d3d32 25%, #1f2f24 50%, #283828 75%, #1a2a1f 100%)',
      }}
    >
      {/* Ambient glow */}
      <div 
        className="absolute"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212,184,150,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className={`text-center px-6 max-w-md w-full relative z-10 transition-all duration-500 ${fadeOut ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
        {/* Logo */}
        <img
          src={coupleInfo.logoUrl}
          alt="S & J Monogram"
          className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto mb-6 opacity-60"
        />

        {/* Text */}
        <div className="mb-10">
          <p 
            className="text-sm tracking-[0.3em] uppercase mb-3 font-cormorant"
            style={{ color: '#d4c4a8', textShadow: '0 0 20px rgba(212,196,168,0.2)' }}
          >
            Enter to celebrate with us
          </p>
          <div className="w-16 h-[1px] mx-auto mt-4" style={{ background: 'rgba(212,184,150,0.3)' }} />
        </div>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'rgba(212,184,150,0.4)' }} />
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Enter password"
              className="w-full pl-11 pr-4 py-3.5 rounded-full text-center text-sm tracking-wider focus:outline-none transition-all bg-transparent"
              style={{
                border: error ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(212,184,150,0.25)',
                color: error ? '#ef4444' : '#e8dcc8',
              }}
              autoFocus
              data-testid="password-input"
            />
          </div>
          
          {error && (
            <p className="text-xs tracking-wide" style={{ color: 'rgba(239,68,68,0.7)' }}>
              Incorrect password, please try again
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3.5 rounded-full text-sm tracking-[0.15em] transition-all duration-300 hover:brightness-110"
            style={{
              background: 'rgba(138,154,124,0.3)',
              border: '1px solid rgba(138,154,124,0.4)',
              color: '#d4c4a8',
            }}
            data-testid="password-submit"
          >
            ENTER
          </button>
        </form>
      </div>

      {/* Subtle particles */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#d4b896] rounded-full animate-pulse opacity-20" />
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-[#8a9a7c] rounded-full animate-pulse opacity-15" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

// Wedding Countdown Component
const WeddingCountdown = ({ visible }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  // Wedding date: September 9, 2026
  const weddingDate = new Date('2026-09-09T00:00:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/90 backdrop-blur-sm border-2 border-[#b8956b]/40 rounded-lg px-3 py-2 md:px-5 md:py-3 shadow-md min-w-[60px] md:min-w-[80px]">
        <span className="font-display text-2xl md:text-4xl text-[#6b5a1a] font-bold">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[#4a4a42] text-xs md:text-sm tracking-wider mt-2 uppercase font-semibold">
        {label}
      </span>
    </div>
  );

  return (
    <div className={`transition-all duration-1000 delay-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Big date display */}
      <div className="mb-6">
        <p className="text-[#5a6b4e] text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
          Save the Date
        </p>
        <div className="flex items-center justify-center gap-3 md:gap-5">
          <span className="font-display text-5xl md:text-7xl text-[#6b5a1a] font-bold">09</span>
          <span className="font-cormorant text-3xl md:text-5xl text-[#b8956b] italic">.</span>
          <span className="font-display text-5xl md:text-7xl text-[#6b5a1a] font-bold">09</span>
          <span className="font-cormorant text-3xl md:text-5xl text-[#b8956b] italic">.</span>
          <span className="font-display text-5xl md:text-7xl text-[#6b5a1a] font-bold">2026</span>
        </div>
        <p className="text-[#5a5a52] text-sm mt-2 tracking-wider">
          Casper, Wyoming
        </p>
      </div>

      {/* Thin divider */}
      <div className="w-20 h-[1px] bg-[#b8956b]/40 mx-auto mb-5" />

      {/* Countdown */}
      <p className="text-[#5a6b4e] text-xs tracking-[0.2em] uppercase mb-3 font-semibold">
        Counting Down To Forever
      </p>
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <TimeBlock value={timeLeft.days} label="Days" />
        <span className="text-[#b8956b] text-xl md:text-2xl font-bold mb-6">:</span>
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <span className="text-[#b8956b] text-xl md:text-2xl font-bold mb-6">:</span>
        <TimeBlock value={timeLeft.minutes} label="Mins" />
        <span className="text-[#b8956b] text-xl md:text-2xl font-bold mb-6">:</span>
        <TimeBlock value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
};

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
          {/* Fade overlay - more faded for better text visibility */}
          <div className="absolute inset-0 bg-[#faf8f4]/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 pt-16 pb-8">
          {/* Logo Image - Now with transparent background */}
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

          {/* Names - Bold and visible */}
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

          {/* Wedding Countdown */}
          <div className="mt-10">
            <WeddingCountdown visible={contentVisible} />
          </div>

          {/* CTA Button */}
          <Link
            to="/our-story"
            className={`mt-10 inline-flex items-center gap-3 bg-[#8a9a7c] hover:bg-[#6b7c5e] text-white px-8 py-4 rounded-full text-sm tracking-wider transition-all duration-300 group shadow-md ${contentVisible ? 'opacity-100 translate-y-0 delay-1000' : 'opacity-0 translate-y-4'}`}
          >
            <span>Discover Our Story</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
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
