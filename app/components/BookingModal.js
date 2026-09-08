'use client';

import React, { useState } from 'react';
import { X, Calendar, Users, ShieldCheck, Check, Sparkles, ExternalLink } from 'lucide-react';
import { getTravelClickBookingUrl } from '../utils/bookingUrl';

export default function BookingModal({
  isOpen,
  onClose,
  selectedRoom,
  property
}) {
  const [guestName, setGuestName] = useState('');
  const [dates, setDates] = useState('2026-09-15 to 2026-09-18 (3 Nights)');
  const [guestsCount, setGuestsCount] = useState('2 Adults');
  const [addChauffeur, setAddChauffeur] = useState(true);
  const [addLounge, setAddLounge] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const isLahore = property?.id === 'avari-lahore';
  const roomName = selectedRoom?.name || (isLahore ? 'Presidential Suite' : 'Xpress Executive Suite');
  const baseRate = selectedRoom?.priceNumber || (isLahore ? 145000 : 48000);
  const nights = 3;
  const chauffeurFee = addChauffeur ? 12000 : 0;
  const loungeFee = addLounge ? 15000 : 0;
  const subtotal = baseRate * nights + chauffeurFee + loungeFee;
  const tax = Math.round(subtotal * 0.16);
  const grandTotal = subtotal + tax;

  const travelClickUrl = getTravelClickBookingUrl({
    hotelId: property?.id || '14412',
    checkIn: '2026-09-15',
    checkOut: '2026-09-18',
    adults: 2
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="luxury-modal-backdrop" onClick={onClose}>
      <div className="luxury-modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--avari-blue)', fontWeight: 700 }}>
              Reservation & Live Booking Redirection
            </div>
            <h3 style={{ fontSize: '1.6rem', color: '#0F172A' }}>{roomName}</h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: '#F1F5F9',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#334155',
              cursor: 'pointer'
            }}
          >
            <X size={16} />
          </button>
        </div>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: isLahore ? 'rgba(212, 175, 55, 0.2)' : 'rgba(224, 90, 71, 0.2)',
              border: `2px solid ${isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral)'}`,
              color: isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px auto'
            }}>
              <Check size={32} />
            </div>
            <h4 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '8px' }}>
              VIP Reservation Confirmed
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Booking reference <strong>#AVR-2026-9881</strong> has been simulated. In the live integration, this connects with Avari's central reservation engine.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="luxury-btn-gold"
              style={{ background: !isLahore ? 'var(--xpress-gradient)' : undefined }}
            >
              Return to 3D Experience
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
              <div>
                <label style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: '#64748B', display: 'block', marginBottom: '6px', fontWeight: 600 }}>
                  Guest Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Mansoor"
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
                    Stay Dates
                  </label>
                  <input
                    type="text"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      background: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      borderRadius: '8px',
                      color: '#0F172A',
                      fontSize: '0.82rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: '#64748B', display: 'block', marginBottom: '6px', fontWeight: 600 }}>
                    Guests
                  </label>
                  <input
                    type="text"
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      background: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      borderRadius: '8px',
                      color: '#0F172A',
                      fontSize: '0.82rem'
                    }}
                  />
                </div>
              </div>

              {/* VIP Add-ons */}
              <div style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '10px',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <div style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.08em', fontWeight: 700 }}>
                  VIP Protocol Add-ons
                </div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.84rem', cursor: 'pointer', color: '#334155' }}>
                  <input
                    type="checkbox"
                    checked={addChauffeur}
                    onChange={(e) => setAddChauffeur(e.target.checked)}
                  />
                  <span>Mercedes-Benz Airport Chauffeur Protocol (+PKR 12,000)</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.84rem', cursor: 'pointer', color: '#334155' }}>
                  <input
                    type="checkbox"
                    checked={addLounge}
                    onChange={(e) => setAddLounge(e.target.checked)}
                  />
                  <span>Executive Club Lounge VIP Access (+PKR 15,000)</span>
                </label>
              </div>

              {/* Price Calculation Summary */}
              <div style={{
                background: '#F0F6FF',
                border: '1px solid rgba(2, 124, 255, 0.25)',
                borderRadius: '10px',
                padding: '14px',
                fontSize: '0.85rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ color: '#475569' }}>3 Nights @ PKR {baseRate.toLocaleString()}</span>
                  <span style={{ color: '#0F172A', fontWeight: 600 }}>PKR {(baseRate * nights).toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ color: '#475569' }}>Protocol Add-ons</span>
                  <span style={{ color: '#0F172A', fontWeight: 600 }}>PKR {(chauffeurFee + loungeFee).toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#475569' }}>Taxes & Tourism Fee (16%)</span>
                  <span style={{ color: '#0F172A', fontWeight: 600 }}>PKR {tax.toLocaleString()}</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '8px',
                  borderTop: '1px solid rgba(2, 124, 255, 0.2)',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: 'var(--avari-blue)'
                }}>
                  <span>Grand Total</span>
                  <span>PKR {grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={travelClickUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-gold"
                style={{
                  width: '100%',
                  padding: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  fontSize: '0.88rem'
                }}
                title="Reserve directly on official TravelClick reservation engine"
              >
                <span>Book on TravelClick (Official Engine)</span>
                <ExternalLink size={16} />
              </a>

              <button
                type="submit"
                className="btn-luxury-outline"
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '0.82rem'
                }}
              >
                Simulate Direct Booking
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
