'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import {
  Calendar,
  Presentation,
  ChevronDown,
  PhoneCall,
  ExternalLink,
  UserRound
} from 'lucide-react';
import { getTravelClickBookingUrl } from '../utils/bookingUrl';
import { PORTFOLIO_PROPERTIES, PORTFOLIO_REGIONS } from '../data/portfolioData';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [hotelsDropdownOpen, setHotelsDropdownOpen] = useState(false);
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
            <Link
              href="/support"
              style={{
                fontSize: '0.74rem',
                color: 'var(--avari-blue)',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              Concierge Desk
            </Link>
          </div>

          {/* Center: Official High-Res Gold Sail Emblem */}
          <Link href="/" className="brand-emblem-container">
            <Image
              src="/images/avari-gold-emblem.png"
              alt="Avari Hotels & Resorts"
              width={92}
              height={50}
              priority
              style={{
                height: '46px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 10px var(--accent-glow))'
              }}
            />
            <div>
              <div className="brand-title">
                AVARI <span style={{ color: 'var(--avari-gold)' }}>HOTELS</span>
              </div>
              <div className="brand-subtitle">
                Hospitality Perfected Since 1944
              </div>
            </div>
          </Link>

          {/* Right: Book Now & Sign In */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
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
                            const href = property.detailPath || `/hotels/${property.slug}`;

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

              <li>
                <Link
                  href="/compare"
                  className={`nav-item-link ${pathname === '/compare' ? 'active' : ''}`}
                >
                  Compare rooms
                </Link>
              </li>
            </ul>
          </nav>

          <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Avari World Traveler Club ✦
          </div>
        </div>
      </header>
    </>
  );
}

