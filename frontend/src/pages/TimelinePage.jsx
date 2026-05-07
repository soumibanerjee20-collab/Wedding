import React from 'react';
import { timeline } from '../data/mock';
import { MapPin, Heart, Camera } from 'lucide-react';

const TimelinePage = () => {
  return (
    <div className="min-h-screen pt-20 relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-[#faf8f4]/75" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            Our Journey
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-[#3d3d38] italic">A love story across continents</p>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#d4b896] via-[#8a9a7c] to-[#b8956b] md:-translate-x-1/2" />

          {timeline.map((item, index) => {
            const hasPhotos = item.photos && item.photos.length > 0;
            
            return (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-5 h-5 bg-white border-2 border-[#b8956b] rounded-full -translate-x-1/2 mt-6 z-10">
                  {item.date === "NOW" && (
                    <span className="absolute w-3 h-3 bg-[#8a9a7c] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                  )}
                </div>

                {hasPhotos ? (
                  <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-8 items-start">
                    {/* Content Card */}
                    <div className={`${index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                      <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-500 border-l-4 border-[#b8956b]">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-block text-[#b8956b] text-xs font-semibold tracking-[0.2em]">
                            {item.date}
                          </span>
                          <span className="flex items-center gap-1 text-[#6b7c5e] text-xs bg-[#8a9a7c]/10 px-2 py-1 rounded-full">
                            <Camera className="w-3 h-3" />
                            {item.photos.length} photos
                          </span>
                        </div>
                        
                        <h3 className="font-display text-xl md:text-2xl text-[#3d3d38] mb-4">
                          {item.title}
                        </h3>
                        
                        <p className="text-[#3d3d38] text-sm md:text-base leading-relaxed mb-5">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center gap-2 text-[#6b7c5e] text-sm">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Photos Grid */}
                    <div className={`mt-6 md:mt-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:pr-12'}`}>
                      <div className={`flex flex-wrap justify-center gap-4 ${item.photos.length >= 3 ? 'flex-row items-start' : ''}`}>
                        {item.photos.map((photo, photoIndex) => {
                          const rotations = [-3, 2, -2, 3, -1];
                          const rotation = rotations[photoIndex % rotations.length];
                          const isCompact = item.photos.length >= 3;
                          
                          return (
                            <div 
                              key={photoIndex} 
                              className="group cursor-pointer transition-all duration-500 hover:z-10 hover:scale-105"
                              style={{
                                transform: `rotate(${rotation}deg)`,
                              }}
                            >
                              <div 
                                className={`bg-white ${isCompact ? 'p-1.5 pb-8' : 'p-2 pb-12'} shadow-lg hover:shadow-2xl transition-all duration-500 relative`}
                                style={{
                                  boxShadow: '0 4px 15px rgba(0,0,0,0.1), 0 10px 40px rgba(184, 149, 107, 0.2)',
                                }}
                              >
                                <div className={`${isCompact ? 'w-32 h-32 md:w-40 md:h-40' : 'w-48 h-48 md:w-56 md:h-56'} overflow-hidden bg-gray-100`}>
                                  <img
                                    src={photo}
                                    alt={`${item.title}, memory ${photoIndex + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    style={{ objectPosition: 'center 25%' }}
                                  />
                                </div>
                                
                                <div className={`absolute ${isCompact ? 'bottom-1.5' : 'bottom-3'} left-0 right-0 text-center`}>
                                  <p 
                                    className="text-[#5a5a52]"
                                    style={{
                                      fontFamily: "'Caveat', cursive, serif",
                                      fontSize: isCompact ? '0.85rem' : '1rem',
                                    }}
                                  >
                                    {item.date === "NOW" ? "Present Day" : item.date}
                                  </p>
                                </div>
                              </div>
                              
                              <div 
                                className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-5 opacity-50 rounded-sm"
                                style={{
                                  background: 'linear-gradient(135deg, rgba(184, 149, 107, 0.5) 0%, rgba(184, 149, 107, 0.3) 100%)',
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`ml-16 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-500 border-l-4 border-[#b8956b]">
                        <span className="inline-block text-[#b8956b] text-xs font-semibold tracking-[0.2em] mb-3">
                          {item.date}
                        </span>
                        
                        <h3 className="font-display text-xl md:text-2xl text-[#3d3d38] mb-4">
                          {item.title}
                        </h3>
                        
                        <p className="text-[#3d3d38] text-sm md:text-base leading-relaxed mb-5">
                          {item.description}
                        </p>
                        
                        <div className={`flex items-center gap-2 text-[#6b7c5e] text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* End heart */}
          <div className="absolute left-6 md:left-1/2 bottom-0 -translate-x-1/2 translate-y-8">
            <div className="bg-white p-2 rounded-full shadow-md">
              <Heart className="w-6 h-6 text-[#b8956b] fill-[#b8956b]" />
            </div>
          </div>
        </div>
        
        {/* Bottom quote */}
        <div className="text-center mt-24 bg-white/80 backdrop-blur-sm p-8 rounded-sm">
          <p className="font-cormorant text-2xl md:text-3xl text-[#3d3d38] italic">
            "Distance means so little when someone means so much"      
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
