import React from 'react';
import { ourStory } from '../data/mock';

const OurStory = () => {
  return (
    <section id="our-story" className="py-24 bg-[#faf9f6]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#5a6a4d] mb-4">
            {ourStory.title}
          </h2>
          <div className="w-24 h-[1px] bg-[#9a7c4e] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={ourStory.image}
                alt="Soumi and James"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-[#c9b896] -z-10" />
          </div>

          {/* Story Text */}
          <div className="space-y-6">
            {ourStory.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[#5a6a4d]/80 leading-relaxed text-base md:text-lg font-light"
              >
                {paragraph}
              </p>
            ))}
            
            {/* Decorative element */}
            <div className="pt-6">
              <svg
                viewBox="0 0 100 30"
                className="w-24 h-8 text-[#9a7c4e]"
                fill="currentColor"
              >
                <path d="M0 15 Q25 0 50 15 Q75 30 100 15" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
