import React from 'react';
import { travelInfo } from '../data/mock';
import { Plane, MapPin, Heart, Globe, Building, Mountain } from 'lucide-react';

const TravelPage = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
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

        {/* US Section */}
        <div className="mb-16">
          <div className="bg-[#faf8f4] overflow-hidden border border-[#d4b896]/20">
            <div className="h-64 overflow-hidden">
              <img
                src={travelInfo.usLocation.image}
                alt="Wyoming Mountains"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Mountain className="w-6 h-6 text-[#8a9a7c]" />
                <h3 className="font-display text-2xl text-[#b8956b] tracking-wide">
                  {travelInfo.usLocation.title}
                </h3>
              </div>
              
              {/* History */}
              <p className="text-[#5a5a52] text-sm mb-6 leading-relaxed font-light">
                {travelInfo.usLocation.history}
              </p>
              
              {/* Landmarks */}
              <h4 className="text-[#b8956b] font-medium mb-4 text-sm tracking-wider uppercase">Places to Explore</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {travelInfo.usLocation.landmarks.map((landmark, index) => (
                  <div key={index} className="bg-white p-4 border border-[#d4b896]/10">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#8a9a7c] mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-[#5a5a52] text-sm mb-1">{landmark.name}</h5>
                        <p className="text-[#7a7a72] text-xs leading-relaxed">{landmark.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* India Section */}
        <div className="mb-12">
          <div className="bg-[#faf8f4] overflow-hidden border border-[#d4b896]/20">
            <div className="h-64 overflow-hidden">
              <img
                src={travelInfo.indiaLocation.image}
                alt="Victoria Memorial, Kolkata"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-6 h-6 text-[#8a9a7c]" />
                <h3 className="font-display text-2xl text-[#b8956b] tracking-wide">
                  {travelInfo.indiaLocation.title}
                </h3>
              </div>
              
              {/* History */}
              <p className="text-[#5a5a52] text-sm mb-6 leading-relaxed font-light">
                {travelInfo.indiaLocation.history}
              </p>
              
              {/* Landmarks */}
              <h4 className="text-[#b8956b] font-medium mb-4 text-sm tracking-wider uppercase">Iconic Landmarks</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {travelInfo.indiaLocation.landmarks.map((landmark, index) => (
                  <div key={index} className="bg-white p-4 border border-[#d4b896]/10">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#8a9a7c] mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-[#5a5a52] text-sm mb-1">{landmark.name}</h5>
                        <p className="text-[#7a7a72] text-xs leading-relaxed">{landmark.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
