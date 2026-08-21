import React, { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'casper';

const WEDDING_MESSAGE = (name) => 
  `Hi ${name}!\nIt's Soumi & James!\n\nWe survived long distance, immigration paperwork, and 7 time zones. Now there's only one thing left to do: *We're getting married on October 25, 2026!*\n\nCome celebrate with us under the wide Wyoming sky, surrounded by Casper mountains, wild prairies, and the people we love most.\n\nFormal invitation and all the details:\nhttps://soumiandjameswedding.netlify.app\n\nPassword: sj2026`;

const REHEARSAL_MESSAGE = (name) => 
  `Hi ${name}!\nIt's Soumi & James!\n\nAs one of our closest family and friends, we would love for you to join us for our *Rehearsal Dinner on October 24, 2026* the evening before the wedding.\n\nIt will be an intimate gathering to celebrate, share stories, and enjoy a wonderful evening together before the big day.\n\nMore details to follow soon!`;

const generateId = () => Math.random().toString(36).substr(2, 9);

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [guests, setGuests] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newGroup, setNewGroup] = useState('wedding');
  const [copied, setCopied] = useState(null);
  const [filter, setFilter] = useState('all');

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
      setError('');
    } else {
      setError('Wrong password');
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
    if (inviteType === 'rehearsal') return REHEARSAL_MESSAGE(guest.name);
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

  return (
    <div className="min-h-screen p-6" 
         style={{ background: 'linear-gradient(135deg, #1a2a1f 0%, #2d3d32 50%, #1f2f24 100%)' }}
         data-testid="admin-dashboard">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6">
        <h1 className="font-cormorant text-3xl mb-2" style={{ color: '#d4c4a8' }}>
          Invite Manager
        </h1>
        <div className="flex gap-4 text-sm" style={{ color: 'rgba(212,184,150,0.5)' }}>
          <span>{invitedCount} invited / {guests.length} total</span>
          <span>|</span>
          <span>{weddingCount} wedding</span>
          <span>|</span>
          <span>{rehearsalCount} rehearsal dinner</span>
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
                    <span className="text-xs mr-1" style={{ color: 'rgba(184,149,107,0.6)' }}>Dinner:</span>
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
    </div>
  );
};

export default AdminPage;
