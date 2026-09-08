import Link from 'next/link';
import { ArrowLeft, ArrowRight, Building2, Calendar, Sparkles } from 'lucide-react';
import PortfolioHotelExperience from '../../components/PortfolioHotelExperience';
import { PORTFOLIO_PROPERTIES } from '../../data/portfolioData';
import { PROPERTIES_DATA } from '../../data/propertiesData';
import { getPortfolioMockData } from '../../data/portfolioMockData';
import BookingBar from '../../components/BookingBar';

export function generateStaticParams() {
  return Object.keys(PORTFOLIO_PROPERTIES).map((propertySlug) => ({ propertySlug }));
}

export async function generateMetadata({ params }) {
  const { propertySlug } = await params;
  const property = PORTFOLIO_PROPERTIES[propertySlug];
  return { title: property ? `${property.name} | Avari Hotels & Resorts` : 'Property | Avari Hotels & Resorts' };
}

export default async function PortfolioPropertyPage({ params }) {
  const { propertySlug } = await params;
  const portfolioProperty = PORTFOLIO_PROPERTIES[propertySlug];
  const detailedProperty = PROPERTIES_DATA[propertySlug];
  const mockProperty = getPortfolioMockData(propertySlug);

  if (!portfolioProperty) {
    return <main className="property-not-found"><h1>Property not found</h1><Link href="/">Return to Avari</Link></main>;
  }

  if (!detailedProperty) {
    return <PortfolioHotelExperience portfolioProperty={portfolioProperty} mockData={mockProperty} />;
  }

  const rooms = detailedProperty?.rooms || mockProperty.rooms;
  const facilities = detailedProperty ? [
    ...(detailedProperty.dining || []).map((venue) => ({ type: 'Dining', name: venue.name, detail: venue.cuisine })),
    ...(detailedProperty.banquets || []).map((venue) => ({ type: 'Events', name: venue.name, detail: venue.type })),
    ...(detailedProperty.wellness || []).map((venue) => ({ type: 'Wellness', name: venue.name, detail: venue.highlight }))
  ] : mockProperty.facilities;

  const propertyCopy = detailedProperty || mockProperty;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main className="portfolio-property-page">
      <div className="portfolio-property-topbar"><Link href="/" className="room-back-link"><ArrowLeft size={15} /> Avari portfolio</Link><span>{portfolioProperty.status}</span></div>
      <section className="portfolio-property-hero" style={{ backgroundImage: `url('${portfolioProperty.image}')` }}>
        <div className="portfolio-property-overlay" />
        <div className="portfolio-property-hero-copy">
          <div className="gold-section-label"><Building2 size={15} /> {portfolioProperty.category}</div>
          <h1>{portfolioProperty.name}</h1>
          <p>{portfolioProperty.city} · {portfolioProperty.descriptor}</p>
        </div>
      </section>
      <>
          <section className="portfolio-property-summary"><div><span className="section-overhead">Avari hospitality</span><h2>{propertyCopy.tagline}</h2><p>{propertyCopy.description}</p></div><div className="portfolio-property-actions"><Link href={`/booking?hotel=${propertySlug}`} className="btn-luxury-gold"><Calendar size={15} /> Check availability</Link><a href="#rooms" className="btn-luxury-outline"><Sparkles size={15} /> Explore Suites</a></div></section>
          <section id="rooms" className="portfolio-property-content"><div><div className="section-overhead">Rooms and suites</div><h2>Find your room</h2><div className="portfolio-room-list">{rooms.map((room) => <Link key={room.id} href={detailedProperty ? `/hotels/${propertySlug}/rooms/${room.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}` : `/booking?hotel=${propertySlug}`}><span>{room.tier}</span><strong>{room.name}</strong><small>{room.area} · {room.occupancy}</small><ArrowRight size={15} /></Link>)}</div></div><div><div className="section-overhead">At the property</div><h2>Facilities</h2><div className="portfolio-facility-list">{facilities.slice(0, 8).map((facility) => <div key={`${facility.type}-${facility.name}`}><span>{facility.type}</span><strong>{facility.name}</strong><small>{facility.detail}</small></div>)}</div></div></section>
          {/* Removed Mock Note Section */}
      </>
      </main>
      <BookingBar propertyId={portfolioProperty.id} />
    </div>
  );
}
