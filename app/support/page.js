'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  HelpCircle,
  Building2,
  Calendar,
  Sparkles,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';



const HOTEL_DIRECTORY = [
  {
    name: 'Avari Hotel Lahore',
    tier: '5-Star Heritage Flagship',
    city: 'Lahore, Punjab',
    phone: '+92 (42) 111-282-747',
    email: 'lahore@avari.com',
    address: '87 Shahrah-e-Quaid-e-Azam (The Mall), Lahore',
    hours: '24/7 Front Desk & Concierge'
  },
  {
    name: 'Avari Towers Karachi',
    tier: '5-Star Luxury Skyscraper',
    city: 'Karachi, Sindh',
    phone: '+92 (21) 111-282-747',
    email: 'towers@avari.com',
    address: '242-244 Fatima Jinnah Road, Karachi',
    hours: '24/7 Front Desk & Concierge'
  },
  {
    name: 'Beach Luxury Hotel Karachi',
    tier: 'Historic Waterfront Resort',
    city: 'Karachi, Sindh',
    phone: '+92 (21) 3561-1031',
    email: 'beachluxury@avari.com',
    address: 'Moulvi Tamizuddin Khan Road, Karachi',
    hours: '24/7 Front Desk & Banquets'
  },
  {
    name: 'Avari Xpress Gulberg',
    tier: 'Boutique Business Hotel',
    city: 'Lahore, Punjab',
    phone: '+92 (42) 3577-4001',
    email: 'xpress.gulberg@avari.com',
    address: '15-C/1, M.M. Alam Road, Gulberg III, Lahore',
    hours: '24/7 Front Desk'
  },
  {
    name: 'Avari Xpress Islamabad',
    tier: 'Executive Capital Address',
    city: 'Islamabad, ICT',
    phone: '+92 (51) 283-7747',
    email: 'xpress.islamabad@avari.com',
    address: 'Sector F-6, Super Market Enclave, Islamabad',
    hours: '24/7 Front Desk'
  },
  {
    name: 'Avari Xpress Multan',
    tier: 'Contemporary City Retreat',
    city: 'Multan, Punjab',
    phone: '+92 (61) 458-2747',
    email: 'xpress.multan@avari.com',
    address: 'Abdali Road, Cantt, Multan',
    hours: '24/7 Front Desk'
  },
  {
    name: 'Avari Xpress Skardu',
    tier: 'Northern Alpine Haven',
    city: 'Skardu, Gilgit-Baltistan',
    phone: '+92 (5815) 455-747',
    email: 'xpress.skardu@avari.com',
    address: 'Shangrila Road, Kachura, Skardu',
    hours: 'Seasonal 24/7 Concierge'
  },
  {
    name: 'Avari International Hospitality (Dubai)',
    tier: 'Global Sales & Support Office',
    city: 'Dubai, United Arab Emirates',
    phone: '+971 (4) 295-6666',
    email: 'dubai@avari.com',
    address: 'Al Barsha / Deira Corporate Hub, Dubai, UAE',
    hours: '09:00 - 18:00 (GST)'
  }
];

const FAQS = [
  {
    q: 'What are the standard check-in and check-out times?',
    a: 'Standard check-in is from 14:00 (2:00 PM) onwards, and standard check-out is by 12:00 PM noon. Early arrivals and late departures are accommodated upon request, subject to availability. Avari Gold members enjoy guaranteed priority late check-out.'
  },
  {
    q: 'Do you arrange airport pick-up and chauffeur services?',
    a: 'Yes. All our properties offer private luxury airport transfer services. At Avari Hotel Lahore and Avari Towers Karachi, Mercedes-Benz and executive sedans can be reserved during online booking or by notifying our concierge desk at least 12 hours prior to arrival.'
  },
  {
    q: 'What is the cancellation and refund policy?',
    a: 'Standard reservations may be cancelled free of charge up to 24 hours prior to 14:00 on the scheduled arrival date. Prepaid promotional rates or peak event periods may carry specific non-refundable conditions clearly highlighted during booking.'
  },
  {
    q: 'What forms of government identification are required at check-in?',
    a: 'In accordance with local hospitality regulations, all Pakistani citizens must present an original, valid CNIC or Smart National ID card. International travelers must present a valid passport and entry visa.'
  },
  {
    q: 'How do I redeem my Avari Gold points or manage my membership?',
    a: 'You can view your points balance, transaction history, and instant digital vouchers directly from the Avari Member Portal at /account. Digital passes can also be added directly to Apple Wallet and Google Wallet.'
  }
];

export default function SupportPage() {
  const [inquiryType, setInquiryType] = useState('Reservations');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    bookingRef: '',
    property: 'Avari Hotel Lahore',
    message: ''
  });
  const [submittedTicket, setSubmittedTicket] = useState(null);
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    const ticketId = `AVR-SUP-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedTicket({
      id: ticketId,
      name: formData.fullName,
      email: formData.email,
      property: formData.property,
      type: inquiryType,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      <main style={{ flex: 1 }}>
        {/* Support Hero Banner */}
        <section style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          color: '#FFFFFF',
          padding: '60px 24px 70px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
          
          <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(212, 175, 55, 0.2)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '20px',
              padding: '6px 16px',
              color: '#F5E6C8',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '18px'
            }}>
              <Sparkles size={14} color="#D4AF37" /> 24/7 Guest Care & Concierge
            </div>

            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.8rem',
              fontWeight: 700,
              lineHeight: 1.15,
              margin: '0 0 16px 0',
              color: '#FFFFFF'
            }}>
              We Are Here to Serve You
            </h1>

            <p style={{
              fontSize: '1.05rem',
              color: '#CBD5E1',
              lineHeight: 1.7,
              margin: '0 auto 30px auto',
              maxWidth: '680px'
            }}>
              Whether planning a bespoke stay, reserving a grand banquet hall, or inquiring about our VIP loyalty program, our dedicated team is at your immediate service.
            </p>

            {/* Quick Emergency Hotlines Strip */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
              flexWrap: 'wrap'
            }}>
              <a
                href="tel:+9242111282747"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '12px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease'
                }}
              >
                <PhoneCall size={16} color="#D4AF37" />
                <span>Hotline: +92 (42) 111-282-747</span>
              </a>

              <a
                href="mailto:reservations@avari.com"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '12px 22px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease'
                }}
              >
                <Mail size={16} color="#D4AF37" />
                <span>Email: reservations@avari.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* Content Container */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '50px 24px 80px 24px' }}>
          {/* Main 2-Column: Inquiry Form + Concierge Benefits */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '36px',
            marginBottom: '60px'
          }}>
            {/* Interactive Support Desk Form */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              padding: '36px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--avari-blue)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Direct Concierge Assistance
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#0F172A', margin: '4px 0 8px 0' }}>
                  Send an Inquiry
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  Our hospitality duty officers respond within 2 to 4 hours.
                </p>
              </div>

              {submittedTicket ? (
                <div style={{
                  background: '#F0FDF4',
                  border: '1.5px solid #86EFAC',
                  borderRadius: '14px',
                  padding: '28px',
                  textAlign: 'center'
                }}>
                  <CheckCircle2 size={42} color="#16A34A" style={{ margin: '0 auto 14px auto' }} />
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#166534', margin: '0 0 6px 0' }}>
                    Inquiry Submitted Successfully
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#374151', margin: '0 0 16px 0', lineHeight: 1.6 }}>
                    Thank you, <strong>{submittedTicket.name}</strong>. Your inquiry has been routed to the duty concierge at <strong>{submittedTicket.property}</strong>.
                  </p>
                  <div style={{
                    background: '#FFFFFF',
                    border: '1px dashed #86EFAC',
                    borderRadius: '10px',
                    padding: '12px 18px',
                    display: 'inline-block',
                    marginBottom: '20px'
                  }}>
                    <span style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', display: 'block' }}>Ticket Reference</span>
                    <strong style={{ fontSize: '1.15rem', color: '#166534', fontFamily: 'monospace' }}>{submittedTicket.id}</strong>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => setSubmittedTicket(null)}
                      className="btn-luxury-outline"
                      style={{ fontSize: '0.82rem', padding: '8px 18px' }}
                    >
                      Send Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Category Pills */}
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      Inquiry Category
                    </label>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {['Reservations', 'Banquets & Weddings', 'Dining', 'Avari Gold', 'Corporate'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setInquiryType(type)}
                          style={{
                            padding: '6px 14px',
                            borderRadius: '20px',
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            border: inquiryType === type ? '1px solid var(--avari-blue)' : '1px solid #CBD5E1',
                            background: inquiryType === type ? 'var(--avari-blue)' : '#FFFFFF',
                            color: inquiryType === type ? '#FFFFFF' : '#475569',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ fontSize: '0.76rem', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '4px' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Syed Taha Shahid"
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1.5px solid #CBD5E1',
                          fontSize: '0.9rem',
                          outline: 'none',
                          color: '#0F172A'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.76rem', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '4px' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1.5px solid #CBD5E1',
                          fontSize: '0.9rem',
                          outline: 'none',
                          color: '#0F172A'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ fontSize: '0.76rem', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '4px' }}>
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 1234567"
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1.5px solid #CBD5E1',
                          fontSize: '0.9rem',
                          outline: 'none',
                          color: '#0F172A'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.76rem', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '4px' }}>
                        Destination Property
                      </label>
                      <select
                        value={formData.property}
                        onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: '1.5px solid #CBD5E1',
                          fontSize: '0.88rem',
                          background: '#FFFFFF',
                          color: '#0F172A',
                          outline: 'none'
                        }}
                      >
                        <option value="Avari Hotel Lahore">Avari Hotel Lahore (Mall Road)</option>
                        <option value="Avari Towers Karachi">Avari Towers Karachi</option>
                        <option value="Beach Luxury Hotel Karachi">Beach Luxury Hotel Karachi</option>
                        <option value="Avari Xpress Gulberg">Avari Xpress Gulberg (Lahore)</option>
                        <option value="Avari Xpress Islamabad">Avari Xpress Islamabad</option>
                        <option value="Avari Xpress Multan">Avari Xpress Multan</option>
                        <option value="Avari Xpress Skardu">Avari Xpress Skardu</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.76rem', fontWeight: 600, color: '#475569', display: 'block', marginBottom: '4px' }}>
                      Message or Inquiry Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify dates, preferred suite type, event guest counts, or specific concierge requests..."
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        border: '1.5px solid #CBD5E1',
                        fontSize: '0.9rem',
                        outline: 'none',
                        color: '#0F172A',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-luxury-gold"
                    style={{
                      padding: '14px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      marginTop: '6px'
                    }}
                  >
                    <Send size={16} /> Submit Concierge Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Concierge Service Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                padding: '30px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.03)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShieldCheck size={22} color="#D4AF37" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#0F172A', margin: 0, fontFamily: 'var(--font-serif)' }}>
                      Best Rate Guarantee Assurance
                    </h3>
                    <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Direct Reservation Security</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                  Booking directly through Avari.com or with our central reservations desk guarantees the best available public rates, complimentary high-speed Wi-Fi, and priority consideration for complimentary room upgrades.
                </p>
              </div>

              <div style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                padding: '30px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.03)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(2, 124, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Clock size={22} color="var(--avari-blue)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', color: '#0F172A', margin: 0, fontFamily: 'var(--font-serif)' }}>
                      Flight Dispatch & Chauffeur Coordination
                    </h3>
                    <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Airport Pickup Protocol</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                  Our concierge team monitors live flight arrival times at Lahore Allama Iqbal International (LHE) and Karachi Jinnah International (KHI) to ensure your chauffeur is waiting the moment you clear customs.
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #1C1917 0%, #292524 100%)',
                borderRadius: '20px',
                border: '1.5px solid #D4AF37',
                padding: '30px',
                color: '#FFFFFF'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Sparkles size={18} color="#D4AF37" />
                  <span style={{ fontSize: '0.76rem', color: '#D4AF37', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    Avari Gold Privilege Club
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: '#FFFFFF', margin: '0 0 10px 0' }}>
                  Need Assistance with Points or Vouchers?
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#D6D3D1', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                  Gold and Silver members enjoy dedicated priority support, instant points balance updates, and assistance with digital wallet membership passes.
                </p>
                <Link
                  href="/account"
                  className="btn-luxury-gold"
                  style={{ display: 'inline-flex', padding: '8px 18px', fontSize: '0.78rem' }}
                >
                  Open Member Portal
                </Link>
              </div>
            </div>
          </div>

          {/* Property Contact Directory */}
          <div style={{ marginBottom: '60px' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span style={{ fontSize: '0.76rem', color: 'var(--avari-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Nationwide & International Directory
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: '#0F172A', margin: '6px 0 0 0' }}>
                Contact Our Hotels Directly
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '20px'
            }}>
              {HOTEL_DIRECTORY.map((hotel) => (
                <div
                  key={hotel.name}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
                    transition: 'transform 0.2s ease, border-color 0.2s ease'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#D4AF37', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {hotel.tier}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: '#0F172A', margin: '4px 0 12px 0' }}>
                      {hotel.name}
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem', color: '#475569' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <MapPin size={15} color="#94A3B8" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{hotel.address}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <PhoneCall size={15} color="#94A3B8" style={{ flexShrink: 0 }} />
                        <a href={`tel:${hotel.phone.replace(/[^0-9+]/g, '')}`} style={{ color: 'var(--avari-blue)', fontWeight: 600, textDecoration: 'none' }}>
                          {hotel.phone}
                        </a>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Mail size={15} color="#94A3B8" style={{ flexShrink: 0 }} />
                        <a href={`mailto:${hotel.email}`} style={{ color: '#64748B', textDecoration: 'none' }}>
                          {hotel.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '12px', marginTop: '16px', fontSize: '0.74rem', color: '#94A3B8' }}>
                    {hotel.hours}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guest FAQs Section */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid #E2E8F0',
            padding: '40px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.03)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--avari-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Quick Answers
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#0F172A', margin: '4px 0 0 0' }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '880px', margin: '0 auto' }}>
              {FAQS.map((faq, index) => {
                const isOpen = activeFaqIndex === index;
                return (
                  <div
                    key={faq.q}
                    style={{
                      border: '1px solid #E2E8F0',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      transition: 'border-color 0.2s ease'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaqIndex(isOpen ? -1 : index)}
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        background: isOpen ? '#F8FAFC' : '#FFFFFF',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '14px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '0.96rem',
                        fontWeight: 600,
                        color: '#0F172A'
                      }}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        color="#64748B"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                          flexShrink: 0
                        }}
                      />
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 20px 18px 20px', background: '#F8FAFC', fontSize: '0.9rem', color: '#475569', lineHeight: 1.7 }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
