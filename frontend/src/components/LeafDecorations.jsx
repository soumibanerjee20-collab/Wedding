import React from 'react';

// Eucalyptus branch - elegant botanical decoration
export const EucalyptusBranch = ({ className, flip }) => (
  <svg className={className} viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={flip ? { transform: 'scaleX(-1)' } : {}}>
    {/* Main stem */}
    <path d="M60 5 Q58 50, 62 100 Q65 150, 58 200 Q55 250, 60 295" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.7" />
    {/* Left leaves - rounded eucalyptus style */}
    <ellipse cx="40" cy="35" rx="18" ry="12" transform="rotate(-30 40 35)" fill="currentColor" opacity="0.35" />
    <ellipse cx="35" cy="85" rx="20" ry="13" transform="rotate(-25 35 85)" fill="currentColor" opacity="0.3" />
    <ellipse cx="38" cy="140" rx="17" ry="11" transform="rotate(-35 38 140)" fill="currentColor" opacity="0.25" />
    <ellipse cx="40" cy="195" rx="16" ry="10" transform="rotate(-20 40 195)" fill="currentColor" opacity="0.2" />
    <ellipse cx="38" cy="245" rx="14" ry="9" transform="rotate(-30 38 245)" fill="currentColor" opacity="0.18" />
    {/* Right leaves */}
    <ellipse cx="82" cy="58" rx="19" ry="12" transform="rotate(25 82 58)" fill="currentColor" opacity="0.32" />
    <ellipse cx="85" cy="112" rx="18" ry="11" transform="rotate(30 85 112)" fill="currentColor" opacity="0.28" />
    <ellipse cx="80" cy="168" rx="16" ry="10" transform="rotate(20 80 168)" fill="currentColor" opacity="0.22" />
    <ellipse cx="82" cy="220" rx="15" ry="9" transform="rotate(35 82 220)" fill="currentColor" opacity="0.18" />
    <ellipse cx="78" cy="270" rx="13" ry="8" transform="rotate(25 78 270)" fill="currentColor" opacity="0.15" />
  </svg>
);

// Single leaf - for scattered decoration
export const SingleLeaf = ({ className }) => (
  <svg className={className} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5 Q50 20 48 45 Q45 65 30 75 Q15 65 12 45 Q10 20 30 5Z" fill="currentColor" opacity="0.3" />
    <path d="M30 15 Q30 40 30 70" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    <path d="M30 30 Q22 25 18 35" stroke="currentColor" strokeWidth="0.5" opacity="0.4" fill="none" />
    <path d="M30 42 Q38 37 42 47" stroke="currentColor" strokeWidth="0.5" opacity="0.4" fill="none" />
    <path d="M30 54 Q24 49 20 58" stroke="currentColor" strokeWidth="0.5" opacity="0.4" fill="none" />
  </svg>
);

// Corner vine with small leaves
export const CornerVine = ({ className, flip }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={flip ? { transform: 'scaleX(-1)' } : {}}>
    {/* Main vine curve */}
    <path d="M0 200 Q30 170, 50 140 Q70 110, 100 90 Q130 70, 160 50 Q175 35, 200 0" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5" />
    {/* Leaves along the vine */}
    <ellipse cx="30" cy="170" rx="14" ry="9" transform="rotate(-50 30 170)" fill="currentColor" opacity="0.3" />
    <ellipse cx="60" cy="130" rx="13" ry="8" transform="rotate(-40 60 130)" fill="currentColor" opacity="0.28" />
    <ellipse cx="90" cy="98" rx="12" ry="8" transform="rotate(-30 90 98)" fill="currentColor" opacity="0.25" />
    <ellipse cx="120" cy="75" rx="11" ry="7" transform="rotate(-25 120 75)" fill="currentColor" opacity="0.22" />
    <ellipse cx="150" cy="52" rx="10" ry="6" transform="rotate(-35 150 52)" fill="currentColor" opacity="0.2" />
    <ellipse cx="180" cy="25" rx="9" ry="5" transform="rotate(-45 180 25)" fill="currentColor" opacity="0.18" />
    {/* Small opposite leaves */}
    <ellipse cx="45" cy="155" rx="10" ry="6" transform="rotate(40 45 155)" fill="currentColor" opacity="0.22" />
    <ellipse cx="78" cy="115" rx="9" ry="6" transform="rotate(35 78 115)" fill="currentColor" opacity="0.2" />
    <ellipse cx="108" cy="85" rx="9" ry="5" transform="rotate(30 108 85)" fill="currentColor" opacity="0.18" />
    <ellipse cx="140" cy="60" rx="8" ry="5" transform="rotate(40 140 60)" fill="currentColor" opacity="0.16" />
  </svg>
);

// Horizontal leaf garland for dividers
export const LeafGarland = ({ className }) => (
  <svg className={className} viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Center stem */}
    <path d="M0 20 Q50 15, 100 20 Q150 25, 200 20 Q250 15, 300 20 Q350 25, 400 20" stroke="currentColor" strokeWidth="1" opacity="0.4" fill="none" />
    {/* Leaves along garland */}
    <ellipse cx="40" cy="16" rx="12" ry="6" transform="rotate(-15 40 16)" fill="currentColor" opacity="0.25" />
    <ellipse cx="80" cy="22" rx="11" ry="5" transform="rotate(10 80 22)" fill="currentColor" opacity="0.2" />
    <ellipse cx="130" cy="18" rx="12" ry="6" transform="rotate(-20 130 18)" fill="currentColor" opacity="0.25" />
    <ellipse cx="180" cy="23" rx="10" ry="5" transform="rotate(15 180 23)" fill="currentColor" opacity="0.2" />
    <ellipse cx="220" cy="18" rx="11" ry="6" transform="rotate(-10 220 18)" fill="currentColor" opacity="0.22" />
    <ellipse cx="270" cy="22" rx="12" ry="5" transform="rotate(20 270 22)" fill="currentColor" opacity="0.25" />
    <ellipse cx="320" cy="17" rx="10" ry="5" transform="rotate(-15 320 17)" fill="currentColor" opacity="0.2" />
    <ellipse cx="360" cy="22" rx="11" ry="6" transform="rotate(10 360 22)" fill="currentColor" opacity="0.22" />
  </svg>
);
