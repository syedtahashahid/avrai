import React from 'react';
import Link from 'next/link';
import {
  FileCheck2,
  Scale,
  CreditCard,
  Ban,
  ShieldAlert,
  HelpCircle,
  ChevronRight,
  Mail
} from 'lucide-react';



export const metadata = {
  title: 'Terms of Use | Avari Hotels & Resorts',
  description: 'Digital platform Terms of Use, reservation policies, intellectual property terms, and legal conditions governing Avari Hotels & Resorts services.'
};

const SECTIONS = [
  { id: 'acceptance', title: '1. Acceptance of Terms & Eligibility' },
  { id: 'booking', title: '2. Reservations & Best Rate Guarantee' },
  { id: 'payment', title: '3. Payment, Rates & Currency' },
  { id: 'cancellation', title: '4. Cancellations, Modifications & No-Shows' },
  { id: 'intellectual', title: '5. Intellectual Property & 3D Assets' },
  { id: 'conduct', title: '6. Platform Rules & Prohibited Uses' },
  { id: 'liability', title: '7. Disclaimer & Limitation of Liability' },
  { id: 'jurisdiction', title: '8. Governing Law & Dispute Resolution' }
];

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      <main style={{ flex: 1 }}>
        
        <section style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          color: '#FFFFFF',
          padding: '50px 24px 60px 24px',
          position: 'relative'
        }}>
          <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(212, 175, 55, 0.2)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '20px',
              padding: '4px 14px',
              color: '#F5E6C8',
              fontSize: '0.74rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '14px'
            }}>
              <Scale size={14} color="#D4AF37" /> Terms of Service
            </div>

            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.6rem',
              fontWeight: 700,
              margin: '0 0 12px 0',
              lineHeight: 1.2
            }}>
              Terms of Use & Booking Conditions
            </h1>

            <p style={{
              fontSize: '1rem',
              color: '#CBD5E1',
              maxWidth: '720px',
              lineHeight: 1.65,
              margin: 0
            }}>
              Please read these terms carefully before accessing Avari digital platforms, making room reservations, or booking event spaces.
            </p>

            <div style={{ marginTop: '20px', fontSize: '0.78rem', color: '#94A3B8' }}>
              Effective Date: September 2026 · Avari Hotels & Resorts Private Limited
            </div>
          </div>
        </section>

        {/* Content Layout */}
        <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '40px 24px 80px 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(240px, 300px) 1fr',
            gap: '36px',
            alignItems: 'start'
          }}>
            {/* Table of Contents Sticky Aside */}
            <aside style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
              position: 'sticky',
              top: '100px'
            }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748B', display: 'block', marginBottom: '12px' }}>
                Navigation
              </span>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {SECTIONS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    style={{
                      fontSize: '0.84rem',
                      color: '#334155',
                      textDecoration: 'none',
                      padding: '6px 10px',
                      borderRadius: '6px',
                      transition: 'background 0.15s ease, color 0.15s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{sec.title}</span>
                    <ChevronRight size={13} color="#94A3B8" />
                  </a>
                ))}
              </nav>

              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', marginTop: '16px' }}>
                <span style={{ fontSize: '0.72rem', color: '#64748B', display: 'block', marginBottom: '6px' }}>Legal Inquiries</span>
                <a
                  href="mailto:legal@avari.com"
                  style={{
                    color: 'var(--avari-blue)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Mail size={14} /> legal@avari.com
                </a>
              </div>
            </aside>

            {/* Main Terms Body */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              color: '#334155',
              lineHeight: 1.8,
              fontSize: '0.95rem'
            }}>
              {/* Section 1 */}
              <section id="acceptance">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <FileCheck2 size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Agreement</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  1. Acceptance of Terms & Eligibility
                </h2>
                <p>
                  By accessing, browsing, or utilizing the digital websites, interactive 3D virtual tour software, booking systems, or loyalty portals of Avari Hotels & Resorts (collectively the &ldquo;Platform&rdquo;), you acknowledge that you have read, understood, and agreed to be legally bound by these Terms of Use.
                </p>
                <p>
                  You must be at least 18 years of age and possess the legal capacity to enter into binding hospitality contracts under applicable law to make reservations or financial transactions through this platform.
                </p>
              </section>

              {/* Section 2 */}
              <section id="booking" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <CreditCard size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Reservations</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  2. Reservations & Best Rate Guarantee
                </h2>
                <p>
                  All room reservations are subject to confirmation by the property. Under our Best Rate Guarantee, guests who book directly via Avari.com or authorized direct reservation desks are guaranteed our most competitive publicly available rates. If a lower publicly verifiable rate for an identical room type, date, and cancellation policy is found within 24 hours of booking, we will match that rate upon verification.
                </p>
                <p>
                  Online booking requests hand off to our central reservation engine (TravelClick) to lock live room inventory. A reservation is only confirmed once an official confirmation number and folio reference have been issued.
                </p>
              </section>

              {/* Section 3 */}
              <section id="payment" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <Scale size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Billing</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  3. Payment, Rates & Currency
                </h2>
                <p>
                  Room rates are quoted in Pakistani Rupees (PKR) for properties situated in Pakistan, or in the local currency of international locations (e.g. AED in the United Arab Emirates), exclusive or inclusive of statutory sales tax and luxury service charges as stated at checkout.
                </p>
                <p>
                  A valid credit or debit card is required at the time of reservation to secure your stay. We reserve the right to pre-authorize the card prior to arrival for the full stay amount plus an estimated security deposit for incidentals.
                </p>
              </section>

              {/* Section 4 */}
              <section id="cancellation" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <Ban size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Changes & Cancellation</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  4. Cancellations, Modifications & No-Shows
                </h2>
                <p>
                  Cancellation policies vary by rate type and will be clearly communicated during the reservation process:
                </p>
                <ul style={{ paddingLeft: '20px', margin: '14px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li><strong>Standard Flexible Rate:</strong> Cancellations must be received by 14:00 hotel local time at least 24 hours prior to scheduled arrival date to avoid a one-night penalty charge.</li>
                  <li><strong>Non-Refundable / Promotional Rates:</strong> Fully prepaid at booking, non-refundable, and non-transferable in case of modification or cancellation.</li>
                  <li><strong>No-Shows:</strong> Failure to arrive without prior written notice will result in forfeiture of the first night&apos;s room and tax, and any remaining nights will be released.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="intellectual" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <ShieldAlert size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Intellectual Property</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  5. Intellectual Property & 3D Assets
                </h2>
                <p>
                  All content included on this website, including but not limited to brand trademarks, logos, texts, graphics, photographic imagery, 3D spherical panoramic captures, digital membership pass templates, and software code, is the exclusive proprietary property of Avari Hotels & Resorts or its licensors and is protected by national and international copyright and trademark laws. Unauthorized reproduction, scraping, reverse engineering, or commercial redistribution is strictly prohibited.
                </p>
              </section>

              {/* Section 6 */}
              <section id="conduct" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <Ban size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Permitted Use</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  6. Platform Rules & Prohibited Uses
                </h2>
                <p>
                  You agree to use this Platform solely for legitimate personal or corporate hospitality inquiries and bookings. You shall not:
                </p>
                <ul style={{ paddingLeft: '20px', margin: '14px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>Make speculative, false, or fraudulent reservations in anticipation of demand.</li>
                  <li>Transmit automated bots, scrapers, crawlers, or malicious code designed to disrupt server performance.</li>
                  <li>Impersonate any person or entity, or falsely state an affiliation with corporate client accounts or Avari Gold tiers.</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section id="liability" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <ShieldAlert size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Liability</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  7. Disclaimer & Limitation of Liability
                </h2>
                <p>
                  While we endeavor to ensure all photographs, virtual tours, room dimensions, and amenity descriptions are precise representations, minor variances may occur due to ongoing renovations or seasonal configurations. To the fullest extent permitted by applicable law, Avari Hotels & Resorts shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use this Platform or delays in booking processing.
                </p>
              </section>

              {/* Section 8 */}
              <section id="jurisdiction" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <Scale size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Jurisdiction</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  8. Governing Law & Dispute Resolution
                </h2>
                <p>
                  These Terms of Use and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the substantive laws of the Islamic Republic of Pakistan. The competent courts situated in Lahore, Pakistan, shall have exclusive jurisdiction over any proceeding arising hereunder, without prejudice to Avari&apos;s right to seek injunctive relief in any court of competent jurisdiction.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
