'use client';

import React, { useState } from 'react';
import {
  Eye,
  CheckCircle2,
  Maximize2,
  Users,
  Bed,
  Sparkles,
  Calendar,
  Compass,
  ExternalLink
} from 'lucide-react';
import { getTravelClickBookingUrl } from '../utils/bookingUrl';

export default function RoomCatalog({
  property,
  currentRoom,
  onLaunchTour,
  onBookRoom
}) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const isLahore = property.id === 'avari-lahore';

  // Available room tiers for filter
  const tiers = ['all', ...new Set(property.rooms.map((r) => r.tier.toLowerCase()))];

  const filteredRooms = selectedFilter === 'all'
    ? property.rooms
    : property.rooms.filter((r) => r.tier.toLowerCase() === selectedFilter);

  return (
    <section id="rooms-section" className="content-section">
      <div className="section-header">
        <div className="section-subtitle">
          Accommodations Portfolio
        </div>
        <h2 className="section-title">
          {isLahore ? "Palatial Suites & Heritage Chambers" : "Contemporary Executive Rooms & Suites"}
        </h2>
        <p className="section-description">
          Each room has been individually modeled for 3D exploration. Compare floor dimensions, luxury fixtures, and club privileges.
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        flexWrap: 'wrap',
        marginBottom: '40px'
      }}>
        {tiers.map((tier) => (
          <button
            key={tier}
            onClick={() => setSelectedFilter(tier)}
            style={{
              padding: '8px 20px',
              borderRadius: '9999px',
              border: selectedFilter === tier
                ? `1px solid ${isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral)'}`
                : '1px solid var(--border-subtle)',
              background: selectedFilter === tier
                ? (isLahore ? 'var(--avari-gold-gradient)' : 'var(--xpress-gradient)')
                : 'var(--bg-surface-2)',
              color: selectedFilter === tier
                ? (isLahore ? '#0A0D14' : '#FFFFFF')
                : 'var(--text-secondary)',
              fontSize: '0.82rem',
              fontWeight: 600,
              fontFamily: 'var(--font-display)',
              textTransform: 'capitalize',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
          >
            {tier === 'all' ? 'All Accommodations' : `${tier} Options`}
          </button>
        ))}
      </div>

      {/* Room Cards Grid */}
      <div className="rooms-grid">
        {filteredRooms.map((room) => {
          const isCurrentlyActiveInTour = room.id === currentRoom.id;

          return (
            <div
              key={room.id}
              className="room-card"
              style={{
                borderColor: isCurrentlyActiveInTour
                  ? (isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral)')
                  : undefined
              }}
            >
              {/* Card Header Preview Area */}
              <div className="room-card-preview">
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: isLahore
                    ? 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, rgba(16, 21, 32, 0.95) 75%)'
                    : 'radial-gradient(circle at center, rgba(224, 90, 71, 0.15) 0%, rgba(16, 21, 32, 0.95) 75%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-gold-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral-light)',
                    marginBottom: '10px'
                  }}>
                    <Compass size={28} />
                  </div>
                  <div style={{
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)'
                  }}>
                    360° Digital Twin Ready
                  </div>
                </div>

                <div className="room-preview-badge">
                  <span className="gold-badge" style={{
                    background: isLahore ? 'rgba(212, 175, 55, 0.2)' : 'rgba(224, 90, 71, 0.2)',
                    borderColor: isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral)',
                    color: isLahore ? 'var(--avari-gold-light)' : 'var(--xpress-coral-light)'
                  }}>
                    {room.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="room-card-body">
                <h3 className="room-card-title">{room.name}</h3>

                {/* Specs */}
                <div className="room-specs-row">
                  <div className="room-spec-item">
                    <Maximize2 size={14} color={isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral)'} />
                    <span>{room.area}</span>
                  </div>
                  <div className="room-spec-item">
                    <Users size={14} color={isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral)'} />
                    <span>{room.occupancy}</span>
                  </div>
                  <div className="room-spec-item">
                    <Bed size={14} color={isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral)'} />
                    <span>{room.bed}</span>
                  </div>
                </div>

                <p className="room-card-desc">{room.description}</p>

                {/* Highlights */}
                <ul className="room-highlights-list">
                  {room.highlights.map((item, idx) => (
                    <li key={idx} className="room-highlight-item">
                      <CheckCircle2 size={14} color={isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral)'} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Footer */}
                <div className="room-card-footer">
                  <div>
                    <div className="room-price-val">{room.pricePerNight}</div>
                    <div className="room-price-sub">per night (excl. tax)</div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => onLaunchTour(room)}
                      className={isCurrentlyActiveInTour ? 'luxury-btn-gold' : 'luxury-btn-outline'}
                      style={{
                        padding: '9px 15px',
                        fontSize: '0.8rem',
                        background: isCurrentlyActiveInTour && !isLahore ? 'var(--xpress-gradient)' : undefined
                      }}
                    >
                      <Eye size={15} />
                      {isCurrentlyActiveInTour ? 'Active Tour' : '3D Tour'}
                    </button>

                    <a
                      href={getTravelClickBookingUrl({ hotelId: property.id, adults: 2 })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="luxury-btn-gold"
                      style={{
                        padding: '9px 15px',
                        fontSize: '0.8rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                      title="Reserve on official Avari reservation engine"
                    >
                      <Calendar size={14} />
                      <span>Book</span>
                      <ExternalLink size={12} style={{ opacity: 0.9 }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
