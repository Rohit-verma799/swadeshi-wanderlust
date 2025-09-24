// Types and interfaces
export interface Place {
  name: string;
  description: string;
  image: string;
  rating: number;
  type: string;
  duration?: string;
}

export interface Hotel {
  name: string;
  description: string;
  image: string;
  rating: number;
  price: string;
  type?: string;
  amenities?: string[];
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
              type: "Palace",
              duration: "2-3 hours"
            },
            {
              name: "Hawa Mahal",
              description: "Iconic Palace of Winds with intricate facade",
              image: "/taj2.jpg",
              rating: 4.3,
              type: "Heritage",
              duration: "1 hour"
            }
          ],
          hotels: [
            {
              name: "Hotel Pearl Palace",
              description: "Heritage hotel with traditional Rajasthani architecture",
              image: "/taj.jpg",
              rating: 4.0,
              price: "₹2500/night",
              type: "Heritage Hotel",
              amenities: ["WiFi", "Restaurant", "AC", "Room Service"]
            },
            {
              name: "Zostel Jaipur",
              description: "Modern hostel with backpacker-friendly amenities",
              image: "/taj2.jpg",
              rating: 4.2,
              price: "₹800/night",
              type: "Hostel",
              amenities: ["WiFi", "Common Area", "Kitchen", "Laundry"]
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
              type: "Fort",
              duration: "3-4 hours"
            }
          ],
          hotels: [
            {
              name: "Hotel Pearl Palace",
              description: "Heritage hotel with traditional Rajasthani architecture",
              image: "/taj.jpg",
              rating: 4.0,
              price: "₹2500/night",
              type: "Heritage Hotel",
              amenities: ["WiFi", "Restaurant", "AC", "Room Service"]
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
              type: "Religious",
              duration: "1-2 hours"
            },
            {
              name: "Brahma Temple",
              description: "Rare temple dedicated to Lord Brahma",
              image: "/taj2.jpg",
              rating: 4.2,
              type: "Temple",
              duration: "1 hour"
            }
          ],
          hotels: [
            {
              name: "Zostel Pushkar",
              description: "Vibrant hostel in the heart of Pushkar",
              image: "/taj.jpg",
              rating: 4.1,
              price: "₹600/night",
              type: "Hostel",
              amenities: ["WiFi", "Common Area", "Kitchen", "Rooftop"]
            }
          ],
          description: "Experience the spiritual ambiance of the holy city of Pushkar.",
          activities: ["Temple visit", "Lake aarti", "Camel safari"]
        }
      ]
    }
  ]
};

export const sampleItineraries = itinerariesData;
export type { Itinerary };
export default itinerariesData;