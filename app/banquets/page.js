'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import BanquetCalc from '../components/BanquetCalc';
import BookingModal from '../components/BookingModal';
import { PROPERTIES_DATA } from '../data/propertiesData';
import { Calendar, Users, Eye, Sparkles, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function BanquetsPage() {
  const lahoreProp = PROPERTIES_DATA['avari-lahore'];
  const xpressProp = PROPERTIES_DATA['avari-xpress-gulberg'];

  const [bookingModalItem, setBookingModalItem] = useState(null);

  const handleLaunchVenueTour = (sceneKey, title) => {
    window.location.href = `/tours?property=avari-lahore&scene=${sceneKey}`;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      {/* Hero Banner */}
      <section
        className="luxury-hero-section"
        style={{
          backgroundImage: `url('/images/lahore-facade.jpg')`,
          minHeight: '55vh',
          paddingBottom: '60px'
        }}
      >
        <div className="hero-gradient-overlay" />

        <div className="hero-content-box">
          <span className="hero-overhead-tag">High Society & Corporate Summits</span>
          <h1 className="hero-main-title">
            Banquets, Weddings & Conferences
          </h1>
          <p className="hero-sub-text">
            From the historic Hall of Mirrors adorned with Venetian chandeliers to modern pillarless convention centers. Test spatial configurations with our live capacity calculator.
          </p>
        </div>
      </section>

      {/* Interactive Banquet Calculator for Avari Lahore */}
      <div style={{ padding: '40px 0' }}>
        <BanquetCalc
          property={lahoreProp}
          onLaunchVenueTour={handleLaunchVenueTour}
          onOpenBookingModal={(item) => setBookingModalItem(item)}
        />
      </div>

      {/* Avari Xpress Gulberg Meeting Spaces */}
      <div style={{ padding: '20px 0 80px 0' }}>
        <BanquetCalc
          property={xpressProp}
          onLaunchVenueTour={() => { window.location.href = '/tours?property=avari-xpress-gulberg'; }}
          onOpenBookingModal={(item) => setBookingModalItem(item)}
        />
      </div>

      <BookingModal
        isOpen={!!bookingModalItem}
        onClose={() => setBookingModalItem(null)}
        selectedRoom={bookingModalItem}
        property={lahoreProp}
      />
    </div>
  );
}
