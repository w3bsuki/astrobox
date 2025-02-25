'use client';

import { motion } from 'framer-motion';
import { zodiacSigns } from '@/lib/astrology-service';
import { cn } from '@/lib/utils';

export function ZodiacBanner() {
  // Triple the zodiac signs for continuous flow
  const displaySigns = [...zodiacSigns, ...zodiacSigns, ...zodiacSigns];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-y-0 left-[10%] w-px bg-[#FFD700]" />
      <div className="absolute inset-y-0 right-[10%] w-px bg-[#FFD700]" />
      {/* Banner Box Container */}
      <div className="relative bg-black/50 backdrop-blur-sm overflow-hidden w-[80%] mx-auto">
        {/* Section Title */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <div className="relative px-4 py-1 bg-[#191970]">
            <h2 className="text-sm font-medium tracking-wider uppercase bg-gradient-to-b from-[#FFD700] to-[#C0C0C0] bg-clip-text text-transparent">
              Zodiac Signs
            </h2>
          </div>
        </div>

        {/* Marquee Container */}
        <motion.div 
          className="flex items-center py-4 gap-8"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {displaySigns.map((sign, index) => (
            <div key={index} className="flex items-center gap-3 shrink-0">
              <motion.span
                className={cn(
                  "text-xl text-white/80 transition-colors cursor-default shrink-0",
                  "hover:text-[#FFD700] hover:scale-110",
                  "transition-all duration-300"
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                title={sign.name}
              >
                {sign.symbol}
              </motion.span>
              <span className="text-xs text-white/40 font-light hidden sm:inline whitespace-nowrap">
                {sign.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 