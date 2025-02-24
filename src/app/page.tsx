'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Star, ArrowRight, Gift, Sparkles } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { HeroSection } from '@/components/sections/hero';
import { FeaturedBoxes } from '@/components/sections/featured-boxes';
import { CosmicGuidanceCard } from '@/components/sections/cosmic-guidance-card';
import { astrologyFeatures } from '@/lib/data';
import Image from 'next/image';
import { Lens } from '@/components/ui/lens';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { ZodiacBanner } from '@/components/sections/ZodiacBanner';

const featuredBoxes = [
  {
    id: 'men',
    name: 'Mystery Box For Men',
    description: 'Curated surprises tailored for men, from tech gadgets to luxury accessories',
    price: 199.99,
    tier: 'Premium',
    image: '/boxes/men-box.jpg',
    totalItems: 100,
    remainingItems: 67,
    color: 'bg-blue-500/10 text-blue-500',
    colors: [[0, 0, 255], [0, 255, 255]],
  },
  {
    id: 'women',
    name: 'Mystery Box For Women',
    description: 'Exclusive collection of beauty, fashion, and lifestyle surprises',
    price: 199.99,
    tier: 'Premium',
    image: '/boxes/women-box.jpg',
    totalItems: 100,
    remainingItems: 45,
    color: 'bg-purple-500/10 text-purple-500',
    colors: [[128, 0, 128], [255, 0, 255]],
  },
  {
    id: 'kids',
    name: 'Mystery Box For Kids',
    description: 'Fun and educational surprises perfect for young adventurers',
    price: 149.99,
    tier: 'Standard',
    image: '/boxes/kids-box.jpg',
    totalItems: 100,
    remainingItems: 89,
    color: 'bg-green-500/10 text-green-500',
    colors: [[0, 128, 0], [0, 255, 0]],
  },
];

const features = [
  {
    title: 'Mystery Boxes',
    description: 'Exclusive items and rare collectibles',
    icon: Gift,
    color: 'bg-blue-500/10 text-blue-500',
    href: '/boxes',
  },
  {
    title: 'Shop',
    description: 'Browse our curated collection of items',
    icon: Package,
    color: 'bg-green-500/10 text-green-500',
    href: '/shop',
  },
  {
    title: 'Live Unboxing',
    description: 'Watch others open their boxes',
    icon: Star,
    color: 'bg-yellow-500/10 text-yellow-500',
    href: '/live',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#191970]">
      {/* Hero Section */}
      <div className="relative w-full bg-black/95 backdrop-blur-sm border-b border-[#FFD700]/20 mt-16">
        <div className="relative w-full h-full max-w-[1920px] mx-auto">
          {/* Main vertical separator lines */}
          <div className="absolute inset-y-0 left-[15%] w-px bg-[#FFD700]/20" />
          <div className="absolute inset-y-0 right-[15%] w-px bg-[#FFD700]/20" />
          
          {/* Content container - 70% width */}
          <div className="relative w-[70%] mx-auto">
            <div className="relative py-24 md:py-32">
              {/* Left border for content area */}
              <div className="absolute inset-y-0 left-0 w-px bg-[#FFD700]/20" />
              {/* Right border for content area */}
              <div className="absolute inset-y-0 right-0 w-px bg-[#FFD700]/20" />

              <div className="px-6 text-center">
                <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#FFD700] to-[#C0C0C0] mb-6">
                  ASTROBOX
                </h1>
                <p className="text-base md:text-lg text-[#C0C0C0] mb-12 max-w-2xl mx-auto">
                  Discover your cosmic destiny through our mystical mystery boxes,
                  guided by the stars and celestial energies.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <Button 
                    className={cn(
                      "relative w-full md:w-auto",
                      "border border-[#FFD700]/20",
                      "bg-gradient-to-r from-[#FFD700]/10 via-[#FFD700]/5 to-transparent",
                      "text-[#FFD700]",
                      "hover:border-[#FFD700]/40 hover:bg-[#FFD700]/5",
                      "transition-all duration-300"
                    )}
                    asChild
                  >
                    <Link href="/astrology" className="gap-2">
                      <Star className="h-4 w-4" />
                      Explore Astrology
                    </Link>
                  </Button>
                  <Button 
                    variant="secondary"
                    className={cn(
                      "relative w-full md:w-auto",
                      "border border-[#FFD700]/20",
                      "bg-[#FFD700]",
                      "text-black",
                      "hover:bg-[#FFD700]/90",
                      "transition-all duration-300"
                    )}
                    asChild
                  >
                    <Link href="/shop">
                      Visit Shop
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 divide-y divide-[#FFD700]/20">
        {/* Zodiac Banner Section */}
        <div className="relative bg-black/50 backdrop-blur-sm border-b border-[#FFD700]/20">
          <div className="max-w-[1920px] mx-auto">
            {/* Main vertical separator lines */}
            <div className="absolute inset-y-0 left-[15%] w-px bg-[#FFD700]/20" />
            <div className="absolute inset-y-0 right-[15%] w-px bg-[#FFD700]/20" />
            
            {/* Content container - Exactly 70% width between separators */}
            <div className="w-[70%] mx-auto relative">
              <ZodiacBanner />
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="bg-black/50 backdrop-blur-sm">
          <div className="max-w-[1920px] mx-auto relative px-4">
            <div className="absolute inset-y-0 left-[15%] w-px bg-[#FFD700]/20" />
            <div className="absolute inset-y-0 right-[15%] w-px bg-[#FFD700]/20" />
            
            <div className="w-[70%] mx-auto grid grid-cols-1 divide-y divide-[#FFD700]/20">
              {/* Cosmic Guidance Section */}
              <section className="py-12">
                <div className="relative border border-[#FFD700]/20 bg-black/50 backdrop-blur-sm">
                  {/* Corner Decorations */}
                  <div className="absolute h-3 w-3 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
                  <div className="absolute h-3 w-3 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
                  <div className="absolute h-3 w-3 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
                  <div className="absolute h-3 w-3 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />

                  {/* Section Title */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="relative px-4 py-1 bg-black border border-[#FFD700]/20">
                      <div className="absolute h-2 w-2 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
                      <div className="absolute h-2 w-2 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
                      <div className="absolute h-2 w-2 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
                      <div className="absolute h-2 w-2 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />
                      <h2 className="text-sm font-medium tracking-wider uppercase bg-gradient-to-b from-[#FFD700] to-[#C0C0C0] bg-clip-text text-transparent">
                        Cosmic Guidance
                      </h2>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="p-8">
                    <p className="text-sm text-[#C0C0C0]/80 max-w-lg mx-auto text-center mb-8">
                      Enhance your mystery box experience with personalized astrological insights
                    </p>

                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      {astrologyFeatures.map((feature) => (
                        <CosmicGuidanceCard
                          key={feature.title}
                          {...feature}
                        />
                      ))}
                    </div>

                    <div className="mt-8 text-center">
                      <Button 
                        size="sm"
                        variant="outline" 
                        className={cn(
                          "relative",
                          "text-[#FFD700] border-[#FFD700]/20",
                          "bg-gradient-to-r from-[#FFD700]/10 via-[#FFD700]/5 to-transparent",
                          "hover:border-[#FFD700]/40 hover:bg-[#FFD700]/5",
                          "transition-all duration-300"
                        )} 
                        asChild
                      >
                        <Link href="/astrology" className="gap-2">
                          View All Astrology Features
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Featured Boxes Section */}
              <section className="py-12">
                <div className="relative border border-[#FFD700]/20 bg-black/50 backdrop-blur-sm">
                  {/* Corner Decorations */}
                  <div className="absolute h-3 w-3 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
                  <div className="absolute h-3 w-3 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
                  <div className="absolute h-3 w-3 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
                  <div className="absolute h-3 w-3 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />

                  {/* Section Title */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="relative px-4 py-1 bg-black border border-[#FFD700]/20">
                      <div className="absolute h-2 w-2 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
                      <div className="absolute h-2 w-2 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
                      <div className="absolute h-2 w-2 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
                      <div className="absolute h-2 w-2 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />
                      <h2 className="text-sm font-medium tracking-wider uppercase bg-gradient-to-b from-[#FFD700] to-[#C0C0C0] bg-clip-text text-transparent">
                        Mystery Boxes
                      </h2>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="p-8">
                    <FeaturedBoxes />
                  </div>
                </div>
              </section>

              {/* Features Grid Section */}
              <section className="py-12">
                <div className="relative border border-[#FFD700]/20 bg-black/50 backdrop-blur-sm">
                  {/* Corner Decorations */}
                  <div className="absolute h-3 w-3 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
                  <div className="absolute h-3 w-3 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
                  <div className="absolute h-3 w-3 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
                  <div className="absolute h-3 w-3 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />

                  {/* Section Title */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="relative px-4 py-1 bg-black border border-[#FFD700]/20">
                      <div className="absolute h-2 w-2 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
                      <div className="absolute h-2 w-2 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
                      <div className="absolute h-2 w-2 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
                      <div className="absolute h-2 w-2 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />
                      <h2 className="text-sm font-medium tracking-wider uppercase bg-gradient-to-b from-[#FFD700] to-[#C0C0C0] bg-clip-text text-transparent">
                        Why Choose Astrobox?
                      </h2>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="p-8">
                    <p className="text-sm text-[#C0C0C0]/80 max-w-lg mx-auto text-center mb-8">
                      Unique features that set us apart from other platforms
                    </p>

                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      {features.map((feature, index) => (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <div className="relative border border-[#FFD700]/20 bg-black/50 backdrop-blur-sm p-6">
                            {/* Corner Decorations */}
                            <div className="absolute h-2 w-2 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
                            <div className="absolute h-2 w-2 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
                            <div className="absolute h-2 w-2 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
                            <div className="absolute h-2 w-2 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />

                            <div className={cn(
                              "w-10 h-10 flex items-center justify-center mb-4",
                              "bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/5",
                              "relative border border-[#FFD700]/20"
                            )}>
                              {/* Icon Corner Decorations */}
                              <div className="absolute h-1.5 w-1.5 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
                              <div className="absolute h-1.5 w-1.5 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
                              <div className="absolute h-1.5 w-1.5 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
                              <div className="absolute h-1.5 w-1.5 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />
                              <feature.icon className="w-5 h-5 text-[#FFD700]" />
                            </div>

                            <h3 className="text-lg font-medium mb-2 bg-gradient-to-b from-[#FFD700] to-[#C0C0C0] bg-clip-text text-transparent">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-[#C0C0C0]/80">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="py-12">
                <div className="relative border border-[#FFD700]/20 bg-black/50 backdrop-blur-sm">
                  {/* Corner Decorations */}
                  <div className="absolute h-3 w-3 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
                  <div className="absolute h-3 w-3 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
                  <div className="absolute h-3 w-3 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
                  <div className="absolute h-3 w-3 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />

                  {/* Section Title */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="relative px-4 py-1 bg-black border border-[#FFD700]/20">
                      <div className="absolute h-2 w-2 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
                      <div className="absolute h-2 w-2 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
                      <div className="absolute h-2 w-2 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
                      <div className="absolute h-2 w-2 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />
                      <h2 className="text-sm font-medium tracking-wider uppercase bg-gradient-to-b from-[#FFD700] to-[#C0C0C0] bg-clip-text text-transparent">
                        Get Started
                      </h2>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-b from-[#FFD700] to-[#C0C0C0] bg-clip-text text-transparent">
                      Ready to Start Your Adventure?
                    </h3>
                    <p className="text-sm text-[#C0C0C0]/80 max-w-lg mx-auto mb-8">
                      Join thousands of excited users and discover amazing items in our mystery boxes.
                      Your next big win could be just one box away!
                    </p>

                    <div className="flex items-center justify-center gap-4">
                      <Button 
                        size="lg"
                        className={cn(
                          "relative border border-[#FFD700]/20",
                          "bg-gradient-to-r from-[#FFD700]/10 via-[#FFD700]/5 to-transparent",
                          "text-[#FFD700]",
                          "hover:border-[#FFD700]/40 hover:bg-[#FFD700]/5",
                          "transition-all duration-300"
                        )}
                        asChild
                      >
                        <Link href="/boxes" className="gap-2">
                          Get Started <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>

                      <Button 
                        size="lg"
                        variant="outline"
                        className={cn(
                          "relative border border-[#FFD700]/20",
                          "text-[#FFD700]",
                          "hover:border-[#FFD700]/40 hover:bg-[#FFD700]/5",
                          "transition-all duration-300"
                        )}
                        asChild
                      >
                        <Link href="/how-it-works">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 