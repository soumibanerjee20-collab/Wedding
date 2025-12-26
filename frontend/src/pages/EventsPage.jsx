import React from 'react';
import { events } from '../data/mock';
import { Calendar, MapPin } from 'lucide-react';

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-[#faf8f4] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            Wedding Events
          </h1>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mb-6" />
          <p className="text-[#5a5a52] text-sm tracking-wide max-w-xl mx-auto font-light">
            Our celebration spans two continents, reflecting the cross-cultural journey of our love story.
          </p>
        </div>

        {/* Events - Two Box Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white p-10 shadow-sm border border-[#d4b896]/20 relative overflow-hidden group hover:shadow-md transition-all duration-300"
            >
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <span className="inline-block px-3 py-1 bg-[#f5f2eb] text-[#8a9a7c] text-xs tracking-wider font-medium rounded-full">
                  {event.status}
                </span>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#f5f2eb] rounded-full opacity-50 group-hover:opacity-70 transition-opacity" />

              {/* Event name */}
              <h3 className="font-display text-2xl md:text-3xl text-[#b8956b] mb-6 tracking-wide pr-20">
                {event.name}
              </h3>

              {/* Event details */}
              <div className="space-y-4 mb-6 relative z-10">
                <div className="flex items-center gap-3 text-[#5a5a52]">
                  <div className="w-10 h-10 rounded-full bg-[#f5f2eb] flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-[#8a9a7c]" />
                  </div>
                  <div>
                    <span className="text-lg font-medium">{event.date}</span>
                    <span className="block text-sm text-[#7a7a72]">{event.time}</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-[#5a5a52]">
                  <div className="w-10 h-10 rounded-full bg-[#f5f2eb] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#8a9a7c]" />
                  </div>
                  <div>
                    <span className="text-lg font-medium block">{event.venue}</span>
                    <span className="text-sm text-[#7a7a72]">{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#5a5a52] text-sm leading-relaxed font-light relative z-10">
                {event.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="font-cormorant text-xl text-[#5a5a52] italic">
            More details will be shared as we finalize our plans. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
