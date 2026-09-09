'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LuxuryLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show preloader animation for at least 1.2s to showcase breathing effect
    const minDisplayTimer = setTimeout(() => {
      setFadeOut(true);
      const dismissTimer = setTimeout(() => {
        setLoading(false);
      }, 300); // 300ms transition matching spec
      return () => clearTimeout(dismissTimer);
    }, 1200);

    return () => clearTimeout(minDisplayTimer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`luxury-loader-overlay ${fadeOut ? 'fade-out' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999999,
        backgroundColor: 'var(--bg-darker, #121212)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: fadeOut ? 'none' : 'auto'
      }}
      aria-label="Loading Avari Luxury Experience"
      role="status"
    >
      <div className="luxury-loader-content">
        <div className="luxury-loader-emblem-glow">
          <Image
            src="/images/avari-gold-emblem.png"
            alt="Avari Hotels Emblem"
            width={120}
            height={160}
            priority
            className="luxury-loader-logo"
            style={{
              height: '110px',
              width: 'auto',
              objectFit: 'contain',
              mixBlendMode: 'screen',
              filter: 'drop-shadow(0 0 25px var(--accent-glow, rgba(212,175,55,0.4)))'
            }}
          />
        </div>
        <div className="luxury-loader-wordmark">
          AVARI <span className="luxury-loader-subtext">HOTELS & RESORTS</span>
        </div>
        <div className="luxury-loader-shimmer-bar" />
      </div>
    </div>
  );
}
