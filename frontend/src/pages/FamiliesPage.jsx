import React from 'react';
import { families } from '../data/mock';
import { Heart } from 'lucide-react';

const FamiliesPage = () => {
  return (
    <div className="min-h-screen bg-[#faf9f6] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-[#5a6a4d] mb-4 tracking-wider">
            Our Families
          </h1>
          <div className="w-24 h-[1px] bg-[#9a7c4e] mx-auto mb-6" />
          <p className="text-[#5a6a4d]/70 text-sm tracking-wide">
            The ones who shaped us into who we are today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Bride's Family */}
          <div>
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl text-[#5a6a4d] mb-1 tracking-wide">
                {families.bride.title}
              </h3>
              <p className="text-[#9a7c4e] text-sm italic mb-3">{families.bride.subtitle}</p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-[1px] bg-[#c9b896]" />
                <Heart className="w-4 h-4 text-[#9a7c4e]" />
                <div className="w-8 h-[1px] bg-[#c9b896]" />
              </div>
            </div>
            <div className="space-y-5">
              {families.bride.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h4 className="font-display text-lg text-[#5a6a4d] mb-1">
                    {member.name}
                  </h4>
                  <p className="text-[#9a7c4e] text-sm mb-2 italic">
                    {member.relation}
                  </p>
                  <p className="text-[#5a6a4d]/70 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Groom's Family */}
          <div>
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl text-[#5a6a4d] mb-1 tracking-wide">
                {families.groom.title}
              </h3>
              <p className="text-[#9a7c4e] text-sm italic mb-3">{families.groom.subtitle}</p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-[1px] bg-[#c9b896]" />
                <Heart className="w-4 h-4 text-[#9a7c4e]" />
                <div className="w-8 h-[1px] bg-[#c9b896]" />
              </div>
            </div>
            <div className="space-y-5">
              {families.groom.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h4 className="font-display text-lg text-[#5a6a4d] mb-1">
                    {member.name}
                  </h4>
                  <p className="text-[#9a7c4e] text-sm mb-2 italic">
                    {member.relation}
                  </p>
                  <p className="text-[#5a6a4d]/70 text-sm leading-relaxed">
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
