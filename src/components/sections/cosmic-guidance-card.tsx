'use client';

import { Button } from "@/components/ui/button";
import { Lens } from "@/components/ui/lens";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
      <div className="relative border border-[#FFD700]/20 bg-[#191970]/50 backdrop-blur-sm">
        {/* Corner Decorations */}
        <div className="absolute h-2 w-2 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
        <div className="absolute h-2 w-2 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
        <div className="absolute h-2 w-2 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
        <div className="absolute h-2 w-2 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />

        {/* Content */}
        <div className="p-4">
          {/* Icon & Text */}
          <div className="flex-1">
            <div className={cn(
              "w-8 h-8 flex items-center justify-center mb-3",
              "bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/5",
              "relative border border-[#FFD700]/20"
            )}>
              {/* Icon Corner Decorations */}
              <div className="absolute h-1.5 w-1.5 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
              <div className="absolute h-1.5 w-1.5 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
              <div className="absolute h-1.5 w-1.5 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
              <div className="absolute h-1.5 w-1.5 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />
              <Icon className="w-4 h-4 text-[#FFD700]" />
            </div>
            <h3 className="text-sm font-medium mb-1 bg-gradient-to-b from-[#FFD700] to-[#C0C0C0] bg-clip-text text-transparent">
              {title}
            </h3>
            <p className="text-[#C0C0C0]/80 text-xs leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          {/* Image with Lens Effect */}
          <div className="relative h-20 mt-3 overflow-hidden">
            <div className="absolute inset-0 border border-[#FFD700]/20">
              {/* Image Corner Decorations */}
              <div className="absolute h-1.5 w-1.5 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
              <div className="absolute h-1.5 w-1.5 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
              <div className="absolute h-1.5 w-1.5 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
              <div className="absolute h-1.5 w-1.5 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#191970]/5 to-[#191970]/20 z-10" />
            <Lens 
              zoomFactor={1.5}
              lensSize={50}
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
          <div className="relative mt-3">
            <Button 
              variant="outline" 
              size="sm"
              className={cn(
                "w-full h-7 text-xs",
                "bg-gradient-to-r from-[#FFD700]/10 via-[#FFD700]/5 to-transparent",
                "border-[#FFD700]/20 text-[#FFD700]",
                "hover:border-[#FFD700]/30 hover:from-[#FFD700]/20 hover:via-[#FFD700]/10 hover:to-transparent",
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
            <div className="absolute h-1.5 w-1.5 -top-[1px] -left-[1px] border-t border-l border-[#FFD700]/50" />
            <div className="absolute h-1.5 w-1.5 -top-[1px] -right-[1px] border-t border-r border-[#FFD700]/50" />
            <div className="absolute h-1.5 w-1.5 -bottom-[1px] -left-[1px] border-b border-l border-[#FFD700]/50" />
            <div className="absolute h-1.5 w-1.5 -bottom-[1px] -right-[1px] border-b border-r border-[#FFD700]/50" />
          </div>
        </div>
      </div>
    </motion.div>
  );
} 