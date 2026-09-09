'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LuxuryLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Smoothly fade out when DOM and hydration complete
    const handleLoad = () => {
      setFadeOut(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 300); // 300ms transition matching spec
      return () => clearTimeout(timer);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      const fallbackTimer = setTimeout(handleLoad, 600);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`luxury-loader-overlay ${fadeOut ? 'fade-out' : ''}`}
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
