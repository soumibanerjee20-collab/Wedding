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
            question="Why the short notice?"
            answer="Our wedding date depends on Soumi's US immigration process, which has government timelines we can't control. This means you may receive only 30 to 90 days' notice before the celebration. We know that's not a lot of time, and we're so grateful for your patience and flexibility. It means more than you know!"
          />
          <FAQItem 
            question="Where will the US ceremony be held?"
            answer="We'll be getting married in or near Casper, Wyoming. The venue will likely be outdoors somewhere beautiful, possibly in a remote area about 1 to 2 hours from town. After the ceremony, we'll head back to James's home for the reception. We'll share exact details as soon as we have them!"
          />
          <FAQItem 
            question="What should I wear?"
            answer="For Wyoming, think elegant but comfortable. We'll be outdoors in nature, so cocktail or semi-formal works great. For Kolkata, traditional Indian attire is warmly welcomed (sarees, kurtas, lehengas) or you can go with formal western wear. We'll send more specific guidance closer to each event."
          />
          <FAQItem 
            question="Will there be accommodation options nearby?"
            answer="Absolutely! We'll share a list of recommended hotels and lodging in the Casper area once the date is set. For Kolkata, we'll have options from nearby hotels to family homes. Keep an eye on the Travel page for updates."
          />
          <FAQItem 
            question="Can I bring a plus one?"
            answer="We'd love to keep things intimate. Your invitation will let you know if a plus one is included. If you're unsure, just reach out to us directly and we'll sort it out!"
          />
          <FAQItem 
            question="What about gifts?"
            answer="Honestly, your presence is the greatest gift. Just having you there to celebrate with us is all we could ask for. If you'd still like to give something, we'll share details closer to the date."
          />
          <FAQItem 
            question="What about the Indian wedding?"
            answer="We're planning a traditional Bengali Hindu wedding in Kolkata, India! This will be a separate celebration, and dates are still to be determined. We'll share all the details as plans take shape. Stay tuned!"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
