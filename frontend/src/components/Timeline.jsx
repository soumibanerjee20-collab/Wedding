import React from 'react';
import { timeline } from '../data/mock';
import { Heart } from 'lucide-react';

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#5a6a4d] mb-4">
            Our Timeline
          </h2>
          <div className="w-24 h-[1px] bg-[#9a7c4e] mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#c9b896] md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-start mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#9a7c4e] rounded-full -translate-x-1/2 mt-2 z-10" />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                }`}
              >
                <div className="bg-[#faf9f6] p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className={`flex items-center gap-2 mb-2 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}>
                    <span className="text-[#9a7c4e] font-serif text-xl">
                      {item.year}
                    </span>
                    <span className="text-[#7a8c69] text-sm">• {item.month}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#5a6a4d] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#5a6a4d]/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* End heart */}
          <div className="absolute left-4 md:left-1/2 bottom-0 -translate-x-1/2 translate-y-4">
            <Heart className="w-6 h-6 text-[#9a7c4e] fill-[#9a7c4e]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
