import React from 'react';
import { timeline } from '../data/mock';
import { MapPin, Calendar } from 'lucide-react';

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
      <div className="fixed inset-0 bg-[#f8f6f2]/90 pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-[#5a6a4d] mb-4 tracking-wider">
            Our Timeline
          </h1>
          <div className="w-24 h-[1px] bg-[#9a7c4e] mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#c9b896]/60 md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-start mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#6b7c5e] rounded-full -translate-x-1/2 mt-8 z-10 ring-4 ring-[#f8f6f2]" />

              {/* Content Card */}
              <div
                className={`ml-12 md:ml-0 md:w-[45%] ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}
              >
                <div className="bg-white/95 backdrop-blur-sm p-8 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm">
                  {/* Date Badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 bg-[#f5f3ef] rounded-full mb-4 ${
                    index % 2 === 0 ? 'md:float-right md:ml-4' : ''
                  }`}>
                    <Calendar className="w-3.5 h-3.5 text-[#6b7c5e]" />
                    <span className="text-[#6b7c5e] text-xs font-medium tracking-wider">
                      {item.date}
                    </span>
                  </div>
                  
                  <div className="clear-both" />
                  
                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl text-[#5a6a4d] mb-4 tracking-wide small-caps">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#5a6a4d]/75 text-sm md:text-base leading-relaxed mb-4 font-light">
                    {item.description}
                  </p>
                  
                  {/* Location */}
                  <div className={`flex items-center gap-2 text-[#9a7c4e] ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm italic">{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End decoration */}
          <div className="absolute left-4 md:left-1/2 bottom-0 -translate-x-1/2 translate-y-4">
            <div className="w-4 h-4 bg-[#9a7c4e] rounded-full ring-4 ring-[#f8f6f2]" />
          </div>
        </div>
        
        {/* Bottom text */}
        <div className="text-center mt-20">
          <p className="font-cormorant text-2xl md:text-3xl text-[#5a6a4d] italic">
            "And so our adventure continues..."      
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
