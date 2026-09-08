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

      <section className="banquet-showcase-section">
        <div className="banquet-showcase-heading">
          <div>
            <div className="section-overhead">See the occasion before it begins</div>
            <h2 className="section-main-heading">Rooms for remarkable gatherings.</h2>
          </div>
          <p>Move from atmosphere to logistics: browse the visual mood, open a 3D preview, then configure the room for your guest list.</p>
        </div>

        <div className="banquet-gallery-grid">
          <article className="banquet-gallery-feature">
            <div className="banquet-gallery-image" style={{ backgroundImage: "url('/images/lahore-facade.jpg')" }}>
              <span>Property atmosphere</span>
            </div>
            <div className="banquet-gallery-copy">
              <div className="section-overhead">Avari Hotel Lahore</div>
              <h3>Heritage-scale celebrations</h3>
              <p>Historic architecture, formal arrivals, and flexible spaces for weddings, summits, and diplomatic occasions.</p>
              <Link href="/tours?property=avari-lahore&scene=venue-ballroom" className="btn-luxury-outline"><Eye size={15} /> Open 3D preview</Link>
            </div>
          </article>

          <div className="banquet-gallery-stack">
            <article className="banquet-gallery-tile">
              <div className="banquet-gallery-image" style={{ backgroundImage: "url('/images/dynasty-dining.jpg')" }}>
                <span>Dining and receptions</span>
              </div>
              <div><h3>Hosted tables</h3><p>Pair a venue with a considered dining programme.</p></div>
            </article>
            <article className="banquet-gallery-tile">
              <div className="banquet-gallery-image" style={{ backgroundImage: "url('/images/suite-luxury.jpg')" }}>
                <span>Guest journey</span>
              </div>
              <div><h3>Stay with the occasion</h3><p>Build room blocks and guest hospitality around the event.</p></div>
            </article>
          </div>
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
