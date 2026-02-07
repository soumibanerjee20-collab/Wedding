import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { coupleInfo } from '../data/mock';
import IntroAnimation from '../components/IntroAnimation';

// Wedding Countdown Component
const WeddingCountdown = ({ visible }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  // Wedding date: August 8, 2026
  const weddingDate = new Date('2026-08-08T00:00:00');

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
      <div className="bg-white/80 backdrop-blur-sm border border-[#b8956b]/30 rounded-lg px-3 py-2 md:px-5 md:py-3 shadow-sm min-w-[60px] md:min-w-[80px]">
        <span className="font-display text-2xl md:text-4xl text-[#8B6914]">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-[#5a5a52] text-xs md:text-sm tracking-wider mt-2 uppercase">
        {label}
      </span>
    </div>
  );

  return (
    <div className={`transition-all duration-1000 delay-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <p className="text-[#6b7c5e] text-sm tracking-[0.2em] uppercase mb-4">
        Counting Down To Forever
      </p>
      <div className="flex items-center justify-center gap-3 md:gap-6">
        <TimeBlock value={timeLeft.days} label="Days" />
        <span className="text-[#b8956b] text-2xl md:text-3xl font-light mb-6">:</span>
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <span className="text-[#b8956b] text-2xl md:text-3xl font-light mb-6">:</span>
        <TimeBlock value={timeLeft.minutes} label="Mins" />
        <span className="text-[#b8956b] text-2xl md:text-3xl font-light mb-6">:</span>
        <TimeBlock value={timeLeft.seconds} label="Secs" />
      </div>
      <p className="text-[#7a7a72] text-sm mt-4 italic">
        August 8, 2026
      </p>
    </div>
  );
};

const HomePage = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  // Check if intro was already shown in this session
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
    // Small delay before showing content for smooth transition
    setTimeout(() => setContentVisible(true), 100);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      <section className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Background Image - Wyoming Mountains */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')`,
          }}
        >
          {/* Fade overlay matching logo colors */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f4]/90 via-[#faf8f4]/70 to-[#faf8f4]/90" />
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

          {/* Names - Higher contrast for readability */}
          <h1 className={`font-display text-4xl md:text-6xl lg:text-7xl text-[#8B6914] mb-2 tracking-wide drop-shadow-sm transition-all duration-1000 delay-500 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="font-medium">{coupleInfo.bride}</span>
            <span className="mx-3 md:mx-5 text-[#6b7c5e] italic font-light">&</span>
            <span className="font-medium italic">{coupleInfo.groom}</span>
          </h1>

          {/* Tagline */}
          <p className={`text-[#3d3d38] text-sm md:text-base tracking-[0.25em] mt-4 uppercase font-bold drop-shadow-md transition-all duration-1000 delay-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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
