import React, { useState } from 'react';
import { gallery } from '../data/mock';
import { X } from 'lucide-react';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'engagement', 'graduation', 'dating'];
  
  const filteredGallery = filter === 'all' 
    ? gallery 
    : gallery.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            Our Gallery
          </h1>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mb-4" />
          <p className="text-[#5a5a52] text-sm tracking-wide font-light">
            Moments captured in time
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-xs tracking-wider uppercase transition-all duration-300 rounded-full ${
                filter === cat
                  ? 'bg-[#8a9a7c] text-white'
                  : 'bg-transparent text-[#5a5a52] border border-[#d4b896] hover:bg-[#f5f2eb]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredGallery.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden cursor-pointer group ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#b8956b]/0 group-hover:bg-[#b8956b]/20 transition-all duration-500 flex items-end justify-center pb-4">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#b8956b] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="text-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white mt-4 font-display text-lg">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
