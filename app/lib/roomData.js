import { PROPERTIES_DATA } from '../data/propertiesData';

export function slugifyRoomName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getPropertyBySlug(propertySlug) {
  return PROPERTIES_DATA[propertySlug];
}

export function getRoomBySlug(propertySlug, roomSlug) {
  const property = getPropertyBySlug(propertySlug);
  if (!property) return null;

  const room = property.rooms.find((candidate) => (
    candidate.id === roomSlug || slugifyRoomName(candidate.name) === roomSlug
  ));

  return room ? { property, room } : null;
}

export function getRoomPath(propertySlug, room) {
  return `/hotels/${propertySlug}/rooms/${slugifyRoomName(room.name)}`;
}

export function normalizeRoomForComparison(propertySlug, room) {
  const areaMatch = room.area?.match(/([\d.]+)\s*m²/i);
  const occupancyMatch = room.occupancy?.match(/\d+/);

  return {
    id: room.id,
    slug: slugifyRoomName(room.name),
    propertySlug,
    name: room.name,
    tier: room.tier,
    areaM2: areaMatch ? Number(areaMatch[1]) : null,
    areaLabel: room.area,
    occupancy: occupancyMatch ? Number(occupancyMatch[0]) : null,
    occupancyLabel: room.occupancy,
    bed: room.bed,
    view: room.view,
    priceNumber: room.priceNumber,
    priceLabel: room.pricePerNight,
    highlights: room.highlights || [],
    hasTour: Boolean(room.tourSceneKey)
  };
}

export function getAllRooms() {
  return Object.entries(PROPERTIES_DATA).flatMap(([propertySlug, property]) => (
    property.rooms.map((room) => normalizeRoomForComparison(propertySlug, room))
  ));
}
