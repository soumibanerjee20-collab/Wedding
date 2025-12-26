import React from 'react';
import { coupleInfo } from '../data/mock';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#5a5a52] py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-6">
          <img
            src={coupleInfo.logoUrl}
            alt="S & J"
            className="w-20 h-20 mx-auto object-contain bg-white rounded-full p-2"
          />
        </div>

        {/* Names */}
        <p className="font-display text-2xl tracking-wider mb-4 text-[#d4b896]">
          {coupleInfo.bride} & {coupleInfo.groom}
        </p>

        {/* Dates */}
        <p className="text-white/70 text-sm tracking-widest mb-6">
          USA {coupleInfo.usWeddingYear} • INDIA {coupleInfo.indiaWeddingYear}
        </p>

        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-[1px] bg-white/30" />
          <Heart className="w-4 h-4 text-[#d4b896]" />
          <div className="w-16 h-[1px] bg-white/30" />
        </div>

        {/* Message */}
        <p className="font-cormorant text-lg italic text-white/90 mb-8">
          "Two souls, one heart, forever intertwined"
        </p>

        {/* Copyright */}
        <p className="text-white/50 text-xs tracking-wider">
          {coupleInfo.bride} & {coupleInfo.groom} © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
