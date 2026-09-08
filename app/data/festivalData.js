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
    slug: 'basant-lahore',
    title: 'Basant in Lahore',
    category: 'Seasonal celebration',
    location: 'Lahore and participating Avari venues',
    dateLabel: 'Seasonal dates to be confirmed',
    status: 'Preview programme',
    summary: 'A colour-filled Lahore weekend with rooftop views, regional food, music, and family moments.',
    description: 'A future-facing Basant programme concept for guests who want to pair a Lahore stay with curated dining, safe family activities, and a city itinerary.',
    image: '/images/lahore-facade.jpg',
    tags: ['Basant', 'Lahore', 'Family'],
    memberNote: 'Event permissions, dates, venues, and safety requirements require confirmation.'
  },
  {
    slug: 'eid-hospitality-collection',
    title: 'Eid Hospitality Collection',
    category: 'Religious and family',
    location: 'Participating Avari properties in Pakistan',
    dateLabel: 'Eid dates vary by lunar calendar',
    status: 'Preview programme',
    summary: 'Thoughtful Eid stays with family dining, festive rooms, gifting, and late-night hospitality.',
    description: 'A portfolio-wide seasonal collection that can combine rooms, breakfast or sehri, Eid dining, family gatherings, and transfer services.',
    image: '/images/gold-card/avari-gold-welcome-kit.jpg',
    tags: ['Eid', 'Family', 'Dining'],
    memberNote: 'Menus, room packages, prayer facilities, and participating properties require approval.'
  },
  {
    slug: 'christmas-new-year-lahore',
    title: 'Christmas & New Year at Avari',
    category: 'International seasonal',
    location: 'Avari Hotel Lahore and participating properties',
    dateLabel: 'December programme dates to be confirmed',
    status: 'Preview programme',
    summary: 'Festive tables, elegant evenings, family celebrations, and a new year made memorable.',
    description: 'A seasonal hospitality collection for Christmas lunches, winter dinners, New Year celebrations, and stay packages for local and international guests.',
    image: '/images/gold-card/avari-gold-dining.jpg',
    tags: ['Christmas', 'New Year', 'Culinary'],
    memberNote: 'Religious, cultural, menu, pricing, and venue details require property approval.'
  },
  {
    slug: 'ramadan-nights',
    title: 'Ramadan Nights',
    category: 'Culinary and spiritual',
    location: 'Participating Avari restaurants',
    dateLabel: 'Ramadan dates vary by lunar calendar',
    status: 'Preview programme',
    summary: 'Iftar, sehri, generous tables, and quiet hospitality shaped around the month of Ramadan.',
    description: 'A dining-first programme framework for iftar gatherings, sehri service, family tables, corporate hosting, and stay packages.',
    image: '/images/gold-card/avari-gold-dining.jpg',
    tags: ['Ramadan', 'Iftar', 'Sehri'],
    memberNote: 'Menus, timings, pricing, and Gold Card privileges require confirmation.'
  },
  {
    slug: 'pakistan-day-weekend',
    title: 'Pakistan Day Weekend',
    category: 'National celebration',
    location: 'Islamabad, Lahore, Karachi, and participating properties',
    dateLabel: 'March programme dates to be confirmed',
    status: 'Preview programme',
    summary: 'A long weekend of national spirit, local cuisine, city discovery, and family stays.',
    description: 'A multi-city experience concept connecting city hotels with local itineraries, festive dining, and short breaks.',
    image: '/images/hero-banner.jpg',
    tags: ['Pakistan Day', 'City break', 'Family'],
    memberNote: 'City programming, event partners, and availability require confirmation.'
  },
  {
    slug: 'independence-day-escape',
    title: 'Independence Day Escape',
    category: 'National celebration',
    location: 'Avari destinations across Pakistan',
    dateLabel: 'August programme dates to be confirmed',
    status: 'Preview programme',
    summary: 'A celebratory stay shaped around local flavours, city lights, and a distinctly Pakistani welcome.',
    description: 'A portfolio-wide August programme concept for families, returning guests, and international visitors seeking a celebratory short escape.',
    image: '/images/xpress-facade.jpg',
    tags: ['Independence Day', 'Pakistan', 'Stay'],
    memberNote: 'Participating properties, event schedules, and offer terms require confirmation.'
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

