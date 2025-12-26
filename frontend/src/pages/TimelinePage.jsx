import React from 'react';
import { timeline } from '../data/mock';
import { MapPin, Heart } from 'lucide-react';

const TimelinePage = () => {
  return (
    <div
      className="min-h-screen pt-20"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1567087580282-d5c0a7b12dc6?w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-[#faf8f4]/92 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            Our Journey
          </h1>
          <p className="font-cormorant text-xl text-[#5a5a52] italic">A story written across continents</p>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#d4b896]/50 md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-start mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#8a9a7c] rounded-full -translate-x-1/2 mt-6 z-10 ring-4 ring-[#faf8f4]">
                {item.date === "NOW" && (
                  <span className="absolute w-4 h-4 bg-[#8a9a7c] rounded-full animate-ping" />
                )}
              </div>

              {/* Content Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[45%] ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}
              >
                <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#d4b896]/10">
                  {/* Date Badge */}
                  <span className="inline-block px-4 py-1.5 bg-[#f5f2eb] text-[#b8956b] text-xs font-medium tracking-wider rounded-full mb-4">
                    {item.date}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl text-[#b8956b] mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#5a5a52] text-sm md:text-base leading-relaxed mb-4 font-light">
                    {item.description}
                  </p>
                  
                  {/* Location */}
                  <div className={`flex items-center gap-2 text-[#8a9a7c] text-sm ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <MapPin className="w-4 h-4" />
                    <span className="italic">{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End heart */}
          <div className="absolute left-6 md:left-1/2 bottom-0 -translate-x-1/2 translate-y-6">
            <Heart className="w-6 h-6 text-[#b8956b] fill-[#b8956b]" />
          </div>
        </div>
        
        {/* Bottom quote */}
        <div className="text-center mt-20">
          <p className="font-cormorant text-2xl md:text-3xl text-[#5a5a52] italic">
            "Distance means so little when someone means so much"      
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
