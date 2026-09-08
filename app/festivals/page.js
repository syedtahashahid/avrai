import Link from 'next/link';
import { ArrowRight, CalendarDays, MapPin, Sparkles } from 'lucide-react';

import { FESTIVALS } from '../data/festivalData';

export const metadata = {
  title: 'Festivals and Experiences | Avari Hotels & Resorts',
  description: 'Discover preview festivals, culinary moments, and seasonal Avari experiences.'
};

export default function FestivalsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC' }}>
      
      <main className="experiences-shell">
        <section className="experiences-intro">
          <div className="gold-section-label"><Sparkles size={15} /> Avari experiences</div>
          <h1>Make the stay the story.</h1>
          <p>A living calendar for festivals, tables, retreats, and gatherings across the Avari world.</p>
        </section>
        <section className="festival-grid" aria-label="Festival previews">
          {FESTIVALS.map((festival) => (
            <article className="festival-card" key={festival.slug}>
              <div className="festival-card-image" style={{ backgroundImage: `url('${festival.image}')` }}>
                <span>{festival.status}</span>
              </div>
              <div className="festival-card-copy">
                <div className="festival-card-meta"><span>{festival.category}</span><span>{festival.dateLabel}</span></div>
                <h2>{festival.title}</h2>
                <p>{festival.summary}</p>
                <div className="festival-card-location"><MapPin size={14} /> {festival.location}</div>
                <Link href={`/festivals/${festival.slug}`} className="festival-link">View experience <ArrowRight size={15} /></Link>
              </div>
            </article>
          ))}
        </section>
        <section className="experiences-note">
          <CalendarDays size={20} /> <span>Dates, pricing, availability, and inclusions are preview content until approved by Avari.</span>
        </section>
      </main>
    </div>
  );
}

