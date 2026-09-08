const ACCOUNT_KEY = 'avari-demo-account';
const ACTIVITY_KEY = 'avari-booking-activity';

export function readDemoAccount() {
  if (typeof window === 'undefined') return null;
  try {
    return JSON.parse(window.localStorage.getItem(ACCOUNT_KEY) || 'null');
  } catch {
    return null;
  }
}

export function saveDemoAccount(account) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
}

export function clearDemoAccount() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(ACCOUNT_KEY);
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
