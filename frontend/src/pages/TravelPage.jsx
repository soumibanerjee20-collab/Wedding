import React, { useState } from 'react';
import { travelInfo } from '../data/mock';
import { Plane, MapPin, Heart, Mountain, Building, Hotel, Navigation, ExternalLink } from 'lucide-react';
import { EucalyptusBranch, SingleLeaf, CornerVine } from '../components/LeafDecorations';

const TATE_PUMPHOUSE_PLACE_ID = 'ChIJO4YpyoJ5RIcRBn6AO4xbM4Q';
const TATE_PUMPHOUSE_COORDS = '42.8441,-106.3177';

const TravelPage = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const getDirectionsUrl = (hotel) => {
    return `https://www.google.com/maps/dir/${hotel.mapQuery}/Tate+Pumphouse+Casper+WY`;
  };

  const getMapSrc = (hotel) => {
    if (hotel) {
      return `https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d50000!2d-106.32!3d42.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x0:0x0!2s${encodeURIComponent(hotel.address)}!3m2!1d42.85!2d-106.32!4m5!1s0x0:0x0!2sTate+Pumphouse+Casper+WY!3m2!1d42.8441!2d-106.3177!5e0!3m2!1sen!2sus`;
    }
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-106.3177!3d42.8441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${TATE_PUMPHOUSE_PLACE_ID}!2sTate%20Pumphouse!5e0!3m2!1sen!2sus`;
  };

  return (
    <div className="min-h-screen bg-[#faf8f4] pt-24 pb-16 relative overflow-hidden">
      {/* Leaf Decorations */}
      <EucalyptusBranch className="absolute top-20 left-0 w-24 md:w-28 h-auto text-[#8a9a7c]" />
      <EucalyptusBranch className="absolute top-20 right-0 w-24 md:w-28 h-auto text-[#8a9a7c]" flip />
      <SingleLeaf className="absolute top-96 right-8 w-10 h-14 text-[#8a9a7c] -rotate-12" />
      <SingleLeaf className="absolute bottom-96 left-8 w-8 h-12 text-[#8a9a7c] rotate-20" />
      <CornerVine className="absolute bottom-0 left-0 w-36 md:w-48 h-auto text-[#8a9a7c]" />
      <CornerVine className="absolute bottom-0 right-0 w-36 md:w-48 h-auto text-[#8a9a7c]" flip />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            Travel & Stay
          </h1>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mb-6" />
          <p className="text-[#3d3d38] text-sm md:text-base tracking-wide max-w-xl mx-auto">
            {travelInfo.venue.description}
          </p>
        </div>

        {/* US Section */}
        <div className="mb-16">
          <div className="bg-white/95 backdrop-blur-sm overflow-hidden border border-[#8a9a7c]/15 rounded-lg shadow-sm">
            <div className="relative aspect-[21/9] overflow-hidden bg-[#e8ebe4]">
              <img
                src={travelInfo.usLocation.image}
                alt="Wyoming Landscape"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 40%' }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <Mountain className="w-5 h-5 text-white" />
                <h3 className="font-display text-2xl text-white tracking-wide drop-shadow-lg">
                  {travelInfo.usLocation.title}
                </h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-[#3d3d38] text-sm md:text-base mb-8 leading-relaxed">
                {travelInfo.usLocation.history}
              </p>

              {/* Venue & Map */}
              <div className="mb-8">
                <h4 className="text-[#5a6b50] font-medium mb-4 text-sm tracking-wider uppercase">
                  Wedding Venue: Tate Pumphouse
                </h4>
                <div className="rounded-lg overflow-hidden border border-[#8a9a7c]/15">
                  <iframe
                    title="Tate Pumphouse Map"
                    src={getMapSrc(selectedHotel)}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                {selectedHotel && (
                  <div className="mt-3 flex items-center justify-between bg-[#f0f4ed] p-3 rounded-lg border border-[#8a9a7c]/15">
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-[#6b7c5e]" />
                      <span className="text-[#3d3d38] text-sm">
                        Directions from <strong>{selectedHotel.name}</strong> to Tate Pumphouse
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={getDirectionsUrl(selectedHotel)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 bg-[#8a9a7c] text-white text-xs rounded-md hover:bg-[#6b7c5e] transition-colors"
                      >
                        Open in Maps <ExternalLink className="w-3 h-3" />
                      </a>
                      <button
                        onClick={() => setSelectedHotel(null)}
                        className="px-3 py-1.5 text-[#5a5a52] text-xs border border-[#8a9a7c]/20 rounded-md hover:bg-white transition-colors"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Hotels */}
              <div className="mb-8">
                <h4 className="text-[#5a6b50] font-medium mb-4 text-sm tracking-wider uppercase">
                  Recommended Hotels
                </h4>
                <p className="text-[#5a5a52] text-xs mb-4">
                  Click on a hotel to see directions from there to the venue.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {travelInfo.usLocation.hotels.map((hotel, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedHotel(hotel)}
                      className={`text-left p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
                        selectedHotel?.name === hotel.name 
                          ? 'bg-[#f0f4ed] border-[#8a9a7c]/40 shadow-sm' 
                          : 'bg-[#f8faf7] border-[#8a9a7c]/10 hover:border-[#8a9a7c]/30'
                      }`}
                      data-testid={`hotel-${index}`}
                    >
                      <div className="flex items-start gap-2">
                        <Hotel className={`w-4 h-4 mt-0.5 flex-shrink-0 ${selectedHotel?.name === hotel.name ? 'text-[#6b7c5e]' : 'text-[#8a9a7c]'}`} />
                        <div>
                          <h5 className="font-medium text-[#3d3d38] text-sm mb-1">{hotel.name}</h5>
                          <p className="text-[#5a5a52] text-xs">{hotel.address}</p>
                          <span className="inline-flex items-center gap-1 text-[#6b7c5e] text-xs mt-2">
                            <Navigation className="w-3 h-3" />
                            Get directions to venue
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Landmarks */}
              <h4 className="text-[#5a6b50] font-medium mb-4 text-sm tracking-wider uppercase">Places to Explore</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {travelInfo.usLocation.landmarks.map((landmark, index) => (
                  <div key={index} className="bg-[#f8faf7] p-4 border border-[#8a9a7c]/10 rounded-lg">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#6b7c5e] mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-[#3d3d38] text-sm mb-1">{landmark.name}</h5>
                        <p className="text-[#5a5a52] text-xs leading-relaxed">{landmark.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* India Section */}
        <div className="mb-16">
          <div className="bg-white/95 backdrop-blur-sm overflow-hidden border border-[#8a9a7c]/15 rounded-lg shadow-sm">
            <div className="relative aspect-[21/9] overflow-hidden bg-[#e8e4de]">
              <img
                src={travelInfo.indiaLocation.image}
                alt="Kolkata"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 35%' }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <Building className="w-5 h-5 text-white" />
                <h3 className="font-display text-2xl text-white tracking-wide drop-shadow-lg">
                  {travelInfo.indiaLocation.title}
                </h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-[#3d3d38] text-sm md:text-base mb-8 leading-relaxed">
                {travelInfo.indiaLocation.history}
              </p>
              
              <h4 className="text-[#5a6b50] font-medium mb-4 text-sm tracking-wider uppercase">Iconic Landmarks</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {travelInfo.indiaLocation.landmarks.map((landmark, index) => (
                  <div key={index} className="bg-[#faf8f4] p-4 border border-[#d4b896]/10 rounded-lg">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#6b7c5e] mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-[#3d3d38] text-sm mb-1">{landmark.name}</h5>
                        <p className="text-[#5a5a52] text-xs leading-relaxed">{landmark.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stay Tuned Notice */}
        <div className="bg-[#8a9a7c] text-white p-8 text-center rounded-lg">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Plane className="w-5 h-5" />
            <Heart className="w-4 h-4 fill-white" />
            <Plane className="w-5 h-5 -scale-x-100" />
          </div>
          <p className="font-cormorant text-xl md:text-2xl italic mb-4">
            "Love knows no distance"
          </p>
          <p className="text-white/95 text-sm leading-relaxed max-w-2xl mx-auto">
            {travelInfo.stayTuned}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;
