export interface Amenity {
  title: string;
  description: string;
  image: string;
}

export interface RoomType {
  id: string;
  title: string;
  standard: string;
  price: number;
  occupancy: string;
  amenities: string[];
  description: string;
  images: string[];
}

export interface PropertyAmenitiesData {
  propertyId: string;
  name: string;
  amenities: Amenity[];
  roomTypes: RoomType[];
  culinaryImage?: string;
}

const COMMON_ROOM_AMENITIES = [
  "High-speed WiFi",
  "Smart TV",
  "En-suite Luxury Bathroom",
  "Premium Bedding & Linens",
  "Private Terrace or Balcony",
  "Coffee & Tea Station",
  "Daily Housekeeping"
];

const ROOM_SETUP_NOTE = "Our rooms can always be set up to your desired requirement, ensuring a perfectly tailored stay.";

export const detailedAmenities: PropertyAmenitiesData[] = [
  {
    propertyId: "8zexNLN3L4TlfTBOyHQm",
    name: "Pamoja Migration Camp",
    culinaryImage: "/images/culinary/breakfast-in-bed.jpg",
    amenities: [
      {
        title: "Free WiFi",
        description: "Stay connected with high-speed complimentary wireless internet available throughout the property.",
        image: "/images/amenities/wifi.jpg"
      },
      {
        title: "Dining",
        description: "Experience world-class cuisine featuring fresh local ingredients and international flavors in our elegant dining areas.",
        image: "/images/amenities/migration-dining.jpg"
      },
      {
        title: "Bar",
        description: "Unwind with our curated selection of premium spirits, wines, and signature cocktails served in a relaxed atmosphere.",
        image: "/images/amenities/migration-bar.jpg"
      },
      {
        title: "Chef",
        description: "Enjoy personalized culinary experiences with our dedicated private chefs catering to your preferences.",
        image: "/images/amenities/migration-chef.jpg"
      }
    ],
    roomTypes: [
      {
        id: "single",
        title: "Single",
        standard: "Luxury Canvas",
        price: 350,
        occupancy: "1 Adult",
        amenities: [...COMMON_ROOM_AMENITIES, "Writing Desk"],
        description: `Elegantly appointed single tented rooms offering a sanctuary of peace amidst the wild. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/serengeti-luxury-single.jpg"]
      },
      {
        id: "double",
        title: "Double",
        standard: "Luxury Canvas",
        price: 450,
        occupancy: "2 Adults",
        amenities: [...COMMON_ROOM_AMENITIES, "King Size Bed"],
        description: `Spacious double rooms designed for couples seeking a romantic and immersive wilderness experience. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/serengeti-luxury-double-1.jpg", "/images/rooms/serengeti-luxury-double-2.jpg", "/images/rooms/serengeti-luxury-double-3.jpg"]
      },
      {
        id: "twin",
        title: "Twin",
        standard: "Luxury Canvas",
        price: 450,
        occupancy: "2 Adults",
        amenities: [...COMMON_ROOM_AMENITIES, "Two Twin Beds"],
        description: `Perfectly configured with two separate beds, our twin rooms offer comfort and style for friends or colleagues traveling together. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/serengeti-luxury-twin-1.jpg", "/images/rooms/serengeti-luxury-twin-2.jpg", "/images/rooms/serengeti-luxury-twin-3.jpg"]
      },
      {
        id: "triple",
        title: "Triple",
        standard: "Luxury Canvas",
        price: 550,
        occupancy: "3 Adults",
        amenities: [...COMMON_ROOM_AMENITIES, "Flexible Bedding Layout"],
        description: `Generous triple rooms perfect for small groups or families wanting to stay close to nature. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/serengeti-luxury-triple-1.jpg", "/images/rooms/serengeti-luxury-triple-2.jpg", "/images/rooms/serengeti-luxury-triple-3.jpg"]
      },
      {
        id: "family",
        title: "Family",
        standard: "Luxury Canvas",
        price: 750,
        occupancy: "4 Adults / 2 Adults & 2 Children",
        amenities: [...COMMON_ROOM_AMENITIES, "Interconnecting Rooms", "Extra Space"],
        description: `Our expansive family suites provide the ultimate comfort and privacy for families traveling together. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/serengeti-luxury-family-1.jpg", "/images/rooms/serengeti-luxury-family-2.jpg", "/images/rooms/serengeti-luxury-family-3.jpg"]
      }
    ]
  },
  {
    propertyId: "KAy8Rayk0nlRN3pBZJeJ",
    name: "Pamoja Verdant Farm Villa",
    culinaryImage: "/images/culinary/chef-buffet-1.jpg",
    amenities: [
      {
        title: "Massage",
        description: "Unwind with our signature relaxation massage, featuring long, flowing strokes and light-to-medium pressure.",
        image: "/images/amenities/massage.jpg"
      },
      {
        title: "Free WiFi",
        description: "Stay connected with high-speed complimentary wireless internet available throughout the property.",
        image: "/images/amenities/wifi.jpg"
      },
      {
        title: "Dining",
        description: "Experience world-class cuisine featuring fresh local ingredients and international flavors in our elegant dining areas.",
        image: "/images/amenities/verdant-dining.jpg"
      },
      {
        title: "Bar",
        description: "Unwind with our curated selection of premium spirits, wines, and signature cocktails served in a relaxed atmosphere.",
        image: "/images/amenities/verdant-bar.png"
      },
      {
        title: "Swimming Pool",
        description: "Take a refreshing dip in our sparkling pool, perfectly positioned for relaxation and scenic views.",
        image: "/images/amenities/verdant-swimming.jpg"
      },
      {
        title: "Gym",
        description: "Maintain your wellness routine with our modern fitness center equipped for all your exercise needs.",
        image: "/images/amenities/gym.jpeg"
      },
      {
        title: "Shop",
        description: "Browse our boutique shop for authentic local crafts, unique souvenirs, and travel essentials.",
        image: "/images/amenities/shop.jpeg"
      },
      {
        title: "Chef",
        description: "Enjoy personalized culinary experiences with our dedicated private chefs catering to your preferences.",
        image: "/images/amenities/chef-verdant.jpg"
      }
    ],
    roomTypes: [
      {
        id: "single",
        title: "Single",
        standard: "Farm Luxury",
        price: 280,
        occupancy: "1 Adult",
        amenities: [...COMMON_ROOM_AMENITIES, "Garden View"],
        description: `Cozy and refined single rooms overlooking our lush coffee plantations. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/villa-single-1.jpg", "/images/rooms/villa-single-2.jpg"]
      },
      {
        id: "double",
        title: "Double",
        standard: "Farm Luxury",
        price: 380,
        occupancy: "2 Adults",
        amenities: [...COMMON_ROOM_AMENITIES, "Private Veranda"],
        description: `Experience the charm of farm life in our spacious double rooms with premium amenities. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/villa-double-1.jpg", "/images/rooms/villa-double-2.jpg", "/images/rooms/villa-double-3.jpg"]
      },
      {
        id: "twin",
        title: "Twin",
        standard: "Farm Luxury",
        price: 380,
        occupancy: "2 Adults",
        amenities: [...COMMON_ROOM_AMENITIES, "Two Single Beds"],
        description: `Charming twin rooms offering a blend of traditional farmhouse style and modern comfort. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/villa-twin-1.jpg", "/images/rooms/villa-twin-2.jpg", "/images/rooms/villa-twin-3.jpg"]
      },
      {
        id: "triple",
        title: "Triple",
        standard: "Farm Luxury",
        price: 480,
        occupancy: "3 Adults",
        amenities: [...COMMON_ROOM_AMENITIES, "Lounge Area"],
        description: `Perfect for groups, these rooms offer comfort and style with a view of the farm. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/villa-triple.jpg"]
      },
      {
        id: "family",
        title: "Family",
        standard: "Farm Luxury",
        price: 650,
        occupancy: "4-5 People",
        amenities: [...COMMON_ROOM_AMENITIES, "Kitchenette", "Living Room"],
        description: `Our family suites offer a true home-away-from-home experience in a stunning farm setting. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/villa-family.jpg"]
      }
    ]
  },
  {
    propertyId: "hSEDobOXpoEli3FmzvKV",
    name: "Tarangire Luxury Hideaway",
    culinaryImage: "/images/culinary/chef-buffet.jpg",
    amenities: [
      {
        title: "Massage",
        description: "Unwind with our signature relaxation massage.",
        image: "/images/amenities/massage.jpg"
      },
      {
        title: "Free WiFi",
        description: "Stay connected with high-speed complimentary wireless internet.",
        image: "/images/amenities/wifi.jpg"
      },
      {
        title: "Dining",
        description: "Experience world-class cuisine in our elegant dining areas.",
        image: "/images/amenities/tarangire-dining.jpg"
      },
      {
        title: "Bar",
        description: "Unwind with our curated selection of premium spirits and wines.",
        image: "/images/amenities/tarangire-bar.jpg"
      },
      {
        title: "Swimming Pool",
        description: "Take a refreshing dip in our sparkling pool.",
        image: "/images/amenities/tarangire-swimming.jpg"
      }
    ],
    roomTypes: [
      {
        id: "single",
        title: "Single",
        standard: "Signature Luxury",
        price: 400,
        occupancy: "1 Adult",
        amenities: [...COMMON_ROOM_AMENITIES, "Baobab View"],
        description: `Private and exclusive single retreats hidden among ancient baobab trees. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/hideaway-single-1.jpg", "/images/rooms/hideaway-single-2.jpg", "/images/rooms/hideaway-single-3.jpg"]
      },
      {
        id: "double",
        title: "Double",
        standard: "Signature Luxury",
        price: 550,
        occupancy: "2 Adults",
        amenities: [...COMMON_ROOM_AMENITIES, "Outdoor Shower"],
        description: `Luxury double suites offering an unparalleled connection to the Tarangire wilderness. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/hideaway-double-1.jpg", "/images/rooms/hideaway-double-2.jpg", "/images/rooms/hideaway-double-3.jpg"]
      },
      {
        id: "twin",
        title: "Twin",
        standard: "Signature Luxury",
        price: 550,
        occupancy: "2 Adults",
        amenities: [...COMMON_ROOM_AMENITIES, "Twin Safari Beds"],
        description: `Elegant twin suites providing the perfect base for your Tarangire explorations. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/hideaway-twin-1.jpg", "/images/rooms/hideaway-twin-2.jpg", "/images/rooms/hideaway-twin-3.jpg", "/images/rooms/hideaway-twin-4.jpg"]
      },
      {
        id: "triple",
        title: "Triple",
        standard: "Signature Luxury",
        price: 700,
        occupancy: "3 Adults",
        amenities: [...COMMON_ROOM_AMENITIES, "Sunset View Deck"],
        description: `Spacious triple suites perfect for groups seeking the ultimate luxury safari experience. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/hideaway-triple-1.jpg", "/images/rooms/hideaway-triple-2.jpg", "/images/rooms/hideaway-triple-3.jpg"]
      },
      {
        id: "family",
        title: "Family",
        standard: "Signature Luxury",
        price: 1100,
        occupancy: "Up to 6 People",
        amenities: [...COMMON_ROOM_AMENITIES, "Private Plunge Pool", "Multi-bedroom"],
        description: `The pinnacle of safari luxury, our family villas offer absolute privacy and bespoke service. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/hideaway-family-1.jpg", "/images/rooms/hideaway-family-2.jpg", "/images/rooms/hideaway-family-3.jpg", "/images/rooms/hideaway-family-4.jpg"]
      }
    ]
  },
  {
    propertyId: "iP3Bq8Hj8awkxjiZ3Qp7",
    name: "Pamoja Farm Villas",
    culinaryImage: "/images/dining.jpeg",
    amenities: [
      {
        title: "Massage",
        description: "Unwind with our signature relaxation massage.",
        image: "/images/amenities/massage.jpg"
      },
      {
        title: "Free WiFi",
        description: "Stay connected with high-speed complimentary wireless internet.",
        image: "/images/amenities/wifi.jpg"
      },
      {
        title: "Dining",
        description: "Experience world-class cuisine.",
        image: "/images/amenities/dining.jpeg"
      },
      {
        title: "Bar",
        description: "Unwind with our curated selection of premium spirits.",
        image: "/images/amenities/bar.jpeg"
      },
      {
        title: "Swimming Pool",
        description: "Take a refreshing dip in our sparkling pool.",
        image: "/images/amenities/swimming-pool.jpeg"
      },
      {
        title: "Gym",
        description: "Maintain your wellness routine.",
        image: "/images/amenities/gym.jpeg"
      },
      {
        title: "Shop",
        description: "Browse our boutique shop.",
        image: "/images/amenities/shop.jpeg"
      },
      {
        title: "Chef",
        description: "Enjoy personalized culinary experiences.",
        image: "/images/amenities/shef.jpeg"
      }
    ],
    roomTypes: [
      {
        id: "single",
        title: "Single",
        standard: "Villa Luxury",
        price: 250,
        occupancy: "1 Adult",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Elegant and comfortable single rooms within our farm villa community. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/villa-single-1.jpg", "/images/rooms/villa-single-2.jpg"]
      },
      {
        id: "double",
        title: "Double",
        standard: "Villa Luxury",
        price: 350,
        occupancy: "2 Adults",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Spacious double rooms featuring classic design and modern amenities. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/villa-double-1.jpg", "/images/rooms/villa-double-2.jpg", "/images/rooms/villa-double-3.jpg"]
      },
      {
        id: "twin",
        title: "Twin",
        standard: "Villa Luxury",
        price: 350,
        occupancy: "2 Adults",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Refined twin rooms designed for shared comfort and relaxation. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/villa-twin-1.jpg", "/images/rooms/villa-twin-2.jpg", "/images/rooms/villa-twin-3.jpg"]
      },
      {
        id: "triple",
        title: "Triple",
        standard: "Villa Luxury",
        price: 450,
        occupancy: "3 Adults",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Well-appointed triple rooms ideal for friends traveling together. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/villa-triple.jpg"]
      },
      {
        id: "family",
        title: "Family",
        standard: "Villa Luxury",
        price: 600,
        occupancy: "4 People",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Large family suites designed for comfort and togetherness. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/villa-family.jpg"]
      }
    ]
  },
  {
    propertyId: "pGFtTiZP5Zn55AcZczUx",
    name: "Manyara Baobab Lodge",
    culinaryImage: "/images/culinary/baobab-breakfast.jpg",
    amenities: [
      {
        title: "Massage",
        description: "Unwind with our signature relaxation massage.",
        image: "/images/amenities/massage.jpg"
      },
      {
        title: "Free WiFi",
        description: "Stay connected with high-speed complimentary wireless internet.",
        image: "/images/amenities/wifi.jpg"
      },
      {
        title: "Dining",
        description: "Experience world-class cuisine.",
        image: "/images/amenities/baobab-dining.jpg"
      },
      {
        title: "Bar",
        description: "Unwind with our curated selection of premium spirits.",
        image: "/images/amenities/bar.jpeg"
      },
      {
        title: "Swimming Pool",
        description: "Take a refreshing dip in our sparkling pool.",
        image: "/images/amenities/swimming-pool.jpeg"
      },
      {
        title: "Gym",
        description: "Maintain your wellness routine.",
        image: "/images/amenities/gym.jpeg"
      },
      {
        title: "Shop",
        description: "Browse our boutique shop.",
        image: "/images/amenities/shop.jpeg"
      },
      {
        title: "Chef",
        description: "Enjoy personalized culinary experiences.",
        image: "/images/amenities/shef.jpeg"
      }
    ],
    roomTypes: [
      {
        id: "single",
        title: "Single",
        standard: "Boutique Luxury",
        price: 320,
        occupancy: "1 Adult",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Intimate lodge rooms offering spectacular views of the Manyara escarpment. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/hideaway-single-1.jpg", "/images/rooms/hideaway-single-2.jpg", "/images/rooms/hideaway-single-3.jpg"]
      },
      {
        id: "double",
        title: "Double",
        standard: "Boutique Luxury",
        price: 420,
        occupancy: "2 Adults",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Elegant double rooms inspired by the natural beauty of Lake Manyara. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/hideaway-double-1.jpg", "/images/rooms/hideaway-double-2.jpg", "/images/rooms/hideaway-double-3.jpg"]
      },
      {
        id: "twin",
        title: "Twin",
        standard: "Boutique Luxury",
        price: 420,
        occupancy: "2 Adults",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Sophisticated twin rooms with a modern African touch. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/hideaway-twin-1.jpg", "/images/rooms/hideaway-twin-2.jpg", "/images/rooms/hideaway-twin-3.jpg", "/images/rooms/hideaway-twin-4.jpg"]
      },
      {
        id: "triple",
        title: "Triple",
        standard: "Boutique Luxury",
        price: 520,
        occupancy: "3 Adults",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Spacious triple rooms perfect for small groups exploring the Rift Valley. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/hideaway-triple-1.jpg", "/images/rooms/hideaway-triple-2.jpg", "/images/rooms/hideaway-triple-3.jpg"]
      },
      {
        id: "family",
        title: "Family",
        standard: "Boutique Luxury",
        price: 700,
        occupancy: "4 People",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Bespoke family suites designed for an unforgettable African adventure. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/hideaway-family-1.jpg", "/images/rooms/hideaway-family-2.jpg", "/images/rooms/hideaway-family-3.jpg", "/images/rooms/hideaway-family-4.jpg"]
      }
    ]
  },
  {
    propertyId: "rLOrXYfM63pF8AofTlj7",
    name: "Migration Undercanvas",
    culinaryImage: "/images/culinary/ribs.jpg",
    amenities: [
      {
        title: "Free WiFi",
        description: "Stay connected with high-speed complimentary wireless internet.",
        image: "/images/amenities/wifi.jpg"
      },
      {
        title: "Dining",
        description: "Experience world-class cuisine.",
        image: "/images/amenities/undercanvas-dining.jpg"
      },
      {
        title: "Bar",
        description: "Unwind with our curated selection of premium spirits.",
        image: "/images/amenities/migration-bar.jpg"
      },
      {
        title: "Chef",
        description: "Enjoy personalized culinary experiences.",
        image: "/images/amenities/undercanvas-chef.jpg"
      }
    ],
    roomTypes: [
      {
        id: "single",
        title: "Single",
        standard: "Mobile Luxury",
        price: 380,
        occupancy: "1 Adult",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Luxury undercanvas rooms that move with the migration for the ultimate view. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/serengeti-luxury-single.jpg"]
      },
      {
        id: "double",
        title: "Double",
        standard: "Mobile Luxury",
        price: 500,
        occupancy: "2 Adults",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Spacious double tents offering 360-degree views of the Serengeti plains. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/serengeti-luxury-double-1.jpg", "/images/rooms/serengeti-luxury-double-2.jpg", "/images/rooms/serengeti-luxury-double-3.jpg"]
      },
      {
        id: "twin",
        title: "Twin",
        standard: "Mobile Luxury",
        price: 500,
        occupancy: "2 Adults",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Experience the sounds of the African night in our luxury twin tents. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/serengeti-luxury-twin-1.jpg", "/images/rooms/serengeti-luxury-twin-2.jpg", "/images/rooms/serengeti-luxury-twin-3.jpg"]
      },
      {
        id: "triple",
        title: "Triple",
        standard: "Mobile Luxury",
        price: 650,
        occupancy: "3 Adults",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Generous triple tents designed for comfort in the heart of the wild. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/serengeti-luxury-triple-1.jpg", "/images/rooms/serengeti-luxury-triple-2.jpg", "/images/rooms/serengeti-luxury-triple-3.jpg"]
      },
      {
        id: "family",
        title: "Family",
        standard: "Mobile Luxury",
        price: 900,
        occupancy: "4 People",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Exclusive family tents providing privacy and safety in the wilderness. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/serengeti-luxury-family-1.jpg", "/images/rooms/serengeti-luxury-family-2.jpg", "/images/rooms/serengeti-luxury-family-3.jpg"]
      }
    ]
  },
  {
    propertyId: "v3MaETQSBOmLV0cTuULB",
    name: "Pamoja Serengeti Luxury Camp",
    culinaryImage: "/images/culinary/bartender.jpg",
    amenities: [
      {
        title: "Free WiFi",
        description: "Stay connected with high-speed complimentary wireless internet.",
        image: "/images/amenities/wifi.jpg"
      },
      {
        title: "Dining",
        description: "Experience world-class cuisine.",
        image: "/images/amenities/serengeti-dining.jpg"
      },
      {
        title: "Bar",
        description: "Unwind with our curated selection of premium spirits.",
        image: "/images/amenities/serengeti-bar.jpg"
      },
      {
        title: "Shop",
        description: "Browse our boutique shop.",
        image: "/images/amenities/shop.jpeg"
      },
      {
        title: "Chef",
        description: "Enjoy personalized culinary experiences.",
        image: "/images/amenities/serengeti-chef.jpg"
      }
    ],
    roomTypes: [
      {
        id: "single",
        title: "Single",
        standard: "Elite Safari",
        price: 450,
        occupancy: "1 Adult",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Sophisticated single tents with panoramic views of the Serengeti. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/serengeti-luxury-single.jpg"]
      },
      {
        id: "double",
        title: "Double",
        standard: "Elite Safari",
        price: 600,
        occupancy: "2 Adults",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Our signature double tents, where luxury meets the spirit of the savanna. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/serengeti-luxury-double-1.jpg", "/images/rooms/serengeti-luxury-double-2.jpg", "/images/rooms/serengeti-luxury-double-3.jpg"]
      },
      {
        id: "twin",
        title: "Twin",
        standard: "Elite Safari",
        price: 600,
        occupancy: "2 Adults",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Luxury twin tents offering an intimate wilderness experience with modern comforts. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/serengeti-luxury-twin-1.jpg", "/images/rooms/serengeti-luxury-twin-2.jpg", "/images/rooms/serengeti-luxury-twin-3.jpg"]
      },
      {
        id: "triple",
        title: "Triple",
        standard: "Elite Safari",
        price: 750,
        occupancy: "3 Adults",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `Exquisitely designed triple tents offering ample space and comfort. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/serengeti-luxury-triple-1.jpg", "/images/rooms/serengeti-luxury-triple-2.jpg", "/images/rooms/serengeti-luxury-triple-3.jpg"]
      },
      {
        id: "family",
        title: "Family",
        standard: "Elite Safari",
        price: 1200,
        occupancy: "Up to 5 People",
        amenities: [...COMMON_ROOM_AMENITIES],
        description: `The ultimate family sanctuary, featuring private decks and bespoke interiors. ${ROOM_SETUP_NOTE}`,
        images: ["/images/rooms/serengeti-luxury-family-1.jpg", "/images/rooms/serengeti-luxury-family-2.jpg", "/images/rooms/serengeti-luxury-family-3.jpg"]
      }
    ]
  }
];

