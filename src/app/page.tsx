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
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AstrologyBlogs } from '@/components/sections/astrology-features';
import { Marquee } from '@/components/ui/marquee';

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
    title: 'Expert Astrologers',
    description: 'Our certified astrologers provide deep cosmic insights and personalized guidance for your spiritual journey',
    icon: Star,
    color: 'bg-[#9370DB]/10 text-[#9370DB]',
    href: '/astrology',
  },
  {
    title: 'Cosmic Precision',
    description: 'Advanced astrological algorithms and ancient wisdom combine to deliver accurate celestial readings',
    icon: Sparkles,
    color: 'bg-[#9370DB]/10 text-[#9370DB]',
    href: '/readings',
  },
  {
    title: 'Divine Connection',
    description: 'Experience a sacred bond with the cosmos through our mystical products and spiritual guidance',
    icon: Gift,
    color: 'bg-[#9370DB]/10 text-[#9370DB]',
    href: '/products',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="w-full">
        {/* Content Grid */}
        <div className="grid grid-cols-1 divide-y divide-[#9370DB]/20">
          {/* Cosmic Guidance Section */}
          <section className="py-8 sm:py-12">
            <div className="relative border border-[#9370DB]/20 bg-black mx-0">
              {/* Corner Decorations */}
              <div className="absolute h-2 sm:h-3 w-2 sm:w-3 -top-[1px] -left-[1px] border-t border-l border-[#9370DB]/50" />
              <div className="absolute h-2 sm:h-3 w-2 sm:w-3 -top-[1px] -right-[1px] border-t border-r border-[#9370DB]/50" />
              <div className="absolute h-2 sm:h-3 w-2 sm:w-3 -bottom-[1px] -left-[1px] border-b border-l border-[#9370DB]/50" />
              <div className="absolute h-2 sm:h-3 w-2 sm:w-3 -bottom-[1px] -right-[1px] border-b border-r border-[#9370DB]/50" />

              {/* Section Title */}
              <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-auto">
                <div className="relative px-3 sm:px-8 py-2 bg-black border border-[#9370DB]/20 flex justify-center max-w-[280px] sm:max-w-none mx-auto">
                  <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -top-[1px] -left-[1px] border-t border-l border-[#9370DB]/50" />
                  <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -top-[1px] -right-[1px] border-t border-r border-[#9370DB]/50" />
                  <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -bottom-[1px] -left-[1px] border-b border-l border-[#9370DB]/50" />
                  <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -bottom-[1px] -right-[1px] border-b border-r border-[#9370DB]/50" />
                  <h2 className="text-xl sm:text-base md:text-lg font-light tracking-[0.2em] uppercase text-white whitespace-nowrap">
                    Cosmic Guidance
                  </h2>
                </div>
              </div>

              {/* Section Content */}
              <div className="pt-20 sm:pt-24 md:pt-16 pb-6 sm:pb-8 px-4 sm:px-8">
                <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {astrologyFeatures.map((feature) => (
                    <CosmicGuidanceCard
                      key={feature.title}
                      {...feature}
                    />
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 flex justify-center">
                  <Link href="/astrology" className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-[#9370DB]/20 px-4 sm:px-6 py-2 sm:py-3 text-white font-light tracking-wider text-sm">
                    <ShimmerButton 
                      shimmerColor="#9370DB"
                      background="black"
                      shimmerSize="0.1em"
                      className="absolute inset-0 w-full h-full"
                    />
                    <span className="relative flex items-center gap-2">
                      EXPLORE ASTROLOGY
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Boxes Section */}
          <section className="py-12">
            <FeaturedBoxes />
          </section>

          {/* Astrology Features Section */}
          <section className="py-12">
            <AstrologyBlogs />
          </section>

          {/* Features Grid Section */}
          <section className="py-12">
            <div className="relative border border-[#9370DB]/20 bg-black">
              {/* Corner Decorations */}
              <div className="absolute h-3 w-3 -top-[1px] -left-[1px] border-t border-l border-[#9370DB]/50" />
              <div className="absolute h-3 w-3 -top-[1px] -right-[1px] border-t border-r border-[#9370DB]/50" />
              <div className="absolute h-3 w-3 -bottom-[1px] -left-[1px] border-b border-l border-[#9370DB]/50" />
              <div className="absolute h-3 w-3 -bottom-[1px] -right-[1px] border-b border-r border-[#9370DB]/50" />

              {/* Section Title */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="relative px-6 py-2 bg-black border border-[#9370DB]/20">
                  <div className="absolute h-2 w-2 -top-[1px] -left-[1px] border-t border-l border-[#9370DB]/50" />
                  <div className="absolute h-2 w-2 -top-[1px] -right-[1px] border-t border-r border-[#9370DB]/50" />
                  <div className="absolute h-2 w-2 -bottom-[1px] -left-[1px] border-b border-l border-[#9370DB]/50" />
                  <div className="absolute h-2 w-2 -bottom-[1px] -right-[1px] border-b border-r border-[#9370DB]/50" />
                  <h2 className="text-base md:text-lg font-light tracking-[0.2em] uppercase text-white">
                    Why Choose Astrobox?
                  </h2>
                </div>
              </div>

              {/* Section Content */}
              <div className="pt-16 pb-8 px-8">
                <p className="text-sm text-[#E6E6FA]/80 max-w-lg mx-auto text-center mb-8 font-light">
                  Embark on a transformative journey guided by celestial wisdom and cosmic energy
                </p>

                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="relative border border-[#9370DB]/20 bg-black p-6 flex flex-col items-center text-center h-full">
                        {/* Corner Decorations */}
                        <div className="absolute h-2 w-2 -top-[1px] -left-[1px] border-t border-l border-[#9370DB]/50" />
                        <div className="absolute h-2 w-2 -top-[1px] -right-[1px] border-t border-r border-[#9370DB]/50" />
                        <div className="absolute h-2 w-2 -bottom-[1px] -left-[1px] border-b border-l border-[#9370DB]/50" />
                        <div className="absolute h-2 w-2 -bottom-[1px] -right-[1px] border-b border-r border-[#9370DB]/50" />

                        <div className={cn(
                          "w-12 h-12 flex items-center justify-center mb-4",
                          "bg-gradient-to-br from-[#9370DB]/20 to-[#4B0082]/20",
                          "relative border border-[#9370DB]/20"
                        )}>
                          {/* Icon Corner Decorations */}
                          <div className="absolute h-1.5 w-1.5 -top-[1px] -left-[1px] border-t border-l border-[#9370DB]/50" />
                          <div className="absolute h-1.5 w-1.5 -top-[1px] -right-[1px] border-t border-r border-[#9370DB]/50" />
                          <div className="absolute h-1.5 w-1.5 -bottom-[1px] -left-[1px] border-b border-l border-[#9370DB]/50" />
                          <div className="absolute h-1.5 w-1.5 -bottom-[1px] -right-[1px] border-b border-r border-[#9370DB]/50" />
                          <feature.icon className="w-6 h-6 text-[#E6E6FA]" />
                        </div>

                        <h3 className="text-lg font-light tracking-wider mb-3 bg-gradient-to-b from-[#E6E6FA] via-[#9370DB] to-[#4B0082] bg-clip-text text-transparent">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-[#E6E6FA]/80 font-light leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 sm:mt-10 flex justify-center">
                  <Link href="/contact" className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-[#9370DB]/20 px-4 sm:px-6 py-2 sm:py-3 text-white font-light tracking-wider text-sm">
                    <ShimmerButton 
                      shimmerColor="#9370DB"
                      background="black"
                      shimmerSize="0.1em"
                      className="absolute inset-0 w-full h-full"
                    />
                    <span className="relative flex items-center gap-2">
                      CONTACT US
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Marquee Section */}
          <section className="py-12">
            <div className="relative w-[90%] mx-auto">
              <Marquee 
                className="[--duration:30s] text-[#9370DB] text-sm sm:text-base font-light"
                pauseOnHover
              >
                <div className="flex items-center gap-8 px-4">
                  <span>✧ Celestial Guidance</span>
                  <span>★ Mystical Treasures</span>
                  <span>✧ Cosmic Energy</span>
                  <span>★ Spiritual Growth</span>
                </div>
              </Marquee>
              <Marquee 
                className="[--duration:30s] text-[#9370DB] text-sm sm:text-base font-light mt-4"
                pauseOnHover
                reverse
              >
                <div className="flex items-center gap-8 px-4">
                  <span>✧ Astrological Wisdom</span>
                  <span>★ Divine Timing</span>
                  <span>✧ Sacred Knowledge</span>
                  <span>★ Cosmic Alignment</span>
                </div>
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 