'use client';

import { SparklesCore } from '@/components/ui/sparkles';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';
import { planetSymbols } from '@/lib/astrology-service';

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#191970]/50 via-[#191970]/75 to-[#191970]" />

      {/* Background Sparkles */}
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0 w-full h-full"
        particleColor="#FFD700"
        speed={0.5}
      />

      {/* Grid Layout Container */}
      <div className="absolute inset-0">
        {/* Vertical Separators */}
        <div className="absolute left-[10%] sm:left-[20%] top-0 h-full">
          <Separator orientation="vertical" className="h-full bg-gradient-to-b from-[#FFD700]/10 via-[#FFD700]/20 to-[#FFD700]/10" />
        </div>
        <div className="absolute right-[10%] sm:right-[20%] top-0 h-full">
          <Separator orientation="vertical" className="h-full bg-gradient-to-b from-[#FFD700]/10 via-[#FFD700]/20 to-[#FFD700]/10" />
        </div>

        {/* Horizontal Separators */}
        <div className="absolute top-[25vh] left-[10%] sm:left-[20%] right-[10%] sm:right-[20%]">
          <Separator className="w-full bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent" />
        </div>
        <div className="absolute top-[75vh] left-[10%] sm:left-[20%] right-[10%] sm:right-[20%]">
          <Separator className="w-full bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent" />
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-[25vh] left-[10%] sm:left-[20%] w-6 h-6 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 border-t border-l border-[#FFD700]/30" />
        </div>
        <div className="absolute top-[25vh] right-[10%] sm:right-[20%] w-6 h-6 translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 border-t border-r border-[#FFD700]/30" />
        </div>
        <div className="absolute bottom-[25vh] left-[10%] sm:left-[20%] w-6 h-6 -translate-x-1/2 translate-y-1/2">
          <div className="absolute inset-0 border-b border-l border-[#FFD700]/30" />
        </div>
        <div className="absolute bottom-[25vh] right-[10%] sm:right-[20%] w-6 h-6 translate-x-1/2 translate-y-1/2">
          <div className="absolute inset-0 border-b border-r border-[#FFD700]/30" />
        </div>

        {/* Astrological Symbols */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Celestial Bodies */}
          <span className="absolute top-[25vh] left-[10%] sm:left-[20%] text-2xl sm:text-3xl text-white/60 -translate-x-1/2 -translate-y-1/2">
            {planetSymbols.Sun}
          </span>
          <span className="absolute bottom-[25vh] right-[10%] sm:right-[20%] text-2xl sm:text-3xl text-white/60 translate-x-1/2 translate-y-1/2">
            {planetSymbols.Moon}
          </span>
          <Star className="absolute top-[25vh] right-[10%] sm:right-[20%] h-4 w-4 sm:h-6 sm:w-6 text-white/60 translate-x-1/2 -translate-y-1/2" />
          <Star className="absolute bottom-[25vh] left-[10%] sm:left-[20%] h-4 w-4 sm:h-6 sm:w-6 text-white/60 -translate-x-1/2 translate-y-1/2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative min-h-[100svh] flex flex-col items-center justify-center mx-[10%] sm:mx-[20%] py-16 sm:py-24">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#FFD700] to-[#C0C0C0]">
              ASTROBOX
            </h1>
            <p className="mt-6 text-base sm:text-xl text-[#C0C0C0]/80 max-w-2xl mx-auto">
              Discover your cosmic destiny through our mystical mystery boxes, guided by the stars and celestial energies.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8 sm:mt-16"
          >
            <Button 
              size="lg" 
              className="group h-12 px-6 sm:px-8 rounded-none bg-transparent border border-[#FFD700] text-[#FFD700] relative overflow-hidden transition-colors hover:text-[#191970] hover:border-[#FFD700]
                before:absolute before:inset-0 before:bg-[#FFD700] before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:-z-10" 
              asChild
            >
              <Link href="/astrology">
                <Star className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-125" />
                <span className="relative">Explore Astrology</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              className="group h-12 px-6 sm:px-8 rounded-none bg-[#FFD700] text-[#191970] relative overflow-hidden transition-colors hover:bg-[#FFD700]/90
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#FFD700]/0 before:via-white/10 before:to-[#FFD700]/0 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700" 
              asChild
            >
              <Link href="/shop">
                <ShoppingBag className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-125" />
                <span className="relative">Visit Shop</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 