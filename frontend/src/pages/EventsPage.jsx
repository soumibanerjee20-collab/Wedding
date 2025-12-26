import React from 'react';
import { events } from '../data/mock';
import { Calendar, Clock, MapPin, Shirt } from 'lucide-react';

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9f6] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-[#5a6a4d] mb-4 tracking-wider">
            Wedding Events
          </h1>
          <div className="w-24 h-[1px] bg-[#9a7c4e] mx-auto mb-4" />
          <p className="text-[#5a6a4d]/70 text-sm tracking-wide">
            Join us for our celebration
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-500 group relative overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#f5f3ef] -translate-y-10 translate-x-10 rotate-45 group-hover:bg-[#e8e4dc] transition-colors duration-500" />
              
              {/* Event number */}
              <span className="absolute top-4 right-4 text-[#c9b896] font-serif text-4xl opacity-30">
                0{index + 1}
              </span>

              {/* Event name */}
              <h3 className="font-serif text-2xl text-[#5a6a4d] mb-4 relative z-10">
                {event.name}
              </h3>

              {/* Event details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-[#5a6a4d]/80">
                  <Calendar className="w-4 h-4 text-[#9a7c4e]" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-[#5a6a4d]/80">
                  <Clock className="w-4 h-4 text-[#9a7c4e]" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-start gap-3 text-[#5a6a4d]/80">
                  <MapPin className="w-4 h-4 text-[#9a7c4e] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium block">{event.venue}</span>
                    <span className="text-xs text-[#5a6a4d]/60">{event.address}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#5a6a4d]/70 text-sm mb-4 leading-relaxed">
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
      </div>
    </div>
  );
};

export default EventsPage;
