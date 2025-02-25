'use client';

import { Button } from "@/components/ui/button";
import { Lens } from "@/components/ui/lens";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Meteors } from "@/components/ui/meteors";

interface CosmicGuidanceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  href: string;
  image: string;
}

export function CosmicGuidanceCard({
  title,
  description,
  icon: Icon,
  color,
  href,
  image,
}: CosmicGuidanceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative border border-[#9370DB]/30 bg-black/50 backdrop-blur-sm shadow-[0_0_15px_-3px_rgba(147,112,219,0.15)] overflow-hidden">
        {/* Meteors Effect */}
        <div className="absolute inset-0">
          <Meteors 
            number={10}
            className="!bg-[#9370DB] before:!from-[#9370DB]"
          />
        </div>

        {/* Corner Decorations */}
        <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -top-[1px] -left-[1px] border-t border-l border-[#9370DB]/60" />
        <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -top-[1px] -right-[1px] border-t border-r border-[#9370DB]/60" />
        <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -bottom-[1px] -left-[1px] border-b border-l border-[#9370DB]/60" />
        <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -bottom-[1px] -right-[1px] border-b border-r border-[#9370DB]/60" />

        {/* Content */}
        <div className="relative p-3 sm:p-6">
          {/* Icon & Text */}
          <div className="flex-1 flex flex-col items-center text-center min-h-[120px] sm:min-h-0">
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
              <span className="text-[#9370DB] text-sm sm:text-base font-medium opacity-0">
                Spacer
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
              <Link href={href}>
                Explore {title}
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
} 