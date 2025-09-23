import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, Star, Calendar } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const LandingPage = () => {
  const features = [
    {
      icon: Calendar,
      title: 'AI-Powered Itineraries',
      description: 'Get personalized travel plans crafted by AI based on your preferences and budget.'
    },
    {
      icon: Users,
      title: 'Local Experiences',
      description: 'Connect with authentic local businesses, artisans, and cultural experiences.'
    },
    {
      icon: MapPin,
      title: 'Curated Destinations',
      description: 'Discover hidden gems and popular destinations across incredible India.'
    },
    {
      icon: Star,
      title: 'Trusted Partners',
      description: 'Book with confidence through our network of verified hotels and services.'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      text: 'Swadeshi Travel helped me discover the most amazing local experiences in Rajasthan!',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      location: 'Bangalore',
      text: 'The AI itinerary was spot-on for our Kerala trip. Highly recommend!',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      location: 'London',
      text: 'As a foreign tourist, this platform made exploring India so much easier and authentic.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(taj2.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Incredible India
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience authentic Indian culture with AI-powered itineraries and local connections
          </p>
          <Link to="/itinerary">
            <Button size="lg" className="text-lg px-8 py-4 shadow-floating hover:shadow-card">
              Plan Your Trip
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Swadeshi Travel?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We blend technology with authentic local experiences to create unforgettable journeys
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Travelers Say</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied travelers who discovered India with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow bg-gradient-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore India?</h2>
          <p className="text-xl mb-8 text-white/90">
            Start your incredible journey today with our AI-powered travel planner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/itinerary">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 shadow-soft">
                Create Itinerary
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/businesses">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary shadow-soft">
                Explore Businesses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;