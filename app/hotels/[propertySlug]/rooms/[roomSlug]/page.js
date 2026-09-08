import Link from 'next/link';
import { ArrowLeft, ArrowRight, Bed, CheckCircle2, Compass, Maximize2, Users } from 'lucide-react';
import RoomExperience from '../../../../components/RoomExperience';
import { getRoomBySlug, getRoomPath, slugifyRoomName } from '../../../../lib/roomData';
import { getRoomGallery } from '../../../../lib/roomData';
import { PROPERTIES_DATA } from '../../../../data/propertiesData';
import RoomBookingButton from '../../../../components/RoomBookingButton';

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
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main className="room-not-found">
          <h1>Room not found</h1>
          <p>The requested room could not be found in our collection.</p>
          <Link href="/booking" className="btn-luxury-gold">Return to booking</Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const { property, room } = result;
  const relatedRooms = property.rooms.filter((candidate) => candidate.id !== room.id).slice(0, 3);
  const gallery = getRoomGallery(property, room);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main className="room-detail-page">
        <div className="room-detail-topbar">
          <Link href={`/hotels/${propertySlug}`} className="room-back-link">
            <ArrowLeft size={16} /> Back to {property.name}
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="room-preview-label">{property.city}</span>
            <span className="room-preview-label" style={{ background: '#FEF3C7', color: '#92400E', borderColor: '#FDE68A' }}>
              {room.tier}
            </span>
          </div>
        </div>
      <section className="room-detail-hero">
        <div className="room-detail-gallery">
          {gallery.map((image) => <div className="room-detail-gallery-image" key={image.label} style={{ backgroundImage: `url('${image.src}')` }}><span>{image.label}</span></div>)}
        </div>
        <div className="room-detail-hero-copy">
          <div className="gold-section-label">{room.tag}</div>
          <h1>{room.name}</h1>
          <p>{room.description}</p>
          <div className="room-detail-actions">
            <RoomBookingButton room={room} property={property} />
            <Link href={`/compare?rooms=${propertySlug}:${room.id}`} className="btn-luxury-outline">Add to compare <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
      <RoomExperience property={property} room={room} gallery={gallery} />
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
            <RoomBookingButton room={room} property={property} />
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
    </div>
  );
}
