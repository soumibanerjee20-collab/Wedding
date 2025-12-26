import React from 'react';
import { gallery } from '../data/mock';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goNext = () => setSelectedIndex((prev) => (prev + 1) % gallery.length);
  const goPrev = () => setSelectedIndex((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <div className="min-h-screen bg-[#faf8f4] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            Our Moments
          </h1>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mb-4" />
          <p className="text-[#5a5a52] text-sm tracking-wide font-light">
            Snapshots of our journey together
          </p>
        </div>

        {/* Masonry-style Gallery Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {gallery.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden bg-white p-2 shadow-sm hover:shadow-lg transition-all duration-500">
                <img
                  src={image.src}
                  alt="Our moment"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {/* Subtle hover overlay */}
                <div className="absolute inset-2 bg-[#b8956b]/0 group-hover:bg-[#b8956b]/10 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Note about captions */}
        <div className="text-center mt-12">
          <p className="text-[#7a7a72] text-sm italic">
            More photos coming soon...
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Navigation */}
          <button
            className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <button
            className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[selectedIndex].src}
              alt="Our moment"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
          
          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {selectedIndex + 1} / {gallery.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
