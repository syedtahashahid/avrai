'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Globe, LockKeyhole, UserRound } from 'lucide-react';
import Header from '../components/Header';

export default function AccountPage() {
  const [mode, setMode] = useState('welcome');
  const [submitted, setSubmitted] = useState(false);

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
            {submitted ? (
              <div className="account-success"><Check size={26} /><h2>Preview account created</h2><p>This demo will connect Google and Avari membership services when production providers are configured.</p><button className="gold-primary-button" onClick={() => setSubmitted(false)}>Return to sign in</button></div>
            ) : (
              <>
                <div className="account-form-heading"><span>{mode === 'signup' ? 'Begin your membership journey' : 'Welcome back'}</span><h2>{mode === 'signup' ? 'Create an account' : 'Sign in to Avari'}</h2></div>
                <button className="google-button" onClick={() => setSubmitted(true)}><Globe size={17} /> Continue with Google <span>Preview</span></button>
                <div className="account-divider"><span>or continue with email</span></div>
                <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
                  {mode === 'signup' && <label>Full name<input required name="name" placeholder="Your name" /></label>}
                  <label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label>
                  <label>Password<input required type="password" name="password" placeholder="At least 8 characters" minLength={8} /></label>
                  <button className="gold-primary-button" type="submit">{mode === 'signup' ? 'Create preview account' : 'Continue'} <ArrowRight size={16} /></button>
                </form>
                <button className="account-switch" onClick={() => setMode(mode === 'signup' ? 'welcome' : 'signup')}>{mode === 'signup' ? 'Already have an account? Sign in' : 'New to Avari? Create an account'}</button>
                <div className="account-security"><LockKeyhole size={14} /> Authentication provider connection required for production</div>
              </>
            )}
          </div>
        </section>
        <Link href="/gold-card" className="account-back-link">Explore Avari Gold Card <ArrowRight size={15} /></Link>
      </main>
    </div>
  );
}
