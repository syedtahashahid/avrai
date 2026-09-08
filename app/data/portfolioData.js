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
    descriptor: 'Major flagship',
    image: '/images/hero-banner.jpg',
    status: 'Portfolio preview',
    sourceStatus: 'Room and facility fact sheet required'
  },
  'beach-luxury-karachi': {
    slug: 'beach-luxury-karachi',
    name: 'Beach Luxury Hotel',
    city: 'Karachi',
    category: 'Luxury / 4-star',
    descriptor: 'Waterfront resort-style',
    image: '/images/hero-banner.jpg',
    status: 'Portfolio preview',
    sourceStatus: 'Room and facility fact sheet required'
  },
  'avari-xpress-islamabad': {
    slug: 'avari-xpress-islamabad',
    name: 'Avari Xpress Islamabad',
    city: 'Islamabad',
    category: 'Business / boutique',
    descriptor: 'Capital city hotel',
    image: '/images/hero-banner.jpg',
    status: 'Portfolio preview',
    sourceStatus: 'Room and facility fact sheet required'
  },
  'avari-xpress-multan': {
    slug: 'avari-xpress-multan',
    name: 'Avari Xpress Multan',
    city: 'Multan',
    category: 'Business / modern',
    descriptor: 'City hotel',
    image: '/images/hero-banner.jpg',
    status: 'Portfolio preview',
    sourceStatus: 'Room and facility fact sheet required'
  },
  'avari-boutique-multan': {
    slug: 'avari-boutique-multan',
    name: 'Avari Boutique Multan',
    city: 'Multan',
    category: 'Boutique',
    descriptor: 'Boutique property',
    image: '/images/hero-banner.jpg',
    status: 'Portfolio preview',
    sourceStatus: 'Room and facility fact sheet required'
  },
  'avari-xpress-faisalabad': {
    slug: 'avari-xpress-faisalabad',
    name: 'Avari Xpress Faisalabad',
    city: 'Faisalabad',
    category: 'Business / modern',
    descriptor: 'City hotel',
    image: '/images/hero-banner.jpg',
    status: 'Portfolio preview',
    sourceStatus: 'Room and facility fact sheet required'
  },
  'avari-xpress-skardu': {
    slug: 'avari-xpress-skardu',
    name: 'Avari Xpress Skardu',
    city: 'Skardu, Gilgit-Baltistan',
    category: 'Mountain / leisure',
    descriptor: 'Northern Pakistan',
    image: '/images/hero-banner.jpg',
    status: 'Verification required',
    sourceStatus: 'Official operating status and inventory require confirmation'
  },
  'mountain-view-bhurban': {
    slug: 'mountain-view-bhurban',
    name: 'Mountain View Hotel Apartments',
    city: 'Bhurban / Murree',
    category: 'Mountain / serviced apartments',
    descriptor: 'Candidate Avari-managed stay',
    image: '/images/hero-banner.jpg',
    status: 'Verification required',
    sourceStatus: 'Management and operating status require confirmation'
  },
  'international-portfolio': {
    slug: 'international-portfolio',
    name: 'International Avari destinations',
    city: 'Outside Pakistan',
    category: 'Future portfolio',
    descriptor: 'Ready for verified destinations',
    image: '/images/hero-banner.jpg',
    status: 'Coming soon',
    sourceStatus: 'Current international property list requires confirmation'
  }
};

export function getPortfolioRegion(regionId) {
  return PORTFOLIO_REGIONS.find((region) => region.id === regionId) || PORTFOLIO_REGIONS[0];
}
