import React from 'react';
import { Heart } from 'lucide-react';
import { EucalyptusBranch, SingleLeaf, CornerVine } from '../components/LeafDecorations';

const WeDidItPage = () => {
  return (
    <div className="min-h-screen pt-20 relative">
      {/* Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://customer-assets-gfyr7b9c.emergentagent.net/job_1fed53a0-2d6d-4184-bdb5-20bc5b105bf6/artifacts/31wcto03_4425205_lg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#faf8f4]/87" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Leaf Decorations */}
        <EucalyptusBranch className="absolute top-20 left-0 w-20 md:w-28 h-auto text-[#8a9a7c]" />
        <EucalyptusBranch className="absolute top-20 right-0 w-20 md:w-28 h-auto text-[#8a9a7c]" flip />
        <SingleLeaf className="absolute top-1/3 right-6 w-8 h-12 text-[#8a9a7c] -rotate-12" />
        <CornerVine className="absolute bottom-0 left-0 w-36 md:w-44 h-auto text-[#8a9a7c]" />
        <CornerVine className="absolute bottom-0 right-0 w-36 md:w-44 h-auto text-[#8a9a7c]" flip />

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            We Did It!
          </h1>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mb-6" />
          <p className="font-cormorant text-xl md:text-2xl text-[#3d3d38] italic">
            September 25, 2026 · Casper, Wyoming
          </p>
        </div>

        {/* Wedding Photo */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white p-3 pb-14 shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://customer-assets-gfyr7b9c.emergentagent.net/job_1fed53a0-2d6d-4184-bdb5-20bc5b105bf6/artifacts/zmyvd9nw_8b42de1b-d6e3-4d87-9c27-b5a1eeac1404.jpeg"
              alt="Our wedding day"
              className="w-full h-80 md:h-96 object-cover"
              style={{ objectPosition: 'center 40%' }}
            />
            <p className="absolute bottom-4 left-0 right-0 text-center font-caveat text-lg text-[#5a5a52]" style={{ fontFamily: "'Caveat', cursive" }}>
              Mr. & Mrs. Adams · 09.25.2026
            </p>
          </div>
        </div>

        {/* The Story */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-sm border border-[#d4b896]/15">
            <Heart className="w-8 h-8 text-[#b8956b] mx-auto mb-5 fill-[#b8956b]/20" />
            <p className="text-[#3d3d38] text-base md:text-lg leading-relaxed mb-6">
              We're happy to share that we were married in a private ceremony in Wyoming on September 25, 2026. Our wedding day was a small and private occasion, filled with love and the wide Wyoming sky above us.
            </p>
            <p className="text-[#3d3d38] text-base md:text-lg leading-relaxed mb-6">
              After years of long distance, immigration paperwork, and 7 time zones, we finally said "I do." It was intimate, it was us, and it was perfect.
            </p>
            <p className="text-[#5a5a52] text-sm leading-relaxed">
              Now we want to celebrate with everyone who has been part of our journey. Please join us for an Open House Celebration on October 24, 2026 at our home in Casper.
            </p>
          </div>
        </div>

        {/* More Wedding Photos */}
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          <div className="bg-white p-2 pb-10 shadow-lg -rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://customer-assets-gfyr7b9c.emergentagent.net/job_1fed53a0-2d6d-4184-bdb5-20bc5b105bf6/artifacts/9kohm48g_1000051286.webp"
              alt="Wedding ceremony"
              className="w-full h-48 md:h-64 object-cover"
              style={{ objectPosition: 'center 30%' }}
            />
          </div>
          <div className="bg-white p-2 pb-10 shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://customer-assets-gfyr7b9c.emergentagent.net/job_1fed53a0-2d6d-4184-bdb5-20bc5b105bf6/artifacts/gyu71a3d_1000051284.webp"
              alt="Wedding ceremony"
              className="w-full h-48 md:h-64 object-cover"
              style={{ objectPosition: 'center 30%' }}
            />
          </div>
        </div>

        {/* With Love */}
        <div className="text-center">
          <p className="font-cormorant text-xl text-[#5a5a52] italic mb-2">With love,</p>
          <p className="font-display text-2xl text-[#b8956b] tracking-wider mb-6">Jimmy & Soumi</p>
          <div className="text-[#5a5a52] text-sm">
            <p className="italic">With love from our families:</p>
            <p className="mt-1">Somnath & Swapna Banerjee</p>
            <p>Mark & Judy Adams</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeDidItPage;
