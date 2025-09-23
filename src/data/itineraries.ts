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
  ]
};