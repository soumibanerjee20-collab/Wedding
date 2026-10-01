import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Heart, MapPin, Shirt, PartyPopper } from 'lucide-react';
import { EucalyptusBranch, SingleLeaf, CornerVine } from '../components/LeafDecorations';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSco4SeHrvid7DFmzBbOFzdoOeRf0Dz7sEo0O10QpkpSZvga4g/viewform?embedded=true';

const RSVPPage = () => {
  const [searchParams] = useSearchParams();
  const isDirect = searchParams.get('direct') === 'true';
  const [showForm, setShowForm] = useState(isDirect);
  const [formLoaded, setFormLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf8f4] pt-20 pb-16 relative overflow-hidden">
      {/* Leaf Decorations */}
      <EucalyptusBranch className="absolute top-20 left-0 w-20 md:w-28 h-auto text-[#8a9a7c]" />
      <EucalyptusBranch className="absolute top-20 right-0 w-20 md:w-28 h-auto text-[#8a9a7c]" flip />
      <SingleLeaf className="absolute top-1/4 right-6 w-8 h-12 text-[#8a9a7c] -rotate-12" />
      <CornerVine className="absolute bottom-0 left-0 w-36 md:w-44 h-auto text-[#8a9a7c]" />
      <CornerVine className="absolute bottom-0 right-0 w-36 md:w-44 h-auto text-[#8a9a7c]" flip />

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10" data-testid="rsvp-header">
          <Heart className="w-8 h-8 text-[#b8956b] mx-auto mb-4 fill-[#b8956b]/20" />
          <h1 className="font-display text-4xl md:text-5xl text-[#b8956b] mb-3 tracking-wider">
            RSVP
          </h1>
          <div className="w-20 h-[1px] bg-[#b8956b] mx-auto mb-4" />
          <p className="font-cormorant text-lg md:text-xl text-[#3d3d38] italic max-w-lg mx-auto">
            We can't wait to celebrate with you! Please let us know if you'll be joining us.
          </p>
        </div>

        {/* Event Info Card */}
        {!showForm && (
          <div className="max-w-xl mx-auto mb-8" data-testid="rsvp-event-card">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm border border-[#8a9a7c]/20">
              <div className="w-12 h-12 bg-[#f0f4ed] rounded-full flex items-center justify-center mx-auto mb-4">
                <PartyPopper className="w-6 h-6 text-[#6b7c5e]" />
              </div>
              <h2 className="font-display text-2xl text-[#5a6b50] mb-4 tracking-wide text-center">
                Wedding Reception & Open House
              </h2>
              <div className="space-y-2 text-center mb-5">
                <div className="flex items-center justify-center gap-2 text-[#3d3d38]">
                  <Calendar className="w-4 h-4 text-[#6b7c5e]" />
                  <span className="font-medium">Saturday, October 24, 2026</span>
                </div>
                <p className="text-[#5a5a52] text-sm">1:00 PM to 5:00 PM</p>
                <div className="flex items-center justify-center gap-2 text-[#3d3d38]">
                  <MapPin className="w-4 h-4 text-[#6b7c5e]" />
                  <span>4450 Smoke Rise Road, Casper, WY 82604</span>
                </div>
              </div>

              <div className="w-12 h-[1px] bg-[#b8956b]/30 mx-auto mb-5" />

              {/* Quick Info */}
              <div className="mb-6">
                <div className="bg-[#f0f4ed]/60 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Shirt className="w-4 h-4 text-[#6b7c5e]" />
                    <span className="text-[#5a6b50] font-medium text-sm">Dress Code</span>
                  </div>
                  <p className="text-[#3d3d38] text-sm">
                    Casual and comfortable. Come as you are!
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-[#8a9a7c] hover:bg-[#6b7c5e] text-white py-3.5 rounded-lg text-sm tracking-wider transition-all duration-300 shadow-md"
                data-testid="rsvp-open-form-btn"
              >
                RSVP for Open House
              </button>
            </div>
          </div>
        )}

        {/* Embedded Google Form */}
        {showForm && (
          <div className="max-w-2xl mx-auto" data-testid="rsvp-google-form">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-[#8a9a7c]/20 overflow-hidden">
              {/* Loading indicator */}
              {!formLoaded && (
                <div className="flex items-center justify-center py-16">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-[#8a9a7c] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                    <p className="text-[#5a5a52] text-sm">Loading RSVP form...</p>
                  </div>
                </div>
              )}
              <iframe
                src={GOOGLE_FORM_URL}
                title="RSVP Form"
                className="w-full border-0"
                style={{ 
                  height: formLoaded ? '1050px' : '0px',
                  transition: 'height 0.3s ease',
                }}
                onLoad={() => setFormLoaded(true)}
              >
                Loading...
              </iframe>
            </div>

            {/* Back button */}
            {!isDirect && (
              <div className="text-center mt-6">
                <button
                  onClick={() => { setShowForm(false); setFormLoaded(false); }}
                  className="text-[#5a5a52] text-sm hover:text-[#b8956b] transition-colors"
                >
                  Back to event details
                </button>
              </div>
            )}
          </div>
        )}

        {/* Bottom note */}
        <div className="max-w-xl mx-auto mt-10 text-center">
          <p className="text-[#5a5a52] text-xs">
            Having trouble with the form? You can also RSVP by texting or calling Jimmy & Soumi directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RSVPPage;
