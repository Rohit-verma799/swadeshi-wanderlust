import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { Menu, X } from 'lucide-react';
import axios from 'axios';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    const saveUserToBackend = async () => {
      if (isLoaded && isSignedIn && user) {
        try {
          const userEmail = user.primaryEmailAddress?.emailAddress;
          const clerkId = user.id;

          if (userEmail && clerkId) {
            const response = await axios.post('http://localhost:4000/api/save-clerk-user', {
              email: userEmail,
              clerkId: clerkId,
            });
            console.log('User data saved to backend:', response.data);
          }
        } catch (error) {
          console.error('Failed to save user data to backend:', error);
        }
      }
    };

    saveUserToBackend();
  }, [isLoaded, isSignedIn, user]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Itinerary', path: '/itinerary' },
    { name: 'Businesses', path: '/businesses' },
    { name: 'Tour Packages', path: '/TourPage' },
    { name: 'Bookings', path: '/booking' },
    { name: 'Ticket', path: '/ticket' },
    { name: 'Stay', path: '/user-stay' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ST</span>
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Swadeshi Travel
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a href="/roadmap">
              <Button variant="default" size="sm" className="shadow-soft">
                Future RoadMap
              </Button>
            </a>

            <div className="flex items-center space-x-3">
              <SignedOut>
                <SignInButton mode="redirect">
                  <Button variant="ghost" size="sm">Login</Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary px-2 py-2 rounded-md ${
                    isActive(item.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a href="roadmap">
                <Button variant="default" size="sm" className="mt-2 shadow-soft w-full">
                  Future RoadMap
                </Button>
              </a>
              <div className="mt-3 flex items-center justify-between">
                <SignedOut>
                  <SignInButton mode="redirect">
                    <Button variant="default" size="sm" className="w-full">Login</Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;