// Procedural High-Fidelity 360 Equirectangular Panoramic Texture Generator for Avari Suites & Venues
import * as THREE from 'three';

// Cache generated textures to avoid regenerating identical environments
const textureCache = new Map();

/**
 * Generates an equirectangular 360 panorama canvas for a given scene key and lighting mode.
 * @param {string} sceneKey - e.g. "lahore-presidential", "lahore-executive-suite", "venue-dynasty", "venue-ballroom", "xpress-suite"
 * @param {string} mode - "day" | "night"
 * @returns {THREE.CanvasTexture}
 */
export function getRoomTexture(sceneKey, mode = 'day') {
  const cacheKey = `${sceneKey}_${mode}`;
  if (textureCache.has(cacheKey)) {
    return textureCache.get(cacheKey);
  }

  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    // Fallback basic texture
    const fallbackCanvas = document.createElement('canvas');
    fallbackCanvas.width = 64;
    fallbackCanvas.height = 64;
    const fbCtx = fallbackCanvas.getContext('2d');
    fbCtx.fillStyle = '#1A2536';
    fbCtx.fillRect(0, 0, 64, 64);
    const fbTex = new THREE.CanvasTexture(fallbackCanvas);
    return fbTex;
  }

  const isNight = mode === 'night';

  switch (sceneKey) {
    case 'lahore-presidential':
      drawPresidentialSuite(ctx, width, height, isNight);
      break;
    case 'lahore-executive-suite':
      drawExecutiveSuite(ctx, width, height, isNight);
      break;
    case 'lahore-junior-suite':
      drawJuniorSuite(ctx, width, height, isNight);
      break;
    case 'lahore-lady-avari':
      drawLadyAvariRoom(ctx, width, height, isNight);
      break;
    case 'lahore-deluxe':
      drawDeluxeRoom(ctx, width, height, isNight);
      break;
    case 'venue-dynasty':
      drawDynastyRestaurant(ctx, width, height, isNight);
      break;
    case 'venue-ballroom':
      drawGrandBallroom(ctx, width, height, isNight);
      break;
    case 'venue-pool':
      drawPoolsideOasis(ctx, width, height, isNight);
      break;
    case 'xpress-suite':
      drawXpressSuite(ctx, width, height, isNight);
      break;
    case 'xpress-executive':
    case 'xpress-superior':
    case 'xpress-standard':
      drawXpressExecutive(ctx, width, height, isNight);
      break;
    case 'venue-xpress-dining':
      drawXpressDining(ctx, width, height, isNight);
      break;
    case 'venue-xpress-meeting':
      drawXpressMeeting(ctx, width, height, isNight);
      break;
    default:
      drawPresidentialSuite(ctx, width, height, isNight);
      break;
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;

  textureCache.set(cacheKey, texture);
  return texture;
}

// -------------------------------------------------------------
// SCENE RENDERERS (Equirectangular Projections)
// -------------------------------------------------------------

function drawPresidentialSuite(ctx, w, h, isNight) {
  // 1. Base Room Atmosphere & Wall Gradients
  const wallGrad = ctx.createLinearGradient(0, 0, 0, h);
  if (isNight) {
    wallGrad.addColorStop(0, '#101520');
    wallGrad.addColorStop(0.3, '#1A2130');
    wallGrad.addColorStop(0.5, '#252D3F');
    wallGrad.addColorStop(0.75, '#1E1712');
    wallGrad.addColorStop(1, '#0C0A09');
  } else {
    wallGrad.addColorStop(0, '#F5EFEB');
    wallGrad.addColorStop(0.3, '#E8DFD8');
    wallGrad.addColorStop(0.5, '#DECFC4');
    wallGrad.addColorStop(0.75, '#523A28');
    wallGrad.addColorStop(1, '#2E1E14');
  }
  ctx.fillStyle = wallGrad;
  ctx.fillRect(0, 0, w, h);

  // 2. Ceiling Coving & Mouldings (Top 25%)
  drawCeilingCove(ctx, w, h, isNight, '#D4AF37');

  // 3. Hardwood Flooring & Royal Persian Rug (Bottom 30%)
  drawHardwoodFloor(ctx, w, h, isNight);
  drawPersianRug(ctx, w, h, isNight, w * 0.45, h * 0.72, w * 0.35, h * 0.22);

  // 4. Windows overlooking Mall Road (x: 65% to 85%)
  drawGrandWindows(ctx, w, h, isNight, w * 0.65, w * 0.88, "Mall Road Skyline");

  // 5. Master Emperor Bed (Center x: 10% to 35%)
  drawPresidentialBed(ctx, w, h, isNight, w * 0.1, w * 0.38);

  // 6. Presidential Living Salon & Crystal Chandelier
  drawSalonSeating(ctx, w, h, isNight, w * 0.42, w * 0.62);

  // 7. Crystal Chandelier in Ceiling (Top center)
  drawCrystalChandelier(ctx, w * 0.25, h * 0.18, isNight, 80);
  drawCrystalChandelier(ctx, w * 0.52, h * 0.18, isNight, 100);

  // 8. Italian Marble Doorway to Bath (x: 90% to 100%)
  drawMarbleArch(ctx, w * 0.9, w * 0.98, h, isNight);

  // 9. Ambient Lighting Glow & Vignette
  drawLightingGlow(ctx, w, h, isNight);
}

function drawExecutiveSuite(ctx, w, h, isNight) {
  // Sophisticated wood paneling & diplomatic styling
  const wallGrad = ctx.createLinearGradient(0, 0, 0, h);
  if (isNight) {
    wallGrad.addColorStop(0, '#131822');
    wallGrad.addColorStop(0.5, '#202838');
    wallGrad.addColorStop(1, '#15110E');
  } else {
    wallGrad.addColorStop(0, '#F2EFE9');
    wallGrad.addColorStop(0.5, '#DDD5CA');
    wallGrad.addColorStop(1, '#3A2B20');
  }
  ctx.fillStyle = wallGrad;
  ctx.fillRect(0, 0, w, h);

  drawCeilingCove(ctx, w, h, isNight, '#C5A059');
  drawHardwoodFloor(ctx, w, h, isNight);

  // Executive Conference Desk
  drawExecutiveDesk(ctx, w, h, isNight, w * 0.32, w * 0.58);

  // Executive King Bed
  drawExecutiveBed(ctx, w, h, isNight, w * 0.05, w * 0.28);

  // Poolside Garden View Windows
  drawGrandWindows(ctx, w, h, isNight, w * 0.65, w * 0.86, "Avari Garden Pool View");

  drawLightingGlow(ctx, w, h, isNight);
}

function drawJuniorSuite(ctx, w, h, isNight) {
  const wallGrad = ctx.createLinearGradient(0, 0, 0, h);
  wallGrad.addColorStop(0, isNight ? '#121622' : '#F7F4F0');
  wallGrad.addColorStop(0.5, isNight ? '#222B3D' : '#E6DDD5');
  wallGrad.addColorStop(1, isNight ? '#15120E' : '#453526');
  ctx.fillStyle = wallGrad;
  ctx.fillRect(0, 0, w, h);

  drawCeilingCove(ctx, w, h, isNight, '#B89758');
  drawHardwoodFloor(ctx, w, h, isNight);
  drawExecutiveBed(ctx, w, h, isNight, w * 0.1, w * 0.35);
  drawSalonSeating(ctx, w, h, isNight, w * 0.45, w * 0.65);
  drawGrandWindows(ctx, w, h, isNight, w * 0.72, w * 0.9, "Courtyard Garden");
  drawLightingGlow(ctx, w, h, isNight);
}

function drawLadyAvariRoom(ctx, w, h, isNight) {
  // Warm rose quartz, champagne gold, Hollywood vanity
  const wallGrad = ctx.createLinearGradient(0, 0, 0, h);
  if (isNight) {
    wallGrad.addColorStop(0, '#1F151E');
    wallGrad.addColorStop(0.5, '#30202E');
    wallGrad.addColorStop(1, '#1A1218');
  } else {
    wallGrad.addColorStop(0, '#FCF7F8');
    wallGrad.addColorStop(0.5, '#F5E6E8');
    wallGrad.addColorStop(1, '#50383E');
  }
  ctx.fillStyle = wallGrad;
  ctx.fillRect(0, 0, w, h);

  drawCeilingCove(ctx, w, h, isNight, '#E5B9B5');
  drawHardwoodFloor(ctx, w, h, isNight);

  // Hollywood Glam Vanity
  drawHollywoodVanity(ctx, w, h, isNight, w * 0.12, w * 0.28);

  // Lady Avari Bed
  drawExecutiveBed(ctx, w, h, isNight, w * 0.38, w * 0.62);

  // Windows with floral balcony
  drawGrandWindows(ctx, w, h, isNight, w * 0.7, w * 0.9, "Lush Balcony Gardens");
  drawLightingGlow(ctx, w, h, isNight, '#FFDEE2');
}

function drawDeluxeRoom(ctx, w, h, isNight) {
  const wallGrad = ctx.createLinearGradient(0, 0, 0, h);
  wallGrad.addColorStop(0, isNight ? '#11151E' : '#FAF8F5');
  wallGrad.addColorStop(0.5, isNight ? '#1E2533' : '#E8E2D8');
  wallGrad.addColorStop(1, isNight ? '#14110E' : '#3E2E20');
  ctx.fillStyle = wallGrad;
  ctx.fillRect(0, 0, w, h);

  drawCeilingCove(ctx, w, h, isNight, '#C5A059');
  drawHardwoodFloor(ctx, w, h, isNight);
  drawExecutiveBed(ctx, w, h, isNight, w * 0.12, w * 0.38);
  drawExecutiveDesk(ctx, w, h, isNight, w * 0.45, w * 0.65);
  drawGrandWindows(ctx, w, h, isNight, w * 0.72, w * 0.92, "Mall Road Greenery");
  drawLightingGlow(ctx, w, h, isNight);
}

function drawDynastyRestaurant(ctx, w, h, isNight) {
  // Rich Imperial Chinese Red, gold dragon trims, round banquet tables, Chinese lanterns
  const wallGrad = ctx.createLinearGradient(0, 0, 0, h);
  wallGrad.addColorStop(0, '#180B0B');
  wallGrad.addColorStop(0.4, isNight ? '#3A0E12' : '#5E181D');
  wallGrad.addColorStop(0.7, isNight ? '#22080A' : '#3B1014');
  wallGrad.addColorStop(1, '#0F0506');
  ctx.fillStyle = wallGrad;
  ctx.fillRect(0, 0, w, h);

  // Red & Gold Imperial ceiling beams
  ctx.fillStyle = '#D4AF37';
  for (let i = 0; i < w; i += 180) {
    ctx.fillRect(i, 0, 16, h * 0.22);
  }

  // Chinese red lanterns glowing
  for (let i = 120; i < w; i += 320) {
    drawChineseLantern(ctx, i, h * 0.26, isNight);
  }

  // Round banquet tables with Lazy Susans
  drawRoundBanquetTable(ctx, w * 0.25, h * 0.7, 160, isNight);
  drawRoundBanquetTable(ctx, w * 0.65, h * 0.72, 180, isNight);
  drawRoundBanquetTable(ctx, w * 0.9, h * 0.7, 140, isNight);

  drawLightingGlow(ctx, w, h, isNight, '#FFB040');
}

function drawGrandBallroom(ctx, w, h, isNight) {
  // Soaring gilded mirrors, ivory and gold drapery, massive crystal chandeliers
  const wallGrad = ctx.createLinearGradient(0, 0, 0, h);
  wallGrad.addColorStop(0, isNight ? '#161925' : '#F9F7F2');
  wallGrad.addColorStop(0.4, isNight ? '#25293A' : '#ECE5D8');
  wallGrad.addColorStop(0.7, isNight ? '#1B1E2B' : '#DFD4C2');
  wallGrad.addColorStop(1, '#0D0E14');
  ctx.fillStyle = wallGrad;
  ctx.fillRect(0, 0, w, h);

  // Gilded architectural arches & Venetian mirrors along walls
  for (let i = 60; i < w; i += 280) {
    drawGildedMirrorArch(ctx, i, h * 0.2, 200, h * 0.5, isNight);
  }

  // Polished marble ballroom floor with reflection
  const floorGrad = ctx.createLinearGradient(0, h * 0.68, 0, h);
  floorGrad.addColorStop(0, isNight ? '#181A24' : '#E8E1D5');
  floorGrad.addColorStop(1, isNight ? '#0B0D12' : '#C7BCA8');
  ctx.fillStyle = floorGrad;
  ctx.fillRect(0, h * 0.68, w, h * 0.32);

  // Banquet tables with ivory covers & gold Chiavari chairs
  for (let i = 100; i < w; i += 340) {
    drawBanquetGalaTable(ctx, i, h * 0.78, 110, isNight);
  }

  // Grand crystal chandeliers
  drawCrystalChandelier(ctx, w * 0.2, h * 0.18, isNight, 120);
  drawCrystalChandelier(ctx, w * 0.5, h * 0.18, isNight, 140);
  drawCrystalChandelier(ctx, w * 0.8, h * 0.18, isNight, 120);

  drawLightingGlow(ctx, w, h, isNight, '#F7D68B');
}

function drawPoolsideOasis(ctx, w, h, isNight) {
  // Outdoor tropical pool sanctuary, sky, palm trees, crystal blue water
  const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.5);
  if (isNight) {
    skyGrad.addColorStop(0, '#060A14');
    skyGrad.addColorStop(0.5, '#0E1726');
    skyGrad.addColorStop(1, '#1A2942');
  } else {
    skyGrad.addColorStop(0, '#4A90E2');
    skyGrad.addColorStop(0.6, '#87CEEB');
    skyGrad.addColorStop(1, '#E0F2FE');
  }
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, h * 0.5);

  // Hotel Facade in background
  ctx.fillStyle = isNight ? '#151922' : '#E8DED1';
  ctx.fillRect(w * 0.15, h * 0.22, w * 0.7, h * 0.28);
  // Architectural windows on hotel facade
  ctx.fillStyle = isNight ? '#F7D488' : '#3B4F6B';
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 18; col++) {
      ctx.fillRect(w * 0.18 + col * 45, h * 0.25 + row * 30, 22, 16);
    }
  }

  // Palm trees
  drawPalmTree(ctx, w * 0.1, h * 0.45);
  drawPalmTree(ctx, w * 0.35, h * 0.46);
  drawPalmTree(ctx, w * 0.65, h * 0.46);
  drawPalmTree(ctx, w * 0.9, h * 0.45);

  // Olympic Heated Swimming Pool (Bottom half)
  const poolGrad = ctx.createLinearGradient(0, h * 0.52, 0, h);
  if (isNight) {
    poolGrad.addColorStop(0, '#0E3A59');
    poolGrad.addColorStop(0.5, '#08638C');
    poolGrad.addColorStop(1, '#052A42');
  } else {
    poolGrad.addColorStop(0, '#38BDF8');
    poolGrad.addColorStop(0.4, '#0284C7');
    poolGrad.addColorStop(1, '#0369A1');
  }
  ctx.fillStyle = poolGrad;
  ctx.fillRect(0, h * 0.52, w, h * 0.48);

  // Pool caustics & underwater lights
  ctx.strokeStyle = isNight ? 'rgba(56, 189, 248, 0.4)' : 'rgba(255, 255, 255, 0.5)';
  ctx.lineWidth = 3;
  for (let i = 0; i < 40; i++) {
    ctx.beginPath();
    const cx = (i * 55) % w;
    const cy = h * 0.58 + (i * 12) % (h * 0.38);
    ctx.arc(cx, cy, 30 + (i % 25), 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawXpressSuite(ctx, w, h, isNight) {
  // Contemporary Gulberg boutique, modern charcoal & warm teakwood
  const wallGrad = ctx.createLinearGradient(0, 0, 0, h);
  wallGrad.addColorStop(0, isNight ? '#0F131C' : '#F1F3F7');
  wallGrad.addColorStop(0.5, isNight ? '#1A212E' : '#E2E6EE');
  wallGrad.addColorStop(1, isNight ? '#12141B' : '#2A2F3A');
  ctx.fillStyle = wallGrad;
  ctx.fillRect(0, 0, w, h);

  // Modern linear cove lighting
  ctx.fillStyle = isNight ? '#FF9A76' : '#FFD2B8';
  ctx.fillRect(0, h * 0.12, w, 6);

  drawModernFlooring(ctx, w, h, isNight);

  // Modern King Bed
  drawModernXpressBed(ctx, w, h, isNight, w * 0.08, w * 0.34);

  // Smart Executive Lounge Sofa & Media Bar
  drawModernSofa(ctx, w, h, isNight, w * 0.4, w * 0.65);

  // Floor-to-ceiling Gulberg skyline glass
  drawGrandWindows(ctx, w, h, isNight, w * 0.7, w * 0.94, "Gulberg Commercial Skyline");

  drawLightingGlow(ctx, w, h, isNight, '#FF8A65');
}

function drawXpressExecutive(ctx, w, h, isNight) {
  const wallGrad = ctx.createLinearGradient(0, 0, 0, h);
  wallGrad.addColorStop(0, isNight ? '#10141D' : '#F3F4F6');
  wallGrad.addColorStop(0.5, isNight ? '#1B2230' : '#E5E7EB');
  wallGrad.addColorStop(1, isNight ? '#11131A' : '#374151');
  ctx.fillStyle = wallGrad;
  ctx.fillRect(0, 0, w, h);

  drawModernFlooring(ctx, w, h, isNight);
  drawModernXpressBed(ctx, w, h, isNight, w * 0.12, w * 0.38);
  drawModernWorkDesk(ctx, w, h, isNight, w * 0.44, w * 0.68);
  drawGrandWindows(ctx, w, h, isNight, w * 0.72, w * 0.94, "Noor Jehan Road View");
  drawLightingGlow(ctx, w, h, isNight, '#FF9E80');
}

function drawXpressDining(ctx, w, h, isNight) {
  // The Coffee Shop Anglo-Indian bistro decor
  const wallGrad = ctx.createLinearGradient(0, 0, 0, h);
  wallGrad.addColorStop(0, '#151821');
  wallGrad.addColorStop(0.5, isNight ? '#241D1E' : '#ECE5DF');
  wallGrad.addColorStop(1, '#1A1816');
  ctx.fillStyle = wallGrad;
  ctx.fillRect(0, 0, w, h);

  drawModernFlooring(ctx, w, h, isNight);

  // Modern cafe tables with pendant lights
  for (let i = 120; i < w; i += 280) {
    drawCafeTable(ctx, i, h * 0.72, isNight);
    drawPendantLight(ctx, i, h * 0.28, isNight);
  }

  drawLightingGlow(ctx, w, h, isNight, '#FFA726');
}

function drawXpressMeeting(ctx, w, h, isNight) {
  const wallGrad = ctx.createLinearGradient(0, 0, 0, h);
  wallGrad.addColorStop(0, '#141824');
  wallGrad.addColorStop(0.5, '#1F2738');
  wallGrad.addColorStop(1, '#111319');
  ctx.fillStyle = wallGrad;
  ctx.fillRect(0, 0, w, h);

  // Modern conference table
  ctx.fillStyle = '#2D3748';
  ctx.fillRect(w * 0.2, h * 0.65, w * 0.6, h * 0.18);
  // Presentation screen on wall
  ctx.fillStyle = '#4A5568';
  ctx.fillRect(w * 0.35, h * 0.25, w * 0.3, h * 0.28);
  ctx.fillStyle = '#63B3ED';
  ctx.font = '24px sans-serif';
  ctx.fillText("AVARI XPRESS BUSINESS HUB", w * 0.38, h * 0.4);

  drawLightingGlow(ctx, w, h, isNight, '#63B3ED');
}

// -------------------------------------------------------------
// HELPER DRAWING MODULES
// -------------------------------------------------------------

function drawCeilingCove(ctx, w, h, isNight, goldColor) {
  ctx.fillStyle = isNight ? '#0C0E14' : '#FDFBF7';
  ctx.fillRect(0, 0, w, h * 0.15);

  ctx.fillStyle = goldColor;
  ctx.fillRect(0, h * 0.145, w, 4);

  ctx.fillStyle = isNight ? 'rgba(212, 175, 55, 0.25)' : 'rgba(212, 175, 55, 0.4)';
  ctx.fillRect(0, h * 0.148, w, 12);
}

function drawHardwoodFloor(ctx, w, h, isNight) {
  const floorY = h * 0.68;
  const floorH = h * 0.32;

  const floorGrad = ctx.createLinearGradient(0, floorY, 0, h);
  if (isNight) {
    floorGrad.addColorStop(0, '#241913');
    floorGrad.addColorStop(1, '#0F0906');
  } else {
    floorGrad.addColorStop(0, '#69472E');
    floorGrad.addColorStop(1, '#3D2717');
  }
  ctx.fillStyle = floorGrad;
  ctx.fillRect(0, floorY, w, floorH);

  // Hardwood planks perspective lines
  ctx.strokeStyle = isNight ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.15)';
  ctx.lineWidth = 2;
  for (let x = 0; x < w; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, floorY);
    ctx.lineTo(x * 1.3 - w * 0.15, h);
    ctx.stroke();
  }
}

function drawModernFlooring(ctx, w, h, isNight) {
  const floorY = h * 0.68;
  const floorGrad = ctx.createLinearGradient(0, floorY, 0, h);
  floorGrad.addColorStop(0, isNight ? '#181C24' : '#C7CBD4');
  floorGrad.addColorStop(1, isNight ? '#0D1017' : '#949BA8');
  ctx.fillStyle = floorGrad;
  ctx.fillRect(0, floorY, w, h * 0.32);
}

function drawPersianRug(ctx, w, h, isNight, x, y, rw, rh) {
  ctx.fillStyle = isNight ? '#5C1717' : '#8A2020';
  ctx.fillRect(x, y, rw, rh);

  ctx.strokeStyle = '#D4AF37';
  ctx.lineWidth = 4;
  ctx.strokeRect(x + 10, y + 10, rw - 20, rh - 20);

  ctx.fillStyle = '#D4AF37';
  ctx.beginPath();
  ctx.ellipse(x + rw / 2, y + rh / 2, rw * 0.25, rh * 0.3, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawGrandWindows(ctx, w, h, isNight, x1, x2, label) {
  const winW = x2 - x1;
  const winY = h * 0.2;
  const winH = h * 0.48;

  // Window exterior sky & scenery
  const skyGrad = ctx.createLinearGradient(0, winY, 0, winY + winH);
  if (isNight) {
    skyGrad.addColorStop(0, '#090F1C');
    skyGrad.addColorStop(0.7, '#152238');
    skyGrad.addColorStop(1, '#27384E');
  } else {
    skyGrad.addColorStop(0, '#4EA1F3');
    skyGrad.addColorStop(0.5, '#92C5F8');
    skyGrad.addColorStop(1, '#D8EAF9');
  }
  ctx.fillStyle = skyGrad;
  ctx.fillRect(x1, winY, winW, winH);

  // Lahore Skyline buildings & greenery through window
  ctx.fillStyle = isNight ? '#121A28' : '#4E7250';
  ctx.fillRect(x1, winY + winH * 0.65, winW, winH * 0.35);

  if (isNight) {
    // City lights twinkling
    ctx.fillStyle = '#FFEAA7';
    for (let i = 0; i < 35; i++) {
      const lx = x1 + (i * 27) % winW;
      const ly = winY + winH * 0.7 + (i * 11) % (winH * 0.25);
      ctx.fillRect(lx, ly, 3, 3);
    }
  }

  // Window frame & mullions
  ctx.strokeStyle = isNight ? '#252F3F' : '#E8DFD8';
  ctx.lineWidth = 8;
  ctx.strokeRect(x1, winY, winW, winH);

  // Vertical panes
  const panes = 4;
  for (let p = 1; p < panes; p++) {
    const px = x1 + (winW / panes) * p;
    ctx.beginPath();
    ctx.moveTo(px, winY);
    ctx.lineTo(px, winY + winH);
    ctx.stroke();
  }

  // Luxurious Velvet Drapes framing the windows
  const drapeGradL = ctx.createLinearGradient(x1 - 40, 0, x1 + 25, 0);
  drapeGradL.addColorStop(0, isNight ? '#2E1515' : '#6A2A2A');
  drapeGradL.addColorStop(1, isNight ? '#160808' : '#3E1414');
  ctx.fillStyle = drapeGradL;
  ctx.fillRect(x1 - 35, winY - 15, 60, winH + 30);

  const drapeGradR = ctx.createLinearGradient(x2 - 25, 0, x2 + 40, 0);
  drapeGradR.addColorStop(0, isNight ? '#160808' : '#3E1414');
  drapeGradR.addColorStop(1, isNight ? '#2E1515' : '#6A2A2A');
  ctx.fillStyle = drapeGradR;
  ctx.fillRect(x2 - 25, winY - 15, 60, winH + 30);
}

function drawPresidentialBed(ctx, w, h, isNight, x1, x2) {
  const bedW = x2 - x1;
  const bedY = h * 0.42;
  const bedH = h * 0.36;

  // Carved Mahogany Headboard
  ctx.fillStyle = isNight ? '#24140D' : '#4A2A1A';
  ctx.fillRect(x1, bedY, bedW, bedH * 0.45);
  ctx.strokeStyle = '#D4AF37';
  ctx.lineWidth = 3;
  ctx.strokeRect(x1 + 10, bedY + 10, bedW - 20, bedH * 0.45 - 20);

  // Bed Base & Mattress
  ctx.fillStyle = isNight ? '#1E1815' : '#2C1D14';
  ctx.fillRect(x1 + 15, bedY + bedH * 0.35, bedW - 30, bedH * 0.65);

  // 500-thread count White Egyptian Cotton Duvet
  const duvetGrad = ctx.createLinearGradient(0, bedY + bedH * 0.45, 0, bedY + bedH);
  duvetGrad.addColorStop(0, isNight ? '#C8CDD8' : '#FFFFFF');
  duvetGrad.addColorStop(1, isNight ? '#8E96A6' : '#E2DDD8');
  ctx.fillStyle = duvetGrad;
  ctx.fillRect(x1 + 25, bedY + bedH * 0.45, bedW - 50, bedH * 0.52);

  // Gold Silk Bed Runner
  ctx.fillStyle = '#D4AF37';
  ctx.fillRect(x1 + 25, bedY + bedH * 0.8, bedW - 50, 30);

  // Luxury Pillows
  ctx.fillStyle = isNight ? '#E4E7ED' : '#FFFFFF';
  ctx.fillRect(x1 + 45, bedY + bedH * 0.38, bedW * 0.38, 40);
  ctx.fillRect(x1 + bedW * 0.52, bedY + bedH * 0.38, bedW * 0.38, 40);

  // Bedside Tables with glowing brass lamps
  drawBedsideTable(ctx, x1 - 50, bedY + bedH * 0.4, isNight);
  drawBedsideTable(ctx, x2 + 10, bedY + bedH * 0.4, isNight);
}

function drawExecutiveBed(ctx, w, h, isNight, x1, x2) {
  const bedW = x2 - x1;
  const bedY = h * 0.44;
  const bedH = h * 0.34;

  ctx.fillStyle = isNight ? '#211B18' : '#453830';
  ctx.fillRect(x1, bedY, bedW, bedH * 0.4);

  const duvetGrad = ctx.createLinearGradient(0, bedY + bedH * 0.38, 0, bedY + bedH);
  duvetGrad.addColorStop(0, isNight ? '#CBD1DC' : '#FFFFFF');
  duvetGrad.addColorStop(1, isNight ? '#98A1B0' : '#EDE8E4');
  ctx.fillStyle = duvetGrad;
  ctx.fillRect(x1 + 20, bedY + bedH * 0.38, bedW - 40, bedH * 0.58);

  ctx.fillStyle = '#C5A059';
  ctx.fillRect(x1 + 20, bedY + bedH * 0.82, bedW - 40, 24);

  drawBedsideTable(ctx, x1 - 40, bedY + bedH * 0.42, isNight);
  drawBedsideTable(ctx, x2 + 5, bedY + bedH * 0.42, isNight);
}

function drawModernXpressBed(ctx, w, h, isNight, x1, x2) {
  const bedW = x2 - x1;
  const bedY = h * 0.45;
  const bedH = h * 0.32;

  // Modern fabric tufted headboard
  ctx.fillStyle = isNight ? '#252C3A' : '#4B5563';
  ctx.fillRect(x1, bedY, bedW, bedH * 0.38);

  // Crisp modern bed
  ctx.fillStyle = isNight ? '#D1D5DB' : '#FFFFFF';
  ctx.fillRect(x1 + 15, bedY + bedH * 0.35, bedW - 30, bedH * 0.62);

  // Warm coral accent throw
  ctx.fillStyle = '#E05A47';
  ctx.fillRect(x1 + 15, bedY + bedH * 0.78, bedW - 30, 26);
}

function drawBedsideTable(ctx, x, y, isNight) {
  ctx.fillStyle = isNight ? '#1C1613' : '#3B2A1E';
  ctx.fillRect(x, y, 40, 90);

  // Lamp base
  ctx.fillStyle = '#D4AF37';
  ctx.fillRect(x + 16, y - 35, 8, 35);
  // Lampshade
  ctx.fillStyle = isNight ? '#FFF3D1' : '#FFFFFF';
  ctx.beginPath();
  ctx.moveTo(x + 5, y - 35);
  ctx.lineTo(x + 35, y - 35);
  ctx.lineTo(x + 30, y - 65);
  ctx.lineTo(x + 10, y - 65);
  ctx.closePath();
  ctx.fill();

  // Lamp glow aura
  if (isNight) {
    const lampGlow = ctx.createRadialGradient(x + 20, y - 50, 5, x + 20, y - 50, 70);
    lampGlow.addColorStop(0, 'rgba(255, 230, 150, 0.7)');
    lampGlow.addColorStop(1, 'rgba(255, 230, 150, 0)');
    ctx.fillStyle = lampGlow;
    ctx.fillRect(x - 50, y - 120, 140, 140);
  }
}

function drawSalonSeating(ctx, w, h, isNight, x1, x2) {
  const sw = x2 - x1;
  const sy = h * 0.58;

  // Velvet Chesterfield Sofa
  ctx.fillStyle = isNight ? '#1E2536' : '#2B3952';
  ctx.fillRect(x1, sy, sw, 80);

  // Armrests
  ctx.fillStyle = isNight ? '#151B27' : '#1F2A3D';
  ctx.fillRect(x1 - 15, sy - 15, 25, 95);
  ctx.fillRect(x2 - 10, sy - 15, 25, 95);

  // Coffee Table with marble top
  ctx.fillStyle = isNight ? '#2E2824' : '#E8E4DF';
  ctx.fillRect(x1 + sw * 0.2, sy + 75, sw * 0.6, 30);
  ctx.fillStyle = '#D4AF37';
  ctx.fillRect(x1 + sw * 0.22, sy + 105, sw * 0.56, 6);
}

function drawModernSofa(ctx, w, h, isNight, x1, x2) {
  const sw = x2 - x1;
  const sy = h * 0.58;
  ctx.fillStyle = isNight ? '#293241' : '#4F5D75';
  ctx.fillRect(x1, sy, sw, 75);
  ctx.fillStyle = '#E05A47';
  ctx.fillRect(x1 + 25, sy + 15, 45, 45);
}

function drawExecutiveDesk(ctx, w, h, isNight, x1, x2) {
  const dw = x2 - x1;
  const dy = h * 0.56;

  ctx.fillStyle = isNight ? '#221914' : '#453023';
  ctx.fillRect(x1, dy, dw, 70);

  // Laptop / Desk Accessories
  ctx.fillStyle = '#718096';
  ctx.fillRect(x1 + dw * 0.4, dy - 25, 45, 25);
  ctx.fillStyle = isNight ? '#A0AEC0' : '#E2E8F0';
  ctx.fillRect(x1 + dw * 0.42, dy - 22, 41, 20);

  // Leather Executive Chair
  ctx.fillStyle = isNight ? '#151312' : '#261F1A';
  ctx.fillRect(x1 + dw * 0.35, dy + 25, 55, 65);
}

function drawModernWorkDesk(ctx, w, h, isNight, x1, x2) {
  const dw = x2 - x1;
  const dy = h * 0.57;
  ctx.fillStyle = isNight ? '#1F2937' : '#E5E7EB';
  ctx.fillRect(x1, dy, dw, 65);
  ctx.fillStyle = '#10B981';
  ctx.fillRect(x1 + 30, dy - 20, 40, 20);
}

function drawHollywoodVanity(ctx, w, h, isNight, x1, x2) {
  const vw = x2 - x1;
  const vy = h * 0.38;

  // Vanity Table
  ctx.fillStyle = isNight ? '#2A1F26' : '#F3E8EE';
  ctx.fillRect(x1, vy + 80, vw, 60);

  // Backlit Mirror
  ctx.fillStyle = isNight ? '#EAD6DE' : '#FFFFFF';
  ctx.fillRect(x1 + 20, vy - 60, vw - 40, 130);

  // Hollywood lightbulbs around mirror
  for (let i = 0; i < 8; i++) {
    const ly = vy - 50 + i * 22;
    ctx.fillStyle = '#FFF8E7';
    ctx.beginPath();
    ctx.arc(x1 + 12, ly, 6, 0, Math.PI * 2);
    ctx.arc(x2 - 12, ly, 6, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawMarbleArch(ctx, x1, x2, h, isNight) {
  const mw = x2 - x1;
  ctx.fillStyle = isNight ? '#2A2E38' : '#DEDBD5';
  ctx.fillRect(x1, h * 0.25, mw, h * 0.48);

  ctx.strokeStyle = '#D4AF37';
  ctx.lineWidth = 3;
  ctx.strokeRect(x1 + 5, h * 0.27, mw - 10, h * 0.44);
}

function drawCrystalChandelier(ctx, x, y, isNight, radius) {
  // Center ceiling rose
  ctx.fillStyle = '#D4AF37';
  ctx.beginPath();
  ctx.arc(x, y, 22, 0, Math.PI * 2);
  ctx.fill();

  // Chandelier crystal strands
  ctx.strokeStyle = isNight ? 'rgba(255, 235, 175, 0.75)' : 'rgba(212, 175, 55, 0.6)';
  ctx.lineWidth = 2;
  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2;
    const cx = x + Math.cos(angle) * radius * 0.7;
    const cy = y + Math.sin(angle) * (radius * 0.35) + 30;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(cx, cy);
    ctx.stroke();

    // Crystal teardrop
    ctx.fillStyle = isNight ? '#FFF9E6' : '#FFFFFF';
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Chandelier glow
  const glow = ctx.createRadialGradient(x, y + 25, 10, x, y + 25, radius * 1.6);
  glow.addColorStop(0, isNight ? 'rgba(255, 230, 160, 0.65)' : 'rgba(255, 240, 200, 0.4)');
  glow.addColorStop(1, 'rgba(255, 230, 160, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(x - radius * 1.6, y - radius * 1.6 + 25, radius * 3.2, radius * 3.2);
}

function drawChineseLantern(ctx, x, y, isNight) {
  ctx.fillStyle = isNight ? '#D62828' : '#E63946';
  ctx.beginPath();
  ctx.ellipse(x, y, 24, 32, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#D4AF37';
  ctx.fillRect(x - 12, y - 36, 24, 6);
  ctx.fillRect(x - 12, y + 30, 24, 6);
  // Gold tassel
  ctx.strokeStyle = '#D4AF37';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y + 36);
  ctx.lineTo(x, y + 60);
  ctx.stroke();
}

function drawRoundBanquetTable(ctx, x, y, r, isNight) {
  ctx.fillStyle = isNight ? '#381619' : '#8B263E';
  ctx.beginPath();
  ctx.ellipse(x, y, r, r * 0.45, 0, 0, Math.PI * 2);
  ctx.fill();

  // Lazy Susan turntable in center
  ctx.fillStyle = '#D4AF37';
  ctx.beginPath();
  ctx.ellipse(x, y, r * 0.45, r * 0.2, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawGildedMirrorArch(ctx, x, y, w, h, isNight) {
  ctx.strokeStyle = '#D4AF37';
  ctx.lineWidth = 5;
  ctx.strokeRect(x, y, w, h);

  ctx.fillStyle = isNight ? 'rgba(40, 50, 70, 0.35)' : 'rgba(240, 240, 245, 0.45)';
  ctx.fillRect(x + 5, y + 5, w - 10, h - 10);
}

function drawBanquetGalaTable(ctx, x, y, r, isNight) {
  ctx.fillStyle = isNight ? '#DCD8CF' : '#FFFFFF';
  ctx.beginPath();
  ctx.ellipse(x, y, r, r * 0.4, 0, 0, Math.PI * 2);
  ctx.fill();

  // Centerpiece rose arrangement
  ctx.fillStyle = '#C92A2A';
  ctx.beginPath();
  ctx.arc(x, y - 8, 16, 0, Math.PI * 2);
  ctx.fill();
}

function drawPalmTree(ctx, x, y) {
  // Trunk
  ctx.strokeStyle = '#5C4033';
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(x, y + 160);
  ctx.quadraticCurveTo(x + 15, y + 60, x, y);
  ctx.stroke();

  // Fronds
  ctx.strokeStyle = '#2D6A4F';
  ctx.lineWidth = 6;
  for (let a = -0.8; a <= 0.8; a += 0.25) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + Math.cos(a) * 90, y - Math.sin(a) * 40 - 20, x + Math.cos(a) * 120, y - 10);
    ctx.stroke();
  }
}

function drawCafeTable(ctx, x, y, isNight) {
  ctx.fillStyle = isNight ? '#2A2421' : '#D1C7BD';
  ctx.beginPath();
  ctx.ellipse(x, y, 55, 24, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawPendantLight(ctx, x, y, isNight) {
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.lineTo(x, y);
  ctx.stroke();

  ctx.fillStyle = '#E05A47';
  ctx.beginPath();
  ctx.arc(x, y + 10, 16, 0, Math.PI);
  ctx.fill();
}

function drawLightingGlow(ctx, w, h, isNight, customGlow) {
  const glowColor = customGlow || (isNight ? 'rgba(212, 175, 55, 0.12)' : 'rgba(255, 255, 255, 0.08)');
  ctx.fillStyle = glowColor;
  ctx.fillRect(0, 0, w, h);
}
