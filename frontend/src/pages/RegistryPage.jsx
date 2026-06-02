import React from 'react';
import { Gift, ExternalLink, Heart } from 'lucide-react';
import { EucalyptusBranch, SingleLeaf, CornerVine } from '../components/LeafDecorations';

const RegistryPage = () => {
  return (
    <div className="min-h-screen bg-[#faf8f4] pt-24 pb-16 relative overflow-hidden">
      {/* Leaf Decorations */}
      <EucalyptusBranch className="absolute top-20 left-0 w-20 md:w-28 h-auto text-[#8a9a7c]" />
      <EucalyptusBranch className="absolute top-20 right-0 w-20 md:w-28 h-auto text-[#8a9a7c]" flip />
      <SingleLeaf className="absolute top-1/3 right-6 w-8 h-12 text-[#8a9a7c] -rotate-12" />
      <SingleLeaf className="absolute bottom-1/4 left-8 w-7 h-10 text-[#8a9a7c] rotate-25" />
      <CornerVine className="absolute bottom-0 left-0 w-36 md:w-44 h-auto text-[#8a9a7c]" />
      <CornerVine className="absolute bottom-0 right-0 w-36 md:w-44 h-auto text-[#8a9a7c]" flip />

      <div className="max-w-2xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            Registry
          </h1>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mb-6" />
        </div>

        {/* Message */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#f0f4ed] rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-[#8a9a7c]" />
          </div>
          <p className="font-cormorant text-2xl md:text-3xl text-[#3d3d38] italic mb-6 leading-relaxed">
            Your presence is truly the greatest gift we could ask for.
          </p>
          <p className="text-[#5a5a52] text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Just having you there to celebrate with us means the world. However, if you'd like to bless us with a gift as we start our new life together, we've put together a small registry.
          </p>
        </div>

        {/* Amazon Registry Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-sm border border-[#8a9a7c]/15 text-center">
          <div className="w-14 h-14 bg-[#f0f4ed] rounded-full flex items-center justify-center mx-auto mb-5">
            <Gift className="w-7 h-7 text-[#6b7c5e]" />
          </div>
          <h3 className="font-display text-2xl text-[#3d3d38] mb-3 tracking-wide">
            Amazon Wedding Registry
          </h3>
          <p className="text-[#5a5a52] text-sm mb-6">
            A few things we've picked out to help us start this next chapter together.
          </p>
          <a
            href="https://www.amazon.com/wedding/share/soumiandjameswedding2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8a9a7c] text-white px-8 py-3.5 rounded-full text-sm tracking-wider hover:bg-[#6b7c5e] transition-all duration-300 shadow-md hover:shadow-lg"
            data-testid="registry-link"
          >
            <span>View Our Registry</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-10">
          <p className="text-[#7a7a72] text-sm italic">
            Thank you for your love and generosity. We are so grateful for each of you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistryPage;
