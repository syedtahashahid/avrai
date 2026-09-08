export function createSceneManifest({ propertySlug, property, room }) {
  return {
    id: room.id,
    propertySlug,
    propertyName: property.name,
    nodeType: 'room',
    assetType: 'procedural-fallback',
    assetUrl: null,
    fallbackSceneKey: room.tourSceneKey,
    initialCamera: room.waypoints?.[0] || { yaw: 0, pitch: 0 },
    hotspots: room.hotspots || [],
    viewpoints: room.waypoints || [],
    links: [],
    floor: null,
    building: null,
    mediaStatus: 'fallback',
    note: 'Replace assetUrl with an approved panorama or GLTF asset when supplied by Avari.'
  };
}

