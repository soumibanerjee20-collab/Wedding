import React from 'react';
import { travelInfo } from '../data/mock';
import { Plane, MapPin, Globe, Heart } from 'lucide-react';

const TravelPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-[#5a6a4d] mb-4 tracking-wider">
            Travel Information
          </h1>
          <div className="w-24 h-[1px] bg-[#9a7c4e] mx-auto mb-6" />
          <p className="text-[#5a6a4d]/70 text-sm tracking-wide max-w-xl mx-auto">
            {travelInfo.venue.description}
          </p>
        </div>

        {/* Two Locations */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* US Location */}
          <div className="bg-[#faf9f6] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-[#9a7c4e]" />
              <h3 className="font-display text-xl text-[#5a6a4d] tracking-wide">
                {travelInfo.usLocation.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-[#5a6a4d] mb-4">
              <MapPin className="w-5 h-5 text-[#9a7c4e]" />
              <span className="font-medium">{travelInfo.usLocation.location}</span>
            </div>
            <p className="text-[#5a6a4d]/70 text-sm mb-4 leading-relaxed">
              {travelInfo.usLocation.description}
            </p>
            <p className="text-[#5a6a4d]/60 text-xs italic">
              {travelInfo.usLocation.notes}
            </p>
          </div>

          {/* India Location */}
          <div className="bg-[#faf9f6] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-[#9a7c4e]" />
              <h3 className="font-display text-xl text-[#5a6a4d] tracking-wide">
                {travelInfo.indiaLocation.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-[#5a6a4d] mb-4">
              <MapPin className="w-5 h-5 text-[#9a7c4e]" />
              <span className="font-medium">{travelInfo.indiaLocation.location}</span>
            </div>
            <p className="text-[#5a6a4d]/70 text-sm mb-4 leading-relaxed">
              {travelInfo.indiaLocation.description}
            </p>
            <p className="text-[#5a6a4d]/60 text-xs italic">
              {travelInfo.indiaLocation.notes}
            </p>
          </div>
        </div>

        {/* Stay Tuned Notice */}
        <div className="bg-[#5a6a4d] text-white p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Plane className="w-5 h-5" />
            <Heart className="w-4 h-4" />
            <Plane className="w-5 h-5 -scale-x-100" />
          </div>
          <p className="font-cormorant text-xl md:text-2xl italic mb-4">
            "Love knows no distance"
          </p>
          <p className="text-white/80 text-sm leading-relaxed max-w-2xl mx-auto">
            {travelInfo.stayTuned}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;
