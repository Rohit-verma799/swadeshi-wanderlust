import React from 'react';
// We are using standard <a> tags instead of Link to avoid router context errors.
// import { Link } from 'react-router-dom'; 
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Company Info & Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ST</span>
              </div>
              <span className="text-2xl font-bold text-white">Swadeshi Travel</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover the incredible beauty and rich culture of India with our personalized, AI-powered travel experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {/* Changed Link to a */}
              <li><a href="/" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="/itinerary" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">AI Itinerary</a></li>
              <li><a href="/businesses" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">Local Businesses</a></li>
              <li><a href="/booking" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">Book a Ticket</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:info@swadeshitravel.com" className="text-gray-400 hover:text-orange-500 transition-colors">info@swadeshitravel.com</a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:+919001940408" className="text-gray-400 hover:text-orange-500 transition-colors">+91 90019 40408</a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-gray-400">Pilani, Rajasthan, India</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Join Our Newsletter</h3>
            <p className="text-sm text-gray-400">Get the latest travel tips and deals straight to your inbox.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-slate-800 text-white placeholder-gray-500 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 border border-slate-700"
              />
              <button type="submit" className="bg-orange-500 text-white p-3 rounded-r-md hover:bg-orange-600 transition-colors">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Swadeshi Travel. Made with ❤️ by Team ANR.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {/* Changed Link to a */}
            <a href="/privacy" className="text-xs text-gray-500 hover:text-orange-500">Privacy Policy</a>
            <a href="/terms" className="text-xs text-gray-500 hover:text-orange-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

