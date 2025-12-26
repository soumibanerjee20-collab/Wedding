import React from 'react';
import { Link } from 'react-router-dom';
import { ourStory, brideProfile, groomProfile } from '../data/mock';
import { GraduationCap, ArrowRight, Heart } from 'lucide-react';

const OurStoryPage = () => {
  return (
    <div className="min-h-screen bg-[#faf8f4]">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center pt-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Strong overlay */}
        <div className="absolute inset-0 bg-[#faf8f4]/95" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl text-[#b8956b] mb-8 tracking-wider">
            Our Story
          </h1>

          {/* Tagline */}
          <p className="font-cormorant text-xl md:text-2xl lg:text-3xl text-[#5a5a52] italic mb-12 leading-relaxed">
            {ourStory.tagline}
          </p>

          {/* Narrative */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-[#5a5a52] text-lg md:text-xl leading-relaxed font-light">
              <span className="text-[#b8956b] font-medium">{ourStory.meetingDate}</span> • <span className="text-[#8a9a7c]">{ourStory.meetingPlace}</span>
            </p>
            <p className="text-[#5a5a52] text-lg md:text-xl leading-relaxed font-light mt-4">
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
      </section>

      {/* Couple Profiles Section */}
      <section className="py-24 bg-[#faf8f4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-12">
            {/* Bride Profile Card */}
            <div className="bg-white p-10 max-w-md w-full text-center shadow-sm border border-[#d4b896]/20">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#f5f2eb] flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-[#8a9a7c]" />
                </div>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-[#b8956b] tracking-wider mb-6">
                {brideProfile.name}
              </h2>
              <div className="space-y-3 text-[#5a5a52]">
                <p className="text-sm font-medium text-[#8a9a7c]">{brideProfile.origin}</p>
                <p className="text-sm italic">{brideProfile.description}</p>
                <p className="text-sm">{brideProfile.education}</p>
                <p className="text-sm text-[#7a7a72]">{brideProfile.career}</p>
              </div>
            </div>

            {/* Heart Divider */}
            <div className="flex md:flex-col items-center justify-center py-4 md:py-0">
              <Heart className="w-8 h-8 text-[#b8956b] fill-[#b8956b]" />
            </div>

            {/* Groom Profile Card */}
            <div className="bg-white p-10 max-w-md w-full text-center shadow-sm border border-[#d4b896]/20">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#f5f2eb] flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-[#8a9a7c]" />
                </div>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-[#b8956b] tracking-wider mb-6">
                {groomProfile.name}
              </h2>
              <div className="space-y-3 text-[#5a5a52]">
                <p className="text-sm font-medium text-[#8a9a7c]">{groomProfile.origin}</p>
                <p className="text-sm italic">{groomProfile.description}</p>
                <p className="text-sm">{groomProfile.education}</p>
                <p className="text-sm text-[#7a7a72]">{groomProfile.career}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;
