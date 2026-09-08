'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import BookingBar from '../../components/BookingBar';
import TourViewer3D from '../../components/TourViewer3D';
import RoomCatalog from '../../components/RoomCatalog';
import DiningHub from '../../components/DiningHub';
import BanquetCalc from '../../components/BanquetCalc';
import WellnessHub from '../../components/WellnessHub';
import BookingModal from '../../components/BookingModal';
import TableModal from '../../components/TableModal';
import { PROPERTIES_DATA } from '../../data/propertiesData';
import { Crown, MapPin, Phone, Mail, Star, ShieldCheck, Eye, Sparkles } from 'lucide-react';

export default function AvariLahorePage() {
  const property = PROPERTIES_DATA['avari-lahore'];
  const [currentRoom, setCurrentRoom] = useState(property.rooms[0]);
  const [bookingModalRoom, setBookingModalRoom] = useState(null);
  const [tableModalVenue, setTableModalVenue] = useState(null);

  const handleLaunchTour = (room) => {
    setCurrentRoom(room);
    const tourEl = document.getElementById('tour-section');
    if (tourEl) tourEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLaunchVenueTour = (tourSceneKey, venueName) => {
    const pseudoRoom = {
      id: `venue-${tourSceneKey}`,
      name: venueName,
      tourSceneKey: tourSceneKey,
      area: 'Signature Venue',
      bed: 'Premier Experience',
      view: '360° Panoramic Venue',
      hotspots: [
        {
          id: 'v-spot1',
          pitch: 0,
          yaw: 20,
          title: venueName,
          category: 'Venue Highlight',
          description: `Experience the luxury and world-class ambiance of ${venueName} at Avari Hotel Lahore.`
        }
      ],
      waypoints: [{ id: 'wp-1', label: 'Panoramic Viewpoint', yaw: 20, pitch: 0 }]
    };
    setCurrentRoom(pseudoRoom);
    const tourEl = document.getElementById('tour-section');
    if (tourEl) tourEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      {/* Property Hero Banner */}
      <section
        className="luxury-hero-section"
        style={{
          backgroundImage: `url('/images/lahore-facade.jpg')`,
          minHeight: '65vh',
          paddingBottom: '80px'
        }}
      >
        <div className="hero-gradient-overlay" />

        <div className="hero-content-box" style={{ marginBottom: '30px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span className="gold-badge">
              <Crown size={14} />
              5-Star Luxury Heritage Flagship
            </span>
            <span style={{ fontSize: '0.85rem', color: '#F59E0B', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Star size={14} fill="#F59E0B" />
              4.8 TripAdvisor Excellence
            </span>
          </div>

          <h1 className="hero-main-title">
            Avari Hotel Lahore
          </h1>

          <p className="hero-sub-text" style={{ fontStyle: 'italic', color: 'var(--avari-gold-light)' }}>
            "{property.tagline}"
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={15} color="var(--avari-gold)" />
              87 The Mall Road, Lahore
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Phone size={15} color="var(--avari-gold)" />
              +92 (42) 3636 6366 / 111-282-747
            </span>
          </div>
        </div>

        {/* Dedicated Booking Bar pre-selected for Avari Lahore */}
        <BookingBar defaultHotel="avari-lahore" />
      </section>

      {/* In-Page Quick Navigation Tabs */}
      <div style={{
        position: 'sticky',
        top: '64px',
        zIndex: 50,
        background: 'rgba(18, 22, 30, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '0 32px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          gap: '30px',
          overflowX: 'auto'
        }}>
          <a href="#tour-section" className="nav-item-link" style={{ color: 'var(--avari-gold)' }}>
            ✦ 3D Virtual Tour
          </a>
          <a href="#rooms-section" className="nav-item-link">
            Rooms & Suites ({property.rooms.length})
          </a>
          <a href="#dining-section" className="nav-item-link">
            Restaurants & Dining (5)
          </a>
          <a href="#banquets-section" className="nav-item-link">
            Grand Ballrooms & Banquets
          </a>
          <a href="#wellness-section" className="nav-item-link">
            Wellness & Olympic Pool
          </a>
        </div>
      </div>

      {/* 3D Virtual Tour Viewport */}
      <TourViewer3D
        currentRoom={currentRoom}
        allRooms={property.rooms}
        onSelectRoom={handleLaunchTour}
        property={property}
      />

      {/* Room Portfolio & Suites Catalog */}
      <RoomCatalog
        property={property}
        currentRoom={currentRoom}
        onLaunchTour={handleLaunchTour}
        onBookRoom={(room) => setBookingModalRoom(room)}
      />

      {/* Dining & Gastronomy Showcase */}
      <DiningHub
        property={property}
        onLaunchVenueTour={handleLaunchVenueTour}
        onOpenTableModal={(venue) => setTableModalVenue(venue)}
      />

      {/* Banquets & Events Calculator */}
      <BanquetCalc
        property={property}
        onLaunchVenueTour={handleLaunchVenueTour}
        onOpenBookingModal={(item) => setBookingModalRoom(item)}
      />

      {/* Wellness & Pool */}
      <WellnessHub
        property={property}
        onLaunchVenueTour={handleLaunchVenueTour}
      />

      {/* Modals */}
      <BookingModal
        isOpen={!!bookingModalRoom}
        onClose={() => setBookingModalRoom(null)}
        selectedRoom={bookingModalRoom}
        property={property}
      />

      <TableModal
        isOpen={!!tableModalVenue}
        onClose={() => setTableModalVenue(null)}
        venue={tableModalVenue}
      />
    </div>
  );
}
