'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import BookingModal from './BookingModal';

export default function RoomBookingButton({ room, property, className = 'btn-luxury-gold' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" className={className} onClick={() => setIsOpen(true)}>
        <Calendar size={15} /> Book this room
      </button>
      <BookingModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectedRoom={room}
        property={property}
      />
    </>
  );
}

