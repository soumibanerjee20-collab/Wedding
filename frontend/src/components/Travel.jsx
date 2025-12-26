import React from 'react';
import { travelInfo } from '../data/mock';
import { Plane, Hotel, Car, MapPin, Copy } from 'lucide-react';
import { toast } from 'sonner';

const Travel = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  return (
    <section id="travel" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#5a6a4d] mb-4">
            Travel Information
          </h2>
          <div className="w-24 h-[1px] bg-[#9a7c4e] mx-auto mb-4" />
          <p className="text-[#5a6a4d]/70 text-sm tracking-wide">
            Everything you need to know for your journey
          </p>
        </div>

        {/* Venue Info */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#5a6a4d] mb-2">
            <MapPin className="w-5 h-5 text-[#9a7c4e]" />
            <span className="font-serif text-2xl">{travelInfo.venue.name}</span>
          </div>
          <p className="text-[#5a6a4d]/70 text-sm">
            {travelInfo.venue.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Hotels */}
          <div className="bg-[#faf9f6] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Hotel className="w-6 h-6 text-[#9a7c4e]" />
              <h3 className="font-serif text-xl text-[#5a6a4d]">
                Recommended Hotels
              </h3>
            </div>
            <div className="space-y-6">
              {travelInfo.hotels.map((hotel, index) => (
                <div
                  key={index}
                  className="bg-white p-5 shadow-sm"
                >
                  <h4 className="font-serif text-lg text-[#5a6a4d] mb-2">
                    {hotel.name}
                  </h4>
                  <p className="text-[#5a6a4d]/70 text-sm mb-2">
                    {hotel.address}
                  </p>
                  <p className="text-[#5a6a4d]/60 text-xs mb-3">
                    {hotel.description}
                  </p>
                  {hotel.groupCode && (
                    <div className="flex items-center gap-2 bg-[#f5f3ef] p-2 rounded">
                      <span className="text-xs text-[#5a6a4d]/70">Group Code:</span>
                      <code className="text-sm font-medium text-[#9a7c4e]">
                        {hotel.groupCode}
                      </code>
                      <button
                        onClick={() => copyToClipboard(hotel.groupCode)}
                        className="ml-auto text-[#5a6a4d]/50 hover:text-[#9a7c4e] transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Transportation */}
          <div className="space-y-8">
            {/* Airports */}
            <div className="bg-[#faf9f6] p-8">
              <div className="flex items-center gap-3 mb-6">
                <Plane className="w-6 h-6 text-[#9a7c4e]" />
                <h3 className="font-serif text-xl text-[#5a6a4d]">
                  Nearest Airports
                </h3>
              </div>
              <ul className="space-y-3">
                {travelInfo.transportation.airports.map((airport, index) => (
                  <li
                    key={index}
                    className="text-[#5a6a4d]/70 text-sm flex items-start gap-2"
                  >
                    <span className="text-[#9a7c4e]">•</span>
                    {airport}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shuttle */}
            <div className="bg-[#faf9f6] p-8">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-[#9a7c4e]" />
                <h3 className="font-serif text-xl text-[#5a6a4d]">
                  Transportation
                </h3>
              </div>
              <p className="text-[#5a6a4d]/70 text-sm">
                {travelInfo.transportation.shuttle}
              </p>
            </div>
          </div>
        </div>

        {/* Local Attractions */}
        <div className="bg-[#faf9f6] p-8">
          <h3 className="font-serif text-xl text-[#5a6a4d] text-center mb-6">
            Things to Explore
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {travelInfo.localAttractions.map((attraction, index) => (
              <div
                key={index}
                className="bg-white p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-[#5a6a4d]/80 text-sm">{attraction}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
