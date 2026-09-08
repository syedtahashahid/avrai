import React from 'react';
import Link from 'next/link';
import {
  FileText,
  UserCheck,
  Clock,
  CigaretteOff,
  ShieldCheck,
  CreditCard,
  AlertTriangle,
  Crown,
  ChevronRight,
  Mail
} from 'lucide-react';



export const metadata = {
  title: 'User Agreement & Guest Policies | Avari Hotels & Resorts',
  description: 'Official Guest Charter, House Rules, Check-in Identification Requirements, and Loyalty Agreement for staying at Avari Hotels & Resorts.'
};

const SECTIONS = [
  { id: 'identification', title: '1. Identification & Registration' },
  { id: 'timings', title: '2. Check-In & Departure Protocol' },
  { id: 'smoking', title: '3. Non-Smoking & Clean Air Policy' },
  { id: 'visitors', title: '4. Visitors & Property Security' },
  { id: 'settlement', title: '5. Deposits, Billing & Damages' },
  { id: 'prohibited', title: '6. Prohibited Items & House Decorum' },
  { id: 'loyalty', title: '7. Avari Gold Loyalty Member Terms' }
];

export default function UserAgreementPage() {
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
              <UserCheck size={14} color="#D4AF37" /> Guest Charter & House Rules
            </div>

            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.6rem',
              fontWeight: 700,
              margin: '0 0 12px 0',
              lineHeight: 1.2
            }}>
              User Agreement & Guest Policies
            </h1>

            <p style={{
              fontSize: '1rem',
              color: '#CBD5E1',
              maxWidth: '720px',
              lineHeight: 1.65,
              margin: 0
            }}>
              To maintain the highest standard of comfort, safety, and tranquil luxury for all our guests, all stays at Avari are governed by this Guest Agreement and House Charter.
            </p>

            <div style={{ marginTop: '20px', fontSize: '0.78rem', color: '#94A3B8' }}>
              Standard Operational Charter · Binding upon all Registered Guests & Day Visitors
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
                Charter Sections
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
                <span style={{ fontSize: '0.72rem', color: '#64748B', display: 'block', marginBottom: '6px' }}>Duty Manager Contact</span>
                <a
                  href="mailto:concierge@avari.com"
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
                  <Mail size={14} /> concierge@avari.com
                </a>
              </div>
            </aside>

            {/* Main Agreement Body */}
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
              <section id="identification">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <UserCheck size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Statutory Mandate</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  1. Identification & Registration
                </h2>
                <p>
                  In compliance with government safety directives and the Hotel Act, all guests checking in must produce valid, official government-issued photo identification:
                </p>
                <ul style={{ paddingLeft: '20px', margin: '14px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li><strong>Pakistani Nationals:</strong> Must present an original, unexpired Computerized National Identity Card (CNIC) or Smart National ID card. Photocopies or digital images cannot be accepted for statutory check-in.</li>
                  <li><strong>International Guests:</strong> Must present an original passport with a valid visa or entry stamp.</li>
                  <li><strong>Couples & Families:</strong> Family suites and rooms reserved for couples must adhere to local hospitality documentation requirements.</li>
                </ul>
              </section>

              {/* Section 2 */}
              <section id="timings" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <Clock size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Arrival & Departure</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  2. Check-In & Departure Protocol
                </h2>
                <p>
                  Standard check-in commences at <strong>14:00 (2:00 PM)</strong>. Standard check-out must conclude by <strong>12:00 PM noon</strong> to permit our housekeeping teams to prepare accommodations for arriving guests.
                </p>
                <ul style={{ paddingLeft: '20px', margin: '14px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li><strong>Early Arrivals:</strong> Requests for arrival prior to 09:00 require reservation of the room from the preceding night. Arrivals between 09:00 and 14:00 are accommodated on a complimentary basis subject to live room availability.</li>
                  <li><strong>Late Departures:</strong> Departures between 12:00 and 18:00 are subject to a 50% day-use fee, subject to availability. Departures post 18:00 will be billed at the full night rate. Avari Gold members receive priority late departure subject to tier privilege.</li>
                  <li><strong>Baggage Holding:</strong> Secure complimentary luggage storage is available with our Head Concierge for all arriving and departing guests.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="smoking" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <CigaretteOff size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Air Quality</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  3. Non-Smoking & Clean Air Policy
                </h2>
                <p>
                  Avari Hotels & Resorts is committed to maintaining fresh, clean indoor air for all guests. All public corridors, elevators, lobbies, restaurants, and designated non-smoking guest rooms and suites are strictly smoke-free zones.
                </p>
                <p>
                  Smoking (including tobacco, electronic cigarettes, and vaping devices) is permitted solely in designated smoking rooms and dedicated outdoor garden terraces. A minimum professional sanitization and deep cleaning charge of <strong>PKR 25,000</strong> will be applied to the guest folio if smoking occurs in non-smoking rooms.
                </p>
              </section>

              {/* Section 4 */}
              <section id="visitors" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <ShieldCheck size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Safety & Visitors</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  4. Visitors & Property Security
                </h2>
                <p>
                  For the security and peace of mind of our patrons, all non-registered visitors must report to the Reception Desk and present valid government identification before accessing guest floor elevators.
                </p>
                <ul style={{ paddingLeft: '20px', margin: '14px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>Visiting hours terminate at <strong>22:00 (10:00 PM)</strong>. Any visitor remaining after 22:00 must be officially registered as an overnight occupant, subject to maximum room occupancy and prevailing extra-person charges.</li>
                  <li><strong>Quiet Hours:</strong> Between 23:00 and 07:00, guests are requested to keep audio and television volumes at a considerate level to preserve restful sleep for adjacent patrons.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="settlement" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--avari-blue)', marginBottom: '8px' }}>
                  <CreditCard size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Settlement</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  5. Deposits, Billing & Damages
                </h2>
                <p>
                  An incidental pre-authorization on a credit card or cash deposit is required upon check-in to cover discretionary charges (dining at Dynasty, room service, laundry, telephone). All accounts must be fully settled prior to departure.
                </p>
                <p>
                  The registered guest assumes full financial responsibility for any physical damage to hotel furnishings, marble fixtures, artwork, or linen caused through willful negligence or misuse during their occupancy.
                </p>
              </section>

              {/* Section 6 */}
              <section id="prohibited" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#DC2626', marginBottom: '8px' }}>
                  <AlertTriangle size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Strict Prohibitions</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  6. Prohibited Items & House Decorum
                </h2>
                <p>
                  To preserve the safety and comfort of our patrons, the following items are strictly prohibited on all Avari premises:
                </p>
                <ul style={{ paddingLeft: '20px', margin: '14px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>Firearms, ammunition, fireworks, explosives, or licensed weapons of any classification (personal security guards must deposit weapons with hotel security upon arrival).</li>
                  <li>Illicit narcotics or controlled substances.</li>
                  <li>Hazardous chemicals, heating appliances, or cooking elements inside guest rooms.</li>
                  <li>Pets or live animals (with the exception of certified service animals upon prior written arrangement).</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section id="loyalty" style={{ borderTop: '1px solid #F1F5F9', paddingTop: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#D4AF37', marginBottom: '8px' }}>
                  <Crown size={18} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Loyalty Terms</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 14px 0' }}>
                  7. Avari Gold Loyalty Member Terms
                </h2>
                <p>
                  Membership in the Avari Gold Privilege Club is personal, non-transferable, and subject to good standing:
                </p>
                <ul style={{ paddingLeft: '20px', margin: '14px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>Points accrue on eligible direct stays and dining folios. Third-party OTA bookings (Expedia, Booking.com, Agoda) are excluded from loyalty point accrual.</li>
                  <li>Digital passes synchronized with Apple Wallet or Google Wallet remain the personal credential of the named account holder and must be presented alongside government ID when claiming VIP benefits.</li>
                  <li>Reward vouchers issued via the member portal are valid for 12 months from the date of issue and possess no cash surrender value.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
