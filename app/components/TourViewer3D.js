'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { getRoomTexture } from '../data/textureGen';
import { createSceneManifest } from '../lib/sceneManifest';
import {
  Maximize2,
  Minimize2,
  Sun,
  Moon,
  Compass,
  RotateCw,
  Info,
  Layers,
  MapPin,
  X,
  Volume2,
  VolumeX,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function TourViewer3D({
  currentRoom,
  allRooms,
  onSelectRoom,
  property,
  hideHeader = false
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Three.js instances
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const sphereMeshRef = useRef(null);
  const animationFrameId = useRef(null);

  // Interaction state
  const isUserInteracting = useRef(false);
  const onPointerDownPointerX = useRef(0);
  const onPointerDownPointerY = useRef(0);
  const onPointerDownLon = useRef(0);
  const onPointerDownLat = useRef(0);
  const lon = useRef(0);
  const lat = useRef(0);
  const targetLon = useRef(0);
  const targetLat = useRef(0);
  const fov = useRef(72);
  const targetFov = useRef(72);

  // Component UI state
  const [lightingMode, setLightingMode] = useState('day'); // 'day' | 'night'
  const [autoRotate, setAutoRotate] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const [activeWaypoint, setActiveWaypoint] = useState(currentRoom?.waypoints?.[0]?.id || null);
  const [hotspotScreenPositions, setHotspotScreenPositions] = useState([]);
  const [currentHeadingDeg, setCurrentHeadingDeg] = useState(0);

  const isLahore = property.id === 'avari-lahore';
  const sceneManifest = currentRoom ? createSceneManifest({ propertySlug: property.id, property, room: currentRoom }) : null;

  // -------------------------------------------------------------
  // THREE.JS INITIALIZATION
  // -------------------------------------------------------------
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(fov.current, width / height, 1, 1100);
    camera.target = new THREE.Vector3(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    rendererRef.current = renderer;

    // 4. Panoramic Inverted Sphere
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); // Invert inside-out for 360 viewer

    const initialTexture = getRoomTexture(sceneManifest?.fallbackSceneKey || currentRoom.tourSceneKey, lightingMode);
    const material = new THREE.MeshBasicMaterial({
      map: initialTexture
    });

    const sphereMesh = new THREE.Mesh(geometry, material);
    scene.add(sphereMesh);
    sphereMeshRef.current = sphereMesh;

    // 5. Render Loop with Smooth Inertia Damping
    const render = () => {
      animationFrameId.current = requestAnimationFrame(render);

      if (autoRotate && !isUserInteracting.current) {
        targetLon.current += 0.08; // Smooth ambient rotation
      }

      // Smooth lerping for rotation and zoom
      lon.current += (targetLon.current - lon.current) * 0.1;
      lat.current += (targetLat.current - lat.current) * 0.1;
      lat.current = Math.max(-85, Math.min(85, lat.current));

      fov.current += (targetFov.current - fov.current) * 0.12;
      camera.fov = fov.current;
      camera.updateProjectionMatrix();

      // Convert Spherical Coordinates (lon, lat) to Cartesian (x, y, z)
      const phi = THREE.MathUtils.degToRad(90 - lat.current);
      const theta = THREE.MathUtils.degToRad(lon.current);

      const targetX = 500 * Math.sin(phi) * Math.cos(theta);
      const targetY = 500 * Math.cos(phi);
      const targetZ = 500 * Math.sin(phi) * Math.sin(theta);

      camera.lookAt(targetX, targetY, targetZ);
      renderer.render(scene, camera);

      // Update Heading for Radar Minimap
      const normalizedLon = ((lon.current % 360) + 360) % 360;
      setCurrentHeadingDeg(normalizedLon);

      // Project 3D Hotspots to 2D Screen Positions
      if (sceneManifest?.hotspots && container) {
        const cWidth = container.clientWidth;
        const cHeight = container.clientHeight;

        const projected = sceneManifest.hotspots.map((spot) => {
          const sPhi = THREE.MathUtils.degToRad(90 - spot.pitch);
          const sTheta = THREE.MathUtils.degToRad(spot.yaw);

          const pos = new THREE.Vector3(
            -450 * Math.sin(sPhi) * Math.cos(sTheta),
            450 * Math.cos(sPhi),
            450 * Math.sin(sPhi) * Math.sin(sTheta)
          );

          // Test if hotspot is in front of camera
          const camDir = new THREE.Vector3();
          camera.getWorldDirection(camDir);
          const toSpot = pos.clone().normalize();
          const dot = camDir.dot(toSpot);

          if (dot > 0.15) {
            const screenPos = pos.clone().project(camera);
            const x = ((screenPos.x + 1) * cWidth) / 2;
            const y = ((-screenPos.y + 1) * cHeight) / 2;
            return { ...spot, x, y, visible: true };
          }
          return { ...spot, visible: false };
        });

        setHotspotScreenPositions(projected);
      }
    };

    render();

    // 6. Resize Listener
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update Texture when Room or Lighting Mode changes
  useEffect(() => {
    if (!sphereMeshRef.current || !currentRoom) return;
    const manifest = createSceneManifest({ propertySlug: property?.id || 'avari-lahore', property, room: currentRoom });
    const newTex = getRoomTexture(manifest.fallbackSceneKey, lightingMode);
    sphereMeshRef.current.material.map = newTex;
    sphereMeshRef.current.material.needsUpdate = true;
    setSelectedHotspot(null);

    // If room has default waypoint, align to it
    if (currentRoom.waypoints?.[0]) {
      targetLon.current = currentRoom.waypoints[0].yaw;
      targetLat.current = currentRoom.waypoints[0].pitch;
    }
  }, [currentRoom, lightingMode, property]);

  // -------------------------------------------------------------
  // MOUSE & TOUCH EVENT HANDLERS
  // -------------------------------------------------------------
  const handlePointerDown = (e) => {
    isUserInteracting.current = true;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    onPointerDownPointerX.current = clientX;
    onPointerDownPointerY.current = clientY;
    onPointerDownLon.current = targetLon.current;
    onPointerDownLat.current = targetLat.current;
  };

  const handlePointerMove = (e) => {
    if (!isUserInteracting.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    targetLon.current = (onPointerDownPointerX.current - clientX) * 0.18 + onPointerDownLon.current;
    targetLat.current = (clientY - onPointerDownPointerY.current) * 0.18 + onPointerDownLat.current;
  };

  const handlePointerUp = () => {
    isUserInteracting.current = false;
  };

  const handleWheel = (e) => {
    e.preventDefault();
    targetFov.current = Math.max(45, Math.min(95, targetFov.current + e.deltaY * 0.05));
  };

  // Switch to specific camera waypoint inside room
  const handleJumpWaypoint = (wp) => {
    setActiveWaypoint(wp.id);
    targetLon.current = wp.yaw;
    targetLat.current = wp.pitch;
    setSelectedHotspot(null);
  };

  // Toggle Fullscreen
  const handleToggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  return (
    <section id="tour-section" className="content-section" style={{ paddingTop: hideHeader ? '0' : '20px', paddingBottom: '0' }}>
      {/* Section Header */}
      {!hideHeader && (
        <div className="section-header">
          <div className="section-subtitle">
            {property.heroBadge}
          </div>
          <h2 className="section-title">
            Immersive 360° Experience
          </h2>
          <p className="section-description">
            Click and drag in 360 degrees to explore room dimensions, finishes, and panoramic views. Tap the floating gold markers to inspect handcrafted furnishings and luxury amenities.
          </p>
        </div>
      )}

      {/* Room Category Quick Selector Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        overflowX: 'auto',
        marginBottom: '18px',
        paddingBottom: '8px'
      }}>
        <span style={{
          fontSize: '0.8rem',
          fontFamily: 'var(--font-display)',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginRight: '8px',
          whiteSpace: 'nowrap'
        }}>
          Select Space:
        </span>
        {allRooms.map((room) => {
          const isActive = room.id === currentRoom.id;
          return (
            <button
              key={room.id}
              onClick={() => onSelectRoom(room)}
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                border: isActive
                  ? '1.5px solid var(--avari-blue)'
                  : '1px solid #CBD5E1',
                background: isActive
                  ? 'var(--avari-blue)'
                  : '#FFFFFF',
                color: isActive ? '#FFFFFF' : '#334155',
                fontSize: '0.82rem',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: isActive ? '0 2px 10px rgba(2, 124, 255, 0.25)' : '0 1px 3px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.2s ease'
              }}
            >
              {room.name}
              <span style={{
                marginLeft: '8px',
                fontSize: '0.72rem',
                color: isActive ? 'rgba(255, 255, 255, 0.9)' : '#64748B',
                fontWeight: 500
              }}>
                ({room.area})
              </span>
            </button>
          );
        })}
      </div>

      {/* 3D Viewport Frame */}
      <div
        ref={containerRef}
        className="tour-viewport-container"
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
        onWheel={handleWheel}
      >
        <canvas ref={canvasRef} className="tour-canvas" />

        {/* Floating Spatial 3D Hotspots */}
        {hotspotScreenPositions.map((spot) => {
          if (!spot.visible) return null;
          const isSelected = selectedHotspot?.id === spot.id;

          return (
            <div
              key={spot.id}
              className="spatial-hotspot-pin"
              style={{ left: `${spot.x}px`, top: `${spot.y}px` }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedHotspot(isSelected ? null : spot);
              }}
            >
              <div
                className="pin-core"
                style={{
                  background: isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral)',
                  boxShadow: isLahore ? 'var(--shadow-gold-glow)' : 'var(--shadow-coral-glow)'
                }}
              >
                <Sparkles size={16} />
                <div
                  className="pin-ripple"
                  style={{ borderColor: isLahore ? 'var(--avari-gold)' : 'var(--xpress-coral)' }}
                />
              </div>

              {/* Detail Card Popup */}
              {isSelected && (
                <div className="hotspot-card-popup" onClick={(e) => e.stopPropagation()}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div className="hotspot-category">{spot.category}</div>
                    <button
                      onClick={() => setSelectedHotspot(null)}
                      style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <div className="hotspot-title">{spot.title}</div>
                  <div className="hotspot-desc">{spot.description}</div>
                </div>
              )}
            </div>
          );
        })}

        {/* Top HUD Controls Overlay */}
        <div className="tour-hud-overlay">
          <div className="tour-hud-top">
            <div className="tour-badge-info">
              <div className="tour-badge-title">{currentRoom.name}</div>
              <div className="tour-badge-sub">
                {currentRoom.area} • {currentRoom.bed} • {currentRoom.view}
              </div>
            </div>

            <div className="tour-controls-bar">
              {/* Day / Night Lighting Mode Toggle */}
              <button
                onClick={() => setLightingMode(lightingMode === 'day' ? 'night' : 'day')}
                className={`hud-control-btn ${lightingMode === 'night' ? 'active' : ''}`}
                title={lightingMode === 'day' ? "Switch to Warm Evening Lighting" : "Switch to Sunlight Day Mode"}
              >
                {lightingMode === 'day' ? <Moon size={18} /> : <Sun size={18} />}
              </button>

              {/* Auto-Rotation Toggle */}
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`hud-control-btn ${autoRotate ? 'active' : ''}`}
                title={autoRotate ? "Pause Auto Rotation" : "Resume Auto Rotation"}
              >
                <RotateCw size={18} />
              </button>

              {/* Fullscreen Toggle */}
              <button
                onClick={handleToggleFullscreen}
                className="hud-control-btn"
                title="Toggle Fullscreen"
              >
                {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
            </div>
          </div>

          {/* Bottom HUD: Waypoints & Floorplan Radar */}
          <div className="tour-hud-bottom">
            {/* Multi-angle Waypoints Strip */}
            {currentRoom.waypoints && (
              <div className="tour-waypoints-strip">
                <span style={{
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-display)',
                  color: 'var(--text-muted)',
                  alignSelf: 'center',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginRight: '6px'
                }}>
                  View Angle:
                </span>
                {currentRoom.waypoints.map((wp) => (
                  <button
                    key={wp.id}
                    onClick={() => handleJumpWaypoint(wp)}
                    className={`waypoint-pill ${activeWaypoint === wp.id ? 'active' : ''}`}
                  >
                    {wp.label}
                  </button>
                ))}
              </div>
            )}

            {/* Interactive Radar Minimap */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(14px)',
              border: '1px solid #CBD5E1',
              borderRadius: '12px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)'
            }}>
              <div style={{
                position: 'relative',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(2, 124, 255, 0.08)',
                border: '1px solid #CBD5E1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Vision Cone Indicator rotating with Heading */}
                <div style={{
                  position: 'absolute',
                  width: '0',
                  height: '0',
                  borderLeft: '12px solid transparent',
                  borderRight: '12px solid transparent',
                  borderTop: '22px solid rgba(2, 124, 255, 0.5)',
                  top: '4px',
                  transform: `rotate(${currentHeadingDeg}deg)`,
                  transformOrigin: '50% 17px',
                  transition: 'transform 0.08s linear'
                }} />
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--avari-blue)',
                  zIndex: 2
                }} />
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Floorplan Radar
                </div>
                <div style={{ fontSize: '0.82rem', color: '#0F172A', fontWeight: 600 }}>
                  Heading {Math.round(currentHeadingDeg)}°
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

