import React, { useState } from 'react';
import { Calendar, Heart, Mail, User, Phone, Users, Utensils, Music, Shirt, MapPin, Check, Sparkles } from 'lucide-react';

const RSVPPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfGuests: '1',
    plusOneName: '',
    attending: '',
    dietaryRestrictions: [],
    otherDietary: '',
    songRequest: '',
    willDance: false,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'willDance') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        // For dietary restrictions checkboxes
        setFormData(prev => ({
          ...prev,
          dietaryRestrictions: checked 
            ? [...prev.dietaryRestrictions, value]
            : prev.dietaryRestrictions.filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage
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
      numberOfGuests: '1',
      plusOneName: '',
      attending: '',
      dietaryRestrictions: [],
      otherDietary: '',
      songRequest: '',
      willDance: false,
      message: ''
    });
    setSelectedEvent(null);
    setSubmitted(false);
  };

  // Success Screen
  if (submitted) {
    return (
      <div className="min-h-screen bg-[#faf8f4] pt-24 pb-16 flex items-center justify-center">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-[#8a9a7c] rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-display text-3xl text-[#b8956b] mb-4">Thank You!</h2>
          <p className="text-[#5a5a52] mb-8">
            Your RSVP has been received. We're so excited to celebrate with you!
          </p>
          <button
            onClick={resetForm}
            className="px-6 py-3 bg-[#8a9a7c] text-white rounded-full hover:bg-[#6b7c5e] transition-colors"
          >
            Submit Another RSVP
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f4] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-6xl text-[#b8956b] mb-4 tracking-wider">
            RSVP
          </h1>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mb-6" />
          <p className="text-[#5a5a52] text-sm tracking-wide font-light max-w-xl mx-auto">
            We would be honored to have you celebrate with us. Please let us know which event(s) you'll be attending.
          </p>
        </div>

        {/* Event Selection */}
        {!selectedEvent ? (
          <div className="space-y-8">
            {/* US Wedding Card */}
            <div 
              className="bg-white p-8 shadow-sm border border-[#8a9a7c]/20 hover:border-[#8a9a7c]/50 transition-all cursor-pointer group"
              onClick={() => setSelectedEvent('us')}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#f0f4ed] rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#8a9a7c]" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-[#5a6b50] tracking-wide">
                        US Wedding
                      </h3>
                      <p className="text-[#7a7a72] text-sm">Casper, Wyoming</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#5a5a52] text-sm mb-4">
                    <Calendar className="w-4 h-4 text-[#8a9a7c]" />
                    <span>August 8, 2026</span>
                  </div>
                  <p className="text-[#5a5a52] text-sm font-light mb-4">
                    Join us for an intimate outdoor ceremony followed by a reception at our new home, surrounded by the beautiful Wyoming landscape.
                  </p>
                  
                  {/* Dress Code */}
                  <div className="bg-[#f8faf7] p-4 rounded-lg mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shirt className="w-4 h-4 text-[#8a9a7c]" />
                      <span className="text-[#5a6b50] font-medium text-sm">Dress Code</span>
                    </div>
                    <p className="text-[#5a5a52] text-sm">
                      Semi-Formal / Cocktail Attire — Think elegant but comfortable. Suits, dress shirts, or smart casual for men; dresses, jumpsuits, or dressy separates for women.
                    </p>
                  </div>
                </div>
                
                <button className="px-6 py-3 bg-[#8a9a7c] text-white rounded-full group-hover:bg-[#6b7c5e] transition-colors whitespace-nowrap">
                  RSVP for US Wedding →
                </button>
              </div>
            </div>

            {/* Indian Wedding Card */}
            <div 
              className="bg-white p-8 shadow-sm border border-[#E89B3C]/20 hover:border-[#E89B3C]/50 transition-all cursor-pointer group"
              onClick={() => setSelectedEvent('india')}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#FFF5E6] rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-[#D4740C]" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-[#B8540B] tracking-wide">
                        Indian Wedding
                      </h3>
                      <p className="text-[#7a7a72] text-sm">Kolkata, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#5a5a52] text-sm mb-4">
                    <Calendar className="w-4 h-4 text-[#D4740C]" />
                    <span>October 21-23, 2027</span>
                  </div>
                  <p className="text-[#5a5a52] text-sm font-light mb-4">
                    A traditional Bengali celebration filled with music, dance, rituals, and joy. Two days of festivities in the City of Joy!
                  </p>
                  
                  {/* Dress Code for each event */}
                  <div className="space-y-3">
                    <div className="bg-[#FFF9F0] p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Music className="w-4 h-4 text-[#D4740C]" />
                        <span className="text-[#B8540B] font-medium text-sm">Day 1: Sangeet & Mehendi</span>
                      </div>
                      <p className="text-[#5a5a52] text-sm">
                        <strong>Dress Code:</strong> Indo-Western — Something comfortable to dance and play games! Ladies, get ready for beautiful mehendi on your hands. 
                      </p>
                      <p className="text-[#D4740C] text-xs mt-2 italic">
                        💃 Pro tip: Practice some quick 5-min dance moves — there will be performances!
                      </p>
                    </div>
                    
                    <div className="bg-[#FFF9F0] p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="w-4 h-4 text-[#D4740C]" />
                        <span className="text-[#B8540B] font-medium text-sm">Day 2: Wedding & Reception</span>
                      </div>
                      <p className="text-[#5a5a52] text-sm">
                        <strong>Dress Code:</strong> Traditional Indian Attire — Sarees, lehengas, or elegant Indian wear for women; kurta-pajama, sherwani, or suits for men.
                      </p>
                    </div>
                  </div>
                </div>
                
                <button className="px-6 py-3 bg-[#E89B3C] text-white rounded-full group-hover:bg-[#D4740C] transition-colors whitespace-nowrap mt-4 md:mt-0">
                  RSVP for Indian Wedding →
                </button>
              </div>
            </div>

            {/* Note */}
            <div className="text-center text-[#7a7a72] text-sm italic">
              <p>Attending both celebrations? Please submit separate RSVPs for each event.</p>
            </div>
          </div>
        ) : (
          /* RSVP Form */
          <div className="max-w-2xl mx-auto">
            {/* Back button */}
            <button 
              onClick={() => setSelectedEvent(null)}
              className="mb-6 text-[#7a7a72] hover:text-[#5a5a52] text-sm flex items-center gap-2"
            >
              ← Back to event selection
            </button>

            <div className={`p-8 rounded-lg ${selectedEvent === 'us' ? 'bg-white border border-[#8a9a7c]/30' : 'bg-white border border-[#E89B3C]/30'}`}>
              <h2 className={`font-display text-2xl mb-6 ${selectedEvent === 'us' ? 'text-[#5a6b50]' : 'text-[#B8540B]'}`}>
                {selectedEvent === 'us' ? 'RSVP: US Wedding' : 'RSVP: Indian Wedding'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-[#5a5a52] text-sm font-medium mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#d4b896]/30 rounded-lg focus:outline-none focus:border-[#b8956b] bg-[#faf8f4]"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[#5a5a52] text-sm font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#d4b896]/30 rounded-lg focus:outline-none focus:border-[#b8956b] bg-[#faf8f4]"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[#5a5a52] text-sm font-medium mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#d4b896]/30 rounded-lg focus:outline-none focus:border-[#b8956b] bg-[#faf8f4]"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Attending */}
                <div>
                  <label className="block text-[#5a5a52] text-sm font-medium mb-3">
                    Will you be attending? *
                  </label>
                  <div className="flex gap-4">
                    <label className={`flex-1 p-4 border rounded-lg cursor-pointer transition-all ${formData.attending === 'yes' ? 'border-[#8a9a7c] bg-[#f0f4ed]' : 'border-[#d4b896]/30 hover:border-[#b8956b]/50'}`}>
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={formData.attending === 'yes'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="flex items-center justify-center gap-2 text-[#5a5a52]">
                        <span className="text-lg">🎉</span> Joyfully Accept
                      </span>
                    </label>
                    <label className={`flex-1 p-4 border rounded-lg cursor-pointer transition-all ${formData.attending === 'no' ? 'border-[#8a9a7c] bg-[#f0f4ed]' : 'border-[#d4b896]/30 hover:border-[#b8956b]/50'}`}>
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={formData.attending === 'no'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="flex items-center justify-center gap-2 text-[#5a5a52]">
                        <span className="text-lg">💔</span> Regretfully Decline
                      </span>
                    </label>
                  </div>
                </div>

                {formData.attending === 'yes' && (
                  <>
                    {/* Number of Guests */}
                    <div>
                      <label className="block text-[#5a5a52] text-sm font-medium mb-2">
                        <Users className="w-4 h-4 inline mr-2" />
                        Number of Guests (including yourself)
                      </label>
                      <select
                        name="numberOfGuests"
                        value={formData.numberOfGuests}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#d4b896]/30 rounded-lg focus:outline-none focus:border-[#b8956b] bg-[#faf8f4]"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5+">5+ Guests (please specify in message)</option>
                      </select>
                    </div>

                    {/* Plus One Name */}
                    {parseInt(formData.numberOfGuests) > 1 && (
                      <div>
                        <label className="block text-[#5a5a52] text-sm font-medium mb-2">
                          Names of Additional Guests
                        </label>
                        <input
                          type="text"
                          name="plusOneName"
                          value={formData.plusOneName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-[#d4b896]/30 rounded-lg focus:outline-none focus:border-[#b8956b] bg-[#faf8f4]"
                          placeholder="Names of your plus ones"
                        />
                      </div>
                    )}

                    {/* Dietary Restrictions */}
                    <div>
                      <label className="block text-[#5a5a52] text-sm font-medium mb-3">
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
                              className="w-4 h-4 accent-[#8a9a7c]"
                            />
                            <span className="text-[#5a5a52] text-sm">{option}</span>
                          </label>
                        ))}
                      </div>
                      <input
                        type="text"
                        name="otherDietary"
                        value={formData.otherDietary}
                        onChange={handleInputChange}
                        className="w-full mt-3 px-4 py-2 border border-[#d4b896]/30 rounded-lg focus:outline-none focus:border-[#b8956b] bg-[#faf8f4] text-sm"
                        placeholder="Other allergies or dietary needs..."
                      />
                    </div>

                    {/* Sangeet specific questions */}
                    {selectedEvent === 'india' && (
                      <div className="bg-[#FFF9F0] p-5 rounded-lg space-y-4">
                        <h4 className="text-[#B8540B] font-medium flex items-center gap-2">
                          <Music className="w-4 h-4" />
                          Sangeet Night Special!
                        </h4>
                        
                        {/* Song Request */}
                        <div>
                          <label className="block text-[#5a5a52] text-sm mb-2">
                            🎵 Song Request for Sangeet
                          </label>
                          <input
                            type="text"
                            name="songRequest"
                            value={formData.songRequest}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-[#E89B3C]/30 rounded-lg focus:outline-none focus:border-[#D4740C] bg-white text-sm"
                            placeholder="Any song you'd love to hear or dance to?"
                          />
                        </div>

                        {/* Will Dance */}
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="willDance"
                            checked={formData.willDance}
                            onChange={handleInputChange}
                            className="w-5 h-5 mt-0.5 accent-[#D4740C]"
                          />
                          <span className="text-[#5a5a52] text-sm">
                            💃 I'm ready to perform a dance number! 
                            <span className="block text-[#7a7a72] text-xs mt-1">
                              (We'll coordinate with you for a fun 5-min group or solo performance)
                            </span>
                          </span>
                        </label>
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <label className="block text-[#5a5a52] text-sm font-medium mb-2">
                        💌 Message for the Couple (optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-[#d4b896]/30 rounded-lg focus:outline-none focus:border-[#b8956b] bg-[#faf8f4] resize-none"
                        placeholder="Any special message or requests..."
                      />
                    </div>
                  </>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!formData.attending}
                  className={`w-full py-4 rounded-full text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    selectedEvent === 'us' 
                      ? 'bg-[#8a9a7c] hover:bg-[#6b7c5e]' 
                      : 'bg-[#E89B3C] hover:bg-[#D4740C]'
                  }`}
                >
                  Submit RSVP
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
