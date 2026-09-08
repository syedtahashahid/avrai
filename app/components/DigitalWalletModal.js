'use client';

import React, { useState } from 'react';
import {
  X,
  Check,
  Smartphone,
  QrCode,
  Download,
  Wifi,
  Sparkles,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

export default function DigitalWalletModal({
  isOpen,
  onClose,
  walletType = 'apple',
  account
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('card'); // 'card' | 'qr'

  if (!isOpen || !account) return null;

  const isApple = walletType === 'apple';
  const isGold = account.tierCode === 'GOLD' || account.tier?.toLowerCase().includes('gold');
  const isSilver = account.tierCode === 'SILVER' || account.tier?.toLowerCase().includes('silver');

  const cardGradient = isGold
    ? 'linear-gradient(135deg, #1C1917 0%, #292524 50%, #44403C 100%)'
    : isSilver
    ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)'
    : 'linear-gradient(135deg, #0C4A6E 0%, #0369A1 50%, #0284C7 100%)';

  const accentColor = isGold ? '#D4AF37' : isSilver ? '#CBD5E1' : '#38BDF8';

  const handleAddPass = () => {
    setIsAdded(true);
  };

  const handleReset = () => {
    setIsAdded(false);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={handleReset}
    >
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          maxWidth: '480px',
          width: '100%',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '90vh'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 24px',
          borderBottom: '1px solid #E2E8F0',
          background: '#F8FAFC'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {isApple ? (
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#000000',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="18" height="22" viewBox="0 0 170 170" fill="currentColor">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.31-6.19-9.35-11.06-20.24-14.61-32.68-3.55-12.44-5.33-24.36-5.33-35.76 0-14.57 3.6-26.68 10.79-36.33 7.19-9.65 16.32-14.54 27.38-14.67 5.01 0 10.42 1.34 16.24 4.02 5.82 2.68 9.77 4.06 11.86 4.14 1.74 0 5.86-1.45 12.37-4.35 6.51-2.9 12.28-4.22 17.3-3.96 13.49.65 24.32 5.34 32.49 14.07-11.96 7.29-17.84 17.2-17.63 29.74.22 10.01 4.13 18.39 11.74 25.13 7.61 6.74 16.75 10.67 27.42 11.79-2.61 7.61-5.77 15.45-9.48 23.51zM119.22 33.05c0-7.39 2.67-14.38 8.01-20.97 5.34-6.59 11.96-10.78 19.86-12.58.22 1.09.33 2.18.33 3.26 0 7.39-2.73 14.5-8.19 21.32-5.46 6.82-12.08 10.96-19.86 12.42-.05-1.15-.15-2.3-.15-3.45z" />
                </svg>
              </div>
            ) : (
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#1F1F1F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
              </div>
            )}
            <div>
              <h3 style={{ fontSize: '1rem', color: '#0F172A', margin: 0, fontWeight: 700 }}>
                {isApple ? 'Apple Wallet Pass' : 'Google Wallet Pass'}
              </h3>
              <span style={{ fontSize: '0.74rem', color: '#64748B' }}>
                Avari World Traveler Digital Loyalty
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleReset}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#64748B',
              padding: '6px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px', overflowY: 'auto' }}>
          {/* View Switcher Tabs */}
          <div style={{
            display: 'flex',
            background: '#F1F5F9',
            borderRadius: '10px',
            padding: '4px',
            marginBottom: '20px',
            gap: '4px'
          }}>
            <button
              type="button"
              onClick={() => setActiveTab('card')}
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === 'card' ? '#FFFFFF' : 'transparent',
                color: activeTab === 'card' ? '#0F172A' : '#64748B',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
                boxShadow: activeTab === 'card' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <Smartphone size={14} /> Pass Preview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('qr')}
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === 'qr' ? '#FFFFFF' : 'transparent',
                color: activeTab === 'qr' ? '#0F172A' : '#64748B',
                fontWeight: 700,
                fontSize: '0.8rem',
                cursor: 'pointer',
                boxShadow: activeTab === 'qr' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <QrCode size={14} /> Scan from Phone
            </button>
          </div>

          {activeTab === 'card' ? (
            /* Digital Pass Preview Card */
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  width: '100%',
                  maxWidth: '360px',
                  background: cardGradient,
                  borderRadius: isApple ? '16px' : '18px',
                  border: `1.5px solid ${accentColor}`,
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
                  color: '#FFFFFF',
                  padding: '24px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Header Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div>
                    <span style={{ fontSize: '0.64rem', color: accentColor, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                      AVARI HOTELS & RESORTS
                    </span>
                    <h4 style={{ fontSize: '1.15rem', color: '#FFFFFF', margin: '2px 0 0 0', fontFamily: 'var(--font-serif)' }}>
                      {account.tier.toUpperCase()}
                    </h4>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: accentColor }}>
                    <Wifi size={16} style={{ transform: 'rotate(90deg)' }} />
                    <span style={{ fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.05em' }}>NFC PASS</span>
                  </div>
                </div>

                {/* Primary Data Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: '16px' }}>
                  <div>
                    <span style={{ fontSize: '0.66rem', color: '#94A3B8', textTransform: 'uppercase', display: 'block' }}>CARDHOLDER</span>
                    <strong style={{ fontSize: '1.02rem', color: '#FFFFFF', letterSpacing: '0.03em' }}>{account.name}</strong>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.66rem', color: '#94A3B8', textTransform: 'uppercase', display: 'block' }}>REWARD POINTS</span>
                    <strong style={{ fontSize: '1.25rem', color: accentColor, fontFamily: 'monospace' }}>
                      {account.points.toLocaleString()}
                    </strong>
                  </div>
                </div>

                {/* Secondary Data Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '22px' }}>
                  <div>
                    <span style={{ fontSize: '0.64rem', color: '#94A3B8', textTransform: 'uppercase', display: 'block' }}>MEMBER ID</span>
                    <span style={{ fontSize: '0.86rem', fontFamily: 'monospace', color: '#E2E8F0' }}>{account.memberId}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.64rem', color: '#94A3B8', textTransform: 'uppercase', display: 'block' }}>VALIDITY</span>
                    <span style={{ fontSize: '0.86rem', color: '#E2E8F0' }}>12 / 2027</span>
                  </div>
                </div>

                {/* Scannable Aztec / PDF417 Barcode Pattern Mockup */}
                <div style={{
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '12px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  {/* Simulated PDF417 dense luxury barcode lines */}
                  <svg width="100%" height="42" viewBox="0 0 300 42">
                    <defs>
                      <pattern id="barcodePattern" width="10" height="42" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="2" height="42" fill="#0F172A" />
                        <rect x="3" y="0" width="1" height="42" fill="#0F172A" />
                        <rect x="5" y="0" width="3" height="42" fill="#0F172A" />
                        <rect x="9" y="0" width="1" height="42" fill="#0F172A" />
                      </pattern>
                    </defs>
                    <rect width="300" height="42" fill="url(#barcodePattern)" />
                  </svg>
                  <span style={{ fontSize: '0.66rem', fontFamily: 'monospace', color: '#475569', letterSpacing: '0.15em' }}>
                    {account.memberId}
                  </span>
                </div>

                <div style={{ marginTop: '14px', textAlign: 'center', fontSize: '0.68rem', color: '#94A3B8' }}>
                  Touchless check-in & room key enabled at all Avari locations.
                </div>
              </div>

              {/* Status Notice if added */}
              {isAdded ? (
                <div style={{
                  marginTop: '20px',
                  background: '#F0FDF4',
                  border: '1.5px solid #86EFAC',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  width: '100%'
                }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#16A34A', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#166534' }}>
                      Pass Added to {isApple ? 'Apple Wallet' : 'Google Wallet'}!
                    </div>
                    <div style={{ fontSize: '0.74rem', color: '#15803D' }}>
                      Available in your device wallet with Express Mode and lock screen passes.
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            /* Scan from Phone with Camera QR Code */
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '10px 0' }}>
              <div style={{
                background: '#FFFFFF',
                border: '2px solid #E2E8F0',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                marginBottom: '16px'
              }}>
                {/* SVG QR Code */}
                <svg width="180" height="180" viewBox="0 0 100 100" fill="#0F172A">
                  <path d="M0 0h30v30H0zm5 5h20v20H5zm5 5h10v10H10zM70 0h30v30H70zm5 5h20v20H75zm5 5h10v10H80zM0 70h30v30H0zm5 5h20v20H5zm5 5h10v10H10zM40 5h5v5h-5zm10 0h5v5h-5zm5 5h5v10h-5zm-15 5h10v5h-10zm15 10h5v5h-5zm-15 5h5v5h-5zm20-15h5v5h-5zm0 15h5v5h-5zm10-5h5v5h-5zm5 5h5v5h-5zm5-10h5v5h-5zm-5 15h5v5h-5zm-15 0h10v5h-10zm20 5h5v5h-5zm-10 5h5v5h-5zm-15-5h5v5h-5zm10 10h5v5h-5zm-20-10h5v5h-5zm0 15h5v5h-5zm10-5h5v5h-5zm-5 10h5v5h-5zm10 5h10v5h-10zm15-10h5v10h-5zm5 5h5v5h-5zm-5-15h5v5h-5zm10-5h5v5h-5zm-5 5h5v5h-5zm5 10h5v5h-5z" />
                </svg>
              </div>

              <h4 style={{ fontSize: '1.05rem', color: '#0F172A', marginBottom: '6px' }}>
                Scan to Save to Your Mobile Device
              </h4>
              <p style={{ fontSize: '0.84rem', color: '#64748B', maxWidth: '320px', lineHeight: 1.5, margin: 0 }}>
                Point your iPhone or Android camera at the QR code to open the digital membership pass in {isApple ? 'Apple Wallet' : 'Google Wallet'}.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div style={{
          padding: '20px 24px',
          borderTop: '1px solid #E2E8F0',
          background: '#F8FAFC',
          display: 'flex',
          gap: '12px'
        }}>
          {!isAdded ? (
            <button
              type="button"
              onClick={handleAddPass}
              style={{
                flex: 1,
                padding: '14px',
                borderRadius: '12px',
                border: 'none',
                background: isApple ? '#000000' : '#1F1F1F',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
              }}
            >
              {isApple ? (
                <svg width="18" height="22" viewBox="0 0 170 170" fill="currentColor">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.31-6.19-9.35-11.06-20.24-14.61-32.68-3.55-12.44-5.33-24.36-5.33-35.76 0-14.57 3.6-26.68 10.79-36.33 7.19-9.65 16.32-14.54 27.38-14.67 5.01 0 10.42 1.34 16.24 4.02 5.82 2.68 9.77 4.06 11.86 4.14 1.74 0 5.86-1.45 12.37-4.35 6.51-2.9 12.28-4.22 17.3-3.96 13.49.65 24.32 5.34 32.49 14.07-11.96 7.29-17.84 17.2-17.63 29.74.22 10.01 4.13 18.39 11.74 25.13 7.61 6.74 16.75 10.67 27.42 11.79-2.61 7.61-5.77 15.45-9.48 23.51zM119.22 33.05c0-7.39 2.67-14.38 8.01-20.97 5.34-6.59 11.96-10.78 19.86-12.58.22 1.09.33 2.18.33 3.26 0 7.39-2.73 14.5-8.19 21.32-5.46 6.82-12.08 10.96-19.86 12.42-.05-1.15-.15-2.3-.15-3.45z" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
              )}
              <span>Add to {isApple ? 'Apple Wallet' : 'Google Wallet'}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReset}
              style={{
                flex: 1,
                padding: '14px',
                borderRadius: '12px',
                border: 'none',
                background: '#16A34A',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Check size={18} strokeWidth={3} />
              Done
            </button>
          )}

          <button
            type="button"
            onClick={handleReset}
            style={{
              padding: '14px 20px',
              borderRadius: '12px',
              border: '1px solid #CBD5E1',
              background: '#FFFFFF',
              color: '#334155',
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

