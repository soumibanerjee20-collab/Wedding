import React from 'react';
import { rsvpInfo, coupleInfo } from '../data/mock';
import { Calendar, Heart, Camera, Mail, QrCode } from 'lucide-react';

const RSVPPage = () => {
  return (
    <div className="min-h-screen bg-[#faf8f4] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            RSVP
          </h1>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mb-6" />
          <p className="text-[#5a5a52] text-sm tracking-wide font-light max-w-xl mx-auto">
            {rsvpInfo.description}
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* US Event */}
          <div className="bg-white p-8 shadow-sm border border-[#d4b896]/20">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-[#8a9a7c]" />
              <h3 className="font-display text-xl text-[#b8956b] tracking-wide">
                {rsvpInfo.usEvent.title}
              </h3>
            </div>
            <p className="text-[#5a5a52] text-sm mb-6 font-light">
              {rsvpInfo.usEvent.description}
            </p>
            <div className="inline-block px-4 py-2 bg-[#f5f2eb] border border-[#d4b896]/30 rounded-full">
              <span className="text-[#b8956b] text-sm font-medium">{rsvpInfo.usEvent.status}</span>
            </div>
          </div>

          {/* India Event */}
          <div className="bg-white p-8 shadow-sm border border-[#d4b896]/20">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-[#8a9a7c]" />
              <h3 className="font-display text-xl text-[#b8956b] tracking-wide">
                {rsvpInfo.indiaEvent.title}
              </h3>
            </div>
            <p className="text-[#5a5a52] text-sm mb-6 font-light">
              {rsvpInfo.indiaEvent.description}
            </p>
            <div className="inline-block px-4 py-2 bg-[#f5f2eb] border border-[#d4b896]/30 rounded-full">
              <span className="text-[#b8956b] text-sm font-medium">{rsvpInfo.indiaEvent.status}</span>
            </div>
          </div>
        </div>

        {/* Photo Sharing Section */}
        <div className="bg-white p-8 shadow-sm border border-[#d4b896]/20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="w-6 h-6 text-[#8a9a7c]" />
            <h3 className="font-display text-xl text-[#b8956b] tracking-wide">
              {rsvpInfo.photoShare.title}
            </h3>
          </div>
          <p className="text-[#5a5a52] text-sm mb-6 font-light">
            {rsvpInfo.photoShare.description}
          </p>
          <div className="flex items-center gap-4 p-4 bg-[#f5f2eb] rounded-sm">
            <QrCode className="w-12 h-12 text-[#b8956b]/30" />
            <div>
              <p className="text-[#5a5a52] text-sm font-medium">QR Code for Photo Upload</p>
              <p className="text-[#7a7a72] text-xs">Will be available at the venue</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#8a9a7c] text-white p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-5 h-5" />
            <Heart className="w-4 h-4 fill-white" />
          </div>
          <p className="font-cormorant text-xl italic mb-4">
            Questions? We'd love to hear from you!
          </p>
          <p className="text-white/90 text-sm">
            Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RSVPPage;
