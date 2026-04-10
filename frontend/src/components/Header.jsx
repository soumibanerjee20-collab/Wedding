import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems, coupleInfo } from '../data/mock';
import { useAudio } from '../context/AudioContext';
import { Volume2, VolumeX } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isMuted, hasStarted, toggleMute } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#faf8f4]/95 backdrop-blur-sm shadow-sm py-3'
          : 'bg-[#faf8f4]/70 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="border border-[#b8956b] px-4 py-2 bg-white/50">
              <span className="font-display text-lg text-[#b8956b] tracking-wider">
                {coupleInfo.monogram}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`text-sm tracking-[0.12em] font-medium transition-colors duration-300 relative group ${
                  isActive(item.path)
                    ? 'text-[#b8956b]'
                    : 'text-[#5a5a52] hover:text-[#b8956b]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-[#b8956b] transition-all duration-300 ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            
            {/* Music Mute Button - Desktop */}
            {hasStarted && (
              <button
                onClick={toggleMute}
                className="p-2 rounded-full transition-all duration-300 hover:bg-[#8a9a7c]/10"
                aria-label={isMuted ? 'Unmute music' : 'Mute music'}
                title={isMuted ? 'Unmute music' : 'Mute music'}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-[#8a9a7c]" />
                ) : (
                  <Volume2 className="w-5 h-5 text-[#8a9a7c]" />
                )}
              </button>
            )}
          </nav>

          {/* Mobile Menu Button & Mute */}
          <div className="md:hidden flex items-center gap-2">
            {/* Music Mute Button - Mobile */}
            {hasStarted && (
              <button
                onClick={toggleMute}
                className="p-2 rounded-full transition-all duration-300"
                aria-label={isMuted ? 'Unmute music' : 'Mute music'}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-[#8a9a7c]" />
                ) : (
                  <Volume2 className="w-5 h-5 text-[#8a9a7c]" />
                )}
              </button>
            )}
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#5a5a52]"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 pb-4">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm tracking-[0.12em] font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-[#b8956b]'
                    : 'text-[#5a5a52] hover:text-[#b8956b]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
