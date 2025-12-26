import React from 'react';
import { travelInfo } from '../data/mock';
import { Plane, MapPin, Heart, Globe } from 'lucide-react';

const TravelPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            Travel
          </h1>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mb-6" />
          <p className="text-[#5a5a52] text-sm tracking-wide font-light max-w-xl mx-auto">
            {travelInfo.venue.description}
          </p>
        </div>

        {/* Two Locations */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* US Location */}
          <div className="bg-[#faf8f4] overflow-hidden border border-[#d4b896]/20">
            <div className="h-48 overflow-hidden">
              <img
                src={travelInfo.usLocation.image}
                alt="Wyoming Mountains"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-[#8a9a7c]" />
                <h3 className="font-display text-xl text-[#b8956b] tracking-wide">
                  {travelInfo.usLocation.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-[#5a5a52] mb-4">
                <MapPin className="w-4 h-4 text-[#8a9a7c]" />
                <span className="font-medium">{travelInfo.usLocation.location}</span>
              </div>
              <p className="text-[#5a5a52] text-sm mb-4 leading-relaxed font-light">
                {travelInfo.usLocation.description}
              </p>
              <p className="text-[#7a7a72] text-xs italic">
                {travelInfo.usLocation.details}
              </p>
            </div>
          </div>

          {/* India Location */}
          <div className="bg-[#faf8f4] overflow-hidden border border-[#d4b896]/20">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558431382-27e303142255?w=800&q=80"
                alt="Victoria Memorial, Kolkata"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-[#8a9a7c]" />
                <h3 className="font-display text-xl text-[#b8956b] tracking-wide">
                  {travelInfo.indiaLocation.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-[#5a5a52] mb-4">
                <MapPin className="w-4 h-4 text-[#8a9a7c]" />
                <span className="font-medium">{travelInfo.indiaLocation.location}</span>
              </div>
              <p className="text-[#5a5a52] text-sm mb-4 leading-relaxed font-light">
                {travelInfo.indiaLocation.description}
              </p>
              <p className="text-[#7a7a72] text-xs italic">
                {travelInfo.indiaLocation.details}
              </p>
            </div>
          </div>
        </div>

        {/* Stay Tuned Notice */}
        <div className="bg-[#8a9a7c] text-white p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Plane className="w-5 h-5" />
            <Heart className="w-4 h-4 fill-white" />
            <Plane className="w-5 h-5 -scale-x-100" />
          </div>
          <p className="font-cormorant text-xl md:text-2xl italic mb-4">
            "Love knows no distance"
          </p>
          <p className="text-white/90 text-sm leading-relaxed max-w-2xl mx-auto font-light">
            {travelInfo.stayTuned}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;
