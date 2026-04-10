import React, { useState } from 'react';
import { events } from '../data/mock';
import { Calendar, MapPin, Music, Utensils, Heart, PartyPopper, Sparkles } from 'lucide-react';

// Subtle decorative patterns
const AlpanaPattern = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer circle */}
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" />
    <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" />
    <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" />
    <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
    
    {/* Lotus petals - top */}
    <path d="M50 2 Q55 15 50 25 Q45 15 50 2" fill="currentColor" opacity="0.6" />
    <path d="M50 75 Q55 85 50 98 Q45 85 50 75" fill="currentColor" opacity="0.6" />
    <path d="M2 50 Q15 55 25 50 Q15 45 2 50" fill="currentColor" opacity="0.6" />
    <path d="M75 50 Q85 55 98 50 Q85 45 75 50" fill="currentColor" opacity="0.6" />
    
    {/* Diagonal petals */}
    <path d="M15 15 Q25 25 20 35 Q18 25 15 15" fill="currentColor" opacity="0.4" />
    <path d="M85 15 Q75 25 80 35 Q82 25 85 15" fill="currentColor" opacity="0.4" />
    <path d="M15 85 Q25 75 20 65 Q18 75 15 85" fill="currentColor" opacity="0.4" />
    <path d="M85 85 Q75 75 80 65 Q82 75 85 85" fill="currentColor" opacity="0.4" />
    
    {/* Small dots around */}
    <circle cx="50" cy="8" r="2" fill="currentColor" />
    <circle cx="50" cy="92" r="2" fill="currentColor" />
    <circle cx="8" cy="50" r="2" fill="currentColor" />
    <circle cx="92" cy="50" r="2" fill="currentColor" />
    <circle cx="20" cy="20" r="1.5" fill="currentColor" />
    <circle cx="80" cy="20" r="1.5" fill="currentColor" />
    <circle cx="20" cy="80" r="1.5" fill="currentColor" />
    <circle cx="80" cy="80" r="1.5" fill="currentColor" />
  </svg>
);

// Paisley/Mango motif - very Bengali
const PaisleyPattern = ({ className }) => (
  <svg className={className} viewBox="0 0 50 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M25 5 Q45 20 40 45 Q35 70 25 75 Q15 70 10 45 Q5 20 25 5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      fill="none"
    />
    <path 
      d="M25 15 Q35 25 32 40 Q28 55 25 58 Q22 55 18 40 Q15 25 25 15" 
      stroke="currentColor" 
      strokeWidth="1" 
      fill="currentColor"
      opacity="0.3"
    />
    <circle cx="25" cy="30" r="3" fill="currentColor" />
    <path d="M25 5 Q28 0 32 5" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

// Decorative border pattern
const BorderPattern = ({ className }) => (
  <svg className={className} viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 10 Q10 0 20 10 Q30 20 40 10 Q50 0 60 10 Q70 20 80 10 Q90 0 100 10 Q110 20 120 10 Q130 0 140 10 Q150 20 160 10 Q170 0 180 10 Q190 20 200 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="20" cy="10" r="2" fill="currentColor" />
    <circle cx="60" cy="10" r="2" fill="currentColor" />
    <circle cx="100" cy="10" r="2" fill="currentColor" />
    <circle cx="140" cy="10" r="2" fill="currentColor" />
    <circle cx="180" cy="10" r="2" fill="currentColor" />
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
          ? 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,247,235,0.98) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,247,0.95) 100%)',
        boxShadow: isHovered 
          ? isIndian 
            ? '0 10px 40px rgba(228,155,60,0.2)' 
            : '0 10px 40px rgba(0,0,0,0.1)' 
          : '0 4px 15px rgba(0,0,0,0.05)',
        border: isIndian ? '1px solid rgba(228,155,60,0.15)' : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative element */}
      {isIndian && (
        <>
          <AlpanaPattern className="absolute -top-6 -right-6 w-28 h-28 text-[#E89B3C] opacity-25" />
          <div className="absolute bottom-2 right-2 w-8 h-8 opacity-20">
            <PaisleyPattern className="w-full h-full text-[#D4740C]" />
          </div>
        </>
      )}
      
      {/* Event number */}
      <div 
        className={`absolute -left-3 top-6 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
          isIndian ? 'bg-gradient-to-br from-[#E89B3C] to-[#D4740C]' : 'bg-gradient-to-br from-[#8a9a7c] to-[#6b7c5e]'
        }`}
      >
        {index + 1}
      </div>
      
      {/* Icon */}
      <div 
        className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
          isIndian ? 'bg-[#FFF5E6] text-[#D4740C]' : 'bg-[#f0f4ed] text-[#8a9a7c]'
        }`}
      >
        {getEventIcon(event.icon)}
      </div>
      
      {/* Event name */}
      <h4 className={`font-display text-xl md:text-2xl mb-2 tracking-wide ${
        isIndian ? 'text-[#B8540B]' : 'text-[#5a6b50]'
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
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#8a9a7c]">
            <path d="M100 100 Q 70 70, 80 50 Q 90 30, 70 20 Q 50 10, 40 30" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="80" cy="50" r="3" fill="currentColor" />
            <circle cx="70" cy="30" r="2" fill="currentColor" />
            <circle cx="50" cy="40" r="2" fill="currentColor" />
          </svg>
        </div>
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
      <section className="relative py-4">
        {/* Marigold gradient background - more visible */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255,243,224,0.8) 0%, rgba(255,237,213,0.6) 50%, rgba(255,248,240,0.4) 100%)',
          }}
        />
        
        {/* Marigold border accent at top */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#E89B3C] to-transparent opacity-50" />
        
        {/* Decorative border pattern at top */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-96 opacity-30">
          <BorderPattern className="w-full h-6 text-[#D4740C]" />
        </div>
        
        {/* Large Alpana patterns - MORE VISIBLE */}
        <div className="absolute top-16 right-8 opacity-40">
          <AlpanaPattern className="w-72 h-72 text-[#D4740C]" />
        </div>
        <div className="absolute bottom-16 left-8 opacity-35">
          <AlpanaPattern className="w-56 h-56 text-[#D4740C]" />
        </div>
        <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-25">
          <AlpanaPattern className="w-40 h-40 text-[#E89B3C]" />
        </div>
        
        {/* Paisley motifs - Bengali touch */}
        <div className="absolute top-32 left-16 opacity-35 rotate-12">
          <PaisleyPattern className="w-16 h-24 text-[#D4740C]" />
        </div>
        <div className="absolute bottom-32 right-16 opacity-30 -rotate-12">
          <PaisleyPattern className="w-14 h-20 text-[#E89B3C]" />
        </div>
        <div className="absolute top-48 right-40 opacity-25 rotate-45">
          <PaisleyPattern className="w-12 h-18 text-[#D4740C]" />
        </div>
        
        {/* Marigold flower decorative dots - scattered */}
        <div className="absolute top-24 left-32 w-4 h-4 rounded-full bg-[#F5A623] opacity-40" />
        <div className="absolute top-40 right-48 w-3 h-3 rounded-full bg-[#E89B3C] opacity-35" />
        <div className="absolute bottom-40 left-48 w-3 h-3 rounded-full bg-[#F5A623] opacity-30" />
        <div className="absolute bottom-56 right-24 w-4 h-4 rounded-full bg-[#D4740C] opacity-35" />
        <div className="absolute top-60 left-20 w-2 h-2 rounded-full bg-[#E89B3C] opacity-40" />
        <div className="absolute bottom-28 left-36 w-2 h-2 rounded-full bg-[#F5A623] opacity-35" />
        
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
              <div className="absolute -bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-md border border-[#E89B3C]/20">
                <span className="text-[#D4740C] font-medium text-sm">{indianWedding.date}</span>
              </div>
            </div>
            
            {/* Title */}
            <div className="md:w-2/3 pb-2 md:text-right">
              <div className="flex items-center gap-3 mb-2 md:justify-end">
                <span className="text-[#D4740C] text-sm tracking-[0.2em] uppercase">Chapter Two</span>
                <div className="w-12 h-[2px] bg-[#E89B3C]" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-[#B8540B] mb-2">
                {indianWedding.title}
              </h2>
              <p className="font-cormorant text-xl text-[#7a7a72] italic">
                {indianWedding.subtitle}
              </p>
              <div className="flex items-center gap-2 mt-3 text-[#5a5a52] md:justify-end">
                <MapPin className="w-4 h-4 text-[#E89B3C]" />
                <span className="text-sm">{indianWedding.location}</span>
              </div>
            </div>
          </div>
          
          {/* Events Timeline */}
          <div className="relative">
            {/* Connecting line with marigold color */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#E89B3C]/20 via-[#E89B3C]/40 to-[#E89B3C]/20" />
            
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
