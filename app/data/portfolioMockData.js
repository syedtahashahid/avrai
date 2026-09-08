import { PORTFOLIO_PROPERTIES } from './portfolioData';

const ROOM_TEMPLATES = {
  luxury: [
    ['Presidential Suite', 'Presidential', '110 m²', 'Up to 3 guests', 'King bed'],
    ['Executive Suite', 'Suite', '68 m²', 'Up to 3 guests', 'King bed'],
    ['Deluxe Room', 'Deluxe', '38 m²', 'Up to 2 guests', 'King or twin beds']
  ],
  business: [
    ['Executive Suite', 'Suite', '52 m²', 'Up to 3 guests', 'King bed'],
    ['Executive Room', 'Executive', '38 m²', 'Up to 2 guests', 'King bed'],
    ['Superior Room', 'Superior', '30 m²', 'Up to 2 guests', 'King or twin beds'],
    ['Standard Room', 'Standard', '25 m²', 'Up to 2 guests', 'Queen or twin beds']
  ],
  mountain: [
    ['Mountain View Suite', 'Suite', '58 m²', 'Up to 3 guests', 'King bed'],
    ['Panorama Room', 'Superior', '36 m²', 'Up to 2 guests', 'King or twin beds'],
    ['Valley Room', 'Standard', '28 m²', 'Up to 2 guests', 'Queen bed']
  ],
  serviced: [
    ['Two Bedroom Residence', 'Residence', '92 m²', 'Up to 5 guests', 'King and twin beds'],
    ['One Bedroom Residence', 'Residence', '58 m²', 'Up to 3 guests', 'King bed']
  ]
};

function categoryFor(property) {
  if (property.category.includes('Mountain')) return 'mountain';
  if (property.category.includes('serviced')) return 'serviced';
  if (property.category.includes('Business')) return 'business';
  return 'luxury';
}

export function getPortfolioMockData(propertySlug) {
  const property = PORTFOLIO_PROPERTIES[propertySlug];
  if (!property) return null;

  const rooms = ROOM_TEMPLATES[categoryFor(property)].map(([name, tier, area, occupancy, bed], index) => ({
    id: `${propertySlug}-${index + 1}`,
    name,
    tier,
    area,
    occupancy,
    bed,
    view: property.city.includes('Skardu') || property.city.includes('Bhurban') ? 'Mountain and valley outlook' : 'City or garden outlook',
    price: 'Rate on request',
    image: property.image,
    description: `${name} mock inventory for ${property.name}, prepared for the portfolio demonstration while official property content is being connected.`,
    highlights: ['High-speed Wi-Fi', 'Daily housekeeping', 'In-room dining access']
  }));

  return {
    tagline: `A considered ${property.category.toLowerCase()} stay in ${property.city}.`,
    description: `${property.name} is presented here as part of the Avari portfolio demonstration, with room types, facilities, and service pathways ready for official content replacement.`,
    rooms,
    facilities: [
      { type: 'Dining', name: `${property.name} All-Day Dining`, detail: 'Breakfast, local favourites, and international comfort dishes' },
      { type: 'Wellness', name: 'Health and fitness facilities', detail: 'Fitness, restorative spaces, and guest wellbeing services' },
      { type: 'Events', name: 'Meetings and celebrations', detail: 'Flexible spaces for business gatherings and private occasions' },
      { type: 'Service', name: 'Avari guest services', detail: 'Concierge, transport assistance, Wi-Fi, and in-room support' }
    ]
  };
}

