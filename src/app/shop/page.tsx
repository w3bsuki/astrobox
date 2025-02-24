'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Package, Search, ArrowUpDown, Star } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

// Sample product data - replace with actual data from your backend
const products = [
  // Mystery Boxes
  {
    id: 'premium-tech-box',
    name: 'Premium Tech Box',
    description: 'High-end electronics and gadgets mystery box with guaranteed value',
    price: 299,
    category: 'Mystery Boxes',
    rating: 4.9,
    image: '/products/tech-box.jpg',
    inStock: true,
  },
  {
    id: 'collectors-box',
    name: "Collector's Edition Box",
    description: 'Rare collectibles and limited editions mystery box',
    price: 499,
    category: 'Mystery Boxes',
    rating: 4.8,
    image: '/products/collectors-box.jpg',
    inStock: true,
  },
  {
    id: 'gaming-box',
    name: 'Gaming Essentials Box',
    description: 'Premium gaming gear and accessories mystery box',
    price: 149,
    category: 'Mystery Boxes',
    rating: 4.7,
    image: '/products/gaming-box.jpg',
    inStock: true,
  },

  // Astrology Reports
  {
    id: 'birth-chart-premium',
    name: 'Premium Birth Chart Analysis',
    description: 'Comprehensive birth chart reading with detailed planetary aspects',
    price: 49.99,
    category: 'Personal Horoscopes',
    rating: 4.9,
    image: '/products/birth-chart.jpg',
    inStock: true,
    digital: true,
  },
  {
    id: 'yearly-forecast',
    name: 'Yearly Astrological Forecast',
    description: 'Detailed 12-month forecast with transit analysis',
    price: 79.99,
    category: 'Personal Horoscopes',
    rating: 4.8,
    image: '/products/forecast.jpg',
    inStock: true,
    digital: true,
  },
  {
    id: 'career-horoscope',
    name: 'Career Path Analysis',
    description: 'Career-focused astrological reading and guidance',
    price: 39.99,
    category: 'Personal Horoscopes',
    rating: 4.7,
    image: '/products/career.jpg',
    inStock: true,
    digital: true,
  },

  // Synastry Reports
  {
    id: 'relationship-synastry',
    name: 'Complete Relationship Synastry',
    description: 'In-depth compatibility analysis for two people',
    price: 59.99,
    category: 'Synastry',
    rating: 4.9,
    image: '/products/synastry.jpg',
    inStock: true,
    digital: true,
  },
  {
    id: 'composite-chart',
    name: 'Composite Chart Reading',
    description: 'Analysis of the combined energies in a relationship',
    price: 44.99,
    category: 'Synastry',
    rating: 4.8,
    image: '/products/composite.jpg',
    inStock: true,
    digital: true,
  },

  // Karmic Reports
  {
    id: 'karmic-calendar-yearly',
    name: 'Yearly Karmic Calendar',
    description: 'Personal karmic calendar with daily energy readings',
    price: 89.99,
    category: 'Karmic Calendars',
    rating: 4.9,
    image: '/products/karmic-calendar.jpg',
    inStock: true,
    digital: true,
  },
  {
    id: 'karmic-path',
    name: 'Karmic Path Analysis',
    description: "Discover your soul's journey and karmic lessons",
    price: 69.99,
    category: 'Karmic Calendars',
    rating: 4.8,
    image: '/products/karmic-path.jpg',
    inStock: true,
    digital: true,
  },
  {
    id: 'lunar-calendar',
    name: 'Personal Lunar Calendar',
    description: 'Monthly moon phase calendar with personalized insights',
    price: 29.99,
    category: 'Karmic Calendars',
    rating: 4.7,
    image: '/products/lunar-calendar.jpg',
    inStock: true,
    digital: true,
  },
];

const categories = ['All', 'Mystery Boxes', 'Personal Horoscopes', 'Synastry', 'Karmic Calendars'];
const sortOptions = [
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest First' },
];

export default function ShopPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle mounting state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle filtering and sorting
  useEffect(() => {
    const filtered = products
      .filter(product => 
        (selectedCategory === 'All' || product.category === selectedCategory) &&
        (searchQuery === '' || 
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
      .sort((a, b) => {
        switch (sortBy) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'rating':
            return b.rating - a.rating;
          default:
            return 0;
        }
      });

    setFilteredProducts(filtered);
  }, [selectedCategory, sortBy, searchQuery]);

  if (!mounted) {
    return (
      <div className="container py-10">
        <div className="text-center">
          <Package className="mx-auto h-12 w-12 animate-spin text-muted-foreground" />
          <h2 className="mt-4 text-lg font-medium">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Astrobox Shop</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover mystery boxes and premium astrological services tailored to your cosmic journey.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
            prefix={<Search className="h-4 w-4 text-muted-foreground" />}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Products Grid */}
      <AnimatePresence mode="wait">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mounted && filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden">
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  <div className="flex items-center gap-1 bg-black/60 text-white text-sm px-2 py-1 rounded-full">
                    <Star className="h-3 w-3 fill-current" />
                    {product.rating.toFixed(1)}
                  </div>
                  {product.digital && (
                    <div className="bg-primary/60 text-white text-sm px-2 py-1 rounded-full">
                      Digital
                    </div>
                  )}
                </div>
                <div className="w-full h-48 bg-muted/20" /> {/* Placeholder for product image */}
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold">{formatPrice(product.price)}</span>
                    <span className={`text-sm ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
                      {product.inStock ? (product.digital ? 'Instant Delivery' : 'In Stock') : 'Out of Stock'}
                    </span>
                  </div>
                  <Button className="w-full" disabled={!product.inStock}>
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {/* Empty State */}
      {mounted && filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <Package className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">No Products Found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
} 