'use client';

import React, { useState } from 'react';
import { PITCH_DATA } from '../data/propertiesData';
import {
  X,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Sparkles,
  Presentation,
  CheckCircle2,
  Code,
  Play,
  Copy,
  Check
} from 'lucide-react';

export default function PitchModeOverlay({
  isOpen,
  onClose,
  onStartChoreographedDemo
}) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [copiedEmbed, setCopiedEmbed] = useState(false);

  if (!isOpen) return null;

  const slides = PITCH_DATA.slides;
  const currentSlide = slides[currentSlideIndex];

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const embedSnippet = `<iframe 
  src="https://virtualtour.avari.com/lahore-presidential" 
  width="100%" 
  height="600" 
  frameborder="0" 
  allow="accelerometer; gyroscope; fullscreen"
  loading="lazy">
</iframe>`;

  const copyEmbed = () => {
    navigator.clipboard?.writeText(embedSnippet);
    setCopiedEmbed(true);
    setTimeout(() => setCopiedEmbed(false), 2000);
  };

  return (
    <div className="pitch-overlay-backdrop" onClick={onClose}>
      <div className="pitch-deck-container" onClick={(e) => e.stopPropagation()}>
        {/* Pitch Deck Header */}
        <div className="pitch-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'var(--avari-gold-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0A0D14'
            }}>
              <Presentation size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>
                Avari Hotels & Resorts Pitch Presentation
              </div>
              <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                Target Audience: General Management, VP Sales & Marketing, Ownership
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => {
                onClose();
                onStartChoreographedDemo();
              }}
              className="luxury-btn-gold"
              style={{ padding: '6px 14px', fontSize: '0.75rem' }}
            >
              <Play size={13} fill="#FFFFFF" />
              Launch Live Autoplay Demo
            </button>

            <button
              onClick={onClose}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#F1F5F9',
                border: '1px solid #CBD5E1',
                color: '#475569',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Pitch Deck Body */}
        <div className="pitch-body">
          <div className="pitch-slide-content">
            <div className="pitch-slide-num">
              EXECUTIVE BRIEF • SLIDE {currentSlide.number} OF 0{slides.length}
            </div>
            <h2 className="pitch-slide-title">
              {currentSlide.title}
            </h2>

            {/* Talking Points */}
            <div className="pitch-points-list">
              {currentSlide.points.map((pt, i) => (
                <div key={i} className="pitch-point-item">
                  <CheckCircle2 size={20} color="var(--avari-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Key Metric Card */}
            <div className="pitch-metric-card">
              <div className="pitch-metric-num">{currentSlide.metric}</div>
              <div className="pitch-metric-text">{currentSlide.metricLabel}</div>
            </div>
          </div>

          {/* Quick avari.com Embed Code Demonstration for CTO */}
          <div style={{
            marginTop: '24px',
            padding: '18px',
            background: 'var(--bg-surface-2)',
            borderRadius: '12px',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                <Code size={13} style={{ display: 'inline', marginRight: '6px' }} />
                Instant avari.com Web Embed Snippet (1-Line Integration)
              </span>
              <button
                onClick={copyEmbed}
                style={{
                  background: 'none',
                  border: 'none',
                  color: copiedEmbed ? '#10B981' : 'var(--avari-gold)',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                {copiedEmbed ? <Check size={12} /> : <Copy size={12} />}
                {copiedEmbed ? 'Copied' : 'Copy Code'}
              </button>
            </div>
            <pre style={{
              background: '#090C12',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '0.76rem',
              color: '#A5B4FC',
              overflowX: 'auto',
              border: '1px solid var(--border-subtle)'
            }}>
              <code>{embedSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Pitch Deck Footer Navigation */}
        <div className="pitch-nav-footer">
          <div style={{ display: 'flex', gap: '6px' }}>
            {slides.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                style={{
                  width: idx === currentSlideIndex ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: idx === currentSlideIndex ? 'var(--avari-gold)' : 'var(--bg-surface-3)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className="luxury-btn-outline"
              style={{
                padding: '8px 16px',
                fontSize: '0.8rem',
                opacity: currentSlideIndex === 0 ? 0.4 : 1,
                cursor: currentSlideIndex === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              <ChevronLeft size={16} />
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={currentSlideIndex === slides.length - 1}
              className="luxury-btn-gold"
              style={{
                padding: '8px 18px',
                fontSize: '0.8rem',
                opacity: currentSlideIndex === slides.length - 1 ? 0.4 : 1,
                cursor: currentSlideIndex === slides.length - 1 ? 'not-allowed' : 'pointer'
              }}
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
