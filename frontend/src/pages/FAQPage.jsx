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
            answer="Due to the nature of the US immigration process, our wedding date depends on government timelines that are beyond our control. This means you may receive only 30 to 90 days' notice before the celebration. We truly appreciate your patience and flexibility in keeping some room in your schedule for us!"
          />
          <FAQItem 
            question="Where will the US ceremony be held?"
            answer="The wedding will be held in or near Casper, Wyoming. We anticipate the venue to be outdoors, in a beautiful and potentially remote area within 1 to 2 hours of Casper. A reception will follow at James's home afterwards. Exact details will be shared once confirmed."
          />
          <FAQItem 
            question="What should I wear?"
            answer="For the Wyoming ceremony, think elegant outdoor attire — we'll be in nature, so comfortable yet dressy works well. Think cocktail or semi-formal. For the Kolkata celebrations, traditional Indian attire is warmly welcomed (sarees, kurtas) or formal western wear. More specific guidance will follow closer to both events."
          />
          <FAQItem 
            question="Will there be accommodation options nearby?"
            answer="Yes! We'll share recommended hotels and lodging in the Casper, Wyoming area once the date is confirmed. For the Kolkata wedding, we'll provide options ranging from nearby hotels to family homes. Travel details will be on the Travel page soon."
          />
          <FAQItem 
            question="Can I bring a plus one?"
            answer="We'd love to keep our celebration intimate. Your RSVP invitation will indicate if a plus one is included. If you have questions, please don't hesitate to reach out to us directly."
          />
          <FAQItem 
            question="What about gifts?"
            answer="Your presence at our wedding is the greatest gift we could ask for — especially given the travel involved. If you'd still like to give, details will be shared closer to the date."
          />
          <FAQItem 
            question="What about the Indian wedding?"
            answer="We are planning a traditional Bengali Hindu wedding celebration in Kolkata, India. This will be a separate celebration, and dates are yet to be determined. More details will follow as plans take shape — stay tuned!"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
