import Link from 'next/link';
import { ArrowLeft, CalendarDays, MapPin, UserRound } from 'lucide-react';
import { getFestivalBySlug } from '../../data/festivalData';

export function generateStaticParams() {
  return ['luminous-lahore', 'mountain-light-skardu', 'golden-table'].map((festivalSlug) => ({ festivalSlug }));
}

export async function generateMetadata({ params }) {
  const { festivalSlug } = await params;
  const festival = getFestivalBySlug(festivalSlug);
  return { title: festival ? `${festival.title} | Avari Experiences` : 'Experience | Avari Hotels & Resorts' };
}

export default async function FestivalDetailPage({ params }) {
  const { festivalSlug } = await params;
  const festival = getFestivalBySlug(festivalSlug);

  if (!festival) {
    return (
      <main className="experience-not-found">
        <h1>Experience not found</h1>
        <Link href="/festivals">Return to experiences</Link>
      </main>
    );
  }

  return (
    <main className="festival-detail-page">
      <Link href="/festivals" className="festival-back-link"><ArrowLeft size={15} /> All experiences</Link>
      <section className="festival-detail-hero" style={{ backgroundImage: `url('${festival.image}')` }}>
        <div className="festival-detail-overlay" />
        <div className="festival-detail-content">
          <span>{festival.status}</span>
          <h1>{festival.title}</h1>
          <p>{festival.summary}</p>
        </div>
      </section>
      <section className="festival-detail-body">
        <div>
          <div className="festival-detail-meta"><span><MapPin size={15} /> {festival.location}</span><span><CalendarDays size={15} /> {festival.dateLabel}</span></div>
          <h2>A slower way to arrive.</h2>
          <p>{festival.description}</p>
          <p className="festival-member-note">{festival.memberNote}</p>
        </div>
        <aside className="festival-request-panel">
          <div className="gold-section-label">Plan your interest</div>
          <h3>Keep me informed</h3>
          <p>Save this experience to your account while the programme takes shape.</p>
          <Link href="/account" className="gold-primary-button"><UserRound size={16} /> Continue to account</Link>
        </aside>
      </section>
    </main>
  );
}
