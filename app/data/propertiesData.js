// Comprehensive Data for Avari Hotel Lahore & Avari Xpress Gulberg

export const PROPERTIES_DATA = {
  "avari-lahore": {
    id: "avari-lahore",
    name: "Avari Hotel Lahore",
    shortName: "Avari Lahore",
    brandTier: "5-Star Luxury Flagship",
    tagline: "The Benchmark of Royal Heritage & Grand Hospitality on Mall Road",
    rating: 5,
    stars: "★★★★★",
    category: "Heritage Luxury Flagship",
    location: "87 Shahrah-e-Quaid-e-Azam (The Mall), Lahore",
    coordinates: "31.5583° N, 74.3312° E",
    checkIn: "14:00",
    checkOut: "12:00",
    heroBadge: "Flagship 5-Star Address",
    themeColor: "#D4AF37", // Imperial Gold
    accentColor: "#1A2536", // Royal Midnight Navy
    coverImage: "/images/lahore-exterior.jpg",
    description: "Nestled on Lahore's most celebrated historic avenue, Avari Hotel Lahore stands as an architectural icon of classical grandeur. For decades, it has been the sanctuary of royalty, world leaders, and discerning travelers, offering palatial suites, award-winning international dining, and an oasis of secluded tropical gardens in the heart of the city.",
    stats: {
      roomsCount: "188 Rooms & Suites",
      diningCount: "5 Signature Restaurants",
      banquetCapacity: "1,200+ Guests",
      tripAdvisorRating: "4.8 / 5.0",
      poolType: "Olympic Heated Pool"
    },
    rooms: [
      {
        id: "lahore-presidential",
        name: "Presidential Suite",
        tag: "Royal Grandeur",
        tier: "Presidential",
        area: "140 m² / 1,500 sq ft",
        occupancy: "Up to 3 Guests",
        bed: "Handcrafted Emperor King Bed",
        view: "Panoramic Mall Road & Historic Lahore Skyline",
        pricePerNight: "PKR 145,000",
        priceNumber: 145000,
        description: "The crown jewel of Pakistani hospitality. Features a lavish master sanctuary, private presidential salon with crystal chandeliers, an 8-seater formal dining room, private butler pantry, and an Italian Botticino marble spa bathroom with a chromotherapy hydro-jacuzzi.",
        highlights: [
          "Dedicated 24/7 Royal Butler Service",
          "Private 8-guest formal dining salon",
          "Italian Botticino marble spa with hydrotherapy Jacuzzi",
          "VIP access to top-floor Executive Club Lounge",
          "Complimentary Mercedes-Benz airport transfers"
        ],
        tourSceneKey: "lahore-presidential",
        hotspots: [
          {
            id: "p-bed",
            pitch: -5,
            yaw: 15,
            title: "Handcrafted Emperor Bedding",
            category: "Comfort",
            description: "Custom plush mattress wrapped in 500-thread-count Egyptian cotton, silk duvet, and an exclusive aromatherapy pillow menu."
          },
          {
            id: "p-bath",
            pitch: -8,
            yaw: 95,
            title: "Botticino Marble Spa & Jacuzzi",
            category: "Wellness",
            description: "Deep soaking chromotherapy jacuzzi, dual walk-in rainfall shower, heated towel rails, and bespoke Molton Brown amenities."
          },
          {
            id: "p-lounge",
            pitch: 2,
            yaw: 195,
            title: "Presidential Salon & 8-Seat Dining",
            category: "Living",
            description: "Gilded furnishings, Chesterfield velvet seating, custom crystal chandeliers, and Bang & Olufsen sound system."
          },
          {
            id: "p-window",
            pitch: 8,
            yaw: 275,
            title: "Panoramic Mall Road Skyline",
            category: "Scenery",
            description: "Acoustic soundproof panoramic bay windows overlooking historic colonial Mall Road and the private lush courtyard gardens."
          }
        ],
        waypoints: [
          { id: "wp-bed", label: "Master Bed Perspective", yaw: 15, pitch: -2 },
          { id: "wp-salon", label: "Presidential Salon", yaw: 195, pitch: 4 },
          { id: "wp-dining", label: "Private Dining Area", yaw: 140, pitch: 0 }
        ]
      },
      {
        id: "lahore-executive-suite",
        name: "Executive Diplomatic Suite",
        tag: "Diplomatic Choice",
        tier: "Suite",
        area: "75 m² / 807 sq ft",
        occupancy: "Up to 3 Guests",
        bed: "Super King-size Bed",
        view: "Lush Poolside Gardens & City Views",
        pricePerNight: "PKR 78,000",
        priceNumber: 78000,
        description: "Tailored for senior executives and diplomatic missions. Features a partitioned master bedroom and an expansive corporate salon with a 6-seat conference table, guest powder room, and high-speed multi-device media hub.",
        highlights: [
          "Separate master bedroom and 6-seat conference salon",
          "Executive Club Lounge privileges with high tea & evening canapés",
          "Nespresso Vertuo coffee bar with artisan teas",
          "Marble en-suite with soaking tub and separate rainfall stall"
        ],
        tourSceneKey: "lahore-executive-suite",
        hotspots: [
          {
            id: "es-bed",
            pitch: -4,
            yaw: 10,
            title: "Diplomatic King Sanctuary",
            category: "Comfort",
            description: "Hypoallergenic luxury bedding with sound-dampened acoustic walls for pristine restorative rest."
          },
          {
            id: "es-work",
            pitch: -2,
            yaw: 120,
            title: "Executive Conference Workstation",
            category: "Business",
            description: "Solid American oak desk, Herman Miller ergonomic chair, 500Mbps optical fiber Wi-Fi, and universal media hub."
          },
          {
            id: "es-lounge",
            pitch: 5,
            yaw: 220,
            title: "Corporate Hospitality Lounge",
            category: "Living",
            description: "Refined lounge area optimized for private client negotiations and in-suite dining."
          }
        ],
        waypoints: [
          { id: "wp-bed", label: "Master Bedroom", yaw: 10, pitch: 0 },
          { id: "wp-desk", label: "Executive Workstation", yaw: 120, pitch: 0 },
          { id: "wp-lounge", label: "Reception Lounge", yaw: 220, pitch: 0 }
        ]
      },
      {
        id: "lahore-junior-suite",
        name: "Junior Suite",
        tag: "Spacious Comfort",
        tier: "Junior Suite",
        area: "58 m² / 625 sq ft",
        occupancy: "2 Adults + 1 Child",
        bed: "King Bed or Twin Options",
        view: "Courtyard Gardens",
        pricePerNight: "PKR 54,000",
        priceNumber: 54000,
        description: "Seamlessly blends luxury and efficiency with an integrated lounge salon, walk-in dressing wardrobe, and marble bathroom. Perfect for extended business visits or leisure travelers seeking extra room to unwind.",
        highlights: [
          "Integrated lounge salon with plush seating",
          "Walk-in dressing closet with personal digital safe",
          "Smart 55\" 4K UHD TV with international channels",
          "Complimentary evening canapés at the Club Lounge"
        ],
        tourSceneKey: "lahore-junior-suite",
        hotspots: [
          {
            id: "js-bed",
            pitch: -3,
            yaw: 0,
            title: "Plush Bedding",
            category: "Comfort",
            description: "Premium orthopaedic mattress with silk-blend duvet and ambient mood lighting."
          },
          {
            id: "js-closet",
            pitch: 0,
            yaw: 90,
            title: "Walk-in Wardrobe",
            category: "Storage",
            description: "Spacious illuminated wardrobe with luggage bench, plush bathrobes, and steam iron."
          }
        ],
        waypoints: [
          { id: "wp-center", label: "Suite Center", yaw: 0, pitch: 0 },
          { id: "wp-living", label: "Living Alcove", yaw: 180, pitch: 0 }
        ]
      },
      {
        id: "lahore-lady-avari",
        name: "Lady Avari Room",
        tag: "Women Travelers Only",
        tier: "Specialty",
        area: "42 m² / 450 sq ft",
        occupancy: "1-2 Female Guests",
        bed: "King Bed",
        view: "Private Garden View",
        pricePerNight: "PKR 44,000",
        priceNumber: 44000,
        description: "A signature Avari hospitality innovation. Located on a dedicated, secured floor accessible only to female guests and staffed exclusively by female associates. Features an illuminated Hollywood makeup vanity, curated organic botanical amenities, fresh flower arrangements, and priority check-in.",
        highlights: [
          "Dedicated female-only floor with private card access",
          "Backlit Hollywood glam makeup vanity mirror",
          "Silk bathrobes, professional hair styling kit, and organic skincare",
          "Personal video door intercom & 24-hour female security escort"
        ],
        tourSceneKey: "lahore-lady-avari",
        hotspots: [
          {
            id: "la-vanity",
            pitch: 2,
            yaw: 45,
            title: "Hollywood Beauty Vanity",
            category: "Exclusivity",
            description: "LED-backlit salon mirror, professional Dyson ionic hair styling kit, and botanical skincare."
          },
          {
            id: "la-bed",
            pitch: -4,
            yaw: 160,
            title: "Sanctuary Bedding",
            category: "Comfort",
            description: "Plush king bed dressed in pure cotton sateen linens with fresh floral arrangements."
          }
        ],
        waypoints: [
          { id: "wp-vanity", label: "Beauty Vanity Corner", yaw: 45, pitch: 0 },
          { id: "wp-bed", label: "Bedside View", yaw: 160, pitch: 0 }
        ]
      },
      {
        id: "lahore-deluxe",
        name: "Deluxe Heritage Room",
        tag: "Classic Elegance",
        tier: "Deluxe",
        area: "38 m² / 410 sq ft",
        occupancy: "2 Guests",
        bed: "King Bed or Twin Beds",
        view: "The Mall or Pool Garden",
        pricePerNight: "PKR 36,000",
        priceNumber: 36000,
        description: "The classic luxury standard of Avari. Warm wood finishes, plush carpeting, sound-dampening windows, and an en-suite bathroom with deep tub and rain shower.",
        highlights: [
          "Signature Avari Sleep Experience mattress",
          "Ergonomic executive workstation with international plugs",
          "Complimentary high-speed Wi-Fi and daily newspaper",
          "24-Hour in-room gourmet dining"
        ],
        tourSceneKey: "lahore-deluxe",
        hotspots: [
          {
            id: "dx-bed",
            pitch: -4,
            yaw: 5,
            title: "Signature Sleep Experience",
            category: "Comfort",
            description: "Deep plush mattress with dual firmness pillows and bedside USB-C charging stations."
          },
          {
            id: "dx-desk",
            pitch: -2,
            yaw: 135,
            title: "Executive Workstation",
            category: "Business",
            description: "Solid wood study desk with task illumination and high-speed broadband."
          }
        ],
        waypoints: [
          { id: "wp-bed", label: "Room Center", yaw: 5, pitch: 0 },
          { id: "wp-view", label: "Window Side", yaw: 240, pitch: 0 }
        ]
      }
    ],
    dining: [
      {
        id: "dynasty",
        name: "Dynasty Chinese Restaurant",
        cuisine: "Authentic Szechuan & Cantonese",
        badge: "Award-Winning",
        timing: "Lunch: 12:30 - 15:30 | Dinner: 19:30 - 23:30",
        description: "Lahore's legendary temple of Chinese gastronomy for over 30 years. Renowned for authentic Dim Sum carts, Peking Duck carved tableside, sizzling Szechuan king prawns, and imperial oriental ambiance.",
        signatureDishes: ["Crispy Peking Duck with Mandarin Pancakes", "Sizzling Szechuan King Prawns", "Steamed Prawn Har Gow & Dim Sum Platter", "Dynasty Secret Chili Crab"],
        tourSceneKey: "venue-dynasty",
        has3DTour: true
      },
      {
        id: "fujiyama",
        name: "Fujiyama Japanese Restaurant",
        cuisine: "Live Teppanyaki & Master Sushi",
        badge: "Live Teppanyaki",
        timing: "Dinner: 19:00 - 23:30",
        description: "An authentic Japanese culinary theater featuring live master Teppanyaki grill counters, fresh Sashimi and Nigiri sushi bars, and private Tatami dining rooms surrounded by minimalist Zen decor.",
        signatureDishes: ["Live Teppanyaki Australian Beef Tenderloin", "Dragon Roll & Salmon Sashimi Platter", "Crispy Prawn Tempura Moriawase", "Miso Glazed Black Cod"],
        tourSceneKey: "venue-fujiyama",
        has3DTour: false
      },
      {
        id: "the-lakhnavi",
        name: "The Lakhnavi",
        cuisine: "Royal Avadhi & Mughlai Dum Pukht",
        badge: "Royal Heritage",
        timing: "Dinner: 19:30 - 23:30",
        description: "Honoring the legendary culinary traditions of the Nawabs of Avadh. Featuring slow-cooked Dum Pukht curries, Galawati melt-in-mouth kebabs, aromatic Dum Biryanis, and live instrumental sitar music in a regal palatial setting.",
        signatureDishes: ["Melt-in-mouth Galawati Kebab with Ulta Tawa Paratha", "Slow-cooked Dum Pukht Murgh Biryani", "Kakori Seekh Kebab", "Shahi Tukray with Saffron Rabri"],
        tourSceneKey: "venue-lakhnavi",
        has3DTour: false
      },
      {
        id: "kims",
        name: "Kim's Restaurant",
        cuisine: "24/7 International Buffet & À La Carte",
        badge: "Open 24 Hours",
        timing: "Open 24 Hours | Breakfast: 06:30 - 10:30",
        description: "The vibrant culinary hub of Avari Hotel Lahore. Kim's hosts Lahore's most celebrated grand breakfast buffet, opulent Sunday brunches, and an eclectic 24-hour à la carte menu crossing Continental and traditional Pakistani delicacies.",
        signatureDishes: ["Avari Grand Sunday Brunch", "Lahori Nihari & Fresh Kulchas", "Char-grilled Australian Ribeye Steak", "Handcrafted Wood-fired Artisanal Pizzas"],
        tourSceneKey: "venue-kims",
        has3DTour: false
      },
      {
        id: "tollington",
        name: "The Tollington",
        cuisine: "Open-Air Lahori BBQ & Karahi",
        badge: "Alfresco Dining",
        timing: "Seasonal Dinner: 19:30 - 23:30",
        description: "An authentic Lahori culinary journey under the stars in the hotel's lush outdoor gardens. Live charcoal spits grill sizzling mutton chops, seekh kebabs, and live Karahi prepared in wok-tossed desi ghee.",
        signatureDishes: ["Special Chappal Kebab", "Live Mutton Shinwari Karahi", "Charcoal Grilled Balochi Sajji", "Tandoori Roghani Naan"],
        tourSceneKey: "venue-tollington",
        has3DTour: false
      }
    ],
    banquets: [
      {
        id: "hall-of-mirrors",
        name: "The Hall of Mirrors",
        type: "Grand Ballroom & Royal Banquets",
        capacityMax: 800,
        area: "850 m² / 9,150 sq ft",
        description: "The historic crown jewel of Lahore high society. Adorned with magnificent Venetian crystal chandeliers, soaring 18-foot ceilings, and gilded mirror walls. The venue of choice for royal weddings, state banquets, and high-profile international summits.",
        layouts: {
          banquet: 650,
          theater: 800,
          cocktail: 1000,
          classroom: 420,
          uShape: 120
        },
        tourSceneKey: "venue-ballroom",
        has3DTour: true
      },
      {
        id: "grand-ballroom",
        name: "The Grand Ballroom",
        type: "Convention & Wedding Hall",
        capacityMax: 1200,
        area: "1,200 m² / 12,900 sq ft",
        description: "A state-of-the-art pillarless convention hall divisible into three soundproofed acoustic sections, equipped with 4K laser projection, intelligent RGB stage lighting, and a dedicated VIP private arrival driveway.",
        layouts: {
          banquet: 900,
          theater: 1200,
          cocktail: 1400,
          classroom: 600,
          uShape: 180
        },
        tourSceneKey: "venue-ballroom",
        has3DTour: true
      },
      {
        id: "khyber-boardroom",
        name: "Khyber & Indus Executive Boardrooms",
        type: "Corporate Meeting Suites",
        capacityMax: 40,
        area: "90 m² / 970 sq ft",
        description: "Prestigious boardroom suites fitted with high-definition multi-camera video conferencing, interactive touch displays, and leather executive seating.",
        layouts: {
          banquet: 25,
          theater: 40,
          cocktail: 50,
          classroom: 25,
          uShape: 24
        },
        tourSceneKey: "venue-boardroom",
        has3DTour: false
      }
    ],
    wellness: [
      {
        id: "poolside",
        name: "Olympic Outdoor Pool & Tropical Oasis",
        highlight: "Heated Year-Round Waters",
        description: "Surrounded by swaying palms and private cabanas, the heated outdoor swimming pool offers a tranquil urban sanctuary with poolside mocktail service and twilight underwater illumination.",
        tourSceneKey: "venue-pool",
        has3DTour: true
      },
      {
        id: "health-club",
        name: "Avari Health Club & Spa",
        highlight: "Sauna, Steam & Hydrotherapy Jacuzzi",
        description: "Equipped with state-of-the-art Technogym cardio and strength systems, certified fitness coaches, separate gentlemen and ladies sauna/steam complexes, and therapeutic sports massages.",
        tourSceneKey: "venue-spa",
        has3DTour: false
      },
      {
        id: "tennis-courts",
        name: "Championship Floodlit Tennis Courts",
        highlight: "Pro Clay & Hard Courts",
        description: "Tournament-grade tennis courts available for morning and evening play under high-powered floodlights with coaching staff available.",
        tourSceneKey: "venue-tennis",
        has3DTour: false
      }
    ],
    services: [
      {
        title: "Mercedes-Benz Airport Protocol",
        icon: "Car",
        description: "VIP transfers directly from Allama Iqbal International Airport with airside greeting and luggage protocol."
      },
      {
        title: "Golden Key Concierge",
        icon: "Key",
        description: "Bespoke itineraries, VIP passes, and private heritage tours of Old Walled City, Badshahi Mosque, and Lahore Fort."
      },
      {
        title: "Avari Executive Club Lounge",
        icon: "Coffee",
        description: "Exclusive top-floor sanctuary offering private check-in/out, all-day refreshments, afternoon tea, and evening canapés."
      },
      {
        title: "24-Hour Business Center",
        icon: "Briefcase",
        description: "High-speed color printing, secretarial support, private soundproof video pods, and courier facilities."
      }
    ]
  },

  "avari-xpress-gulberg": {
    id: "avari-xpress-gulberg",
    name: "Avari Xpress Gulberg",
    shortName: "Avari Xpress",
    brandTier: "4-Star Contemporary Boutique",
    tagline: "Smart Business Luxury in Lahore's Most Vibrant Commercial & Fashion District",
    rating: 4,
    stars: "★★★★",
    category: "Contemporary Boutique & Business",
    location: "1-E/II, Noor Jehan Road, Gulberg III, Lahore",
    coordinates: "31.5126° N, 74.3486° E",
    checkIn: "14:00",
    checkOut: "12:00",
    heroBadge: "Modern Gulberg Hub",
    themeColor: "#E05A47", // Vibrant Warm Coral / Modern Rust
    accentColor: "#1E293B", // Sleek Titanium Slate
    coverImage: "/images/xpress-exterior.jpg",
    description: "Located on prestigious Noor Jehan Road in Gulberg III, moments from MM Alam Road's fine dining strip, Main Boulevard corporate headquarters, and upscale shopping malls. Avari Xpress combines cutting-edge contemporary design, seamless smart business connectivity, and Avari's hallmark warmth in a boutique setting.",
    stats: {
      roomsCount: "80 Modern Rooms & Suites",
      diningCount: "The Coffee Shop & Express Gourmet",
      banquetCapacity: "Up to 300 Delegates",
      tripAdvisorRating: "4.6 / 5.0",
      businessHub: "6 Executive Meeting Pods"
    },
    rooms: [
      {
        id: "xpress-suite",
        name: "Xpress Executive Suite",
        tag: "Boutique Executive",
        tier: "Suite",
        area: "52 m² / 560 sq ft",
        occupancy: "Up to 3 Guests",
        bed: "Plush King Bed",
        view: "Vibrant Gulberg Skyline View",
        pricePerNight: "PKR 48,000",
        priceNumber: 48000,
        description: "The top accommodation at Avari Xpress. Boasts a stylish separate living lounge, modern executive work hub, designer kitchenette with microwave and Nespresso machine, and a contemporary bathroom with rain shower and smart lighting.",
        highlights: [
          "Separate modern lounge and dining alcove",
          "Designer kitchenette with microwave & Nespresso bar",
          "High-floor panoramic views of Gulberg commercial hub",
          "Complimentary express minibar and laundry service allowance"
        ],
        tourSceneKey: "xpress-suite",
        hotspots: [
          {
            id: "xs-bed",
            pitch: -5,
            yaw: 10,
            title: "Plush King Suite Bed",
            category: "Comfort",
            description: "Orthopaedic pocket-spring mattress with crisp micro-percale cotton linens and ambient headboard glow."
          },
          {
            id: "xs-work",
            pitch: -2,
            yaw: 110,
            title: "Smart Business Workstation",
            category: "Business",
            description: "High-speed 1Gbps dedicated connection, wireless phone charging pad, and ergonomic swivel chair."
          },
          {
            id: "xs-lounge",
            pitch: 3,
            yaw: 210,
            title: "Contemporary Executive Lounge",
            category: "Living",
            description: "Scandinavian-inspired sofa, 55\" 4K Smart TV with Netflix/YouTube casting, and Bluetooth acoustic soundbar."
          }
        ],
        waypoints: [
          { id: "wp-bed", label: "Master Bed Perspective", yaw: 10, pitch: 0 },
          { id: "wp-lounge", label: "Executive Living Lounge", yaw: 210, pitch: 0 }
        ]
      },
      {
        id: "xpress-executive",
        name: "Xpress Executive Room",
        tag: "Corporate Choice",
        tier: "Executive",
        area: "38 m² / 410 sq ft",
        occupancy: "2 Guests",
        bed: "King Bed",
        view: "Gulberg City View",
        pricePerNight: "PKR 34,000",
        priceNumber: 34000,
        description: "Engineered specifically for business travelers requiring elevated comfort. Includes high-floor location, complimentary high-speed optical Wi-Fi, express laundry pressing, and complimentary daily buffet breakfast.",
        highlights: [
          "High-floor placement with soundproof acoustic glazing",
          "Complimentary full breakfast buffet at The Coffee Shop",
          "Dedicated workstation with international multiport adapters",
          "Modern walk-in rain shower stall with herbal bath amenities"
        ],
        tourSceneKey: "xpress-executive",
        hotspots: [
          {
            id: "xe-bed",
            pitch: -4,
            yaw: 5,
            title: "Restful Executive Bed",
            category: "Comfort",
            description: "Plush king bed with dual-density pillows and touch-sensor reading lamps."
          },
          {
            id: "xe-desk",
            pitch: -1,
            yaw: 125,
            title: "Work Hub",
            category: "Business",
            description: "Generous work surface with USB-C charging stations and ergonomic task seating."
          }
        ],
        waypoints: [
          { id: "wp-bed", label: "Room Center", yaw: 5, pitch: 0 },
          { id: "wp-window", label: "City Skyline View", yaw: 245, pitch: 0 }
        ]
      },
      {
        id: "xpress-superior",
        name: "Xpress Superior Room",
        tag: "Modern Comfort",
        tier: "Superior",
        area: "32 m² / 345 sq ft",
        occupancy: "2 Guests",
        bed: "King Bed or Twin Beds",
        view: "Noor Jehan Road / City View",
        pricePerNight: "PKR 28,000",
        priceNumber: 28000,
        description: "A harmonious balance of modern aesthetics and comfortable practicality. Features rich wood textures, crisp linens, smart LED TV, and an invigorating rain shower.",
        highlights: [
          "Comfortable seating armchair and coffee table",
          "Complimentary high-speed Wi-Fi and tea/coffee kettle",
          "Electronic in-room safe and compact refrigerator",
          "Soundproof acoustic glass windows"
        ],
        tourSceneKey: "xpress-superior",
        hotspots: [
          {
            id: "xsup-bed",
            pitch: -4,
            yaw: 0,
            title: "Superior Bedding",
            category: "Comfort",
            description: "Plush mattress with hypoallergenic pillows and warm ambient accent lighting."
          }
        ],
        waypoints: [
          { id: "wp-bed", label: "Room Center", yaw: 0, pitch: 0 }
        ]
      },
      {
        id: "xpress-standard",
        name: "Xpress Standard Room",
        tag: "Smart Efficiency",
        tier: "Standard",
        area: "26 m² / 280 sq ft",
        occupancy: "1-2 Guests",
        bed: "Queen Bed or Twin Beds",
        view: "City View",
        pricePerNight: "PKR 22,000",
        priceNumber: 22000,
        description: "Clean, crisp, and thoughtfully designed for the on-the-go corporate guest or short weekend stay in Gulberg. Delivers premium sleep, spotless en-suite bathroom, and rapid connectivity.",
        highlights: [
          "Ultra-fast Wi-Fi connectivity",
          "Space-efficient modern work counter",
          "LED rainfall shower with power pressure",
          "Daily bottled mineral water and hot beverage tray"
        ],
        tourSceneKey: "xpress-standard",
        hotspots: [
          {
            id: "xst-bed",
            pitch: -3,
            yaw: 10,
            title: "Comfortable Queen Bed",
            category: "Comfort",
            description: "High-resilience mattress ensuring restful sleep after a productive day in Lahore."
          }
        ],
        waypoints: [
          { id: "wp-bed", label: "Room Center", yaw: 10, pitch: 0 }
        ]
      }
    ],
    dining: [
      {
        id: "xpress-coffee-shop",
        name: "The Coffee Shop & All-Day Dining",
        cuisine: "Anglo-Indian, Continental & Pakistani Fusion",
        badge: "Boutique Cafe",
        timing: "Open Daily: 06:30 - 23:30",
        description: "A lively, contemporary restaurant celebrating classic Anglo-Indian culinary heritage alongside international cafe classics. Features artisanal espresso roasts, made-to-order omelets, aromatic curries, and express lunches for business diners.",
        signatureDishes: ["Classic Anglo-Indian Mulligatawny Soup", "Dak Bungalow Chicken Curry", "Artisan Club Sandwich with Truffle Fries", "Rich Belgian Chocolate Fondant"],
        tourSceneKey: "venue-xpress-dining",
        has3DTour: true
      },
      {
        id: "xpress-room-service",
        name: "Express In-Room Dining",
        cuisine: "Round-the-Clock Comfort Food",
        badge: "24/7 Available",
        timing: "Available 24 Hours",
        description: "Enjoy hot, chef-prepared meals delivered to your room in 25 minutes or less, from midnight burgers to fresh breakfast trays.",
        signatureDishes: ["Xpress Gourmet Beef Burger", "Desi Breakfast Platter with Parathas", "Penne Arrabbiata with Garlic Bread"],
        tourSceneKey: "venue-xpress-dining",
        has3DTour: false
      }
    ],
    banquets: [
      {
        id: "gulberg-hall",
        name: "The Gulberg Conference Hall",
        type: "Corporate Seminars & Banquets",
        capacityMax: 300,
        area: "350 m² / 3,760 sq ft",
        description: "A sleek, pillarless conference space fully equipped with HD laser projection, synchronized ceiling audio, and flexible partitioning for multi-session corporate seminars and private banquets.",
        layouts: {
          banquet: 200,
          theater: 300,
          cocktail: 320,
          classroom: 160,
          uShape: 70
        },
        tourSceneKey: "venue-xpress-meeting",
        has3DTour: true
      },
      {
        id: "noor-jehan-boardroom",
        name: "Noor Jehan Executive Meeting Pods",
        type: "VIP Boardrooms (6 Pods)",
        capacityMax: 20,
        area: "45 m² / 485 sq ft",
        description: "Private boutique boardrooms featuring smart interactive touch displays, video conferencing bars, and dedicated coffee stations for executive meetings.",
        layouts: {
          banquet: 14,
          theater: 20,
          cocktail: 25,
          classroom: 16,
          uShape: 16
        },
        tourSceneKey: "venue-xpress-meeting",
        has3DTour: false
      }
    ],
    wellness: [
      {
        id: "xpress-fitness",
        name: "Xpress Fitness Center",
        highlight: "24/7 Keycard Access",
        description: "Modern fitness studio equipped with LifeFitness treadmills, cross trainers, free weights, and stretching zones for fitness routines on the go.",
        tourSceneKey: "venue-xpress-fitness",
        has3DTour: false
      }
    ],
    services: [
      {
        title: "Airport Shuttle & Gulberg Shuttle",
        icon: "Car",
        description: "Scheduled shuttles to Allama Iqbal International Airport and key shopping hubs on MM Alam Road."
      },
      {
        title: "Express Check-In & Digital Key",
        icon: "Key",
        description: "Swift 60-second mobile check-in to get corporate travelers into their rooms without delay."
      },
      {
        title: "High-Speed Fiber Connectivity",
        icon: "Wifi",
        description: "Complimentary enterprise-grade optical Wi-Fi throughout all rooms, conference halls, and cafe."
      },
      {
        title: "Executive Dry Cleaning & Pressing",
        icon: "Briefcase",
        description: "Same-day express valet laundering and suit pressing tailored for corporate presentations."
      }
    ]
  }
};

// Presentation / Pitch Deck Content for the Meeting with Avari Executives
export const PITCH_DATA = {
  meetingTarget: "Avari Hotels & Resorts Leadership Team",
  focusProperties: ["Avari Hotel Lahore", "Avari Xpress Gulberg"],
  presentationTitle: "Immersive 3D Digital Twin Platform for Avari Hotels",
  subtitle: "Elevating Direct Bookings, Banquet Closures & Guest Confidence with Interactive 360 Experiences",
  slides: [
    {
      id: "slide-1",
      number: "01",
      title: "The Opportunity: Why 2D Photos Are Costing Avari Bookings",
      points: [
        "Modern luxury travelers and high-ticket event planners demand spatial certainty before committing $500+ / PKR 50,000+ per night.",
        "Static 2D photos create room ambiguity (e.g. bed-to-desk spacing, bathroom layout, actual window views), driving travelers to OTAs like Booking.com.",
        "Avari currently pays 18% - 25% commission to OTAs for bookings that could easily be secured directly on avari.com."
      ],
      metric: "72%",
      metricLabel: "of luxury guests state that an interactive 3D tour influences their booking decision over competitors."
    },
    {
      id: "slide-2",
      number: "02",
      title: "The Solution: Photorealistic 360° Digital Twins",
      points: [
        "Full spatial walkthrough of every room tier: Deluxe, Executive Club, Lady Avari, and Presidential Suites.",
        "Interactive Hotspots highlight Avari's signature details: Egyptian cotton linens, Botticino marble baths, Molton Brown amenities, and Mall Road views.",
        "Dual-Property experience: Demonstrates seamless brand synergy between 5-Star Heritage Flagship and Contemporary Xpress Boutique."
      ],
      metric: "+44%",
      metricLabel: "Average increase in on-site dwell time when interactive 3D virtual tours are present on hotel websites."
    },
    {
      id: "slide-3",
      number: "03",
      title: "Direct ROI: Banquets, Royal Weddings & Corporate Summits",
      points: [
        "Selling the Hall of Mirrors and Grand Ballroom requires convincing couples and multinational corporate planners.",
        "With our interactive Banquet Capacity Calculator and 3D walkthrough, event planners can test seating layouts (Banquet, Theater, Classroom) remotely from Karachi, Islamabad, or London.",
        "Shortens banquet sales contract closing cycles by more than 60%."
      ],
      metric: "65%",
      metricLabel: "Faster contract closure rate for wedding halls and corporate summits through remote 3D spatial previews."
    },
    {
      id: "slide-4",
      number: "04",
      title: "Effortless Integration with avari.com",
      points: [
        "Lightweight Next.js / WebGL architecture: zero plugins or app downloads required by the guest.",
        "Embeds seamlessly into Avari's existing website with a single `<iframe />` or web component script tag.",
        "Fully optimized for mobile smartphones (iOS & Android) with gyroscope motion navigation and touch pinch-to-zoom."
      ],
      metric: "< 1.5s",
      metricLabel: "Ultra-fast initial load time with progressive texture streaming and zero impact on SEO performance."
    }
  ],
  faq: [
    {
      q: "Can this integrate with Avari's current booking engine?",
      a: "Yes! Every room and suite in the 3D tour features a direct 'Book Now' trigger that can link directly into Avari's SynXis / Sabre booking engine with pre-selected room codes and promo rates."
    },
    {
      q: "How are 360 panoramas captured or updated?",
      a: "Our team captures HDR 12K panoramic captures during non-peak hours (15 minutes per room). Renovations or seasonal decor changes can be re-rendered and updated in under 24 hours."
    },
    {
      q: "Does it support other Avari properties?",
      a: "Absolutely. The platform is modularly designed to scale across the entire portfolio: Avari Towers Karachi, Avari Hotel Faisalabad, Avari Xpress Islamabad, and Dubai properties."
    }
  ]
};
