'use client';

import { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';


import BookingBar from './BookingBar';
import TourViewer3D from './TourViewer3D';
import RoomCatalog from './RoomCatalog';
import DiningHub from './DiningHub';
import BanquetCalc from './BanquetCalc';
import WellnessHub from './WellnessHub';
import BookingModal from './BookingModal';
import TableModal from './TableModal';

function buildProperty(portfolioProperty, mockData) {
  const rooms = mockData.rooms.map((room) => ({
    ...room,
    pricePerNight: room.price,
    priceNumber: 0,
    tourSceneKey: `${portfolioProperty.slug}-${room.id}`,
    hotspots: [{ id: `${room.id}-welcome`, pitch: 0, yaw: 20, title: 'Room overview', category: 'Experience', description: 'Explore the room layout, finishes, and guest details in the interactive preview.' }],
    waypoints: [{ id: `${room.id}-center`, label: 'Room overview', yaw: 20, pitch: 0 }]
  }));

  return {
    id: portfolioProperty.slug,
    name: portfolioProperty.name,
    shortName: portfolioProperty.name,
    category: portfolioProperty.category,
    tagline: mockData.tagline,
    description: mockData.description,
    coverImage: portfolioProperty.image,
    location: portfolioProperty.city,
    rooms,
    dining: [
      {
        id: `${portfolioProperty.slug}-dining`,
        name: `${portfolioProperty.name} All-Day Dining`,
        cuisine: 'Avari dining preview',
        badge: 'Portfolio preview',
        timing: 'Breakfast, lunch and dinner',
        description: 'A mock Avari dining venue ready for approved menu, hours, imagery, and reservation details.',
        signatureDishes: ['Local seasonal menu', 'International favourites', 'Chef selection'],
        tourSceneKey: `${portfolioProperty.slug}-dining`,
        has3DTour: true
      }
    ],
    banquets: [
      {
        id: `${portfolioProperty.slug}-events`,
        name: `${portfolioProperty.name} Events & Meetings`,
        type: 'Meetings, celebrations and private events',
        capacityMax: 180,
        area: 'Flexible event space',
        description: 'A mock venue profile for meetings, celebrations, and private gatherings. Official capacity and layouts require confirmation.',
        layouts: { banquet: 120, theater: 180, cocktail: 220, classroom: 80, uShape: 40 },
        tourSceneKey: `${portfolioProperty.slug}-events`,
        has3DTour: true
      }
    ],
    wellness: [
      {
        id: `${portfolioProperty.slug}-wellness`,
        name: 'Health Club & Guest Wellness',
        highlight: 'Portfolio preview',
        description: 'A mock wellness profile for fitness, recovery, and guest wellbeing services.',
        tourSceneKey: `${portfolioProperty.slug}-wellness`,
        has3DTour: true
      }
    ],
    services: [
      { title: 'Avari Concierge', icon: 'Key', description: 'Local recommendations, guest assistance, and stay planning.' },
      { title: 'Dining and in-room service', icon: 'Coffee', description: 'Comfort, dining, and service pathways ready for property-specific details.' },
      { title: 'Transport assistance', icon: 'Car', description: 'Airport and local transport options subject to property confirmation.' },
      { title: 'Connected guest support', icon: 'Wifi', description: 'Wi-Fi, digital requests, and service support throughout the stay.' }
    ]
  };
}

export default function PortfolioHotelExperience({ portfolioProperty, mockData }) {
  const property = buildProperty(portfolioProperty, mockData);
  const [currentRoom, setCurrentRoom] = useState(property.rooms[0]);
  const [bookingRoom, setBookingRoom] = useState(null);
  const [tableVenue, setTableVenue] = useState(null);

  const launchTour = (room) => {
    setCurrentRoom(room);
    document.getElementById('portfolio-tour-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const launchVenueTour = (tourSceneKey, venueName) => {
    setCurrentRoom({
      id: `venue-${tourSceneKey}`,
      name: venueName,
      tourSceneKey,
      area: 'Signature space',
      occupancy: 'Preview venue',
      bed: 'Event setup',
      view: property.location,
      hotspots: [{ id: 'venue-overview', pitch: 0, yaw: 20, title: venueName, category: 'Venue highlight', description: `Explore the ${venueName} preview.` }],
      waypoints: [{ id: 'venue-center', label: 'Venue overview', yaw: 20, pitch: 0 }]
    });
    document.getElementById('portfolio-tour-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      <section className="luxury-hero-section portfolio-hotel-hero" style={{ backgroundImage: `url('${portfolioProperty.image}')`, minHeight: '65vh', paddingBottom: '80px' }}>
        <div className="hero-gradient-overlay" />
        <div className="property-contact-strip"><span><MapPin size={14} /> {portfolioProperty.city}</span><span><Phone size={14} /> Reservations details to be confirmed</span></div>
        <BookingBar defaultHotel={portfolioProperty.slug} />
      </section>
      <div className="portfolio-hotel-tabs">
        <a href="#portfolio-tour-section">3D building tour</a><a href="#rooms-section">Rooms and suites ({property.rooms.length})</a><a href="#dining-section">Dining</a><a href="#banquets-section">Halls and events</a><a href="#wellness-section">Wellness and services</a>
      </div>
      <section id="portfolio-tour-section" className="portfolio-hotel-tour-wrap">
        <TourViewer3D currentRoom={currentRoom} allRooms={property.rooms} onSelectRoom={launchTour} property={property} />
      </section>
      <RoomCatalog property={property} currentRoom={currentRoom} onLaunchTour={launchTour} onBookRoom={setBookingRoom} />
      <DiningHub property={property} onLaunchVenueTour={launchVenueTour} onOpenTableModal={setTableVenue} />
      <BanquetCalc property={property} onLaunchVenueTour={launchVenueTour} onOpenBookingModal={setBookingRoom} />
      <WellnessHub property={property} onLaunchVenueTour={launchVenueTour} />
      <BookingModal isOpen={!!bookingRoom} onClose={() => setBookingRoom(null)} selectedRoom={bookingRoom} property={property} />
      <TableModal isOpen={!!tableVenue} onClose={() => setTableVenue(null)} venue={tableVenue} />
      
    </div>
  );
}
