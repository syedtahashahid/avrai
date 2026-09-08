'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Calendar,
  Presentation,
  ChevronDown,
  Sparkles,
  PhoneCall,
  ExternalLink,
  UserRound
} from 'lucide-react';
import PitchModeOverlay from './PitchModeOverlay';
import { getTravelClickBookingUrl } from '../utils/bookingUrl';
import { PORTFOLIO_PROPERTIES, PORTFOLIO_REGIONS } from '../data/portfolioData';

export default function Header() {
  const pathname = usePathname();
  const [hotelsDropdownOpen, setHotelsDropdownOpen] = useState(false);
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        {/* Top Header Bar */}
        <div className="header-top-bar">
          {/* Left: Search / Contact */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              <PhoneCall size={14} color="var(--avari-gold)" />
              <span>Direct Reservations: +92 (42) 111-282-747</span>
            </div>
          </div>

          {/* Center: Official Brand Logo with Light Blue Sail (Dark Text on Light Header) */}
          <Link href="/" className="brand-emblem-container">
            <img
              src="/images/avari-logo-dark.png"
              alt="Avari Hotels & Resorts"
              style={{
                height: '46px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
            <div>
              <div className="brand-title">
                AVARI <span style={{ color: 'var(--avari-blue)' }}>HOTELS</span>
              </div>
              <div className="brand-subtitle">
                Hospitality Perfected Since 1944
              </div>
            </div>
          </Link>

          {/* Right: Executive Pitch Mode & Book Now */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Executive Pitch Deck trigger for the Avari Meeting */}
            <button
              onClick={() => setIsPitchOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 16px',
                background: 'rgba(2, 124, 255, 0.08)',
                border: '1px solid var(--avari-blue)',
                color: 'var(--avari-blue)',
                borderRadius: '6px',
                fontSize: '0.74rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
              title="Executive Pitch Deck"
            >
              <Presentation size={15} />
            </button>

            <a
              href={getTravelClickBookingUrl({ hotelId: '14412' })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-gold"
              style={{ padding: '8px 18px', fontSize: '0.76rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              title="Official Avari Reservations on TravelClick"
            >
              <Calendar size={14} />
              <span>Book Now</span>
              <ExternalLink size={12} style={{ opacity: 0.85 }} />
            </a>

            <Link
              href="/account"
              className="header-account-link"
              aria-label="Open your Avari account"
            >
              <UserRound size={14} />
              <span>Sign in</span>
            </Link>
          </div>
        </div>

        {/* Secondary Main Navigation Bar */}
        <div className="header-nav-bar">
          <nav>
            <ul className="nav-links-list">
              {/* Hotels & Resorts Mega Dropdown */}
              <li
                style={{ position: 'relative' }}
                onMouseEnter={() => setHotelsDropdownOpen(true)}
                onMouseLeave={() => setHotelsDropdownOpen(false)}
              >
                <div
                  className={`nav-item-link ${pathname.startsWith('/hotels') ? 'active' : ''}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
                >
                  Hotels & Resorts
                  <ChevronDown size={14} />
                </div>

                {hotelsDropdownOpen && (
                  <div className="bk-dropdown-menu portfolio-dropdown">
                    <div className="portfolio-dropdown-heading">Explore every Avari destination</div>
                    <div className="portfolio-dropdown-grid">
                      {PORTFOLIO_REGIONS.map((region) => (
                        <div className="portfolio-dropdown-region" key={region.id}>
                          <div className="portfolio-dropdown-region-title">{region.label}</div>
                          {region.properties.map((propertyId) => {
                            const property = PORTFOLIO_PROPERTIES[propertyId];
                            const href = property.detailPath || `/account?destination=${property.slug}`;

                            return (
                              <Link
                                href={href}
                                className="portfolio-dropdown-property"
                                key={property.slug}
                                onClick={() => setHotelsDropdownOpen(false)}
                              >
                                <span className="portfolio-dropdown-property-name">
                                  {property.name}
                                </span>
                                <span className="portfolio-dropdown-property-meta">
                                  {property.category} · {property.status}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/tours"
                  className={`nav-item-link ${pathname === '/tours' ? 'active' : ''}`}
                  style={{ color: 'var(--avari-gold-light)', display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  <Sparkles size={14} color="var(--avari-gold)" />
                  3D Virtual Tours
                </Link>
              </li>

              <li>
                <Link
                  href="/dining"
                  className={`nav-item-link ${pathname === '/dining' ? 'active' : ''}`}
                >
                  Restaurants & Dining
                </Link>
              </li>

              <li>
                <Link
                  href="/banquets"
                  className={`nav-item-link ${pathname === '/banquets' ? 'active' : ''}`}
                >
                  Banquets & Summits
                </Link>
              </li>

              <li>
                <Link
                  href="/booking"
                  className={`nav-item-link ${pathname === '/booking' ? 'active' : ''}`}
                >
                  Best Rate Guarantee
                </Link>
              </li>

              <li>
                <Link
                  href="/gold-card"
                  className={`nav-item-link ${pathname === '/gold-card' ? 'active' : ''}`}
                  style={{ color: '#9A6B18' }}
                >
                  Avari Gold
                </Link>
              </li>

              <li>
                <Link
                  href="/festivals"
                  className={`nav-item-link ${pathname.startsWith('/festivals') ? 'active' : ''}`}
                >
                  Experiences
                </Link>
              </li>

            </ul>
          </nav>

          <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Avari World Traveler Club ✦
          </div>
        </div>
      </header>

      {/* Pitch Mode Presentation Modal */}
      <PitchModeOverlay
        isOpen={isPitchOpen}
        onClose={() => setIsPitchOpen(false)}
        onStartChoreographedDemo={() => {
          setIsPitchOpen(false);
          window.location.href = '/tours?autoplay=true';
        }}
      />
    </>
  );
}
