'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../components/Header';
import BookingModal from '../components/BookingModal';
import { PROPERTIES_DATA } from '../data/propertiesData';
import {
  Calendar,
  Users,
  MapPin,
  CheckCircle2,
  Eye,
  Crown,
  Building2,
  ShieldCheck,
  Star,
  Sparkles,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { getTravelClickBookingUrl, formatTravelClickDate, calculateStayLength } from '../utils/bookingUrl';
import { PORTFOLIO_PROPERTIES } from '../data/portfolioData';
import { recordBookingActivity } from '../lib/demoStore';

function BookingContent() {
  const searchParams = useSearchParams();
  const hotelParam = searchParams.get('hotel') || 'avari-lahore';
  const checkinParam = searchParams.get('checkin') || '2026-09-15';
  const checkoutParam = searchParams.get('checkout') || '2026-09-18';
  const adultsParam = searchParams.get('adults') || '2';
  const roomsParam = searchParams.get('rooms') || '1';

  const [selectedHotel, setSelectedHotel] = useState(hotelParam);
  const [activeModalRoom, setActiveModalRoom] = useState(null);

  useEffect(() => {
    if (hotelParam && PROPERTIES_DATA[hotelParam]) {
      setSelectedHotel(hotelParam);
    }
  }, [hotelParam]);

  const property = PROPERTIES_DATA[selectedHotel] || null;
  const portfolioProperty = PORTFOLIO_PROPERTIES[selectedHotel] || PORTFOLIO_PROPERTIES['avari-lahore'];
  const isLahore = selectedHotel === 'avari-lahore';
  const hasRoomInventory = Boolean(property?.rooms?.length);

  const stayLength = calculateStayLength(checkinParam, checkoutParam);
  const travelClickUrl = getTravelClickBookingUrl({
    hotelId: selectedHotel,
    checkIn: checkinParam,
    checkOut: checkoutParam,
    adults: Number(adultsParam) || 1,
    rooms: Number(roomsParam) || 1
  });

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      {/* Top Search Summary Bar */}
      <div style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        padding: '24px 32px',
        boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--avari-blue)', letterSpacing: '0.14em', fontWeight: 700 }}>
              Live Reservation Simulator & Rates
            </div>
            <h1 style={{ fontSize: '1.9rem', color: '#0F172A', margin: '4px 0' }}>
              {property?.name || portfolioProperty.name}
            </h1>
            <div style={{ fontSize: '0.86rem', color: '#64748B' }}>
              {checkinParam} → {checkoutParam} ({stayLength} Night{stayLength > 1 ? 's' : ''}) • {adultsParam} Adults, {roomsParam} Room
            </div>
          </div>

        </div>
      </div>

      <div className="booking-destination-strip">
        <div className="booking-destination-inner">
          <div className="booking-destination-label">Choose an Avari destination</div>
          <div className="booking-destination-grid">
            {Object.values(PORTFOLIO_PROPERTIES).map((destination) => (
              <button
                type="button"
                key={destination.slug}
                className={`booking-destination-button ${selectedHotel === destination.slug ? 'active' : ''}`}
                onClick={() => setSelectedHotel(destination.slug)}
              >
                <strong>{destination.name}</strong>
                <span>{destination.city}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Official TravelClick Redirection Banner */}
      {hasRoomInventory ? <div style={{ maxWidth: '1400px', margin: '30px auto 0 auto', padding: '0 32px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
          border: '1px solid rgba(2, 124, 255, 0.3)',
          borderRadius: '12px',
          padding: '24px 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          boxShadow: '0 8px 30px rgba(2, 124, 255, 0.08)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="gold-badge">Official Booking Engine</span>
              <span style={{ fontSize: '0.78rem', color: '#64748B' }}>TravelClick (Amadeus) • HotelID: 14412</span>
            </div>
            <h2 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '4px' }}>
              Ready to Book on Avari Central Reservations?
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#475569', maxWidth: '720px' }}>
              Dates ({formatTravelClickDate(checkinParam)}, {stayLength} night{stayLength > 1 ? 's' : ''}) and {adultsParam} guest{Number(adultsParam) > 1 ? 's' : ''} have been mapped directly to TravelClick iHotelier engine.
            </p>
          </div>

          <a
            href={travelClickUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-gold"
            style={{ padding: '14px 28px', fontSize: '0.86rem' }}
          >
            <span>Proceed to TravelClick</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div> : (
        <div className="booking-preview-state">
          <div className="gold-badge">Portfolio destination</div>
          <h2>{portfolioProperty.name} is ready to be connected.</h2>
          <p>We have reserved this destination in the global booking experience. Room categories, live rates, and the approved booking-provider connection will appear here after the property fact sheet is connected.</p>
          <Link href="/account" className="btn-luxury-outline">Request destination updates <ArrowRight size={15} /></Link>
        </div>
      )}

      {/* Available Room List */}
      {hasRoomInventory && <div className="section-container" style={{ paddingTop: '50px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {property.rooms.map((room) => (
            <div
              key={room.id}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '30px',
                display: 'grid',
                gridTemplateColumns: '1.8fr 1fr',
                gap: '30px',
                alignItems: 'center',
                boxShadow: '0 8px 30px rgba(15, 23, 42, 0.06)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span className="gold-badge">
                    {room.tag}
                  </span>
                  <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
                    {room.area} • {room.bed} • {room.view}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.7rem', color: '#0F172A', marginBottom: '10px' }}>
                  {room.name}
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '18px' }}>
                  {room.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  {room.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#334155' }}>
                      <CheckCircle2 size={14} color="var(--avari-blue)" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action Box */}
              <div style={{
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '10px',
                padding: '24px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#64748B', letterSpacing: '0.1em', fontWeight: 700 }}>
                  Best Available Rate
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#0F172A' }}>
                  {room.pricePerNight}
                </div>
                <div style={{ fontSize: '0.74rem', color: '#64748B' }}>
                  per night • Taxes & Wi-Fi included
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                  <a
                    href={travelClickUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => recordBookingActivity({ property: property?.name || portfolioProperty.name, hotelId: selectedHotel, status: 'provider-handoff', source: 'booking-results', checkIn: checkinParam, checkOut: checkoutParam })}
                    onClick={() => recordBookingActivity({ property: property?.name || portfolioProperty.name, hotelId: selectedHotel, status: 'provider-handoff', source: 'rate-card', room: room.name, checkIn: checkinParam, checkOut: checkoutParam })}
                    className="btn-luxury-gold"
                    style={{
                      width: '100%',
                      padding: '12px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      textDecoration: 'none'
                    }}
                    title="Reserve on official TravelClick reservation engine"
                  >
                    <span>Reserve on TravelClick</span>
                    <ExternalLink size={14} />
                  </a>

                  <Link
                    href={`/tours?property=${selectedHotel}`}
                    className="btn-luxury-outline"
                    style={{ width: '100%', padding: '10px', fontSize: '0.78rem' }}
                  >
                    <Eye size={14} />
                    Inspect in 3D Tour
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>}

      <BookingModal
        isOpen={!!activeModalRoom}
        onClose={() => setActiveModalRoom(null)}
        selectedRoom={activeModalRoom}
        property={property || PROPERTIES_DATA['avari-lahore']}
      />
    </div>
  );
}

export default function BookingPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Suspense fallback={<div style={{ padding: '80px', textAlign: 'center', color: '#FFF' }}>Loading rates...</div>}>
        <BookingContent />
      </Suspense>
    </div>
  );
}
