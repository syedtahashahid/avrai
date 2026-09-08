'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Crown,
  Search,
  Calendar,
  Presentation,
  Building2,
  ChevronDown,
  Sparkles,
  PhoneCall,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';
import PitchModeOverlay from './PitchModeOverlay';
import { getTravelClickBookingUrl } from '../utils/bookingUrl';

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
                  <div className="bk-dropdown-menu" style={{ width: '380px' }}>
                    <div style={{ padding: '8px 18px', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--avari-gold)', fontWeight: 700 }}>
                      Lahore Destinations
                    </div>
                    <Link
                      href="/hotels/avari-hotel-lahore"
                      className="bk-dropdown-item"
                      style={{ display: 'block' }}
                      onClick={() => setHotelsDropdownOpen(false)}
                    >
                      <div className="bk-hotel-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Crown size={15} color="var(--avari-gold)" />
                        Avari Hotel Lahore
                      </div>
                      <div className="bk-hotel-sub">
                        5-Star Luxury Heritage Flagship • 87 The Mall Road
                      </div>
                    </Link>

                    <Link
                      href="/hotels/avari-xpress-gulberg"
                      className="bk-dropdown-item"
                      style={{ display: 'block' }}
                      onClick={() => setHotelsDropdownOpen(false)}
                    >
                      <div className="bk-hotel-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Building2 size={15} color="#E05A47" />
                        Avari Xpress Gulberg
                      </div>
                      <div className="bk-hotel-sub">
                        4-Star Contemporary Boutique • Noor Jehan Road, Gulberg III
                      </div>
                    </Link>
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
