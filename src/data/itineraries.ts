export interface ItineraryDay {
  day: number;
  title: string;
  places: string[];
  hotels: string[];
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
          places: ["Hawa Mahal", "City Palace", "Jantar Mantar"],
          hotels: ["Hotel Pearl Palace", "Rambagh Palace"],
          description: "Explore the magnificent Pink City with its royal heritage and stunning architecture.",
          activities: ["Palace tour", "Local market shopping", "Traditional Rajasthani dinner"]
        },
        {
          day: 2,
          title: "Jaipur Sightseeing",
          places: ["Amber Fort", "Jal Mahal", "Nahargarh Fort"],
          hotels: ["Hotel Pearl Palace", "Rambagh Palace"],
          description: "Visit the majestic forts and experience the royal grandeur of Rajasthan.",
          activities: ["Elephant ride", "Fort exploration", "Sunset viewing"]
        },
        {
          day: 3,
          title: "Journey to Jodhpur - The Blue City",
          places: ["Mehrangarh Fort", "Jaswant Thada", "Clock Tower Market"],
          hotels: ["Ajit Bhawan", "Umaid Bhawan Palace"],
          description: "Travel to the Blue City and explore its magnificent fort and vibrant markets.",
          activities: ["Fort museum visit", "Local handicraft shopping", "Blue city walk"]
        },
        {
          day: 4,
          title: "Jodhpur to Udaipur - City of Lakes",
          places: ["City Palace Udaipur", "Lake Pichola", "Jag Mandir"],
          hotels: ["Hotel Udaivilas", "Shiv Niwas Palace"],
          description: "Experience the romantic city of lakes with its beautiful palaces and serene waters.",
          activities: ["Boat ride", "Palace visit", "Lakeside dinner"]
        },
        {
          day: 5,
          title: "Udaipur Exploration & Departure",
          places: ["Saheliyon Ki Bari", "Fateh Sagar Lake", "Bagore Ki Haveli"],
          hotels: ["Hotel Udaivilas", "Shiv Niwas Palace"],
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
          places: ["Fort Kochi", "Chinese Fishing Nets", "St. Francis Church"],
          hotels: ["Casino Hotel", "Taj Malabar Resort"],
          description: "Explore the historic port city with its colonial charm and maritime heritage.",
          activities: ["Heritage walk", "Spice market visit", "Kathakali performance"]
        },
        {
          day: 2,
          title: "Munnar Hill Station",
          places: ["Tea Gardens", "Mattupetty Dam", "Echo Point"],
          hotels: ["Windermere Estate", "Tea Valley Resort"],
          description: "Journey to the beautiful hill station famous for tea plantations.",
          activities: ["Tea factory tour", "Nature walks", "Boating"]
        },
        {
          day: 3,
          title: "Thekkady Wildlife Experience",
          places: ["Periyar Wildlife Sanctuary", "Spice Plantations", "Kumily"],
          hotels: ["Spice Village", "Cardamom County"],
          description: "Wildlife safari and spice plantation tours in the Western Ghats.",
          activities: ["Jungle safari", "Spice tour", "Bamboo rafting"]
        },
        {
          day: 4,
          title: "Alleppey Backwaters",
          places: ["Backwater Canals", "Kumarakom", "Vembanad Lake"],
          hotels: ["Houseboat Stay", "Kumarakom Lake Resort"],
          description: "Experience the serene backwaters on traditional houseboats.",
          activities: ["Houseboat cruise", "Village visit", "Ayurvedic massage"]
        },
        {
          day: 5,
          title: "Kovalam Beach Relaxation",
          places: ["Lighthouse Beach", "Hawah Beach", "Samudra Beach"],
          hotels: ["Leela Kovalam", "Taj Green Cove"],
          description: "Relax on the pristine beaches and enjoy water activities.",
          activities: ["Beach relaxation", "Water sports", "Sunset viewing"]
        },
        {
          day: 6,
          title: "Trivandrum & Departure",
          places: ["Padmanabhaswamy Temple", "Napier Museum", "Zoo"],
          hotels: ["Leela Kovalam", "Taj Green Cove"],
          description: "Explore the capital city before departure.",
          activities: ["Temple visit", "Museum tour", "Shopping"]
        }
      ]
    }
  ]
};