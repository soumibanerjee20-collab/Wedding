import React, { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'casper';

const INVITE_MESSAGE = (name) => 
  `Hi ${name}!\nIt's Soumi & James!\n\nWe survived long distance, immigration paperwork, and 7 time zones. Now there's only one thing left to do: *We're getting married on September 9, 2026!*\n\nCome celebrate with us under the wide Wyoming sky, surrounded by Casper mountains, wild prairies, and the people we love most.\n\nFormal invitation and all the details:\nhttps://soumiandjameswedding.netlify.app\n\nPassword: sj2026`;

const generateId = () => Math.random().toString(36).substr(2, 9);

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [guests, setGuests] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [copied, setCopied] = useState(null);

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

  const markInvited = (guestId, method) => {
    const updated = guests.map(g => 
      g.id === guestId ? { ...g, invited: true, invited_at: new Date().toISOString(), sent_via: method } : g
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
      invited: false,
      invited_at: null,
      sent_via: null,
      created_at: new Date().toISOString(),
    };
    saveGuests([newGuest, ...guests]);
    setNewName('');
    setNewPhone('');
  };

  const handleWhatsApp = (guest) => {
    const cleanPhone = guest.phone.replace(/[\s\-()]/g, '');
    const message = encodeURIComponent(INVITE_MESSAGE(guest.name));
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
    markInvited(guest.id, 'whatsapp');
  };

  const handleSMS = (guest) => {
    const cleanPhone = guest.phone.replace(/[\s\-()]/g, '');
    const message = encodeURIComponent(INVITE_MESSAGE(guest.name));
    window.open(`sms:${cleanPhone}?body=${message}`, '_blank');
    markInvited(guest.id, 'sms');
  };

  const handleCopy = (guest) => {
    const message = INVITE_MESSAGE(guest.name);
    navigator.clipboard.writeText(message).then(() => {
      setCopied(guest.id);
      setTimeout(() => setCopied(null), 2000);
      markInvited(guest.id, 'copied');
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

  const invitedCount = guests.filter(g => g.invited).length;
  const totalCount = guests.length;

  const sentViaLabel = (via) => {
    if (via === 'whatsapp') return 'via WA';
    if (via === 'sms') return 'via SMS';
    if (via === 'copied') return 'copied';
    return '';
  };

  return (
    <div className="min-h-screen p-6" 
         style={{ background: 'linear-gradient(135deg, #1a2a1f 0%, #2d3d32 50%, #1f2f24 100%)' }}
         data-testid="admin-dashboard">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="font-cormorant text-3xl mb-2" style={{ color: '#d4c4a8' }}>
          Invite Manager
        </h1>
        <p className="text-sm" style={{ color: 'rgba(212,184,150,0.5)' }}>
          {invitedCount} invited / {totalCount} total guests
        </p>
      </div>

      {/* Add Guest Form */}
      <div className="max-w-4xl mx-auto mb-8 p-5 rounded-xl"
           style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,184,150,0.1)' }}>
        <h2 className="text-sm tracking-wider mb-4" style={{ color: 'rgba(212,184,150,0.7)' }}>
          ADD GUEST
        </h2>
        <form onSubmit={handleAddGuest} className="flex flex-wrap gap-3">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Name"
            className="flex-1 min-w-[180px] px-4 py-2.5 rounded-lg text-sm outline-none"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,184,150,0.15)', color: '#e8dfd0' }}
            data-testid="guest-name-input"
          />
          <input
            type="text"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            placeholder="Phone number (e.g., +1234567890)"
            className="flex-1 min-w-[220px] px-4 py-2.5 rounded-lg text-sm outline-none"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,184,150,0.15)', color: '#e8dfd0' }}
            data-testid="guest-phone-input"
          />
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

      {/* Guest List */}
      <div className="max-w-4xl mx-auto">
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(212,184,150,0.1)' }}>
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 px-5 py-3 text-xs tracking-wider"
               style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(212,184,150,0.5)' }}>
            <div className="col-span-3">NAME</div>
            <div className="col-span-2">PHONE</div>
            <div className="col-span-2">STATUS</div>
            <div className="col-span-1">DATE</div>
            <div className="col-span-4 text-right">SEND VIA</div>
          </div>

          {guests.length === 0 && (
            <div className="px-5 py-8 text-center text-sm" style={{ color: 'rgba(212,184,150,0.4)' }}>
              No guests added yet. Add your first guest above.
            </div>
          )}
          
          {guests.map((guest) => (
            <div key={guest.id} 
                 className="grid grid-cols-12 gap-2 px-5 py-3 items-center"
                 style={{ borderTop: '1px solid rgba(212,184,150,0.06)' }}
                 data-testid={`guest-row-${guest.id}`}>
              <div className="col-span-3 text-sm truncate" style={{ color: '#e8dfd0' }}>
                {guest.name}
              </div>
              <div className="col-span-2 text-sm truncate" style={{ color: 'rgba(212,184,150,0.7)' }}>
                {guest.phone}
              </div>
              <div className="col-span-2">
                {guest.invited ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs"
                        style={{ background: 'rgba(106,130,108,0.2)', color: '#a8c4a0' }}>
                    Sent {sentViaLabel(guest.sent_via)}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs"
                        style={{ background: 'rgba(212,184,150,0.1)', color: 'rgba(212,184,150,0.6)' }}>
                    Pending
                  </span>
                )}
              </div>
              <div className="col-span-1 text-xs" style={{ color: 'rgba(212,184,150,0.4)' }}>
                {guest.invited_at ? new Date(guest.invited_at).toLocaleDateString() : ''}
              </div>
              <div className="col-span-4 flex justify-end gap-2">
                {/* WhatsApp */}
                <button
                  onClick={() => handleWhatsApp(guest)}
                  className="px-3 py-1.5 rounded-md text-xs transition-all hover:scale-105 flex items-center gap-1"
                  style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', color: '#25d366' }}
                  data-testid={`wa-${guest.id}`}
                >
                  WhatsApp
                </button>
                {/* SMS */}
                <button
                  onClick={() => handleSMS(guest)}
                  className="px-3 py-1.5 rounded-md text-xs transition-all hover:scale-105 flex items-center gap-1"
                  style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', color: '#60a5fa' }}
                  data-testid={`sms-${guest.id}`}
                >
                  SMS
                </button>
                {/* Copy */}
                <button
                  onClick={() => handleCopy(guest)}
                  className="px-3 py-1.5 rounded-md text-xs transition-all hover:scale-105"
                  style={{ background: 'rgba(212,184,150,0.15)', border: '1px solid rgba(212,184,150,0.3)', color: '#d4c4a8' }}
                  data-testid={`copy-${guest.id}`}
                >
                  {copied === guest.id ? 'Copied!' : 'Copy'}
                </button>
                {/* Delete */}
                <button
                  onClick={() => handleDelete(guest.id)}
                  className="px-2 py-1.5 rounded-md text-xs transition-all hover:scale-105"
                  style={{ background: 'rgba(180,80,80,0.15)', border: '1px solid rgba(180,80,80,0.2)', color: '#d4a0a0' }}
                  data-testid={`delete-guest-${guest.id}`}
                >
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
