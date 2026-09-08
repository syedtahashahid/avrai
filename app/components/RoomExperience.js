'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Compass, Sparkles, ArrowRight, Image as ImageIcon } from 'lucide-react';
import TourViewer3D from './TourViewer3D';
import { slugifyRoomName } from '../lib/roomData';

export default function RoomExperience({ property, room, gallery }) {
  const [activeTourRoom, setActiveTourRoom] = useState(room);
  const [viewMode, setViewMode] = useState('3d'); // '3d' | 'photos'
  const [activePhoto, setActivePhoto] = useState(gallery[0]);

  const isSelectedRoom = activeTourRoom.id === room.id;

  return (
    <section className="room-experience-section" style={{
      background: '#FFFFFF',
      border: '1px solid #E2E8F0',
      borderRadius: '20px',
      padding: '32px',
      marginBottom: '48px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }}>
      {/* Top Experience Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '20px',
        marginBottom: '24px',
        paddingBottom: '20px',
        borderBottom: '1px solid #F1F5F9',
        width: '100%'
      }}>
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--avari-gold)',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '4px'
          }}>
            <Sparkles size={14} /> Interactive 360° Room Navigation
          </div>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2rem',
            color: '#0F172A',
            margin: '2px 0 6px 0',
            lineHeight: 1.2
          }}>
            Walk through {activeTourRoom.name}
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#64748B', margin: 0, maxWidth: '640px', lineHeight: 1.6 }}>
            Drag in 360 degrees to inspect room finishes, panoramic views, and spatial layout. Tap any space below to explore other rooms in {property.name}.
          </p>
        </div>

        {/* View Mode Toggle & Details Link */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <div style={{
            display: 'flex',
            background: '#F1F5F9',
            padding: '4px',
            borderRadius: '10px',
            border: '1px solid #E2E8F0'
          }}>
            <button
              type="button"
              onClick={() => setViewMode('3d')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                background: viewMode === '3d' ? '#FFFFFF' : 'transparent',
                color: viewMode === '3d' ? 'var(--avari-blue)' : '#64748B',
                fontWeight: viewMode === '3d' ? 700 : 500,
                fontSize: '0.82rem',
                cursor: 'pointer',
                boxShadow: viewMode === '3d' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              <Compass size={15} />
              <span>Immersive 360° Experience</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('photos')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                background: viewMode === 'photos' ? '#FFFFFF' : 'transparent',
                color: viewMode === 'photos' ? 'var(--avari-blue)' : '#64748B',
                fontWeight: viewMode === 'photos' ? 700 : 500,
                fontSize: '0.82rem',
                cursor: 'pointer',
                boxShadow: viewMode === 'photos' ? '0 2px 6px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              <ImageIcon size={15} />
              <span>High-Res Photos ({gallery.length})</span>
            </button>
          </div>

          {!isSelectedRoom && (
            <Link
              href={`/hotels/${property.id}/rooms/${slugifyRoomName(activeTourRoom.name)}`}
              className="btn-luxury-outline"
              style={{
                fontSize: '0.82rem',
                padding: '10px 16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap'
              }}
            >
              <span>View {activeTourRoom.name}</span>
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>

      {/* 360° Virtual Tour Display */}
      {viewMode === '3d' && (
        <div style={{ width: '100%' }}>
          <TourViewer3D
            currentRoom={activeTourRoom}
            allRooms={property.rooms}
            onSelectRoom={(selected) => setActiveTourRoom(selected)}
            property={property}
            hideHeader={true}
          />
        </div>
      )}

      {/* High-Resolution Photo Gallery Display */}
      {viewMode === 'photos' && (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{
            width: '100%',
            height: '460px',
            borderRadius: '16px',
            backgroundImage: `url('${activePhoto.src}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 65%, rgba(15, 23, 42, 0.7) 100%)',
              pointerEvents: 'none'
            }} />
            <span style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              color: '#FFFFFF',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              background: 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(8px)',
              padding: '8px 18px',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              {activePhoto.label}
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${gallery.length}, 1fr)`,
            gap: '12px'
          }}>
            {gallery.map((image) => {
              const isCurrent = activePhoto.src === image.src;
              return (
                <button
                  type="button"
                  key={image.label}
                  onClick={() => setActivePhoto(image)}
                  style={{
                    height: '90px',
                    borderRadius: '12px',
                    border: isCurrent ? '2.5px solid var(--avari-blue)' : '1px solid #CBD5E1',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    padding: 0,
                    opacity: isCurrent ? 1 : 0.7,
                    outline: 'none',
                    boxShadow: isCurrent ? '0 0 0 3px rgba(2, 124, 255, 0.2)' : 'none',
                    transition: 'all 0.2s ease',
                    position: 'relative'
                  }}
                  aria-label={`View ${image.label}`}
                >
                  <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('${image.src}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} />
                  <span style={{
                    position: 'absolute',
                    bottom: '4px',
                    left: '4px',
                    right: '4px',
                    fontSize: '0.66rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(4px)',
                    padding: '2px 4px',
                    borderRadius: '4px',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {image.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

