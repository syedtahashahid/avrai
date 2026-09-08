'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import TourViewer3D from '../components/TourViewer3D';
import BookingModal from '../components/BookingModal';
import { PROPERTIES_DATA } from '../data/propertiesData';
import { Crown, Building2, Play, Compass, ArrowRight, RotateCw, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ToursPage() {
  const [selectedPropertyId, setSelectedPropertyId] = useState('avari-lahore');
  const property = PROPERTIES_DATA[selectedPropertyId];

  const [currentRoom, setCurrentRoom] = useState(property.rooms[0]);
  const [bookingModalRoom, setBookingModalRoom] = useState(null);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [autoplayIndex, setAutoplayIndex] = useState(0);

  const isLahore = selectedPropertyId === 'avari-lahore';

  // Handle query parameter autoplay
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const propParam = params.get('property');
      if (propParam && PROPERTIES_DATA[propParam]) {
        setSelectedPropertyId(propParam);
        setCurrentRoom(PROPERTIES_DATA[propParam].rooms[0]);
      }
      if (params.get('autoplay') === 'true') {
        setIsAutoplay(true);
      }
    }
  }, []);

  const handleSelectProperty = (propId) => {
    setSelectedPropertyId(propId);
    setCurrentRoom(PROPERTIES_DATA[propId].rooms[0]);
  };

  const handleLaunchVenue = (sceneKey, title) => {
    setCurrentRoom({
      id: `venue-${sceneKey}`,
      name: title,
      tourSceneKey: sceneKey,
      area: 'Signature Venue',
      bed: 'World-Class Setting',
      view: '360° Panoramic Venue',
      hotspots: [
        {
          id: 'v-spot1',
          pitch: 0,
          yaw: 20,
          title: title,
          category: 'Experience',
          description: `Immerse yourself in the authentic atmosphere and bespoke hospitality of ${title} at Avari.`
        }
      ],
      waypoints: [{ id: 'wp-1', label: 'Main Viewpoint', yaw: 20, pitch: 0 }]
    });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      {/* Tours Theater Hero Banner */}
      <div style={{
        background: 'linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%)',
        borderBottom: '1px solid #E2E8F0',
        padding: '48px 32px 32px 32px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--avari-blue)',
              fontSize: '0.74rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: '10px'
            }}>
              <Compass size={16} />
              Spatial 3D Digital Twin Theater
            </div>
            <h1 style={{ fontSize: '2.6rem', color: '#0F172A', marginBottom: '10px' }}>
              Explore Avari Hotels in 360°
            </h1>
            <p style={{ fontSize: '0.95rem', color: '#475569', maxWidth: '600px', lineHeight: 1.6 }}>
              Choose a property, click and drag to view every angle, toggle warm evening lighting, and click spatial hotspots to inspect luxury finishes.
            </p>
          </div>

          {/* Property Switcher Toggle */}
          <div style={{
            display: 'flex',
            background: '#FFFFFF',
            padding: '5px',
            borderRadius: '10px',
            border: '1.5px solid #CBD5E1',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
            gap: '6px'
          }}>
            <button
              type="button"
              onClick={() => handleSelectProperty('avari-lahore')}
              style={{
                padding: '10px 22px',
                borderRadius: '6px',
                border: 'none',
                background: isLahore ? 'var(--avari-blue)' : 'transparent',
                color: isLahore ? '#FFFFFF' : '#334155',
                fontWeight: 700,
                fontSize: '0.82rem',
                fontFamily: 'var(--font-sans)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
            >
              <Crown size={15} />
              Avari Hotel Lahore (5★)
            </button>

            <button
              type="button"
              onClick={() => handleSelectProperty('avari-xpress-gulberg')}
              style={{
                padding: '10px 22px',
                borderRadius: '6px',
                border: 'none',
                background: !isLahore ? 'var(--avari-blue)' : 'transparent',
                color: !isLahore ? '#FFFFFF' : '#334155',
                fontWeight: 700,
                fontSize: '0.82rem',
                fontFamily: 'var(--font-sans)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
            >
              <Building2 size={15} />
              Avari Xpress Gulberg (4★)
            </button>
          </div>
        </div>
      </div>

      {/* Featured Venues Quick Jump Bar */}
      <div style={{
        background: '#F8FAFC',
        borderBottom: '1px solid #E2E8F0',
        padding: '14px 32px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          overflowX: 'auto'
        }}>
          <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#64748B', fontWeight: 700, letterSpacing: '0.1em', whiteSpace: 'nowrap', marginRight: '6px' }}>
            Jump to Space:
          </span>

          {/* Rooms of Current Property */}
          {property.rooms.map((room) => {
            const isSelected = currentRoom.id === room.id;
            return (
              <button
                key={room.id}
                type="button"
                onClick={() => setCurrentRoom(room)}
                style={{
                  padding: '7px 16px',
                  borderRadius: '6px',
                  border: isSelected ? '1.5px solid var(--avari-blue)' : '1px solid #CBD5E1',
                  background: isSelected ? 'var(--avari-blue)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : '#334155',
                  fontSize: '0.8rem',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isSelected ? '0 2px 8px rgba(2, 124, 255, 0.25)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {room.name}
              </button>
            );
          })}

          {/* Signature Non-room Venues for Avari Lahore */}
          {isLahore && (
            <>
              <button
                type="button"
                onClick={() => handleLaunchVenue('venue-dynasty', 'Dynasty Chinese Restaurant')}
                style={{
                  padding: '7px 16px',
                  borderRadius: '6px',
                  border: '1px solid rgba(224, 90, 71, 0.4)',
                  background: '#FFFFFF',
                  color: '#D9381E',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                ✦ Dynasty Restaurant
              </button>

              <button
                type="button"
                onClick={() => handleLaunchVenue('venue-ballroom', 'The Grand Ballroom & Hall of Mirrors')}
                style={{
                  padding: '7px 16px',
                  borderRadius: '6px',
                  border: '1px solid var(--border-blue)',
                  background: '#FFFFFF',
                  color: 'var(--avari-blue)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                ✦ Grand Ballroom
              </button>

              <button
                type="button"
                onClick={() => handleLaunchVenue('venue-pool', 'Olympic Outdoor Pool & Oasis')}
                style={{
                  padding: '7px 16px',
                  borderRadius: '6px',
                  border: '1px solid rgba(2, 132, 199, 0.4)',
                  background: '#FFFFFF',
                  color: '#0284C7',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                ✦ Olympic Poolside
              </button>
            </>
          )}
        </div>
      </div>

      {/* Main 3D Viewport Component */}
      <TourViewer3D
        currentRoom={currentRoom}
        allRooms={property.rooms}
        onSelectRoom={(r) => setCurrentRoom(r)}
        property={property}
      />

      {/* Room Details & Direct Booking CTA */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 32px 80px 32px',
        width: '100%'
      }}>
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '16px',
          padding: '36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          boxShadow: '0 10px 35px rgba(15, 23, 42, 0.06)'
        }}>
          <div>
            <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--avari-blue)', fontWeight: 700, letterSpacing: '0.12em' }}>
              Currently Viewing in 3D
            </span>
            <h3 style={{ fontSize: '1.8rem', color: '#0F172A', margin: '4px 0 8px 0' }}>
              {currentRoom.name}
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#475569', maxWidth: '600px', lineHeight: 1.6 }}>
              {currentRoom.description || "Immerse yourself in authentic Avari luxury with high-speed Wi-Fi, premium bedding, and bespoke room service."}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {currentRoom.pricePerNight && (
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.65rem', fontWeight: 700, color: 'var(--avari-blue)' }}>
                  {currentRoom.pricePerNight}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Best Available Rate
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setBookingModalRoom(currentRoom)}
              className="luxury-btn-gold"
              style={{ padding: '14px 28px', borderRadius: '8px', fontSize: '0.85rem' }}
            >
              Book This Space Now
            </button>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={!!bookingModalRoom}
        onClose={() => setBookingModalRoom(null)}
        selectedRoom={bookingModalRoom}
        property={property}
      />
    </div>
  );
}
