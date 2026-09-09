import Link from 'next/link';
import { ArrowRight, Check, Crown, Sparkles, UserRound } from 'lucide-react';
import DigitalWalletButtons from '../components/DigitalWalletButtons';

import { GOLD_CARD_BENEFITS, GOLD_CARD_TIERS } from '../data/membershipData';

export const metadata = {
  title: 'Avari Gold Card | Avari Hotels & Resorts',
  description: 'A premium membership preview for stays, dining, wellness, and considered Avari experiences.'
};

export default function GoldCardPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'linear-gradient(180deg, #110d07 0%, #060402 100%)' }}>
      
      <main>
        <section className="gold-hero">
          <div className="gold-hero-image" />
          <div className="gold-hero-content">
            <div className="gold-kicker"><Crown size={15} /> Avari Gold Card</div>
            <h1>Stay in the golden hour.</h1>
            <p>Membership for guests who value the details: a familiar welcome, memorable tables, restorative pauses, and more thoughtful ways to move through Avari.</p>
            <div className="gold-actions">
              <Link href="/account?join=gold" className="gold-primary-button"><UserRound size={17} /> Join the preview</Link>
              <Link href="#benefits" className="gold-quiet-link">Explore privileges <ArrowRight size={16} /></Link>
            </div>
            <p className="gold-disclaimer">Preview experience. Membership terms, pricing, eligibility, and benefits require Avari approval.</p>
          </div>
        </section>

        <section className="gold-intro-section">
          <div>
            <span className="gold-section-label">A more personal Avari</span>
            <h2>One membership, many ways to feel at home.</h2>
          </div>
          <p>Connect your stays, tables, wellness rituals, and seasonal discoveries to one guest profile. The result is less administration and more of what brought you here.</p>
        </section>

        <section id="benefits" className="gold-benefits-section">
          <div className="gold-section-heading">
            <span className="gold-section-label">The privileges</span>
            <h2>Designed around the way you stay.</h2>
          </div>
          <div className="gold-benefit-grid">
            {GOLD_CARD_BENEFITS.map((benefit) => (
              <article className="gold-benefit" key={benefit.id}>
                <div className="gold-benefit-image" style={{ backgroundImage: `url('${benefit.image}')` }} />
                <div className="gold-benefit-copy">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="gold-card-showcase">
          <div className="gold-showcase-image" />
          <div className="gold-showcase-copy">
            <span className="gold-section-label">The welcome</span>
            <h2>Arrive with a little more anticipation.</h2>
            <p>Your future member area will bring together your card status, stay history, saved rooms, festival registrations, and benefits in one quiet place. Add your preview card to your digital wallet to keep your status close.</p>
            <DigitalWalletButtons />
            <Link href="/account" className="gold-outline-button" style={{ marginTop: '20px' }}>Open member area <ArrowRight size={16} /></Link>
          </div>
        </section>

        <section className="gold-tiers-section">
          <div className="gold-section-heading">
            <span className="gold-section-label">Membership, considered</span>
            <h2>Choose the level that fits your world.</h2>
          </div>
          <div className="gold-tier-grid">
            {GOLD_CARD_TIERS.map((tier) => (
              <article className="gold-tier" key={tier.id}>
                <div className="gold-tier-image" style={{ backgroundImage: `url('${tier.image}')` }} />
                <div className="gold-tier-copy">
                  <span>{tier.eyebrow}</span>
                  <h3>{tier.name}</h3>
                  <p>{tier.description}</p>
                  <div className="gold-tier-note"><Check size={15} /> Programme details to be confirmed</div>
                </div>
              </article>
            ))}
          </div>
          <p className="gold-footnote">Current visuals and copy are a design preview and do not constitute membership terms.</p>
        </section>

        <section className="gold-festival-cta">
          <div>
            <span className="gold-section-label">Beyond the room</span>
            <h2>Find the next reason to gather.</h2>
            <p>Browse seasonal festivals, culinary moments, mountain escapes, and member-first experiences.</p>
          </div>
          <Link href="/festivals" className="gold-primary-button">Discover experiences <ArrowRight size={17} /></Link>
        </section>
      </main>
    </div>
  );
}

