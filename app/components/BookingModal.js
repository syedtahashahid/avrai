'use client';

import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { recordBookingActivity, saveDemoAccount } from '../lib/demoStore';

export default function BookingModal({ isOpen, onClose, selectedRoom, property }) {
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('2026-09-15');
  const [checkOut, setCheckOut] = useState('2026-09-18');
  const [guests, setGuests] = useState('2');
  const [joinRewards, setJoinRewards] = useState(true);
  const [reference, setReference] = useState('');

  if (!isOpen) return null;

  const roomName = selectedRoom?.name || 'Avari room';
  const baseRate = selectedRoom?.priceNumber || 0;
  const nights = Math.max(1, Math.ceil((new Date(checkOut) - new Date(checkIn)) / 86400000));
  const total = baseRate * nights;

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextReference = `AVR-${Date.now().toString().slice(-8)}`;
    recordBookingActivity({ property: property?.name, hotelId: property?.id, room: roomName, status: 'internal-requested', source: 'internal-booking', guestName, email, phone, guests, checkIn, checkOut, reference: nextReference });
    if (joinRewards && email) saveDemoAccount({ name: guestName, email, membership: 'Avari rewards interest', createdAt: new Date().toISOString() });
    setReference(nextReference);
  };

  return (
    <div className="luxury-modal-backdrop" onClick={onClose}>
      <div className="luxury-modal-content internal-booking-modal" onClick={(event) => event.stopPropagation()}>
        <div className="internal-booking-heading">
          <div><span>Direct Avari reservation</span><h3>{roomName}</h3><p>{property?.name}</p></div>
          <button onClick={onClose} aria-label="Close booking form"><X size={17} /></button>
        </div>
        {reference ? (
          <div className="internal-booking-success">
            <div className="internal-booking-check"><Check size={30} /></div>
            <span className="booking-success-label">Request received</span>
            <h4>Your stay is with our reservations team.</h4>
            <p>Reference <strong>{reference}</strong>. We will contact {email} to confirm availability and next steps. No external booking service was used.</p>
            {joinRewards && <p className="booking-reward-note">Your Avari rewards profile interest was saved for this booking request.</p>}
            <button className="btn-luxury-gold" onClick={onClose}>Return to the room</button>
          </div>
        ) : (
          <form className="internal-booking-form" onSubmit={handleSubmit}>
            <div className="internal-booking-field-grid">
              <label>Full name<input required value={guestName} onChange={(event) => setGuestName(event.target.value)} placeholder="Your full name" /></label>
              <label>Email<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" /></label>
              <label>Phone<input required type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="+92" /></label>
              <label>Guests<input required type="number" min="1" max="12" value={guests} onChange={(event) => setGuests(event.target.value)} /></label>
              <label>Check-in<input required type="date" value={checkIn} onChange={(event) => setCheckIn(event.target.value)} /></label>
              <label>Check-out<input required type="date" value={checkOut} onChange={(event) => setCheckOut(event.target.value)} /></label>
            </div>
            <div className="internal-booking-summary"><span>{nights} night{nights > 1 ? 's' : ''} · preview room rate</span><strong>{baseRate ? `PKR ${total.toLocaleString()}` : 'Quote after availability check'}</strong><small>Final availability, taxes, and payment instructions are confirmed by Avari reservations.</small></div>
            <label className="rewards-consent"><input type="checkbox" checked={joinRewards} onChange={(event) => setJoinRewards(event.target.checked)} /> <span>Sign me up for Avari rewards so I can earn benefits from this booking.</span></label>
            <button className="btn-luxury-gold" type="submit">Send booking request</button>
          </form>
        )}
      </div>
    </div>
  );
}

