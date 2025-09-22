import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ST</span>
              </div>
              <span className="text-xl font-bold">Swadeshi Travel</span>
            </div>
            <p className="text-secondary-foreground/80 text-sm">
              Discover the incredible beauty and rich culture of India with our personalized travel experiences.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/itinerary" className="block text-sm hover:text-primary transition-colors">
                AI Itinerary
              </Link>
              <Link to="/businesses" className="block text-sm hover:text-primary transition-colors">
                Local Businesses
              </Link>
              <Link to="/booking" className="block text-sm hover:text-primary transition-colors">
                Book Now
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <p className="text-sm hover:text-primary transition-colors cursor-pointer">
                Custom Itineraries
              </p>
              <p className="text-sm hover:text-primary transition-colors cursor-pointer">
                Hotel Bookings
              </p>
              <p className="text-sm hover:text-primary transition-colors cursor-pointer">
                Local Experiences
              </p>
              <p className="text-sm hover:text-primary transition-colors cursor-pointer">
                Cultural Tours
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@swadeshitravel.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/80">
            © 2024 Swadeshi Travel. All rights reserved. Made with ❤️ for incredible India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;