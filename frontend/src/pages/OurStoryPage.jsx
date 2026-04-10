import React from 'react';
import { Link } from 'react-router-dom';
import { ourStory, brideProfile, groomProfile } from '../data/mock';
import { GraduationCap, ArrowRight, Heart } from 'lucide-react';
import { EucalyptusBranch, CornerVine } from '../components/LeafDecorations';

const OurStoryPage = () => {
  return (
    <div className="min-h-screen bg-[#faf8f4]">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Strong overlay */}
        <div className="absolute inset-0 bg-[#faf8f4]/96" />

        {/* Leaf decorations */}
        <EucalyptusBranch className="absolute top-16 left-0 w-24 md:w-28 h-auto text-[#8a9a7c]" />
        <EucalyptusBranch className="absolute top-16 right-0 w-24 md:w-28 h-auto text-[#8a9a7c]" flip />
        <CornerVine className="absolute bottom-0 left-0 w-36 md:w-44 h-auto text-[#8a9a7c]" />
        <CornerVine className="absolute bottom-0 right-0 w-36 md:w-44 h-auto text-[#8a9a7c]" flip />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="bg-[#faf8f4]/85 backdrop-blur-md p-12 rounded-lg">
          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl text-[#b8956b] mb-8 tracking-wider">
            Our Story
          </h1>

          {/* Tagline */}
          <p className="font-cormorant text-xl md:text-2xl lg:text-3xl text-[#3d3d38] italic mb-12 leading-relaxed">
            {ourStory.tagline}
          </p>

          {/* Narrative */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-[#3d3d38] text-lg md:text-xl leading-relaxed">
              <span className="text-[#b8956b] font-medium">{ourStory.meetingDate}</span> • <span className="text-[#5a6b50] font-medium">{ourStory.meetingPlace}</span>
            </p>
            <p className="text-[#3d3d38] text-lg md:text-xl leading-relaxed mt-4">
              {ourStory.narrative}
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/timeline"
            className="inline-flex items-center gap-3 bg-[#8a9a7c] text-white px-8 py-4 rounded-full text-sm tracking-wider hover:bg-[#6b7c5e] transition-colors duration-300 group shadow-md"
          >
            Discover Their Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          </div>
        </div>
      </section>

      {/* Couple Profiles Section */}
      <section className="py-24 bg-[#faf8f4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-12">
            {/* Bride Profile Card */}
            <div className="bg-white/95 backdrop-blur-sm p-10 max-w-md w-full text-center shadow-sm border border-[#8a9a7c]/15 rounded-lg">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#f0f4ed] flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-[#6b7c5e]" />
                </div>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-[#b8956b] tracking-wider mb-6">
                {brideProfile.name}
              </h2>
              <div className="space-y-3">
                <p className="text-sm font-medium text-[#5a6b50]">{brideProfile.origin}</p>
                <p className="text-sm italic text-[#3d3d38]">{brideProfile.description}</p>
                <p className="text-sm text-[#3d3d38]">{brideProfile.education}</p>
                <p className="text-sm text-[#5a5a52]">{brideProfile.career}</p>
              </div>
            </div>

            {/* Heart Divider */}
            <div className="flex md:flex-col items-center justify-center py-4 md:py-0">
              <Heart className="w-8 h-8 text-[#b8956b] fill-[#b8956b]" />
            </div>

            {/* Groom Profile Card */}
            <div className="bg-white/95 backdrop-blur-sm p-10 max-w-md w-full text-center shadow-sm border border-[#8a9a7c]/15 rounded-lg">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#f0f4ed] flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-[#6b7c5e]" />
                </div>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-[#b8956b] tracking-wider mb-6">
                {groomProfile.name}
              </h2>
              <div className="space-y-3">
                <p className="text-sm font-medium text-[#5a6b50]">{groomProfile.origin}</p>
                <p className="text-sm italic text-[#3d3d38]">{groomProfile.description}</p>
                <p className="text-sm text-[#3d3d38]">{groomProfile.education}</p>
                <p className="text-sm text-[#5a5a52]">{groomProfile.career}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;
