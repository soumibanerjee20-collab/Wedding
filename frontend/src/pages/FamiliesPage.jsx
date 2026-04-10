import React from 'react';
import { families } from '../data/mock';
import { Heart, Dog } from 'lucide-react';
import { EucalyptusBranch, SingleLeaf, CornerVine } from '../components/LeafDecorations';

const FamiliesPage = () => {
  return (
    <div className="min-h-screen bg-[#faf8f4] pt-24 pb-16 relative overflow-hidden">
      {/* Leaf Decorations */}
      <EucalyptusBranch className="absolute top-20 left-0 w-24 md:w-32 h-auto text-[#8a9a7c]" />
      <EucalyptusBranch className="absolute top-20 right-0 w-24 md:w-32 h-auto text-[#8a9a7c]" flip />
      <CornerVine className="absolute bottom-0 left-0 w-40 md:w-56 h-auto text-[#8a9a7c]" />
      <CornerVine className="absolute bottom-0 right-0 w-40 md:w-56 h-auto text-[#8a9a7c]" flip />
      <SingleLeaf className="absolute top-1/3 left-8 w-10 h-14 text-[#8a9a7c] rotate-12" />
      <SingleLeaf className="absolute top-1/2 right-10 w-12 h-16 text-[#8a9a7c] -rotate-12" />
      <SingleLeaf className="absolute bottom-1/4 left-16 w-8 h-12 text-[#8a9a7c] rotate-45" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            Our Families
          </h1>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mb-6" />
          <p className="text-[#3d3d38] text-sm md:text-base tracking-wide">
            The ones who shaped us into who we are today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Bride's Family */}
          <div>
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl text-[#b8956b] mb-1 tracking-wide">
                {families.bride.title}
              </h3>
              <p className="text-[#6b7c5e] text-sm italic mb-3">{families.bride.subtitle}</p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-[1px] bg-[#d4b896]" />
                <Heart className="w-4 h-4 text-[#b8956b]" />
                <div className="w-8 h-[1px] bg-[#d4b896]" />
              </div>
            </div>
            <div className="space-y-5">
              {families.bride.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#8a9a7c]/15 rounded-lg"
                >
                  <div className="flex items-start gap-4">
                    {member.isFurry && (
                      <div className="w-12 h-12 rounded-full bg-[#f0f4ed] flex items-center justify-center flex-shrink-0">
                        <Dog className="w-6 h-6 text-[#6b7c5e]" />
                      </div>
                    )}
                    <div className={member.isFurry ? '' : 'w-full'}>
                      <h4 className="font-display text-lg text-[#b8956b] mb-1">
                        {member.name}
                      </h4>
                      <p className="text-[#6b7c5e] text-sm mb-2 italic font-medium">
                        {member.relation}
                      </p>
                      <p className="text-[#3d3d38] text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Groom's Family */}
          <div>
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl text-[#b8956b] mb-1 tracking-wide">
                {families.groom.title}
              </h3>
              <p className="text-[#6b7c5e] text-sm italic mb-3">{families.groom.subtitle}</p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-[1px] bg-[#d4b896]" />
                <Heart className="w-4 h-4 text-[#b8956b]" />
                <div className="w-8 h-[1px] bg-[#d4b896]" />
              </div>
            </div>
            <div className="space-y-5">
              {families.groom.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#8a9a7c]/15 rounded-lg"
                >
                  <h4 className="font-display text-lg text-[#b8956b] mb-1">
                    {member.name}
                  </h4>
                  <p className="text-[#6b7c5e] text-sm mb-2 italic font-medium">
                    {member.relation}
                  </p>
                  <p className="text-[#3d3d38] text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamiliesPage;
