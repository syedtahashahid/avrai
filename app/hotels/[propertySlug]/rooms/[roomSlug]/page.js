import Link from 'next/link';
import { ArrowLeft, ArrowRight, Bed, CheckCircle2, Compass, ExternalLink, Maximize2, Users } from 'lucide-react';
import { getRoomBySlug, getRoomPath, slugifyRoomName } from '../../../../lib/roomData';
import { getTravelClickBookingUrl } from '../../../../utils/bookingUrl';
import { PROPERTIES_DATA } from '../../../../data/propertiesData';

export function generateStaticParams() {
  return Object.entries(PROPERTIES_DATA).flatMap(([propertySlug, property]) => (
    property.rooms.map((room) => ({ propertySlug, roomSlug: slugifyRoomName(room.name) }))
  ));
}

export async function generateMetadata({ params }) {
  const { propertySlug, roomSlug } = await params;
  const result = getRoomBySlug(propertySlug, roomSlug);
  return {
    title: result ? `${result.room.name} | ${result.property.name}` : 'Room | Avari Hotels & Resorts',
    description: result?.room.description
  };
}

export default async function RoomDetailPage({ params }) {
  const { propertySlug, roomSlug } = await params;
  const result = getRoomBySlug(propertySlug, roomSlug);

  if (!result) {
    return <main className="room-not-found"><h1>Room not found</h1><Link href="/booking">Return to booking</Link></main>;
  }

  const { property, room } = result;
  const relatedRooms = property.rooms.filter((candidate) => candidate.id !== room.id).slice(0, 3);
  const bookingUrl = getTravelClickBookingUrl({ hotelId: propertySlug, adults: 2 });

  return (
    <main className="room-detail-page">
      <div className="room-detail-topbar">
        <Link href={`/hotels/${propertySlug}`} className="room-back-link"><ArrowLeft size={15} /> {property.name}</Link>
        <span className="room-preview-label">Room detail preview</span>
      </div>
      <section className="room-detail-hero">
        <div className="room-detail-visual" style={{ backgroundImage: `url('${property.coverImage || '/images/suite-luxury.jpg'}')` }}>
          <span><Compass size={15} /> 360 scene ready</span>
        </div>
        <div className="room-detail-hero-copy">
          <div className="gold-section-label">{room.tag}</div>
          <h1>{room.name}</h1>
          <p>{room.description}</p>
          <div className="room-detail-actions">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-luxury-gold">Reserve on TravelClick <ExternalLink size={15} /></a>
            <Link href={`/compare?rooms=${propertySlug}:${room.id}`} className="btn-luxury-outline">Add to compare <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
      <section className="room-detail-content">
        <div className="room-detail-specs">
          <div><Maximize2 size={18} /><strong>{room.area}</strong><span>Room area</span></div>
          <div><Users size={18} /><strong>{room.occupancy}</strong><span>Occupancy</span></div>
          <div><Bed size={18} /><strong>{room.bed}</strong><span>Bed configuration</span></div>
          <div><Compass size={18} /><strong>{room.view}</strong><span>View</span></div>
        </div>
        <div className="room-detail-columns">
          <div>
            <div className="section-overhead">Inside the room</div>
            <h2>Made for the way you stay.</h2>
            <ul className="room-detail-highlights">
              {room.highlights.map((highlight) => <li key={highlight}><CheckCircle2 size={16} /> {highlight}</li>)}
            </ul>
          </div>
          <aside className="room-detail-rate">
            <span>Preview rate</span>
            <strong>{room.pricePerNight}</strong>
            <small>per night · confirm current availability with the booking provider</small>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-luxury-gold">Check availability <ExternalLink size={14} /></a>
          </aside>
        </div>
      </section>
      <section className="room-related-section">
        <div className="section-overhead">More at {property.name}</div>
        <h2>Continue exploring</h2>
        <div className="room-related-grid">
          {relatedRooms.map((relatedRoom) => (
            <Link href={getRoomPath(propertySlug, relatedRoom)} className="room-related-card" key={relatedRoom.id}>
              <span>{relatedRoom.tier}</span><h3>{relatedRoom.name}</h3><p>{relatedRoom.area} · {relatedRoom.occupancy}</p><ArrowRight size={16} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
