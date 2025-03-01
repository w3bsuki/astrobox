'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from '@/components/ui/canvas-reveal-effect';

interface FeatureCardProps {
  children: React.ReactNode;
  className?: string;
  colors?: number[][];
}

export function FeatureCard({ children, className = '', colors = [[59, 130, 246], [139, 92, 246]] }: FeatureCardProps) {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`h-[40rem] flex flex-col overflow-hidden items-center justify-center bg-black w-full relative ${className}`}
    >
      <div className="relative z-20 max-w-2xl mx-auto">
        {children}
      </div>
      
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={colors}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Radial gradient for the fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
} 