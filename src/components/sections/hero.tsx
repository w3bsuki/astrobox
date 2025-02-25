'use client';

import { SparklesCore } from '@/components/ui/sparkles';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';
import { planetSymbols, zodiacSigns } from '@/lib/astrology-service';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] w-full overflow-hidden">
      {/* Background with gradient - full width on mobile */}
      <div className="absolute inset-0 md:left-1/2 md:-translate-x-1/2 w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0B0B3B] to-[#4B0082]" />

        {/* Background Sparkles - full width on mobile */}
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="absolute inset-0 w-full h-full"
          particleColor="#E6E6FA"
          speed={0.4}
        />
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col min-h-[calc(100svh-4rem)] w-full">
        {/* Main Content */}
        <div className="flex-1 flex items-center pb-32">
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4 md:px-0"
            >
              <h1 className="text-4xl sm:text-5xl md:text-9xl font-light tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-b from-[#E6E6FA] via-[#9370DB] to-[#4B0082]">
                ASTROBOX
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#E6E6FA] max-w-[280px] sm:max-w-md md:max-w-2xl mx-auto font-light px-4 sm:px-6 md:px-0">
                Discover your cosmic destiny through our mystical mystery boxes, guided by the stars and celestial energies.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-12 md:mt-16 px-4 sm:px-6 md:px-0"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto group h-11 sm:h-12 px-4 sm:px-8 rounded-none bg-transparent border border-[#9370DB] text-[#E6E6FA] relative overflow-hidden transition-colors hover:text-black hover:border-[#9370DB]
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#9370DB] before:to-[#E6E6FA] before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:-z-10" 
                asChild
              >
                <Link href="/astrology" className="flex items-center justify-center">
                  <Star className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" />
                  <span className="relative">Explore Astrology</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                className="w-full sm:w-auto group h-11 sm:h-12 px-4 sm:px-8 rounded-none bg-gradient-to-r from-[#9370DB] to-[#4B0082] text-white relative overflow-hidden transition-colors hover:from-[#4B0082] hover:to-[#9370DB]
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700" 
                asChild
              >
                <Link href="/shop" className="flex items-center justify-center">
                  <ShoppingBag className="mr-2 h-4 w-4 transition-transform group-hover:scale-125" />
                  <span className="relative">Mystery Shop</span>
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              </Button>
            </motion.div>

            {/* Zodiac Banner */}
            <div className="w-full absolute bottom-0 left-0">
              <div className="relative overflow-hidden bg-gradient-to-r from-[#0B0B3B] via-black to-[#0B0B3B]">
                {/* Horizontal Separators */}
                <div className="absolute top-0 left-0 w-full h-px bg-[#9370DB]/20" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-[#9370DB]/20" />

                <motion.div 
                  className="flex items-center py-4 sm:py-6 md:py-8 gap-6 sm:gap-8"
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                >
                  {[...zodiacSigns, ...zodiacSigns].map((sign, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <div className="flex items-center gap-2 sm:gap-3 shrink-0 cursor-pointer">
                          <motion.span
                            className={cn(
                              "text-xl sm:text-2xl md:text-3xl text-[#9370DB] transition-colors shrink-0",
                              "hover:text-[#E6E6FA] hover:scale-110",
                              "transition-all duration-300"
                            )}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            title={sign.name}
                          >
                            {sign.symbol}
                          </motion.span>
                          <span className="text-xs sm:text-sm md:text-base text-[#E6E6FA]/80 font-medium hidden sm:inline whitespace-nowrap">
                            {sign.name}
                          </span>
                          {index < zodiacSigns.length * 2 - 1 && (
                            <div className="h-4 sm:h-6 md:h-8 w-px bg-[#9370DB]/20 ml-2 sm:ml-3" />
                          )}
                        </div>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-black border border-[#9370DB]/20">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2 text-[#E6E6FA]">
                            <span className="text-2xl">{sign.symbol}</span>
                            <span>{sign.name}</span>
                          </DialogTitle>
                          <DialogDescription className="text-[#E6E6FA]/60">
                            Daily Horoscope for {sign.name}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="space-y-4">
                            <h4 className="font-medium text-[#9370DB]">Today's Reading</h4>
                            <p className="text-sm text-[#E6E6FA]/80">
                              The stars align in your favor today. Your ruling planet {sign.rulingPlanet} brings positive energy and new opportunities. Focus on personal growth and trust your intuition.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                              <div>
                                <h5 className="text-sm font-medium text-[#9370DB]">Lucky Number</h5>
                                <p className="text-sm text-[#E6E6FA]/80">{Math.floor(Math.random() * 100)}</p>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-[#9370DB]">Lucky Color</h5>
                                <p className="text-sm text-[#E6E6FA]/80">{['Purple', 'Blue', 'Gold', 'Silver'][Math.floor(Math.random() * 4)]}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 