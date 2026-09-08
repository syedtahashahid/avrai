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
import { MapPin, Phone } from 'lucide-react';

export default function AvariXpressGulbergPage() {
  const property = PROPERTIES_DATA['avari-xpress-gulberg'];
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
      area: 'Boutique Space',
      bed: 'Executive Setup',
      view: 'Gulberg Skyline',
      hotspots: [
        {
          id: 'v-spot1',
          pitch: 0,
          yaw: 20,
          title: venueName,
          category: 'Venue Highlight',
          description: `Experience contemporary design and smart hospitality at ${venueName} at Avari Xpress Gulberg.`
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
          backgroundImage: `url('/images/xpress-facade.jpg')`,
          minHeight: '65vh',
          paddingBottom: '80px'
        }}
      >
        <div className="hero-gradient-overlay" />

        <div className="property-contact-strip property-contact-strip-xpress">
          <span><MapPin size={14} /> 1-E/II, Noor Jehan Road, Gulberg III, Lahore</span>
          <span><Phone size={14} /> +92 (42) 3575 5700</span>
        </div>

        {/* Dedicated Booking Bar pre-selected for Avari Xpress */}
        <BookingBar defaultHotel="avari-xpress-gulberg" />
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
          <a href="#tour-section" className="nav-item-link" style={{ color: '#E05A47' }}>
            ✦ 3D Virtual Tour
          </a>
          <a href="#rooms-section" className="nav-item-link">
            Rooms & Suites ({property.rooms.length})
          </a>
          <a href="#dining-section" className="nav-item-link">
            The Coffee Shop & Dining
          </a>
          <a href="#banquets-section" className="nav-item-link">
            Meeting Pods & Conference Hall
          </a>
          <a href="#wellness-section" className="nav-item-link">
            Fitness Studio & Services
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

      {/* Wellness & Fitness */}
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
