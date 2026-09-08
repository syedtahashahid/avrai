/**
 * Official TravelClick (Amadeus / iHotelier) Reservation Engine Integration for Avari Hotels
 * Base URL: https://bookings.travelclick.com/14412?
 *
 * Example target:
 * https://bookings.travelclick.com/14412?Adults=1&Children=&dateIn=09/08/26&domain=avari.com&HotelID=14412&LanguageID=1&Length=1#/accommodation/room
 */

/**
 * Format date as MM/DD/YY for TravelClick
 */
export function formatTravelClickDate(dateStr) {
  if (!dateStr) {
    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const yy = String(now.getFullYear()).slice(-2);
    return `${mm}/${dd}/${yy}`;
  }

  if (typeof dateStr === 'string' && dateStr.includes('-')) {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const yyyy = parts[0];
      const mm = parts[1].padStart(2, '0');
      const dd = parts[2].padStart(2, '0');
      const yy = yyyy.slice(-2);
      return `${mm}/${dd}/${yy}`;
    }
  }

  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) {
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const yy = String(d.getFullYear()).slice(-2);
    return `${mm}/${dd}/${yy}`;
  }

  return '09/15/26';
}

/**
 * Calculate length of stay in nights
 */
export function calculateStayLength(checkInStr, checkOutStr) {
  try {
    const dIn = new Date(checkInStr);
    const dOut = new Date(checkOutStr);
    const diffTime = dOut.getTime() - dIn.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  } catch (e) {
    return 1;
  }
}

/**
 * Generates the complete TravelClick redirection URL
 */
export function getTravelClickBookingUrl({
  hotelId = '14412',
  checkIn = '2026-09-15',
  checkOut = '2026-09-18',
  adults = 1,
  children = '',
  rooms = 1
} = {}) {
  // If property is Avari Lahore, hotelId is 14412
  let resolvedHotelId = '14412';
  if (hotelId === '14412' || hotelId === 'avari-lahore') {
    resolvedHotelId = '14412';
  } else if (hotelId === 'avari-xpress-gulberg') {
    resolvedHotelId = '14412';
  } else if (hotelId) {
    resolvedHotelId = hotelId;
  }

  const dateInFormatted = formatTravelClickDate(checkIn);
  const length = calculateStayLength(checkIn, checkOut);

  const baseUrl = `https://bookings.travelclick.com/${resolvedHotelId}?`;

  const queryParams = [
    `Adults=${encodeURIComponent(adults || 1)}`,
    `Children=${children !== undefined && children !== null ? encodeURIComponent(children) : ''}`,
    `dateIn=${encodeURIComponent(dateInFormatted)}`,
    `domain=avari.com`,
    `HotelID=${encodeURIComponent(resolvedHotelId)}`,
    `LanguageID=1`,
    `Length=${encodeURIComponent(length)}`
  ].join('&');

  return `${baseUrl}${queryParams}#/accommodation/room`;
}

/**
 * Perform safe redirection to TravelClick
 */
export function redirectToTravelClick(params = {}, openNewTab = false) {
  const url = getTravelClickBookingUrl(params);
  if (openNewTab && typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else if (typeof window !== 'undefined') {
    window.location.href = url;
  }
  return url;
}
