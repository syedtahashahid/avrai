'use client';

import React, { useState } from 'react';

import TableModal from '../components/TableModal';
import { PROPERTIES_DATA } from '../data/propertiesData';
import { Calendar, Compass, MapPin, ArrowRight, Clock, Eye, Sparkles, Utensils } from 'lucide-react';
import Link from 'next/link';

export default function DiningPage() {
  const lahoreDining = PROPERTIES_DATA['avari-lahore'].dining;
  const xpressDining = PROPERTIES_DATA['avari-xpress-gulberg'].dining;

  const [selectedVenue, setSelectedVenue] = useState(null);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      

      {/* Hero Banner with Dynasty image */}
      <section
        className="luxury-hero-section"
        style={{
          backgroundImage: `url('/images/dynasty-dining.jpg')`,
          minHeight: '55vh',
          paddingBottom: '60px'
        }}
      >
        <div className="hero-gradient-overlay" />

        <div className="hero-content-box">
          <span className="hero-overhead-tag">Gastronomic Excellence</span>
          <h1 className="hero-main-title">
            Signature Restaurants & Fine Dining
          </h1>
          <p className="hero-sub-text">
            From imperial Szechuan delicacies to live Japanese Teppanyaki grills, slow-cooked royal Avadhi recipes, and authentic open-air Lahori BBQ.
          </p>
        </div>
      </section>

      {/* Avari Hotel Lahore Dining Section */}
      <section className="section-container">
        <div className="section-header-center">
          <div className="section-overhead">Avari Hotel Lahore (5-Star Flagship)</div>
          <h2 className="section-main-heading">Award-Winning Culinary Destinations</h2>
          <p className="section-paragraph">
            Five world-class restaurants setting the culinary benchmark in Pakistan for over three decades.
          </p>
        </div>

        <div className="dining-venue-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '30px',
          marginBottom: '80px'
        }}>
          {lahoreDining.map((venue) => (
            <div
              key={venue.id}
              className="dining-venue-card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span className="gold-badge">{venue.badge}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Clock size={13} />
                  {venue.timing.split('|')[0]}
                </span>
              </div>

              <h3 style={{ fontSize: '1.6rem', color: '#0F172A', marginBottom: '6px' }}>{venue.name}</h3>
              <div style={{ fontSize: '0.84rem', color: 'var(--avari-blue)', fontWeight: 600, marginBottom: '14px' }}>
                {venue.cuisine}
              </div>

              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65, marginBottom: '20px', flexGrow: 1 }}>
                {venue.description}
              </p>

              <div style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                padding: '14px',
                marginBottom: '20px'
              }}>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  Chef Signature Selections
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {venue.signatureDishes.map((dish, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.76rem',
                        padding: '4px 10px',
                        background: 'rgba(197, 160, 89, 0.12)',
                        border: '1px solid var(--border-gold)',
                        borderRadius: '4px',
                        color: 'var(--avari-gold-light)'
                      }}
                    >
                      {dish}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                {venue.has3DTour && (
                  <Link
                    href="/hotels/avari-lahore"
                    className="btn-luxury-outline"
                    style={{ flex: 1, padding: '10px', fontSize: '0.78rem' }}
                  >
                    <Eye size={14} />
                    360° Tour
                  </Link>
                )}
                <button
                  onClick={() => setSelectedVenue(venue)}
                  className="btn-luxury-gold"
                  style={{ flex: 1, padding: '10px', fontSize: '0.78rem' }}
                >
                  <Calendar size={14} />
                  Reserve Table
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Avari Xpress Gulberg Dining Section */}
        <div className="section-header-center">
          <div className="section-overhead">Avari Xpress Gulberg (Boutique)</div>
          <h2 className="section-main-heading">The Coffee Shop & Express Gourmet</h2>
          <p className="section-paragraph">
            Artisanal espresso roasts, Anglo-Indian comfort cuisine, and 24/7 in-room dining in the heart of Gulberg.
          </p>
        </div>

        <div className="dining-venue-grid dining-venue-grid-xpress" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '30px'
        }}>
          {xpressDining.map((venue) => (
            <div
              key={venue.id}
              className="dining-venue-card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span className="gold-badge" style={{ color: '#E05A47', borderColor: '#E05A47' }}>
                  {venue.badge}
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {venue.timing}
                </span>
              </div>

              <h3 style={{ fontSize: '1.6rem', color: '#0F172A', marginBottom: '6px' }}>{venue.name}</h3>
              <div style={{ fontSize: '0.84rem', color: 'var(--avari-blue)', fontWeight: 600, marginBottom: '14px' }}>
                {venue.cuisine}
              </div>

              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65, marginBottom: '20px', flexGrow: 1 }}>
                {venue.description}
              </p>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => setSelectedVenue(venue)}
                  className="btn-luxury-gold"
                  style={{ width: '100%', padding: '10px', fontSize: '0.78rem', background: '#E05A47', color: '#FFF' }}
                >
                  <Calendar size={14} />
                  Reserve Table
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TableModal
        isOpen={!!selectedVenue}
        onClose={() => setSelectedVenue(null)}
        venue={selectedVenue}
      />
    </div>
  );
}

