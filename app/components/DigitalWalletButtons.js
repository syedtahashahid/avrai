'use client';

import React, { useState } from 'react';
import DigitalWalletModal from './DigitalWalletModal';
import { Smartphone } from 'lucide-react';

export default function DigitalWalletButtons() {
  const [modalOpen, setModalOpen] = useState(false);
  const [walletType, setWalletType] = useState('apple');

  const openWallet = (type) => {
    setWalletType(type);
    setModalOpen(true);
  };

  // Mock account for the Gold Card page demo
  const mockGoldAccount = {
    firstName: 'Guest',
    lastName: '',
    tierCode: 'GOLD',
    memberId: 'AV-8888-4321',
    points: 15000,
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
        <button
          onClick={() => openWallet('apple')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#000000',
            color: '#FFFFFF',
            border: 'none',
            padding: '10px 16px',
            borderRadius: '8px',
            fontSize: '0.9rem',
            fontWeight: '500',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        >
          <Smartphone size={16} /> Add to Apple Wallet
        </button>
        
        <button
          onClick={() => openWallet('google')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#FFFFFF',
            color: '#3C4043',
            border: '1px solid #DADCE0',
            padding: '10px 16px',
            borderRadius: '8px',
            fontSize: '0.9rem',
            fontWeight: '500',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}
        >
          <Smartphone size={16} /> Add to Google Wallet
        </button>
      </div>

      <DigitalWalletModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        walletType={walletType}
        account={mockGoldAccount}
      />
    </>
  );
}
