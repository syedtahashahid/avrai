'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import BookingBar from './components/BookingBar';
import { PROPERTIES_DATA } from './data/propertiesData';
import { getPortfolioRegion, PORTFOLIO_PROPERTIES, PORTFOLIO_REGIONS } from './data/portfolioData';
import {
  Crown,
  Building2,
  Sparkles,
  ArrowRight,
  Eye,
  Utensils,
  Calendar,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  Compass,
  UserRound
} from 'lucide-react';

export default function HomePage() {
  const [activeRegionId, setActiveRegionId] = useState('lahore');
  const activeRegion = getPortfolioRegion(activeRegionId);
  const activeProperties = activeRegion.properties.map((propertyId) => PORTFOLIO_PROPERTIES[propertyId]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      {/* Hero Section with PC Hotels style layout & user image */}
      <section
        className="luxury-hero-section"
        style={{ backgroundImage: `url('/images/hero-banner.jpg')` }}
      >
        <div className="hero-gradient-overlay" />

        <div className="hero-main-container">
          {/* Left-aligned hero box to leave the central hotel building & illuminated Avari sign 100% visible */}
          <div className="hero-content-box">
            <span className="hero-overhead-tag">
              Avari Hotels & Resorts • Lahore
            </span>

            <h1 className="hero-main-title">
              Hospitality Perfected
            </h1>

            <p className="hero-sub-text">
              Explore our premier Lahore destinations in interactive 3D virtual reality.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/tours" className="btn-luxury-gold">
                <Eye size={16} />
                3D Virtual Tours
              </Link>
              <Link href="/hotels/avari-hotel-lahore" className="btn-luxury-outline">
                Explore Properties
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* The Iconic Floating Booking Bar */}
          <BookingBar />
        </div>
      </section>

      {/* Trust & Guarantee Strip (Luxury Light Theme) */}
      <div style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        padding: '20px 32px'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          fontSize: '0.84rem',
          color: '#475569'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={18} color="var(--avari-blue)" />
            <span style={{ color: '#0F172A', fontWeight: 600 }}>Best Available Rate Guarantee</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Sparkles size={18} color="var(--avari-blue)" />
            <span style={{ color: '#0F172A', fontWeight: 600 }}>100% 360° Spatial Room Previews</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Clock size={18} color="var(--avari-blue)" />
            <span style={{ color: '#0F172A', fontWeight: 600 }}>24/7 Royal Butler & Concierge Protocol</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Star size={18} color="#F59E0B" fill="#F59E0B" />
            <span style={{ color: '#0F172A', fontWeight: 600 }}>TripAdvisor Travelers' Choice 2026</span>
          </div>
        </div>
      </div>

      {/* Portfolio destination rail and property switcher */}
      <section className="section-container">
        <div className="section-header-center">
          <div className="section-overhead">The Avari portfolio</div>
          <h2 className="section-main-heading">One world, many ways to arrive.</h2>
          <p className="section-paragraph">
            Move between Avari destinations by region, then explore the rooms, facilities, and experiences available at each address.
          </p>
        </div>

        <div className="portfolio-region-rail" role="tablist" aria-label="Avari destinations">
          {PORTFOLIO_REGIONS.map((region) => (
            <button
              key={region.id}
              type="button"
              role="tab"
              aria-selected={activeRegionId === region.id}
              className={`portfolio-region-tab ${activeRegionId === region.id ? 'active' : ''}`}
              onClick={() => setActiveRegionId(region.id)}
            >
              <span>{region.label}</span>
              <small>{region.properties.length} {region.properties.length === 1 ? 'address' : 'addresses'}</small>
            </button>
          ))}
        </div>

        <div className="portfolio-region-heading">
          <div>
            <div className="section-overhead">{activeRegion.eyebrow}</div>
            <h3>{activeRegion.label}</h3>
          </div>
          <p>{activeRegion.description}</p>
        </div>

        <div className="properties-duo-grid portfolio-property-grid">
          {activeProperties.map((property) => {
            const detailedProperty = PROPERTIES_DATA[property.slug];
            const isReady = Boolean(detailedProperty && property.detailPath);

            return (
              <div className="property-showcase-card" key={property.slug}>
                <div className="property-img-box" style={{ backgroundImage: `url('${property.image}')` }}>
                  <div className="property-img-badge">
                    <Building2 size={12} style={{ display: 'inline', marginRight: '5px' }} />
                    {property.category}
                  </div>
                </div>
                <div className="property-details-box">
                  <div className="portfolio-card-status">{property.status}</div>
                  <h3 className="property-card-title">{property.name}</h3>
                  <div className="property-card-tagline">{property.city} <span>•</span> {property.descriptor}</div>
                  <p className="property-card-desc">
                    {detailedProperty?.description || `${property.name} is part of the expanding Avari portfolio. Room types, facilities, and verified booking details are being prepared for this destination.`}
                  </p>
                  <div className="property-features-row">
                    <div className="property-feature-stat"><MapPin size={15} color="var(--avari-gold)" /><span>{property.city}</span></div>
                    <div className="property-feature-stat"><Building2 size={15} color="var(--avari-gold)" /><span>{property.category}</span></div>
                    <div className="property-feature-stat"><Sparkles size={15} color="var(--avari-gold)" /><span>{property.sourceStatus}</span></div>
                  </div>
                  <div className="portfolio-card-actions">
                    {isReady ? (
                      <>
                        <Link href={property.detailPath} className="btn-luxury-gold" style={{ flex: 1 }}>Explore property</Link>
                        <Link href={`/tours?property=${property.slug}`} className="btn-luxury-outline" style={{ flex: 1 }}><Eye size={15} /> 3D tours</Link>
                      </>
                    ) : (
                      <Link href="/account" className="btn-luxury-outline" style={{ width: '100%' }}>Request destination updates <ArrowRight size={15} /></Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3D Virtual Tour Spotlight Banner */}
      <section className="section-container" style={{ paddingTop: 0 }}>
        <div className="tour-spotlight-banner">
          <div>
            <span style={{
              fontSize: '0.74rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--avari-blue)',
              display: 'block',
              marginBottom: '10px'
            }}>
              Next-Gen Guest Experience
            </span>
            <h3 style={{ fontSize: '2.4rem', color: '#0F172A', marginBottom: '14px', lineHeight: 1.2 }}>
              Immerse Yourself in 3D Virtual Tours
            </h3>
            <p style={{ fontSize: '1rem', color: '#475569', maxWidth: '640px', lineHeight: 1.6 }}>
              Inspect every detail of our Presidential Suites, Botticino marble jacuzzis, Dynasty Chinese Restaurant, and Grand Ballrooms. Switch between day and warm evening lighting, look around 360°, and explore spatial amenities.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexShrink: 0 }}>
            <Link href="/tours" className="btn-luxury-gold" style={{ padding: '16px 36px', fontSize: '0.9rem' }}>
              <Compass size={20} />
              Open 360° Tour Theater
            </Link>
            <div style={{ textAlign: 'center', fontSize: '0.78rem', color: '#64748B' }}>
              No app or headset required • Works on all devices
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dining Preview (Light Theme) */}
      <section className="section-container" style={{ background: '#F8FAFC' }}>
        <div className="section-header-center">
          <div className="section-overhead">Epicurean Destinations</div>
          <h2 className="section-main-heading">Award-Winning Culinary Experiences</h2>
          <p className="section-paragraph">
            From imperial Szechuan delicacies to live Japanese Teppanyaki grills and royal Mughlai recipes.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {/* Dining Card 1: Dynasty */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(15, 23, 42, 0.05)'
          }}>
            <div style={{
              height: '220px',
              backgroundImage: `url('/images/dynasty-dining.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                background: 'rgba(255, 255, 255, 0.95)',
                color: 'var(--avari-blue)',
                border: '1px solid rgba(2, 124, 255, 0.3)',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}>
                Award-Winning
              </div>
            </div>
            <div style={{ padding: '26px' }}>
              <h3 style={{ fontSize: '1.45rem', color: '#0F172A', marginBottom: '6px' }}>Dynasty Chinese Restaurant</h3>
              <div style={{ fontSize: '0.84rem', color: 'var(--avari-blue)', marginBottom: '12px', fontWeight: 600 }}>
                Authentic Szechuan & Cantonese Cuisine
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                Lahore's legendary culinary institution for over 30 years. Renowned for authentic Dim Sum carts, roasted Peking duck, and imperial ambiance.
              </p>
              <Link href="/dining" className="btn-luxury-outline" style={{ width: '100%', padding: '10px' }}>
                View Menu & Reserve Table
              </Link>
            </div>
          </div>

          {/* Dining Card 2: Fujiyama */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 8px 30px rgba(15, 23, 42, 0.05)'
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                background: 'rgba(2, 124, 255, 0.08)',
                color: 'var(--avari-blue)',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}>
                Live Teppanyaki
              </div>
              <h3 style={{ fontSize: '1.45rem', color: '#0F172A', marginBottom: '6px' }}>Fujiyama Japanese</h3>
              <div style={{ fontSize: '0.84rem', color: 'var(--avari-blue)', marginBottom: '12px', fontWeight: 600 }}>
                Japanese Teppanyaki & Master Sushi Bar
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                Watch master chefs prepare sizzling tenderloin and fresh sashimi before your eyes on live Teppanyaki grills, set in private minimalist tatami rooms.
              </p>
            </div>
            <Link href="/dining" className="btn-luxury-outline" style={{ width: '100%', padding: '10px' }}>
              Explore Fujiyama
            </Link>
          </div>

          {/* Dining Card 3: The Lakhnavi */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 8px 30px rgba(15, 23, 42, 0.05)'
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                background: 'rgba(2, 124, 255, 0.08)',
                color: 'var(--avari-blue)',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '14px'
              }}>
                Royal Heritage
              </div>
              <h3 style={{ fontSize: '1.45rem', color: '#0F172A', marginBottom: '6px' }}>The Lakhnavi</h3>
              <div style={{ fontSize: '0.84rem', color: 'var(--avari-blue)', marginBottom: '12px', fontWeight: 600 }}>
                Royal Avadhi & Mughlai Dum Pukht
              </div>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                Melt-in-mouth Galawati kebabs, slow-cooked Dum Pukht biryanis, and classical sitar melodies honoring the royal Nawabs of Avadh.
              </p>
            </div>
            <Link href="/dining" className="btn-luxury-outline" style={{ width: '100%', padding: '10px' }}>
              Explore The Lakhnavi
            </Link>
          </div>
        </div>
      </section>

      <section className="home-gold-band">
        <div className="home-gold-band-image" />
        <div className="home-gold-band-content">
          <div className="gold-section-label">Avari Gold Card</div>
          <h2>A more personal way to stay.</h2>
          <p>Connect your stays, dining, wellness, and future seasonal experiences to one considered member journey.</p>
          <div className="home-gold-band-actions">
            <Link href="/gold-card" className="home-gold-button">Discover membership <ArrowRight size={16} /></Link>
            <Link href="/account?join=gold" className="home-gold-text-link">Join the preview <UserRound size={15} /></Link>
          </div>
          <small>Membership benefits and terms are preview content pending Avari approval.</small>
        </div>
      </section>

      {/* Luxury Global Footer (Deep Royal Navy Grounding) */}
      <footer style={{
        background: 'var(--bg-darker)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '70px 32px 30px 32px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          <div>
            <div className="brand-title" style={{ marginBottom: '12px' }}>
              AVARI <span>HOTELS</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
              Setting the international standard for luxury hospitality in Pakistan since 1944. Offering guests bespoke comfort, world-class culinary art, and state-of-the-art 3D spatial previews.
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--avari-gold)', fontWeight: 600 }}>
              Official Demonstration for Avari Leadership
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--avari-gold)', marginBottom: '16px' }}>
              Avari Hotel Lahore (5★ Flagship)
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              <div>87 Shahrah-e-Quaid-e-Azam (The Mall), Lahore</div>
              <div>Direct: +92 (42) 3636 6366</div>
              <div>UAN: 111-282-747</div>
              <div>Email: lahore@avari.com</div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#E05A47', marginBottom: '16px' }}>
              Avari Xpress Gulberg (Boutique)
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              <div>1-E/II, Noor Jehan Road, Gulberg III, Lahore</div>
              <div>Direct: +92 (42) 3575 5700</div>
              <div>Email: xpress.gulberg@avari.com</div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', color: '#0F172A', marginBottom: '16px' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              <Link href="/tours" style={{ color: 'var(--avari-gold)' }}>✦ 3D Virtual Tours</Link>
              <Link href="/hotels/avari-hotel-lahore">Avari Hotel Lahore</Link>
              <Link href="/hotels/avari-xpress-gulberg">Avari Xpress Gulberg</Link>
              <Link href="/dining">Restaurants & Dining</Link>
              <Link href="/banquets">Banquets & Capacity Calculator</Link>
              <Link href="/booking">Best Rate Booking</Link>
            </div>
          </div>
        </div>

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingTop: '24px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.78rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © 2026 Avari Hotels & Resorts. All Rights Reserved.
          </div>
          <div>
            Demonstration of Next.js 3D Virtual Tour Integration for avari.com
          </div>
        </div>
      </footer>
    </div>
  );
}
