export interface Place {
  name: string;
  image: string;
  type: 'cultural' | 'natural' | 'adventure' | 'religious' | 'historical';
}

export interface Hotel {
  name: string;
  image: string;
  price: string;
  rating: number;
  type: 'luxury' | 'budget' | 'heritage' | 'boutique';
}

export interface ItineraryDay {
  day: number;
  title: string;
  places: Place[];
  hotels: Hotel[];
  description: string;
  activities: string[];
}

export interface Itinerary {
  destination: string;
  days: number;
  budget: string;
  itinerary: ItineraryDay[];
}

export const sampleItineraries: Record<string, Itinerary[]> = {
  "Rajasthan": [
    {
      destination: "Rajasthan",
      days: 5,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Jaipur - The Pink City",
          places: [
            { name: "Hawa Mahal", image: "/taj.jpg", type: "historical" },
            { name: "City Palace", image: "/taj2.jpg", type: "cultural" },
            { name: "Jantar Mantar", image: "/taj.jpg", type: "historical" }
          ],
          hotels: [
            { name: "Hotel Pearl Palace", image: "/taj2.jpg", price: "₹3,500/night", rating: 4.2, type: "heritage" },
            { name: "Rambagh Palace", image: "/taj.jpg", price: "₹15,000/night", rating: 4.8, type: "luxury" }
          ],
          description: "Explore the magnificent Pink City with its royal heritage and stunning architecture.",
          activities: ["Palace tour", "Local market shopping", "Traditional Rajasthani dinner"]
        },
        {
          day: 2,
          title: "Jaipur Sightseeing",
          places: [
            { name: "Amber Fort", image: "/taj.jpg", type: "historical" },
            { name: "Jal Mahal", image: "/taj2.jpg", type: "cultural" },
            { name: "Nahargarh Fort", image: "/taj.jpg", type: "historical" }
          ],
          hotels: [
            { name: "Hotel Pearl Palace", image: "/taj2.jpg", price: "₹3,500/night", rating: 4.2, type: "heritage" },
            { name: "Rambagh Palace", image: "/taj.jpg", price: "₹15,000/night", rating: 4.8, type: "luxury" }
          ],
          description: "Visit the majestic forts and experience the royal grandeur of Rajasthan.",
          activities: ["Elephant ride", "Fort exploration", "Sunset viewing"]
        },
        {
          day: 3,
          title: "Journey to Jodhpur - The Blue City",
          places: [
            { name: "Mehrangarh Fort", image: "/taj.jpg", type: "historical" },
            { name: "Jaswant Thada", image: "/taj2.jpg", type: "cultural" },
            { name: "Clock Tower Market", image: "/taj.jpg", type: "cultural" }
          ],
          hotels: [
            { name: "Ajit Bhawan", image: "/taj2.jpg", price: "₹8,500/night", rating: 4.5, type: "heritage" },
            { name: "Umaid Bhawan Palace", image: "/taj.jpg", price: "₹25,000/night", rating: 4.9, type: "luxury" }
          ],
          description: "Travel to the Blue City and explore its magnificent fort and vibrant markets.",
          activities: ["Fort museum visit", "Local handicraft shopping", "Blue city walk"]
        },
        {
          day: 4,
          title: "Jodhpur to Udaipur - City of Lakes",
          places: [
            { name: "City Palace Udaipur", image: "/taj.jpg", type: "cultural" },
            { name: "Lake Pichola", image: "/taj2.jpg", type: "natural" },
            { name: "Jag Mandir", image: "/taj.jpg", type: "historical" }
          ],
          hotels: [
            { name: "Hotel Udaivilas", image: "/taj2.jpg", price: "₹35,000/night", rating: 4.9, type: "luxury" },
            { name: "Shiv Niwas Palace", image: "/taj.jpg", price: "₹18,000/night", rating: 4.7, type: "heritage" }
          ],
          description: "Experience the romantic city of lakes with its beautiful palaces and serene waters.",
          activities: ["Boat ride", "Palace visit", "Lakeside dinner"]
        },
        {
          day: 5,
          title: "Udaipur Exploration & Departure",
          places: [
            { name: "Saheliyon Ki Bari", image: "/taj.jpg", type: "natural" },
            { name: "Fateh Sagar Lake", image: "/taj2.jpg", type: "natural" },
            { name: "Bagore Ki Haveli", image: "/taj.jpg", type: "cultural" }
          ],
          hotels: [
            { name: "Hotel Udaivilas", image: "/taj2.jpg", price: "₹35,000/night", rating: 4.9, type: "luxury" },
            { name: "Shiv Niwas Palace", image: "/taj.jpg", price: "₹18,000/night", rating: 4.7, type: "heritage" }
          ],
          description: "Final day exploring the gardens and cultural sites before departure.",
          activities: ["Garden visit", "Cultural show", "Shopping for souvenirs"]
        }
      ]
    }
  ],
  "Kerala": [
    {
      destination: "Kerala",
      days: 6,
      budget: "High",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kochi - Gateway to Kerala",
          places: [
            { name: "Fort Kochi", image: "/taj.jpg", type: "historical" },
            { name: "Chinese Fishing Nets", image: "/taj2.jpg", type: "cultural" },
            { name: "St. Francis Church", image: "/taj.jpg", type: "religious" }
          ],
          hotels: [
            { name: "Casino Hotel", image: "/taj2.jpg", price: "₹8,500/night", rating: 4.3, type: "luxury" },
            { name: "Taj Malabar Resort", image: "/taj.jpg", price: "₹12,000/night", rating: 4.6, type: "luxury" }
          ],
          description: "Explore the historic port city with its colonial charm and maritime heritage.",
          activities: ["Heritage walk", "Spice market visit", "Kathakali performance"]
        },
        {
          day: 2,
          title: "Munnar Hill Station",
          places: [
            { name: "Tea Gardens", image: "/taj.jpg", type: "natural" },
            { name: "Mattupetty Dam", image: "/taj2.jpg", type: "natural" },
            { name: "Echo Point", image: "/taj.jpg", type: "natural" }
          ],
          hotels: [
            { name: "Windermere Estate", image: "/taj2.jpg", price: "₹6,500/night", rating: 4.4, type: "heritage" },
            { name: "Tea Valley Resort", image: "/taj.jpg", price: "₹4,500/night", rating: 4.1, type: "boutique" }
          ],
          description: "Journey to the beautiful hill station famous for tea plantations.",
          activities: ["Tea factory tour", "Nature walks", "Boating"]
        },
        {
          day: 3,
          title: "Thekkady Wildlife Experience",
          places: [
            { name: "Periyar Wildlife Sanctuary", image: "/taj.jpg", type: "adventure" },
            { name: "Spice Plantations", image: "/taj2.jpg", type: "natural" },
            { name: "Kumily", image: "/taj.jpg", type: "cultural" }
          ],
          hotels: [
            { name: "Spice Village", image: "/taj2.jpg", price: "₹7,500/night", rating: 4.5, type: "boutique" },
            { name: "Cardamom County", image: "/taj.jpg", price: "₹5,500/night", rating: 4.2, type: "heritage" }
          ],
          description: "Wildlife safari and spice plantation tours in the Western Ghats.",
          activities: ["Jungle safari", "Spice tour", "Bamboo rafting"]
        },
        {
          day: 4,
          title: "Alleppey Backwaters",
          places: [
            { name: "Backwater Canals", image: "/taj.jpg", type: "natural" },
            { name: "Kumarakom", image: "/taj2.jpg", type: "natural" },
            { name: "Vembanad Lake", image: "/taj.jpg", type: "natural" }
          ],
          hotels: [
            { name: "Houseboat Stay", image: "/taj2.jpg", price: "₹9,500/night", rating: 4.7, type: "boutique" },
            { name: "Kumarakom Lake Resort", image: "/taj.jpg", price: "₹15,000/night", rating: 4.8, type: "luxury" }
          ],
          description: "Experience the serene backwaters on traditional houseboats.",
          activities: ["Houseboat cruise", "Village visit", "Ayurvedic massage"]
        },
        {
          day: 5,
          title: "Kovalam Beach Relaxation",
          places: [
            { name: "Lighthouse Beach", image: "/taj.jpg", type: "natural" },
            { name: "Hawah Beach", image: "/taj2.jpg", type: "natural" },
            { name: "Samudra Beach", image: "/taj.jpg", type: "natural" }
          ],
          hotels: [
            { name: "Leela Kovalam", image: "/taj2.jpg", price: "₹18,000/night", rating: 4.9, type: "luxury" },
            { name: "Taj Green Cove", image: "/taj.jpg", price: "₹22,000/night", rating: 4.8, type: "luxury" }
          ],
          description: "Relax on the pristine beaches and enjoy water activities.",
          activities: ["Beach relaxation", "Water sports", "Sunset viewing"]
        },
        {
          day: 6,
          title: "Trivandrum & Departure",
          places: [
            { name: "Padmanabhaswamy Temple", image: "/taj.jpg", type: "religious" },
            { name: "Napier Museum", image: "/taj2.jpg", type: "cultural" },
            { name: "Zoo", image: "/taj.jpg", type: "adventure" }
          ],
          hotels: [
            { name: "Leela Kovalam", image: "/taj2.jpg", price: "₹18,000/night", rating: 4.9, type: "luxury" },
            { name: "Taj Green Cove", image: "/taj.jpg", price: "₹22,000/night", rating: 4.8, type: "luxury" }
          ],
          description: "Explore the capital city before departure.",
          activities: ["Temple visit", "Museum tour", "Shopping"]
        }
      ]
    }
  ]
};