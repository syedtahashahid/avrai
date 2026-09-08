'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Globe, LockKeyhole, UserRound } from 'lucide-react';
import Header from '../components/Header';
import { clearDemoAccount, readBookingActivity, readDemoAccount, saveDemoAccount } from '../lib/demoStore';

export default function AccountPage() {
  const [mode, setMode] = useState('signin');
  const [account, setAccount] = useState(null);
  const [bookingActivity, setBookingActivity] = useState([]);

  useEffect(() => {
    setAccount(readDemoAccount());
    setBookingActivity(readBookingActivity());
  }, []);

  const handleAccountSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextAccount = {
      name: formData.get('name') || 'Avari guest',
      email: formData.get('email'),
      membership: new URLSearchParams(window.location.search).get('join') === 'gold' ? 'Gold interest saved' : 'Guest account',
      createdAt: new Date().toISOString()
    };
    saveDemoAccount(nextAccount);
    setAccount(nextAccount);
    setBookingActivity(readBookingActivity());
  };

  if (account) {
    return (
      <div className="account-page">
        <Header />
        <main className="account-shell">
          <section className="account-dashboard">
            <div className="account-dashboard-heading"><div className="gold-section-label"><UserRound size={15} /> Demo member area</div><h1>Welcome back, {account.name}.</h1><p>{account.email} · {account.membership}</p><button className="account-signout" onClick={() => { clearDemoAccount(); setAccount(null); }}>Sign out</button></div>
            <div className="account-dashboard-grid">
              <article><span>Membership</span><h2>{account.membership}</h2><p>Benefits and eligibility will connect to Avari membership services in production.</p><Link href="/gold-card" className="account-dashboard-link">Explore Gold Card <ArrowRight size={15} /></Link></article>
              <article><span>Booking activity</span><h2>{bookingActivity.length ? `${bookingActivity.length} recent handoff${bookingActivity.length === 1 ? '' : 's'}` : 'No handoffs yet'}</h2><p>TravelClick remains the reservation source of truth. This demo stores only activity history.</p><Link href="/booking" className="account-dashboard-link">Find a room <ArrowRight size={15} /></Link></article>
              <article><span>Saved experiences</span><h2>Festivals and dining</h2><p>Save and register experiences here when the production account service is connected.</p><Link href="/festivals" className="account-dashboard-link">Browse experiences <ArrowRight size={15} /></Link></article>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="account-page">
      <Header />
      <main className="account-shell">
        <section className="account-panel">
          <div className="account-panel-copy">
            <div className="gold-section-label"><UserRound size={15} /> Avari member area</div>
            <h1>Everything you return to, in one place.</h1>
            <p>Sign in to connect your stays, saved rooms, Gold Card interest, and future festival experiences.</p>
            <div className="account-promise"><Check size={16} /> Your booking provider remains the source of reservation truth.</div>
            <div className="account-promise"><Check size={16} /> Payment details are never stored in this demo.</div>
          </div>
          <div className="account-form-panel">
            <>
                <div className="account-form-heading"><span>{mode === 'signup' ? 'Begin your membership journey' : 'Welcome back'}</span><h2>{mode === 'signup' ? 'Create an account' : 'Sign in to Avari'}</h2></div>
                <button className="google-button" onClick={() => { saveDemoAccount({ name: 'Google guest', email: 'google-preview@avari.demo', membership: 'Guest account' }); setAccount(readDemoAccount()); }}><Globe size={17} /> Continue with Google <span>Preview</span></button>
                <div className="account-divider"><span>or continue with email</span></div>
                <form onSubmit={handleAccountSubmit}>
                  {mode === 'signup' && <label>Full name<input required name="name" placeholder="Your name" /></label>}
                  <label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label>
                  <label>Password<input required type="password" name="password" placeholder="At least 8 characters" minLength={8} /></label>
                  <button className="gold-primary-button" type="submit">{mode === 'signup' ? 'Create preview account' : 'Continue'} <ArrowRight size={16} /></button>
                </form>
                <button className="account-switch" onClick={() => setMode(mode === 'signup' ? 'signin' : 'signup')}>{mode === 'signup' ? 'Already have an account? Sign in' : 'New to Avari? Create an account'}</button>
                <div className="account-security"><LockKeyhole size={14} /> Authentication provider connection required for production</div>
            </>
          </div>
        </section>
        <Link href="/gold-card" className="account-back-link">Explore Avari Gold Card <ArrowRight size={15} /></Link>
      </main>
    </div>
  );
}
