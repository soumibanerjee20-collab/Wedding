import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems, coupleInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with decorative corners */}
          <Link to="/" className="flex items-center">
            <div className="relative">
              {/* Corner brackets */}
              <span className="absolute -top-1.5 -left-1.5 text-[#9a7c4e] text-sm font-light">┌</span>
              <span className="absolute -top-1.5 -right-1.5 text-[#9a7c4e] text-sm font-light">┐</span>
              <span className="absolute -bottom-1.5 -left-1.5 text-[#9a7c4e] text-sm font-light">└</span>
              <span className="absolute -bottom-1.5 -right-1.5 text-[#9a7c4e] text-sm font-light">┘</span>
              <div className="border border-[#6b7c5e] px-4 py-2">
                <span className="font-display text-lg text-[#5a6a4d] tracking-wider">
                  {coupleInfo.monogram}
                </span>
              </div>
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
                    ? 'text-[#5a6a4d]'
                    : 'text-[#6b7c5e] hover:text-[#4a5a40]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-[#9a7c4e] transition-all duration-300 ${
                    isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#6b7c5e]"
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
                    ? 'text-[#5a6a4d]'
                    : 'text-[#6b7c5e] hover:text-[#4a5a40]'
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
