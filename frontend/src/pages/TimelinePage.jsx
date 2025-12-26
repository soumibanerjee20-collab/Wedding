import React from 'react';
import { timeline } from '../data/mock';
import { MapPin, Heart } from 'lucide-react';

const TimelinePage = () => {
  return (
    <div className="min-h-screen pt-20 relative">
      {/* Background Image - Edinburgh */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1567948772752-22e8a4c85700?w=1920&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#faf8f4]/80" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            Our Journey
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-[#5a5a52] italic">A love story across continents</p>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#d4b896] via-[#8a9a7c] to-[#b8956b] md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-start mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-5 h-5 bg-white border-2 border-[#b8956b] rounded-full -translate-x-1/2 mt-6 z-10">
                {item.date === "NOW" && (
                  <span className="absolute w-3 h-3 bg-[#8a9a7c] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                )}
              </div>

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-[45%] ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                }`}
              >
                <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-500 border-l-4 border-[#b8956b]">
                  {/* Date */}
                  <span className="inline-block text-[#b8956b] text-xs font-semibold tracking-[0.2em] mb-3">
                    {item.date}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl text-[#5a5a52] mb-4">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#5a5a52]/80 text-sm md:text-base leading-relaxed mb-5 font-light">
                    {item.description}
                  </p>
                  
                  {/* Location */}
                  <div className={`flex items-center gap-2 text-[#8a9a7c] text-sm ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End heart */}
          <div className="absolute left-6 md:left-1/2 bottom-0 -translate-x-1/2 translate-y-8">
            <div className="bg-white p-2 rounded-full shadow-md">
              <Heart className="w-6 h-6 text-[#b8956b] fill-[#b8956b]" />
            </div>
          </div>
        </div>
        
        {/* Bottom quote */}
        <div className="text-center mt-24 bg-white/80 backdrop-blur-sm p-8 rounded-sm">
          <p className="font-cormorant text-2xl md:text-3xl text-[#5a5a52] italic">
            "Distance means so little when someone means so much"      
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
