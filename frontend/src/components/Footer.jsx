import React from 'react';
import { coupleInfo } from '../data/mock';
import { Heart } from 'lucide-react';

const Footer = () => {
  const weddingDate = new Date(coupleInfo.weddingDate);
  const formattedDate = weddingDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <footer className="bg-[#5a6a4d] py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Monogram */}
        <div className="mb-6">
          <span className="font-serif text-3xl tracking-wider">
            {coupleInfo.bride.charAt(0)} & {coupleInfo.groom.charAt(0)}
          </span>
        </div>

        {/* Date */}
        <p className="text-white/80 text-sm tracking-widest mb-6">
          {formattedDate}
        </p>

        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-[1px] bg-white/30" />
          <Heart className="w-4 h-4 text-[#c9b896]" />
          <div className="w-16 h-[1px] bg-white/30" />
        </div>

        {/* Message */}
        <p className="font-serif text-lg italic text-white/90 mb-8">
          "Two souls, one heart, forever intertwined"
        </p>

        {/* Copyright */}
        <p className="text-white/60 text-xs tracking-wider">
          {coupleInfo.bride} & {coupleInfo.groom} © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
