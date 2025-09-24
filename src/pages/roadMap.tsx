import React from 'react';
// Import the icons you need from Lucide React
import {
  Users,
  Store,
  BrainCircuit,
  View,
  MessageSquare,
  Globe,
} from 'lucide-react';

// Structure for each roadmap item
interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>; // Standard Lucide icon type
}

// Roadmap data with English content and imported icons
// updated_roadmap_data.tsx

const roadmapData: RoadmapItem[] = [
  {
    phase: 'Q4 2025 - Foundation',
    title: 'User Profiles & Trip Saving',
    description: 'Launch a secure user authentication system and a "My Trips" dashboard for users to save and manage their itineraries.',
    Icon: Users,
  },
  {
    phase: 'Q1 2026 - Platform Expansion',
    title: 'B2B Portal for Local Agents',
    description: 'A dedicated platform for verified local travel agents and guides to list their unique tour packages, increasing our offerings.',
    Icon: Store,
  },
  {
    phase: 'Q2 2026 - Intelligence',
    title: 'AI-Powered Hyper-Personalization',
    description: 'Implement an ML model to provide highly personalized travel recommendations based on user behavior and preferences.',
    Icon: BrainCircuit,
  },
  {
    phase: 'Q3 2026 - Engagement',
    title: 'Community & Reviews Platform',
    description: 'Build an in-app community for travelers to share reviews, photos, and tips, creating a trustworthy ecosystem.',
    Icon: MessageSquare, // A new icon
  },
  {
    phase: 'Q4 2026 - Immersive Tech',
    title: 'AR Destination Previews',
    description: 'Offer an Augmented Reality feature in our app for users to get an immersive preview of destinations and hotels before booking.',
    Icon: View,
  },
  {
    phase: '2027 & Beyond - Impact & Scale',
    title: 'Sustainable Tourism & Vernacular Support',
    description: 'Partner with eco-friendly stays and promote sustainable travel options, while expanding language support to include more Indian languages.',
    Icon: Globe,
  }
];

const FutureRoadmap: React.FC = () => {
  return (
    <section className="bg-slate-50 font-sans py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            Future Roadmap
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Our vision for building the future of authentic travel with Swadeshi Travel.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 w-1 h-full bg-orange-200"></div>

          {roadmapData.map((item, index) => (
            <div 
              key={index} 
              className={`group relative mb-12 md:mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Left/Right empty placeholder for spacing */}
              <div className="hidden md:block w-5/12"></div>
              
              {/* Timeline Icon */}
              <div className="absolute z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full border-4 border-orange-200 left-6 md:left-1/2 transform -translate-x-1/2 group-hover:border-orange-500 transition-colors duration-300">
                <item.Icon className="w-6 h-6 text-orange-500" />
              </div>
              
              {/* Content Card */}
              <div className="bg-white rounded-lg shadow-lg w-full md:w-5/12 ml-16 md:ml-0 p-6 border border-gray-200/80 group-hover:border-orange-200 transition-colors duration-300">
                <p className="text-sm font-semibold text-orange-500 tracking-wider">{item.phase}</p>
                <h3 className="text-xl font-bold text-gray-800 mt-1">{item.title}</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureRoadmap;