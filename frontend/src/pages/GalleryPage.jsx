import React, { useState } from 'react';
import { gallery } from '../data/mock';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Random rotation angles for authentic polaroid feel
const rotations = [-6, 3, -4, 5, -3, 4, -5, 2, -2];

const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goNext = () => setSelectedIndex((prev) => (prev + 1) % gallery.length);
  const goPrev = () => setSelectedIndex((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <div className="min-h-screen bg-[#faf8f4] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
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

        {/* Polaroid Style Gallery */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {gallery.map((image, index) => (
            <div
              key={image.id}
              className="cursor-pointer group transition-all duration-500 hover:z-10"
              onClick={() => openLightbox(index)}
              style={{
                transform: `rotate(${rotations[index % rotations.length]}deg)`,
              }}
            >
              {/* Polaroid Frame */}
              <div 
                className="bg-white p-3 pb-14 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                style={{
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1), 0 10px 40px rgba(184, 149, 107, 0.15)',
                }}
              >
                {/* Photo */}
                <div className="w-52 h-52 md:w-60 md:h-60 overflow-hidden bg-gray-100">
                  <img
                    src={image.src}
                    alt="Our moment"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Polaroid Caption - Handwritten style */}
                <div className="absolute bottom-3 left-0 right-0 text-center">
                  <p 
                    className="text-[#5a5a52] text-sm italic"
                    style={{
                      fontFamily: "'Caveat', cursive, serif",
                      fontSize: '1.1rem',
                    }}
                  >
                    {polaroidCaptions[index % polaroidCaptions.length]}
                  </p>
                </div>
              </div>
              
              {/* Tape effect on top */}
              <div 
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 opacity-60"
                style={{
                  background: 'linear-gradient(135deg, rgba(184, 149, 107, 0.4) 0%, rgba(184, 149, 107, 0.2) 100%)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-16">
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
