import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Heart, Mail, User, Phone, Users, Utensils, Music, Shirt, MapPin, Check, Sparkles, MessageCircle } from 'lucide-react';
import { EucalyptusBranch, SingleLeaf, CornerVine, LeafGarland } from '../components/LeafDecorations';

const RSVPPage = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attending: '',
    numberOfGuests: '1',
    plusOneNames: '',
    dietaryRestrictions: [],
    otherDietary: '',
    songRequest: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showDeclinePrompt, setShowDeclinePrompt] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        dietaryRestrictions: checked 
          ? [...prev.dietaryRestrictions, value]
          : prev.dietaryRestrictions.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      
      if (name === 'attending' && value === 'no') {
        setShowDeclinePrompt(true);
      } else if (name === 'attending' && value === 'yes') {
        setShowDeclinePrompt(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingRSVPs = JSON.parse(localStorage.getItem('weddingRSVPs') || '[]');
    const newRSVP = {
      ...formData,
      event: selectedEvent,
      submittedAt: new Date().toISOString()
    };
    localStorage.setItem('weddingRSVPs', JSON.stringify([...existingRSVPs, newRSVP]));
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      attending: '',
      numberOfGuests: '1',
      plusOneNames: '',
      dietaryRestrictions: [],
      otherDietary: '',
      songRequest: '',
    });
    setSelectedEvent(null);
    setSubmitted(false);
    setShowDeclinePrompt(false);
  };

  // Success Screen
  if (submitted) {
    const isDecline = formData.attending === 'no';
    return (
      <div className="min-h-screen bg-[#faf8f4] pt-24 pb-16 flex items-center justify-center relative overflow-hidden">
        {/* Leaf decorations on success */}
        <CornerVine className="absolute top-0 right-0 w-40 h-auto text-[#8a9a7c] rotate-90" flip />
        <CornerVine className="absolute bottom-0 left-0 w-40 h-auto text-[#8a9a7c]" />
        
        <div className="max-w-lg mx-auto px-6 text-center relative z-10">
          <div className={`w-20 h-20 ${isDecline ? 'bg-[#b8956b]' : 'bg-[#8a9a7c]'} rounded-full flex items-center justify-center mx-auto mb-6`}>
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-display text-3xl text-[#b8956b] mb-4">
            {isDecline ? 'We\'ll Miss You!' : 'Thank You!'}
          </h2>
          <p className="text-[#3d3d38] mb-8">
            {isDecline 
              ? 'Your response has been recorded. We understand and will miss having you there!' 
              : 'Your RSVP has been received. We\'re so excited to celebrate with you!'}
          </p>
          
          {isDecline && (
            <button
              onClick={() => navigate('/guestbook')}
              className="px-6 py-3 bg-[#b8956b] text-white rounded-full hover:bg-[#a07c5a] transition-colors mb-4 flex items-center gap-2 mx-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Leave Your Wishes in Guestbook
            </button>
          )}
          
          <button
            onClick={resetForm}
            className={`px-6 py-3 ${isDecline ? 'bg-transparent border border-[#8a9a7c] text-[#5a6b50]' : 'bg-[#8a9a7c] text-white'} rounded-full hover:bg-[#6b7c5e] hover:text-white transition-colors`}
          >
            Submit Another RSVP
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f4] pt-24 pb-16 relative overflow-hidden">
      {/* Leaf Decorations */}
      <EucalyptusBranch className="absolute top-20 left-0 w-20 md:w-28 h-auto text-[#8a9a7c]" />
      <EucalyptusBranch className="absolute top-20 right-0 w-20 md:w-28 h-auto text-[#8a9a7c]" flip />
      <SingleLeaf className="absolute top-64 right-6 w-10 h-14 text-[#8a9a7c] -rotate-12" />
      <SingleLeaf className="absolute top-80 left-8 w-8 h-12 text-[#8a9a7c] rotate-25" />
      <CornerVine className="absolute bottom-0 left-0 w-36 md:w-44 h-auto text-[#8a9a7c]" />
      <CornerVine className="absolute bottom-0 right-0 w-36 md:w-44 h-auto text-[#8a9a7c]" flip />
      <SingleLeaf className="absolute bottom-1/3 right-12 w-9 h-13 text-[#8a9a7c] rotate-30" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            RSVP
          </h1>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mb-6" />
          <p className="text-[#3d3d38] text-sm md:text-base tracking-wide max-w-xl mx-auto">
            We would be honored to have you celebrate with us. Please let us know which event(s) you'll be attending.
          </p>
        </div>

        {/* Event Selection */}
        {!selectedEvent ? (
          <div className="space-y-8">
            {/* US Wedding Card */}
            <div 
              className="bg-white/95 backdrop-blur-sm p-8 shadow-sm border border-[#8a9a7c]/25 hover:border-[#8a9a7c]/40 transition-all rounded-lg"
              data-testid="us-wedding-rsvp-card"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#f0f4ed] rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#6b7c5e]" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-[#5a6b50] tracking-wide">
                        US Wedding
                      </h3>
                      <p className="text-[#5a5a52] text-sm">Casper, Wyoming</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#3d3d38] text-sm mb-4">
                    <Calendar className="w-4 h-4 text-[#6b7c5e]" />
                    <span>August 8, 2026</span>
                  </div>
                  <p className="text-[#3d3d38] text-sm mb-4">
                    Join us for an intimate outdoor ceremony followed by a reception at our new home, surrounded by the beautiful Wyoming landscape.
                  </p>
                  
                  {/* Dress Code */}
                  <div className="bg-[#f0f4ed]/60 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shirt className="w-4 h-4 text-[#6b7c5e]" />
                      <span className="text-[#5a6b50] font-medium text-sm">Dress Code</span>
                    </div>
                    <p className="text-[#3d3d38] text-sm">
                      Formal Attire — Suits for men; cocktail dresses for women.
                    </p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedEvent('us')}
                  className="px-6 py-3 bg-[#8a9a7c] text-white rounded-full hover:bg-[#6b7c5e] transition-colors whitespace-nowrap cursor-pointer"
                >
                  RSVP for US Wedding
                </button>
              </div>
            </div>

            {/* Indian Wedding Card */}
            <div 
              className="bg-white/95 backdrop-blur-sm p-8 shadow-sm border border-[#E89B3C]/25 hover:border-[#E89B3C]/40 transition-all rounded-lg"
              data-testid="india-wedding-rsvp-card"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#FFF5E6] rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[#D4740C]" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-[#B8540B] tracking-wide">
                        Indian Wedding & Reception
                      </h3>
                      <p className="text-[#5a5a52] text-sm">Kolkata, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#3d3d38] text-sm mb-4">
                    <Calendar className="w-4 h-4 text-[#D4740C]" />
                    <span>November 5-6, 2027 (Tentative)</span>
                  </div>
                  <p className="text-[#3d3d38] text-sm mb-4">
                    A traditional Bengali celebration in the City of Joy. Join us for sangeet, mehendi, and a grand reception filled with rituals, blessings, music, and love!
                  </p>
                  
                  {/* Dress Code */}
                  <div className="bg-[#FFF9F0] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shirt className="w-4 h-4 text-[#D4740C]" />
                      <span className="text-[#B8540B] font-medium text-sm">Dress Code</span>
                    </div>
                    <p className="text-[#3d3d38] text-sm">
                      Traditional Indian Attire — Sarees, lehengas, or elegant Indian wear for women; kurta-pajama, sherwani, or suits for men. Bright colors are encouraged!
                    </p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedEvent('india')}
                  className="px-6 py-3 bg-[#E89B3C] text-white rounded-full hover:bg-[#D4740C] transition-colors whitespace-nowrap cursor-pointer"
                >
                  RSVP for Indian Wedding
                </button>
              </div>
            </div>

            {/* Note */}
            <div className="text-center text-[#5a5a52] text-sm italic">
              <p>Attending both celebrations? Please submit separate RSVPs for each event.</p>
            </div>
          </div>
        ) : (
          /* RSVP Form */
          <div className="max-w-2xl mx-auto">
            {/* Back button */}
            <button 
              onClick={() => {
                setSelectedEvent(null);
                setShowDeclinePrompt(false);
                setFormData(prev => ({ ...prev, attending: '' }));
              }}
              className="mb-6 text-[#5a5a52] hover:text-[#3d3d38] text-sm flex items-center gap-2 font-medium"
            >
              ← Back to event selection
            </button>

            <div className={`p-8 rounded-lg ${selectedEvent === 'us' ? 'bg-white/95 border border-[#8a9a7c]/30' : 'bg-white/95 border border-[#E89B3C]/30'} backdrop-blur-sm`}>
              <h2 className={`font-display text-2xl mb-2 ${selectedEvent === 'us' ? 'text-[#5a6b50]' : 'text-[#B8540B]'}`}>
                {selectedEvent === 'us' ? 'RSVP: US Wedding' : 'RSVP: Indian Wedding & Reception'}
              </h2>
              <p className="text-[#5a5a52] text-sm mb-6">
                {selectedEvent === 'us' ? 'August 8, 2026 • Casper, Wyoming' : 'November 5-6, 2027 (Tentative) • Kolkata, India'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-[#3d3d38] text-sm font-medium mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#8a9a7c]/25 rounded-lg focus:outline-none focus:border-[#b8956b] bg-[#faf8f4] text-[#3d3d38]"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[#3d3d38] text-sm font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#8a9a7c]/25 rounded-lg focus:outline-none focus:border-[#b8956b] bg-[#faf8f4] text-[#3d3d38]"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[#3d3d38] text-sm font-medium mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#8a9a7c]/25 rounded-lg focus:outline-none focus:border-[#b8956b] bg-[#faf8f4] text-[#3d3d38]"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Attending */}
                <div>
                  <label className="block text-[#3d3d38] text-sm font-medium mb-3">
                    Will you be attending? *
                  </label>
                  <div className="flex gap-4">
                    <label className={`flex-1 p-4 border rounded-lg cursor-pointer transition-all ${formData.attending === 'yes' ? (selectedEvent === 'us' ? 'border-[#8a9a7c] bg-[#f0f4ed]' : 'border-[#E89B3C] bg-[#FFF9F0]') : 'border-[#8a9a7c]/20 hover:border-[#b8956b]/50'}`}>
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={formData.attending === 'yes'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="flex items-center justify-center gap-2 text-[#3d3d38] font-medium">
                        Joyfully Accept
                      </span>
                    </label>
                    <label className={`flex-1 p-4 border rounded-lg cursor-pointer transition-all ${formData.attending === 'no' ? 'border-[#b8956b] bg-[#f5f2eb]' : 'border-[#8a9a7c]/20 hover:border-[#b8956b]/50'}`}>
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={formData.attending === 'no'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="flex items-center justify-center gap-2 text-[#3d3d38] font-medium">
                        Regretfully Decline
                      </span>
                    </label>
                  </div>
                </div>

                {/* Decline Prompt */}
                {showDeclinePrompt && (
                  <div className="bg-[#f5f2eb] p-5 rounded-lg border border-[#d4b896]/30">
                    <p className="text-[#3d3d38] text-sm mb-3">
                      We're sorry you can't make it! Would you like to leave your wishes for the couple?
                    </p>
                    <button
                      type="button"
                      onClick={() => navigate('/guestbook')}
                      className="flex items-center gap-2 text-[#b8956b] hover:text-[#8a7a5a] font-medium text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Go to Guestbook to leave a message
                    </button>
                  </div>
                )}

                {/* Fields shown when attending */}
                {formData.attending === 'yes' && (
                  <>
                    {/* Number of Guests */}
                    <div>
                      <label className="block text-[#3d3d38] text-sm font-medium mb-2">
                        <Users className="w-4 h-4 inline mr-2" />
                        Number of Guests (including yourself) *
                      </label>
                      <select
                        name="numberOfGuests"
                        value={formData.numberOfGuests}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-[#8a9a7c]/25 rounded-lg focus:outline-none focus:border-[#b8956b] bg-[#faf8f4] text-[#3d3d38]"
                      >
                        <option value="1">1 (Just me)</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5+">5+ Guests</option>
                      </select>
                    </div>

                    {/* Plus One Names */}
                    {(formData.numberOfGuests !== '1') && (
                      <div className={`p-4 rounded-lg ${selectedEvent === 'us' ? 'bg-[#f0f4ed]/60 border border-[#8a9a7c]/20' : 'bg-[#FFF9F0] border border-[#E89B3C]/20'}`}>
                        <label className="block text-[#3d3d38] text-sm font-medium mb-2">
                          <Heart className="w-4 h-4 inline mr-2" />
                          Names of Your Guest(s) *
                        </label>
                        <input
                          type="text"
                          name="plusOneNames"
                          value={formData.plusOneNames}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-[#8a9a7c]/25 rounded-lg focus:outline-none focus:border-[#b8956b] bg-white text-[#3d3d38]"
                          placeholder="e.g., John Smith, Jane Smith"
                        />
                        <p className="text-[#5a5a52] text-xs mt-2">
                          Please list the full names of everyone attending with you
                        </p>
                      </div>
                    )}

                    {/* Dietary Restrictions */}
                    <div>
                      <label className="block text-[#3d3d38] text-sm font-medium mb-3">
                        <Utensils className="w-4 h-4 inline mr-2" />
                        Dietary Preferences / Restrictions
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Vegetarian', 'Non-Vegetarian', 'Gluten-Free', 'Vegan', 'No Restrictions'].map((option) => (
                          <label key={option} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              name="dietary"
                              value={option}
                              checked={formData.dietaryRestrictions.includes(option)}
                              onChange={handleInputChange}
                              className={`w-4 h-4 ${selectedEvent === 'us' ? 'accent-[#8a9a7c]' : 'accent-[#D4740C]'}`}
                            />
                            <span className="text-[#3d3d38] text-sm">{option}</span>
                          </label>
                        ))}
                      </div>
                      <input
                        type="text"
                        name="otherDietary"
                        value={formData.otherDietary}
                        onChange={handleInputChange}
                        className="w-full mt-3 px-4 py-2 border border-[#8a9a7c]/25 rounded-lg focus:outline-none focus:border-[#b8956b] bg-[#faf8f4] text-sm text-[#3d3d38]"
                        placeholder="Other allergies or dietary needs..."
                      />
                    </div>

                    {/* Song Request */}
                    <div>
                      <label className="block text-[#3d3d38] text-sm font-medium mb-2">
                        <Music className="w-4 h-4 inline mr-2" />
                        Song Request (optional)
                      </label>
                      <input
                        type="text"
                        name="songRequest"
                        value={formData.songRequest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#8a9a7c]/25 rounded-lg focus:outline-none focus:border-[#b8956b] bg-[#faf8f4] text-[#3d3d38]"
                        placeholder="Any song you'd love to hear at the celebration?"
                      />
                    </div>
                  </>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!formData.attending || !formData.name || !formData.email || !formData.phone}
                  className={`w-full py-4 rounded-full text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    selectedEvent === 'us' 
                      ? 'bg-[#8a9a7c] hover:bg-[#6b7c5e]' 
                      : 'bg-[#E89B3C] hover:bg-[#D4740C]'
                  }`}
                >
                  {formData.attending === 'no' ? 'Submit Response' : 'Submit RSVP'}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-12 bg-[#8a9a7c] text-white p-8 text-center rounded-lg">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-5 h-5" />
            <Heart className="w-4 h-4 fill-white" />
          </div>
          <p className="font-cormorant text-xl italic mb-2">
            Questions about the events?
          </p>
          <p className="text-white/90 text-sm">
            We'd love to hear from you! Reach out and we'll get back to you soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RSVPPage;
