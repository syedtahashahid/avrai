'use client';

import React, { useState } from 'react';
import { Users, Eye, Sparkles, Calendar, Layers, Check, Calculator } from 'lucide-react';

export default function BanquetCalc({
  property,
  onLaunchVenueTour,
  onOpenBookingModal
}) {
  const isLahore = property.id === 'avari-lahore';
  const banquets = property.banquets;

  const [selectedVenueId, setSelectedVenueId] = useState(banquets[0]?.id || '');
  const [selectedLayout, setSelectedLayout] = useState('banquet');

  const currentVenue = banquets.find((b) => b.id === selectedVenueId) || banquets[0];

  const layoutLabels = {
    banquet: 'Gala Banquet (Rounds of 10)',
    theater: 'Theater / Auditorium Row',
    cocktail: 'Cocktail Standing Reception',
    classroom: 'Classroom Conference Desks',
    uShape: 'U-Shape Diplomatic Boardroom'
  };

  const calculatedGuests = currentVenue?.layouts?.[selectedLayout] || currentVenue?.capacityMax || 100;

  return (
    <section id="banquets-section" className="content-section">
      <div className="section-header">
        <div className="section-subtitle">
          Royal Gatherings & Corporate Summits
        </div>
        <h2 className="section-title">
          {isLahore ? "Grand Ballrooms & Historic Halls" : "High-Tech Conference & Seminar Halls"}
        </h2>
        <p className="section-description">
          Plan royal weddings, international diplomatic summits, and corporate galas with our interactive space and capacity calculator.
        </p>
      </div>

      {/* Interactive Capacity Calculator Card */}
      <div className="calc-container">
        <div className="calc-header-row">
          <div className="calc-header-icon">
            <Calculator size={22} />
          </div>
          <div>
            <h3 className="calc-title">Interactive Banquet Capacity Calculator</h3>
            <div className="calc-subtitle">
              Test spatial configurations and seating densities in real-time
            </div>
          </div>
        </div>

        <div className="calc-selectors-row">
          {/* Select Venue */}
          <div className="calc-field-group">
            <label htmlFor={`venue-select-${property.id}`}>Select Event Venue</label>
            <select
              id={`venue-select-${property.id}`}
              className="calc-select"
              value={selectedVenueId}
              onChange={(e) => setSelectedVenueId(e.target.value)}
            >
              {banquets.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name} ({b.area})
                </option>
              ))}
            </select>
          </div>

          {/* Select Seating Layout */}
          <div className="calc-field-group">
            <label htmlFor={`layout-select-${property.id}`}>Seating Layout Style</label>
            <select
              id={`layout-select-${property.id}`}
              className="calc-select"
              value={selectedLayout}
              onChange={(e) => setSelectedLayout(e.target.value)}
            >
              <option value="banquet">Gala Banquet (Rounds of 10)</option>
              <option value="theater">Theater Style (Auditorium Rows)</option>
              <option value="cocktail">Cocktail Standing Reception</option>
              <option value="classroom">Classroom with Desks</option>
              <option value="uShape">Executive U-Shape Boardroom</option>
            </select>
          </div>
        </div>

        {/* Live Calculation Output Display */}
        <div className="calc-result-box">
          <div className="calc-stat-item">
            <div className="calc-stat-val">{calculatedGuests.toLocaleString()}</div>
            <div className="calc-stat-lbl">Maximum Guest Capacity</div>
          </div>

          <div className="calc-divider" />

          <div className="calc-stat-item">
            <div className="calc-stat-val" style={{ color: '#0F172A' }}>{currentVenue.area}</div>
            <div className="calc-stat-lbl">Floor Area</div>
          </div>

          <div className="calc-divider" />

          <div className="calc-stat-item">
            <div className="calc-stat-val" style={{ fontSize: '1.5rem', color: 'var(--avari-blue)' }}>
              {layoutLabels[selectedLayout].split('(')[0].trim()}
            </div>
            <div className="calc-stat-lbl">Configured Seating Mode</div>
          </div>
        </div>

        {/* Venue Narrative & 3D Walkthrough Trigger */}
        <div style={{
          marginTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p style={{ fontSize: '0.92rem', color: '#475569', maxWidth: '640px', lineHeight: 1.6 }}>
            {currentVenue.description}
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            {currentVenue.has3DTour && (
              <button
                type="button"
                onClick={() => onLaunchVenueTour(currentVenue.tourSceneKey, currentVenue.name)}
                className="luxury-btn-outline"
                style={{ padding: '12px 20px', borderRadius: '8px' }}
              >
                <Eye size={16} />
                Tour {currentVenue.name} in 3D
              </button>
            )}

            <button
              type="button"
              onClick={() => onOpenBookingModal({ name: `Event Booking: ${currentVenue.name}`, pricePerNight: 'Custom Quote' })}
              className="luxury-btn-gold"
              style={{ padding: '12px 24px', borderRadius: '8px' }}
            >
              <Calendar size={16} />
              Inquire Event Dates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
