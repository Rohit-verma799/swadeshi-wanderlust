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

  "Himachal Pradesh": [
    {
      destination: "Himachal Pradesh",
      days: 7,
      budget: 10000, // Low budget in rupees
      itinerary: [
        {
          day: 1,
          title: "Arrival in Shimla - The Queen of Hills",
          places: [
            {
              name: "The Mall Road",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Famous shopping street with colonial architecture",
              duration: "2-3 hours"
            },
            {
              name: "Christ Church",
              image: "/placeholder.svg",
              type: "religious",
              description: "Historical neo-gothic church from British era",
              duration: "1 hour"
            },
            {
              name: "Jakhoo Temple",
              image: "/placeholder.svg",
              type: "religious",
              description: "Ancient temple with giant Hanuman statue",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "The Oberoi Cecil",
              image: "/placeholder.svg",
              price: "₹20,000/night",
              rating: 4.8,
              type: "luxury",
              description: "Heritage luxury hotel with colonial charm",
              amenities: ["Spa", "Fine Dining", "Mountain Views", "Indoor Pool"]
            },
            {
              name: "Hotel Willow Banks",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.2,
              type: "heritage",
              description: "Historic hotel on Mall Road",
              amenities: ["Restaurant", "Bar", "City Views", "Heritage Architecture"]
            }
          ],
          description: "Start your Himalayan journey in the colonial charm of Shimla.",
          activities: ["Toy train ride", "Local market exploration", "Temple visit"]
        },
        {
          day: 2,
          title: "Shimla & Kufri Exploration",
          places: [
            {
              name: "Kufri",
              image: "/placeholder.svg",
              type: "adventure",
              description: "Popular hill station known for winter sports",
              duration: "3-4 hours"
            },
            {
              name: "Himalayan Nature Park",
              image: "/placeholder.svg",
              type: "natural",
              description: "Wildlife sanctuary with Himalayan species",
              duration: "2 hours"
            },
            {
              name: "Fagu",
              image: "/placeholder.svg",
              type: "natural",
              description: "Scenic village with apple orchards",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "The Oberoi Cecil",
              image: "/placeholder.svg",
              price: "₹20,000/night",
              rating: 4.8,
              type: "luxury",
              description: "Heritage luxury hotel with colonial charm",
              amenities: ["Spa", "Fine Dining", "Mountain Views", "Indoor Pool"]
            },
            {
              name: "Hotel Willow Banks",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.2,
              type: "heritage",
              description: "Historic hotel on Mall Road",
              amenities: ["Restaurant", "Bar", "City Views", "Heritage Architecture"]
            }
          ],
          description: "Day trip to Kufri for snow activities and stunning views.",
          activities: ["Yak riding", "Adventure sports", "Nature photography"]
        },
        {
          day: 3,
          title: "Journey to Manali - Valley of Gods",
          places: [
            {
              name: "Hadimba Temple",
              image: "/placeholder.svg",
              type: "religious",
              description: "Ancient wooden temple in cedar forest",
              duration: "1.5 hours"
            },
            {
              name: "Old Manali",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Charming village area with cafes and shops",
              duration: "3 hours"
            },
            {
              name: "Manu Temple",
              image: "/placeholder.svg",
              type: "religious",
              description: "Temple dedicated to sage Manu",
              duration: "1 hour"
            }
          ],
          hotels: [
            {
              name: "The Himalayan",
              image: "/placeholder.svg",
              price: "₹15,000/night",
              rating: 4.6,
              type: "luxury",
              description: "Castle-style luxury resort with mountain views",
              amenities: ["Spa", "Fine Dining", "Mountain Views", "Heated Pool"]
            },
            {
              name: "Solang Valley Resort",
              image: "/placeholder.svg",
              price: "₹10,000/night",
              rating: 4.3,
              type: "boutique",
              description: "Resort with adventure activities access",
              amenities: ["Adventure Sports", "Restaurant", "Valley Views", "Conference Room"]
            }
          ],
          description: "Travel to the picturesque town of Manali.",
          activities: ["Temple tour", "Walk along Beas River", "Cafe hopping"]
        },
        {
          day: 4,
          title: "Manali Adventure",
          places: [
            {
              name: "Solang Valley",
              image: "/placeholder.svg",
              type: "adventure",
              description: "Adventure sports hub with skiing and paragliding",
              duration: "4 hours"
            },
            {
              name: "Rohtang Pass",
              image: "/placeholder.svg",
              type: "natural",
              description: "High mountain pass with snow activities (seasonal)",
              duration: "6 hours"
            },
            {
              name: "Vashisht Hot Springs",
              image: "/placeholder.svg",
              type: "natural",
              description: "Natural hot springs and ancient temples",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "The Himalayan",
              image: "/placeholder.svg",
              price: "₹15,000/night",
              rating: 4.6,
              type: "luxury",
              description: "Castle-style luxury resort with mountain views",
              amenities: ["Spa", "Fine Dining", "Mountain Views", "Heated Pool"]
            },
            {
              name: "Solang Valley Resort",
              image: "/placeholder.svg",
              price: "₹10,000/night",
              rating: 4.3,
              type: "boutique",
              description: "Resort with adventure activities access",
              amenities: ["Adventure Sports", "Restaurant", "Valley Views", "Conference Room"]
            }
          ],
          description: "Engage in thrilling adventure activities amidst the snow-capped mountains.",
          activities: ["Paragliding", "Skiing (seasonal)", "River rafting"]
        },
        {
          day: 5,
          title: "Journey to Dalhousie",
          places: [
            {
              name: "Khajjiar",
              image: "/placeholder.svg",
              type: "natural",
              description: "Mini Switzerland of India with meadows and lake",
              duration: "4 hours"
            },
            {
              name: "Chamba",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Historic town with temples and palaces",
              duration: "3 hours"
            }
          ],
          hotels: [
            {
              name: "Fortune Khajjiar",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.2,
              type: "boutique",
              description: "Resort overlooking Khajjiar meadows",
              amenities: ["Mountain Views", "Restaurant", "Adventure Activities", "Garden"]
            },
            {
              name: "Grand View Hotel",
              image: "/placeholder.svg",
              price: "₹6,000/night",
              rating: 4.0,
              type: "heritage",
              description: "Colonial style hotel with panoramic views",
              amenities: ["Valley Views", "Restaurant", "Bar", "Heritage Architecture"]
            }
          ],
          description: "Travel to the serene town of Dalhousie and visit Khajjiar.",
          activities: ["Nature walk", "Horse riding", "Boating"]
        },
        {
          day: 6,
          title: "Dalhousie & Local Sightseeing",
          places: [
            {
              name: "St. Francis' Church",
              image: "/placeholder.svg",
              type: "religious",
              description: "Historic church with colonial architecture",
              duration: "1 hour"
            },
            {
              name: "Subhash Baoli",
              image: "/placeholder.svg",
              type: "historical",
              description: "Historic spot where Netaji meditated",
              duration: "1.5 hours"
            },
            {
              name: "Kalatop Wildlife Sanctuary",
              image: "/placeholder.svg",
              type: "natural",
              description: "Dense deodar forest with wildlife",
              duration: "3 hours"
            }
          ],
          hotels: [
            {
              name: "Fortune Khajjiar",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.2,
              type: "boutique",
              description: "Resort overlooking Khajjiar meadows",
              amenities: ["Mountain Views", "Restaurant", "Adventure Activities", "Garden"]
            },
            {
              name: "Grand View Hotel",
              image: "/placeholder.svg",
              price: "₹6,000/night",
              rating: 4.0,
              type: "heritage",
              description: "Colonial style hotel with panoramic views",
              amenities: ["Valley Views", "Restaurant", "Bar", "Heritage Architecture"]
            }
          ],
          description: "Explore the colonial architecture and natural beauty of Dalhousie.",
          activities: ["Trekking", "Nature photography", "Shopping"]
        },
        {
          day: 7,
          title: "Departure from Pathankot",
          places: [
            {
              name: "Pathankot",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Gateway city with transport connections",
              duration: "N/A"
            }
          ],
          hotels: [
            {
              name: "Fortune Khajjiar",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.2,
              type: "boutique",
              description: "Resort overlooking Khajjiar meadows",
              amenities: ["Mountain Views", "Restaurant", "Adventure Activities", "Garden"]
            },
            {
              name: "Grand View Hotel",
              image: "/placeholder.svg",
              price: "₹6,000/night",
              rating: 4.0,
              type: "heritage",
              description: "Colonial style hotel with panoramic views",
              amenities: ["Valley Views", "Restaurant", "Bar", "Heritage Architecture"]
            }
          ],
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
      budget: 20000, // Medium budget in rupees
      itinerary: [
        {
          day: 1,
          title: "Arrival in Dehradun & Mussoorie",
          places: [
            {
              name: "Mall Road, Mussoorie",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Famous shopping street with mountain views",
              duration: "3 hours"
            },
            {
              name: "Gun Hill",
              image: "/placeholder.svg",
              type: "natural",
              description: "Second highest point with panoramic views",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "JW Marriott Mussoorie Walnut Grove Resort & Spa",
              image: "/placeholder.svg",
              price: "₹25,000/night",
              rating: 4.8,
              type: "luxury",
              description: "Luxury resort with mountain views",
              amenities: ["Spa", "Multiple Restaurants", "Indoor Pool", "Mountain Views"]
            },
            {
              name: "The Claridges Nabha Residence",
              image: "/placeholder.svg",
              price: "₹15,000/night",
              rating: 4.5,
              type: "heritage",
              description: "Heritage property with colonial charm",
              amenities: ["Heritage Building", "Restaurant", "Bar", "Garden"]
            }
          ],
          description: "Begin your journey in the \"Queen of the Hills\" and explore its charming vistas.",
          activities: ["Ropeway ride", "Shopping on Mall Road", "Evening walk"]
        },
        {
          day: 2,
          title: "Mussoorie & Kempty Falls",
          places: [
            {
              name: "Kempty Falls",
              image: "/placeholder.svg",
              type: "natural",
              description: "Popular waterfall with bathing pools",
              duration: "3 hours"
            },
            {
              name: "Company Garden",
              image: "/placeholder.svg",
              type: "natural",
              description: "Beautiful garden with artificial fountain",
              duration: "2 hours"
            },
            {
              name: "Lal Tibba",
              image: "/placeholder.svg",
              type: "natural",
              description: "Highest point in Mussoorie",
              duration: "1.5 hours"
            }
          ],
          hotels: [
            {
              name: "JW Marriott Mussoorie Walnut Grove Resort & Spa",
              image: "/placeholder.svg",
              price: "₹25,000/night",
              rating: 4.8,
              type: "luxury",
              description: "Luxury resort with mountain views",
              amenities: ["Spa", "Multiple Restaurants", "Indoor Pool", "Mountain Views"]
            },
            {
              name: "The Claridges Nabha Residence",
              image: "/placeholder.svg",
              price: "₹15,000/night",
              rating: 4.5,
              type: "heritage",
              description: "Heritage property with colonial charm",
              amenities: ["Heritage Building", "Restaurant", "Bar", "Garden"]
            }
          ],
          description: "Visit the famous Kempty Falls and enjoy the scenic beauty of Mussoorie.",
          activities: ["Boating", "Photography", "Sunset viewing"]
        },
        {
          day: 3,
          title: "Journey to Rishikesh - The Yoga Capital",
          places: [
            {
              name: "Laxman Jhula",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Iconic suspension bridge over Ganges",
              duration: "1 hour"
            },
            {
              name: "Ram Jhula",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Another suspension bridge with temples",
              duration: "1 hour"
            },
            {
              name: "Parmarth Niketan Ashram",
              image: "/placeholder.svg",
              type: "religious",
              description: "Largest ashram in Rishikesh",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "Aloha on the Ganges",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.3,
              type: "boutique",
              description: "Riverside resort with yoga facilities",
              amenities: ["Yoga Hall", "River Views", "Restaurant", "Spa"]
            },
            {
              name: "Taj Rishikesh Resort & Spa",
              image: "/placeholder.svg",
              price: "₹25,000/night",
              rating: 4.7,
              type: "luxury",
              description: "Luxury resort in Himalayan foothills",
              amenities: ["Infinity Pool", "Spa", "Multiple Restaurants", "Adventure Sports"]
            }
          ],
          description: "Travel to Rishikesh and immerse yourself in spirituality and adventure.",
          activities: ["Ganga Aarti ceremony", "Ashram visit", "River rafting"]
        },
        {
          day: 4,
          title: "Rishikesh Adventure & Spirituality",
          places: [
            {
              name: "Neer Garh Waterfall",
              image: "/placeholder.svg",
              type: "natural",
              description: "Three-tiered waterfall with trek",
              duration: "3 hours"
            },
            {
              name: "Beatles Ashram",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Abandoned ashram with Beatles history",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "Aloha on the Ganges",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.3,
              type: "boutique",
              description: "Riverside resort with yoga facilities",
              amenities: ["Yoga Hall", "River Views", "Restaurant", "Spa"]
            },
            {
              name: "Taj Rishikesh Resort & Spa",
              image: "/placeholder.svg",
              price: "₹25,000/night",
              rating: 4.7,
              type: "luxury",
              description: "Luxury resort in Himalayan foothills",
              amenities: ["Infinity Pool", "Spa", "Multiple Restaurants", "Adventure Sports"]
            }
          ],
          description: "Experience thrilling activities and find peace at the famous ashram.",
          activities: ["Bungee jumping", "Trekking", "Meditation"]
        },
        {
          day: 5,
          title: "Journey to Nainital - The City of Lakes",
          places: [
            {
              name: "Naini Lake",
              image: "/placeholder.svg",
              type: "natural",
              description: "Scenic lake surrounded by hills",
              duration: "2 hours"
            },
            {
              name: "Naina Devi Temple",
              image: "/placeholder.svg",
              type: "religious",
              description: "Ancient temple overlooking lake",
              duration: "1 hour"
            },
            {
              name: "The Mall Road",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Popular shopping street by the lake",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "The Naini Retreat",
              image: "/placeholder.svg",
              price: "₹12,000/night",
              rating: 4.4,
              type: "heritage",
              description: "Heritage hotel with lake views",
              amenities: ["Lake Views", "Restaurant", "Bar", "Heritage Architecture"]
            },
            {
              name: "Cygnett Resort Mountain Vows",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.2,
              type: "boutique",
              description: "Modern resort in hills",
              amenities: ["Mountain Views", "Spa", "Restaurant", "Conference Room"]
            }
          ],
          description: "Travel to Nainital and enjoy a serene experience around its beautiful lake.",
          activities: ["Boating", "Temple visit", "Shopping"]
        },
        {
          day: 6,
          title: "Nainital Sightseeing & Departure",
          places: [
            {
              name: "Snow View Point",
              image: "/placeholder.svg",
              type: "natural",
              description: "Panoramic viewpoint accessible by ropeway",
              duration: "2 hours"
            },
            {
              name: "Tiffin Top",
              image: "/placeholder.svg",
              type: "natural",
              description: "Hilltop viewpoint with hiking trail",
              duration: "3 hours"
            },
            {
              name: "Sattal",
              image: "/placeholder.svg",
              type: "natural",
              description: "Interconnected seven lakes",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "The Naini Retreat",
              image: "/placeholder.svg",
              price: "₹12,000/night",
              rating: 4.4,
              type: "heritage",
              description: "Heritage hotel with lake views",
              amenities: ["Lake Views", "Restaurant", "Bar", "Heritage Architecture"]
            },
            {
              name: "Cygnett Resort Mountain Vows",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.2,
              type: "boutique",
              description: "Modern resort in hills",
              amenities: ["Mountain Views", "Spa", "Restaurant", "Conference Room"]
            }
          ],
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
      budget: 30000, // High budget in rupees
      itinerary: [
        {
          day: 1,
          title: "Arrival in Srinagar - The Paradise on Earth",
          places: [
            {
              name: "Dal Lake",
              image: "/placeholder.svg",
              type: "natural",
              description: "Iconic lake with floating gardens and houseboats",
              duration: "3 hours"
            },
            {
              name: "Shikara Ride",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Traditional boat ride on Dal Lake",
              duration: "2 hours"
            },
            {
              name: "Mughal Gardens",
              image: "/placeholder.svg",
              type: "historical",
              description: "Beautiful terraced gardens from Mughal era",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "The Lalit Grand Palace",
              image: "/placeholder.svg",
              price: "₹25,000/night",
              rating: 4.8,
              type: "luxury",
              description: "Former palace with royal heritage",
              amenities: ["Lake Views", "Spa", "Fine Dining", "Heritage Architecture"]
            },
            {
              name: "Taj Vivanta Dal View",
              image: "/placeholder.svg",
              price: "₹20,000/night",
              rating: 4.7,
              type: "luxury",
              description: "Modern luxury hotel overlooking Dal Lake",
              amenities: ["Lake Views", "Multiple Restaurants", "Spa", "Fitness Center"]
            }
          ],
          description: "Experience the serene beauty of Srinagar with a traditional Shikara ride on Dal Lake.",
          activities: ["Shikara ride", "Garden tour", "Shopping for Kashmiri handicrafts"]
        },
        {
          day: 2,
          title: "Srinagar & Gulmarg",
          places: [
            {
              name: "Gulmarg Gondola",
              image: "/placeholder.svg",
              type: "adventure",
              description: "World's highest cable car ride",
              duration: "3 hours"
            },
            {
              name: "Khilanmarg",
              image: "/placeholder.svg",
              type: "natural",
              description: "Beautiful meadow with panoramic views",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "The Khyber Himalayan Resort & Spa",
              image: "/placeholder.svg",
              price: "₹30,000/night",
              rating: 4.9,
              type: "luxury",
              description: "Luxury resort in Gulmarg with ski facilities",
              amenities: ["Ski Access", "Spa", "Multiple Restaurants", "Mountain Views"]
            },
            {
              name: "Hotel Highlands Park",
              image: "/placeholder.svg",
              price: "₹15,000/night",
              rating: 4.3,
              type: "heritage",
              description: "Historic hotel with colonial architecture",
              amenities: ["Heritage Building", "Restaurant", "Garden", "Golf Course Access"]
            }
          ],
          description: "Travel to Gulmarg for adventure activities and breathtaking views.",
          activities: ["Gondola ride", "Skiing (seasonal)", "Snowboarding"]
        },
        {
          day: 3,
          title: "Pahalgam - Valley of Shepherds",
          places: [
            {
              name: "Betaab Valley",
              image: "/placeholder.svg",
              type: "natural",
              description: "Scenic valley named after a Bollywood movie",
              duration: "3 hours"
            },
            {
              name: "Aru Valley",
              image: "/placeholder.svg",
              type: "natural",
              description: "Picturesque meadow valley with trekking routes",
              duration: "4 hours"
            },
            {
              name: "Chandanwari",
              image: "/placeholder.svg",
              type: "natural",
              description: "Starting point of Amarnath Yatra",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "The Chinar Resort & Spa",
              image: "/placeholder.svg",
              price: "₹18,000/night",
              rating: 4.5,
              type: "luxury",
              description: "Luxury resort with mountain views",
              amenities: ["Spa", "Restaurant", "Valley Views", "Adventure Activities"]
            },
            {
              name: "Hotel Heevan Pahalgam",
              image: "/placeholder.svg",
              price: "₹12,000/night",
              rating: 4.2,
              type: "boutique",
              description: "Riverside hotel with modern amenities",
              amenities: ["River View", "Restaurant", "Garden", "Room Service"]
            }
          ],
          description: "Explore the beautiful valleys and meadows of Pahalgam.",
          activities: ["Horse riding", "River rafting", "Trekking"]
        },
        {
          day: 4,
          title: "Back to Srinagar & Shopping",
          places: [
            {
              name: "Pari Mahal",
              image: "/placeholder.svg",
              type: "historical",
              description: "Seven terraced garden with great views",
              duration: "2 hours"
            },
            {
              name: "Shankaracharya Temple",
              image: "/placeholder.svg",
              type: "religious",
              description: "Ancient temple on hilltop",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "The Lalit Grand Palace",
              image: "/placeholder.svg",
              price: "₹25,000/night",
              rating: 4.8,
              type: "luxury",
              description: "Former palace with royal heritage",
              amenities: ["Lake Views", "Spa", "Fine Dining", "Heritage Architecture"]
            },
            {
              name: "Taj Vivanta Dal View",
              image: "/placeholder.svg",
              price: "₹20,000/night",
              rating: 4.7,
              type: "luxury",
              description: "Modern luxury hotel overlooking Dal Lake",
              amenities: ["Lake Views", "Multiple Restaurants", "Spa", "Fitness Center"]
            }
          ],
          description: "Visit ancient sites and shop for local goods in Srinagar.",
          activities: ["Temple visit", "Shopping for pashmina and saffron"]
        },
        {
          day: 5,
          title: "Srinagar & Sonamarg",
          places: [
            {
              name: "Thajiwas Glacier",
              image: "/placeholder.svg",
              type: "natural",
              description: "Accessible glacier with snow activities",
              duration: "4 hours"
            },
            {
              name: "Zojila Pass",
              image: "/placeholder.svg",
              type: "natural",
              description: "High mountain pass with scenic views",
              duration: "3 hours"
            }
          ],
          hotels: [
            {
              name: "The Lalit Grand Palace",
              image: "/placeholder.svg",
              price: "₹25,000/night",
              rating: 4.8,
              type: "luxury",
              description: "Former palace with royal heritage",
              amenities: ["Lake Views", "Spa", "Fine Dining", "Heritage Architecture"]
            },
            {
              name: "Taj Vivanta Dal View",
              image: "/placeholder.svg",
              price: "₹20,000/night",
              rating: 4.7,
              type: "luxury",
              description: "Modern luxury hotel overlooking Dal Lake",
              amenities: ["Lake Views", "Multiple Restaurants", "Spa", "Fitness Center"]
            }
          ],
          description: "Day trip to Sonamarg, the 'Meadow of Gold', for stunning glacier views.",
          activities: ["Glacier trek", "Sledging", "Horse riding"]
        },
        {
          day: 6,
          title: "Houseboat Stay Experience",
          places: [
            {
              name: "Nigeen Lake",
              image: "/placeholder.svg",
              type: "natural",
              description: "Serene lake known for houseboats",
              duration: "Full Day"
            }
          ],
          hotels: [
            {
              name: "Royal Group of Houseboats",
              image: "/placeholder.svg",
              price: "₹15,000/night",
              rating: 4.6,
              type: "heritage",
              description: "Luxury houseboat with traditional decor",
              amenities: ["Lake Views", "Traditional Cuisine", "Private Deck", "Live Music"]
            },
            {
              name: "New Heritage Houseboats",
              image: "/placeholder.svg",
              price: "₹12,000/night",
              rating: 4.4,
              type: "heritage",
              description: "Classic Kashmiri houseboat experience",
              amenities: ["Lake Views", "Local Food", "Shikara Rides", "Cultural Programs"]
            }
          ],
          description: "Spend a relaxing day and night on a traditional houseboat.",
          activities: ["Houseboat relaxation", "Local cuisine experience", "Canoeing"]
        },
        {
          day: 7,
          title: "Departure from Srinagar",
          places: [
            {
              name: "Srinagar Airport",
              image: "/placeholder.svg",
              type: "cultural",
              description: "International airport with scenic mountain views",
              duration: "N/A"
            }
          ],
          hotels: [
            {
              name: "The Lalit Grand Palace",
              image: "/placeholder.svg",
              price: "₹25,000/night",
              rating: 4.8,
              type: "luxury",
              description: "Former palace with royal heritage",
              amenities: ["Lake Views", "Spa", "Fine Dining", "Heritage Architecture"]
            },
            {
              name: "Taj Vivanta Dal View",
              image: "/placeholder.svg",
              price: "₹20,000/night",
              rating: 4.7,
              type: "luxury",
              description: "Modern luxury hotel overlooking Dal Lake",
              amenities: ["Lake Views", "Multiple Restaurants", "Spa", "Fitness Center"]
            }
          ],
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
      budget: 35000,
      itinerary: [
        {
          day: 1,
          title: "Arrival in Mumbai - The City of Dreams",
          places: [
            {
              name: "Gateway of India",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Iconic arch monument built in Indo-Saracenic style",
              duration: "2 hours"
            },
            {
              name: "Marine Drive",
              image: "/placeholder.svg",
              type: "natural",
              description: "3.6-kilometer-long boulevard along the coastline",
              duration: "1 hour"
            },
            {
              name: "Colaba Causeway",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Famous street shopping area with local goods",
              duration: "3 hours"
            }
          ],
          hotels: [
            {
              name: "The Taj Mahal Palace",
              image: "/placeholder.svg",
              price: "₹30,000/night",
              rating: 4.9,
              type: "luxury",
              description: "Historic luxury hotel with stunning architecture",
              amenities: ["Multiple Restaurants", "Spa", "Pool", "Heritage Tours"]
            },
            {
              name: "Trident Nariman Point",
              image: "/placeholder.svg",
              price: "₹20,000/night",
              rating: 4.7,
              type: "luxury",
              description: "Modern hotel with sea views",
              amenities: ["Sea View Rooms", "Fine Dining", "Business Center", "Spa"]
            }
          ],
          description: "Explore the bustling metropolis of Mumbai, a city of contrasts.",
          activities: ["City tour", "Shopping", "Street food tasting"]
        },
        {
          day: 2,
          title: "Mumbai Film City & Elephanta Caves",
          places: [
            {
              name: "Film City",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Major film production center in Mumbai",
              duration: "3 hours"
            },
            {
              name: "Elephanta Caves",
              image: "/placeholder.svg",
              type: "cultural",
              description: "UNESCO World Heritage site with ancient cave temples",
              duration: "4 hours"
            }
          ],
          hotels: [
            {
              name: "The Taj Mahal Palace",
              image: "/placeholder.svg",
              price: "₹30,000/night",
              rating: 4.9,
              type: "luxury",
              description: "Historic luxury hotel with stunning architecture",
              amenities: ["Multiple Restaurants", "Spa", "Pool", "Heritage Tours"]
            },
            {
              name: "Trident Nariman Point",
              image: "/placeholder.svg",
              price: "₹20,000/night",
              rating: 4.7,
              type: "luxury",
              description: "Modern hotel with sea views",
              amenities: ["Sea View Rooms", "Fine Dining", "Business Center", "Spa"]
            }
          ],
          description: "Visit the heart of the Indian film industry and ancient caves.",
          activities: ["Studio tour", "Ferry ride", "Cave exploration"]
        },
        {
          day: 3,
          title: "Journey to Lonavala & Khandala",
          places: [
            {
              name: "Tiger Point",
              image: "/placeholder.svg",
              type: "natural",
              description: "Cliff-top viewpoint offering panoramic views",
              duration: "1 hour"
            },
            {
              name: "Bhushi Dam",
              image: "/placeholder.svg",
              type: "natural",
              description: "Popular monsoon destination with waterfalls",
              duration: "2 hours"
            },
            {
              name: "Lonavala Lake",
              image: "/placeholder.svg",
              type: "natural",
              description: "Peaceful lake surrounded by hills",
              duration: "1 hour"
            }
          ],
          hotels: [
            {
              name: "Della Resorts",
              image: "/placeholder.svg",
              price: "₹15,000/night",
              rating: 4.6,
              type: "luxury",
              description: "Adventure and luxury resort",
              amenities: ["Adventure Park", "Spa", "Multiple Restaurants", "Activities"]
            },
            {
              name: "Fariyas Resort Lonavala",
              image: "/placeholder.svg",
              price: "₹12,000/night",
              rating: 4.4,
              type: "boutique",
              description: "Family-friendly resort with valley views",
              amenities: ["Swimming Pool", "Kids Area", "Spa", "Restaurant"]
            }
          ],
          description: "Travel to the popular hill stations near Mumbai for scenic beauty.",
          activities: ["Waterfall visit", "Nature walks", "Local sweet shopping"]
        },
        {
          day: 4,
          title: "Journey to Nashik - Wine Capital of India",
          places: [
            {
              name: "Sula Vineyards",
              image: "/placeholder.svg",
              type: "cultural",
              description: "India's largest winery with tours and tastings",
              duration: "3 hours"
            },
            {
              name: "York Winery",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Boutique winery with panoramic views",
              duration: "2 hours"
            },
            {
              name: "Trimbakeshwar Temple",
              image: "/placeholder.svg",
              type: "religious",
              description: "Ancient temple dedicated to Lord Shiva",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "Sula Vineyards Resort",
              image: "/placeholder.svg",
              price: "₹18,000/night",
              rating: 4.7,
              type: "boutique",
              description: "Luxury resort amidst vineyards",
              amenities: ["Wine Tours", "Restaurant", "Pool", "Vineyard Views"]
            },
            {
              name: "The Gateway Hotel Ambad",
              image: "/placeholder.svg",
              price: "₹12,000/night",
              rating: 4.5,
              type: "budget",
              description: "Contemporary hotel in Nashik",
              amenities: ["Restaurant", "Business Center", "Fitness Center", "Spa"]
            }
          ],
          description: "Taste some of India's finest wines and visit ancient temples.",
          activities: ["Wine tasting", "Vineyard tour", "Spiritual visit"]
        },
        {
          day: 5,
          title: "Aurangabad - Ancient Caves",
          places: [
            {
              name: "Ajanta Caves",
              image: "/placeholder.svg",
              type: "historical",
              description: "Ancient Buddhist cave paintings and monasteries",
              duration: "4 hours"
            },
            {
              name: "Ellora Caves",
              image: "/placeholder.svg",
              type: "historical",
              description: "Rock-cut temples showcasing Indian architecture",
              duration: "4 hours"
            }
          ],
          hotels: [
            {
              name: "Welcomhotel by ITC Hotels",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.3,
              type: "budget",
              description: "Contemporary hotel in Aurangabad",
              amenities: ["Restaurant", "Business Center", "Fitness Center", "Wifi"]
            },
            {
              name: "The Manor Hotel",
              image: "/placeholder.svg",
              price: "₹6,000/night",
              rating: 4.1,
              type: "budget",
              description: "Comfortable hotel near caves",
              amenities: ["Restaurant", "Room Service", "Parking", "Tour Desk"]
            }
          ],
          description: "Discover the UNESCO World Heritage Sites of Ajanta and Ellora.",
          activities: ["Cave exploration", "Photography", "History tour"]
        },
        {
          day: 6,
          title: "Shirdi & Shani Shingnapur",
          places: [
            {
              name: "Sai Baba Temple",
              image: "/placeholder.svg",
              type: "religious",
              description: "Famous temple dedicated to Sai Baba",
              duration: "3 hours"
            },
            {
              name: "Shani Shingnapur Temple",
              image: "/placeholder.svg",
              type: "religious",
              description: "Unique temple known for houses without doors",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "Hotel Sai Palace",
              image: "/placeholder.svg",
              price: "₹5,000/night",
              rating: 4.2,
              type: "budget",
              description: "Convenient hotel near temple",
              amenities: ["Temple View", "Restaurant", "Room Service", "Parking"]
            },
            {
              name: "Sun-n-Sand Shirdi",
              image: "/placeholder.svg",
              price: "₹7,000/night",
              rating: 4.4,
              type: "boutique",
              description: "Modern hotel with comfortable amenities",
              amenities: ["Pool", "Spa", "Restaurant", "Temple Shuttle"]
            }
          ],
          description: "A spiritual day visiting revered temples.",
          activities: ["Pilgrimage", "Spiritual prayers", "Local market visit"]
        },
        {
          day: 7,
          title: "Departure from Mumbai",
          places: [
            {
              name: "Mumbai Airport",
              image: "/placeholder.svg",
              type: "cultural",
              description: "International airport with modern amenities",
              duration: "N/A"
            }
          ],
          hotels: [
            {
              name: "The Taj Mahal Palace",
              image: "/placeholder.svg",
              price: "₹30,000/night",
              rating: 4.9,
              type: "luxury",
              description: "Historic luxury hotel with stunning architecture",
              amenities: ["Multiple Restaurants", "Spa", "Pool", "Heritage Tours"]
            },
            {
              name: "Trident Nariman Point",
              image: "/placeholder.svg",
              price: "₹20,000/night",
              rating: 4.7,
              type: "luxury",
              description: "Modern hotel with sea views",
              amenities: ["Sea View Rooms", "Fine Dining", "Business Center", "Spa"]
            }
          ],
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
      budget: 25000,
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bengaluru - The Silicon Valley of India",
          places: [
            {
              name: "Lalbagh Botanical Garden",
              image: "/placeholder.svg",
              type: "natural",
              description: "Historic botanical garden with diverse plant species",
              duration: "2 hours"
            },
            {
              name: "Cubbon Park",
              image: "/placeholder.svg",
              type: "natural",
              description: "Landmark city park with walking trails",
              duration: "1.5 hours"
            },
            {
              name: "Bangalore Palace",
              image: "/placeholder.svg",
              type: "historical",
              description: "Tudor-style palace with royal heritage",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "The Leela Palace Bengaluru",
              image: "/placeholder.svg",
              price: "₹25,000/night",
              rating: 4.8,
              type: "luxury",
              description: "Opulent luxury hotel with grand architecture",
              amenities: ["Multiple Restaurants", "Spa", "Pool", "Business Center"]
            },
            {
              name: "The Ritz-Carlton, Bangalore",
              image: "/placeholder.svg",
              price: "₹22,000/night",
              rating: 4.7,
              type: "luxury",
              description: "Modern luxury hotel in city center",
              amenities: ["Fine Dining", "Spa", "Rooftop Bar", "Fitness Center"]
            }
          ],
          description: "Explore the Garden City with its modern vibe and historical landmarks.",
          activities: ["Garden walk", "Palace tour", "Pub hopping on MG Road"]
        },
        {
          day: 2,
          title: "Journey to Mysuru - The City of Palaces",
          places: [
            {
              name: "Mysore Palace",
              image: "/placeholder.svg",
              type: "historical",
              description: "Magnificent palace with Indo-Saracenic architecture",
              duration: "3 hours"
            },
            {
              name: "Chamundi Hills",
              image: "/placeholder.svg",
              type: "religious",
              description: "Sacred hilltop temple with panoramic city views",
              duration: "2 hours"
            },
            {
              name: "Brindavan Gardens",
              image: "/placeholder.svg",
              type: "natural",
              description: "Terraced gardens with musical fountains",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "Radisson Blu Plaza Hotel Mysore",
              image: "/placeholder.svg",
              price: "₹12,000/night",
              rating: 4.5,
              type: "luxury",
              description: "Modern luxury hotel near palace",
              amenities: ["Multiple Restaurants", "Spa", "Pool", "Business Center"]
            },
            {
              name: "Fortune JP Palace",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.3,
              type: "boutique",
              description: "Heritage-style hotel with palace views",
              amenities: ["Restaurant", "Rooftop Dining", "Spa", "Business Center"]
            }
          ],
          description: "Travel to Mysuru and witness the grandeur of its royal past.",
          activities: ["Palace light show", "Hilltop temple visit", "Musical fountain show"]
        },
        {
          day: 3,
          title: "Mysuru Heritage & Srirangapatna",
          places: [
            {
              name: "Srirangapatna",
              image: "/placeholder.svg",
              type: "historical",
              description: "Historic fortress town with temples and ruins",
              duration: "3 hours"
            },
            {
              name: "St. Philomena's Church",
              image: "/placeholder.svg",
              type: "religious",
              description: "Neo-Gothic style Catholic church",
              duration: "1 hour"
            },
            {
              name: "Mysuru Zoo",
              image: "/placeholder.svg",
              type: "natural",
              description: "One of India's oldest and most popular zoos",
              duration: "3 hours"
            }
          ],
          hotels: [
            {
              name: "Radisson Blu Plaza Hotel Mysore",
              image: "/placeholder.svg",
              price: "₹12,000/night",
              rating: 4.5,
              type: "luxury",
              description: "Modern luxury hotel near palace",
              amenities: ["Multiple Restaurants", "Spa", "Pool", "Business Center"]
            },
            {
              name: "Fortune JP Palace",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.3,
              type: "boutique",
              description: "Heritage-style hotel with palace views",
              amenities: ["Restaurant", "Rooftop Dining", "Spa", "Business Center"]
            }
          ],
          description: "Explore the historical sites and religious landmarks around Mysuru.",
          activities: ["History tour", "Church visit", "Zoo visit"]
        },
        {
          day: 4,
          title: "Journey to Coorg - Scotland of India",
          places: [
            {
              name: "Abbey Falls",
              image: "/placeholder.svg",
              type: "natural",
              description: "Scenic waterfall in coffee plantation area",
              duration: "1.5 hours"
            },
            {
              name: "Raja's Seat",
              image: "/placeholder.svg",
              type: "natural",
              description: "Historic sunset viewpoint with gardens",
              duration: "1 hour"
            },
            {
              name: "Omkareshwara Temple",
              image: "/placeholder.svg",
              type: "religious",
              description: "Historic temple with Islamic architectural influence",
              duration: "1 hour"
            }
          ],
          hotels: [
            {
              name: "Taj Madikeri Resort & Spa",
              image: "/placeholder.svg",
              price: "₹20,000/night",
              rating: 4.7,
              type: "luxury",
              description: "Luxury resort with mountain views",
              amenities: ["Spa", "Multiple Restaurants", "Pool", "Coffee Estate"]
            },
            {
              name: "Club Mahindra Madikeri",
              image: "/placeholder.svg",
              price: "₹15,000/night",
              rating: 4.5,
              type: "boutique",
              description: "Family resort in coffee country",
              amenities: ["Activities", "Restaurant", "Spa", "Kids Club"]
            }
          ],
          description: "Travel to the misty hills of Coorg, famous for its coffee plantations.",
          activities: ["Coffee plantation tour", "Waterfall visit", "Sunset viewing"]
        },
        {
          day: 5,
          title: "Coorg & Bylakuppe",
          places: [
            {
              name: "Dubare Elephant Camp",
              image: "/placeholder.svg",
              type: "natural",
              description: "Elephant training camp on riverbank",
              duration: "3 hours"
            },
            {
              name: "Bylakuppe Tibetan Settlement",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Largest Tibetan settlement in South India",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "Taj Madikeri Resort & Spa",
              image: "/placeholder.svg",
              price: "₹20,000/night",
              rating: 4.7,
              type: "luxury",
              description: "Luxury resort with mountain views",
              amenities: ["Spa", "Multiple Restaurants", "Pool", "Coffee Estate"]
            },
            {
              name: "Club Mahindra Madikeri",
              image: "/placeholder.svg",
              price: "₹15,000/night",
              rating: 4.5,
              type: "boutique",
              description: "Family resort in coffee country",
              amenities: ["Activities", "Restaurant", "Spa", "Kids Club"]
            }
          ],
          description: "Interact with elephants and visit the unique Tibetan settlement.",
          activities: ["Elephant bathing", "Monastery visit", "Local handicraft shopping"]
        },
        {
          day: 6,
          title: "Journey to Hampi - Ancient City",
          places: [
            {
              name: "Virupaksha Temple",
              image: "/placeholder.svg",
              type: "religious",
              description: "Ancient temple dedicated to Lord Shiva",
              duration: "2 hours"
            },
            {
              name: "Stone Chariot",
              image: "/placeholder.svg",
              type: "historical",
              description: "Iconic stone chariot at Vittala Temple",
              duration: "1 hour"
            },
            {
              name: "Hampi Bazaar",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Historic marketplace with ancient ruins",
              duration: "1.5 hours"
            }
          ],
          hotels: [
            {
              name: "Evolve Back, Hampi",
              image: "/placeholder.svg",
              price: "₹25,000/night",
              rating: 4.8,
              type: "luxury",
              description: "Luxury resort inspired by Vijayanagara architecture",
              amenities: ["Infinity Pool", "Spa", "Multiple Restaurants", "Heritage Tours"]
            },
            {
              name: "Hyatt Place Hampi",
              image: "/placeholder.svg",
              price: "₹12,000/night",
              rating: 4.5,
              type: "boutique",
              description: "Modern hotel near historic sites",
              amenities: ["Restaurant", "Pool", "Business Center", "Tour Desk"]
            }
          ],
          description: "Travel to the UNESCO World Heritage Site of Hampi with its ancient ruins.",
          activities: ["Temple tour", "Coracle ride on Tungabhadra River", "Sunset at Hemakuta Hill"]
        },
        {
          day: 7,
          title: "Hampi Exploration & Departure",
          places: [
            {
              name: "Vitthala Temple Complex",
              image: "/placeholder.svg",
              type: "historical",
              description: "Iconic temple complex with musical pillars",
              duration: "2.5 hours"
            },
            {
              name: "Lotus Mahal",
              image: "/placeholder.svg",
              type: "historical",
              description: "Indo-Islamic architectural marvel",
              duration: "1 hour"
            }
          ],
          hotels: [
            {
              name: "Evolve Back, Hampi",
              image: "/placeholder.svg",
              price: "₹25,000/night",
              rating: 4.8,
              type: "luxury",
              description: "Luxury resort inspired by Vijayanagara architecture",
              amenities: ["Infinity Pool", "Spa", "Multiple Restaurants", "Heritage Tours"]
            },
            {
              name: "Hyatt Place Hampi",
              image: "/placeholder.svg",
              price: "₹12,000/night",
              rating: 4.5,
              type: "boutique",
              description: "Modern hotel near historic sites",
              amenities: ["Restaurant", "Pool", "Business Center", "Tour Desk"]
            }
          ],
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
      budget: 15000,
      itinerary: [
        {
          day: 1,
          title: "Arrival in Chennai - The Gateway to South India",
          places: [
            {
              name: "Marina Beach",
              image: "/placeholder.svg",
              type: "natural",
              description: "World's second-longest urban beach",
              duration: "2 hours"
            },
            {
              name: "Kapaleeshwarar Temple",
              image: "/placeholder.svg",
              type: "religious",
              description: "Ancient Dravidian temple dedicated to Shiva",
              duration: "1.5 hours"
            },
            {
              name: "Fort St. George",
              image: "/placeholder.svg",
              type: "historical",
              description: "First British fortress in India",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "ITC Grand Chola",
              image: "/placeholder.svg",
              price: "₹18,000/night",
              rating: 4.8,
              type: "luxury",
              description: "Palatial luxury hotel inspired by Chola dynasty",
              amenities: ["Multiple Restaurants", "Spa", "Pool", "Business Center"]
            },
            {
              name: "The Leela Palace Chennai",
              image: "/placeholder.svg",
              price: "₹16,000/night",
              rating: 4.7,
              type: "luxury",
              description: "Seafront luxury hotel with royal ambiance",
              amenities: ["Sea View Rooms", "Fine Dining", "Spa", "Pool"]
            }
          ],
          description: "Explore the cultural and historical capital of Tamil Nadu.",
          activities: ["Beach walk", "Temple visit", "Museum tour"]
        },
        {
          day: 2,
          title: "Mahabalipuram & Pondicherry",
          places: [
            {
              name: "Shore Temple",
              image: "/placeholder.svg",
              type: "historical",
              description: "7th century beachfront temple complex",
              duration: "2 hours"
            },
            {
              name: "Panch Rathas",
              image: "/placeholder.svg",
              type: "historical",
              description: "Five monolithic rock temples",
              duration: "1.5 hours"
            },
            {
              name: "Aurobindo Ashram",
              image: "/placeholder.svg",
              type: "religious",
              description: "Spiritual center dedicated to Sri Aurobindo",
              duration: "1 hour"
            }
          ],
          hotels: [
            {
              name: "Radisson Blu Resort Temple Bay",
              image: "/placeholder.svg",
              price: "₹14,000/night",
              rating: 4.6,
              type: "luxury",
              description: "Beachfront resort near Shore Temple",
              amenities: ["Private Beach", "Pool", "Spa", "Multiple Restaurants"]
            },
            {
              name: "Le Dupleix",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.4,
              type: "boutique",
              description: "Heritage hotel in French Quarter",
              amenities: ["Colonial Architecture", "Restaurant", "Bar", "Garden"]
            }
          ],
          description: "Travel to the ancient port city of Mahabalipuram and the French colonial town of Pondicherry.",
          activities: ["Heritage site visit", "Ashram visit", "Cycling through French Quarter"]
        },
        {
          day: 3,
          title: "Pondicherry & Chidambaram",
          places: [
            {
              name: "Auroville",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Experimental township with Matrimandir",
              duration: "3 hours"
            },
            {
              name: "Nataraja Temple",
              image: "/placeholder.svg",
              type: "religious",
              description: "Ancient temple dedicated to dancing Shiva",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "Le Dupleix",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.4,
              type: "boutique",
              description: "Heritage hotel in French Quarter",
              amenities: ["Colonial Architecture", "Restaurant", "Bar", "Garden"]
            },
            {
              name: "Hotel Saradharam",
              image: "/placeholder.svg",
              price: "₹5,000/night",
              rating: 4.0,
              type: "budget",
              description: "Comfortable hotel in Chidambaram",
              amenities: ["Restaurant", "Room Service", "Temple View", "Parking"]
            }
          ],
          description: "Visit the spiritual community of Auroville and the ancient temple of Chidambaram.",
          activities: ["Meditation", "Temple visit", "Local market shopping"]
        },
        {
          day: 4,
          title: "Journey to Madurai - Temple City",
          places: [
            {
              name: "Meenakshi Amman Temple",
              image: "/placeholder.svg",
              type: "religious",
              description: "Iconic temple with colorful sculptures",
              duration: "3 hours"
            },
            {
              name: "Thirumalai Nayakkar Palace",
              image: "/placeholder.svg",
              type: "historical",
              description: "17th-century Indo-Saracenic palace",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "Heritage Madurai",
              image: "/placeholder.svg",
              price: "₹10,000/night",
              rating: 4.5,
              type: "boutique",
              description: "Heritage hotel with colonial charm",
              amenities: ["Pool", "Restaurant", "Garden", "Heritage Architecture"]
            },
            {
              name: "The Gateway Hotel Pasumalai",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.3,
              type: "boutique",
              description: "Hilltop hotel with city views",
              amenities: ["City Views", "Restaurant", "Pool", "Fitness Center"]
            }
          ],
          description: "Travel to the vibrant city of Madurai, known for its magnificent temples.",
          activities: ["Temple tour", "Palace visit", "Local cuisine tasting"]
        },
        {
          day: 5,
          title: "Madurai & Kodaikanal",
          places: [
            {
              name: "Kodaikanal Lake",
              image: "/placeholder.svg",
              type: "natural",
              description: "Star-shaped lake with boating facilities",
              duration: "2 hours"
            },
            {
              name: "Coaker's Walk",
              image: "/placeholder.svg",
              type: "natural",
              description: "Scenic mountain walking path",
              duration: "1 hour"
            }
          ],
          hotels: [
            {
              name: "The Tamara Kodaikanal",
              image: "/placeholder.svg",
              price: "₹15,000/night",
              rating: 4.6,
              type: "luxury",
              description: "Luxury resort with mountain views",
              amenities: ["Mountain Views", "Spa", "Restaurant", "Activities"]
            },
            {
              name: "Sterling Kodai Lake",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.2,
              type: "boutique",
              description: "Lake view resort with cozy rooms",
              amenities: ["Lake Views", "Restaurant", "Indoor Games", "Garden"]
            }
          ],
          description: "Journey to the hill station of Kodaikanal for its pleasant climate and natural beauty.",
          activities: ["Boating", "Cycling", "Nature walk"]
        },
        {
          day: 6,
          title: "Kodaikanal & Departure",
          places: [
            {
              name: "Pillar Rocks",
              image: "/placeholder.svg",
              type: "natural",
              description: "Three giant rock pillars with valley views",
              duration: "1 hour"
            },
            {
              name: "Guna Cave",
              image: "/placeholder.svg",
              type: "natural",
              description: "Deep chasm between rocks with misty views",
              duration: "1 hour"
            }
          ],
          hotels: [
            {
              name: "The Tamara Kodaikanal",
              image: "/placeholder.svg",
              price: "₹15,000/night",
              rating: 4.6,
              type: "luxury",
              description: "Luxury resort with mountain views",
              amenities: ["Mountain Views", "Spa", "Restaurant", "Activities"]
            },
            {
              name: "Sterling Kodai Lake",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.2,
              type: "boutique",
              description: "Lake view resort with cozy rooms",
              amenities: ["Lake Views", "Restaurant", "Indoor Games", "Garden"]
            }
          ],
          description: "Explore the famous viewpoints and caves before heading back.",
          activities: ["Trekking", "Photography", "Local shopping"]
        },
        {
          day: 7,
          title: "Departure from Madurai Airport",
          places: [
            {
              name: "Madurai Airport",
              image: "/placeholder.svg",
              type: "cultural",
              description: "International airport serving Madurai",
              duration: "N/A"
            }
          ],
          hotels: [
            {
              name: "The Gateway Hotel Pasumalai",
              image: "/placeholder.svg",
              price: "₹8,000/night",
              rating: 4.3,
              type: "boutique",
              description: "Hilltop hotel with city views",
              amenities: ["City Views", "Restaurant", "Pool", "Fitness Center"]
            }
          ],
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
      budget: 20000,
      itinerary: [
        {
          day: 1,
          title: "Arrival in Kolkata - The City of Joy",
          places: [
            {
              name: "Victoria Memorial",
              image: "/placeholder.svg",
              type: "historical",
              description: "Majestic marble monument with museum",
              duration: "2.5 hours"
            },
            {
              name: "Howrah Bridge",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Iconic cantilever bridge over Hooghly River",
              duration: "1 hour"
            },
            {
              name: "Dakshineswar Kali Temple",
              image: "/placeholder.svg",
              type: "religious",
              description: "Historic temple on riverbank",
              duration: "2 hours"
            }
          ],
          hotels: [
            {
              name: "The Oberoi Grand",
              image: "/placeholder.svg",
              price: "₹20,000/night",
              rating: 4.8,
              type: "luxury",
              description: "Historic luxury hotel in heart of city",
              amenities: ["Multiple Restaurants", "Spa", "Pool", "Heritage Building"]
            },
            {
              name: "ITC Sonar",
              image: "/placeholder.svg",
              price: "₹15,000/night",
              rating: 4.7,
              type: "luxury",
              description: "Modern luxury hotel with extensive gardens",
              amenities: ["Multiple Restaurants", "Spa", "Pool", "Business Center"]
            }
          ],
          description: "Experience the bustling cultural hub of Kolkata.",
          activities: ["City tour", "Tram ride", "Street food tasting"]
        },
        {
          day: 2,
          title: "Kolkata Art & Culture",
          places: [
            {
              name: "Indian Museum",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Oldest museum in India with rare artifacts",
              duration: "2.5 hours"
            },
            {
              name: "Mother House",
              image: "/placeholder.svg",
              type: "religious",
              description: "Mother Teresa's home and final resting place",
              duration: "1 hour"
            },
            {
              name: "Princep Ghat",
              image: "/placeholder.svg",
              type: "cultural",
              description: "Historic riverfront with Palladian porch",
              duration: "1.5 hours"
            }
          ],
          hotels: [
            {
              name: "The Oberoi Grand",
              image: "/placeholder.svg",
              price: "₹20,000/night",
              rating: 4.8,
              type: "luxury",
              description: "Historic luxury hotel in heart of city",
              amenities: ["Multiple Restaurants", "Spa", "Pool", "Heritage Building"]
            },
            {
              name: "ITC Sonar",
              image: "/placeholder.svg",
              price: "₹15,000/night",
              rating: 4.7,
              type: "luxury",
              description: "Modern luxury hotel with extensive gardens",
              amenities: ["Multiple Restaurants", "Spa", "Pool", "Business Center"]
            }
          ],
          description: "Explore the rich art, history, and spiritual side of the city.",
          activities: ["Museum visit", "Boat ride on Hooghly", "Shopping at New Market"]
        },
        {
          day: 3,
          title: "Journey to Darjeeling - Queen of the Hills",
          places: [
            {
              name: "Darjeeling Himalayan Railway (Toy Train)",
              image: "placeholder.svg",
              type: "historical",
              description: "A UNESCO World Heritage Site, this narrow-gauge railway offers scenic mountain views.",
              duration: "2-3 hours"
            },
            {
              name: "Batasia Loop",
              image: "placeholder.svg",
              type: "cultural",
              description: "A spiral railway track where the toy train completes a full circle, offering panoramic views.",
              duration: "30-45 minutes"
            }
          ],
          hotels: [
            {
              name: "Mayfair Darjeeling",
              image: "placeholder.svg",
              price: "15000",
              rating: 4.5,
              type: "luxury",
              description: "Luxury heritage hotel with colonial charm and modern amenities.",
              amenities: ["Restaurant", "Spa", "Mountain Views", "Room Service"]
            },
            {
              name: "Hotel Sonam Paljor",
              image: "placeholder.svg",
              price: "5000",
              rating: 4.0,
              type: "boutique",
              description: "Comfortable hotel with great views and warm hospitality.",
              amenities: ["Restaurant", "Room Service", "Mountain Views"]
            }
          ],
          description: "Travel to the scenic hill station of Darjeeling.",
          activities: ["Toy train ride", "Tea garden tour", "Photography"]
        },
        {
          day: 4,
          title: "Darjeeling Tiger Hill & Tea Gardens",
          places: [
            {
              name: "Tiger Hill",
              image: "placeholder.svg",
              type: "natural",
              description: "Famous viewpoint offering stunning sunrise views of Mount Kanchenjunga.",
              duration: "2-3 hours"
            },
            {
              name: "Ghoom Monastery",
              image: "placeholder.svg",
              type: "religious",
              description: "The oldest Tibetan Buddhist monastery in Darjeeling, known for its 15-foot high statue of Maitreya Buddha.",
              duration: "1-2 hours"
            },
            {
              name: "Happy Valley Tea Estate",
              image: "placeholder.svg",
              type: "cultural",
              description: "One of Darjeeling's oldest and most famous tea gardens offering tours and tastings.",
              duration: "2-3 hours"
            }
          ],
          hotels: [
            {
              name: "Mayfair Darjeeling",
              image: "placeholder.svg",
              price: "15000",
              rating: 4.5,
              type: "luxury",
              description: "Luxury heritage hotel with colonial charm and modern amenities.",
              amenities: ["Restaurant", "Spa", "Mountain Views", "Room Service"]
            },
            {
              name: "Hotel Sonam Paljor",
              image: "placeholder.svg",
              price: "5000",
              rating: 4.0,
              type: "boutique",
              description: "Comfortable hotel with great views and warm hospitality.",
              amenities: ["Restaurant", "Room Service", "Mountain Views"]
            }
          ],
          description: "Witness the magnificent sunrise over Kanchenjunga and visit tea plantations.",
          activities: ["Sunrise viewing", "Monastery visit", "Tea tasting"]
        },
        {
          day: 5,
          title: "Kalimpong Exploration",
          places: [
            {
              name: "Durpin Dara Hill",
              image: "placeholder.svg",
              type: "natural",
              description: "Highest point in Kalimpong offering panoramic views of the surrounding valleys and mountains.",
              duration: "2-3 hours"
            },
            {
              name: "Zang Dhok Palri Phodang Monastery",
              image: "placeholder.svg",
              type: "religious",
              description: "A beautiful Buddhist monastery with traditional architecture and peaceful surroundings.",
              duration: "1-2 hours"
            }
          ],
          hotels: [
            {
              name: "Mayfair Himalayan Spa Resort",
              image: "placeholder.svg",
              price: "18000",
              rating: 4.7,
              type: "luxury",
              description: "Luxury resort with spa facilities and stunning mountain views.",
              amenities: ["Spa", "Restaurant", "Room Service", "Mountain Views", "Swimming Pool"]
            },
            {
              name: "Sinclairs Retreat Kalimpong",
              image: "placeholder.svg",
              price: "8000",
              rating: 4.2,
              type: "heritage",
              description: "Heritage property with colonial architecture and beautiful gardens.",
              amenities: ["Restaurant", "Room Service", "Garden", "Mountain Views"]
            }
          ],
          description: "A day trip to the serene town of Kalimpong.",
          activities: ["Monastery tour", "Flower garden visit", "Scenic drive"]
        },
        {
          day: 6,
          title: "Departure from Bagdogra",
          places: [
            {
              name: "Bagdogra Airport",
              image: "placeholder.svg",
              type: "cultural",
              description: "International airport serving as the gateway to Darjeeling and Sikkim.",
              duration: "2-3 hours"
            }
          ],
          hotels: [
            {
              name: "Mayfair Darjeeling",
              image: "placeholder.svg",
              price: "15000",
              rating: 4.5,
              type: "luxury",
              description: "Luxury heritage hotel with colonial charm and modern amenities.",
              amenities: ["Restaurant", "Spa", "Mountain Views", "Room Service"]
            },
            {
              name: "Hotel Sonam Paljor",
              image: "placeholder.svg",
              price: "5000",
              rating: 4.0,
              type: "boutique",
              description: "Comfortable hotel with great views and warm hospitality.",
              amenities: ["Restaurant", "Room Service", "Mountain Views"]
            }
          ],
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
      budget: 15000,
      itinerary: [
        {
          day: 1,
          title: "Arrival in Ahmedabad - Heritage City",
          places: [
            {
              name: "Sabarmati Ashram",
              image: "placeholder.svg",
              type: "historical",
              description: "Former residence of Mahatma Gandhi and a symbol of India's independence movement.",
              duration: "2-3 hours"
            },
            {
              name: "Adalaj Stepwell",
              image: "placeholder.svg",
              type: "historical",
              description: "Five-story stepwell with intricate carvings and Islamic-Hindu architectural fusion.",
              duration: "1-2 hours"
            },
            {
              name: "Hutheesing Jain Temple",
              image: "placeholder.svg",
              type: "religious",
              description: "Beautiful Jain temple known for its detailed marble carvings and architecture.",
              duration: "1-2 hours"
            }
          ],
          hotels: [
            {
              name: "Hyatt Regency Ahmedabad",
              image: "placeholder.svg",
              price: "12000",
              rating: 4.6,
              type: "luxury",
              description: "Modern luxury hotel in the heart of Ahmedabad with world-class amenities.",
              amenities: ["Swimming Pool", "Spa", "Multiple Restaurants", "Fitness Center", "Business Center"]
            },
            {
              name: "The House of MG",
              image: "placeholder.svg",
              price: "8000",
              rating: 4.4,
              type: "heritage",
              description: "Boutique heritage hotel in a restored mansion with traditional Gujarati charm.",
              amenities: ["Restaurant", "Heritage Architecture", "Room Service", "Garden", "Cultural Activities"]
            }
          ],
          description: "Explore the city's rich history and architectural marvels.",
          activities: ["Ashram visit", "Heritage walk", "Traditional Gujarati dinner"]
        },
        {
          day: 2,
          title: "Ahmedabad & Modhera",
          places: [
            {
              name: "Modhera Sun Temple",
              image: "placeholder.svg",
              type: "religious",
              description: "Ancient sun temple with intricate carvings and spectacular architecture.",
              duration: "2-3 hours"
            },
            {
              name: "Rani ki Vav (Patan)",
              image: "placeholder.svg",
              type: "historical",
              description: "UNESCO World Heritage stepwell site known for its sculptural beauty.",
              duration: "2-3 hours"
            }
          ],
          hotels: [
            {
              name: "Hyatt Regency Ahmedabad",
              image: "placeholder.svg",
              price: "12000",
              rating: 4.6,
              type: "luxury",
              description: "Modern luxury hotel in the heart of Ahmedabad with world-class amenities.",
              amenities: ["Swimming Pool", "Spa", "Multiple Restaurants", "Fitness Center", "Business Center"]
            },
            {
              name: "The House of MG",
              image: "placeholder.svg",
              price: "8000",
              rating: 4.4,
              type: "heritage",
              description: "Boutique heritage hotel in a restored mansion with traditional Gujarati charm.",
              amenities: ["Restaurant", "Heritage Architecture", "Room Service", "Garden", "Cultural Activities"]
            }
          ],
          description: "Day trip to the magnificent Sun Temple and the UNESCO site of Rani ki Vav.",
          activities: ["Temple tour", "Stepwell exploration", "Photography"]
        },
        {
          day: 3,
          title: "Journey to Dwarka - The Kingdom of Lord Krishna",
          places: [
            {
              name: "Dwarkadhish Temple",
              image: "placeholder.svg",
              type: "religious",
              description: "Ancient temple dedicated to Lord Krishna, one of the Char Dham pilgrimage sites.",
              duration: "2-3 hours"
            },
            {
              name: "Rukmini Devi Temple",
              image: "placeholder.svg",
              type: "religious",
              description: "Historic temple dedicated to Rukmini, consort of Lord Krishna.",
              duration: "1-2 hours"
            }
          ],
          hotels: [
            {
              name: "The Dwarika",
              image: "placeholder.svg",
              price: "7000",
              rating: 4.2,
              type: "heritage",
              description: "Heritage hotel with traditional architecture and modern comforts.",
              amenities: ["Restaurant", "Room Service", "Temple Views", "Garden"]
            },
            {
              name: "Hotel Nandini",
              image: "placeholder.svg",
              price: "4000",
              rating: 3.8,
              type: "budget",
              description: "Comfortable budget hotel in convenient location near temples.",
              amenities: ["Restaurant", "Room Service", "Temple Views"]
            }
          ],
          description: "Travel to the spiritual city of Dwarka on the Arabian Sea coast.",
          activities: ["Spiritual visit", "Evening aarti ceremony", "Coastal walk"]
        },
        {
          day: 4,
          title: "Dwarka & Bet Dwarka",
          places: [
            {
              name: "Nageshwar Jyotirlinga Temple",
              image: "placeholder.svg",
              type: "religious",
              description: "One of the twelve Jyotirlinga shrines of Lord Shiva.",
              duration: "1-2 hours"
            },
            {
              name: "Bet Dwarka Island",
              image: "placeholder.svg",
              type: "religious",
              description: "Island believed to be Lord Krishna's residence, accessible by boat.",
              duration: "4-5 hours"
            }
          ],
          hotels: [
            {
              name: "The Dwarika",
              image: "placeholder.svg",
              price: "7000",
              rating: 4.2,
              type: "heritage",
              description: "Heritage hotel with traditional architecture and modern comforts.",
              amenities: ["Restaurant", "Room Service", "Temple Views", "Garden"]
            },
            {
              name: "Hotel Nandini",
              image: "placeholder.svg",
              price: "4000",
              rating: 3.8,
              type: "budget",
              description: "Comfortable budget hotel in convenient location near temples.",
              amenities: ["Restaurant", "Room Service", "Temple Views"]
            }
          ],
          description: "Explore the ancient pilgrimage sites and a sacred island.",
          activities: ["Temple visit", "Boat ride to island", "Dolphin spotting"]
        },
        {
          day: 5,
          title: "Journey to Somnath",
          places: [
            {
              name: "Somnath Temple",
              image: "placeholder.svg",
              type: "religious",
              description: "One of the twelve Jyotirlinga shrines, famous for its seaside location.",
              duration: "2-3 hours"
            },
            {
              name: "Triveni Sangam",
              image: "placeholder.svg",
              type: "religious",
              description: "Sacred confluence of three rivers, an important pilgrimage site.",
              duration: "1-2 hours"
            }
          ],
          hotels: [
            {
              name: "Lords Inn Somnath",
              image: "placeholder.svg",
              price: "5000",
              rating: 4.0,
              type: "budget",
              description: "Comfortable hotel with modern amenities near Somnath Temple.",
              amenities: ["Restaurant", "Room Service", "Temple Views", "WiFi"]
            },
            {
              name: "Sarovar Portico Somnath",
              image: "placeholder.svg",
              price: "6000",
              rating: 4.2,
              type: "boutique",
              description: "Contemporary hotel offering comfortable stays with good service.",
              amenities: ["Restaurant", "Room Service", "Business Center", "WiFi"]
            }
          ],
          description: "Travel to Somnath, home to one of the 12 Jyotirlinga shrines of Shiva.",
          activities: ["Temple aarti", "Beach relaxation", "Scenic walk"]
        },
        {
          day: 6,
          title: "Somnath & Gir National Park",
          places: [
            {
              name: "Gir National Park & Wildlife Sanctuary",
              image: "placeholder.svg",
              type: "natural",
              description: "Home to Asiatic lions, diverse wildlife and rich biodiversity.",
              duration: "4-5 hours"
            }
          ],
          hotels: [
            {
              name: "The Fern Gir Forest Resort",
              image: "placeholder.svg",
              price: "8000",
              rating: 4.3,
              type: "boutique",
              description: "Eco-friendly resort with modern amenities near Gir Forest.",
              amenities: ["Restaurant", "Swimming Pool", "Safari Booking", "Nature Walks"]
            },
            {
              name: "Gir Serai, a Taj Safari",
              image: "placeholder.svg",
              price: "15000",
              rating: 4.7,
              type: "luxury",
              description: "Luxury wilderness lodge offering exclusive safari experiences.",
              amenities: ["Restaurant", "Spa", "Safari Tours", "Swimming Pool", "Wildlife Activities"]
            }
          ],
          description: "Travel to Gir for a wildlife safari to see the Asiatic lions.",
          activities: ["Jungle safari", "Wildlife spotting", "Nature photography"]
        },
        {
          day: 7,
          title: "Departure from Diu or Rajkot",
          places: [
            {
              name: "Diu Airport",
              image: "placeholder.svg",
              type: "cultural",
              description: "Regional airport connecting Diu to major cities.",
              duration: "2-3 hours"
            },
            {
              name: "Rajkot Airport",
              image: "placeholder.svg",
              type: "cultural",
              description: "Major airport in Gujarat with good connectivity.",
              duration: "2-3 hours"
            }
          ],
          hotels: [
            {
              name: "The Fern Gir Forest Resort",
              image: "placeholder.svg",
              price: "8000",
              rating: 4.3,
              type: "boutique",
              description: "Eco-friendly resort with modern amenities near Gir Forest.",
              amenities: ["Restaurant", "Swimming Pool", "Safari Booking", "Nature Walks"]
            },
            {
              name: "Gir Serai, a Taj Safari",
              image: "placeholder.svg",
              price: "15000",
              rating: 4.7,
              type: "luxury",
              description: "Luxury wilderness lodge offering exclusive safari experiences.",
              amenities: ["Restaurant", "Spa", "Safari Tours", "Swimming Pool", "Wildlife Activities"]
            }
          ],
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
      budget: 25000,
      itinerary: [
        {
          day: 1,
          title: "Arrival in Amritsar - The Holy City",
          places: [
            {
              name: "Golden Temple",
              image: "placeholder.svg",
              type: "religious",
              description: "Most sacred Sikh shrine, known for its gold-plated architecture.",
              duration: "3-4 hours"
            },
            {
              name: "Jallianwala Bagh",
              image: "placeholder.svg",
              type: "historical",
              description: "Historic garden site of the 1919 massacre, now a memorial.",
              duration: "1-2 hours"
            }
          ],
          hotels: [
            {
              name: "Hyatt Regency Amritsar",
              image: "placeholder.svg",
              price: "12000",
              rating: 4.5,
              type: "luxury",
              description: "Luxury hotel with modern amenities near Golden Temple.",
              amenities: ["Restaurant", "Spa", "Swimming Pool", "Fitness Center", "Room Service"]
            },
            {
              name: "Radisson Blu Hotel Amritsar",
              image: "placeholder.svg",
              price: "10000",
              rating: 4.3,
              type: "luxury",
              description: "Contemporary hotel offering comfortable stays with excellent service.",
              amenities: ["Restaurant", "Spa", "Swimming Pool", "Business Center", "Room Service"]
            }
          ],
          description: "Start your spiritual journey in Amritsar, home to the revered Golden Temple.",
          activities: ["Langar service", "Temple visit", "History walk"]
        },
        {
          day: 2,
          title: "Amritsar & Wagah Border",
          places: [
            {
              name: "Wagah Border",
              image: "placeholder.svg",
              type: "cultural",
              description: "Famous border between India and Pakistan known for its flag-lowering ceremony.",
              duration: "2-3 hours"
            },
            {
              name: "Akal Takht",
              image: "placeholder.svg",
              type: "religious",
              description: "One of the five seats of power of the Sikh religion.",
              duration: "1-2 hours"
            }
          ],
          hotels: [
            {
              name: "Hyatt Regency Amritsar",
              image: "placeholder.svg",
              price: "12000",
              rating: 4.5,
              type: "luxury",
              description: "Luxury hotel with modern amenities near Golden Temple.",
              amenities: ["Restaurant", "Spa", "Swimming Pool", "Fitness Center", "Room Service"]
            },
            {
              name: "Radisson Blu Hotel Amritsar",
              image: "placeholder.svg",
              price: "10000",
              rating: 4.3,
              type: "luxury",
              description: "Contemporary hotel offering comfortable stays with excellent service.",
              amenities: ["Restaurant", "Spa", "Swimming Pool", "Business Center", "Room Service"]
            }
          ],
          description: "Witness the iconic border ceremony and explore more of Amritsar's spiritual sites.",
          activities: ["Beating Retreat ceremony", "Shopping for Punjabi juttis and suits"]
        },
        {
          day: 3,
          title: "Journey to Chandigarh - The City Beautiful",
          places: [
            {
              name: "Rock Garden",
              image: "placeholder.svg",
              type: "cultural",
              description: "Unique garden featuring sculptures made from recycled materials.",
              duration: "2-3 hours"
            },
            {
              name: "Sukhna Lake",
              image: "placeholder.svg",
              type: "natural",
              description: "Artificial lake offering boating and scenic views.",
              duration: "1-2 hours"
            },
            {
              name: "Rose Garden",
              image: "placeholder.svg",
              type: "natural",
              description: "Asia's largest rose garden with hundreds of rose species.",
              duration: "1-2 hours"
            }
          ],
          hotels: [
            {
              name: "Hyatt Regency Chandigarh",
              image: "placeholder.svg",
              price: "11000",
              rating: 4.5,
              type: "luxury",
              description: "Modern luxury hotel in the heart of Chandigarh.",
              amenities: ["Restaurant", "Spa", "Swimming Pool", "Fitness Center", "Business Center"]
            },
            {
              name: "Taj Chandigarh",
              image: "placeholder.svg",
              price: "10000",
              rating: 4.4,
              type: "luxury",
              description: "Elegant hotel offering luxury stays with excellent service.",
              amenities: ["Restaurant", "Spa", "Swimming Pool", "Business Center", "Room Service"]
            }
          ],
          description: "Travel to Chandigarh and explore the city's unique architecture and gardens.",
          activities: ["Boating", "Walking tour", "Le Corbusier Centre visit"]
        },
        {
          day: 4,
          title: "Chandigarh & Patiala",
          places: [
            {
              name: "Qila Mubarak",
              image: "placeholder.svg",
              type: "historical",
              description: "Historic fort complex showcasing Patiala's royal heritage.",
              duration: "2-3 hours"
            },
            {
              name: "Sheesh Mahal",
              image: "placeholder.svg",
              type: "historical",
              description: "Palace known for its mirror work and paintings.",
              duration: "1-2 hours"
            }
          ],
          hotels: [
            {
              name: "Hyatt Regency Chandigarh",
              image: "placeholder.svg",
              price: "11000",
              rating: 4.5,
              type: "luxury",
              description: "Modern luxury hotel in the heart of Chandigarh.",
              amenities: ["Restaurant", "Spa", "Swimming Pool", "Fitness Center", "Business Center"]
            },
            {
              name: "Taj Chandigarh",
              image: "placeholder.svg",
              price: "10000",
              rating: 4.4,
              type: "luxury",
              description: "Elegant hotel offering luxury stays with excellent service.",
              amenities: ["Restaurant", "Spa", "Swimming Pool", "Business Center", "Room Service"]
            }
          ],
          description: "A day trip to the royal city of Patiala, known for its palaces and whiskey.",
          activities: ["Palace visit", "History tour", "Local food tasting"]
        },
        {
          day: 5,
          title: "Departure from Chandigarh",
          places: [
            {
              name: "Chandigarh International Airport",
              image: "placeholder.svg",
              type: "cultural",
              description: "Modern airport serving the Chandigarh region.",
              duration: "2-3 hours"
            }
          ],
          hotels: [
            {
              name: "Hyatt Regency Chandigarh",
              image: "placeholder.svg",
              price: "11000",
              rating: 4.5,
              type: "luxury",
              description: "Modern luxury hotel in the heart of Chandigarh.",
              amenities: ["Restaurant", "Spa", "Swimming Pool", "Fitness Center", "Business Center"]
            },
            {
              name: "Taj Chandigarh",
              image: "placeholder.svg",
              price: "10000",
              rating: 4.4,
              type: "luxury",
              description: "Elegant hotel offering luxury stays with excellent service.",
              amenities: ["Restaurant", "Spa", "Swimming Pool", "Business Center", "Room Service"]
            }
          ],
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
      budget: 30000,
      itinerary: [
        {
          day: 1,
          title: "Arrival in Agra - City of Taj",
          places: [
            {
              name: "Taj Mahal",
              image: "placeholder.svg",
              type: "historical",
              description: "UNESCO World Heritage site and one of the world's most iconic monuments.",
              duration: "3-4 hours"
            },
            {
              name: "Agra Fort",
              image: "placeholder.svg",
              type: "historical",
              description: "UNESCO site showcasing Mughal architecture and history.",
              duration: "2-3 hours"
            },
            {
              name: "Itimad-ud-Daulah's Tomb",
              image: "placeholder.svg",
              type: "historical",
              description: "Known as Baby Taj, this tomb features intricate marble work.",
              duration: "1-2 hours"
            }
          ],
          hotels: [
            {
              name: "The Oberoi Amarvilas",
              image: "placeholder.svg",
              price: "35000",
              rating: 4.9,
              type: "luxury",
              description: "Luxury hotel with unparalleled views of the Taj Mahal.",
              amenities: ["Spa", "Swimming Pool", "Multiple Restaurants", "Taj Views", "Butler Service"]
            },
            {
              name: "ITC Mughal, A Luxury Collection Hotel",
              image: "placeholder.svg",
              price: "15000",
              rating: 4.6,
              type: "luxury",
              description: "Sprawling luxury resort inspired by Mughal architecture.",
              amenities: ["Spa", "Swimming Pool", "Multiple Restaurants", "Gardens", "Business Center"]
            }
          ],
          description: "Witness the timeless beauty of the Taj Mahal and other Mughal monuments.",
          activities: ["Sunrise visit to Taj Mahal", "Fort exploration", "Shopping for marble handicrafts"]
        },
        {
          day: 2,
          title: "Journey to Varanasi - The Spiritual Capital",
          places: [
            {
              name: "Dashashwamedh Ghat",
              image: "placeholder.svg",
              type: "religious",
              description: "Famous ghat known for its spectacular Ganga Aarti ceremony.",
              duration: "2-3 hours"
            },
            {
              name: "Kashi Vishwanath Temple",
              image: "placeholder.svg",
              type: "religious",
              description: "Sacred Hindu temple dedicated to Lord Shiva.",
              duration: "1-2 hours"
            }
          ],
          hotels: [
            {
              name: "Taj Ganges, Varanasi",
              image: "placeholder.svg",
              price: "12000",
              rating: 4.5,
              type: "luxury",
              description: "Contemporary luxury hotel with traditional hospitality.",
              amenities: ["Restaurant", "Swimming Pool", "Spa", "Fitness Center", "Business Center"]
            },
            {
              name: "BrijRama Palace",
              image: "placeholder.svg",
              price: "18000",
              rating: 4.7,
              type: "heritage",
              description: "Heritage hotel in a restored palace on the Ganges.",
              amenities: ["River Views", "Restaurant", "Cultural Programs", "Boat Rides", "Room Service"]
            }
          ],
          description: "Travel to the oldest living city and experience its vibrant spirituality.",
          activities: ["Ganga aarti ceremony", "Temple visit", "Evening boat ride"]
        },
        {
          day: 3,
          title: "Varanasi Ganges & Sarnath",
          places: [
            {
              name: "Assi Ghat",
              image: "placeholder.svg",
              type: "religious",
              description: "Southernmost ghat known for morning rituals and yoga.",
              duration: "2-3 hours"
            },
            {
              name: "Sarnath (Dhamek Stupa)",
              image: "placeholder.svg",
              type: "religious",
              description: "Historic Buddhist site where Buddha gave his first sermon.",
              duration: "3-4 hours"
            }
          ],
          hotels: [
            {
              name: "Taj Ganges, Varanasi",
              image: "placeholder.svg",
              price: "12000",
              rating: 4.5,
              type: "luxury",
              description: "Contemporary luxury hotel with traditional hospitality.",
              amenities: ["Restaurant", "Swimming Pool", "Spa", "Fitness Center", "Business Center"]
            },
            {
              name: "BrijRama Palace",
              image: "placeholder.svg",
              price: "18000",
              rating: 4.7,
              type: "heritage",
              description: "Heritage hotel in a restored palace on the Ganges.",
              amenities: ["River Views", "Restaurant", "Cultural Programs", "Boat Rides", "Room Service"]
            }
          ],
          description: "Explore the ghats and the sacred Buddhist site of Sarnath.",
          activities: ["Morning boat ride on Ganges", "Sarnath monastery tour", "Shopping for silk sarees"]
        },
        {
          day: 4,
          title: "Journey to Lucknow - The City of Nawabs",
          places: [
            {
              name: "Bara Imambara",
              image: "placeholder.svg",
              type: "historical",
              description: "Magnificent monument known for its unique architecture and labyrinth.",
              duration: "2-3 hours"
            },
            {
              name: "Chota Imambara",
              image: "placeholder.svg",
              type: "historical",
              description: "Beautiful monument known for its intricate designs and chandeliers.",
              duration: "1-2 hours"
            },
            {
              name: "Rumi Darwaza",
              image: "placeholder.svg",
              type: "historical",
              description: "Iconic gateway considered as a symbol of Lucknow.",
              duration: "30-45 minutes"
            }
          ],
          hotels: [
            {
              name: "Taj Mahal Lucknow",
              image: "placeholder.svg",
              price: "11000",
              rating: 4.6,
              type: "luxury",
              description: "Elegant hotel offering luxury stays in the heart of Lucknow.",
              amenities: ["Restaurant", "Spa", "Swimming Pool", "Fitness Center", "Business Center"]
            },
            {
              name: "Hyatt Regency Lucknow",
              image: "placeholder.svg",
              price: "9000",
              rating: 4.4,
              type: "luxury",
              description: "Modern hotel with excellent amenities and service.",
              amenities: ["Multiple Restaurants", "Spa", "Swimming Pool", "Fitness Center", "Business Center"]
            }
          ],
          description: "Travel to Lucknow, known for its refined culture, food, and architecture.",
          activities: ["Historical site tour", "Tasting Awadhi cuisine", "Shopping for Chikankari work"]
        },
        {
          day: 5,
          title: "Lucknow Heritage & Departure",
          places: [
            {
              name: "Residency",
              image: "placeholder.svg",
              type: "historical",
              description: "Historic ruins from the British colonial period and 1857 siege.",
              duration: "2-3 hours"
            },
            {
              name: "Lucknow Zoo",
              image: "placeholder.svg",
              type: "natural",
              description: "Also known as Prince of Wales Zoological Gardens, home to diverse wildlife.",
              duration: "2-3 hours"
            }
          ],
          hotels: [
            {
              name: "Taj Mahal Lucknow",
              image: "placeholder.svg",
              price: "11000",
              rating: 4.6,
              type: "luxury",
              description: "Elegant hotel offering luxury stays in the heart of Lucknow.",
              amenities: ["Restaurant", "Spa", "Swimming Pool", "Fitness Center", "Business Center"]
            },
            {
              name: "Hyatt Regency Lucknow",
              image: "placeholder.svg",
              price: "9000",
              rating: 4.4,
              type: "luxury",
              description: "Modern hotel with excellent amenities and service.",
              amenities: ["Multiple Restaurants", "Spa", "Swimming Pool", "Fitness Center", "Business Center"]
            }
          ],
          description: "Explore more of the city's heritage and then depart.",
          activities: ["History walk", "Zoo visit", "Shopping for local sweets"]
        },
        {
          day: 6,
          title: "Departure from Lucknow",
          places: [
            {
              name: "Chaudhary Charan Singh International Airport, Lucknow",
              image: "placeholder.svg",
              type: "cultural",
              description: "Modern international airport serving Lucknow and surrounding regions.",
              duration: "2-3 hours"
            }
          ],
          hotels: [
            {
              name: "Taj Mahal Lucknow",
              image: "placeholder.svg",
              price: "11000",
              rating: 4.6,
              type: "luxury",
              description: "Elegant hotel offering luxury stays in the heart of Lucknow.",
              amenities: ["Restaurant", "Spa", "Swimming Pool", "Fitness Center", "Business Center"]
            },
            {
              name: "Hyatt Regency Lucknow",
              image: "placeholder.svg",
              price: "9000",
              rating: 4.4,
              type: "luxury",
              description: "Modern hotel with excellent amenities and service.",
              amenities: ["Multiple Restaurants", "Spa", "Swimming Pool", "Fitness Center", "Business Center"]
            }
          ],
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
      budget: 20000,
      itinerary: [
        {
          day: 1,
          title: "Arrival in Bhopal - City of Lakes",
          places: [
            {
              name: "Bhojtal Lake",
              image: "placeholder.svg",
              type: "natural",
              description: "Largest artificial lake in Asia, perfect for boating and sunsets.",
              duration: "2-3 hours"
            },
            {
              name: "Upper Lake",
              image: "placeholder.svg",
              type: "natural",
              description: "One of the oldest man-made lakes in India with scenic beauty.",
              duration: "1-2 hours"
            },
            {
              name: "Tribal Museum",
              image: "placeholder.svg",
              type: "cultural",
              description: "Museum showcasing rich tribal heritage of Madhya Pradesh.",
              duration: "2-3 hours"
            }
          ],
          hotels: [
            {
              name: "Jehan Numa Palace Hotel",
              image: "placeholder.svg",
              price: "12000",
              rating: 4.6,
              type: "heritage",
              description: "Heritage palace hotel with colonial charm and modern luxury.",
              amenities: ["Multiple Restaurants", "Swimming Pool", "Spa", "Fitness Center", "Garden"]
            },
            {
              name: "Noor Us Sabah Palace",
              image: "placeholder.svg",
              price: "10000",
              rating: 4.4,
              type: "heritage",
              description: "Historic palace converted into a luxury hotel with panoramic views.",
              amenities: ["Restaurant", "Swimming Pool", "Garden", "Lake Views", "Room Service"]
            }
          ],
          description: "Begin your journey in the beautiful 'City of Lakes' and explore its serene landscapes.",
          activities: ["Boat ride", "Museum visit", "Local market tour"]
        },
        {
          day: 2,
          title: "Bhopal & Sanchi Stupa",
          places: [
            {
              name: "Sanchi Stupa",
              image: "placeholder.svg",
              type: "religious",
              description: "UNESCO World Heritage site and ancient Buddhist monument.",
              duration: "3-4 hours"
            },
            {
              name: "Bhimbetka Rock Shelters",
              image: "placeholder.svg",
              type: "historical",
              description: "UNESCO site featuring prehistoric cave paintings and rock shelters.",
              duration: "2-3 hours"
            }
          ],
          hotels: [
            {
              name: "Jehan Numa Palace Hotel",
              image: "placeholder.svg",
              price: "12000",
              rating: 4.6,
              type: "heritage",
              description: "Heritage palace hotel with colonial charm and modern luxury.",
              amenities: ["Multiple Restaurants", "Swimming Pool", "Spa", "Fitness Center", "Garden"]
            },
            {
              name: "Noor Us Sabah Palace",
              image: "placeholder.svg",
              price: "10000",
              rating: 4.4,
              type: "heritage",
              description: "Historic palace converted into a luxury hotel with panoramic views.",
              amenities: ["Restaurant", "Swimming Pool", "Garden", "Lake Views", "Room Service"]
            }
          ],
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