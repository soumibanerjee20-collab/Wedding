import React from 'react';
import { Link } from 'react-router-dom';
import { ourStory, brideProfile, groomProfile } from '../data/mock';
import { GraduationCap, ArrowRight, Heart } from 'lucide-react';

const OurStoryPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with London/Big Ben Background */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center pt-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#f8f6f2]/95" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl text-[#5a6a4d] mb-8 tracking-wider">
            OUR STORY
          </h1>

          {/* Tagline */}
          <p className="font-cormorant text-xl md:text-2xl lg:text-3xl text-[#5a6a4d]/80 italic mb-12 leading-relaxed">
            {ourStory.tagline}
          </p>

          {/* Narrative */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-[#5a6a4d]/90 text-lg md:text-xl leading-relaxed font-light">
              {ourStory.meetingDate}. {ourStory.meetingPlace}. {ourStory.narrative}
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/timeline"
            className="inline-flex items-center gap-3 bg-[#6b7c5e] text-white px-8 py-4 rounded-full text-sm tracking-wider hover:bg-[#5a6a4d] transition-colors duration-300 group shadow-md"
          >
            Discover Their Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Couple Profiles Section */}
      <section
        className="relative py-24"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#f8f6f2]/95" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-12">
            {/* Bride Profile Card */}
            <div className="bg-white/95 backdrop-blur-sm p-10 max-w-md w-full text-center shadow-sm">
              <div className="flex justify-center mb-6">
                <GraduationCap className="w-10 h-10 text-[#6b7c5e]" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-[#5a6a4d] tracking-wider mb-6 small-caps">
                {brideProfile.name}
              </h2>
              <div className="space-y-3 text-[#5a6a4d]/80">
                <p className="text-sm">{brideProfile.origin}</p>
                <p className="text-sm italic">{brideProfile.description}</p>
                <p className="text-sm">{brideProfile.education}</p>
                <p className="text-sm">{brideProfile.career}</p>
              </div>
            </div>

            {/* Heart Divider */}
            <div className="flex md:flex-col items-center justify-center py-4 md:py-0">
              <Heart className="w-8 h-8 text-[#6b7c5e] fill-[#6b7c5e]" />
            </div>

            {/* Groom Profile Card */}
            <div className="bg-white/95 backdrop-blur-sm p-10 max-w-md w-full text-center shadow-sm">
              <div className="flex justify-center mb-6">
                <GraduationCap className="w-10 h-10 text-[#6b7c5e]" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-[#5a6a4d] tracking-wider mb-6 small-caps">
                {groomProfile.name}
              </h2>
              <div className="space-y-3 text-[#5a6a4d]/80">
                <p className="text-sm">{groomProfile.origin}</p>
                <p className="text-sm italic">{groomProfile.description}</p>
                <p className="text-sm">{groomProfile.education}</p>
                <p className="text-sm">{groomProfile.career}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;
