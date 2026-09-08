export const PORTFOLIO_REGIONS = [
  {
    id: 'lahore',
    label: 'Lahore',
    eyebrow: 'Two distinct Avari addresses',
    description: 'Heritage grandeur on The Mall and contemporary business hospitality in Gulberg.',
    properties: ['avari-lahore', 'avari-xpress-gulberg']
  },
  {
    id: 'islamabad',
    label: 'Islamabad',
    eyebrow: 'Capital city stays',
    description: 'A calm city base for business, government, and weekend itineraries.',
    properties: ['avari-xpress-islamabad']
  },
  {
    id: 'karachi',
    label: 'Karachi',
    eyebrow: 'City and waterfront',
    description: 'Flagship city hospitality and a waterfront resort-style address.',
    properties: ['avari-towers-karachi', 'beach-luxury-karachi']
  },
  {
    id: 'multan-faisalabad',
    label: 'South & Central',
    eyebrow: 'Growing city portfolio',
    description: 'Business, boutique, and city stays across Multan and Faisalabad.',
    properties: ['avari-xpress-multan', 'avari-boutique-multan', 'avari-xpress-faisalabad']
  },
  {
    id: 'north',
    label: 'North',
    eyebrow: 'Mountain and leisure',
    description: 'A future-facing collection for northern landscapes and slower escapes.',
    properties: ['avari-xpress-skardu', 'mountain-view-bhurban']
  },
  {
    id: 'international',
    label: 'International',
    eyebrow: 'Beyond Pakistan',
    description: 'A portfolio space ready for verified international Avari destinations.',
    properties: ['international-portfolio']
  }
];

export const PORTFOLIO_PROPERTIES = {
  'avari-lahore': {
    slug: 'avari-lahore',
    name: 'Avari Hotel Lahore',
    city: 'Lahore',
    category: 'Luxury / 5-star',
    descriptor: 'Major heritage flagship',
    image: '/images/lahore-facade.jpg',
    status: 'Explore now',
    detailPath: '/hotels/avari-hotel-lahore',
    sourceStatus: 'Detailed demo content available'
  },
  'avari-xpress-gulberg': {
    slug: 'avari-xpress-gulberg',
    name: 'Avari Xpress Gulberg',
    city: 'Lahore',
    category: 'Business / modern',
    descriptor: 'Contemporary city hotel',
    image: '/images/xpress-facade.jpg',
    status: 'Explore now',
    detailPath: '/hotels/avari-xpress-gulberg',
    sourceStatus: 'Detailed demo content available'
  },
  'avari-towers-karachi': {
    slug: 'avari-towers-karachi',
    name: 'Avari Towers',
    city: 'Karachi',
    category: 'Luxury / 5-star',
    descriptor: 'Major flagship skyscraper & tropical oasis',
    image: '/images/karachi-towers.jpg',
    status: 'Explore demo',
    sourceStatus: 'Preview showcase with mock rooms & 3D tour'
  },
  'beach-luxury-karachi': {
    slug: 'beach-luxury-karachi',
    name: 'Beach Luxury Hotel',
    city: 'Karachi',
    category: 'Luxury / 4-star',
    descriptor: 'Waterfront resort & tropical gardens',
    image: '/images/gold-card/avari-gold-dining.jpg',
    status: 'Explore demo',
    sourceStatus: 'Preview showcase with mock rooms & 3D tour'
  },
  'avari-xpress-islamabad': {
    slug: 'avari-xpress-islamabad',
    name: 'Avari Xpress Islamabad',
    city: 'Islamabad',
    category: 'Business / boutique',
    descriptor: 'Capital city executive address',
    image: '/images/gold-card/avari-gold-vip-reception.jpg',
    status: 'Explore demo',
    sourceStatus: 'Preview showcase with mock rooms & 3D tour'
  },
  'avari-xpress-multan': {
    slug: 'avari-xpress-multan',
    name: 'Avari Xpress Multan',
    city: 'Multan',
    category: 'Business / modern',
    descriptor: 'City of saints central hotel',
    image: '/images/gold-card/avari-gold-hero-banner.jpg',
    status: 'Explore demo',
    sourceStatus: 'Preview showcase with mock rooms & 3D tour'
  },
  'avari-boutique-multan': {
    slug: 'avari-boutique-multan',
    name: 'Avari Boutique Multan',
    city: 'Multan',
    category: 'Boutique',
    descriptor: 'Intimate bespoke residence',
    image: '/images/dynasty-dining.jpg',
    status: 'Explore demo',
    sourceStatus: 'Preview showcase with mock rooms & 3D tour'
  },
  'avari-xpress-faisalabad': {
    slug: 'avari-xpress-faisalabad',
    name: 'Avari Xpress Faisalabad',
    city: 'Faisalabad',
    category: 'Business / modern',
    descriptor: 'Industrial hub city hotel',
    image: '/images/xpress-facade.jpg',
    status: 'Explore demo',
    sourceStatus: 'Preview showcase with mock rooms & 3D tour'
  },
  'avari-xpress-skardu': {
    slug: 'avari-xpress-skardu',
    name: 'Avari Xpress Skardu',
    city: 'Skardu, Gilgit-Baltistan',
    category: 'Mountain / leisure',
    descriptor: 'Northern alpine sanctuary',
    image: '/images/gold-card/avari-gold-wellness.jpg',
    status: 'Explore demo',
    sourceStatus: 'Preview showcase with mock rooms & 3D tour'
  },
  'mountain-view-bhurban': {
    slug: 'mountain-view-bhurban',
    name: 'Mountain View Hotel Apartments',
    city: 'Bhurban / Murree',
    category: 'Mountain / serviced apartments',
    descriptor: 'Scenic pine hills retreat',
    image: '/images/hero-banner.jpg',
    status: 'Explore demo',
    sourceStatus: 'Preview showcase with mock rooms & 3D tour'
  },
  'international-portfolio': {
    slug: 'international-portfolio',
    name: 'International Avari destinations',
    city: 'Dubai / Toronto',
    category: 'Global portfolio',
    descriptor: 'Global hospitality network',
    image: '/images/gold-card/avari-gold-black-tiers.jpg',
    status: 'Explore demo',
    sourceStatus: 'Preview showcase with mock rooms & 3D tour'
  }
};

export function getPortfolioRegion(regionId) {
  return PORTFOLIO_REGIONS.find((region) => region.id === regionId) || PORTFOLIO_REGIONS[0];
}

