export interface Place {
  name: string;
  description: string;
  image: string;
  rating: number;
  type: string;
}

export interface Hotel {
  name: string;
  description: string;
  image: string;
  rating: number;
  price: string;
}

interface Day {
  day: number;
  title: string;
  places: Place[];
  hotels: Hotel[];
  description: string;
  activities: string[];
}

interface Itinerary {
  destination: string;
  days: number;
  budget: string;
  itinerary: Day[];
}

export const itinerariesData: Record<string, Itinerary[]> = {
  "Goa": [
    {
      destination: "Goa",
      days: 5,
      budget: "Low",
      itinerary: [
        {
          day: 1,
          title: "Arrival in North Goa",
          places: [
            {
              name: "Baga Beach",
              description: "Popular beach with water sports and nightlife",
              image: "/taj.jpg",
              rating: 4.2,
              type: "Beach"
            },
            {
              name: "Calangute Beach",
              description: "Queen of beaches with golden sand",
              image: "/taj2.jpg",
              rating: 4.0,
              type: "Beach"
            }
          ],
          hotels: [
            {
              name: "Zostel Goa",
              description: "Backpacker hostel near the beach",
              image: "/taj.jpg",
              rating: 4.1,
              price: "₹800/night"
            },
            {
              name: "Hotel Baga Marina",
              description: "Budget hotel with basic amenities",
              image: "/taj2.jpg",
              rating: 3.8,
              price: "₹1500/night"
            }
          ],
          description: "Start your Goa adventure with the famous beaches of North Goa.",
          activities: ["Beach hopping", "Water sports", "Sunset viewing"]
        }
      ]
    },
    {
      destination: "Goa",
      days: 5,
      budget: "Mid",
      itinerary: [
        {
          day: 1,
          title: "Arrival in North Goa",
          places: [
            {
              name: "Baga Beach",
              description: "Popular beach with water sports and nightlife",
              image: "/taj.jpg",
              rating: 4.2,
              type: "Beach"
            },
            {
              name: "Anjuna Beach",
              description: "Hippie culture and flea markets",
              image: "/taj2.jpg",
              rating: 4.3,
              type: "Beach"
            }
          ],
          hotels: [
            {
              name: "Resort Terra Paraiso",
              description: "Mid-range resort with pool and spa",
              image: "/taj.jpg",
              rating: 4.3,
              price: "₹3500/night"
            },
            {
              name: "Hotel Fidalgo",
              description: "Heritage hotel in Panaji",
              image: "/taj2.jpg",
              rating: 4.2,
              price: "₹4000/night"
            }
          ],
          description: "Experience the vibrant beach culture of North Goa.",
          activities: ["Beach activities", "Flea market shopping", "Nightlife"]
        }
      ]
    },
    {
      destination: "Goa",
      days: 5,
      budget: "Luxury",
      itinerary: [
        {
          day: 1,
          title: "Luxury Beach Experience",
          places: [
            {
              name: "Mandrem Beach",
              description: "Pristine and less crowded beach",
              image: "/taj.jpg",
              rating: 4.6,
              type: "Beach"
            },
            {
              name: "Ashwem Beach",
              description: "Serene beach with luxury shacks",
              image: "/taj2.jpg",
              rating: 4.5,
              type: "Beach"
            }
          ],
          hotels: [
            {
              name: "The Leela Goa",
              description: "5-star luxury resort with private beach",
              image: "/taj.jpg",
              rating: 4.8,
              price: "₹15000/night"
            },
            {
              name: "Taj Exotica Resort & Spa",
              description: "Luxury beachfront resort",
              image: "/taj2.jpg",
              rating: 4.7,
              price: "₹18000/night"
            }
          ],
          description: "Indulge in luxury beach experiences in Goa.",
          activities: ["Private beach access", "Spa treatments", "Fine dining"]
        }
      ]
    }
  ],
  "Kerala": [
    {
      destination: "Kerala",
      days: 7,
      budget: "Low",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kochi",
          places: [
            {
              name: "Chinese Fishing Nets",
              description: "Iconic fishing nets at Fort Kochi",
              image: "/taj.jpg",
              rating: 4.1,
              type: "Heritage"
            },
            {
              name: "Mattancherry Palace",
              description: "Dutch Palace with Kerala murals",
              image: "/taj2.jpg",
              rating: 4.0,
              type: "Palace"
            }
          ],
          hotels: [
            {
              name: "Backpacker Panda Fort Kochi",
              description: "Budget hostel in heritage area",
              image: "/taj.jpg",
              rating: 4.0,
              price: "₹600/night"
            },
            {
              name: "Hotel Abad Plaza",
              description: "Budget hotel with basic facilities",
              image: "/taj2.jpg",
              rating: 3.9,
              price: "₹1200/night"
            }
          ],
          description: "Explore the historic port city of Kochi.",
          activities: ["Heritage walk", "Spice market visit", "Kathakali show"]
        }
      ]
    },
    {
      destination: "Kerala",
      days: 7,
      budget: "Mid",
      itinerary: [
        {
          day: 1,
          title: "Kochi Heritage Tour",
          places: [
            {
              name: "Fort Kochi",
              description: "Historic area with colonial architecture",
              image: "/taj.jpg",
              rating: 4.3,
              type: "Heritage"
            },
            {
              name: "Jewish Synagogue",
              description: "Ancient synagogue in Jew Town",
              image: "/taj2.jpg",
              rating: 4.2,
              type: "Religious"
            }
          ],
          hotels: [
            {
              name: "Fragrant Nature Kochi",
              description: "Boutique hotel with modern amenities",
              image: "/taj.jpg",
              rating: 4.4,
              price: "₹3000/night"
            },
            {
              name: "The Gateway Hotel Marine Drive",
              description: "Waterfront hotel with city views",
              image: "/taj2.jpg",
              rating: 4.3,
              price: "₹3500/night"
            }
          ],
          description: "Discover the cultural heritage of Kochi.",
          activities: ["Heritage tour", "Backwater cruise", "Cultural shows"]
        }
      ]
    },
    {
      destination: "Kerala",
      days: 7,
      budget: "Luxury",
      itinerary: [
        {
          day: 1,
          title: "Luxury Kochi Experience",
          places: [
            {
              name: "Bolgatty Palace",
              description: "Heritage palace turned luxury hotel",
              image: "/taj.jpg",
              rating: 4.5,
              type: "Palace"
            },
            {
              name: "Marine Drive",
              description: "Scenic waterfront promenade",
              image: "/taj2.jpg",
              rating: 4.4,
              type: "Scenic"
            }
          ],
          hotels: [
            {
              name: "Grand Hyatt Kochi Bolgatty",
              description: "Luxury resort on private island",
              image: "/taj.jpg",
              rating: 4.7,
              price: "₹12000/night"
            },
            {
              name: "Taj Malabar Resort & Spa",
              description: "Luxury heritage hotel",
              image: "/taj2.jpg",
              rating: 4.6,
              price: "₹14000/night"
            }
          ],
          description: "Experience luxury in God's Own Country.",
          activities: ["Luxury houseboat", "Ayurvedic spa", "Private tours"]
        }
      ]
    }
  ],
  "Rajasthan": [
    {
      destination: "Rajasthan",
      days: 6,
      budget: "Low",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Jaipur - Pink City Welcome",
          places: [
            {
              name: "City Palace",
              description: "Royal palace complex with museums and courtyards",
              image: "/taj.jpg",
              rating: 4.5,
              type: "Palace"
            },
            {
              name: "Hawa Mahal",
              description: "Iconic Palace of Winds with intricate facade",
              image: "/taj2.jpg",
              rating: 4.3,
              type: "Heritage"
            }
          ],
          hotels: [
            {
              name: "Hotel Pearl Palace",
              description: "Heritage hotel with traditional Rajasthani architecture",
              image: "/taj.jpg",
              rating: 4.0,
              price: "₹2500/night"
            },
            {
              name: "Zostel Jaipur",
              description: "Modern hostel with backpacker-friendly amenities",
              image: "/taj2.jpg",
              rating: 4.2,
              price: "₹800/night"
            }
          ],
          description: "Begin your Rajasthan adventure in the Pink City of Jaipur.",
          activities: ["Palace tour", "Market exploration", "Local cuisine tasting"]
        },
        {
          day: 2,
          title: "Amber Fort and Jaipur Heritage",
          places: [
            {
              name: "Amber Fort",
              description: "Majestic hilltop fort with stunning architecture",
              image: "/taj.jpg",
              rating: 4.6,
              type: "Fort"
            }
          ],
          hotels: [
            {
              name: "Hotel Pearl Palace",
              description: "Heritage hotel with traditional Rajasthani architecture",
              image: "/taj.jpg",
              rating: 4.0,
              price: "₹2500/night"
            },
            {
              name: "Zostel Jaipur",
              description: "Modern hostel with backpacker-friendly amenities",
              image: "/taj2.jpg",
              rating: 4.2,
              price: "₹800/night"
            }
          ],
          description: "Explore the magnificent Amber Fort and surrounding heritage sites.",
          activities: ["Fort exploration", "Elephant ride", "Photography"]
        },
        {
          day: 3,
          title: "Journey to Pushkar - Sacred City",
          places: [
            {
              name: "Pushkar Lake",
              description: "Sacred lake surrounded by 52 ghats",
              image: "/taj.jpg",
              rating: 4.4,
              type: "Religious"
            },
            {
              name: "Brahma Temple",
              description: "Rare temple dedicated to Lord Brahma",
              image: "/taj2.jpg",
              rating: 4.2,
              type: "Temple"
            }
          ],
          hotels: [
            {
              name: "Zostel Pushkar",
              description: "Vibrant hostel in the heart of Pushkar",
              image: "/taj.jpg",
              rating: 4.1,
              price: "₹600/night"
            },
            {
              name: "Hotel Pushkar Inn",
              description: "Comfortable stay near the sacred lake",
              image: "/taj2.jpg",
              rating: 3.8,
              price: "₹1200/night"
            }
          ],
          description: "Experience the spiritual ambiance of the holy city of Pushkar.",
          activities: ["Temple visit", "Lake aarti", "Camel safari"]
        }
      ]
    },
    {
      destination: "Rajasthan",
      days: 6,
      budget: "Mid",
      itinerary: [
        {
          day: 1,
          title: "Royal Jaipur Experience",
          places: [
            {
              name: "City Palace",
              description: "Royal palace complex with museums and courtyards",
              image: "/taj.jpg",
              rating: 4.5,
              type: "Palace"
            },
            {
              name: "Jantar Mantar",
              description: "UNESCO World Heritage astronomical observatory",
              image: "/taj2.jpg",
              rating: 4.2,
              type: "Heritage"
            }
          ],
          hotels: [
            {
              name: "Hotel Clarks Amer",
              description: "Mid-range hotel with modern amenities",
              image: "/taj.jpg",
              rating: 4.2,
              price: "₹4500/night"
            },
            {
              name: "Hilton Jaipur",
              description: "Contemporary hotel with luxury facilities",
              image: "/taj2.jpg",
              rating: 4.4,
              price: "₹6000/night"
            }
          ],
          description: "Immerse yourself in the royal heritage of Jaipur.",
          activities: ["Palace tours", "Cultural shows", "Shopping"]
        }
      ]
    },
    {
      destination: "Rajasthan",
      days: 6,
      budget: "Luxury",
      itinerary: [
        {
          day: 1,
          title: "Luxury Royal Experience",
          places: [
            {
              name: "City Palace",
              description: "Royal palace complex with museums and courtyards",
              image: "/taj.jpg",
              rating: 4.5,
              type: "Palace"
            },
            {
              name: "Rambagh Palace",
              description: "Former royal residence, now luxury hotel",
              image: "/taj2.jpg",
              rating: 4.8,
              type: "Palace"
            }
          ],
          hotels: [
            {
              name: "Rambagh Palace",
              description: "Taj luxury palace hotel",
              image: "/taj.jpg",
              rating: 4.8,
              price: "₹25000/night"
            },
            {
              name: "The Oberoi Rajvilas",
              description: "Luxury resort with royal architecture",
              image: "/taj2.jpg",
              rating: 4.9,
              price: "₹30000/night"
            }
          ],
          description: "Experience the ultimate luxury in the land of kings.",
          activities: ["Private palace tours", "Royal dining", "Spa treatments"]
        }
      ]
    }
  ],
  "Himachal Pradesh": [
    {
      destination: "Himachal Pradesh",
      days: 8,
      budget: "Low",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Shimla",
          places: [
            {
              name: "Mall Road",
              description: "Famous shopping street in Shimla",
              image: "/taj.jpg",
              rating: 4.0,
              type: "Shopping"
            },
            {
              name: "Christ Church",
              description: "Neo-Gothic architecture church",
              image: "/taj2.jpg",
              rating: 4.1,
              type: "Heritage"
            }
          ],
          hotels: [
            {
              name: "YMCA Shimla",
              description: "Budget accommodation with basic facilities",
              image: "/taj.jpg",
              rating: 3.8,
              price: "₹1000/night"
            },
            {
              name: "Hotel Combermere",
              description: "Heritage budget hotel",
              image: "/taj2.jpg",
              rating: 3.9,
              price: "₹1500/night"
            }
          ],
          description: "Begin your hill station journey in the Queen of Hills.",
          activities: ["Mall Road walk", "Ridge exploration", "Local sightseeing"]
        }
      ]
    },
    {
      destination: "Himachal Pradesh",
      days: 8,
      budget: "Mid",
      itinerary: [
        {
          day: 1,
          title: "Shimla Hill Station Experience",
          places: [
            {
              name: "Jakhu Temple",
              description: "Hanuman temple with panoramic views",
              image: "/taj.jpg",
              rating: 4.3,
              type: "Religious"
            },
            {
              name: "Viceregal Lodge",
              description: "Former British Viceroy residence",
              image: "/taj2.jpg",
              rating: 4.4,
              type: "Heritage"
            }
          ],
          hotels: [
            {
              name: "Hotel Willow Banks",
              description: "Mid-range hotel with mountain views",
              image: "/taj.jpg",
              rating: 4.2,
              price: "₹3500/night"
            },
            {
              name: "Radisson Hotel Shimla",
              description: "Modern hotel with amenities",
              image: "/taj2.jpg",
              rating: 4.3,
              price: "₹4500/night"
            }
          ],
          description: "Enjoy the colonial charm and natural beauty of Shimla.",
          activities: ["Temple visits", "Heritage tours", "Nature walks"]
        }
      ]
    },
    {
      destination: "Himachal Pradesh",
      days: 8,
      budget: "Luxury",
      itinerary: [
        {
          day: 1,
          title: "Luxury Mountain Retreat",
          places: [
            {
              name: "Kufri",
              description: "Hill station with adventure activities",
              image: "/taj.jpg",
              rating: 4.2,
              type: "Adventure"
            },
            {
              name: "Green Valley",
              description: "Scenic valley with lush greenery",
              image: "/taj2.jpg",
              rating: 4.5,
              type: "Nature"
            }
          ],
          hotels: [
            {
              name: "The Oberoi Cecil",
              description: "Luxury heritage hotel",
              image: "/taj.jpg",
              rating: 4.7,
              price: "₹15000/night"
            },
            {
              name: "Wildflower Hall",
              description: "Luxury resort in the mountains",
              image: "/taj2.jpg",
              rating: 4.8,
              price: "₹20000/night"
            }
          ],
          description: "Experience luxury amidst the Himalayan foothills.",
          activities: ["Luxury spa", "Private tours", "Adventure sports"]
        }
      ]
    }
  ],
  "Uttarakhand": [
    {
      destination: "Uttarakhand",
      days: 6,
      budget: "Low",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Rishikesh",
          places: [
            {
              name: "Laxman Jhula",
              description: "Iconic suspension bridge over Ganges",
              image: "/taj.jpg",
              rating: 4.3,
              type: "Heritage"
            },
            {
              name: "Triveni Ghat",
              description: "Sacred bathing ghat on Ganges",
              image: "/taj2.jpg",
              rating: 4.2,
              type: "Religious"
            }
          ],
          hotels: [
            {
              name: "Zostel Rishikesh",
              description: "Backpacker hostel near Ganges",
              image: "/taj.jpg",
              rating: 4.1,
              price: "₹700/night"
            },
            {
              name: "Hotel Ganga Kinare",
              description: "Budget hotel with river views",
              image: "/taj2.jpg",
              rating: 3.9,
              price: "₹1200/night"
            }
          ],
          description: "Begin your spiritual journey in the Yoga Capital of the World.",
          activities: ["River rafting", "Yoga sessions", "Temple visits"]
        }
      ]
    },
    {
      destination: "Uttarakhand",
      days: 6,
      budget: "Mid",
      itinerary: [
        {
          day: 1,
          title: "Rishikesh Adventure & Spirituality",
          places: [
            {
              name: "Beatles Ashram",
              description: "Abandoned ashram with graffiti art",
              image: "/taj.jpg",
              rating: 4.4,
              type: "Heritage"
            },
            {
              name: "Neelkanth Mahadev Temple",
              description: "Ancient Shiva temple in mountains",
              image: "/taj2.jpg",
              rating: 4.3,
              type: "Religious"
            }
          ],
          hotels: [
            {
              name: "Dewa Retreat",
              description: "Riverside resort with spa",
              image: "/taj.jpg",
              rating: 4.3,
              price: "₹4000/night"
            },
            {
              name: "Aloha on the Ganges",
              description: "Boutique resort with yoga programs",
              image: "/taj2.jpg",
              rating: 4.4,
              price: "₹5000/night"
            }
          ],
          description: "Combine adventure sports with spiritual experiences.",
          activities: ["White water rafting", "Meditation", "Nature walks"]
        }
      ]
    },
    {
      destination: "Uttarakhand",
      days: 6,
      budget: "Luxury",
      itinerary: [
        {
          day: 1,
          title: "Luxury Wellness Retreat",
          places: [
            {
              name: "Rajaji National Park",
              description: "Wildlife sanctuary with elephants",
              image: "/taj.jpg",
              rating: 4.5,
              type: "Wildlife"
            },
            {
              name: "Har Ki Pauri",
              description: "Sacred ghat in Haridwar",
              image: "/taj2.jpg",
              rating: 4.6,
              type: "Religious"
            }
          ],
          hotels: [
            {
              name: "Ananda in the Himalayas",
              description: "Luxury wellness resort and spa",
              image: "/taj.jpg",
              rating: 4.8,
              price: "₹25000/night"
            },
            {
              name: "Taj Rishikesh Resort & Spa",
              description: "Luxury resort with Ganges views",
              image: "/taj2.jpg",
              rating: 4.7,
              price: "₹18000/night"
            }
          ],
          description: "Indulge in luxury wellness experiences in the Himalayas.",
          activities: ["Luxury spa treatments", "Private yoga", "Helicopter tours"]
        }
      ]
    }
  ]
};

export default itinerariesData;
