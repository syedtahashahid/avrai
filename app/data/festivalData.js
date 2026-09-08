export const FESTIVALS = [
  {
    slug: 'luminous-lahore',
    title: 'Luminous Lahore',
    category: 'Cultural escape',
    location: 'Avari Hotel Lahore',
    dateLabel: 'Seasonal programme',
    status: 'Preview programme',
    summary: 'A considered weekend of heritage, dining, music, and quiet discovery on The Mall.',
    description: 'A concept programme for guests who want to experience Lahore through its food, history, and evening rituals, with optional accommodation and dining add-ons.',
    image: '/images/gold-card/avari-gold-dining.jpg',
    tags: ['Dining', 'Heritage', 'Weekend'],
    memberNote: 'Gold member access and inclusions are subject to programme terms.'
  },
  {
    slug: 'mountain-light-skardu',
    title: 'Mountain Light',
    category: 'Mountain escape',
    location: 'Avari Xpress Skardu',
    dateLabel: 'Dates to be announced',
    status: 'Interest list',
    summary: 'A northern itinerary built around still mornings, local landscapes, and restorative nights.',
    description: 'A future experience framework for a Skardu stay, with guided local discovery, flexible room packages, and a slower rhythm for mountain travellers.',
    image: '/images/gold-card/avari-gold-wellness.jpg',
    tags: ['Mountain', 'Leisure', 'Wellness'],
    memberNote: 'Property operation, availability, and programme details require Avari confirmation.'
  },
  {
    slug: 'golden-table',
    title: 'The Golden Table',
    category: 'Culinary series',
    location: 'Participating Avari dining venues',
    dateLabel: 'Monthly concept series',
    status: 'Preview programme',
    summary: 'A sequence of intimate dinners shaped around regional ingredients and signature Avari rooms.',
    description: 'A culinary experience concept connecting chef-led menus, hosted tables, and member invitations across participating properties.',
    image: '/images/gold-card/avari-gold-hero-banner.jpg',
    tags: ['Culinary', 'Members', 'Dining'],
    memberNote: 'Menus, venues, pricing, and member inclusions are illustrative until approved.'
  }
];

export function getFestivalBySlug(slug) {
  return FESTIVALS.find((festival) => festival.slug === slug);
}
