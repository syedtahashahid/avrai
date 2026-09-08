'use client';

import React from 'react';
import { Waves, Dumbbell, Trophy, Car, Key, Coffee, Briefcase, Eye, ShieldCheck, Sparkles } from 'lucide-react';

export default function WellnessHub({
  property,
  onLaunchVenueTour
}) {
  const isLahore = property.id === 'avari-lahore';

  const iconMap = {
    car: Car,
    key: Key,
    coffee: Coffee,
    briefcase: Briefcase
  };

  return (
    <section id="wellness-section" className="content-section">
      <div className="section-header">
        <div className="section-subtitle">
          Rejuvenation & Signature Protocol
        </div>
        <h2 className="section-title">
          {isLahore ? "Wellness Sanctuary & VIP Privileges" : "Fitness Studio & Express Business Protocol"}
        </h2>
        <p className="section-description">
          {isLahore
            ? "Unwind in the Olympic-style heated swimming pool, maintain your fitness regimen at the health club, or enjoy bespoke Mercedes-Benz airport protocols."
            : "Round-the-clock modern fitness facilities, express laundry, and dedicated executive meeting services in the heart of Gulberg."
          }
        </p>
      </div>

      {/* Wellness Facilities Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        marginBottom: '40px'
      }}>
        {property.wellness.map((item) => (
          <div key={item.id} className="venue-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span className="gold-badge" style={{
                background: isLahore ? 'rgba(212, 175, 55, 0.12)' : 'rgba(224, 90, 71, 0.12)',
                color: isLahore ? 'var(--avari-gold-light)' : 'var(--xpress-coral-light)'
              }}>
                {item.highlight}
              </span>
              {item.has3DTour && (
                <button
                  onClick={() => onLaunchVenueTour(item.tourSceneKey, item.name)}
                  className="luxury-btn-outline"
                  style={{ padding: '6px 12px', fontSize: '0.74rem' }}
                >
                  <Eye size={13} />
                  360° View
                </button>
              )}
            </div>

            <h3 className="venue-name">{item.name}</h3>
            <p className="venue-desc">{item.description}</p>
          </div>
        ))}
      </div>

      {/* VIP Hospitality Protocol Grid */}
      <div style={{
        background: 'var(--bg-surface-1)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '20px',
        padding: '36px'
      }}>
        <h3 style={{
          fontSize: '1.6rem',
          marginBottom: '24px',
          color: isLahore ? 'var(--avari-gold-light)' : 'var(--xpress-coral-light)'
        }}>
          Signature Avari Guest Protocols
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {property.services.map((svc, idx) => {
            const IconComponent = iconMap[svc.icon.toLowerCase()] || ShieldCheck;
            return (
              <div key={idx} style={{
                padding: '20px',
                background: 'var(--bg-surface-2)',
                borderRadius: '12px',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: isLahore ? 'rgba(212, 175, 55, 0.12)' : 'rgba(224, 90, 71, 0.12)',
                  color: isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px'
                }}>
                  <IconComponent size={20} />
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '6px' }}>
                  {svc.title}
                </h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {svc.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
