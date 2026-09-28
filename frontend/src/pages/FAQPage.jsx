import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { EucalyptusBranch, SingleLeaf, CornerVine } from '../components/LeafDecorations';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className="rounded-lg overflow-hidden transition-all duration-300"
      style={{ 
        background: isOpen ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.7)',
        border: isOpen ? '1px solid rgba(184,149,107,0.2)' : '1px solid rgba(184,149,107,0.08)',
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200"
        data-testid={`faq-${question.slice(0, 20).toLowerCase().replace(/\s/g, '-')}`}
      >
        <span className="font-cormorant text-lg md:text-xl text-[#3d3d38] pr-4">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-[#b8956b] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '300px' : '0', opacity: isOpen ? 1 : 0 }}
      >
        <p className="px-6 pb-5 text-sm md:text-base text-[#5a5a52] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-[#faf8f4] pt-24 pb-16 relative overflow-hidden">
      {/* Leaf Decorations */}
      <EucalyptusBranch className="absolute top-20 left-0 w-20 md:w-28 h-auto text-[#8a9a7c]" />
      <EucalyptusBranch className="absolute top-20 right-0 w-20 md:w-28 h-auto text-[#8a9a7c]" flip />
      <SingleLeaf className="absolute top-1/3 right-6 w-8 h-12 text-[#8a9a7c] -rotate-12" />
      <SingleLeaf className="absolute bottom-1/4 left-8 w-7 h-10 text-[#8a9a7c] rotate-25" />
      <CornerVine className="absolute bottom-0 left-0 w-36 md:w-44 h-auto text-[#8a9a7c]" />
      <CornerVine className="absolute bottom-0 right-0 w-36 md:w-44 h-auto text-[#8a9a7c]" flip />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            FAQ
          </h1>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mb-6" />
          <p className="text-[#3d3d38] text-sm md:text-base tracking-wide max-w-xl mx-auto">
            Everything you need to know about our celebration
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <FAQItem 
            question="What is this celebration?"
            answer="We got married in a private ceremony on September 25, 2026! Now we want to celebrate with our family, friends, and neighbors. This is a casual open house at our home where you can come, enjoy food and drinks, meet Soumi, and share in our happiness."
          />
          <FAQItem 
            question="When and where is the open house?"
            answer="Saturday, October 24, 2026, from 1:00 PM to 5:00 PM at our home: 4450 Smoke Rise Road, Casper, WY 82604. Feel free to drop by anytime during those hours!"
          />
          <FAQItem 
            question="What should I wear?"
            answer="Keep it casual and comfortable! This is a relaxed afternoon gathering at our home. Think smart casual. No need to dress up, just come as you are."
          />
          <FAQItem 
            question="Will there be food and drinks?"
            answer="Yes! Hors d'oeuvres and drinks will be provided. Come hungry and ready to enjoy a relaxed afternoon with us."
          />
          <FAQItem 
            question="Do I need to stay the whole time?"
            answer="Not at all! Feel free to drop in anytime between 1:00 PM and 5:00 PM. Stay for as long as you'd like. Even a quick stop means the world to us."
          />
          <FAQItem 
            question="Can I bring my family?"
            answer="Absolutely! Everyone is welcome. The more the merrier. Just let us know in your RSVP how many people will be coming so we can plan accordingly."
          />
          <FAQItem 
            question="What about gifts?"
            answer="Your presence is truly the greatest gift. Just having you there to celebrate with us is all we could ask for. If you'd still like to give something, we've set up a small registry. You can find it on our Registry page."
          />
          <FAQItem 
            question="Is there parking available?"
            answer="Yes, there's plenty of parking at and around our home. You won't have any trouble finding a spot."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
