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

  const isGoldTheme = pathname === '/gold-card';

  return (
    <>
      {isGoldTheme && (
        <style dangerouslySetInnerHTML={{ __html: `
          .site-header.gold-theme .nav-item-link,
          .site-header.gold-theme .header-account-link {
            color: #fff4db !important;
          }
          .site-header.gold-theme .nav-item-link:hover,
          .site-header.gold-theme .header-account-link:hover {
            color: #d5aa52 !important;
          }
          .site-header.gold-theme .brand-subtitle {
            color: #b9ab91 !important;
          }
        `}} />
      )}
      <header className={`site-header ${isGoldTheme ? 'gold-theme' : ''}`} style={isGoldTheme ? { background: '#0a0806', borderBottom: '1px solid rgba(213, 170, 82, 0.2)' } : {}}>
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
                color: isGoldTheme ? '#d5aa52' : 'var(--avari-blue)',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              Concierge Desk
            </Link>
          </div>

          {/* Center: Official Brand Logo with Light Blue Sail (Dark Text on Light Header) */}
          <Link href="/" className="brand-emblem-container">
            <Image
              src="/images/avari-logo-dark.png"
              alt="Avari Hotels & Resorts"
              width={92}
              height={46}
              priority
              style={{
                height: '46px',
                width: 'auto',
                objectFit: 'contain',
                filter: isGoldTheme ? 'invert(1) brightness(100) sepia(1) hue-rotate(10deg) saturate(3)' : 'none'
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
                                  {property.category}
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

        </div>
      </header>
    </>
  );
}

