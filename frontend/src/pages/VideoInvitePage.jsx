import React, { useState, useEffect } from 'react';
import { coupleInfo } from '../data/mock';

const PHOTOS = [
  "https://customer-assets.emergentagent.com/job_94251580-a7d4-48e5-924b-022edb5391d4/artifacts/jb80d38v_IMG_0699.jpeg",
  "https://customer-assets.emergentagent.com/job_1fed53a0-2d6d-4184-bdb5-20bc5b105bf6/artifacts/r83tpser_IMG_6447.jpeg",
  "https://customer-assets.emergentagent.com/job_1fed53a0-2d6d-4184-bdb5-20bc5b105bf6/artifacts/xxlfmx1a_IMG_0953.jpeg",
];

const VideoInvitePage = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Hide header for clean video
    const header = document.querySelector('header');
    if (header) header.style.display = 'none';
    return () => { if (header) header.style.display = ''; };
  }, []);

  useEffect(() => {
    const timings = [
      { delay: 300, next: 1 },     // 0.3s: logo appears
      { delay: 2200, next: 2 },    // 2.2s: "You're Invited" 
      { delay: 4200, next: 3 },    // 4.2s: Photo 1
      { delay: 5800, next: 4 },    // 5.8s: Photo 2
      { delay: 7400, next: 5 },    // 7.4s: Photo 3
      { delay: 9500, next: 6 },    // 9.5s: Names
      { delay: 11500, next: 7 },   // 11.5s: Dates + link
    ];

    const timeouts = timings.map(t => 
      setTimeout(() => setStage(t.next), t.delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a2a1f 0%, #2d3d32 25%, #1f2f24 50%, #283828 75%, #1a2a1f 100%)',
        zIndex: 9999,
      }}
      data-testid="video-invite"
    >
      {/* Ambient glow */}
      <div 
        className="absolute"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(212,184,150,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Stage 1: Logo */}
      <div 
        className="absolute flex flex-col items-center transition-all duration-[1200ms]"
        style={{
          opacity: stage >= 1 && stage < 3 ? 1 : 0,
          transform: stage >= 1 && stage < 3 ? 'scale(1)' : 'scale(0.85)',
        }}
      >
        <img
          src={coupleInfo.logoUrl}
          alt="Monogram"
          className="w-24 h-24 object-contain"
          style={{ filter: 'brightness(0.7) sepia(0.3)' }}
        />
      </div>

      {/* Stage 2: "You're Invited" */}
      <div 
        className="absolute transition-all duration-[1200ms]"
        style={{
          opacity: stage >= 2 && stage < 3 ? 1 : 0,
          transform: stage >= 2 && stage < 3 ? 'translateY(0)' : 'translateY(12px)',
          top: '60%',
        }}
      >
        <p 
          className="font-cormorant text-2xl italic tracking-wide text-center"
          style={{ color: '#d4c4a8', textShadow: '0 0 30px rgba(212,196,168,0.3)' }}
        >
          You're Invited
        </p>
      </div>

      {/* Stages 3-5: Photos as polaroids */}
      {PHOTOS.map((photo, i) => {
        const rotations = [-6, 4, -2];
        const positions = [
          { top: '28%', left: '15%' },
          { top: '22%', left: '48%' },
          { top: '45%', left: '30%' },
        ];
        const photoStage = i + 3;
        const isVisible = stage >= photoStage && stage < 6;

        return (
          <div
            key={i}
            className="absolute transition-all duration-700"
            style={{
              ...positions[i],
              transform: isVisible
                ? `rotate(${rotations[i]}deg) scale(1)`
                : `rotate(${rotations[i]}deg) scale(0.7)`,
              opacity: isVisible ? 1 : 0,
            }}
          >
            <div 
              className="bg-white p-1.5 pb-6"
              style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.4)' }}
            >
              <div className="w-28 h-28 overflow-hidden">
                <img 
                  src={photo} 
                  alt="" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 25%' }}
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* Stage 6: Names */}
      <div 
        className="absolute text-center transition-all duration-[1200ms]"
        style={{
          opacity: stage >= 6 ? 1 : 0,
          transform: stage >= 6 ? 'translateY(0)' : 'translateY(16px)',
          top: '35%',
        }}
      >
        <div style={{ width: '32px', height: '1px', background: 'rgba(212,184,150,0.4)', margin: '0 auto 14px' }} />
        <h1 
          className="font-display text-4xl tracking-wider"
          style={{ color: '#f0e6d3', textShadow: '0 0 40px rgba(240,230,211,0.2)' }}
        >
          Soumi & James
        </h1>
        <div style={{ width: '32px', height: '1px', background: 'rgba(212,184,150,0.4)', margin: '14px auto 0' }} />
      </div>

      {/* Stage 7: Dates + Link */}
      <div 
        className="absolute text-center transition-all duration-[1200ms]"
        style={{
          opacity: stage >= 7 ? 1 : 0,
          transform: stage >= 7 ? 'translateY(0)' : 'translateY(12px)',
          bottom: '22%',
        }}
      >
        <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#8a9a7c' }}>
          Save the Dates
        </p>
        <p className="font-cormorant text-base mb-1" style={{ color: '#d4c4a8' }}>
          August 8, 2026 &bull; Casper, Wyoming
        </p>
        <p className="font-cormorant text-base mb-4" style={{ color: '#d4c4a8' }}>
          November 5-6, 2027 &bull; Kolkata, India
        </p>
        <p className="text-xs tracking-[0.15em]" style={{ color: 'rgba(138,154,124,0.6)' }}>
          soumiandjames.com
        </p>
      </div>
    </div>
  );
};

export default VideoInvitePage;
