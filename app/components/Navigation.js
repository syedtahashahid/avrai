'use client';

import React from 'react';
import { Crown, Sparkles, Building2, Presentation, Calendar, Phone } from 'lucide-react';

export default function Navigation({
  selectedPropertyId,
  onSelectProperty,
  onOpenPitchMode,
  onOpenBookingModal,
  activeSection,
  onNavClick
}) {
  const isLahore = selectedPropertyId === 'avari-lahore';

  return (
    <header className="glass-panel" style={{
      position: 'sticky',
      top: 12,
      zIndex: 100,
      margin: '12px auto 0 auto',
      width: 'calc(100% - 24px)',
      maxWidth: '1360px',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      flexWrap: 'wrap'
    }}>
      {/* Brand Logo & Tag */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }} onClick={() => onNavClick('hero')}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '10px',
          background: isLahore ? 'var(--avari-gold-gradient)' : 'var(--xpress-gradient)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0A0D14',
          boxShadow: isLahore ? 'var(--shadow-gold-glow)' : 'var(--shadow-coral-glow)'
        }}>
          {isLahore ? <Crown size={22} strokeWidth={2.2} /> : <Building2 size={22} strokeWidth={2.2} />}
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.45rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            lineHeight: 1.1,
            color: '#FFFFFF'
          }}>
            AVARI <span style={{ color: isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral-light)' }}>
              {isLahore ? 'LAHORE' : 'XPRESS'}
            </span>
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.68rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)'
          }}>
            {isLahore ? '5-Star Flagship • Mall Road' : 'Contemporary Boutique • Gulberg'}
          </div>
        </div>
      </div>

      {/* Property Switcher Tabs */}
      <div style={{
        display: 'flex',
        background: 'var(--bg-surface-2)',
        borderRadius: '12px',
        padding: '4px',
        border: '1px solid var(--border-subtle)',
        gap: '4px'
      }}>
        <button
          onClick={() => onSelectProperty('avari-lahore')}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '0.82rem',
            fontWeight: 600,
            fontFamily: 'var(--font-display)',
            cursor: 'pointer',
            transition: 'var(--transition-fast)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: isLahore ? 'var(--avari-gold-gradient)' : 'transparent',
            color: isLahore ? '#0A0D14' : 'var(--text-secondary)'
          }}
        >
          <Crown size={14} />
          Avari Hotel Lahore (5★)
        </button>

        <button
          onClick={() => onSelectProperty('avari-xpress-gulberg')}
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '0.82rem',
            fontWeight: 600,
            fontFamily: 'var(--font-display)',
            cursor: 'pointer',
            transition: 'var(--transition-fast)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: !isLahore ? 'var(--xpress-gradient)' : 'transparent',
            color: !isLahore ? '#FFFFFF' : 'var(--text-secondary)'
          }}
        >
          <Building2 size={14} />
          Avari Xpress Gulberg
        </button>
      </div>

      {/* Nav Links */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
        <button
          onClick={() => onNavClick('tour')}
          style={{
            background: 'none',
            border: 'none',
            color: activeSection === 'tour' ? (isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral-light)') : 'var(--text-secondary)',
            fontFamily: 'var(--font-display)',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            padding: '6px 0',
            borderBottom: activeSection === 'tour' ? '2px solid currentColor' : '2px solid transparent'
          }}
        >
          3D Tours
        </button>

        <button
          onClick={() => onNavClick('rooms')}
          style={{
            background: 'none',
            border: 'none',
            color: activeSection === 'rooms' ? (isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral-light)') : 'var(--text-secondary)',
            fontFamily: 'var(--font-display)',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            padding: '6px 0',
            borderBottom: activeSection === 'rooms' ? '2px solid currentColor' : '2px solid transparent'
          }}
        >
          Rooms & Suites
        </button>

        <button
          onClick={() => onNavClick('dining')}
          style={{
            background: 'none',
            border: 'none',
            color: activeSection === 'dining' ? (isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral-light)') : 'var(--text-secondary)',
            fontFamily: 'var(--font-display)',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            padding: '6px 0',
            borderBottom: activeSection === 'dining' ? '2px solid currentColor' : '2px solid transparent'
          }}
        >
          Dining & Cuisine
        </button>

        <button
          onClick={() => onNavClick('banquets')}
          style={{
            background: 'none',
            border: 'none',
            color: activeSection === 'banquets' ? (isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral-light)') : 'var(--text-secondary)',
            fontFamily: 'var(--font-display)',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            padding: '6px 0',
            borderBottom: activeSection === 'banquets' ? '2px solid currentColor' : '2px solid transparent'
          }}
        >
          Banquets & Events
        </button>

        <button
          onClick={() => onNavClick('wellness')}
          style={{
            background: 'none',
            border: 'none',
            color: activeSection === 'wellness' ? (isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral-light)') : 'var(--text-secondary)',
            fontFamily: 'var(--font-display)',
            fontSize: '0.85rem',
            fontWeight: 500,
            cursor: 'pointer',
            padding: '6px 0',
            borderBottom: activeSection === 'wellness' ? '2px solid currentColor' : '2px solid transparent'
          }}
        >
          Wellness & Services
        </button>
      </nav>

      {/* Action Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Executive Pitch Deck Mode Trigger */}
        <button
          onClick={onOpenPitchMode}
          className="pitch-mode-btn"
          title="Open Pitch Presentation Deck for Meeting with Avari"
        >
          <Presentation size={15} />
          Executive Pitch Deck
        </button>

        <button
          onClick={() => onOpenBookingModal()}
          className={isLahore ? 'luxury-btn-gold' : 'luxury-btn-outline'}
          style={{
            padding: '9px 18px',
            fontSize: '0.8rem',
            background: !isLahore ? 'var(--xpress-gradient)' : undefined,
            borderColor: !isLahore ? 'transparent' : undefined
          }}
        >
          <Calendar size={15} />
          Book Stay
        </button>
      </div>
    </header>
  );
}
