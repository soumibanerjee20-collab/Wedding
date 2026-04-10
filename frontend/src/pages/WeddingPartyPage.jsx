import React from 'react';
import { weddingParty } from '../data/mock';
import { Heart, Sparkles, Crown, Shield } from 'lucide-react';
import { EucalyptusBranch, SingleLeaf, CornerVine } from '../components/LeafDecorations';

const WeddingPartyPage = () => {
  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Faded outdoor wedding photo background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1769812344142-00c7f6584885?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-[#faf8f4]/[0.91]" />
      </div>

      {/* Leaf Decorations */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <EucalyptusBranch className="absolute top-20 left-0 w-24 md:w-32 h-auto text-[#8a9a7c]" />
        <EucalyptusBranch className="absolute top-20 right-0 w-24 md:w-32 h-auto text-[#8a9a7c]" flip />
        <SingleLeaf className="absolute top-1/3 right-8 w-10 h-14 text-[#8a9a7c] -rotate-12" />
        <SingleLeaf className="absolute top-2/3 left-6 w-8 h-12 text-[#8a9a7c] rotate-20" />
        <CornerVine className="absolute bottom-0 left-0 w-40 md:w-56 h-auto text-[#8a9a7c]" />
        <CornerVine className="absolute bottom-0 right-0 w-40 md:w-56 h-auto text-[#8a9a7c]" flip />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            Wedding Party
          </h1>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mb-6" />
          <p className="font-cormorant text-xl md:text-2xl text-[#3d3d38] italic max-w-2xl mx-auto">
            The incredible humans standing beside us as we say "I do" in Wyoming
          </p>
          <p className="text-[#6b7c5e] text-sm mt-3 tracking-wide">
            August 8, 2026 &bull; Casper, Wyoming
          </p>
        </div>

        {/* Two sides */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Bride's Side */}
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/80 mb-4 shadow-sm">
                <Crown className="w-7 h-7 text-[#8a9a7c]" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-[#b8956b] mb-2 tracking-wide">
                {weddingParty.bridesSide.title}
              </h2>
              <p className="font-cormorant text-lg text-[#5a5a52] italic">
                {weddingParty.bridesSide.subtitle}
              </p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="w-8 h-[1px] bg-[#d4b896]" />
                <Heart className="w-4 h-4 text-[#b8956b] fill-[#b8956b]" />
                <div className="w-8 h-[1px] bg-[#d4b896]" />
              </div>
            </div>

            <div className="space-y-5">
              {weddingParty.bridesSide.members.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-[#8a9a7c]/15 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    {member.photo && (
                      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#d4b896]/30 shadow-sm">
                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover" style={{ objectPosition: 'center 20%' }} />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="w-4 h-4 text-[#b8956b]" />
                        <span className="text-[#8a9a7c] text-xs font-semibold tracking-[0.2em] uppercase">
                          {member.role}
                        </span>
                      </div>
                      <h3 className="font-display text-xl text-[#3d3d38] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[#6b7c5e] text-sm italic">
                        {member.relation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Groom's Side */}
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/80 mb-4 shadow-sm">
                <Shield className="w-7 h-7 text-[#8a9a7c]" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-[#b8956b] mb-2 tracking-wide">
                {weddingParty.groomsSide.title}
              </h2>
              <p className="font-cormorant text-lg text-[#5a5a52] italic">
                {weddingParty.groomsSide.subtitle}
              </p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="w-8 h-[1px] bg-[#d4b896]" />
                <Heart className="w-4 h-4 text-[#b8956b] fill-[#b8956b]" />
                <div className="w-8 h-[1px] bg-[#d4b896]" />
              </div>
            </div>

            <div className="space-y-5">
              {weddingParty.groomsSide.members.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-[#8a9a7c]/15 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <Sparkles className="w-4 h-4 text-[#b8956b]" />
                    <span className="text-[#8a9a7c] text-xs font-semibold tracking-[0.2em] uppercase">
                      {member.role}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-[#3d3d38] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#6b7c5e] text-sm italic">
                    {member.relation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indian Wedding Note */}
        <div className="mt-16 text-center">
          <div className="bg-white/85 backdrop-blur-sm p-8 rounded-lg border border-[#d4b896]/20 max-w-2xl mx-auto">
            <Sparkles className="w-6 h-6 text-[#D4740C] mx-auto mb-3" />
            <h3 className="font-display text-xl text-[#B8540B] mb-3 tracking-wide">
              Indian Wedding, Kolkata
            </h3>
            <p className="text-[#3d3d38] text-sm leading-relaxed">
              For our Indian celebration, every family member and friend is part of the wedding party. 
              In Bengali tradition, the entire community comes together to bless the couple — no roles needed, 
              just love, laughter, and togetherness.
            </p>
            <p className="text-[#5a5a52] text-xs mt-3 italic">
              November 5-6, 2027 (Tentative) &bull; Kolkata, India
            </p>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center">
          <div className="bg-[#8a9a7c] text-white p-8 rounded-lg">
            <Heart className="w-5 h-5 fill-white mx-auto mb-3" />
            <p className="font-cormorant text-xl md:text-2xl italic">
              "Here's to the ones who make our love story even more beautiful — we couldn't do forever without you."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingPartyPage;
