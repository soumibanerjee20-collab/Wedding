import React, { useState } from 'react';
import { events } from '../data/mock';
import { Calendar, MapPin, Music, Utensils, Heart, PartyPopper, Sparkles } from 'lucide-react';

// Subtle decorative patterns
const AlpanaPattern = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
    <path d="M50 5 L55 15 L50 25 L45 15 Z" fill="currentColor" opacity="0.15" />
    <path d="M50 75 L55 85 L50 95 L45 85 Z" fill="currentColor" opacity="0.15" />
    <path d="M5 50 L15 55 L25 50 L15 45 Z" fill="currentColor" opacity="0.15" />
    <path d="M75 50 L85 55 L95 50 L85 45 Z" fill="currentColor" opacity="0.15" />
  </svg>
);

const FloralCorner = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 100 Q 30 70, 50 80 Q 70 90, 100 60" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
    <circle cx="50" cy="80" r="3" fill="currentColor" opacity="0.3" />
    <circle cx="30" cy="85" r="2" fill="currentColor" opacity="0.2" />
    <circle cx="70" cy="75" r="2" fill="currentColor" opacity="0.2" />
  </svg>
);

const getEventIcon = (iconType) => {
  const iconClass = "w-6 h-6";
  switch (iconType) {
    case 'dinner':
      return <Utensils className={iconClass} />;
    case 'rings':
      return <Heart className={iconClass} />;
    case 'celebration':
      return <PartyPopper className={iconClass} />;
    case 'music':
      return <Music className={iconClass} />;
    case 'mandap':
      return <Sparkles className={iconClass} />;
    case 'feast':
      return <PartyPopper className={iconClass} />;
    default:
      return <Calendar className={iconClass} />;
  }
};

const EventCard = ({ event, isIndian, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`relative p-6 rounded-lg transition-all duration-500 ${
        isHovered ? 'transform -translate-y-1' : ''
      }`}
      style={{
        background: isIndian 
          ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,240,0.95) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,247,0.95) 100%)',
        boxShadow: isHovered 
          ? '0 10px 40px rgba(0,0,0,0.1)' 
          : '0 4px 15px rgba(0,0,0,0.05)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative element */}
      {isIndian && (
        <AlpanaPattern className="absolute -top-4 -right-4 w-24 h-24 text-[#c17f59] opacity-30" />
      )}
      
      {/* Event number */}
      <div 
        className={`absolute -left-3 top-6 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
          isIndian ? 'bg-gradient-to-br from-[#c17f59] to-[#a66b4a]' : 'bg-gradient-to-br from-[#8a9a7c] to-[#6b7c5e]'
        }`}
      >
        {index + 1}
      </div>
      
      {/* Icon */}
      <div 
        className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
          isIndian ? 'bg-[#fff5eb] text-[#c17f59]' : 'bg-[#f0f4ed] text-[#8a9a7c]'
        }`}
      >
        {getEventIcon(event.icon)}
      </div>
      
      {/* Event name */}
      <h4 className={`font-display text-xl md:text-2xl mb-2 tracking-wide ${
        isIndian ? 'text-[#8B4513]' : 'text-[#5a6b50]'
      }`}>
        {event.name}
      </h4>
      
      {/* Date & Time */}
      <div className="flex items-center gap-2 text-sm text-[#7a7a72] mb-1">
        <Calendar className="w-4 h-4" />
        <span>{event.date}</span>
        <span className="text-[#b8956b]">•</span>
        <span>{event.time}</span>
      </div>
      
      {/* Venue */}
      <div className="flex items-start gap-2 text-sm text-[#7a7a72] mb-4">
        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
        <span>{event.venue}, {event.location}</span>
      </div>
      
      {/* Description */}
      <p className="text-[#5a5a52] text-sm leading-relaxed font-light">
        {event.description}
      </p>
    </div>
  );
};

const EventsPage = () => {
  const { usWedding, indianWedding } = events;
  
  return (
    <div className="min-h-screen bg-[#faf8f4] pt-24 pb-16 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            Wedding Events
          </h1>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mb-6" />
          <p className="text-[#5a5a52] text-sm md:text-base tracking-wide max-w-2xl mx-auto font-light">
            Our celebration spans two continents, reflecting the beautiful cross-cultural journey of our love story. 
            From the mountains of Wyoming to the vibrant streets of Kolkata.
          </p>
        </div>
      </div>

      {/* US Wedding Section */}
      <section className="relative mb-20">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0f4ed]/50 via-transparent to-transparent" />
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10">
            {/* Image */}
            <div className="md:w-1/3 relative group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={usWedding.image} 
                  alt="Wyoming Mountains"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Floating date badge */}
              <div className="absolute -bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow-md">
                <span className="text-[#8a9a7c] font-medium text-sm">{usWedding.date}</span>
              </div>
            </div>
            
            {/* Title */}
            <div className="md:w-2/3 pb-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-[2px] bg-[#8a9a7c]" />
                <span className="text-[#8a9a7c] text-sm tracking-[0.2em] uppercase">Chapter One</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-[#5a6b50] mb-2">
                {usWedding.title}
              </h2>
              <p className="font-cormorant text-xl text-[#7a7a72] italic">
                {usWedding.subtitle}
              </p>
              <div className="flex items-center gap-2 mt-3 text-[#5a5a52]">
                <MapPin className="w-4 h-4 text-[#8a9a7c]" />
                <span className="text-sm">{usWedding.location}</span>
              </div>
            </div>
          </div>
          
          {/* Events Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#8a9a7c]/20 via-[#8a9a7c]/40 to-[#8a9a7c]/20" />
            
            <div className="grid md:grid-cols-3 gap-6">
              {usWedding.events.map((event, index) => (
                <EventCard key={event.id} event={event} isIndian={false} index={index} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative floral corner */}
        <FloralCorner className="absolute bottom-0 right-0 w-32 h-32 text-[#8a9a7c] opacity-30" />
      </section>

      {/* Divider */}
      <div className="max-w-xl mx-auto px-6 mb-20">
        <div className="flex items-center justify-center gap-4">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#b8956b]/30" />
          <div className="flex items-center gap-2">
            <span className="text-[#b8956b] text-2xl">✦</span>
            <span className="font-cormorant text-lg text-[#7a7a72] italic">and then</span>
            <span className="text-[#b8956b] text-2xl">✦</span>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#b8956b]/30" />
        </div>
      </div>

      {/* Indian Wedding Section */}
      <section className="relative">
        {/* Marigold gradient background - more visible */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255,243,224,0.7) 0%, rgba(255,237,213,0.5) 50%, rgba(255,248,240,0.3) 100%)',
          }}
        />
        
        {/* Marigold border accent at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E89B3C] to-transparent opacity-40" />
        
        {/* Subtle alpana pattern in background */}
        <div className="absolute top-10 right-10 opacity-20">
          <AlpanaPattern className="w-64 h-64 text-[#D4740C]" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-15">
          <AlpanaPattern className="w-48 h-48 text-[#D4740C]" />
        </div>
        
        {/* Marigold flower decorative dots */}
        <div className="absolute top-20 left-20 w-3 h-3 rounded-full bg-[#F5A623] opacity-30" />
        <div className="absolute top-40 right-32 w-2 h-2 rounded-full bg-[#E89B3C] opacity-25" />
        <div className="absolute bottom-40 left-40 w-2 h-2 rounded-full bg-[#F5A623] opacity-20" />
        <div className="absolute bottom-60 right-20 w-3 h-3 rounded-full bg-[#D4740C] opacity-25" />
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row-reverse md:items-end gap-6 mb-10">
            {/* Image */}
            <div className="md:w-1/3 relative group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={indianWedding.image} 
                  alt="Kolkata"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Floating date badge */}
              <div className="absolute -bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-md">
                <span className="text-[#c17f59] font-medium text-sm">{indianWedding.date}</span>
              </div>
            </div>
            
            {/* Title */}
            <div className="md:w-2/3 pb-2 md:text-right">
              <div className="flex items-center gap-3 mb-2 md:justify-end">
                <span className="text-[#c17f59] text-sm tracking-[0.2em] uppercase">Chapter Two</span>
                <div className="w-12 h-[2px] bg-[#c17f59]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-[#8B4513] mb-2">
                {indianWedding.title}
              </h2>
              <p className="font-cormorant text-xl text-[#7a7a72] italic">
                {indianWedding.subtitle}
              </p>
              <div className="flex items-center gap-2 mt-3 text-[#5a5a52] md:justify-end">
                <MapPin className="w-4 h-4 text-[#c17f59]" />
                <span className="text-sm">{indianWedding.location}</span>
              </div>
            </div>
          </div>
          
          {/* Events Timeline */}
          <div className="relative">
            {/* Connecting line with marigold color */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#c17f59]/20 via-[#c17f59]/40 to-[#c17f59]/20" />
            
            <div className="grid md:grid-cols-3 gap-6">
              {indianWedding.events.map((event, index) => (
                <EventCard key={event.id} event={event} isIndian={true} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Note */}
      <div className="max-w-3xl mx-auto px-6 mt-20 text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-[#d4b896]/10">
          <p className="font-cormorant text-xl md:text-2xl text-[#5a5a52] italic mb-4">
            "Two cultures, two celebrations, one beautiful love story"
          </p>
          <p className="text-[#7a7a72] text-sm">
            More details about venues and timings will be shared as we finalize our plans. 
            We can't wait to celebrate with you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
