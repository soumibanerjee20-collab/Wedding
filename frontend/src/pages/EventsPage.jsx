import React from 'react';
import { events } from '../data/mock';
import { Calendar, Clock, MapPin, Shirt, Info } from 'lucide-react';

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9f6] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-[#5a6a4d] mb-4 tracking-wider">
            Wedding Events
          </h1>
          <div className="w-24 h-[1px] bg-[#9a7c4e] mx-auto mb-6" />
          <p className="text-[#5a6a4d]/70 text-sm tracking-wide max-w-xl mx-auto">
            Our celebration spans two continents, reflecting the cross-cultural journey of our love story.
          </p>
        </div>

        {/* Notice */}
        <div className="bg-white/80 border border-[#c9b896]/30 p-6 rounded-sm mb-12 text-center">
          <div className="flex items-center justify-center gap-2 text-[#9a7c4e] mb-2">
            <Info className="w-5 h-5" />
            <span className="font-medium tracking-wide text-sm">SAVE THE DATE</span>
          </div>
          <p className="text-[#5a6a4d]/80 text-sm">
            Our US celebration is planned for mid-2026, and our Indian wedding for 2027. 
            Exact dates and venues will be announced as we finalize details.
          </p>
        </div>

        {/* Events */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="bg-white p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-500 relative overflow-hidden"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className="inline-block px-3 py-1 bg-[#f5f3ef] text-[#6b7c5e] text-xs tracking-wider rounded-full">
                  {event.status}
                </span>
              </div>
              
              {/* Event number */}
              <span className="absolute bottom-4 right-4 text-[#e8e4dc] font-display text-6xl md:text-8xl">
                0{index + 1}
              </span>

              {/* Event name */}
              <h3 className="font-display text-2xl md:text-3xl text-[#5a6a4d] mb-6 tracking-wide">
                {event.name}
              </h3>

              {/* Event details */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center gap-3 text-[#5a6a4d]/80">
                  <Calendar className="w-5 h-5 text-[#9a7c4e]" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-[#5a6a4d]/80">
                  <Clock className="w-5 h-5 text-[#9a7c4e]" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-start gap-3 text-[#5a6a4d]/80">
                  <MapPin className="w-5 h-5 text-[#9a7c4e] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium block">{event.venue}</span>
                    <span className="text-xs text-[#5a6a4d]/60">{event.address}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#5a6a4d]/70 text-sm md:text-base leading-relaxed mb-6 max-w-2xl">
                {event.description}
              </p>

              {/* Dress code */}
              <div className="flex items-center gap-2 pt-4 border-t border-[#e8e4dc]">
                <Shirt className="w-4 h-4 text-[#9a7c4e]" />
                <span className="text-xs text-[#5a6a4d]/70">
                  Dress Code: {event.dressCode}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="font-cormorant text-xl text-[#5a6a4d]/70 italic">
            More details will be shared as we finalize our plans. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
