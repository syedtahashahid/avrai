'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import BanquetCalc from '../components/BanquetCalc';
import BookingModal from '../components/BookingModal';
import { PROPERTIES_DATA } from '../data/propertiesData';
import { Calendar, Users, Eye, Sparkles, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function BanquetsPage() {
  const router = useRouter();
  const lahoreProp = PROPERTIES_DATA['avari-lahore'];
  const xpressProp = PROPERTIES_DATA['avari-xpress-gulberg'];

  const [bookingModalItem, setBookingModalItem] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(lahoreProp);

  const handleLaunchVenueTour = () => {
    router.push('/hotels/avari-lahore');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      

      <section
        className="luxury-hero-section"
        style={{
          backgroundImage: `url('/images/lahore-facade.jpg')`,
          minHeight: '55vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '120px 24px 60px 24px',
          position: 'relative'
        }}
      >
        <div className="hero-gradient-overlay" />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(2, 124, 255, 0.15)',
            border: '1px solid rgba(2, 124, 255, 0.4)',
            padding: '6px 16px',
            borderRadius: '20px',
            color: 'var(--avari-blue)',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '16px'
          }}>
            <Sparkles size={14} />
            MICE & Grand Celebrations
          </div>
          <h1 style={{ fontSize: '3rem', color: '#FFFFFF', marginBottom: '16px' }}>
            Banquet Halls & Conference Facilities
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '650px', margin: '0 auto' }}>
            From high-level diplomatic state summits in our historic Hall of Mirrors to high-tech corporate seminars in Gulberg, experience Avari&apos;s celebrated event management.
          </p>
        </div>
      </section>

      {/* Visual Showcase Gallery Grid */}
      <section className="section-container" style={{ paddingBottom: '20px' }}>
        <div className="banquet-gallery-grid">
          <div className="banquet-gallery-card large">
            <div className="banquet-gallery-image" style={{ backgroundImage: "url('/images/lahore-facade.jpg')" }}>
              <div className="banquet-gallery-badge">The Hall of Mirrors • Up to 800 Guests</div>
            </div>
            <div className="banquet-gallery-content">
              <h3>Grand Historic Banquets & Royal Galas</h3>
              <p>Venetian crystal chandeliers, 18-foot ceilings, and royal protocol for high-profile weddings and state summits.</p>
              <div className="banquet-gallery-meta">
                <span><Users size={14} /> 800 Guests Max</span>
                <span><MapPin size={14} /> Avari Hotel Lahore</span>
              </div>
            </div>
          </div>
          <div className="banquet-gallery-col">
            <div className="banquet-gallery-card">
              <div className="banquet-gallery-image" style={{ backgroundImage: "url('/images/dynasty-dining.jpg')" }}>
                <div className="banquet-gallery-badge">Fine Dining Catering</div>
              </div>
              <div className="banquet-gallery-content">
                <h3>Award-Winning Banqueting Menus</h3>
                <p>Curated menus by master chefs spanning Pakistani, Mughlai, Continental, and Oriental cuisines.</p>
              </div>
            </div>
            <div className="banquet-gallery-card">
              <div className="banquet-gallery-image" style={{ backgroundImage: "url('/images/suite-luxury.jpg')" }}>
                <div className="banquet-gallery-badge">Gulberg Corporate Suites</div>
              </div>
              <div className="banquet-gallery-content">
                <h3>High-Tech Business Meetings</h3>
                <p>Acoustically treated meeting pods with 4K interactive presentation screens in Gulberg III.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Banquet Calculator for Avari Lahore */}
      <div style={{ padding: '40px 0' }}>
        <BanquetCalc
          property={lahoreProp}
          onLaunchVenueTour={handleLaunchVenueTour}
          onOpenBookingModal={(item) => {
            setSelectedProperty(lahoreProp);
            setBookingModalItem(item);
          }}
        />
      </div>

      {/* Avari Xpress Gulberg Meeting Spaces */}
      <div style={{ padding: '20px 0 80px 0' }}>
        <BanquetCalc
          property={xpressProp}
          onLaunchVenueTour={() => router.push('/hotels/avari-xpress-gulberg')}
          onOpenBookingModal={(item) => {
            setSelectedProperty(xpressProp);
            setBookingModalItem(item);
          }}
        />
      </div>

      <BookingModal
        isOpen={!!bookingModalItem}
        onClose={() => setBookingModalItem(null)}
        selectedRoom={bookingModalItem}
        property={selectedProperty}
      />
    </div>
  );
}

