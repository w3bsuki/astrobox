'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Gift, Trophy, Star, HelpCircle } from 'lucide-react';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const featuredBoxes = [
  {
    title: "Premium Tech Box",
    description: "High-end electronics and gadgets",
    price: "$299.99",
    icon: Package,
    color: "bg-blue-500/10 text-blue-500",
    href: "/boxes/premium-tech",
    colors: [[0, 0, 255], [0, 255, 255]],
  },
  {
    title: "Collector's Edition Box",
    description: "Rare collectibles and limited editions",
    price: "$499.99",
    icon: Package,
    color: "bg-purple-500/10 text-purple-500",
    href: "/boxes/collectors-edition",
    colors: [[128, 0, 128], [255, 0, 255]],
  },
  {
    title: "Gaming Essentials Box",
    description: "Popular gaming gear and accessories",
    price: "$149.99",
    icon: Package,
    color: "bg-green-500/10 text-green-500",
    href: "/boxes/gaming-essentials",
    colors: [[0, 128, 0], [0, 255, 0]],
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
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  colors?: number[][];
  price: string;
  href: string;
}) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div 
        className="relative border border-[#FFD700]/20 bg-black/50 backdrop-blur-sm"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Corner Decorations */}
        <div className="absolute h-2 w-2 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
        <div className="absolute h-2 w-2 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
        <div className="absolute h-2 w-2 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
        <div className="absolute h-2 w-2 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />
        
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
        <div className="relative p-6">
          {/* Icon & Text */}
          <div className="flex-1">
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
              <Icon className="w-5 h-5 text-[#FFD700]" />
            </div>
            <h3 className="text-lg font-medium mb-2 bg-gradient-to-b from-[#FFD700] to-[#C0C0C0] bg-clip-text text-transparent">
              {title}
            </h3>
            <p className="text-sm text-[#C0C0C0]/80 mb-4">
              {description}
            </p>
            <p className="text-[#FFD700] text-xl font-bold">
              {price}
            </p>
          </div>

          {/* Button */}
          <div className="relative mt-6">
            <Button 
              variant="outline" 
              size="sm"
              className={cn(
                "w-full h-9 text-sm",
                "bg-gradient-to-r from-[#FFD700]/10 via-[#FFD700]/5 to-transparent",
                "border-[#FFD700]/20 text-[#FFD700]",
                "hover:border-[#FFD700]/30 hover:from-[#FFD700]/20 hover:via-[#FFD700]/10 hover:to-transparent",
                "transition-all duration-300",
                "relative"
              )}
              asChild
            >
              <Link href={href}>
                Reveal Mystery Box
              </Link>
            </Button>
            {/* Button Corner Decorations */}
            <div className="absolute h-1.5 w-1.5 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
            <div className="absolute h-1.5 w-1.5 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
            <div className="absolute h-1.5 w-1.5 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
            <div className="absolute h-1.5 w-1.5 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function FeaturedBoxes() {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <div className="mb-3 flex items-center justify-center">
          <div className={cn(
            "w-10 h-10",
            "bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/5",
            "flex items-center justify-center",
            "relative border border-[#FFD700]/20"
          )}>
            {/* Icon Corner Decorations */}
            <div className="absolute h-1.5 w-1.5 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
            <div className="absolute h-1.5 w-1.5 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
            <div className="absolute h-1.5 w-1.5 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
            <div className="absolute h-1.5 w-1.5 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />
            <HelpCircle className="w-5 h-5 text-[#FFD700]" />
          </div>
        </div>
        <h2 className={cn(
          "text-2xl font-bold tracking-tight sm:text-3xl mb-2",
          "bg-gradient-to-b from-[#FFD700] to-[#C0C0C0] bg-clip-text text-transparent"
        )}>
          Mystery Boxes
        </h2>
        <p className="text-sm text-[#C0C0C0]/80 max-w-lg mx-auto">
          Discover our curated mystery boxes, each filled with personalized surprises for Men, Women, and Kids
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {featuredBoxes.map((box) => (
          <FeaturedBox key={box.title} {...box} />
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
          <Link href="/boxes" className="gap-2">
            View All Mystery Boxes
            <HelpCircle className="h-3 w-3" />
          </Link>
        </Button>
      </div>
    </div>
  );
} 