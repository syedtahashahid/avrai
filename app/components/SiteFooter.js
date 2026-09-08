import React from 'react';
import Link from 'next/link';
import {
  PhoneCall,
  Mail,
  ShieldCheck,
  Crown,
  Sparkles,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { getTravelClickBookingUrl } from '../utils/bookingUrl';

export default function SiteFooter() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0F172A 0%, #090E1A 100%)',
      color: '#FFFFFF',
      borderTop: '2px solid #D4AF37',
      padding: '70px 24px 30px 24px',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* 4-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Column 1: Brand & Heritage */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.65rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                color: '#FFFFFF'
              }}>
                AVARI
              </span>
              <span style={{
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                color: '#D4AF37',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}>
                HOTELS & RESORTS
              </span>
            </div>

            <p style={{
              fontSize: '0.88rem',
              color: '#94A3B8',
              lineHeight: 1.7,
              marginBottom: '20px',
              maxWidth: '320px'
            }}>
              Hospitality perfected across Pakistan and beyond. Classical luxury, palatial heritage architecture, and world-class bespoke guest service since 1944.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.84rem' }}>
              <a
                href="tel:+9242111282747"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#F5E6C8',
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                <PhoneCall size={14} color="#D4AF37" />
                <span>+92 (42) 111-282-747</span>
              </a>

              <a
                href="mailto:reservations@avari.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#94A3B8',
                  textDecoration: 'none'
                }}
              >
                <Mail size={14} color="#D4AF37" />
                <span>reservations@avari.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Portfolio Destinations */}
          <div>
            <h4 style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#D4AF37',
              marginBottom: '18px'
            }}>
              Our Hotels & Resorts
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <Link href="/hotels/avari-lahore" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                Avari Hotel Lahore (Mall Road)
              </Link>
              <Link href="/hotels/avari-towers-karachi" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                Avari Towers Karachi
              </Link>
              <Link href="/hotels/beach-luxury-hotel" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                Beach Luxury Hotel Karachi
              </Link>
              <Link href="/hotels/avari-xpress-gulberg" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                Avari Xpress Gulberg Lahore
              </Link>
              <Link href="/hotels/avari-xpress-islamabad" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                Avari Xpress Islamabad
              </Link>
              <Link href="/hotels/avari-xpress-multan" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                Avari Xpress Multan
              </Link>
              <Link href="/hotels/avari-xpress-skardu" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                Avari Xpress Skardu
              </Link>
            </div>
          </div>

          {/* Column 3: Dining & Experiences */}
          <div>
            <h4 style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#D4AF37',
              marginBottom: '18px'
            }}>
              Dining & Experiences
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <Link href="/dining" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                Restaurants & Signature Dining
              </Link>
              <Link href="/banquets" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                Banquets, Weddings & Summits
              </Link>
              <Link href="/festivals" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                Cultural Festivals & Galas
              </Link>
              <Link href="/gold-card" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Crown size={14} color="#D4AF37" />
                <span>Avari Gold Privilege Club</span>
              </Link>
              <Link href="/compare" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                Side-by-Side Suite Comparison
              </Link>
              <a
                href={getTravelClickBookingUrl({ hotelId: '14412' })}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#CBD5E1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <span>TravelClick Reservation System</span>
                <ExternalLink size={12} style={{ opacity: 0.6 }} />
              </a>
            </div>
          </div>

          {/* Column 4: Guest Services & Essential Legal */}
          <div>
            <h4 style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#D4AF37',
              marginBottom: '18px'
            }}>
              Guest Services & Legal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <Link href="/support" style={{ color: '#CBD5E1', textDecoration: 'none', fontWeight: 600 }}>
                24/7 Concierge & Support Center
              </Link>
              <Link href="/privacy" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                Privacy Policy & Data Rights
              </Link>
              <Link href="/terms" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                Terms of Use & Booking Rules
              </Link>
              <Link href="/user-agreement" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                User Agreement & Guest Charter
              </Link>
              <Link href="/booking" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                Best Rate Guarantee
              </Link>
              <Link href="/account" style={{ color: '#CBD5E1', textDecoration: 'none' }}>
                Member Portal & Digital Pass
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '26px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px',
          fontSize: '0.78rem',
          color: '#64748B'
        }}>
          <div>
            © {new Date().getFullYear()} Avari Hotels & Resorts Private Limited. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/privacy" style={{ color: '#94A3B8', textDecoration: 'none' }}>Privacy</Link>
            <span>·</span>
            <Link href="/terms" style={{ color: '#94A3B8', textDecoration: 'none' }}>Terms</Link>
            <span>·</span>
            <Link href="/user-agreement" style={{ color: '#94A3B8', textDecoration: 'none' }}>Guest Charter</Link>
            <span>·</span>
            <Link href="/support" style={{ color: '#94A3B8', textDecoration: 'none' }}>Help Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

