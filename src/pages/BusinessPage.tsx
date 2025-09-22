import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import BusinessCard from '@/components/BusinessCard';
import { businesses, Business } from '@/data/businesses';
import { Search, Filter } from 'lucide-react';

const BusinessPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const categories = ['all', 'hotel', 'homestay', 'restaurant', 'artisan'];
  const locations = ['all', ...Array.from(new Set(businesses.map(b => b.location)))];

  const filteredBusinesses = businesses.filter((business: Business) => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || business.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || business.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const getCategoryCount = (category: string) => {
    if (category === 'all') return businesses.length;
    return businesses.filter(b => b.category === category).length;
  };

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Local Businesses & Artisans</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover authentic local experiences, stay at traditional homes, and support local artisans
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search businesses, locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 shadow-soft"
            />
          </div>

          {/* Category and Location Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium">Filters:</span>
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 shadow-soft">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' 
                      ? `All Categories (${getCategoryCount(category)})` 
                      : `${category.charAt(0).toUpperCase() + category.slice(1)} (${getCategoryCount(category)})`
                    }
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-48 shadow-soft">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          {(selectedCategory !== 'all' || selectedLocation !== 'all' || searchTerm) && (
            <div className="flex flex-wrap gap-2 justify-center">
              {searchTerm && (
                <Badge variant="outline" className="bg-primary/5">
                  Search: "{searchTerm}"
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="ml-2 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {selectedCategory !== 'all' && (
                <Badge variant="outline" className="bg-accent/5">
                  {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                  <button 
                    onClick={() => setSelectedCategory('all')}
                    className="ml-2 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {selectedLocation !== 'all' && (
                <Badge variant="outline" className="bg-secondary/5">
                  {selectedLocation}
                  <button 
                    onClick={() => setSelectedLocation('all')}
                    className="ml-2 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedLocation('all');
                }}
                className="text-xs"
              >
                Clear All
              </Button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Showing {filteredBusinesses.length} of {businesses.length} businesses
          </p>
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>

        {/* No Results */}
        {filteredBusinesses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No businesses found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLocation('all');
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 py-12 bg-gradient-hero rounded-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Want to List Your Business?</h2>
          <p className="text-xl mb-6 text-white/90">
            Join our platform and connect with travelers looking for authentic experiences
          </p>
          <Button variant="secondary" size="lg" className="shadow-soft">
            Partner With Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;