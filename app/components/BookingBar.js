'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  MapPin,
  Calendar,
  Users,
  Search,
  ChevronDown,
  Building2,
  Crown,
  ExternalLink
} from 'lucide-react';
import { PORTFOLIO_PROPERTIES } from '../data/portfolioData';

export default function BookingBar({ defaultHotel = 'avari-lahore' }) {
  const router = useRouter();

  const [selectedHotel, setSelectedHotel] = useState(defaultHotel);
  const [hotelDropdownOpen, setHotelDropdownOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState('2026-09-15');
  const [checkOutDate, setCheckOutDate] = useState('2026-09-18');
  const [guests, setGuests] = useState('2 Adults, 1 Room');
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);

  const hotelNames = {
    'avari-lahore': {
      name: 'Avari Hotel Lahore',
      tag: '5-Star Flagship • The Mall Road, Lahore'
    },
    'avari-xpress-gulberg': {
      name: 'Avari Xpress Gulberg',
      tag: '4-Star Contemporary Boutique • Gulberg III, Lahore'
    },
    ...Object.fromEntries(Object.values(PORTFOLIO_PROPERTIES).map((property) => [property.slug, {
      name: property.name,
      tag: `${property.category} • ${property.city}`
    }]))
  };

  const handleSelectHotel = (hotelKey) => {
    setSelectedHotel(hotelKey);
    setHotelDropdownOpen(false);
  };

  const handleApplyGuests = () => {
    setGuests(`${adults} Adults, ${rooms} Room${rooms > 1 ? 's' : ''}`);
    setGuestDropdownOpen(false);
  };

  const handleSearch = () => {
    router.push(`/booking?hotel=${encodeURIComponent(selectedHotel)}&checkin=${encodeURIComponent(checkInDate)}&checkout=${encodeURIComponent(checkOutDate)}&adults=${adults}&rooms=${rooms}`);
  };

  return (
    <div className="booking-bar-wrapper">
      <div className="pc-booking-bar">
        {/* Segment 1: Destination / Hotel Picker */}
        <div
          className="bk-segment"
          onClick={() => setHotelDropdownOpen(!hotelDropdownOpen)}
        >
          <div className="bk-segment-label">
            <MapPin size={13} color="var(--avari-gold)" />
            Destination / Hotel
          </div>
          <div className="bk-segment-value" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>{hotelNames[selectedHotel]?.name || 'Avari Hotel Lahore'}</span>
            <ChevronDown size={15} color="var(--text-muted)" />
          </div>
          <div className="bk-segment-sub">
            {(hotelNames[selectedHotel]?.tag || '5-Star Flagship').split('•')[0]}
          </div>

          {/* Hotel Dropdown */}
          {hotelDropdownOpen && (
            <div className="bk-dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <div style={{ padding: '8px 18px', fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--avari-gold)', fontWeight: 700 }}>
                Select an Avari destination
              </div>
              {Object.values(PORTFOLIO_PROPERTIES).map((property) => (
                <div className="bk-dropdown-item" key={property.slug} onClick={() => handleSelectHotel(property.slug)}>
                  <div className="bk-hotel-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {property.slug === 'avari-lahore' ? <Crown size={15} color="var(--avari-gold)" /> : <Building2 size={15} color="var(--avari-blue)" />}
                    {property.name}
                  </div>
                  <div className="bk-hotel-sub">{property.category} • {property.city}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Segment 2: Check-in / Check-out Dates */}
        <div className="bk-segment">
          <div className="bk-segment-label">
            <Calendar size={13} color="var(--avari-gold)" />
            Stay Dates (3 Nights)
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#0F172A',
                fontWeight: 600,
                fontSize: '0.82rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
                cursor: 'pointer'
              }}
            />
            <span style={{ color: '#64748B' }}>→</span>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#0F172A',
                fontWeight: 600,
                fontSize: '0.82rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
                cursor: 'pointer'
              }}
            />
          </div>
          <div className="bk-segment-sub">Best Rate Guarantee Included</div>
        </div>

        {/* Segment 3: Rooms & Guests */}
        <div
          className="bk-segment"
          onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
        >
          <div className="bk-segment-label">
            <Users size={13} color="var(--avari-gold)" />
            Rooms & Guests
          </div>
          <div className="bk-segment-value" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>{guests}</span>
            <ChevronDown size={15} color="var(--text-muted)" />
          </div>
          <div className="bk-segment-sub">Special Corporate & Member Rates</div>

          {/* Guest Selector Dropdown */}
          {guestDropdownOpen && (
            <div
              className="bk-dropdown-menu"
              style={{ padding: '18px' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.84rem', color: '#0F172A', fontWeight: 600 }}>Adults</span>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      style={{ width: '28px', height: '28px', background: '#F1F5F9', border: '1px solid #CBD5E1', color: '#0F172A', fontWeight: 700, borderRadius: '4px', cursor: 'pointer' }}
                    >
                      -
                    </button>
                    <span style={{ minWidth: '20px', textAlign: 'center', color: '#0F172A', fontWeight: 700 }}>{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      style={{ width: '28px', height: '28px', background: '#F1F5F9', border: '1px solid #CBD5E1', color: '#0F172A', fontWeight: 700, borderRadius: '4px', cursor: 'pointer' }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.84rem', color: '#0F172A', fontWeight: 600 }}>Rooms</span>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button
                      type="button"
                      onClick={() => setRooms(Math.max(1, rooms - 1))}
                      style={{ width: '28px', height: '28px', background: '#F1F5F9', border: '1px solid #CBD5E1', color: '#0F172A', fontWeight: 700, borderRadius: '4px', cursor: 'pointer' }}
                    >
                      -
                    </button>
                    <span style={{ minWidth: '20px', textAlign: 'center', color: '#0F172A', fontWeight: 700 }}>{rooms}</span>
                    <button
                      type="button"
                      onClick={() => setRooms(rooms + 1)}
                      style={{ width: '28px', height: '28px', background: '#F1F5F9', border: '1px solid #CBD5E1', color: '#0F172A', fontWeight: 700, borderRadius: '4px', cursor: 'pointer' }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleApplyGuests}
                className="btn-luxury-gold"
                style={{ width: '100%', padding: '8px', fontSize: '0.78rem' }}
              >
                Apply
              </button>
            </div>
          )}
        </div>

        {/* Segment 4: Check Rates & TravelClick Direct Redirection */}
        <button
          type="button"
          onClick={handleSearch}
          className="bk-submit-btn"
          title="Redirects to official Avari reservation engine on TravelClick"
        >
          <Search size={16} strokeWidth={2.5} />
          <span>Check Rates</span>
          <ExternalLink size={14} style={{ marginLeft: '2px', opacity: 0.9 }} />
        </button>
      </div>
    </div>
  );
}

