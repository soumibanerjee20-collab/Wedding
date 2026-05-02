import React, { useState, useEffect } from 'react';
import { coupleInfo } from '../data/mock';

const SITE_PASSWORD = 'sj2026';

const PasswordGate = ({ children }) => {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem('siteUnlocked');
    if (saved === 'true') setUnlocked(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === SITE_PASSWORD) {
      setError('');
      setFadeOut(true);
      sessionStorage.setItem('siteUnlocked', 'true');
      setTimeout(() => setUnlocked(true), 800);
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  if (unlocked) return children;

  return (
    <div 
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{
        background: 'linear-gradient(135deg, #1a2a1f 0%, #2d3d32 25%, #1f2f24 50%, #283828 75%, #1a2a1f 100%)',
      }}
      data-testid="password-gate"
    >
      {/* Ambient glow */}
      <div 
        className="absolute"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(212,184,150,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Logo */}
      <img
        src={coupleInfo.logoUrl}
        alt="S & J"
        className="w-28 h-28 md:w-36 md:h-36 object-contain mb-10 relative z-10"
        style={{ opacity: 0.7 }}
      />

      {/* Form */}
      <form onSubmit={handleSubmit} className="relative z-10 flex flex-col items-center w-full max-w-xs">
        <p 
          className="font-cormorant text-lg md:text-xl tracking-[0.15em] mb-8 text-center"
          style={{ color: 'rgba(212,184,150,0.7)' }}
        >
          Enter password to continue
        </p>

        <input
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(''); }}
          placeholder="Password"
          autoFocus
          className="w-full px-5 py-3 rounded-lg text-center text-sm tracking-widest outline-none mb-4 font-cormorant"
          style={{ 
            background: 'rgba(255,255,255,0.05)', 
            border: '1px solid rgba(212,184,150,0.2)',
            color: '#e8dfd0',
            letterSpacing: '0.2em',
          }}
          data-testid="site-password-input"
        />

        {error && (
          <p className="text-xs mb-3" style={{ color: 'rgba(200,120,120,0.8)' }}>{error}</p>
        )}

        <button
          type="submit"
          className="w-full py-3 rounded-lg text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:scale-[1.02] font-cormorant"
          style={{ 
            background: 'rgba(212,184,150,0.12)', 
            border: '1px solid rgba(212,184,150,0.25)', 
            color: '#d4c4a8',
          }}
          data-testid="site-password-submit"
        >
          Enter
        </button>
      </form>

      {/* Subtle bottom accent */}
      <div className="absolute bottom-12 flex items-center gap-3 opacity-30">
        <div className="w-12 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(212,184,150,0.5))' }} />
        <p className="text-xs tracking-[0.3em] font-cormorant" style={{ color: '#8a9a7c' }}>
          S & J
        </p>
        <div className="w-12 h-[1px]" style={{ background: 'linear-gradient(to left, transparent, rgba(212,184,150,0.5))' }} />
      </div>
    </div>
  );
};

export default PasswordGate;
