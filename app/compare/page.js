import Link from 'next/link';
import { ArrowLeft, ArrowRight, Bed, CheckCircle2, Maximize2, Users, MapPin } from 'lucide-react';
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

function RoomPicker({ existingSelection, city }) {
  const allRooms = getAllRooms().filter(r => r.city === city);
  return (
    <div className="compare-missing-column" style={{ display: 'block' }}>
      <span>{existingSelection ? "Add a second room" : "Select first room"}</span>
      <h2>Choose from options below</h2>
      <p style={{ marginBottom: '24px' }}>Click a suite in {city} to add it to the comparison view.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '700px', overflowY: 'auto', paddingRight: '8px' }}>
        {allRooms.map((room) => {
          const roomKey = `${room.propertySlug}:${room.id}`;
          if (existingSelection === roomKey) return null;
          
          const href = existingSelection ? `/compare?city=${city}&rooms=${existingSelection},${roomKey}` : `/compare?city=${city}&rooms=${roomKey}`;
          
          return (
            <Link key={roomKey} href={href} className="compare-picker-card" style={{ border: '1px solid #E2E8F0', padding: '16px', borderRadius: '12px', textDecoration: 'none', color: 'inherit', display: 'block', transition: 'all 0.2s ease', background: '#FFFFFF' }}>
              <span style={{ fontSize: '0.7rem', color: '#94A3B8', textTransform: 'uppercase', display: 'block', marginBottom: '6px', letterSpacing: '0.05em' }}>{room.propertySlug.replace(/-/g, ' ').replace('avari ', '')}</span>
              <strong style={{ fontSize: '1.05rem', color: '#0F172A', display: 'block', marginBottom: '4px' }}>{room.name}</strong>
              <small style={{ fontSize: '0.85rem', color: '#64748B' }}>{room.areaLabel || room.area} · {room.occupancyLabel || room.occupancy}</small>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default async function ComparePage({ searchParams }) {
  const params = await searchParams;
  const city = params.city;
  const values = (params.rooms || '').split(',').filter(Boolean).slice(0, 2);
  const selections = values.map(parseRoomSelection).filter(Boolean);

  if (!city) {
    const allRooms = getAllRooms();
    const uniqueCities = [...new Set(allRooms.map(r => r.city))].filter(Boolean);
    
    return (
      <main className="compare-page">
        <div className="compare-topbar"><Link href="/booking" className="compare-back-link"><ArrowLeft size={15} /> Find a room</Link><span>Side-by-side room preview</span></div>
        <section className="compare-intro"><div className="section-overhead">Avari room comparison</div><h1>Where are you travelling?</h1><p>Select a destination city to compare rooms and suites available across our properties.</p></section>
        
        <section className="compare-empty" style={{ padding: '0 40px 60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {uniqueCities.map(c => (
              <Link key={c} href={`/compare?city=${c}`} style={{ border: '1px solid #E2E8F0', padding: '30px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', color: '#0F172A', background: '#FFFFFF' }}>
                <div style={{ background: '#F8FAFC', padding: '15px', borderRadius: '50%' }}><MapPin size={24} color="var(--avari-gold)" /></div>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '1.25rem' }}>{c}</h3>
                  <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Compare rooms in {c}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="compare-page">
      <div className="compare-topbar"><Link href="/compare" className="compare-back-link"><ArrowLeft size={15} /> Change City</Link><span>Side-by-side room preview</span></div>
      <section className="compare-intro"><div className="section-overhead">Avari room comparison · {city}</div><h1>Choose the room that feels right.</h1><p>Compare space, occupancy, bed configuration, views, highlights, and preview rates across the modeled Avari rooms.</p></section>
      
      <section className="compare-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', alignItems: 'start' }}>
        {/* Left Column: Room 1 or Picker */}
        {selections[0] ? (
          <RoomColumn selection={selections[0]} />
        ) : (
          <RoomPicker existingSelection={null} city={city} />
        )}

        {/* Right Column: Room 2 or Picker */}
        {selections[1] ? (
          <RoomColumn selection={selections[1]} />
        ) : (
          <RoomPicker existingSelection={values[0]} city={city} />
        )}
      </section>
      
      {selections.length === 2 && <div className="compare-context-note">Comparing {selections[0].property.name} with {selections[1].property.name}. Current prices and availability must be confirmed by the booking provider.</div>}
    </main>
  );
}

