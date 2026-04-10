import React from 'react';
import { families } from '../data/mock';
import { Heart, Dog } from 'lucide-react';

const FamiliesPage = () => {
  return (
    <div className="min-h-screen bg-[#faf8f4] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            Our Families
          </h1>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mb-6" />
          <p className="text-[#5a5a52] text-sm tracking-wide font-light">
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
              <p className="text-[#8a9a7c] text-sm italic mb-3">{families.bride.subtitle}</p>
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
                  className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#d4b896]/10"
                >
                  <div className="flex items-start gap-4">
                    {member.isFurry && (
                      <div className="w-12 h-12 rounded-full bg-[#f5f2eb] flex items-center justify-center flex-shrink-0">
                        <Dog className="w-6 h-6 text-[#8a9a7c]" />
                      </div>
                    )}
                    <div className={member.isFurry ? '' : 'w-full'}>
                      <h4 className="font-display text-lg text-[#b8956b] mb-1">
                        {member.name}
                      </h4>
                      <p className="text-[#8a9a7c] text-sm mb-2 italic">
                        {member.relation}
                      </p>
                      <p className="text-[#5a5a52] text-sm leading-relaxed font-light">
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
              <p className="text-[#8a9a7c] text-sm italic mb-3">{families.groom.subtitle}</p>
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
                  className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#d4b896]/10"
                >
                  <h4 className="font-display text-lg text-[#b8956b] mb-1">
                    {member.name}
                  </h4>
                  <p className="text-[#8a9a7c] text-sm mb-2 italic">
                    {member.relation}
                  </p>
                  <p className="text-[#5a5a52] text-sm leading-relaxed font-light">
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
