import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  FileText,
  UserCheck,
  Globe,
  Database,
  Mail,
  ArrowLeft,
  ChevronRight
} from 'lucide-react';



export const metadata = {
  title: 'Privacy Policy | Avari Hotels & Resorts',
  description: 'Official Privacy Policy and Data Protection standards of Avari Hotels & Resorts. Learn how we protect guest information, reservations, and payment details.'
};

const SECTIONS = [
  { id: 'scope', title: '1. Scope & Commitment to Privacy' },
  { id: 'collection', title: '2. Information We Collect' },
  { id: 'purpose', title: '3. How We Use Your Information' },
  { id: 'disclosure', title: '4. Third-Party Sharing & System Handoffs' },
  { id: 'cookies', title: '5. Cookies & Tracking Technologies' },
  { id: 'security', title: '6. Data Security & Storage Standards' },
  { id: 'rights', title: '7. Your Rights & Data Protection Officer' }
];

export default function PrivacyPage() {
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
              <ShieldCheck size={14} color="#D4AF37" /> Legal Compliance & Trust
            </div>

            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.6rem',
              fontWeight: 700,
              margin: '0 0 12px 0',
              lineHeight: 1.2
            }}>
              Privacy Policy & Data Protection
            </h1>

            <p style={{
              fontSize: '1rem',
              color: '#CBD5E1',
              maxWidth: '720px',
              lineHeight: 1.65,
              margin: 0
            }}>
              Avari Hotels & Resorts is dedicated to safeguarding the privacy, confidentiality, and trust of our guests, members, and visitors worldwide.
            </p>

            <div style={{ marginTop: '20px', fontSize: '0.78rem', color: '#94A3B8' }}>
              Last Revised: September 2026 · Effective for all Avari Hotels, Resorts, Residences & Digital Services
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
                Contents
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
                <span style={{ fontSize: '0.72rem', color: '#64748B', display: 'block', marginBottom: '6px' }}>Questions or Requests?</span>
                <a
                  href="mailto:privacy@avari.com"
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
                  <Mail size={14} /> privacy@avari.com
                </a>
              </div>
            </aside>

            {/* Main Policy Body */}
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
              <section id="scope">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <Globe size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Jurisdiction & Applicability</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  1. Scope & Commitment to Privacy
                </h2>
                <p>
                  This Privacy Statement governs all websites, mobile experiences, customer loyalty programs, on-property guest Wi-Fi portals, and direct booking engines operated under the Avari Hotels & Resorts brand, including Avari Hotel Lahore, Avari Towers Karachi, Beach Luxury Hotel Karachi, Avari Xpress properties, and international corporate offices.
                </p>
                <p>
                  We treat your personal data with the highest degrees of discretion and integrity. We comply with all relevant federal laws of the Islamic Republic of Pakistan, international hospitality data privacy benchmarks, and general data protection principles (including the EU GDPR where applicable to our international guests).
                </p>
              </section>

              {/* Section 2 */}
              <section id="collection" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <Database size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Data Collection</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  2. Information We Collect
                </h2>
                <p>
                  To fulfill reservations, deliver bespoke guest service, and satisfy legal obligations, we collect the following categories of personal information:
                </p>
                <ul style={{ paddingLeft: '20px', margin: '14px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li><strong>Identity Information:</strong> Full legal name, title, contact telephone number, postal address, and primary email address.</li>
                  <li><strong>Statutory Verification Records:</strong> As mandated by federal law, original National Identity Card (CNIC) details for domestic guests, or passport numbers, nationality, and visa information for international travelers.</li>
                  <li><strong>Stay & Dining Preferences:</strong> Room category selections, bedding arrangements, floor preferences, dietary allergies, and past dining history at venues such as Dynasty and The Tollington.</li>
                  <li><strong>Financial & Payment Records:</strong> Credit card brand, masked card number (first 6 and last 4 digits), and authorization tokens. Full card details are processed directly through PCI-DSS Level 1 compliant financial payment gateways and are never stored in plain text on our servers.</li>
                  <li><strong>Avari Gold Loyalty Data:</strong> Membership tier status, points balances, digital pass synchronization data (Apple Wallet / Google Wallet), and reward voucher redemption logs.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="purpose" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <UserCheck size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Processing Purposes</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  3. How We Use Your Information
                </h2>
                <p>We process your data strictly on legitimate legal grounds, including:</p>
                <ul style={{ paddingLeft: '20px', margin: '14px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>Facilitating seamless room reservations, dining bookings, and banquet venue agreements.</li>
                  <li>Personalizing your stay according to your recorded guest preferences (e.g. pillow menu, high floor).</li>
                  <li>Administering the Avari Gold loyalty program and digital wallet membership cards.</li>
                  <li>Complying with statutory guest registration and law enforcement safety mandates.</li>
                  <li>Sending confirmation itineraries, digital folios, flight pickup dispatches, and voluntary satisfaction surveys.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="disclosure" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <Lock size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Data Sharing</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  4. Third-Party Sharing & System Handoffs
                </h2>
                <p>
                  Avari Hotels & Resorts does <strong>not</strong> sell, rent, or lease your personal information to third-party advertisers. Disclosures are limited to trusted technical and operational partners:
                </p>
                <ul style={{ paddingLeft: '20px', margin: '14px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li><strong>Central Reservation Engine (TravelClick / Amadeus):</strong> When reserving via our online booking engine, your reservation payload is transmitted through encrypted TLS handoffs to TravelClick to secure your room inventory.</li>
                  <li><strong>Payment Processors & Banking Partners:</strong> Authorized merchant acquirers for payment settlement and pre-authorization.</li>
                  <li><strong>Chauffeur & Airport Dispatch:</strong> Verified concierge transportation providers when airport transfers are requested.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="cookies" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <FileText size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Digital Tracking</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  5. Cookies & Tracking Technologies
                </h2>
                <p>
                  Our digital platforms use essential cookies to maintain your booking session, preserve room comparison trays, and remember member login states. Anonymous analytical cookies help us understand which suites, dining experiences, and virtual tours receive interest to optimize our digital theater performance. You may modify your browser settings to reject non-essential cookies without affecting the basic ability to browse.
                </p>
              </section>

              {/* Section 6 */}
              <section id="security" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <ShieldCheck size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Security Controls</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  6. Data Security & Storage Standards
                </h2>
                <p>
                  We implement multi-layered technical and organizational safeguards, including SSL/TLS 256-bit encryption for data in transit, strict role-based access control for hotel staff, firewalled server clusters, and ongoing vulnerability audits. Personal data is retained only for the duration necessary to deliver hospitality services and comply with statutory financial record-keeping requirements.
                </p>
              </section>

              {/* Section 7 */}
              <section id="rights" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <Mail size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Guest Rights</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  7. Your Rights & Data Protection Officer
                </h2>
                <p>
                  You have the right to request access to the personal data we hold about you, request rectification of inaccurate records, or request deletion of your member profile where statutory retention periods have lapsed.
                </p>
                <div style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '20px',
                  marginTop: '16px'
                }}>
                  <strong style={{ color: '#0F172A', display: 'block', marginBottom: '4px' }}>
                    Avari Corporate Data Protection Office
                  </strong>
                  <span>Email: <a href="mailto:privacy@avari.com" style={{ color: 'var(--avari-blue)', fontWeight: 600 }}>privacy@avari.com</a></span><br />
                  <span>Central Office: 87 Shahrah-e-Quaid-e-Azam (The Mall), Lahore, Pakistan</span><br />
                  <span>Telephone: +92 (42) 111-282-747</span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
