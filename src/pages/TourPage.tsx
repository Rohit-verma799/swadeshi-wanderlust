import React, { useState } from 'react';
import { ArrowLeft, Star, Clock, Users, Mountain, Check, X, Calendar } from 'lucide-react';

// --- MOCK DATA FOR TOUR PACKAGES ---
const tourPackages = [
  {
    id: 1,
    title: 'Golden Triangle Odyssey',
    destination: 'Delhi, Agra, Jaipur',
    duration: 5,
    price: 28000,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop',
    description: 'Experience the cultural heart of India by visiting the iconic cities of Delhi, Agra, and Jaipur.',
    itinerary: [
      { day: 1, title: 'Arrival in Delhi', details: 'Arrive at Delhi airport and transfer to your hotel. Later, visit India Gate and explore the local markets.' },
      { day: 2, title: 'Delhi Sightseeing & Drive to Agra', details: 'Visit Humayun\'s Tomb and Qutub Minar. In the afternoon, drive to Agra and check into your hotel.' },
      { day: 3, title: 'Taj Mahal at Sunrise & Jaipur', details: 'Witness the breathtaking beauty of the Taj Mahal at sunrise. Later, drive to Jaipur, the Pink City.' },
      { day: 4, title: 'Jaipur - The Pink City', details: 'Explore Amber Fort, City Palace, Hawa Mahal, and Jantar Mantar.' },
      { day: 5, title: 'Departure from Jaipur', details: 'After breakfast, you will be transferred to Jaipur airport for your onward journey.' },
    ],
    inclusions: ['Accommodation in 4-star hotels', 'Daily breakfast', 'Private AC car for all transfers', 'All sightseeing tours'],
    exclusions: ['Flights', 'Lunch and Dinner', 'Entrance fees to monuments'],
  },
  {
    id: 2,
    title: 'Kerala Backwaters Bliss',
    destination: 'Kochi, Munnar, Alleppey',
    duration: 7,
    price: 35000,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1523483842385-e23a4b6b66e1?q=80&w=1974&auto=format&fit=crop',
    description: 'Relax and rejuvenate in God\'s Own Country with serene backwaters, lush tea gardens, and vibrant culture.',
    itinerary: [
        { day: 1, title: 'Arrival in Kochi', details: 'Arrive in Kochi, check into your hotel. Explore Fort Kochi and the Chinese Fishing Nets in the evening.' },
        { day: 2, title: 'Kochi to Munnar', details: 'Drive to the beautiful hill station of Munnar, famous for its tea plantations. Check into your resort.' },
        { day: 3, title: 'Munnar Sightseeing', details: 'Visit Mattupetty Dam, Echo Point, and the Tea Museum. Enjoy the scenic beauty of the rolling hills.' },
        { day: 4, title: 'Munnar to Thekkady', details: 'Drive to Thekkady (Periyar) and enjoy a boat ride on Periyar Lake to spot wildlife.' },
        { day: 5, title: 'Thekkady to Alleppey (Houseboat)', details: 'Drive to Alleppey to board your private houseboat. Cruise through the serene backwaters.' },
        { day: 6, title: 'Alleppey to Kochi', details: 'After breakfast on the houseboat, disembark and drive back to Kochi for some last-minute shopping.' },
        { day: 7, title: 'Departure', details: 'Transfer to Kochi airport for your flight back home.' },
    ],
    inclusions: ['1 night in a deluxe houseboat with all meals', 'Accommodation in 3/4-star hotels', 'Daily breakfast', 'All transfers by AC car'],
    exclusions: ['Airfare', 'Personal expenses', 'Activity charges'],
  },
  {
    id: 3,
    title: 'Spiritual Ganges Tour',
    destination: 'Varanasi & Rishikesh',
    duration: 6,
    price: 32000,
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1567425475288-a1b40285a8a1?q=80&w=2070&auto=format&fit=crop',
    description: 'Embark on a spiritual journey to the holy cities of Varanasi and Rishikesh, situated on the banks of the river Ganges.',
     itinerary: [
        { day: 1, title: 'Arrival in Varanasi', details: 'Arrive at Varanasi airport, transfer to hotel. In the evening, witness the grand Ganga Aarti ceremony.' },
        { day: 2, title: 'Varanasi Exploration', details: 'Early morning boat ride on the Ganges. Visit Sarnath, where Buddha gave his first sermon.' },
        { day: 3, title: 'Fly to Dehradun, Drive to Rishikesh', details: 'Fly from Varanasi to Dehradun and then drive to Rishikesh. Check into your ashram or hotel.' },
        { day: 4, title: 'Rishikesh - Yoga Capital', details: 'Attend a morning yoga session. Visit Laxman Jhula, Ram Jhula, and various ashrams.' },
        { day: 5, title: 'Adventure in Rishikesh', details: 'Optional activities like river rafting, bungee jumping, or a trek to Neer Garh waterfall.' },
        { day: 6, title: 'Departure', details: 'After breakfast, drive to Dehradun airport for your departure.' },
    ],
    inclusions: ['Accommodation', 'Yoga session in Rishikesh', 'Boat ride in Varanasi', 'All transfers'],
    exclusions: ['Varanasi-Dehradun flight', 'Meals', 'Adventure activity costs'],
  },
];

type Package = typeof tourPackages[0];

const TourPackagesPage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const PackageCard: React.FC<{ pkg: Package }> = ({ pkg }) => (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group transform hover:-translate-y-2 transition-transform duration-300"
      onClick={() => setSelectedPackage(pkg)}
    >
      <div className="relative">
        <img src={pkg.imageUrl} alt={pkg.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-0 right-0 bg-orange-500 text-white font-bold px-3 py-1 m-4 rounded-full text-sm">
          {pkg.duration} Days
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{pkg.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{pkg.destination}</p>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-orange-600">
            ₹{pkg.price.toLocaleString('en-IN')}
            <span className="text-sm font-normal text-gray-500"> / person</span>
          </p>
          <div className="flex items-center space-x-1 text-yellow-500">
            <Star size={18} fill="currentColor" />
            <span className="font-bold text-slate-700">{pkg.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
  
  const PackageDetailView: React.FC<{ pkg: Package }> = ({ pkg }) => (
    <div className="animate-fade-in max-w-5xl mx-auto">
      <button 
        onClick={() => setSelectedPackage(null)} 
        className="flex items-center text-sm font-semibold text-gray-600 hover:text-orange-600 mb-8"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to all packages
      </button>

      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <img src={pkg.imageUrl} alt={pkg.title} className="w-full h-64 lg:h-full object-cover"/>
            <div className="p-8 flex flex-col justify-between">
                <div>
                    <h2 className="text-4xl font-extrabold text-slate-800 mb-2">{pkg.title}</h2>
                    <p className="text-gray-500 mb-6">{pkg.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="flex items-center space-x-2"><Clock size={18} className="text-orange-500"/><span>{pkg.duration} Days / {pkg.duration - 1} Nights</span></div>
                        <div className="flex items-center space-x-2"><Users size={18} className="text-orange-500"/><span>Group tours available</span></div>
                        <div className="flex items-center space-x-2"><Mountain size={18} className="text-orange-500"/><span>{pkg.destination}</span></div>
                        <div className="flex items-center space-x-2"><Star size={18} className="text-orange-500"/><span>{pkg.rating} / 5.0 Rating</span></div>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-gray-500">Starting from</p>
                    <p className="text-5xl font-bold text-orange-600 mb-4">₹{pkg.price.toLocaleString('en-IN')}</p>
                    <button className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-transform hover:scale-105">
                        Confirm & Book Now
                    </button>
                </div>
            </div>
        </div>
        
        <div className="p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2">Day-by-Day Itinerary</h3>
            <div className="space-y-6">
                {pkg.itinerary.map(day => (
                    <div key={day.day} className="flex items-start space-x-4">
                        <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center">
                           {day.day}
                        </div>
                        <div>
                           <h4 className="font-bold text-lg text-slate-700">{day.title}</h4>
                           <p className="text-gray-600">{day.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        <div className="p-8 bg-slate-50 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-bold text-green-700 mb-4">Inclusions</h3>
                <ul className="space-y-2 text-gray-600">
                    {pkg.inclusions.map(item => <li key={item} className="flex items-start"><Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0"/>{item}</li>)}
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold text-red-700 mb-4">Exclusions</h3>
                <ul className="space-y-2 text-gray-600">
                    {pkg.exclusions.map(item => <li key={item} className="flex items-start"><X size={18} className="text-red-500 mr-2 mt-1 flex-shrink-0"/>{item}</li>)}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-100 min-h-screen font-sans p-8 sm:p-12">
      {selectedPackage ? (
        <PackageDetailView pkg={selectedPackage} />
      ) : (
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">Explore Our Tour Packages</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Curated experiences by local experts to help you discover the best of India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TourPackagesPage;
