'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Crown,
  Sparkles,
  Gift,
  Calendar,
  CreditCard,
  ArrowRight,
  Check,
  Clock,
  Bed,
  Utensils,
  Car,
  UserRound,
  LogOut,
  RefreshCw,
  ShieldCheck,
  ChevronRight,
  Award,
  Globe,
  LockKeyhole,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import {
  readDemoAccount,
  saveDemoAccount,
  clearDemoAccount,
  switchSampleAccount,
  redeemDemoReward,
  simulateEarnPoints,
  saveStayPreferences,
  readBookingActivity,
  SAMPLE_PROFILES,
  REWARDS_CATALOG
} from '../lib/demoStore';
import DigitalWalletModal from '../components/DigitalWalletModal';

export default function AccountPage() {
  const [account, setAccount] = useState(() => {
    const existing = readDemoAccount();
    return existing || SAMPLE_PROFILES['taha-gold'];
  });

  const [bookingActivity, setBookingActivity] = useState(() => readBookingActivity());
  const [authMode, setAuthMode] = useState('sample'); // 'sample' | 'manual'
  const [activeTab, setActiveTab] = useState('points'); // 'points' | 'vouchers' | 'preferences' | 'activity'
  const [redeemNotice, setRedeemNotice] = useState(null);
  const [prefsSaved, setPrefsSaved] = useState(false);
  const [walletModal, setWalletModal] = useState(null); // 'apple' | 'google' | null

  // Preference Form States
  const [bedPref, setBedPref] = useState(account?.preferences?.bedType || 'King Bed');
  const [floorPref, setFloorPref] = useState(account?.preferences?.floorPreference || 'High Floor (Floor 6+)');
  const [pillowPref, setPillowPref] = useState(account?.preferences?.pillowChoice || 'Dual Firmness Feather Down');
  const [specialReq, setSpecialReq] = useState(account?.preferences?.specialRequests || 'Quiet room away from elevator');

  const handleSelectSample = (sampleKey) => {
    const profile = switchSampleAccount(sampleKey);
    setAccount(profile);
    setBedPref(profile.preferences?.bedType || 'King Bed');
    setFloorPref(profile.preferences?.floorPreference || 'High Floor');
    setPillowPref(profile.preferences?.pillowChoice || 'Dual Firmness Feather Down');
    setSpecialReq(profile.preferences?.specialRequests || '');
    setRedeemNotice(null);
  };

  const handleManualLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') || 'Valued Guest';
    const email = formData.get('email') || 'guest@avari.demo';

    const customProfile = {
      id: `custom-${Date.now()}`,
      name,
      email,
      tier: 'Gold Privilege',
      tierCode: 'GOLD',
      memberId: `AVR-GLD-${Math.floor(100000 + Math.random() * 900000)}`,
      memberSince: '2026',
      points: 18500,
      nextTierPoints: 30000,
      nextTierName: 'Diamond Elite',
      staysCount: 4,
      nightsCount: 7,
      upgradeVouchers: 1,
      avatarInitials: name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase() || 'VG',
      badgeColor: '#D4AF37',
      history: [
        { id: 'tx-init', date: '2026-09-08', title: 'Welcome Gold Bonus Allocation', points: +18500, type: 'earn' }
      ],
      vouchers: [
        { id: `VCHR-${Date.now()}`, title: 'Welcome High Tea Voucher', code: 'AVR-TEA-1090', expires: '2026-12-31', status: 'Active' }
      ],
      preferences: {
        bedType: 'King Bed',
        floorPreference: 'High Floor',
        pillowChoice: 'Dual Firmness Feather Down',
        specialRequests: 'Quiet room with scenic city view'
      }
    };

    saveDemoAccount(customProfile);
    setAccount(customProfile);
    setRedeemNotice(null);
  };

  const handleRedeem = (reward) => {
    const result = redeemDemoReward(reward);
    if (!result) return;
    if (!result.success) {
      setRedeemNotice({ type: 'error', message: result.message });
      return;
    }
    setAccount(result.updatedAccount);
    setRedeemNotice({
      type: 'success',
      message: `Successfully redeemed! "${reward.title}" has been issued to your digital vouchers.`,
      voucher: result.voucher
    });
  };

  const handleSimulatePoints = () => {
    const updated = simulateEarnPoints(2000, 'Simulated Stay: Avari Hotel Lahore (2 Nights)');
    if (updated) {
      setAccount(updated);
      setRedeemNotice({
        type: 'success',
        message: '+2,000 Stay Points credited to your account balance successfully!'
      });
    }
  };

  const handleSavePreferences = (e) => {
    e.preventDefault();
    const updated = saveStayPreferences({
      bedType: bedPref,
      floorPreference: floorPref,
      pillowChoice: pillowPref,
      specialRequests: specialReq
    });
    if (updated) {
      setAccount(updated);
      setPrefsSaved(true);
      setTimeout(() => setPrefsSaved(false), 3000);
    }
  };

  const handleSignOut = () => {
    clearDemoAccount();
    setAccount(null);
    setRedeemNotice(null);
  };

  const currentPoints = account?.points || 0;
  const nextTarget = account?.nextTierPoints || 30000;
  const tierProgressPercent = Math.min(100, Math.round((currentPoints / nextTarget) * 100));

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      {/* When NO account is active, show the Sample Logins & Sign In gate */}
      {!account ? (
        <main className="section-container" style={{ padding: '60px 24px 100px 24px', maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              padding: '6px 18px',
              borderRadius: '20px',
              color: '#926C15',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '14px'
            }}>
              <Crown size={15} color="#D4AF37" />
              Avari World Traveler & Gold Card
            </div>
            <h1 style={{ fontSize: '2.6rem', color: '#0F172A', marginBottom: '12px' }}>
              Sign In to Your Avari Member Portal
            </h1>
            <p style={{ fontSize: '1.02rem', color: '#64748B', maxWidth: '640px', margin: '0 auto' }}>
              Choose a profile below or sign in manually to inspect live points, tiers, and rewards.
            </p>
          </div>

          {/* Quick 1-Click Sample Logins */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
            padding: '36px',
            marginBottom: '40px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#0F172A', margin: 0 }}>
                  1-Click Instant Access Profiles
                </h3>
                <span style={{ fontSize: '0.84rem', color: '#64748B' }}>
                  Select a test account to immediately load preconfigured points, stays, and tier privileges.
                </span>
              </div>
              <span style={{ fontSize: '0.74rem', background: '#EFF6FF', color: 'var(--avari-blue)', padding: '5px 12px', borderRadius: '20px', fontWeight: 700 }}>
                Instant Access Mode
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
              {/* Profile 1: Taha Shahid (Gold) */}
              <button
                type="button"
                onClick={() => handleSelectSample('taha-gold')}
                style={{
                  background: 'linear-gradient(135deg, #FFFDF8 0%, #FAF5EA 100%)',
                  border: '2px solid #E4C87F',
                  borderRadius: '12px',
                  padding: '22px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#D4AF37', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.95rem' }}>
                      TS
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1.02rem' }}>Syed Taha Shahid</div>
                      <div style={{ fontSize: '0.76rem', color: '#926C15', fontWeight: 600 }}>Gold Privilege Member</div>
                    </div>
                  </div>
                  <Crown size={20} color="#D4AF37" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #EADBBA', paddingTop: '10px' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', display: 'block' }}>Balance</span>
                    <strong style={{ fontSize: '1.15rem', color: '#0F172A' }}>24,500 Pts</strong>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', display: 'block' }}>Activity</span>
                    <strong style={{ fontSize: '0.85rem', color: '#334155' }}>8 Stays • 14 Nights</strong>
                  </div>
                </div>
                <div style={{ background: '#D4AF37', color: '#FFFFFF', padding: '8px 12px', borderRadius: '6px', textAlign: 'center', fontWeight: 700, fontSize: '0.82rem' }}>
                  Launch as Taha (Gold VIP) →
                </div>
              </button>

              {/* Profile 2: Sara Khan (Silver) */}
              <button
                type="button"
                onClick={() => handleSelectSample('sara-silver')}
                style={{
                  background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
                  border: '1.5px solid #CBD5E1',
                  borderRadius: '12px',
                  padding: '22px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#64748B', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.95rem' }}>
                      SK
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1.02rem' }}>Sara Khan</div>
                      <div style={{ fontSize: '0.76rem', color: '#475569', fontWeight: 600 }}>Silver Executive</div>
                    </div>
                  </div>
                  <Award size={20} color="#64748B" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '10px' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', display: 'block' }}>Balance</span>
                    <strong style={{ fontSize: '1.15rem', color: '#0F172A' }}>8,200 Pts</strong>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', display: 'block' }}>Activity</span>
                    <strong style={{ fontSize: '0.85rem', color: '#334155' }}>3 Stays • 5 Nights</strong>
                  </div>
                </div>
                <div style={{ background: '#334155', color: '#FFFFFF', padding: '8px 12px', borderRadius: '6px', textAlign: 'center', fontWeight: 700, fontSize: '0.82rem' }}>
                  Launch as Sara (Silver) →
                </div>
              </button>

              {/* Profile 3: Kamran Mirza (Classic) */}
              <button
                type="button"
                onClick={() => handleSelectSample('kamran-explorer')}
                style={{
                  background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
                  border: '1.5px solid #BAE6FD',
                  borderRadius: '12px',
                  padding: '22px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#0284C7', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.95rem' }}>
                      KM
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1.02rem' }}>Kamran Mirza</div>
                      <div style={{ fontSize: '0.76rem', color: '#0369A1', fontWeight: 600 }}>Classic Explorer</div>
                    </div>
                  </div>
                  <Sparkles size={20} color="#0284C7" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #BAE6FD', paddingTop: '10px' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', display: 'block' }}>Balance</span>
                    <strong style={{ fontSize: '1.15rem', color: '#0F172A' }}>1,500 Pts</strong>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', display: 'block' }}>Activity</span>
                    <strong style={{ fontSize: '0.85rem', color: '#334155' }}>1 Stay • 2 Nights</strong>
                  </div>
                </div>
                <div style={{ background: '#0284C7', color: '#FFFFFF', padding: '8px 12px', borderRadius: '6px', textAlign: 'center', fontWeight: 700, fontSize: '0.82rem' }}>
                  Launch as Kamran (Explorer) →
                </div>
              </button>
            </div>
          </div>

          {/* Fallback Manual Sign In */}
          <div style={{
            maxWidth: '520px',
            margin: '0 auto',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '32px'
          }}>
            <h4 style={{ fontSize: '1.1rem', color: '#0F172A', marginBottom: '8px', textAlign: 'center' }}>
              Or Sign In with Custom Credentials
            </h4>
            <p style={{ fontSize: '0.84rem', color: '#64748B', textAlign: 'center', marginBottom: '20px' }}>
              Enter any guest name or email to generate an active member session.
            </p>
            <form onSubmit={handleManualLogin} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Full Name</label>
                <input required name="name" defaultValue="Guest Member" style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.92rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>Email Address</label>
                <input required type="email" name="email" defaultValue="guest@avari.demo" style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.92rem' }} />
              </div>
              <button type="submit" className="btn-luxury-gold" style={{ width: '100%', padding: '12px', marginTop: '6px' }}>
                Sign In to Member Portal <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </main>
      ) : (
        /* LOGGED IN MEMBER DASHBOARD */
        <main style={{ paddingBottom: '100px' }}>
          {/* Top Member Ribbon */}
          <section style={{
            background: 'linear-gradient(180deg, #1E293B 0%, #0F172A 100%)',
            color: '#FFFFFF',
            padding: '36px 24px 70px 24px',
            borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
          }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #E4C87F 0%, #A8842E 100%)',
                  color: '#0F172A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  fontWeight: 800,
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                }}>
                  {account.avatarInitials || 'TS'}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h1 style={{ fontSize: '1.8rem', color: '#FFFFFF', margin: 0, fontFamily: 'var(--font-serif)' }}>
                      {account.name}
                    </h1>
                    <span style={{
                      background: 'rgba(212, 175, 55, 0.2)',
                      border: '1px solid #D4AF37',
                      color: '#F3E5AB',
                      fontSize: '0.72rem',
                      padding: '3px 10px',
                      borderRadius: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase'
                    }}>
                      {account.tier}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#94A3B8', marginTop: '4px' }}>
                    Member ID: <strong style={{ color: '#E2E8F0', letterSpacing: '0.05em' }}>{account.memberId}</strong> • Member Since {account.memberSince}
                  </div>
                </div>
              </div>

              {/* Persona Switcher for Live Demo */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                  Switch Profile:
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectSample('taha-gold')}
                  style={{
                    background: account.id === 'taha-gold' ? '#D4AF37' : 'rgba(255, 255, 255, 0.1)',
                    color: account.id === 'taha-gold' ? '#0F172A' : '#FFFFFF',
                    border: '1px solid rgba(212, 175, 55, 0.5)',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Taha (Gold)
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectSample('sara-silver')}
                  style={{
                    background: account.id === 'sara-silver' ? '#94A3B8' : 'rgba(255, 255, 255, 0.1)',
                    color: account.id === 'sara-silver' ? '#0F172A' : '#FFFFFF',
                    border: '1px solid rgba(148, 163, 184, 0.5)',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Sara (Silver)
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectSample('kamran-explorer')}
                  style={{
                    background: account.id === 'kamran-explorer' ? '#0284C7' : 'rgba(255, 255, 255, 0.1)',
                    color: account.id === 'kamran-explorer' ? '#FFFFFF' : '#FFFFFF',
                    border: '1px solid rgba(2, 132, 199, 0.5)',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Kamran (Explorer)
                </button>
                <button
                  type="button"
                  onClick={handleSignOut}
                  style={{
                    background: 'transparent',
                    color: '#EF4444',
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <LogOut size={13} /> Sign Out
                </button>
              </div>
            </div>
          </section>

          {/* Overlapping Hero Cards Grid */}
          <div style={{ maxWidth: '1280px', margin: '-45px auto 30px auto', padding: '0 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {/* Card 1 Column: 3D Member Card + Apple/Google Wallet Action Row */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #1C1917 0%, #292524 50%, #44403C 100%)',
                  border: '2px solid #D4AF37',
                  borderRadius: '18px',
                  padding: '28px',
                  color: '#FFFFFF',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '220px',
                  flex: 1
                }}>
                  <div style={{ position: 'absolute', top: -40, right: -40, width: '180px', height: '180px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <span style={{ fontSize: '0.7rem', color: '#D4AF37', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                        Avari Hotels & Resorts
                      </span>
                      <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', margin: '2px 0 0 0', fontFamily: 'var(--font-serif)', letterSpacing: '0.04em' }}>
                        {account.tier.toUpperCase()} CARD
                      </h3>
                    </div>
                    <div style={{ width: '42px', height: '32px', background: 'linear-gradient(135deg, #FFE082 0%, #FFB300 100%)', borderRadius: '6px', border: '1px solid #D4AF37' }} />
                  </div>

                  <div style={{ margin: '24px 0 12px 0' }}>
                    <div style={{ fontSize: '1.25rem', fontFamily: 'monospace', letterSpacing: '0.15em', color: '#F5E6C8' }}>
                      {account.memberId.replace(/-/g, ' • ')}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(212, 175, 55, 0.3)', paddingTop: '14px' }}>
                    <div>
                      <span style={{ fontSize: '0.66rem', color: '#A8A29E', textTransform: 'uppercase', display: 'block' }}>CARDHOLDER</span>
                      <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>{account.name.toUpperCase()}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.66rem', color: '#A8A29E', textTransform: 'uppercase', display: 'block' }}>VALID THRU</span>
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#D4AF37' }}>12 / 2027</span>
                    </div>
                  </div>
                </div>

                {/* Digital Wallet Passes (Apple Wallet & Google Wallet) */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px'
                }}>
                  <button
                    type="button"
                    onClick={() => setWalletModal('apple')}
                    style={{
                      background: '#000000',
                      color: '#FFFFFF',
                      border: '1px solid #27272A',
                      borderRadius: '12px',
                      padding: '11px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
                      transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                    }}
                    title="Add membership pass to Apple Wallet (Apple Pay)"
                  >
                    <svg width="18" height="18" viewBox="0 0 170 170" fill="currentColor">
                      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.69-7.85-12-14.44-6.19-9.56-10.87-20.57-14.04-33.03-3.17-12.46-4.76-24.31-4.76-35.54 0-14.44 3.73-26.68 11.2-36.72 7.46-10.04 16.92-15.17 28.37-15.39 4.35 0 9.29 1.14 14.81 3.42 5.53 2.29 9.38 3.48 11.56 3.59 1.74 0 5.86-1.3 12.35-3.89 6.5-2.59 12.02-3.71 16.57-3.37 12.28.87 22.09 5.38 29.43 13.53-10.65 6.41-15.86 15.32-15.63 26.73.22 9.13 3.79 16.85 10.73 23.16 6.94 6.3 15.09 9.89 24.45 10.76-2.61 7.82-5.74 15.22-9.4 22.2zM119.22 33.64c0-7.07 2.58-13.79 7.74-20.18 5.16-6.38 11.53-10.43 19.11-12.16.22 1.09.33 2.06.33 2.93 0 7.07-2.67 13.9-8.02 20.49-5.35 6.59-11.75 10.37-19.2 11.34.04-.81.04-1.61.04-2.42z"/>
                    </svg>
                    <span>Apple Wallet</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setWalletModal('google')}
                    style={{
                      background: '#1F1F1F',
                      color: '#FFFFFF',
                      border: '1px solid #3F3F46',
                      borderRadius: '12px',
                      padding: '11px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
                      transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                    }}
                    title="Save membership pass to Google Wallet"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                    </svg>
                    <span>Google Wallet</span>
                  </button>
                </div>
              </div>

              {/* Card 2: Live Points Wallet & Tier Progress */}
              <div style={{
                background: '#FFFFFF',
                borderRadius: '18px',
                border: '1px solid #E2E8F0',
                padding: '28px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--avari-blue)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Avari Rewards Balance
                    </span>
                    <button
                      type="button"
                      onClick={handleSimulatePoints}
                      title="Simulate earning +2,000 points from a hotel stay"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: '#EFF6FF',
                        border: '1px solid #BFDBFE',
                        color: 'var(--avari-blue)',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      <Sparkles size={12} /> +2,000 Pts Bonus
                    </button>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>
                      {currentPoints.toLocaleString()}
                    </div>
                    <span style={{ fontSize: '1rem', color: '#64748B', fontWeight: 600 }}>Points Available</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div style={{ marginTop: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '6px', color: '#475569' }}>
                    <span>Current: <strong>{account.tier}</strong></span>
                    <span>Target: <strong>{account.nextTierName}</strong> ({nextTarget.toLocaleString()} pts)</span>
                  </div>
                  <div style={{ width: '100%', height: '10px', background: '#E2E8F0', borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ width: `${tierProgressPercent}%`, height: '100%', background: 'linear-gradient(90deg, #D4AF37 0%, var(--avari-blue) 100%)', borderRadius: '10px', transition: 'width 0.5s ease' }} />
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#64748B', marginTop: '6px' }}>
                    {(nextTarget - currentPoints) > 0 ? `${(nextTarget - currentPoints).toLocaleString()} points needed to unlock ${account.nextTierName} benefits.` : `Target achieved for ${account.nextTierName}!`}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', borderTop: '1px solid #F1F5F9', paddingTop: '16px', marginTop: '16px', textAlign: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', display: 'block' }}>Stays</span>
                    <strong style={{ fontSize: '1.05rem', color: '#0F172A' }}>{account.staysCount}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', display: 'block' }}>Total Nights</span>
                    <strong style={{ fontSize: '1.05rem', color: '#0F172A' }}>{account.nightsCount}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', display: 'block' }}>Active Vouchers</span>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--avari-blue)' }}>{(account.vouchers || []).length}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback / Notification Banner */}
          {redeemNotice && (
            <div style={{ maxWidth: '1280px', margin: '0 auto 24px auto', padding: '0 24px' }}>
              <div style={{
                background: redeemNotice.type === 'success' ? '#F0FDF4' : '#FEF2F2',
                border: `1.5px solid ${redeemNotice.type === 'success' ? '#86EFAC' : '#FCA5A5'}`,
                borderRadius: '12px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {redeemNotice.type === 'success' ? <CheckCircle2 color="#16A34A" size={22} /> : <AlertCircle color="#DC2626" size={22} />}
                  <div>
                    <strong style={{ color: redeemNotice.type === 'success' ? '#166534' : '#991B1B', fontSize: '0.92rem' }}>
                      {redeemNotice.message}
                    </strong>
                    {redeemNotice.voucher && (
                      <div style={{ fontSize: '0.8rem', color: '#15803D', marginTop: '2px' }}>
                        Voucher Code: <strong>{redeemNotice.voucher.code}</strong> • Valid through {redeemNotice.voucher.expires}
                      </div>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setRedeemNotice(null)}
                  style={{ background: 'transparent', border: 'none', color: '#64748B', fontWeight: 700, cursor: 'pointer', fontSize: '0.8rem' }}
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}

          {/* Navigation Tabs */}
          <div style={{ maxWidth: '1280px', margin: '0 auto 30px auto', padding: '0 24px' }}>
            <div style={{
              display: 'flex',
              background: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              padding: '6px',
              gap: '8px',
              overflowX: 'auto'
            }}>
              {[
                { id: 'points', label: 'Rewards Catalog & Redemption', icon: Gift },
                { id: 'vouchers', label: `My Vouchers (${(account.vouchers || []).length})`, icon: CreditCard },
                { id: 'ledger', label: 'Points Activity Ledger', icon: Clock },
                { id: 'preferences', label: 'Stay Preferences', icon: Bed },
                { id: 'bookings', label: 'Booking Requests & Handoffs', icon: Calendar }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      flex: 1,
                      minWidth: '200px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px 18px',
                      borderRadius: '8px',
                      border: 'none',
                      background: isActive ? 'var(--avari-blue)' : 'transparent',
                      color: isActive ? '#FFFFFF' : '#475569',
                      fontWeight: 700,
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <Icon size={16} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab 1: Rewards Catalog */}
          {activeTab === 'points' && (
            <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
              <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h2 style={{ fontSize: '1.6rem', color: '#0F172A', margin: '0 0 6px 0', fontFamily: 'var(--font-serif)' }}>
                    Redeem Points for Avari Privileges
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
                    Instant points redemption. Selected rewards immediately generate authentic vouchers in your wallet.
                  </p>
                </div>
                <div style={{ background: '#F1F5F9', padding: '8px 16px', borderRadius: '20px', fontSize: '0.82rem', color: '#334155' }}>
                  Available Balance: <strong style={{ color: 'var(--avari-blue)' }}>{currentPoints.toLocaleString()} Points</strong>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '22px' }}>
                {REWARDS_CATALOG.map((reward) => {
                  const canAfford = currentPoints >= reward.points;
                  return (
                    <div
                      key={reward.id}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '16px',
                        padding: '24px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '16px'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                          <span style={{ fontSize: '0.72rem', background: '#EFF6FF', color: 'var(--avari-blue)', padding: '4px 10px', borderRadius: '12px', fontWeight: 700, textTransform: 'uppercase' }}>
                            {reward.category}
                          </span>
                          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#D4AF37', fontFamily: 'var(--font-serif)' }}>
                            {reward.points.toLocaleString()} <span style={{ fontSize: '0.78rem', color: '#64748B' }}>pts</span>
                          </div>
                        </div>
                        <h4 style={{ fontSize: '1.12rem', color: '#0F172A', marginBottom: '8px' }}>
                          {reward.title}
                        </h4>
                        <p style={{ fontSize: '0.86rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                          {reward.description}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRedeem(reward)}
                        disabled={!canAfford}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '8px',
                          border: 'none',
                          background: canAfford ? 'linear-gradient(135deg, #D4AF37 0%, #B89326 100%)' : '#E2E8F0',
                          color: canAfford ? '#FFFFFF' : '#94A3B8',
                          fontWeight: 700,
                          fontSize: '0.84rem',
                          cursor: canAfford ? 'pointer' : 'not-allowed',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {canAfford ? (
                          <>
                            <Gift size={15} /> Redeem for {reward.points.toLocaleString()} Points
                          </>
                        ) : (
                          `Need ${(reward.points - currentPoints).toLocaleString()} More Points`
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Tab 2: Vouchers Vault */}
          {activeTab === 'vouchers' && (
            <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.6rem', color: '#0F172A', margin: '0 0 6px 0', fontFamily: 'var(--font-serif)' }}>
                  Active Privileges & Vouchers
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
                  Present these digital certificates upon hotel check-in or dining arrival.
                </p>
              </div>

              {(account.vouchers || []).length === 0 ? (
                <div style={{ background: '#FFFFFF', padding: '48px', borderRadius: '16px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                  <CreditCard size={36} color="#94A3B8" style={{ marginBottom: '12px' }} />
                  <h4 style={{ color: '#0F172A', marginBottom: '6px' }}>No Vouchers Issued Yet</h4>
                  <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '18px' }}>
                    Redeem your rewards points in the Rewards Catalog tab to generate stay certificates.
                  </p>
                  <button type="button" onClick={() => setActiveTab('points')} className="btn-luxury-gold">
                    View Rewards Catalog
                  </button>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                  {account.vouchers.map((voucher) => (
                    <div
                      key={voucher.id}
                      style={{
                        background: '#FFFFFF',
                        border: '2px dashed #D4AF37',
                        borderRadius: '14px',
                        padding: '24px',
                        position: 'relative'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <span style={{ fontSize: '0.72rem', background: '#FEF3C7', color: '#926C15', padding: '4px 10px', borderRadius: '12px', fontWeight: 700 }}>
                          {voucher.status || 'Active'}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                          Exp: {voucher.expires}
                        </span>
                      </div>
                      <h4 style={{ fontSize: '1.15rem', color: '#0F172A', marginBottom: '12px' }}>
                        {voucher.title}
                      </h4>
                      <div style={{ background: '#F8FAFC', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <span style={{ fontSize: '0.68rem', color: '#64748B', display: 'block' }}>VOUCHER CODE</span>
                          <strong style={{ fontSize: '1.05rem', color: '#0F172A', letterSpacing: '0.08em', fontFamily: 'monospace' }}>
                            {voucher.code}
                          </strong>
                        </div>
                        <CheckCircle2 color="#16A34A" size={20} />
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#64748B', marginTop: '12px' }}>
                        Present at Avari Front Desk or Dining Host Stand.
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Tab 3: Points Activity Ledger */}
          {activeTab === 'ledger' && (
            <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.6rem', color: '#0F172A', margin: '0 0 6px 0', fontFamily: 'var(--font-serif)' }}>
                  Points Activity & History
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
                  Transparent ledger of all points earned and redeemed across stays, dining, and loyalty bonuses.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                <div style={{ padding: '20px 24px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', display: 'grid', gridTemplateColumns: '120px 1fr 140px', fontWeight: 700, fontSize: '0.76rem', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  <span>Date</span>
                  <span>Description</span>
                  <span style={{ textAlign: 'right' }}>Points</span>
                </div>
                {(account.history || []).map((item) => (
                  <div
                    key={item.id}
                    style={{
                      padding: '18px 24px',
                      borderBottom: '1px solid #F1F5F9',
                      display: 'grid',
                      gridTemplateColumns: '120px 1fr 140px',
                      alignItems: 'center',
                      fontSize: '0.88rem'
                    }}
                  >
                    <span style={{ color: '#64748B', fontSize: '0.82rem' }}>{item.date}</span>
                    <span style={{ color: '#0F172A', fontWeight: 600 }}>{item.title}</span>
                    <span style={{ textAlign: 'right', fontWeight: 700, color: item.points > 0 ? '#16A34A' : '#DC2626' }}>
                      {item.points > 0 ? `+${item.points.toLocaleString()}` : item.points.toLocaleString()} pts
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tab 4: Stay Preferences */}
          {activeTab === 'preferences' && (
            <section style={{ maxWidth: '880px', margin: '0 auto', padding: '0 24px' }}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.6rem', color: '#0F172A', margin: '0 0 6px 0', fontFamily: 'var(--font-serif)' }}>
                  Personalized Stay Preferences
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
                  Customize your room setup, pillow preferences, and floor elevation. These settings automatically attach to all future reservations.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '32px' }}>
                {prefsSaved && (
                  <div style={{ background: '#F0FDF4', border: '1px solid #86EFAC', color: '#166534', padding: '12px 18px', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', fontWeight: 600 }}>
                    <CheckCircle2 size={18} color="#16A34A" /> Stay preferences successfully updated and saved to your profile!
                  </div>
                )}
                <form onSubmit={handleSavePreferences} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Bed Configuration Preference
                    </label>
                    <select
                      value={bedPref}
                      onChange={(e) => setBedPref(e.target.value)}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                    >
                      <option value="King Bed">Single Master King Bed</option>
                      <option value="Queen Bed">Grand Queen Bed</option>
                      <option value="Twin Beds">Two Separate Twin Beds</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Floor Elevation Preference
                    </label>
                    <select
                      value={floorPref}
                      onChange={(e) => setFloorPref(e.target.value)}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                    >
                      <option value="High Floor (Floor 6+)">High Floor (Floor 6+ with panoramic views)</option>
                      <option value="Mid Floor (Floor 3-5)">Mid Floor (Floor 3 - 5)</option>
                      <option value="Low Floor / Pool Level">Pool & Garden Terrace Level</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Avari Pillow Menu Selection
                    </label>
                    <select
                      value={pillowPref}
                      onChange={(e) => setPillowPref(e.target.value)}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                    >
                      <option value="Dual Firmness Feather Down">Dual Firmness Goose Feather Down</option>
                      <option value="Hypoallergenic Foam">Hypoallergenic Memory Foam</option>
                      <option value="Organic Buckwheat & Lavender">Organic Buckwheat with Lavender Aroma</option>
                      <option value="Standard Soft">Standard Plush Soft</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Special Butler & Hospitality Notes
                    </label>
                    <textarea
                      rows={3}
                      value={specialReq}
                      onChange={(e) => setSpecialReq(e.target.value)}
                      placeholder="e.g. Quiet room away from elevator, extra hangers, tropical fruit plate on arrival..."
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.95rem', fontFamily: 'var(--font-sans)' }}
                    />
                  </div>

                  <button type="submit" className="btn-luxury-gold" style={{ alignSelf: 'flex-start', padding: '14px 28px' }}>
                    Save Stay Preferences
                  </button>
                </form>
              </div>
            </section>
          )}

          {/* Tab 5: Recent Booking Activities */}
          {activeTab === 'bookings' && (
            <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '1.6rem', color: '#0F172A', margin: '0 0 6px 0', fontFamily: 'var(--font-serif)' }}>
                  Reservation Requests & TravelClick Handoffs
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
                  Recent direct room reservation requests and TravelClick reservation engine referrals from your session.
                </p>
              </div>

              {bookingActivity.length === 0 ? (
                <div style={{ background: '#FFFFFF', padding: '48px', borderRadius: '16px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                  <Calendar size={36} color="#94A3B8" style={{ marginBottom: '12px' }} />
                  <h4 style={{ color: '#0F172A', marginBottom: '6px' }}>No Reservation Activities Recorded Yet</h4>
                  <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '18px' }}>
                    Explore our properties and use the booking bar or direct room forms to record reservations.
                  </p>
                  <Link href="/booking" className="btn-luxury-gold">
                    Find a Room
                  </Link>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {bookingActivity.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '12px',
                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '12px'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <span style={{
                            fontSize: '0.7rem',
                            padding: '3px 8px',
                            borderRadius: '10px',
                            fontWeight: 700,
                            background: item.status === 'internal-requested' ? '#FEF3C7' : '#EFF6FF',
                            color: item.status === 'internal-requested' ? '#926C15' : 'var(--avari-blue)'
                          }}>
                            {item.status === 'internal-requested' ? 'Direct Request' : 'TravelClick Engine Handoff'}
                          </span>
                          <span style={{ fontSize: '0.78rem', color: '#64748B' }}>
                            {new Date(item.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <h4 style={{ fontSize: '1.05rem', color: '#0F172A', margin: '2px 0' }}>
                          {item.property || 'Avari Hotel Lahore'} {item.room ? `• ${item.room}` : ''}
                        </h4>
                        {item.reference && (
                          <div style={{ fontSize: '0.8rem', color: '#475569' }}>
                            Reference: <strong style={{ fontFamily: 'monospace' }}>{item.reference}</strong>
                          </div>
                        )}
                        {(item.checkIn && item.checkOut) && (
                          <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                            Stay: {item.checkIn} → {item.checkOut}
                          </div>
                        )}
                      </div>

                      <div style={{ display: 'flex', gap: '8px' }}>
                        <Link href="/booking" className="btn-luxury-outline" style={{ padding: '8px 14px', fontSize: '0.78rem' }}>
                          View Rooms
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}
        </main>
      )}

      {/* Digital Wallet Membership Pass Modal */}
      <DigitalWalletModal
        isOpen={Boolean(walletModal)}
        onClose={() => setWalletModal(null)}
        walletType={walletModal || 'apple'}
        account={account}
      />
    </div>
  );
}

