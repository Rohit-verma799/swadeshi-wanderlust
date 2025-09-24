// src/app/BusinessPage.tsx
'use client';

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

  const categories = ['all', ...Array.from(new Set(businesses.map(b => b.category)))];
  const locations = ['all', ...Array.from(new Set(businesses.map(b => b.location)))];

  const filteredBusinesses = businesses.filter((business: Business) => {
    const matchesSearch =
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Local Businesses & Artisans</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and support authentic local experiences, from traditional homestays to unique artisan crafts.
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search by name, location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 shadow-sm"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">Filters:</span>
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 shadow-sm">
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
              <SelectTrigger className="w-48 shadow-sm">
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

          {(selectedCategory !== 'all' || selectedLocation !== 'all' || searchTerm) && (
            <div className="flex flex-wrap gap-2 justify-center">
              {searchTerm && (
                <Badge variant="secondary" className="bg-gray-200">
                  Search: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm('')}
                    className="ml-2 hover:text-red-500"
                  >
                    ✕
                  </button>
                </Badge>
              )}
              {selectedCategory !== 'all' && (
                <Badge variant="secondary" className="bg-gray-200">
                  {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="ml-2 hover:text-red-500"
                  >
                    ✕
                  </button>
                </Badge>
              )}
              {selectedLocation !== 'all' && (
                <Badge variant="secondary" className="bg-gray-200">
                  {selectedLocation}
                  <button
                    onClick={() => setSelectedLocation('all')}
                    className="ml-2 hover:text-red-500"
                  >
                    ✕
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
                className="text-xs text-blue-500 hover:bg-blue-50"
              >
                Clear All
              </Button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8 text-gray-500">
          <p>
            Showing {filteredBusinesses.length} of {businesses.length} businesses
          </p>
        </div>

        {/* Business Grid */}
        {filteredBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No businesses found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLocation('all');
              }}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 py-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Want to List Your Business?</h2>
          <p className="text-lg mb-6 text-white/90">
            Join our platform and connect with travelers looking for authentic experiences.
          </p>
          <Button variant="secondary" size="lg" className="shadow-lg">
            Partner With Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;