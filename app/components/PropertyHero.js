'use client';

import React from 'react';
import { Crown, Building2, Star, MapPin, Eye, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function PropertyHero({
  property,
  onLaunchTour,
  onExploreRooms
}) {
  const isLahore = property.id === 'avari-lahore';

  return (
    <section style={{
      position: 'relative',
      padding: '70px 24px 40px 24px',
      maxWidth: '1360px',
      margin: '0 auto',
      width: '100%'
    }}>
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: isLahore ? '10%' : '60%',
        width: '500px',
        height: '350px',
        background: isLahore
          ? 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(0,0,0,0) 70%)'
          : 'radial-gradient(circle, rgba(224, 90, 71, 0.12) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <span className="gold-badge" style={{
            background: isLahore ? 'rgba(212, 175, 55, 0.12)' : 'rgba(224, 90, 71, 0.12)',
            color: isLahore ? 'var(--avari-gold-light)' : 'var(--xpress-coral-light)',
            borderColor: isLahore ? 'var(--border-gold-subtle)' : 'rgba(224, 90, 71, 0.3)'
          }}>
            {isLahore ? <Crown size={14} /> : <Building2 size={14} />}
            {property.brandTier}
          </span>

          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}>
            <MapPin size={14} color={isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral)'} />
            {property.location}
          </span>

          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.8rem',
            color: '#F59E0B',
            fontWeight: 600
          }}>
            <Star size={14} fill="#F59E0B" />
            {property.stats.tripAdvisorRating} TripAdvisor Excellence
          </span>
        </div>

        {/* Big Title & Tagline */}
        <div style={{ maxWidth: '940px' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '16px'
          }}>
            Experience {property.name} in{' '}
            <span className={isLahore ? 'gold-gradient-text' : 'coral-gradient-text'}>
              Interactive 3D
            </span>
          </h1>

          <p style={{
            fontSize: '1.25rem',
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            color: isLahore ? 'var(--avari-gold-light)' : 'var(--xpress-coral-light)',
            marginBottom: '18px'
          }}>
            "{property.tagline}"
          </p>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            maxWidth: '820px',
            marginBottom: '36px',
            fontWeight: 300
          }}>
            {property.description}
          </p>

          {/* Hero CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              onClick={() => onLaunchTour(property.rooms[0])}
              className="luxury-btn-gold"
              style={{
                background: !isLahore ? 'var(--xpress-gradient)' : undefined,
                boxShadow: !isLahore ? 'var(--shadow-coral-glow)' : undefined
              }}
            >
              <Eye size={18} />
              Launch 360° Room Tour ({property.rooms[0].name})
            </button>

            <button
              onClick={onExploreRooms}
              className="luxury-btn-outline"
            >
              Explore All Room Tiers ({property.rooms.length} Suites)
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginTop: '50px',
          padding: '24px',
          background: 'var(--bg-glass)',
          borderRadius: '16px',
          border: '1px solid var(--border-subtle)',
          backdropFilter: 'blur(16px)'
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.85rem',
              fontWeight: 700,
              color: isLahore ? 'var(--avari-gold-light)' : 'var(--xpress-coral-light)'
            }}>
              {property.stats.roomsCount}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Luxury Accommodations
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.85rem',
              fontWeight: 700,
              color: isLahore ? 'var(--avari-gold-light)' : 'var(--xpress-coral-light)'
            }}>
              {property.stats.diningCount}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Culinary Destinations
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.85rem',
              fontWeight: 700,
              color: isLahore ? 'var(--avari-gold-light)' : 'var(--xpress-coral-light)'
            }}>
              {property.stats.banquetCapacity}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Event Capacity
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.85rem',
              fontWeight: 700,
              color: isLahore ? 'var(--avari-gold-light)' : 'var(--xpress-coral-light)'
            }}>
              100% Immersive
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              360° Photorealistic Tours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
