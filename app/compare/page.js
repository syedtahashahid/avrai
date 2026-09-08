import Link from 'next/link';
import { ArrowLeft, ArrowRight, Bed, CheckCircle2, Maximize2, Users } from 'lucide-react';
import { getAllRooms, getRoomBySlug, slugifyRoomName } from '../lib/roomData';

export const metadata = {
  title: 'Compare Rooms | Avari Hotels & Resorts',
  description: 'Compare Avari rooms and suites side by side.'
};

function parseRoomSelection(value) {
  const [propertySlug, roomId] = (value || '').split(':');
  if (!propertySlug || !roomId) return null;
  const result = getRoomBySlug(propertySlug, roomId);
  return result ? { propertySlug, ...result } : null;
}

function RoomColumn({ selection }) {
  const { property, room, propertySlug } = selection;
  return (
    <article className="compare-room-column">
      <div className="compare-room-image" style={{ backgroundImage: `url('${property.coverImage || '/images/suite-luxury.jpg'}')` }} />
      <div className="compare-room-copy">
        <span className="compare-property-name">{property.name}</span>
        <h2>{room.name}</h2>
        <p>{room.description}</p>
        <Link href={`/hotels/${propertySlug}/rooms/${slugifyRoomName(room.name)}`} className="compare-room-link">Open room detail <ArrowRight size={15} /></Link>
      </div>
      <div className="compare-room-specs">
        <div><Maximize2 size={16} /><span>Area</span><strong>{room.area}</strong></div>
        <div><Users size={16} /><span>Occupancy</span><strong>{room.occupancy}</strong></div>
        <div><Bed size={16} /><span>Bed</span><strong>{room.bed}</strong></div>
        <div><span>View</span><strong>{room.view}</strong></div>
        <div><span>Preview rate</span><strong>{room.pricePerNight}</strong></div>
      </div>
      <div className="compare-highlights"><span>Highlights</span>{room.highlights.map((highlight) => <div key={highlight}><CheckCircle2 size={14} /> {highlight}</div>)}</div>
    </article>
  );
}

export default async function ComparePage({ searchParams }) {
  const params = await searchParams;
  const values = (params.rooms || '').split(',').filter(Boolean).slice(0, 2);
  const selections = values.map(parseRoomSelection).filter(Boolean);
  const allRooms = getAllRooms();

  return (
    <main className="compare-page">
      <div className="compare-topbar"><Link href="/booking" className="compare-back-link"><ArrowLeft size={15} /> Find a room</Link><span>Side-by-side room preview</span></div>
      <section className="compare-intro"><div className="section-overhead">Avari room comparison</div><h1>Choose the room that feels right.</h1><p>Compare space, occupancy, bed configuration, views, highlights, and preview rates across the modeled Avari rooms.</p></section>
      {selections.length === 0 ? (
        <section className="compare-empty"><h2>Select two rooms to compare</h2><p>Open a room detail page and use “Add to compare”, or choose from the rooms below.</p><div className="compare-picker-grid">{allRooms.slice(0, 12).map((room) => <Link key={`${room.propertySlug}:${room.id}`} href={`/compare?rooms=${room.propertySlug}:${room.id}`} className="compare-picker-card"><span>{room.propertySlug}</span><strong>{room.name}</strong><small>{room.areaLabel} · {room.occupancyLabel}</small></Link>)}</div></section>
      ) : (
        <>
          <section className={`compare-grid compare-count-${selections.length}`}>{selections.map((selection) => <RoomColumn key={`${selection.propertySlug}:${selection.room.id}`} selection={selection} />)}{selections.length === 1 && <div className="compare-missing-column"><span>Add a second room</span><h2>Keep looking.</h2><p>Comparison works across rooms and properties so you can weigh the details that matter.</p><Link href={`/compare?rooms=${values[0]},${allRooms.find((room) => `${room.propertySlug}:${room.id}` !== values[0])?.propertySlug}:${allRooms.find((room) => `${room.propertySlug}:${room.id}` !== values[0])?.id}`} className="btn-luxury-outline">Add another room <ArrowRight size={15} /></Link></div>}</section>
          {selections.length === 2 && <div className="compare-context-note">Comparing {selections[0].property.name} with {selections[1].property.name}. Current prices and availability must be confirmed by the booking provider.</div>}
        </>
      )}
    </main>
  );
}
