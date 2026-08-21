import React, { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'casper';

const INVITE_IMAGE_URL = 'https://soumiandjameswedding.netlify.app/wedding-invite-card.jpg';

const WEDDING_MESSAGE = (name) => 
  `Hi ${name}!\nIt's Soumi & James!\n\nWe survived long distance, immigration paperwork, and 7 time zones. Now there's only one thing left to do: *We're getting married on October 25, 2026!*\n\nCome celebrate with us under the wide Wyoming sky, surrounded by Casper mountains, wild prairies, and the people we love most.\n\nFormal invitation and all the details:\nhttps://soumiandjameswedding.netlify.app\n\nPassword: sj2026\n\nView your invitation:\n${INVITE_IMAGE_URL}`;

const REHEARSAL_AND_WEDDING_MESSAGE = (name) => 
  `Hi ${name}!\nIt's Soumi & James!\n\nWe survived long distance, immigration paperwork, and 7 time zones. Now there's only one thing left to do: *We're getting married!*\n\nAs one of our closest family and friends, we would love for you to join us for both celebrations:\n\n*Rehearsal Dinner: October 24, 2026*\nAn intimate evening of stories, laughter, and love the night before the big day.\n\n*Wedding Ceremony & Reception: October 25, 2026*\nAt the Tate Pumphouse, Casper, Wyoming.\n\nCome celebrate with us under the wide Wyoming sky, surrounded by the people we love most.\n\nFormal invitation and all the details:\nhttps://soumiandjameswedding.netlify.app\n\nPassword: sj2026\n\nView your invitation:\n${INVITE_IMAGE_URL}`;

const generateId = () => Math.random().toString(36).substr(2, 9);

const API_URL = process.env.REACT_APP_BACKEND_URL;

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [guests, setGuests] = useState([]);
  const [rsvps, setRsvps] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newGroup, setNewGroup] = useState('wedding');
  const [copied, setCopied] = useState(null);
  const [filter, setFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('invites');

  useEffect(() => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    return () => {
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('wedding_guests');
    if (saved) setGuests(JSON.parse(saved));
  }, []);

  const saveGuests = (updatedGuests) => {
    setGuests(updatedGuests);
    localStorage.setItem('wedding_guests', JSON.stringify(updatedGuests));
  };

  const markInvited = (guestId, method, inviteType) => {
    const updated = guests.map(g => 
      g.id === guestId ? { 
        ...g, 
        invited: true, 
        invited_at: new Date().toISOString(), 
        sent_via: method,
        last_invite_type: inviteType
      } : g
    );
    saveGuests(updated);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setToken(password);
      setError('');
      fetchRsvps(password);
    } else {
      setError('Wrong password');
    }
  };

  const fetchRsvps = async (adminToken) => {
    try {
      const res = await fetch(`${API_URL}/api/admin/rsvps`, {
        headers: { 'x-admin-token': adminToken }
      });
      if (res.ok) {
        const data = await res.json();
        setRsvps(data);
      }
    } catch {
      console.error('Failed to fetch RSVPs');
    }
  };

  const handleAddGuest = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newPhone.trim()) return;
    const newGuest = {
      id: generateId(),
      name: newName.trim(),
      phone: newPhone.trim(),
      group: newGroup,
      invited: false,
      invited_at: null,
      sent_via: null,
      last_invite_type: null,
      created_at: new Date().toISOString(),
    };
    saveGuests([newGuest, ...guests]);
    setNewName('');
    setNewPhone('');
  };

  const getMessage = (guest, inviteType) => {
    if (inviteType === 'rehearsal') return REHEARSAL_AND_WEDDING_MESSAGE(guest.name);
    return WEDDING_MESSAGE(guest.name);
  };

  const handleWhatsApp = (guest, inviteType) => {
    const cleanPhone = guest.phone.replace(/[\s\-()]/g, '');
    const message = encodeURIComponent(getMessage(guest, inviteType));
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
    markInvited(guest.id, 'whatsapp', inviteType);
  };

  const handleSMS = (guest, inviteType) => {
    const cleanPhone = guest.phone.replace(/[\s\-()]/g, '');
    const message = encodeURIComponent(getMessage(guest, inviteType));
    window.open(`sms:${cleanPhone}?body=${message}`, '_blank');
    markInvited(guest.id, 'sms', inviteType);
  };

  const handleCopy = (guest, inviteType) => {
    const message = getMessage(guest, inviteType);
    navigator.clipboard.writeText(message).then(() => {
      setCopied(guest.id + inviteType);
      setTimeout(() => setCopied(null), 2000);
      markInvited(guest.id, 'copied', inviteType);
    });
  };

  const handleShare = async (guest, inviteType) => {
    const message = getMessage(guest, inviteType);
    try {
      // Fetch the invite image as a blob
      const res = await fetch('/wedding-invite-card.jpg');
      const blob = await res.blob();
      const file = new File([blob], 'Soumi-James-Wedding-Invite.jpg', { type: 'image/jpeg' });

      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          text: message,
          files: [file],
        });
        markInvited(guest.id, 'shared', inviteType);
      } else {
        // Fallback: copy message and alert to attach image manually
        await navigator.clipboard.writeText(message);
        setCopied(guest.id + inviteType);
        setTimeout(() => setCopied(null), 2000);
        alert('Message copied! Please paste in WhatsApp and attach the invite image from your gallery.');
        markInvited(guest.id, 'copied', inviteType);
      }
    } catch (err) {
      // If share was cancelled or failed, try clipboard
      try {
        await navigator.clipboard.writeText(message);
        setCopied(guest.id + inviteType);
        setTimeout(() => setCopied(null), 2000);
      } catch {}
    }
  };

  const handleDelete = (guestId) => {
    if (!window.confirm('Remove this guest?')) return;
    saveGuests(guests.filter(g => g.id !== guestId));
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center" 
           style={{ background: 'linear-gradient(135deg, #1a2a1f 0%, #2d3d32 50%, #1f2f24 100%)' }}
           data-testid="admin-login">
        <div className="w-full max-w-sm p-8 rounded-xl"
             style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,184,150,0.15)', backdropFilter: 'blur(12px)' }}>
          <h1 className="font-cormorant text-2xl text-center mb-6" style={{ color: '#d4c4a8' }}>
            Admin Access
          </h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-lg text-sm mb-4 outline-none"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,184,150,0.2)', color: '#e8dfd0' }}
              data-testid="admin-password-input"
            />
            {error && <p className="text-red-400 text-xs mb-3 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-sm tracking-wider transition-all hover:scale-[1.02]"
              style={{ background: 'rgba(212,184,150,0.15)', border: '1px solid rgba(212,184,150,0.3)', color: '#d4c4a8' }}
              data-testid="admin-login-btn"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filteredGuests = filter === 'all' ? guests : guests.filter(g => g.group === filter);
  const weddingCount = guests.filter(g => g.group === 'wedding').length;
  const rehearsalCount = guests.filter(g => g.group === 'rehearsal').length;
  const invitedCount = guests.filter(g => g.invited).length;

  const rsvpYesCount = rsvps.filter(r => r.attending === 'yes').length;
  const rsvpNoCount = rsvps.filter(r => r.attending === 'no').length;
  const totalGuestsCount = rsvps.filter(r => r.attending === 'yes').reduce((sum, r) => sum + parseInt(r.numberOfGuests || '1'), 0);

  return (
    <div className="min-h-screen p-6" 
         style={{ background: 'linear-gradient(135deg, #1a2a1f 0%, #2d3d32 50%, #1f2f24 100%)' }}
         data-testid="admin-dashboard">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="font-cormorant text-3xl mb-2" style={{ color: '#d4c4a8' }}>
          Wedding Dashboard
        </h1>
        <div className="flex gap-4 text-sm flex-wrap" style={{ color: 'rgba(212,184,150,0.5)' }}>
          <span>{invitedCount} invited / {guests.length} total guests</span>
          <span>|</span>
          <span>{rsvps.length} RSVPs ({rsvpYesCount} attending, {rsvpNoCount} declined)</span>
          <span>|</span>
          <span>{totalGuestsCount} total headcount</span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-5xl mx-auto mb-6 flex gap-3">
        <button
          onClick={() => setActiveTab('invites')}
          className="px-5 py-2.5 rounded-lg text-sm tracking-wider transition-all"
          style={{
            background: activeTab === 'invites' ? 'rgba(106,130,108,0.3)' : 'rgba(255,255,255,0.03)',
            border: activeTab === 'invites' ? '1px solid rgba(106,130,108,0.5)' : '1px solid rgba(212,184,150,0.08)',
            color: activeTab === 'invites' ? '#c8d4c0' : 'rgba(212,184,150,0.5)'
          }}
        >
          Invite Manager
        </button>
        <button
          onClick={() => { setActiveTab('rsvps'); fetchRsvps(token); }}
          className="px-5 py-2.5 rounded-lg text-sm tracking-wider transition-all"
          style={{
            background: activeTab === 'rsvps' ? 'rgba(184,149,107,0.3)' : 'rgba(255,255,255,0.03)',
            border: activeTab === 'rsvps' ? '1px solid rgba(184,149,107,0.5)' : '1px solid rgba(212,184,150,0.08)',
            color: activeTab === 'rsvps' ? '#d4c4a8' : 'rgba(212,184,150,0.5)'
          }}
        >
          RSVP Responses ({rsvps.length})
        </button>
        <button
          onClick={() => setActiveTab('qr')}
          className="px-5 py-2.5 rounded-lg text-sm tracking-wider transition-all"
          style={{
            background: activeTab === 'qr' ? 'rgba(184,149,107,0.3)' : 'rgba(255,255,255,0.03)',
            border: activeTab === 'qr' ? '1px solid rgba(184,149,107,0.5)' : '1px solid rgba(212,184,150,0.08)',
            color: activeTab === 'qr' ? '#d4c4a8' : 'rgba(212,184,150,0.5)'
          }}
        >
          QR Code
        </button>
      </div>

      {/* Invites Tab */}
      {activeTab === 'invites' && (
        <>
          {/* Invite Card Preview & Download */}
          <div className="max-w-5xl mx-auto mb-6 p-5 rounded-xl flex items-center gap-5"
               style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,184,150,0.1)' }}>
            <img src="/wedding-invite-card.jpg" alt="Invite Card" className="w-20 h-28 object-cover rounded-md border border-white/10" />
            <div className="flex-1">
              <p className="text-sm mb-1" style={{ color: '#d4c4a8' }}>Wedding Invite Card</p>
              <p className="text-xs mb-3" style={{ color: 'rgba(212,184,150,0.5)' }}>
                Download this image first. When sending via WA or SMS, attach it manually along with the text message.
              </p>
              <a href="/wedding-invite-card.jpg" download="Soumi-James-Wedding-Invite.jpg"
                 className="inline-block px-4 py-2 rounded-lg text-xs tracking-wider transition-all hover:scale-105"
                 style={{ background: 'rgba(106,130,108,0.3)', border: '1px solid rgba(106,130,108,0.4)', color: '#c8d4c0' }}>
                Download Image
              </a>
            </div>
          </div>

          {/* Add Guest Form */}
      <div className="max-w-5xl mx-auto mb-6 p-5 rounded-xl"
           style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,184,150,0.1)' }}>
        <h2 className="text-sm tracking-wider mb-4" style={{ color: 'rgba(212,184,150,0.7)' }}>
          ADD GUEST
        </h2>
        <form onSubmit={handleAddGuest} className="flex flex-wrap gap-3 items-end">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Name"
            className="flex-1 min-w-[150px] px-4 py-2.5 rounded-lg text-sm outline-none"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,184,150,0.15)', color: '#e8dfd0' }}
            data-testid="guest-name-input"
          />
          <input
            type="text"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            placeholder="Phone (e.g., +1234567890)"
            className="flex-1 min-w-[180px] px-4 py-2.5 rounded-lg text-sm outline-none"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,184,150,0.15)', color: '#e8dfd0' }}
            data-testid="guest-phone-input"
          />
          <select
            value={newGroup}
            onChange={(e) => setNewGroup(e.target.value)}
            className="px-4 py-2.5 rounded-lg text-sm outline-none cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,184,150,0.15)', color: '#e8dfd0' }}
            data-testid="guest-group-select"
          >
            <option value="wedding" style={{ background: '#2d3d32' }}>Wedding Only</option>
            <option value="rehearsal" style={{ background: '#2d3d32' }}>Rehearsal + Wedding</option>
          </select>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg text-sm tracking-wider transition-all hover:scale-[1.02]"
            style={{ background: 'rgba(106,130,108,0.3)', border: '1px solid rgba(106,130,108,0.4)', color: '#c8d4c0' }}
            data-testid="add-guest-btn"
          >
            Add
          </button>
        </form>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-5xl mx-auto mb-4 flex gap-2">
        {[
          { key: 'all', label: 'All Guests' },
          { key: 'wedding', label: 'Wedding Only' },
          { key: 'rehearsal', label: 'Rehearsal + Wedding' },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key)}
            className="px-4 py-2 rounded-lg text-xs tracking-wider transition-all"
            style={{ 
              background: filter === tab.key ? 'rgba(212,184,150,0.2)' : 'rgba(255,255,255,0.03)',
              border: filter === tab.key ? '1px solid rgba(212,184,150,0.3)' : '1px solid rgba(212,184,150,0.08)',
              color: filter === tab.key ? '#d4c4a8' : 'rgba(212,184,150,0.5)'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Guest List */}
      <div className="max-w-5xl mx-auto">
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(212,184,150,0.1)' }}>
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 px-5 py-3 text-xs tracking-wider"
               style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(212,184,150,0.5)' }}>
            <div className="col-span-2">NAME</div>
            <div className="col-span-2">PHONE</div>
            <div className="col-span-1">GROUP</div>
            <div className="col-span-2">STATUS</div>
            <div className="col-span-5 text-right">SEND INVITE</div>
          </div>

          {filteredGuests.length === 0 && (
            <div className="px-5 py-8 text-center text-sm" style={{ color: 'rgba(212,184,150,0.4)' }}>
              No guests {filter !== 'all' ? 'in this group' : 'added yet'}.
            </div>
          )}
          
          {filteredGuests.map((guest) => (
            <div key={guest.id} 
                 className="grid grid-cols-12 gap-2 px-5 py-3 items-center"
                 style={{ borderTop: '1px solid rgba(212,184,150,0.06)' }}
                 data-testid={`guest-row-${guest.id}`}>
              <div className="col-span-2 text-sm truncate" style={{ color: '#e8dfd0' }}>
                {guest.name}
              </div>
              <div className="col-span-2 text-sm truncate" style={{ color: 'rgba(212,184,150,0.7)' }}>
                {guest.phone}
              </div>
              <div className="col-span-1">
                <span className="px-2 py-0.5 rounded-full text-xs"
                      style={{ 
                        background: guest.group === 'rehearsal' ? 'rgba(184,149,107,0.15)' : 'rgba(106,130,108,0.15)',
                        color: guest.group === 'rehearsal' ? '#d4c4a8' : '#a8c4a0'
                      }}>
                  {guest.group === 'rehearsal' ? 'R+W' : 'W'}
                </span>
              </div>
              <div className="col-span-2">
                {guest.invited ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs"
                        style={{ background: 'rgba(106,130,108,0.2)', color: '#a8c4a0' }}>
                    Sent {guest.last_invite_type === 'rehearsal' ? '(RD)' : '(W)'}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs"
                        style={{ background: 'rgba(212,184,150,0.1)', color: 'rgba(212,184,150,0.6)' }}>
                    Pending
                  </span>
                )}
              </div>
              <div className="col-span-5 flex justify-end gap-1.5 flex-wrap">
                {/* Wedding invite buttons */}
                <div className="flex gap-1.5 items-center">
                  <span className="text-xs mr-1" style={{ color: 'rgba(106,130,108,0.6)' }}>Wedding:</span>
                  <button onClick={() => handleWhatsApp(guest, 'wedding')}
                    className="px-2.5 py-1 rounded-md text-xs transition-all hover:scale-105"
                    style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', color: '#25d366' }}>
                    WA
                  </button>
                  <button onClick={() => handleSMS(guest, 'wedding')}
                    className="px-2.5 py-1 rounded-md text-xs transition-all hover:scale-105"
                    style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', color: '#60a5fa' }}>
                    SMS
                  </button>
                  <button onClick={() => handleCopy(guest, 'wedding')}
                    className="px-2.5 py-1 rounded-md text-xs transition-all hover:scale-105"
                    style={{ background: 'rgba(212,184,150,0.15)', border: '1px solid rgba(212,184,150,0.3)', color: '#d4c4a8' }}>
                    {copied === guest.id + 'wedding' ? '✓' : 'Copy'}
                  </button>
                </div>

                {/* Rehearsal dinner buttons - only for rehearsal group */}
                {guest.group === 'rehearsal' && (
                  <div className="flex gap-1.5 items-center">
                    <span className="text-xs mr-1" style={{ color: 'rgba(184,149,107,0.6)' }}>R+W:</span>
                    <button onClick={() => handleWhatsApp(guest, 'rehearsal')}
                      className="px-2.5 py-1 rounded-md text-xs transition-all hover:scale-105"
                      style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', color: '#25d366' }}>
                      WA
                    </button>
                    <button onClick={() => handleSMS(guest, 'rehearsal')}
                      className="px-2.5 py-1 rounded-md text-xs transition-all hover:scale-105"
                      style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', color: '#60a5fa' }}>
                      SMS
                    </button>
                    <button onClick={() => handleCopy(guest, 'rehearsal')}
                      className="px-2.5 py-1 rounded-md text-xs transition-all hover:scale-105"
                      style={{ background: 'rgba(212,184,150,0.15)', border: '1px solid rgba(212,184,150,0.3)', color: '#d4c4a8' }}>
                      {copied === guest.id + 'rehearsal' ? '✓' : 'Copy'}
                    </button>
                  </div>
                )}

                {/* Delete */}
                <button onClick={() => handleDelete(guest.id)}
                  className="px-2 py-1 rounded-md text-xs transition-all hover:scale-105"
                  style={{ background: 'rgba(180,80,80,0.15)', border: '1px solid rgba(180,80,80,0.2)', color: '#d4a0a0' }}>
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
      )}

      {/* RSVP Responses Tab */}
      {activeTab === 'rsvps' && (
        <div className="max-w-5xl mx-auto">
          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl text-center" style={{ background: 'rgba(106,130,108,0.15)', border: '1px solid rgba(106,130,108,0.3)' }}>
              <p className="text-2xl font-bold" style={{ color: '#a8c4a0' }}>{rsvpYesCount}</p>
              <p className="text-xs" style={{ color: 'rgba(168,196,160,0.7)' }}>Attending</p>
            </div>
            <div className="p-4 rounded-xl text-center" style={{ background: 'rgba(180,80,80,0.1)', border: '1px solid rgba(180,80,80,0.2)' }}>
              <p className="text-2xl font-bold" style={{ color: '#d4a0a0' }}>{rsvpNoCount}</p>
              <p className="text-xs" style={{ color: 'rgba(212,160,160,0.7)' }}>Declined</p>
            </div>
            <div className="p-4 rounded-xl text-center" style={{ background: 'rgba(184,149,107,0.15)', border: '1px solid rgba(184,149,107,0.3)' }}>
              <p className="text-2xl font-bold" style={{ color: '#d4c4a8' }}>{totalGuestsCount}</p>
              <p className="text-xs" style={{ color: 'rgba(212,196,168,0.7)' }}>Total Headcount</p>
            </div>
          </div>

          {/* Meal Preferences Summary */}
          {rsvpYesCount > 0 && (
            <div className="mb-6 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,184,150,0.1)' }}>
              <h3 className="text-sm tracking-wider mb-3" style={{ color: 'rgba(212,184,150,0.7)' }}>MEAL PREFERENCES</h3>
              <div className="flex gap-4 flex-wrap">
                {['Vegetarian', 'Vegan', 'Non-Vegetarian'].map(pref => {
                  const count = rsvps.filter(r => r.attending === 'yes' && r.dietaryPreference === pref).length;
                  return count > 0 ? (
                    <span key={pref} className="px-3 py-1 rounded-full text-xs" style={{ background: 'rgba(106,130,108,0.15)', color: '#a8c4a0' }}>
                      {pref}: {count}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {/* RSVP List */}
          <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(212,184,150,0.1)' }}>
            <div className="grid grid-cols-12 gap-2 px-5 py-3 text-xs tracking-wider"
                 style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(212,184,150,0.5)' }}>
              <div className="col-span-2">NAME</div>
              <div className="col-span-2">CONTACT</div>
              <div className="col-span-1">STATUS</div>
              <div className="col-span-1">GUESTS</div>
              <div className="col-span-2">MEAL</div>
              <div className="col-span-2">SONG</div>
              <div className="col-span-1">SOURCE</div>
              <div className="col-span-1">DATE</div>
            </div>

            {rsvps.length === 0 && (
              <div className="px-5 py-8 text-center text-sm" style={{ color: 'rgba(212,184,150,0.4)' }}>
                No RSVP responses yet.
              </div>
            )}

            {rsvps.map((rsvp) => (
              <div key={rsvp.id}
                   className="grid grid-cols-12 gap-2 px-5 py-3 items-center"
                   style={{ borderTop: '1px solid rgba(212,184,150,0.06)' }}>
                <div className="col-span-2 text-sm truncate" style={{ color: '#e8dfd0' }}>
                  {rsvp.name}
                  {rsvp.plusOneNames && <p className="text-xs truncate" style={{ color: 'rgba(212,184,150,0.5)' }}>+{rsvp.plusOneNames}</p>}
                </div>
                <div className="col-span-2 text-xs truncate" style={{ color: 'rgba(212,184,150,0.6)' }}>
                  <div>{rsvp.email}</div>
                  <div>{rsvp.phone}</div>
                </div>
                <div className="col-span-1">
                  <span className="px-2 py-0.5 rounded-full text-xs"
                        style={{ 
                          background: rsvp.attending === 'yes' ? 'rgba(106,130,108,0.2)' : 'rgba(180,80,80,0.15)',
                          color: rsvp.attending === 'yes' ? '#a8c4a0' : '#d4a0a0'
                        }}>
                    {rsvp.attending === 'yes' ? 'Yes' : 'No'}
                  </span>
                </div>
                <div className="col-span-1 text-sm" style={{ color: '#e8dfd0' }}>
                  {rsvp.attending === 'yes' ? rsvp.numberOfGuests : ''}
                </div>
                <div className="col-span-2 text-xs" style={{ color: 'rgba(212,184,150,0.7)' }}>
                  {rsvp.dietaryPreference || ''}
                  {rsvp.otherDietary ? ` (${rsvp.otherDietary})` : ''}
                </div>
                <div className="col-span-2 text-xs truncate" style={{ color: 'rgba(212,184,150,0.5)' }}>
                  {rsvp.songRequest || ''}
                </div>
                <div className="col-span-1">
                  <span className="px-2 py-0.5 rounded-full text-xs"
                        style={{ 
                          background: rsvp.source === 'qr_code' ? 'rgba(59,130,246,0.15)' : 'rgba(106,130,108,0.15)',
                          color: rsvp.source === 'qr_code' ? '#60a5fa' : '#a8c4a0'
                        }}>
                    {rsvp.source === 'qr_code' ? 'QR' : 'Web'}
                  </span>
                </div>
                <div className="col-span-1 text-xs" style={{ color: 'rgba(212,184,150,0.4)' }}>
                  {rsvp.submitted_at ? new Date(rsvp.submitted_at).toLocaleDateString() : ''}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* QR Code Tab */}
      {activeTab === 'qr' && (
        <div className="max-w-5xl mx-auto">
          <div className="max-w-md mx-auto text-center p-8 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,184,150,0.1)' }}>
            <h2 className="font-cormorant text-2xl mb-4" style={{ color: '#d4c4a8' }}>RSVP QR Code</h2>
            <p className="text-sm mb-6" style={{ color: 'rgba(212,184,150,0.6)' }}>
              Guests can scan this QR code to RSVP directly without needing the website password. Print it on your physical invitations or share it digitally.
            </p>
            <div className="bg-white rounded-lg p-4 inline-block mb-4">
              <img src="/rsvp-qr.png" alt="RSVP QR Code" className="w-64 h-64 mx-auto" />
            </div>
            <div className="flex gap-3 justify-center">
              <a href="/rsvp-qr.png" download="Soumi-James-RSVP-QR.png"
                 className="px-5 py-2 rounded-lg text-sm transition-all hover:scale-105"
                 style={{ background: 'rgba(106,130,108,0.3)', border: '1px solid rgba(106,130,108,0.4)', color: '#c8d4c0' }}>
                Download QR
              </a>
            </div>
            <p className="text-xs mt-4" style={{ color: 'rgba(212,184,150,0.4)' }}>
              Links to: soumiandjameswedding.netlify.app/rsvp?direct=true
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
