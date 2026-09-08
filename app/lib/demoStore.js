const ACCOUNT_KEY = 'avari-demo-account';
const ACTIVITY_KEY = 'avari-booking-activity';

export const SAMPLE_PROFILES = {
  'taha-gold': {
    id: 'taha-gold',
    name: 'Syed Taha Shahid',
    email: 'taha.shahid@avari.com',
    tier: 'Gold Privilege',
    tierCode: 'GOLD',
    memberId: 'AVR-GLD-882910',
    memberSince: '2021',
    points: 24500,
    nextTierPoints: 30000,
    nextTierName: 'Diamond Elite',
    staysCount: 8,
    nightsCount: 14,
    upgradeVouchers: 2,
    avatarInitials: 'TS',
    badgeColor: '#D4AF37',
    history: [
      { id: 'tx-1', date: '2026-08-20', title: '3-Night Stay: Avari Hotel Lahore (Presidential Suite)', points: +3200, type: 'earn' },
      { id: 'tx-2', date: '2026-07-15', title: 'Dining: Dynasty Chinese Restaurant (Imperial Dim Sum)', points: +850, type: 'earn' },
      { id: 'tx-3', date: '2026-06-02', title: '2-Night Stay: Avari Xpress Gulberg (Executive Suite)', points: +1400, type: 'earn' },
      { id: 'tx-4', date: '2026-05-10', title: 'Reward Redeemed: Spa & Heated Pool Pass', points: -4000, type: 'redeem' },
      { id: 'tx-5', date: '2026-01-01', title: 'Annual Gold Member Loyalty Bonus', points: +2500, type: 'earn' }
    ],
    vouchers: [
      { id: 'VCHR-2026-8812', title: 'VIP Suite Upgrade Certificate', code: 'AVR-UPG-8812', expires: '2026-12-31', status: 'Active' },
      { id: 'VCHR-2026-4491', title: 'Complimentary Afternoon High Tea for Two', code: 'AVR-TEA-4491', expires: '2026-11-30', status: 'Active' }
    ],
    preferences: {
      bedType: 'King Bed',
      floorPreference: 'High Floor (Floor 6+)',
      pillowChoice: 'Dual Firmness Feather Down',
      specialRequests: 'Quiet room away from elevator, tropical garden view'
    }
  },
  'sara-silver': {
    id: 'sara-silver',
    name: 'Sara Khan',
    email: 'sara.khan@corporate.pk',
    tier: 'Silver Executive',
    tierCode: 'SILVER',
    memberId: 'AVR-SLV-441029',
    memberSince: '2024',
    points: 8200,
    nextTierPoints: 15000,
    nextTierName: 'Gold Privilege',
    staysCount: 3,
    nightsCount: 5,
    upgradeVouchers: 1,
    avatarInitials: 'SK',
    badgeColor: '#94A3B8',
    history: [
      { id: 'tx-s1', date: '2026-08-05', title: 'Stay: Avari Xpress Gulberg (Business Pod)', points: +1200, type: 'earn' },
      { id: 'tx-s2', date: '2026-06-18', title: 'Kim’s Restaurant Breakfast & High Tea', points: +600, type: 'earn' },
      { id: 'tx-s3', date: '2026-03-12', title: 'Corporate Membership Fast-Track Bonus', points: +1000, type: 'earn' }
    ],
    vouchers: [
      { id: 'VCHR-2026-3390', title: 'Executive Meeting Room 2-Hour Pass', code: 'AVR-MTG-3390', expires: '2026-10-31', status: 'Active' }
    ],
    preferences: {
      bedType: 'Queen Bed',
      floorPreference: 'Mid Floor',
      pillowChoice: 'Hypoallergenic Foam',
      specialRequests: 'Early 10:00 AM check-in when available'
    }
  },
  'kamran-explorer': {
    id: 'kamran-explorer',
    name: 'Kamran Mirza',
    email: 'kamran.m@outlook.com',
    tier: 'Classic Explorer',
    tierCode: 'BLUE',
    memberId: 'AVR-EXP-110942',
    memberSince: '2026',
    points: 1500,
    nextTierPoints: 5000,
    nextTierName: 'Silver Executive',
    staysCount: 1,
    nightsCount: 2,
    upgradeVouchers: 0,
    avatarInitials: 'KM',
    badgeColor: '#0284C7',
    history: [
      { id: 'tx-k1', date: '2026-09-01', title: 'First Stay Welcome Bonus', points: +1500, type: 'earn' }
    ],
    vouchers: [],
    preferences: {
      bedType: 'King Bed',
      floorPreference: 'Any Floor',
      pillowChoice: 'Standard Comfort',
      specialRequests: 'High-speed Wi-Fi access'
    }
  }
};

export const REWARDS_CATALOG = [
  {
    id: 'reward-night',
    title: '1-Night Free Stay Voucher',
    points: 15000,
    category: 'Accommodations',
    description: 'Valid for Deluxe or Executive Room at any Avari hotel or Avari Xpress in Pakistan.',
    iconName: 'Bed'
  },
  {
    id: 'reward-dynasty',
    title: 'Dynasty Imperial Dim Sum Feast for 2',
    points: 5000,
    category: 'Fine Dining',
    description: 'Chef tableside Peking Duck, unlimited steamed Har Gow, and imperial jasmine tea.',
    iconName: 'Utensils'
  },
  {
    id: 'reward-chauffeur',
    title: 'Mercedes-Benz Airport Protocol',
    points: 3500,
    category: 'VIP Transport',
    description: 'Private chauffeur airside greeting and transfer in a Mercedes-Benz E-Class sedan.',
    iconName: 'Car'
  },
  {
    id: 'reward-spa',
    title: 'Olympic Pool & Hydrotherapy Pass',
    points: 4000,
    category: 'Wellness & Spa',
    description: 'Full-day pass to Avari heated pool cabana, herbal sauna, steam room, and jacuzzi.',
    iconName: 'Sparkles'
  },
  {
    id: 'reward-late-checkout',
    title: 'Guaranteed 4:00 PM Late Checkout',
    points: 2000,
    category: 'Stay Comfort',
    description: 'Relax on your departure day with guaranteed late check-out privilege until 4:00 PM.',
    iconName: 'Clock'
  }
];

export function readDemoAccount() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(ACCOUNT_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      // Ensure points, history, and vouchers exist
      return {
        ...SAMPLE_PROFILES['taha-gold'],
        ...parsed,
        history: parsed.history || SAMPLE_PROFILES['taha-gold'].history,
        vouchers: parsed.vouchers || SAMPLE_PROFILES['taha-gold'].vouchers,
        preferences: parsed.preferences || SAMPLE_PROFILES['taha-gold'].preferences
      };
    }
    return null;
  } catch {
    return null;
  }
}

export function saveDemoAccount(account) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
}

export function switchSampleAccount(profileKey) {
  if (typeof window === 'undefined') return null;
  const profile = SAMPLE_PROFILES[profileKey] || SAMPLE_PROFILES['taha-gold'];
  saveDemoAccount(profile);
  return profile;
}

export function clearDemoAccount() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(ACCOUNT_KEY);
}

export function redeemDemoReward(reward) {
  if (typeof window === 'undefined') return null;
  const current = readDemoAccount();
  if (!current) return null;
  if (current.points < reward.points) {
    return { success: false, message: `Insufficient points. You need ${reward.points.toLocaleString()} points but have ${current.points.toLocaleString()}.` };
  }

  const voucherCode = `AVR-${Date.now().toString().slice(-6)}`;
  const newVoucher = {
    id: `VCHR-${Date.now()}`,
    title: reward.title,
    code: voucherCode,
    expires: '2026-12-31',
    status: 'Active',
    category: reward.category
  };

  const updatedAccount = {
    ...current,
    points: current.points - reward.points,
    history: [
      {
        id: `tx-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        title: `Redeemed: ${reward.title}`,
        points: -reward.points,
        type: 'redeem'
      },
      ...(current.history || [])
    ],
    vouchers: [newVoucher, ...(current.vouchers || [])]
  };

  saveDemoAccount(updatedAccount);
  return { success: true, updatedAccount, voucher: newVoucher };
}

export function simulateEarnPoints(amount, description = 'Completed Stay Bonus') {
  if (typeof window === 'undefined') return null;
  const current = readDemoAccount();
  if (!current) return null;

  const updatedAccount = {
    ...current,
    points: current.points + amount,
    staysCount: (current.staysCount || 0) + 1,
    nightsCount: (current.nightsCount || 0) + 2,
    history: [
      {
        id: `tx-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        title: description,
        points: +amount,
        type: 'earn'
      },
      ...(current.history || [])
    ]
  };

  saveDemoAccount(updatedAccount);
  return updatedAccount;
}

export function saveStayPreferences(preferences) {
  if (typeof window === 'undefined') return null;
  const current = readDemoAccount();
  if (!current) return null;

  const updatedAccount = {
    ...current,
    preferences: {
      ...current.preferences,
      ...preferences
    }
  };

  saveDemoAccount(updatedAccount);
  return updatedAccount;
}

export function recordBookingActivity(activity) {
  if (typeof window === 'undefined') return;
  let entries = [];
  try {
    entries = JSON.parse(window.localStorage.getItem(ACTIVITY_KEY) || '[]');
  } catch {
    entries = [];
  }
  entries.unshift({ ...activity, createdAt: new Date().toISOString() });
  window.localStorage.setItem(ACTIVITY_KEY, JSON.stringify(entries.slice(0, 20)));
}

export function readBookingActivity() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(window.localStorage.getItem(ACTIVITY_KEY) || '[]');
  } catch {
    return [];
  }
}

