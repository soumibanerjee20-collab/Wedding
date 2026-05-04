import React from 'react';
import { travelInfo } from '../data/mock';
import { Plane, MapPin, Heart, Mountain, Building, Hotel } from 'lucide-react';
import { EucalyptusBranch, SingleLeaf, CornerVine } from '../components/LeafDecorations';

const TravelPage = () => {
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
            Travel & Accommodation
          </h1>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mb-6" />
          <p className="text-[#3d3d38] text-sm md:text-base tracking-wide max-w-xl mx-auto">
            {travelInfo.venue.description}
          </p>
        </div>

        {/* US Section */}
        <div className="mb-16">
          <div className="bg-white/95 backdrop-blur-sm overflow-hidden border border-[#8a9a7c]/15 rounded-lg shadow-sm">
            {/* Image - taller with contain to show full photo */}
            <div className="relative aspect-[21/9] overflow-hidden bg-[#e8ebe4]">
              <img
                src={travelInfo.usLocation.image}
                alt="Wyoming Landscape"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 40%' }}
              />
              {/* Gradient overlay at bottom for text readability */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <Mountain className="w-5 h-5 text-white" />
                <h3 className="font-display text-2xl text-white tracking-wide drop-shadow-lg">
                  {travelInfo.usLocation.title}
                </h3>
              </div>
            </div>
            <div className="p-8">
              {/* History */}
              <p className="text-[#3d3d38] text-sm md:text-base mb-8 leading-relaxed">
                {travelInfo.usLocation.history}
              </p>
              
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

              {/* Google Map */}
              <div className="mt-8">
                <h4 className="text-[#5a6b50] font-medium mb-4 text-sm tracking-wider uppercase">Find Casper, Wyoming</h4>
                <div className="rounded-lg overflow-hidden border border-[#8a9a7c]/15">
                  <iframe
                    title="Casper Wyoming Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185091.4572508484!2d-106.43089565!3d42.8501025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8760b0ae0e498525%3A0x3253e5e161fcfbec!2sCasper%2C%20WY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* India Section */}
        <div className="mb-16">
          <div className="bg-white/95 backdrop-blur-sm overflow-hidden border border-[#8a9a7c]/15 rounded-lg shadow-sm">
            {/* Image - taller with contain to show full photo */}
            <div className="relative aspect-[21/9] overflow-hidden bg-[#e8e4de]">
              <img
                src={travelInfo.indiaLocation.image}
                alt="Victoria Memorial, Kolkata"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 35%' }}
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <Building className="w-5 h-5 text-white" />
                <h3 className="font-display text-2xl text-white tracking-wide drop-shadow-lg">
                  {travelInfo.indiaLocation.title}
                </h3>
              </div>
            </div>
            <div className="p-8">
              {/* History */}
              <p className="text-[#3d3d38] text-sm md:text-base mb-8 leading-relaxed">
                {travelInfo.indiaLocation.history}
              </p>
              
              {/* Landmarks */}
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

        {/* Accommodation Section */}
        <div className="mb-12">
          <div className="bg-white/95 backdrop-blur-sm p-8 border border-[#8a9a7c]/15 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Hotel className="w-6 h-6 text-[#6b7c5e]" />
              <h3 className="font-display text-2xl text-[#b8956b] tracking-wide">
                Accommodation
              </h3>
            </div>
            <p className="text-[#3d3d38] text-sm md:text-base leading-relaxed mb-4">
              {travelInfo.accommodation.description}
            </p>
            <div className="inline-block px-4 py-2 bg-[#8a9a7c]/10 border border-[#8a9a7c]/30 rounded-full">
              <span className="text-[#5a6b50] text-sm font-medium">Details Coming Soon</span>
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
