export interface Place {
  name: string;
  image: string;
  type: 'cultural' | 'natural' | 'adventure' | 'religious' | 'historical';
  description: string;
  duration: string;
}

export interface Hotel {
  name: string;
  image: string;
  price: string;
  rating: number;
  type: 'luxury' | 'budget' | 'heritage' | 'boutique';
  description: string;
  amenities: string[];
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
  budget: number; // Changed from string to number for slider
  itinerary: ItineraryDay[];
}

export const sampleItineraries: Record<string, Itinerary[]> = {
  "Rajasthan": [
    {
      destination: "Rajasthan",
      days: 15,
      budget: 25000, // Medium budget in rupees
      itinerary: [
        {
          day: 1,
          title: "Arrival in Jaipur - The Pink City",
          places: [
            { name: "Hawa Mahal", image: "/taj.jpg", type: "historical", description: "Palace of Winds with 953 small windows", duration: "2 hours" },
            { name: "City Palace", image: "/taj2.jpg", type: "cultural", description: "Royal residence with museums and courtyards", duration: "3 hours" },
            { name: "Jantar Mantar", image: "/taj.jpg", type: "historical", description: "UNESCO World Heritage astronomical observatory", duration: "1.5 hours" }
          ],
          hotels: [
            { name: "Hotel Pearl Palace", image: "/taj2.jpg", price: "₹3,500/night", rating: 4.2, type: "heritage", description: "Charming heritage hotel in the heart of Pink City", amenities: ["Free WiFi", "Traditional Decor", "Rooftop Restaurant"] },
            { name: "Rambagh Palace", image: "/taj.jpg", price: "₹15,000/night", rating: 4.8, type: "luxury", description: "Former residence of Maharaja, now luxury hotel", amenities: ["Spa", "Swimming Pool", "Butler Service", "Fine Dining"] }
          ],
          description: "Explore the magnificent Pink City with its royal heritage and stunning architecture.",
          activities: ["Palace tour", "Local market shopping", "Traditional Rajasthani dinner"]
        },
        {
          day: 2,
          title: "Jaipur Sightseeing",
          places: [
            { name: "Amber Fort", image: "/taj.jpg", type: "historical", description: "Hilltop fort with elephant rides and mirror palace", duration: "4 hours" },
            { name: "Jal Mahal", image: "/taj2.jpg", type: "cultural", description: "Water palace in middle of Man Sagar Lake", duration: "1 hour" },
            { name: "Nahargarh Fort", image: "/taj.jpg", type: "historical", description: "Fort offering panoramic views of Jaipur", duration: "2 hours" }
          ],
          hotels: [
            { name: "Hotel Pearl Palace", image: "/taj2.jpg", price: "₹3,500/night", rating: 4.2, type: "heritage", description: "Charming heritage hotel in the heart of Pink City", amenities: ["Free WiFi", "Traditional Decor", "Rooftop Restaurant"] },
            { name: "Rambagh Palace", image: "/taj.jpg", price: "₹15,000/night", rating: 4.8, type: "luxury", description: "Former residence of Maharaja, now luxury hotel", amenities: ["Spa", "Swimming Pool", "Butler Service", "Fine Dining"] }
          ],
          description: "Visit the majestic forts and experience the royal grandeur of Rajasthan.",
          activities: ["Elephant ride", "Fort exploration", "Sunset viewing"]
        },
        {
          day: 3,
          title: "Journey to Jodhpur - The Blue City",
          places: [
            { name: "Mehrangarh Fort", image: "/taj.jpg", type: "historical", description: "One of India's largest forts with museum", duration: "3 hours" },
            { name: "Jaswant Thada", image: "/taj2.jpg", type: "cultural", description: "White marble memorial with intricate carvings", duration: "1 hour" },
            { name: "Clock Tower Market", image: "/taj.jpg", type: "cultural", description: "Bustling market around historic clock tower", duration: "2 hours" }
          ],
          hotels: [
            { name: "Ajit Bhawan", image: "/taj2.jpg", price: "₹8,500/night", rating: 4.5, type: "heritage", description: "Art Deco palace hotel with gardens", amenities: ["Swimming Pool", "Spa", "Village Safari", "Cultural Shows"] },
            { name: "Umaid Bhawan Palace", image: "/taj.jpg", price: "₹25,000/night", rating: 4.9, type: "luxury", description: "World's largest private residence, part museum", amenities: ["Museum", "Spa", "Fine Dining", "Butler Service"] }
          ],
          description: "Travel to the Blue City and explore its magnificent fort and vibrant markets.",
          activities: ["Fort museum visit", "Local handicraft shopping", "Blue city walk"]
        },
        {
          day: 4,
          title: "Jodhpur to Udaipur - City of Lakes",
          places: [
            { name: "City Palace Udaipur", image: "/taj.jpg", type: "cultural", description: "Magnificent palace complex with lake views", duration: "3 hours" },
            { name: "Lake Pichola", image: "/taj2.jpg", type: "natural", description: "Artificial lake with palace islands", duration: "2 hours" },
            { name: "Jag Mandir", image: "/taj.jpg", type: "historical", description: "Palace on island in Lake Pichola", duration: "1.5 hours" }
          ],
          hotels: [
            { name: "Hotel Udaivilas", image: "/taj2.jpg", price: "₹35,000/night", rating: 4.9, type: "luxury", description: "Luxury resort on Lake Pichola banks", amenities: ["Private Pool Villas", "Spa", "Boat Rides", "Fine Dining"] },
            { name: "Shiv Niwas Palace", image: "/taj.jpg", price: "₹18,000/night", rating: 4.7, type: "heritage", description: "Former royal guest house, now heritage hotel", amenities: ["Lake Views", "Heritage Architecture", "Swimming Pool", "Garden"] }
          ],
          description: "Experience the romantic city of lakes with its beautiful palaces and serene waters.",
          activities: ["Boat ride", "Palace visit", "Lakeside dinner"]
        },
        {
          day: 5,
          title: "Udaipur Exploration",
          places: [
            { name: "Saheliyon Ki Bari", image: "/taj.jpg", type: "natural", description: "Garden of maids with fountains and marble elephants", duration: "1.5 hours" },
            { name: "Fateh Sagar Lake", image: "/taj2.jpg", type: "natural", description: "Artificial lake with three islands", duration: "2 hours" },
            { name: "Bagore Ki Haveli", image: "/taj.jpg", type: "cultural", description: "Historic haveli with cultural museum", duration: "2 hours" }
          ],
          hotels: [
            { name: "Hotel Udaivilas", image: "/taj2.jpg", price: "₹35,000/night", rating: 4.9, type: "luxury", description: "Luxury resort on Lake Pichola banks", amenities: ["Private Pool Villas", "Spa", "Boat Rides", "Fine Dining"] },
            { name: "Shiv Niwas Palace", image: "/taj.jpg", price: "₹18,000/night", rating: 4.7, type: "heritage", description: "Former royal guest house, now heritage hotel", amenities: ["Lake Views", "Heritage Architecture", "Swimming Pool", "Garden"] }
          ],
          description: "Explore the gardens and cultural sites of the Lake City.",
          activities: ["Garden visit", "Cultural show", "Shopping for souvenirs"]
        },
        {
          day: 6,
          title: "Mount Abu - Hill Station Retreat",
          places: [
            { name: "Dilwara Temples", image: "/taj.jpg", type: "religious", description: "Stunning Jain temples with marble carvings", duration: "2 hours" },
            { name: "Nakki Lake", image: "/taj2.jpg", type: "natural", description: "Sacred lake surrounded by hills", duration: "1.5 hours" },
            { name: "Sunset Point", image: "/taj.jpg", type: "natural", description: "Popular viewpoint for sunset views", duration: "1 hour" }
          ],
          hotels: [
            { name: "Hilltone Resort", image: "/taj2.jpg", price: "₹4,500/night", rating: 4.1, type: "boutique", description: "Hill resort with valley views", amenities: ["Mountain Views", "Garden", "Restaurant", "Bonfire"] },
            { name: "Hotel Hillock", image: "/taj.jpg", price: "₹6,500/night", rating: 4.3, type: "heritage", description: "Heritage hotel in hill station", amenities: ["Colonial Architecture", "Garden", "Multi-cuisine Restaurant"] }
          ],
          description: "Cool retreat in Rajasthan's only hill station with temples and lakes.",
          activities: ["Temple visit", "Boating", "Nature walks"]
        },
        {
          day: 7,
          title: "Pushkar - Sacred City",
          places: [
            { name: "Brahma Temple", image: "/taj.jpg", type: "religious", description: "One of few temples dedicated to Lord Brahma", duration: "1 hour" },
            { name: "Pushkar Lake", image: "/taj2.jpg", type: "religious", description: "Sacred lake with 52 ghats", duration: "1.5 hours" },
            { name: "Pushkar Bazaar", image: "/taj.jpg", type: "cultural", description: "Colorful market with handicrafts and souvenirs", duration: "2 hours" }
          ],
          hotels: [
            { name: "Ananta Spa & Resort", image: "/taj2.jpg", price: "₹7,500/night", rating: 4.4, type: "luxury", description: "Desert resort with spa facilities", amenities: ["Spa", "Swimming Pool", "Desert Views", "Cultural Shows"] },
            { name: "Pushkar Palace", image: "/taj.jpg", price: "₹5,500/night", rating: 4.2, type: "heritage", description: "Heritage hotel overlooking sacred lake", amenities: ["Lake Views", "Traditional Decor", "Rooftop Restaurant"] }
          ],
          description: "Experience the spiritual atmosphere of this sacred pilgrimage town.",
          activities: ["Temple darshan", "Holy dip in lake", "Camel safari"]
        },
        {
          day: 8,
          title: "Jaisalmer - Golden City",
          places: [
            { name: "Jaisalmer Fort", image: "/taj.jpg", type: "historical", description: "Living fort with shops and restaurants inside", duration: "4 hours" },
            { name: "Patwon Ki Haveli", image: "/taj2.jpg", type: "cultural", description: "Cluster of five elaborate havelis", duration: "2 hours" },
            { name: "Gadisar Lake", image: "/taj.jpg", type: "cultural", description: "Artificial lake with temples and ghats", duration: "1 hour" }
          ],
          hotels: [
            { name: "Suryagarh", image: "/taj2.jpg", price: "₹22,000/night", rating: 4.8, type: "luxury", description: "Luxury fort-style resort in Thar Desert", amenities: ["Spa", "Swimming Pool", "Desert Safari", "Fine Dining"] },
            { name: "Fort Rajwada", image: "/taj.jpg", price: "₹8,500/night", rating: 4.3, type: "heritage", description: "Heritage hotel designed like a fort", amenities: ["Traditional Architecture", "Swimming Pool", "Multi-cuisine Restaurant"] }
          ],
          description: "Explore the golden sandstone fort and havelis of the desert city.",
          activities: ["Fort exploration", "Haveli visit", "Evening at lake"]
        },
        {
          day: 9,
          title: "Desert Safari Experience",
          places: [
            { name: "Sam Sand Dunes", image: "/taj.jpg", type: "adventure", description: "Desert dunes perfect for camel safari", duration: "4 hours" },
            { name: "Kuldhara Village", image: "/taj2.jpg", type: "historical", description: "Abandoned village with mysterious history", duration: "2 hours" },
            { name: "Desert Camp", image: "/taj.jpg", type: "adventure", description: "Traditional desert camping experience", duration: "Overnight" }
          ],
          hotels: [
            { name: "Desert Camp", image: "/taj2.jpg", price: "₹6,500/night", rating: 4.2, type: "boutique", description: "Luxury tents in desert with cultural programs", amenities: ["Desert Tents", "Cultural Shows", "Camel Safari", "Bonfire"] },
            { name: "Suryagarh", image: "/taj.jpg", price: "₹22,000/night", rating: 4.8, type: "luxury", description: "Luxury fort-style resort in Thar Desert", amenities: ["Spa", "Swimming Pool", "Desert Safari", "Fine Dining"] }
          ],
          description: "Immerse in desert life with camel safari and overnight camping.",
          activities: ["Camel safari", "Desert camping", "Folk dance show"]
        },
        {
          day: 10,
          title: "Bikaner - Camel City",
          places: [
            { name: "Junagarh Fort", image: "/taj.jpg", type: "historical", description: "Unconquered fort with beautiful palaces inside", duration: "3 hours" },
            { name: "Karni Mata Temple", image: "/taj2.jpg", type: "religious", description: "Temple famous for sacred rats", duration: "1.5 hours" },
            { name: "Camel Breeding Farm", image: "/taj.jpg", type: "adventure", description: "Government camel breeding and research center", duration: "1 hour" }
          ],
          hotels: [
            { name: "Laxmi Niwas Palace", image: "/taj2.jpg", price: "₹9,500/night", rating: 4.4, type: "heritage", description: "Former royal residence turned heritage hotel", amenities: ["Heritage Architecture", "Swimming Pool", "Garden", "Museum"] },
            { name: "Gajner Palace", image: "/taj.jpg", price: "₹7,500/night", rating: 4.2, type: "heritage", description: "Lakeside palace hotel surrounded by forest", amenities: ["Lake Views", "Wildlife", "Boating", "Heritage Decor"] }
          ],
          description: "Discover the desert city famous for camels and unconquered fort.",
          activities: ["Fort visit", "Camel interaction", "Local cuisine tasting"]
        },
        {
          day: 11,
          title: "Shekhawati - Open Art Gallery",
          places: [
            { name: "Mandawa Fort", image: "/taj.jpg", type: "historical", description: "Fort town with painted havelis", duration: "2 hours" },
            { name: "Nawalgarh Havelis", image: "/taj2.jpg", type: "cultural", description: "Beautifully painted merchant havelis", duration: "3 hours" },
            { name: "Fatehpur", image: "/taj.jpg", type: "cultural", description: "Town with numerous decorated havelis", duration: "2 hours" }
          ],
          hotels: [
            { name: "Castle Mandawa", image: "/taj2.jpg", price: "₹6,500/night", rating: 4.3, type: "heritage", description: "Heritage fort hotel with frescoed walls", amenities: ["Heritage Frescoes", "Camel Safari", "Cultural Tours", "Rooftop Dining"] },
            { name: "Roop Niwas Palace", image: "/taj.jpg", price: "₹5,500/night", rating: 4.1, type: "heritage", description: "Palace hotel in painted haveli town", amenities: ["Palace Architecture", "Garden", "Heritage Tours", "Traditional Cuisine"] }
          ],
          description: "Explore the outdoor art gallery region with beautiful frescoed havelis.",
          activities: ["Haveli hopping", "Fresco appreciation", "Heritage walk"]
        },
        {
          day: 12,
          title: "Alwar - Gateway to Rajasthan",
          places: [
            { name: "Bala Quila Fort", image: "/taj.jpg", type: "historical", description: "Ancient fort on Aravalli hills", duration: "2.5 hours" },
            { name: "Sariska Tiger Reserve", image: "/taj2.jpg", type: "adventure", description: "Tiger reserve in Aravalli hills", duration: "4 hours" },
            { name: "City Palace Museum", image: "/taj.jpg", type: "cultural", description: "Palace with Indo-Islamic architecture", duration: "1.5 hours" }
          ],
          hotels: [
            { name: "Alwar Bagh Resort", image: "/taj2.jpg", price: "₹4,500/night", rating: 4.0, type: "boutique", description: "Garden resort near Sariska reserve", amenities: ["Garden Setting", "Swimming Pool", "Wildlife Tours", "Multi-cuisine Restaurant"] },
            { name: "Heritage Hotel Tijara Fort", image: "/taj.jpg", price: "₹8,500/night", rating: 4.4, type: "heritage", description: "19th century fort converted to heritage hotel", amenities: ["Fort Architecture", "Heritage Suites", "Cultural Programs", "Nature Walks"] }
          ],
          description: "Explore historic fort and wildlife in the gateway city to Rajasthan.",
          activities: ["Fort climb", "Tiger safari", "Museum visit"]
        },
        {
          day: 13,
          title: "Bharatpur - Bird Paradise",
          places: [
            { name: "Keoladeo National Park", image: "/taj.jpg", type: "natural", description: "UNESCO World Heritage bird sanctuary", duration: "4 hours" },
            { name: "Bharatpur Palace", image: "/taj2.jpg", type: "cultural", description: "Mughal and Rajput architecture palace", duration: "2 hours" },
            { name: "Deeg Palace", image: "/taj.jpg", type: "historical", description: "Summer resort of Bharatpur rulers", duration: "2 hours" }
          ],
          hotels: [
            { name: "Laxmi Vilas Palace", image: "/taj2.jpg", price: "₹7,500/night", rating: 4.3, type: "heritage", description: "Heritage palace hotel near bird sanctuary", amenities: ["Heritage Architecture", "Garden", "Bird Watching Tours", "Swimming Pool"] },
            { name: "The Bagh Resort", image: "/taj.jpg", price: "₹5,500/night", rating: 4.1, type: "boutique", description: "Eco-friendly resort near Keoladeo park", amenities: ["Eco-friendly", "Bird Watching", "Cycling", "Nature Walks"] }
          ],
          description: "Discover the bird paradise and Mughal-Rajput architectural marvels.",
          activities: ["Bird watching", "Palace tour", "Nature photography"]
        },
        {
          day: 14,
          title: "Agra - Mughal Splendor",
          places: [
            { name: "Taj Mahal", image: "/taj.jpg", type: "historical", description: "UNESCO World Heritage monument of love", duration: "3 hours" },
            { name: "Agra Fort", image: "/taj2.jpg", type: "historical", description: "Red sandstone Mughal fort complex", duration: "2.5 hours" },
            { name: "Mehtab Bagh", image: "/taj.jpg", type: "cultural", description: "Garden with perfect Taj Mahal sunset view", duration: "1 hour" }
          ],
          hotels: [
            { name: "The Oberoi Amarvilas", image: "/taj2.jpg", price: "₹45,000/night", rating: 4.9, type: "luxury", description: "Luxury hotel with Taj Mahal views from all rooms", amenities: ["Taj Views", "Spa", "Fine Dining", "Butler Service", "Swimming Pool"] },
            { name: "ITC Mughal", image: "/taj.jpg", price: "₹12,000/night", rating: 4.6, type: "luxury", description: "Mughal-inspired luxury hotel near Taj Mahal", amenities: ["Mughal Architecture", "Spa", "Multiple Restaurants", "Swimming Pool"] }
          ],
          description: "Experience the pinnacle of Mughal architecture and romance.",
          activities: ["Taj Mahal sunrise", "Fort exploration", "Sunset at Mehtab Bagh"]
        },
        {
          day: 15,
          title: "Delhi - Capital Finale",
          places: [
            { name: "Red Fort", image: "/taj.jpg", type: "historical", description: "UNESCO World Heritage Mughal fort", duration: "2 hours" },
            { name: "India Gate", image: "/taj2.jpg", type: "cultural", description: "War memorial and iconic landmark", duration: "1 hour" },
            { name: "Qutub Minar", image: "/taj.jpg", type: "historical", description: "UNESCO World Heritage medieval tower", duration: "1.5 hours" }
          ],
          hotels: [
            { name: "The Imperial", image: "/taj2.jpg", price: "₹18,000/night", rating: 4.7, type: "heritage", description: "Colonial-era luxury hotel in heart of Delhi", amenities: ["Colonial Architecture", "Spa", "Fine Dining", "Business Center"] },
            { name: "The Leela Palace", image: "/taj.jpg", price: "₹25,000/night", rating: 4.8, type: "luxury", description: "Modern luxury hotel with traditional Indian hospitality", amenities: ["Luxury Suites", "Spa", "Rooftop Restaurant", "Shopping Arcade"] }
          ],
          description: "Conclude your Rajasthan journey in India's vibrant capital city.",
          activities: ["Historic monuments tour", "Shopping at Connaught Place", "Departure preparations"]
        }
      ]
    }
  ],
  "Kerala": [
    {
      destination: "Kerala",
      days: 10,
      budget: 35000, // High budget in rupees
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kochi - Gateway to Kerala",
          places: [
            { name: "Fort Kochi", image: "/taj.jpg", type: "historical", description: "Historic area with colonial architecture", duration: "3 hours" },
            { name: "Chinese Fishing Nets", image: "/taj2.jpg", type: "cultural", description: "Iconic fishing nets introduced by Chinese traders", duration: "1 hour" },
            { name: "St. Francis Church", image: "/taj.jpg", type: "religious", description: "Oldest European church in India", duration: "45 minutes" }
          ],
          hotels: [
            { name: "Casino Hotel", image: "/taj2.jpg", price: "₹8,500/night", rating: 4.3, type: "luxury", description: "Waterfront luxury hotel with harbor views", amenities: ["Harbor Views", "Swimming Pool", "Spa", "Multi-cuisine Restaurant"] },
            { name: "Taj Malabar Resort", image: "/taj.jpg", price: "₹12,000/night", rating: 4.6, type: "luxury", description: "Heritage hotel on Willingdon Island", amenities: ["Island Location", "Swimming Pool", "Ayurvedic Spa", "Fine Dining"] }
          ],
          description: "Explore the historic port city with its colonial charm and maritime heritage.",
          activities: ["Heritage walk", "Spice market visit", "Kathakali performance"]
        },
        {
          day: 2,
          title: "Munnar Hill Station",
          places: [
            { name: "Tea Gardens", image: "/taj.jpg", type: "natural", description: "Endless green tea plantations in rolling hills", duration: "4 hours" },
            { name: "Mattupetty Dam", image: "/taj2.jpg", type: "natural", description: "Scenic dam with boating facilities", duration: "2 hours" },
            { name: "Echo Point", image: "/taj.jpg", type: "natural", description: "Hilltop point famous for natural echo phenomenon", duration: "1 hour" }
          ],
          hotels: [
            { name: "Windermere Estate", image: "/taj2.jpg", price: "₹6,500/night", rating: 4.4, type: "heritage", description: "Heritage plantation bungalow in tea gardens", amenities: ["Tea Garden Views", "Colonial Architecture", "Nature Walks", "Bonfire"] },
            { name: "Tea Valley Resort", image: "/taj.jpg", price: "₹4,500/night", rating: 4.1, type: "boutique", description: "Boutique resort overlooking tea valleys", amenities: ["Valley Views", "Organic Restaurant", "Spa", "Adventure Activities"] }
          ],
          description: "Journey to the beautiful hill station famous for tea plantations.",
          activities: ["Tea factory tour", "Nature walks", "Boating"]
        },
        {
          day: 3,
          title: "Thekkady Wildlife Experience",
          places: [
            { name: "Periyar Wildlife Sanctuary", image: "/taj.jpg", type: "adventure", description: "Famous tiger reserve with boat safari", duration: "5 hours" },
            { name: "Spice Plantations", image: "/taj2.jpg", type: "natural", description: "Aromatic spice gardens with guided tours", duration: "2 hours" },
            { name: "Kumily", image: "/taj.jpg", type: "cultural", description: "Border town with Kerala-Tamil Nadu culture blend", duration: "2 hours" }
          ],
          hotels: [
            { name: "Spice Village", image: "/taj2.jpg", price: "₹7,500/night", rating: 4.5, type: "boutique", description: "Eco-friendly resort in spice plantation setting", amenities: ["Spice Garden", "Tree House", "Ayurvedic Spa", "Nature Activities"] },
            { name: "Cardamom County", image: "/taj.jpg", price: "₹5,500/night", rating: 4.2, type: "heritage", description: "Plantation resort with cardamom estates", amenities: ["Plantation Tours", "Wildlife Safaris", "Swimming Pool", "Multi-cuisine Restaurant"] }
          ],
          description: "Wildlife safari and spice plantation tours in the Western Ghats.",
          activities: ["Jungle safari", "Spice tour", "Bamboo rafting"]
        },
        {
          day: 4,
          title: "Alleppey Backwaters",
          places: [
            { name: "Backwater Canals", image: "/taj.jpg", type: "natural", description: "Serene network of canals through coconut groves", duration: "Full day" },
            { name: "Kumarakom", image: "/taj2.jpg", type: "natural", description: "Bird sanctuary on Vembanad Lake shores", duration: "3 hours" },
            { name: "Vembanad Lake", image: "/taj.jpg", type: "natural", description: "India's longest lake with houseboats", duration: "4 hours" }
          ],
          hotels: [
            { name: "Houseboat Stay", image: "/taj2.jpg", price: "₹9,500/night", rating: 4.7, type: "boutique", description: "Traditional Kerala houseboat with modern amenities", amenities: ["Lake Views", "Traditional Cuisine", "Sunset Deck", "Privacy"] },
            { name: "Kumarakom Lake Resort", image: "/taj.jpg", price: "₹15,000/night", rating: 4.8, type: "luxury", description: "Luxury lake resort with villas", amenities: ["Lake Villas", "Ayurvedic Spa", "Infinity Pool", "Fine Dining"] }
          ],
          description: "Experience the serene backwaters on traditional houseboats.",
          activities: ["Houseboat cruise", "Village visit", "Ayurvedic massage"]
        },
        {
          day: 5,
          title: "Kovalam Beach Relaxation",
          places: [
            { name: "Lighthouse Beach", image: "/taj.jpg", type: "natural", description: "Famous beach with historic lighthouse", duration: "4 hours" },
            { name: "Hawah Beach", image: "/taj2.jpg", type: "natural", description: "Secluded beach perfect for relaxation", duration: "3 hours" },
            { name: "Samudra Beach", image: "/taj.jpg", type: "natural", description: "Pristine beach with golden sand", duration: "2 hours" }
          ],
          hotels: [
            { name: "Leela Kovalam", image: "/taj2.jpg", price: "₹18,000/night", rating: 4.9, type: "luxury", description: "Clifftop luxury resort overlooking Arabian Sea", amenities: ["Ocean Views", "Infinity Pool", "Spa", "Private Beach", "Fine Dining"] },
            { name: "Taj Green Cove", image: "/taj.jpg", price: "₹22,000/night", rating: 4.8, type: "luxury", description: "Luxury resort on cliff overlooking Kovalam", amenities: ["Cliff Views", "Multiple Pools", "Ayurvedic Spa", "Water Sports"] }
          ],
          description: "Relax on the pristine beaches and enjoy water activities.",
          activities: ["Beach relaxation", "Water sports", "Sunset viewing"]
        }
      ]
    }
  ],
  "Goa": [
    {
      destination: "Goa",
      days: 8,
      budget: 15000, // Low budget in rupees
      itinerary: [
        {
          day: 1,
          title: "North Goa Beaches",
          places: [
            { name: "Baga Beach", image: "/taj.jpg", type: "natural", description: "Popular beach with water sports and nightlife", duration: "4 hours" },
            { name: "Calangute Beach", image: "/taj2.jpg", type: "natural", description: "Queen of beaches with golden sand", duration: "2 hours" },
            { name: "Anjuna Beach", image: "/taj.jpg", type: "natural", description: "Hippie beach with Wednesday flea market", duration: "3 hours" }
          ],
          hotels: [
            { name: "Resort Terra Paraiso", image: "/taj2.jpg", price: "₹3,500/night", rating: 4.1, type: "budget", description: "Comfortable resort near Calangute beach", amenities: ["Swimming Pool", "Restaurant", "Free WiFi", "Beach Access"] },
            { name: "Hotel Baga Marina", image: "/taj.jpg", price: "₹2,800/night", rating: 3.9, type: "budget", description: "Budget hotel close to Baga beach", amenities: ["AC Rooms", "Restaurant", "Room Service", "Tourist Assistance"] }
          ],
          description: "Experience the vibrant beach life of North Goa.",
          activities: ["Beach hopping", "Water sports", "Beach shacks dining"]
        },
        {
          day: 2,
          title: "Old Goa Heritage",
          places: [
            { name: "Basilica of Bom Jesus", image: "/taj.jpg", type: "religious", description: "UNESCO World Heritage church with St. Francis Xavier's remains", duration: "1 hour" },
            { name: "Se Cathedral", image: "/taj2.jpg", type: "religious", description: "One of Asia's largest churches", duration: "45 minutes" },
            { name: "Archaeological Museum", image: "/taj.jpg", type: "cultural", description: "Museum showcasing Goan history and artifacts", duration: "1.5 hours" }
          ],
          hotels: [
            { name: "Resort Terra Paraiso", image: "/taj2.jpg", price: "₹3,500/night", rating: 4.1, type: "budget", description: "Comfortable resort near Calangute beach", amenities: ["Swimming Pool", "Restaurant", "Free WiFi", "Beach Access"] },
            { name: "Panjim Inn", image: "/taj.jpg", price: "₹4,200/night", rating: 4.2, type: "heritage", description: "Heritage hotel in Latin Quarter", amenities: ["Heritage Building", "Traditional Goan Cuisine", "Courtyard", "Cultural Tours"] }
          ],
          description: "Explore the rich Portuguese colonial heritage of Old Goa.",
          activities: ["Church visits", "Heritage walk", "Local cuisine tasting"]
        }
      ]
    }
  ],
  "Goa": [
    {
      destination: "Goa",
      days: 4,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "North Goa Beaches & Nightlife",
          places: ["Calangute Beach", "Baga Beach", "Anjuna Flea Market"],
          hotels: ["The Leela Goa", "W Goa"],
          description: "Discover the vibrant beaches and lively nightlife of North Goa.",
          activities: ["Water sports", "Beach shack hopping", "Night market shopping"]
        },
        {
          day: 2,
          title: "South Goa & Heritage",
          places: ["Palolem Beach", "Colva Beach", "Basilica of Bom Jesus"],
          hotels: ["Park Hyatt Goa Resort and Spa", "Taj Exotica Resort & Spa"],
          description: "Relax on the serene beaches of South Goa and explore its colonial heritage.",
          activities: ["Dolphin sighting tour", "Church visit", "Beach relaxation"]
        },
        {
          day: 3,
          title: "Old Goa & Spice Plantations",
          places: ["Se Cathedral", "Church of St. Cajetan", "Savoi Spice Plantation"],
          hotels: ["Park Hyatt Goa Resort and Spa", "Taj Exotica Resort & Spa"],
          description: "Explore the historical churches of Old Goa and immerse yourself in nature.",
          activities: ["Heritage site tour", "Spice plantation walk", "Goan cuisine cooking class"]
        },
        {
          day: 4,
          title: "Explore Panjim & Departure",
          places: ["Fontainhas", "Our Lady of the Immaculate Conception Church"],
          hotels: ["The Leela Goa", "W Goa"],
          description: "Wander through the colourful Latin Quarter of Panjim before departing.",
          activities: ["City walk", "Shopping for souvenirs", "Ferry ride"]
        }
      ]
    }
  ],
  "Himachal Pradesh": [
    {
      destination: "Himachal Pradesh",
      days: 7,
      budget: "Low",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Shimla - The Queen of Hills",
          places: ["The Mall Road", "Christ Church", "Jakhoo Temple"],
          hotels: ["The Oberoi Cecil", "Hotel Willow Banks"],
          description: "Start your Himalayan journey in the colonial charm of Shimla.",
          activities: ["Toy train ride", "Local market exploration", "Temple visit"]
        },
        {
          day: 2,
          title: "Shimla & Kufri Exploration",
          places: ["Kufri", "Himalayan Nature Park", "Fagu"],
          hotels: ["The Oberoi Cecil", "Hotel Willow Banks"],
          description: "Day trip to Kufri for snow activities and stunning views.",
          activities: ["Yak riding", "Adventure sports", "Nature photography"]
        },
        {
          day: 3,
          title: "Journey to Manali - Valley of Gods",
          places: ["Hadimba Temple", "Old Manali", "Manu Temple"],
          hotels: ["The Himalayan", "Solang Valley Resort"],
          description: "Travel to the picturesque town of Manali.",
          activities: ["Temple tour", "Walk along Beas River", "Cafe hopping"]
        },
        {
          day: 4,
          title: "Manali Adventure",
          places: ["Solang Valley", "Rohtang Pass (seasonal)", "Vashisht Hot Springs"],
          hotels: ["The Himalayan", "Solang Valley Resort"],
          description: "Engage in thrilling adventure activities amidst the snow-capped mountains.",
          activities: ["Paragliding", "Skiing (seasonal)", "River rafting"]
        },
        {
          day: 5,
          title: "Journey to Dalhousie",
          places: ["Khajjiar (Mini Switzerland of India)", "Chamba"],
          hotels: ["Fortune Khajjiar", "Grand View Hotel"],
          description: "Travel to the serene town of Dalhousie and visit Khajjiar.",
          activities: ["Nature walk", "Horse riding", "Boating"]
        },
        {
          day: 6,
          title: "Dalhousie & Local Sightseeing",
          places: ["St. Francis' Church", "Subhash Baoli", "Kalatop Wildlife Sanctuary"],
          hotels: ["Fortune Khajjiar", "Grand View Hotel"],
          description: "Explore the colonial architecture and natural beauty of Dalhousie.",
          activities: ["Trekking", "Nature photography", "Shopping"]
        },
        {
          day: 7,
          title: "Departure from Pathankot",
          places: ["Pathankot"],
          hotels: ["Fortune Khajjiar", "Grand View Hotel"],
          description: "Travel to Pathankot for your onward journey.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Uttarakhand": [
    {
      destination: "Uttarakhand",
      days: 6,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Dehradun & Mussoorie",
          places: ["Mall Road, Mussoorie", "Gun Hill"],
          hotels: ["JW Marriott Mussoorie Walnut Grove Resort & Spa", "The Claridges Nabha Residence"],
          description: "Begin your journey in the \"Queen of the Hills\" and explore its charming vistas.",
          activities: ["Ropeway ride", "Shopping on Mall Road", "Evening walk"]
        },
        {
          day: 2,
          title: "Mussoorie & Kempty Falls",
          places: ["Kempty Falls", "Company Garden", "Lal Tibba"],
          hotels: ["JW Marriott Mussoorie Walnut Grove Resort & Spa", "The Claridges Nabha Residence"],
          description: "Visit the famous Kempty Falls and enjoy the scenic beauty of Mussoorie.",
          activities: ["Boating", "Photography", "Sunset viewing"]
        },
        {
          day: 3,
          title: "Journey to Rishikesh - The Yoga Capital",
          places: ["Laxman Jhula", "Ram Jhula", "Parmarth Niketan Ashram"],
          hotels: ["Aloha on the Ganges", "Taj Rishikesh Resort & Spa"],
          description: "Travel to Rishikesh and immerse yourself in spirituality and adventure.",
          activities: ["Ganga Aarti ceremony", "Ashram visit", "River rafting"]
        },
        {
          day: 4,
          title: "Rishikesh Adventure & Spirituality",
          places: ["Neer Garh Waterfall", "Beatles Ashram"],
          hotels: ["Aloha on the Ganges", "Taj Rishikesh Resort & Spa"],
          description: "Experience thrilling activities and find peace at the famous ashram.",
          activities: ["Bungee jumping", "Trekking", "Meditation"]
        },
        {
          day: 5,
          title: "Journey to Nainital - The City of Lakes",
          places: ["Naini Lake", "Naina Devi Temple", "The Mall Road"],
          hotels: ["The Naini Retreat", "Cygnett Resort Mountain Vows"],
          description: "Travel to Nainital and enjoy a serene experience around its beautiful lake.",
          activities: ["Boating", "Temple visit", "Shopping"]
        },
        {
          day: 6,
          title: "Nainital Sightseeing & Departure",
          places: ["Snow View Point", "Tiffin Top", "Sattal"],
          hotels: ["The Naini Retreat", "Cygnett Resort Mountain Vows"],
          description: "Explore the scenic viewpoints and surrounding lakes before departure.",
          activities: ["Cable car ride", "Horse riding", "Photography"]
        }
      ]
    }
  ],
  "Jammu & Kashmir": [
    {
      destination: "Jammu & Kashmir",
      days: 7,
      budget: "High",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Srinagar - The Paradise on Earth",
          places: ["Dal Lake", "Shikara Ride", "Mughal Gardens"],
          hotels: ["The Lalit Grand Palace", "Taj Vivanta Dal View"],
          description: "Experience the serene beauty of Srinagar with a traditional Shikara ride on Dal Lake.",
          activities: ["Shikara ride", "Garden tour", "Shopping for Kashmiri handicrafts"]
        },
        {
          day: 2,
          title: "Srinagar & Gulmarg",
          places: ["Gulmarg Gondola", "Khilanmarg"],
          hotels: ["The Khyber Himalayan Resort & Spa", "Hotel Highlands Park"],
          description: "Travel to Gulmarg for adventure activities and breathtaking views.",
          activities: ["Gondola ride", "Skiing (seasonal)", "Snowboarding"]
        },
        {
          day: 3,
          title: "Pahalgam - Valley of Shepherds",
          places: ["Betaab Valley", "Aru Valley", "Chandanwari"],
          hotels: ["The Chinar Resort & Spa", "Hotel Heevan Pahalgam"],
          description: "Explore the beautiful valleys and meadows of Pahalgam.",
          activities: ["Horse riding", "River rafting", "Trekking"]
        },
        {
          day: 4,
          title: "Back to Srinagar & Shopping",
          places: ["Pari Mahal", "Shankaracharya Temple"],
          hotels: ["The Lalit Grand Palace", "Taj Vivanta Dal View"],
          description: "Visit ancient sites and shop for local goods in Srinagar.",
          activities: ["Temple visit", "Shopping for pashmina and saffron"]
        },
        {
          day: 5,
          title: "Srinagar & Sonamarg",
          places: ["Thajiwas Glacier", "Zojila Pass"],
          hotels: ["The Lalit Grand Palace", "Taj Vivanta Dal View"],
          description: "Day trip to Sonamarg, the 'Meadow of Gold', for stunning glacier views.",
          activities: ["Glacier trek", "Sledging", "Horse riding"]
        },
        {
          day: 6,
          title: "Houseboat Stay Experience",
          places: ["Nigeen Lake"],
          hotels: ["Royal Group of Houseboats", "New Heritage Houseboats"],
          description: "Spend a relaxing day and night on a traditional houseboat.",
          activities: ["Houseboat relaxation", "Local cuisine experience", "Canoeing"]
        },
        {
          day: 7,
          title: "Departure from Srinagar",
          places: ["Srinagar Airport"],
          hotels: ["The Lalit Grand Palace", "Taj Vivanta Dal View"],
          description: "Departure from Srinagar with beautiful memories.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Maharashtra": [
    {
      destination: "Maharashtra",
      days: 7,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Mumbai - The City of Dreams",
          places: ["Gateway of India", "Marine Drive", "Colaba Causeway"],
          hotels: ["The Taj Mahal Palace", "Trident Nariman Point"],
          description: "Explore the bustling metropolis of Mumbai, a city of contrasts.",
          activities: ["City tour", "Shopping", "Street food tasting"]
        },
        {
          day: 2,
          title: "Mumbai Film City & Elephanta Caves",
          places: ["Film City", "Elephanta Caves"],
          hotels: ["The Taj Mahal Palace", "Trident Nariman Point"],
          description: "Visit the heart of the Indian film industry and ancient caves.",
          activities: ["Studio tour", "Ferry ride", "Cave exploration"]
        },
        {
          day: 3,
          title: "Journey to Lonavala & Khandala",
          places: ["Tiger Point", "Bhushi Dam", "Lonavala Lake"],
          hotels: ["Della Resorts", "Fariyas Resort Lonavala"],
          description: "Travel to the popular hill stations near Mumbai for scenic beauty.",
          activities: ["Waterfall visit", "Nature walks", "Local sweet shopping"]
        },
        {
          day: 4,
          title: "Journey to Nashik - Wine Capital of India",
          places: ["Sula Vineyards", "York Winery", "Trimbakeshwar Temple"],
          hotels: ["Sula Vineyards", "The Gateway Hotel Ambad"],
          description: "Taste some of India's finest wines and visit ancient temples.",
          activities: ["Wine tasting", "Vineyard tour", "Spiritual visit"]
        },
        {
          day: 5,
          title: "Aurangabad - Ancient Caves",
          places: ["Ajanta Caves", "Ellora Caves"],
          hotels: ["Welcomhotel by ITC Hotels, Rama International", "The Manor Hotel"],
          description: "Discover the UNESCO World Heritage Sites of Ajanta and Ellora.",
          activities: ["Cave exploration", "Photography", "History tour"]
        },
        {
          day: 6,
          title: "Shirdi & Shani Shingnapur",
          places: ["Sai Baba Temple, Shirdi", "Shani Shingnapur Temple"],
          hotels: ["Hotel Sai Palace", "Sun-n-Sand Shirdi"],
          description: "A spiritual day visiting revered temples.",
          activities: ["Pilgrimage", "Spiritual prayers", "Local market visit"]
        },
        {
          day: 7,
          title: "Departure from Mumbai",
          places: ["Mumbai Airport"],
          hotels: ["The Taj Mahal Palace", "Trident Nariman Point"],
          description: "Travel back to Mumbai for your departure.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Karnataka": [
    {
      destination: "Karnataka",
      days: 7,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bengaluru - The Silicon Valley of India",
          places: ["Lalbagh Botanical Garden", "Cubbon Park", "Bangalore Palace"],
          hotels: ["The Leela Palace Bengaluru", "The Ritz-Carlton, Bangalore"],
          description: "Explore the Garden City with its modern vibe and historical landmarks.",
          activities: ["Garden walk", "Palace tour", "Pub hopping on MG Road"]
        },
        {
          day: 2,
          title: "Journey to Mysuru - The City of Palaces",
          places: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens"],
          hotels: ["Radisson Blu Plaza Hotel Mysore", "Fortune JP Palace"],
          description: "Travel to Mysuru and witness the grandeur of its royal past.",
          activities: ["Palace light show", "Hilltop temple visit", "Musical fountain show"]
        },
        {
          day: 3,
          title: "Mysuru Heritage & Srirangapatna",
          places: ["Srirangapatna", "St. Philomena's Church", "Mysuru Zoo"],
          hotels: ["Radisson Blu Plaza Hotel Mysore", "Fortune JP Palace"],
          description: "Explore the historical sites and religious landmarks around Mysuru.",
          activities: ["History tour", "Church visit", "Zoo visit"]
        },
        {
          day: 4,
          title: "Journey to Coorg - Scotland of India",
          places: ["Abbey Falls", "Raja's Seat", "Omkareshwara Temple"],
          hotels: ["Taj Madikeri Resort & Spa", "Club Mahindra Madikeri, Coorg"],
          description: "Travel to the misty hills of Coorg, famous for its coffee plantations.",
          activities: ["Coffee plantation tour", "Waterfall visit", "Sunset viewing"]
        },
        {
          day: 5,
          title: "Coorg & Bylakuppe",
          places: ["Dubare Elephant Camp", "Bylakuppe Tibetan Settlement"],
          hotels: ["Taj Madikeri Resort & Spa", "Club Mahindra Madikeri, Coorg"],
          description: "Interact with elephants and visit the unique Tibetan settlement.",
          activities: ["Elephant bathing", "Monastery visit", "Local handicraft shopping"]
        },
        {
          day: 6,
          title: "Journey to Hampi - Ancient City",
          places: ["Virupaksha Temple", "Stone Chariot", "Hampi Bazaar"],
          hotels: ["Evolve Back, Hampi", "Hyatt Place Hampi"],
          description: "Travel to the UNESCO World Heritage Site of Hampi with its ancient ruins.",
          activities: ["Temple tour", "Coracle ride on Tungabhadra River", "Sunset at Hemakuta Hill"]
        },
        {
          day: 7,
          title: "Hampi Exploration & Departure",
          places: ["Vitthala Temple Complex", "Lotus Mahal"],
          hotels: ["Evolve Back, Hampi", "Hyatt Place Hampi"],
          description: "Explore more of the ruins before heading to the airport.",
          activities: ["Archaeological site tour", "Photography", "Travel"]
        }
      ]
    }
  ],
  "Tamil Nadu": [
    {
      destination: "Tamil Nadu",
      days: 7,
      budget: "Low",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Chennai - The Gateway to South India",
          places: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George"],
          hotels: ["ITC Grand Chola, a Luxury Collection Hotel", "The Leela Palace Chennai"],
          description: "Explore the cultural and historical capital of Tamil Nadu.",
          activities: ["Beach walk", "Temple visit", "Museum tour"]
        },
        {
          day: 2,
          title: "Mahabalipuram & Pondicherry",
          places: ["Shore Temple", "Panch Rathas", "Aurobindo Ashram"],
          hotels: ["Radisson Blu Resort Temple Bay Mamallapuram", "Le Dupleix, Pondicherry"],
          description: "Travel to the ancient port city of Mahabalipuram and the French colonial town of Pondicherry.",
          activities: ["Heritage site visit", "Ashram visit", "Cycling through French Quarter"]
        },
        {
          day: 3,
          title: "Pondicherry & Chidambaram",
          places: ["Auroville", "Nataraja Temple, Chidambaram"],
          hotels: ["Le Dupleix, Pondicherry", "Hotel Saradharam"],
          description: "Visit the spiritual community of Auroville and the ancient temple of Chidambaram.",
          activities: ["Meditation", "Temple visit", "Local market shopping"]
        },
        {
          day: 4,
          title: "Journey to Madurai - Temple City",
          places: ["Meenakshi Amman Temple", "Thirumalai Nayakkar Palace"],
          hotels: ["Heritage Madurai", "The Gateway Hotel Pasumalai Madurai"],
          description: "Travel to the vibrant city of Madurai, known for its magnificent temples.",
          activities: ["Temple tour", "Palace visit", "Local cuisine tasting"]
        },
        {
          day: 5,
          title: "Madurai & Kodaikanal",
          places: ["Kodaikanal Lake", "Coaker's Walk"],
          hotels: ["The Tamara Kodaikanal", "Sterling Kodai Lake"],
          description: "Journey to the hill station of Kodaikanal for its pleasant climate and natural beauty.",
          activities: ["Boating", "Cycling", "Nature walk"]
        },
        {
          day: 6,
          title: "Kodaikanal & Departure",
          places: ["Pillar Rocks", "Guna Cave"],
          hotels: ["The Tamara Kodaikanal", "Sterling Kodai Lake"],
          description: "Explore the famous viewpoints and caves before heading back.",
          activities: ["Trekking", "Photography", "Local shopping"]
        },
        {
          day: 7,
          title: "Departure from Madurai Airport",
          places: ["Madurai Airport"],
          hotels: ["The Gateway Hotel Pasumalai Madurai"],
          description: "Travel to the airport for your departure.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "West Bengal": [
    {
      destination: "West Bengal",
      days: 6,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kolkata - The City of Joy",
          places: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Kali Temple"],
          hotels: ["The Oberoi Grand", "ITC Sonar"],
          description: "Experience the bustling cultural hub of Kolkata.",
          activities: ["City tour", "Tram ride", "Street food tasting"]
        },
        {
          day: 2,
          title: "Kolkata Art & Culture",
          places: ["Indian Museum", "Mother House", "Princep Ghat"],
          hotels: ["The Oberoi Grand", "ITC Sonar"],
          description: "Explore the rich art, history, and spiritual side of the city.",
          activities: ["Museum visit", "Boat ride on Hooghly", "Shopping at New Market"]
        },
        {
          day: 3,
          title: "Journey to Darjeeling - Queen of the Hills",
          places: ["Darjeeling Himalayan Railway (Toy Train)", "Batasia Loop"],
          hotels: ["Mayfair Darjeeling", "Hotel Sonam Paljor"],
          description: "Travel to the scenic hill station of Darjeeling.",
          activities: ["Toy train ride", "Tea garden tour", "Photography"]
        },
        {
          day: 4,
          title: "Darjeeling Tiger Hill & Tea Gardens",
          places: ["Tiger Hill", "Ghoom Monastery", "Happy Valley Tea Estate"],
          hotels: ["Mayfair Darjeeling", "Hotel Sonam Paljor"],
          description: "Witness the magnificent sunrise over Kanchenjunga and visit tea plantations.",
          activities: ["Sunrise viewing", "Monastery visit", "Tea tasting"]
        },
        {
          day: 5,
          title: "Kalimpong Exploration",
          places: ["Durpin Dara Hill", "Zang Dhok Palri Phodang Monastery"],
          hotels: ["Mayfair Himalayan Spa Resort", "Sinclairs Retreat Kalimpong"],
          description: "A day trip to the serene town of Kalimpong.",
          activities: ["Monastery tour", "Flower garden visit", "Scenic drive"]
        },
        {
          day: 6,
          title: "Departure from Bagdogra",
          places: ["Bagdogra Airport"],
          hotels: ["Mayfair Darjeeling", "Hotel Sonam Paljor"],
          description: "Travel to Bagdogra for your departure.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Gujarat": [
    {
      destination: "Gujarat",
      days: 7,
      budget: "Low",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Ahmedabad - Heritage City",
          places: ["Sabarmati Ashram", "Adalaj Stepwell", "Hutheesing Jain Temple"],
          hotels: ["Hyatt Regency Ahmedabad", "The House of MG"],
          description: "Explore the city's rich history and architectural marvels.",
          activities: ["Ashram visit", "Heritage walk", "Traditional Gujarati dinner"]
        },
        {
          day: 2,
          title: "Ahmedabad & Modhera",
          places: ["Modhera Sun Temple", "Rani ki Vav (Patan)"],
          hotels: ["Hyatt Regency Ahmedabad", "The House of MG"],
          description: "Day trip to the magnificent Sun Temple and the UNESCO site of Rani ki Vav.",
          activities: ["Temple tour", "Stepwell exploration", "Photography"]
        },
        {
          day: 3,
          title: "Journey to Dwarka - The Kingdom of Lord Krishna",
          places: ["Dwarkadhish Temple", "Rukmini Devi Temple"],
          hotels: ["The Dwarika", "Hotel Nandini"],
          description: "Travel to the spiritual city of Dwarka on the Arabian Sea coast.",
          activities: ["Spiritual visit", "Evening aarti ceremony", "Coastal walk"]
        },
        {
          day: 4,
          title: "Dwarka & Bet Dwarka",
          places: ["Nageshwar Jyotirlinga Temple", "Bet Dwarka Island"],
          hotels: ["The Dwarika", "Hotel Nandini"],
          description: "Explore the ancient pilgrimage sites and a sacred island.",
          activities: ["Temple visit", "Boat ride to island", "Dolphin spotting"]
        },
        {
          day: 5,
          title: "Journey to Somnath",
          places: ["Somnath Temple", "Triveni Sangam"],
          hotels: ["Lords Inn Somnath", "Sarovar Portico Somnath"],
          description: "Travel to Somnath, home to one of the 12 Jyotirlinga shrines of Shiva.",
          activities: ["Temple aarti", "Beach relaxation", "Scenic walk"]
        },
        {
          day: 6,
          title: "Somnath & Gir National Park",
          places: ["Gir National Park & Wildlife Sanctuary"],
          hotels: ["The Fern Gir Forest Resort", "Gir Serai, a Taj Safari"],
          description: "Travel to Gir for a wildlife safari to see the Asiatic lions.",
          activities: ["Jungle safari", "Wildlife spotting", "Nature photography"]
        },
        {
          day: 7,
          title: "Departure from Diu or Rajkot",
          places: ["Diu Airport", "Rajkot Airport"],
          hotels: ["The Fern Gir Forest Resort", "Gir Serai, a Taj Safari"],
          description: "Travel to the nearest airport for departure.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Punjab": [
    {
      destination: "Punjab",
      days: 5,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Amritsar - The Holy City",
          places: ["Golden Temple", "Jallianwala Bagh"],
          hotels: ["Hyatt Regency Amritsar", "Radisson Blu Hotel Amritsar"],
          description: "Start your spiritual journey in Amritsar, home to the revered Golden Temple.",
          activities: ["Langar service", "Temple visit", "History walk"]
        },
        {
          day: 2,
          title: "Amritsar & Wagah Border",
          places: ["Wagah Border", "Akal Takht"],
          hotels: ["Hyatt Regency Amritsar", "Radisson Blu Hotel Amritsar"],
          description: "Witness the iconic border ceremony and explore more of Amritsar's spiritual sites.",
          activities: ["Beating Retreat ceremony", "Shopping for Punjabi juttis and suits"]
        },
        {
          day: 3,
          title: "Journey to Chandigarh - The City Beautiful",
          places: ["Rock Garden", "Sukhna Lake", "Rose Garden"],
          hotels: ["Hyatt Regency Chandigarh", "Taj Chandigarh"],
          description: "Travel to Chandigarh and explore the city's unique architecture and gardens.",
          activities: ["Boating", "Walking tour", "Le Corbusier Centre visit"]
        },
        {
          day: 4,
          title: "Chandigarh & Patiala",
          places: ["Qila Mubarak", "Sheesh Mahal"],
          hotels: ["Hyatt Regency Chandigarh", "Taj Chandigarh"],
          description: "A day trip to the royal city of Patiala, known for its palaces and whiskey.",
          activities: ["Palace visit", "History tour", "Local food tasting"]
        },
        {
          day: 5,
          title: "Departure from Chandigarh",
          places: ["Chandigarh International Airport"],
          hotels: ["Hyatt Regency Chandigarh", "Taj Chandigarh"],
          description: "Departure from Chandigarh with beautiful memories.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Uttar Pradesh": [
    {
      destination: "Uttar Pradesh",
      days: 6,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Agra - City of Taj",
          places: ["Taj Mahal", "Agra Fort", "Itimad-ud-Daulah's Tomb"],
          hotels: ["The Oberoi Amarvilas", "ITC Mughal, A Luxury Collection Hotel"],
          description: "Witness the timeless beauty of the Taj Mahal and other Mughal monuments.",
          activities: ["Sunrise visit to Taj Mahal", "Fort exploration", "Shopping for marble handicrafts"]
        },
        {
          day: 2,
          title: "Journey to Varanasi - The Spiritual Capital",
          places: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple"],
          hotels: ["Taj Ganges, Varanasi", "BrijRama Palace"],
          description: "Travel to the oldest living city and experience its vibrant spirituality.",
          activities: ["Ganga aarti ceremony", "Temple visit", "Evening boat ride"]
        },
        {
          day: 3,
          title: "Varanasi Ganges & Sarnath",
          places: ["Assi Ghat", "Sarnath (Dhamek Stupa)"],
          hotels: ["Taj Ganges, Varanasi", "BrijRama Palace"],
          description: "Explore the ghats and the sacred Buddhist site of Sarnath.",
          activities: ["Morning boat ride on Ganges", "Sarnath monastery tour", "Shopping for silk sarees"]
        },
        {
          day: 4,
          title: "Journey to Lucknow - The City of Nawabs",
          places: ["Bara Imambara", "Chota Imambara", "Rumi Darwaza"],
          hotels: ["Taj Mahal Lucknow", "Hyatt Regency Lucknow"],
          description: "Travel to Lucknow, known for its refined culture, food, and architecture.",
          activities: ["Historical site tour", "Tasting Awadhi cuisine", "Shopping for Chikankari work"]
        },
        {
          day: 5,
          title: "Lucknow Heritage & Departure",
          places: ["Residency", "Lucknow Zoo"],
          hotels: ["Taj Mahal Lucknow", "Hyatt Regency Lucknow"],
          description: "Explore more of the city's heritage and then depart.",
          activities: ["History walk", "Zoo visit", "Shopping for local sweets"]
        },
        {
          day: 6,
          title: "Departure from Lucknow",
          places: ["Chaudhary Charan Singh International Airport, Lucknow"],
          hotels: ["Taj Mahal Lucknow", "Hyatt Regency Lucknow"],
          description: "Departure from Lucknow.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Madhya Pradesh": [
    {
      destination: "Madhya Pradesh",
      days: 7,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bhopal - City of Lakes",
          places: ["Bhojtal Lake", "Upper Lake", "Tribal Museum"],
          hotels: ["Jehan Numa Palace Hotel", "Noor Us Sabah Palace"],
          description: "Begin your journey in the beautiful 'City of Lakes' and explore its serene landscapes.",
          activities: ["Boat ride", "Museum visit", "Local market tour"]
        },
        {
          day: 2,
          title: "Bhopal & Sanchi Stupa",
          places: ["Sanchi Stupa", "Bhimbetka Rock Shelters"],
          hotels: ["Jehan Numa Palace Hotel", "Noor Us Sabah Palace"],
          description: "Explore the UNESCO World Heritage Sites of Sanchi and Bhimbetka.",
          activities: ["Archaeological site tour", "Cave art exploration"]
        },
        {
          day: 3,
          title: "Journey to Khajuraho - Temple Town",
          places: ["Khajuraho Group of Temples", "Duladeo Temple"],
          hotels: ["Radisson Jass Khajuraho", "The Lalit Temple View Khajuraho"],
          description: "Travel to Khajuraho, famous for its intricate temple carvings.",
          activities: ["Temple tour", "Sound and light show", "Photography"]
        },
        {
          day: 4,
          title: "Khajuraho & Panna National Park",
          places: ["Panna National Park"],
          hotels: ["Radisson Jass Khajuraho", "The Lalit Temple View Khajuraho"],
          description: "A wildlife safari in Panna National Park, home to tigers and other wildlife.",
          activities: ["Jungle safari", "Nature photography"]
        },
        {
          day: 5,
          title: "Journey to Gwalior - The Fort City",
          places: ["Gwalior Fort", "Jai Vilas Palace"],
          hotels: ["Radisson Gwalior", "Hotel Central Park"],
          description: "Travel to Gwalior and explore its majestic fort and royal history.",
          activities: ["Fort exploration", "Palace museum visit", "Light and sound show"]
        },
        {
          day: 6,
          title: "Gwalior & Orchha",
          places: ["Orchha Fort Complex", "Ram Raja Temple"],
          hotels: ["Radisson Gwalior", "Hotel Central Park"],
          description: "A day trip to the medieval town of Orchha on the banks of Betwa River.",
          activities: ["Historical tour", "River walk", "Temple visit"]
        },
        {
          day: 7,
          title: "Departure from Gwalior",
          places: ["Gwalior Airport"],
          hotels: ["Radisson Gwalior", "Hotel Central Park"],
          description: "Travel to the airport for your departure.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Assam": [
    {
      destination: "Assam",
      days: 6,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Guwahati - Gateway to Northeast",
          places: ["Kamakhya Temple", "Umananda Temple"],
          hotels: ["Vivanta Guwahati", "Radisson Blu Hotel Guwahati"],
          description: "Begin your journey in the vibrant city of Guwahati.",
          activities: ["Temple visit", "River cruise on Brahmaputra", "Local food tasting"]
        },
        {
          day: 2,
          title: "Journey to Kaziranga National Park",
          places: ["Kaziranga National Park"],
          hotels: ["Iora - The Retreat", "Borgos Resort"],
          description: "Travel to the famous national park, home to the one-horned rhinoceros.",
          activities: ["Evening jungle safari", "Nature walk"]
        },
        {
          day: 3,
          title: "Kaziranga Wildlife Safari",
          places: ["Kaziranga National Park"],
          hotels: ["Iora - The Retreat", "Borgos Resort"],
          description: "Enjoy both elephant and jeep safaris to spot wildlife.",
          activities: ["Elephant safari", "Jeep safari", "Bird watching"]
        },
        {
          day: 4,
          title: "Journey to Majuli - River Island",
          places: ["Satra Monasteries", "River cruise"],
          hotels: ["Dekasang Majuli", "La Maison de Ananda"],
          description: "Travel to the world's largest river island and explore its unique culture.",
          activities: ["Ferry ride", "Monastery visit", "Cultural performance"]
        },
        {
          day: 5,
          title: "Majuli & Tea Estates",
          places: ["Tea Gardens"],
          hotels: ["Dekasang Majuli", "La Maison de Ananda"],
          description: "Explore the scenic tea gardens and learn about tea production.",
          activities: ["Tea plantation tour", "Local village visit", "Shopping for local handicrafts"]
        },
        {
          day: 6,
          title: "Departure from Jorhat",
          places: ["Jorhat Airport"],
          hotels: ["Dekasang Majuli"],
          description: "Travel to the nearest airport for your departure.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Odisha": [
    {
      destination: "Odisha",
      days: 6,
      budget: "Low",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bhubaneswar - Temple City",
          places: ["Lingaraj Temple", "Udayagiri and Khandagiri Caves"],
          hotels: ["Mayfair Lagoon", "Swosti Premium"],
          description: "Explore the ancient temples and rock-cut caves of Bhubaneswar.",
          activities: ["Temple tour", "History walk", "Odia cuisine tasting"]
        },
        {
          day: 2,
          title: "Bhubaneswar & Konark",
          places: ["Konark Sun Temple", "Dhauli Shanti Stupa"],
          hotels: ["Mayfair Lagoon", "Swosti Premium"],
          description: "Visit the iconic Sun Temple and the Buddhist peace pagoda.",
          activities: ["Temple exploration", "Sound and light show", "Photography"]
        },
        {
          day: 3,
          title: "Puri - The Sacred City",
          places: ["Jagannath Temple", "Puri Beach"],
          hotels: ["Mayfair Heritage", "Hotel Holiday Resort"],
          description: "Travel to the holy city of Puri and visit the famous Jagannath Temple.",
          activities: ["Temple visit", "Beach relaxation", "Local market shopping"]
        },
        {
          day: 4,
          title: "Puri & Chilika Lake",
          places: ["Chilika Lake", "Nalabana Bird Sanctuary"],
          hotels: ["Mayfair Heritage", "Hotel Holiday Resort"],
          description: "Day trip to the serene Chilika Lake, home to a variety of bird species.",
          activities: ["Boat ride", "Bird watching", "Dolphin spotting"]
        },
        {
          day: 5,
          title: "Puri & Raghurajpur",
          places: ["Raghurajpur Heritage Village"],
          hotels: ["Mayfair Heritage", "Hotel Holiday Resort"],
          description: "Visit the artisan village of Raghurajpur and shop for local art.",
          activities: ["Village tour", "Shopping for Pattachitra paintings"]
        },
        {
          day: 6,
          title: "Departure from Bhubaneswar",
          places: ["Biju Patnaik International Airport, Bhubaneswar"],
          hotels: ["Mayfair Lagoon"],
          description: "Departure from Bhubaneswar with beautiful memories.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Andhra Pradesh": [
    {
      destination: "Andhra Pradesh",
      days: 5,
      budget: "Low",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Tirupati - Spiritual Hub",
          places: ["Tirumala Venkateswara Temple", "Padmavathi Temple"],
          hotels: ["Marasa Sarovar Premiere", "Fortune Select Grand Ridge"],
          description: "Start your journey in the spiritual capital of Tirupati.",
          activities: ["Temple visit", "Spiritual prayers", "Local market tour"]
        },
        {
          day: 2,
          title: "Tirupati & Srikalahasti",
          places: ["Srikalahasti Temple", "Chandragiri Fort"],
          hotels: ["Marasa Sarovar Premiere", "Fortune Select Grand Ridge"],
          description: "A day trip to the ancient Srikalahasti Temple and a historical fort.",
          activities: ["Temple tour", "Fort exploration", "Scenic photography"]
        },
        {
          day: 3,
          title: "Journey to Visakhapatnam - The City of Destiny",
          places: ["Araku Valley", "Borra Caves", "Padmapuram Gardens"],
          hotels: ["Novotel Visakhapatnam Varun Beach", "Welcomhotel by ITC Hotels, Rama International"],
          description: "Travel to Visakhapatnam and explore the scenic Araku Valley.",
          activities: ["Cave exploration", "Garden walk", "Local tribal museum visit"]
        },
        {
          day: 4,
          title: "Visakhapatnam City Tour",
          places: ["Rushikonda Beach", "Submarine Museum", "Kailasagiri Hill Park"],
          hotels: ["Novotel Visakhapatnam Varun Beach", "Welcomhotel by ITC Hotels, Rama International"],
          description: "Relax on the beaches and explore the city's unique attractions.",
          activities: ["Beach relaxation", "Museum tour", "Ropeway ride"]
        },
        {
          day: 5,
          title: "Departure from Visakhapatnam",
          places: ["Visakhapatnam International Airport"],
          hotels: ["Novotel Visakhapatnam Varun Beach"],
          description: "Departure from Visakhapatnam.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Telangana": [
    {
      destination: "Telangana",
      days: 5,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Hyderabad - The City of Pearls",
          places: ["Charminar", "Golconda Fort", "Mecca Masjid"],
          hotels: ["Taj Falaknuma Palace", "ITC Kohenur, a Luxury Collection Hotel"],
          description: "Start your trip in the historic city of Hyderabad, a blend of old and new.",
          activities: ["Historical monument visit", "Local bazaar shopping", "Biryani tasting"]
        },
        {
          day: 2,
          title: "Hyderabad Palaces & Museums",
          places: ["Chowmahalla Palace", "Salar Jung Museum", "Qutb Shahi Tombs"],
          hotels: ["Taj Falaknuma Palace", "ITC Kohenur, a Luxury Collection Hotel"],
          description: "Explore the majestic palaces and rich museum collections.",
          activities: ["Palace tour", "Museum visit", "Light and sound show at Golconda"]
        },
        {
          day: 3,
          title: "Ramoji Film City",
          places: ["Ramoji Film City"],
          hotels: ["Taj Falaknuma Palace", "ITC Kohenur, a Luxury Collection Hotel"],
          description: "Spend a full day at the world's largest film city.",
          activities: ["Studio tour", "Live shows", "Thematic garden exploration"]
        },
        {
          day: 4,
          title: "Journey to Warangal",
          places: ["Warangal Fort", "Thousand Pillar Temple", "Bhadrakali Temple"],
          hotels: ["Haritha Kakatiya Hotel", "The Bliss"],
          description: "Travel to the ancient city of Warangal, known for its temples and forts.",
          activities: ["Temple tour", "Fort exploration", "Photography"]
        },
        {
          day: 5,
          title: "Departure from Hyderabad",
          places: ["Rajiv Gandhi International Airport, Hyderabad"],
          hotels: ["Taj Falaknuma Palace"],
          description: "Travel back to Hyderabad for your departure.",
          activities: ["Travel"]
        }
      ]
    }
  ],
  "Sikkim": [
    {
      destination: "Sikkim",
      days: 6,
      budget: "Medium",
      itinerary: [
        {
          day: 1,
          title: "Arrival in Gangtok - The Himalayan Gateway",
          places: ["MG Marg", "Ganesh Tok", "Hanuman Tok"],
          hotels: ["Mayfair Spa Resort & Casino", "Hotel Sonam Delek"],
          description: "Arrive in the scenic capital of Sikkim and explore the city.",
          activities: ["City walk", "Temple visit", "Shopping for local goods"]
        },
        {
          day: 2,
          title: "Tsomgo Lake & Baba Mandir",
          places: ["Tsomgo Lake", "Baba Harbhajan Singh Mandir"],
          hotels: ["Mayfair Spa Resort & Casino", "Hotel Sonam Delek"],
          description: "A breathtaking day trip to the high-altitude Tsomgo Lake.",
          activities: ["Yak ride", "Cable car ride", "Scenic photography"]
        },
        {
          day: 3,
          title: "Lachen & Gurudongmar Lake",
          places: ["Gurudongmar Lake", "Lachen Monastery"],
          hotels: ["Lachen Village Home Stay", "Hotel Snow Lion Mountain"],
          description: "Journey to Lachen and visit the sacred Gurudongmar Lake.",
          activities: ["High-altitude scenic drive", "Monastery visit", "Trekking"]
        },
        {
          day: 4,
          title: "Lachung & Yumthang Valley",
          places: ["Yumthang Valley (Valley of Flowers)", "Lachung Monastery"],
          hotels: ["The Yuma La", "Hotel Sonam Kanchendzonga"],
          description: "Explore the beautiful Yumthang Valley, also known as the Valley of Flowers.",
          activities: ["Nature walk", "Photography", "Hot spring bath"]
        },
        {
          day: 5,
          title: "Lachung to Gangtok",
          places: ["Seven Sisters Waterfalls", "Phodong Monastery"],
          hotels: ["Mayfair Spa Resort & Casino", "Hotel Sonam Delek"],
          description: "Return to Gangtok with stops at scenic spots.",
          activities: ["Waterfall visit", "Monastery tour", "Road trip"]
        },
        {
          day: 6,
          title: "Departure from Bagdogra",
          places: ["Bagdogra Airport"],
          hotels: ["Mayfair Spa Resort & Casino"],
          description: "Travel to Bagdogra for your departure.",
          activities: ["Travel"]
        }
      ]
    }
  ]
};