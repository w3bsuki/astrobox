'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Gift, Trophy, Star, HelpCircle, ArrowRight } from 'lucide-react';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lens } from '@/components/ui/lens';
import Image from 'next/image';
import { ShimmerButton } from '@/components/ui/shimmer-button';

const featuredBoxes = [
  {
    title: "Mystery Box For Men",
    description: "Curated cosmic treasures aligned with masculine energy, featuring luxury items influenced by Mars and Jupiter.",
    price: "$199.99",
    icon: Package,
    color: "bg-blue-500/10 text-blue-500",
    href: "/boxes/men",
    colors: [[75, 112, 219], [14, 14, 59]], // Masculine energy colors
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1600"
  },
  {
    title: "Mystery Box For Women",
    description: "Divine feminine selections guided by Venus and the Moon, including beauty and spiritual wellness items.",
    price: "$199.99",
    icon: Package,
    color: "bg-purple-500/10 text-purple-500",
    href: "/boxes/women",
    colors: [[147, 112, 219], [75, 0, 130]], // Feminine energy colors
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1600"
  },
  {
    title: "Mystery Box For Children",
    description: "Magical surprises for young souls, inspired by Mercury's playful energy and educational cosmic wonders.",
    price: "$149.99",
    icon: Package,
    color: "bg-green-500/10 text-green-500",
    href: "/boxes/children",
    colors: [[230, 230, 250], [147, 112, 219]], // Gentle, playful colors
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1600"
  },
];

const FeaturedBox = ({
  title,
  description,
  icon: Icon,
  color,
  colors,
  price,
  href,
  image,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  colors?: number[][];
  price: string;
  href: string;
  image: string;
}) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div 
        className="relative border border-[#9370DB]/30 bg-black/50 backdrop-blur-sm shadow-[0_0_15px_-3px_rgba(147,112,219,0.15)]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Corner Decorations */}
        <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -top-[1px] -left-[1px] border-t border-l border-[#9370DB]/60" />
        <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -top-[1px] -right-[1px] border-t border-r border-[#9370DB]/60" />
        <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -bottom-[1px] -left-[1px] border-b border-l border-[#9370DB]/60" />
        <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -bottom-[1px] -right-[1px] border-b border-r border-[#9370DB]/60" />
        
        {/* Animated Background Effects */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <CanvasRevealEffect
                animationSpeed={2}
                containerClassName="bg-black/50"
                colors={colors}
                dotSize={2}
              />
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="relative p-3 sm:p-6">
          {/* Icon & Text */}
          <div className="flex-1 flex flex-col items-center text-center">
            <div className={cn(
              "w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center mb-2 sm:mb-3",
              "bg-gradient-to-br from-[#9370DB]/20 to-[#4B0082]/20",
              "relative border border-[#9370DB]/20"
            )}>
              {/* Icon Corner Decorations */}
              <div className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 -top-[1px] -left-[1px] border-t border-l border-[#9370DB]/50" />
              <div className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 -top-[1px] -right-[1px] border-t border-r border-[#9370DB]/50" />
              <div className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 -bottom-[1px] -left-[1px] border-b border-l border-[#9370DB]/50" />
              <div className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 -bottom-[1px] -right-[1px] border-b border-r border-[#9370DB]/50" />
              <Icon className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#E6E6FA]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-light tracking-wider mb-1.5 text-[#E6E6FA] whitespace-nowrap">
              {title}
            </h3>
            <p className="text-[#E6E6FA]/70 text-xs sm:text-sm leading-relaxed line-clamp-1 font-light max-w-[240px] mx-auto">
              {description}
            </p>
            <div className="mt-2 sm:mt-3">
              <span className="text-[#9370DB] text-sm sm:text-base font-medium">
                {price}
              </span>
            </div>
          </div>

          {/* Image with Lens Effect */}
          <div className="relative h-20 sm:h-24 mt-3 sm:mt-4 overflow-hidden">
            <div className="absolute inset-0 border border-[#9370DB]/20">
              {/* Image Corner Decorations */}
              <div className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 -top-[1px] -left-[1px] border-t border-l border-[#9370DB]/50" />
              <div className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 -top-[1px] -right-[1px] border-t border-r border-[#9370DB]/50" />
              <div className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 -bottom-[1px] -left-[1px] border-b border-l border-[#9370DB]/50" />
              <div className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 -bottom-[1px] -right-[1px] border-b border-r border-[#9370DB]/50" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B3B]/50 to-[#4B0082]/50 z-10" />
            <Lens 
              zoomFactor={1.5}
              lensSize={40}
              isStatic={false}
              lensColor="white"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </Lens>
          </div>

          {/* Button */}
          <div className="relative mt-3 sm:mt-4">
            <Button 
              variant="outline" 
              size="sm"
              className={cn(
                "w-full h-7 sm:h-8 text-xs sm:text-sm font-light tracking-wider",
                "bg-gradient-to-r from-[#9370DB]/10 via-[#4B0082]/10 to-transparent",
                "border-[#9370DB]/20 text-[#E6E6FA]",
                "hover:border-[#9370DB]/40 hover:from-[#9370DB]/20 hover:via-[#4B0082]/20 hover:to-transparent",
                "transition-all duration-300",
                "relative"
              )}
              asChild
            >
              <Link href={href} className="flex items-center justify-center gap-2">
                Unveil Your Destiny
                <ArrowRight className="h-3 sm:h-4 sm:w-4" />
              </Link>
            </Button>
            {/* Button Corner Decorations */}
            <div className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 -top-[1px] -left-[1px] border-t border-l border-[#9370DB]/50" />
            <div className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 -top-[1px] -right-[1px] border-t border-r border-[#9370DB]/50" />
            <div className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 -bottom-[1px] -left-[1px] border-b border-l border-[#9370DB]/50" />
            <div className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 -bottom-[1px] -right-[1px] border-b border-r border-[#9370DB]/50" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function FeaturedBoxes() {
  return (
    <div className="relative border border-[#9370DB]/20 bg-black">
      {/* Corner Decorations */}
      <div className="absolute h-2 sm:h-3 w-2 sm:w-3 -top-[1px] -left-[1px] border-t border-l border-[#9370DB]/50" />
      <div className="absolute h-2 sm:h-3 w-2 sm:w-3 -top-[1px] -right-[1px] border-t border-r border-[#9370DB]/50" />
      <div className="absolute h-2 sm:h-3 w-2 sm:w-3 -bottom-[1px] -left-[1px] border-b border-l border-[#9370DB]/50" />
      <div className="absolute h-2 sm:h-3 w-2 sm:w-3 -bottom-[1px] -right-[1px] border-b border-r border-[#9370DB]/50" />

      {/* Section Title */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <div className="relative px-3 sm:px-6 py-2 bg-black border border-[#9370DB]/20">
          <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -top-[1px] -left-[1px] border-t border-l border-[#9370DB]/50" />
          <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -top-[1px] -right-[1px] border-t border-r border-[#9370DB]/50" />
          <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -bottom-[1px] -left-[1px] border-b border-l border-[#9370DB]/50" />
          <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -bottom-[1px] -right-[1px] border-b border-r border-[#9370DB]/50" />
          <h2 className="text-xl sm:text-base md:text-lg font-light tracking-[0.2em] uppercase text-white whitespace-nowrap">
            ? Mystery Boxes ?
          </h2>
        </div>
      </div>

      {/* Section Content */}
      <div className="pt-12 sm:pt-16 pb-6 sm:pb-8 px-3 sm:px-8">
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBoxes.map((box) => (
            <FeaturedBox key={box.title} {...box} />
          ))}
        </div>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link href="/boxes" className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-[#9370DB]/20 px-4 sm:px-6 py-2 sm:py-3 text-white font-light tracking-wider text-sm">
            <ShimmerButton 
              shimmerColor="#9370DB"
              background="black"
              shimmerSize="0.1em"
              className="absolute inset-0 w-full h-full"
            />
            <span className="relative flex items-center gap-2">
              EXPLORE ALL MYSTERY BOXES
              <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 