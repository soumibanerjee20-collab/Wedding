import React, { useState } from 'react';
import { gallery } from '../data/mock';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'engagement', 'prewedding', 'venue', 'details'];

  const filteredGallery = filter === 'all' 
    ? gallery 
    : gallery.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-[#5a6a4d] mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-[1px] bg-[#9a7c4e] mx-auto mb-4" />
          <p className="text-[#5a6a4d]/70 text-sm tracking-wide">
            Moments captured in time
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-sm tracking-wider uppercase transition-all duration-300 ${
                filter === cat
                  ? 'bg-[#5a6a4d] text-white'
                  : 'bg-transparent text-[#5a6a4d] border border-[#c9b896] hover:bg-[#f5f3ef]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGallery.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden cursor-pointer group ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className={`aspect-square ${index === 0 || index === 5 ? 'md:aspect-square' : ''}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#5a6a4d]/0 group-hover:bg-[#5a6a4d]/30 transition-all duration-500 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-serif text-lg">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#c9b896] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
