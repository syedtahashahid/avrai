'use client';

import React, { useState } from 'react';
import { X, Utensils, Check, Calendar, Clock } from 'lucide-react';

export default function TableModal({
  isOpen,
  onClose,
  venue
}) {
  const [guestName, setGuestName] = useState('');
  const [date, setDate] = useState('Today, 20:00');
  const [partySize, setPartySize] = useState('4 Guests');
  const [specialRequests, setSpecialRequests] = useState('Window table with view, celebrating anniversary');
  const [isReserved, setIsReserved] = useState(false);

  if (!isOpen || !venue) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsReserved(true);
  };

  return (
    <div className="luxury-modal-backdrop" onClick={onClose}>
      <div className="luxury-modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--avari-blue)', fontWeight: 700 }}>
              Table Reservation
            </div>
            <h3 style={{ fontSize: '1.6rem', color: '#0F172A' }}>{venue.name}</h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: '#F1F5F9',
              border: '1px solid #CBD5E1',
              borderRadius: '8px',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#475569',
              cursor: 'pointer'
            }}
          >
            <X size={16} />
          </button>
        </div>

        {isReserved ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(2, 124, 255, 0.12)',
              border: '2px solid var(--avari-blue)',
              color: 'var(--avari-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px auto'
            }}>
              <Check size={32} />
            </div>
            <h4 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '8px' }}>
              Table Confirmed at {venue.name}
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '24px' }}>
              A table for {partySize} on {date} has been reserved. A confirmation SMS and email have been simulated.
            </p>
            <button
              onClick={() => {
                setIsReserved(false);
                onClose();
              }}
              className="luxury-btn-gold"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
              <div>
                <label style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: '#64748B', display: 'block', marginBottom: '6px', fontWeight: 600 }}>
                  Guest Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Salman Khan"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    background: '#F8FAFC',
                    border: '1px solid #CBD5E1',
                    borderRadius: '8px',
                    color: '#0F172A',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: '#64748B', display: 'block', marginBottom: '6px', fontWeight: 600 }}>
                    Date & Time
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      background: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      borderRadius: '8px',
                      color: '#0F172A',
                      fontSize: '0.84rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: '#64748B', display: 'block', marginBottom: '6px', fontWeight: 600 }}>
                    Party Size
                  </label>
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      background: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      borderRadius: '8px',
                      color: '#0F172A',
                      fontSize: '0.84rem',
                      outline: 'none'
                    }}
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="6 Guests">6 Guests</option>
                    <option value="8+ Private Dining">8+ Private Dining</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: '#64748B', display: 'block', marginBottom: '6px', fontWeight: 600 }}>
                  Dietary / Special Requests
                </label>
                <textarea
                  rows={3}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    background: '#F8FAFC',
                    border: '1px solid #CBD5E1',
                    borderRadius: '8px',
                    color: '#0F172A',
                    fontSize: '0.85rem'
                  }}
                />
              </div>
            </div>

            <button type="submit" className="luxury-btn-gold" style={{ width: '100%', padding: '12px' }}>
              Confirm Table Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

