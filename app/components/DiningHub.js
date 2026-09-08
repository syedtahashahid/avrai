'use client';

import React from 'react';
import { Utensils, Clock, Sparkles, Eye, Calendar, ArrowUpRight } from 'lucide-react';

export default function DiningHub({
  property,
  onLaunchVenueTour,
  onOpenTableModal
}) {
  const isLahore = property.id === 'avari-lahore';

  return (
    <section id="dining-section" className="content-section">
      <div className="section-header">
        <div className="section-subtitle">
          Epicurean Excellence
        </div>
        <h2 className="section-title">
          {isLahore ? "Award-Winning Gastronomic Destinations" : "Boutique Culinary & Artisanal Coffee"}
        </h2>
        <p className="section-description">
          {isLahore
            ? "From royal Avadhi Mughlai banquets to live Japanese Teppanyaki grills and celebrated Szechuan delicacies, Avari Hotel Lahore is Pakistan's premier culinary epicenter."
            : "Savor vibrant Anglo-Indian delicacies, wholesome business power lunches, and specialty artisanal roasts at Avari Xpress Gulberg."
          }
        </p>
      </div>

      <div className="dining-grid">
        {property.dining.map((venue) => (
          <div key={venue.id} className="venue-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <span className="gold-badge" style={{
                background: isLahore ? 'rgba(212, 175, 55, 0.12)' : 'rgba(224, 90, 71, 0.12)',
                color: isLahore ? 'var(--avari-gold-light)' : 'var(--xpress-coral-light)'
              }}>
                {venue.badge}
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                <Clock size={13} />
                <span>{venue.timing.split('|')[0]}</span>
              </div>
            </div>

            <h3 className="venue-name">{venue.name}</h3>
            <div className="venue-cuisine">{venue.cuisine}</div>
            <p className="venue-desc">{venue.description}</p>

            {/* Signature Dishes */}
            <div className="signature-dishes-box">
              <div className="signature-label">Signature Chef Specialties</div>
              <div className="dishes-pills">
                {venue.signatureDishes.map((dish, i) => (
                  <span key={i} className="dish-pill">{dish}</span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              {venue.has3DTour && (
                <button
                  onClick={() => onLaunchVenueTour(venue.tourSceneKey, venue.name)}
                  className="luxury-btn-outline"
                  style={{ padding: '8px 14px', fontSize: '0.78rem', flex: 1 }}
                >
                  <Eye size={14} />
                  360° Venue Tour
                </button>
              )}

              <button
                onClick={() => onOpenTableModal(venue)}
                className="luxury-btn-gold"
                style={{
                  padding: '8px 14px',
                  fontSize: '0.78rem',
                  flex: 1,
                  background: !isLahore ? 'var(--xpress-gradient)' : undefined
                }}
              >
                <Calendar size={14} />
                Reserve Table
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
