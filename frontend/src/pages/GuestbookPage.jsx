import React, { useState, useEffect } from 'react';
import { Heart, Send, MessageCircle, User, Calendar } from 'lucide-react';

const GuestbookPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({
    name: '',
    message: '',
    relationship: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Load messages from localStorage on mount
  // Clear old cached sample messages on first load
  useEffect(() => {
    const savedMessages = localStorage.getItem('weddingGuestbook');
    if (savedMessages) {
      const parsed = JSON.parse(savedMessages);
      // Filter out any sample messages (those with specific IDs 1, 2, 3)
      const realMessages = parsed.filter(msg => ![1, 2, 3].includes(msg.id));
      if (realMessages.length !== parsed.length) {
        // Sample messages were found and removed
        localStorage.setItem('weddingGuestbook', JSON.stringify(realMessages));
        setMessages(realMessages);
      } else {
        setMessages(parsed);
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.name || !newMessage.message) return;

    setIsSubmitting(true);
    
    // Simulate submission delay
    setTimeout(() => {
      const message = {
        id: Date.now(),
        ...newMessage,
        date: new Date().toISOString().split('T')[0],
        hearts: 0
      };
      
      const updatedMessages = [message, ...messages];
      setMessages(updatedMessages);
      localStorage.setItem('weddingGuestbook', JSON.stringify(updatedMessages));
      
      setNewMessage({ name: '', message: '', relationship: '' });
      setIsSubmitting(false);
      setShowSuccess(true);
      
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  const handleHeart = (id) => {
    const updatedMessages = messages.map(msg => 
      msg.id === id ? { ...msg, hearts: msg.hearts + 1 } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem('weddingGuestbook', JSON.stringify(updatedMessages));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-[#faf8f4]">
      {/* Header Section */}
      <div className="relative py-16 bg-gradient-to-b from-[#f5f0e8] to-[#faf8f4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <MessageCircle className="w-12 h-12 text-[#8a9a7c] mx-auto mb-4" />
          <h1 className="font-display text-4xl md:text-5xl text-[#b8956b] mb-4">
            Guestbook
          </h1>
          <p className="font-cormorant text-xl md:text-2xl text-[#5a5a52] italic max-w-2xl mx-auto">
            Leave your blessings, wishes, and messages for Soumi & James. 
            Your words will be cherished forever.
          </p>
          <div className="w-24 h-[1px] bg-[#b8956b] mx-auto mt-6" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Write a Message Form */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12 border border-[#e8e2d9]">
          <h2 className="font-display text-2xl text-[#5a5a52] mb-6 flex items-center gap-3">
            <Send className="w-5 h-5 text-[#8a9a7c]" />
            Leave Your Wishes
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#5a5a52] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={newMessage.name}
                  onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-[#e8e2d9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a9a7c]/50 focus:border-[#8a9a7c] transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5a5a52] mb-2">
                  Your Relationship to the Couple
                </label>
                <input
                  type="text"
                  value={newMessage.relationship}
                  onChange={(e) => setNewMessage({ ...newMessage, relationship: e.target.value })}
                  placeholder="e.g., Friend of the Bride, Colleague"
                  className="w-full px-4 py-3 border border-[#e8e2d9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a9a7c]/50 focus:border-[#8a9a7c] transition-all"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#5a5a52] mb-2">
                Your Message *
              </label>
              <textarea
                value={newMessage.message}
                onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
                placeholder="Share your wishes, blessings, or a favorite memory with the couple..."
                rows={5}
                className="w-full px-4 py-3 border border-[#e8e2d9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8a9a7c]/50 focus:border-[#8a9a7c] transition-all resize-none"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-[#8a9a7c]">
                * Required fields
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-[#8a9a7c] hover:bg-[#6b7c5e] disabled:bg-[#b8c4ae] text-white px-8 py-3 rounded-full text-sm font-medium tracking-wider transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Wishes
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Success Message */}
          {showSuccess && (
            <div className="mt-6 p-4 bg-[#8a9a7c]/10 border border-[#8a9a7c]/30 rounded-lg text-center">
              <p className="text-[#6b7c5e] font-medium">
                ✨ Thank you! Your message has been added to our guestbook.
              </p>
            </div>
          )}
        </div>

        {/* Messages List */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl text-[#5a5a52] mb-6 flex items-center gap-3">
            <Heart className="w-5 h-5 text-[#b8956b]" />
            Messages from Loved Ones
            <span className="text-sm font-normal text-[#8a9a7c] bg-[#8a9a7c]/10 px-3 py-1 rounded-full">
              {messages.length} {messages.length === 1 ? 'message' : 'messages'}
            </span>
          </h2>

          {messages.map((msg, index) => (
            <div 
              key={msg.id}
              className="bg-white rounded-lg shadow-sm p-6 border border-[#e8e2d9] hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#8a9a7c] to-[#6b7c5e] rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#5a5a52]">{msg.name}</h3>
                    {msg.relationship && (
                      <p className="text-sm text-[#8a9a7c]">{msg.relationship}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-[#a09080]">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(msg.date)}
                </div>
              </div>

              <p className="text-[#5a5a52] leading-relaxed mb-4 font-cormorant text-lg">
                "{msg.message}"
              </p>

              <button
                onClick={() => handleHeart(msg.id)}
                className="flex items-center gap-2 text-sm text-[#b8956b] hover:text-[#96783e] transition-colors group"
              >
                <Heart 
                  className={`w-4 h-4 transition-all group-hover:scale-110 ${
                    msg.hearts > 0 ? 'fill-[#b8956b]' : ''
                  }`} 
                />
                <span>{msg.hearts} {msg.hearts === 1 ? 'heart' : 'hearts'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestbookPage;
