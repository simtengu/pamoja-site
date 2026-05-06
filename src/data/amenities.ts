export interface Amenity {
  title: string;
  description: string;
  image: string;
}

export interface PropertyAmenitiesData {
  propertyId: string;
  name: string;
  amenities: Amenity[];
  culinaryImage?: string;
}

export const detailedAmenities: PropertyAmenitiesData[] = [
  {
    propertyId: "8zexNLN3L4TlfTBOyHQm",
    name: "Pamoja Migration Camp",
    culinaryImage: "/images/culinary/breakfast-in-bed.jpg",
    amenities: [
      // {
      //   title: "Massage",
      //   description: "Unwind with our signature relaxation massage, featuring long, flowing strokes and light-to-medium pressure. Designed to melt away daily stress, improve circulation",
      //   image: "/images/amenities/massage.jpg"
      // },
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
    ]
  },
  {
    propertyId: "KAy8Rayk0nlRN3pBZJeJ",
    name: "Pamoja Verdant Farm Villa",
    culinaryImage: "/images/culinary/chef-buffet-1.jpg",
    amenities: [
      {
        title: "Massage",
        description: "Unwind with our signature relaxation massage, featuring long, flowing strokes and light-to-medium pressure. Designed to melt away daily stress, improve circulation",
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
    ]
  },
  {
    propertyId: "hSEDobOXpoEli3FmzvKV",
    name: "Tarangire Luxury Hideaway",
    culinaryImage: "/images/culinary/chef-buffet.jpg",
    amenities: [
      {
        title: "Massage",
        description: "Unwind with our signature relaxation massage, featuring long, flowing strokes and light-to-medium pressure. Designed to melt away daily stress, improve circulation",
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
        image: "/images/amenities/tarangire-dining.jpg"
      },
      {
        title: "Bar",
        description: "Unwind with our curated selection of premium spirits, wines, and signature cocktails served in a relaxed atmosphere.",
        image: "/images/amenities/tarangire-bar.jpg"
      },
      {
        title: "Swimming Pool",
        description: "Take a refreshing dip in our sparkling pool, perfectly positioned for relaxation and scenic views.",
        image: "/images/amenities/tarangire-swimming.jpg"
      },
      // {
      //   title: "Gym",
      //   description: "Maintain your wellness routine with our modern fitness center equipped for all your exercise needs.",
      //   image: "/images/amenities/gym.jpeg"
      // },
      // {
      //   title: "Shop",
      //   description: "Browse our boutique shop for authentic local crafts, unique souvenirs, and travel essentials.",
      //   image: "/images/amenities/shop.jpeg"
      // },
      // {
      //   title: "Chef",
      //   description: "Enjoy personalized culinary experiences with our dedicated private chefs catering to your preferences.",
      //   image: "/images/amenities/shef.jpeg"
      // }
    ]
  },
  {
    propertyId: "iP3Bq8Hj8awkxjiZ3Qp7",
    name: "Pamoja Farm Vilas",
    culinaryImage: "/images/dining.jpeg",
    amenities: [
      {
        title: "Massage",
        description: "Unwind with our signature relaxation massage, featuring long, flowing strokes and light-to-medium pressure. Designed to melt away daily stress, improve circulation",
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
        image: "/images/amenities/dining.jpeg"
      },
      {
        title: "Bar",
        description: "Unwind with our curated selection of premium spirits, wines, and signature cocktails served in a relaxed atmosphere.",
        image: "/images/amenities/bar.jpeg"
      },
      {
        title: "Swimming Pool",
        description: "Take a refreshing dip in our sparkling pool, perfectly positioned for relaxation and scenic views.",
        image: "/images/amenities/swimming-pool.jpeg"
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
        image: "/images/amenities/shef.jpeg"
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
        description: "Unwind with our signature relaxation massage, featuring long, flowing strokes and light-to-medium pressure. Designed to melt away daily stress, improve circulation",
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
        image: "/images/amenities/baobab-dining.jpg"
      },
      {
        title: "Bar",
        description: "Unwind with our curated selection of premium spirits, wines, and signature cocktails served in a relaxed atmosphere.",
        image: "/images/amenities/bar.jpeg"
      },
      {
        title: "Swimming Pool",
        description: "Take a refreshing dip in our sparkling pool, perfectly positioned for relaxation and scenic views.",
        image: "/images/amenities/swimming-pool.jpeg"
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
        image: "/images/amenities/shef.jpeg"
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
        description: "Stay connected with high-speed complimentary wireless internet available throughout the property.",
        image: "/images/amenities/wifi.jpg"
      },
      {
        title: "Dining",
        description: "Experience world-class cuisine featuring fresh local ingredients and international flavors in our elegant dining areas.",
        image: "/images/amenities/undercanvas-dining.jpg"
      },
      {
        title: "Bar",
        description: "Unwind with our curated selection of premium spirits, wines, and signature cocktails served in a relaxed atmosphere.",
        image: "/images/amenities/migration-bar.jpg"
      },


      {
        title: "Chef",
        description: "Enjoy personalized culinary experiences with our dedicated private chefs catering to your preferences.",
        image: "/images/amenities/undercanvas-chef.jpg"
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
        description: "Stay connected with high-speed complimentary wireless internet available throughout the property.",
        image: "/images/amenities/wifi.jpg"
      },
      {
        title: "Dining",
        description: "Experience world-class cuisine featuring fresh local ingredients and international flavors in our elegant dining areas.",
        image: "/images/amenities/serengeti-dining.jpg"
      },
      {
        title: "Bar",
        description: "Unwind with our curated selection of premium spirits, wines, and signature cocktails served in a relaxed atmosphere.",
        image: "/images/amenities/serengeti-bar.jpg"
      },

      {
        title: "Shop",
        description: "Browse our boutique shop for authentic local crafts, unique souvenirs, and travel essentials.",
        image: "/images/amenities/shop.jpeg"
      },
      {
        title: "Chef",
        description: "Enjoy personalized culinary experiences with our dedicated private chefs catering to your preferences.",
        image: "/images/amenities/serengeti-chef.jpg"
      }
    ]
  }
];
