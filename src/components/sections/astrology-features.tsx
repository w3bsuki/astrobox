import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";

// Sample blog posts - In production, these would come from your CMS
const articles = [
  {
    title: "Moon Phases & Their Impact",
    description: "Learn how different moon phases affect your energy and decision-making. Discover the perfect timing for important life decisions and spiritual practices.",
    date: "March 15, 2024",
    readTime: "5 min read",
    href: "/blog/moon-phases",
  },
  {
    title: "Mercury Retrograde Survival Guide",
    description: "Essential tips for navigating communication during planetary retrograde. Master the art of mindful communication and avoid common pitfalls.",
    date: "March 12, 2024",
    readTime: "4 min read",
    href: "/blog/mercury-retrograde",
  },
  {
    title: "Venus in Pisces: Love & Creativity",
    description: "How this transit affects relationships and artistic expression. Explore the mystical connection between planetary movements and your creative potential.",
    date: "March 10, 2024",
    readTime: "6 min read",
    href: "/blog/venus-pisces",
  },
];

export function AstrologyBlogs() {
  return (
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
            Cosmic Insights
          </h2>
        </div>
      </div>

      {/* Section Content */}
      <div className="pt-16 pb-8 px-8">
        <p className="text-sm text-[#E6E6FA]/80 max-w-lg mx-auto text-center mb-8 font-light">
          Explore the mystical world of astrology through our latest insights and cosmic wisdom
        </p>

        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={article.href}
                className="group block relative border border-[#9370DB]/30 bg-black/50 backdrop-blur-sm shadow-[0_0_15px_-3px_rgba(147,112,219,0.15)] hover:border-[#9370DB]/40 transition-colors"
              >
                {/* Corner Decorations */}
                <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -top-[1px] -left-[1px] border-t border-l border-[#9370DB]/60" />
                <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -top-[1px] -right-[1px] border-t border-r border-[#9370DB]/60" />
                <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -bottom-[1px] -left-[1px] border-b border-l border-[#9370DB]/60" />
                <div className="absolute h-1.5 sm:h-2 w-1.5 sm:w-2 -bottom-[1px] -right-[1px] border-b border-r border-[#9370DB]/60" />

                <div className="p-3 sm:p-6">
                  {/* Icon & Title */}
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className={cn(
                      "w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center mb-2 sm:mb-3",
                      "bg-gradient-to-br from-[#9370DB]/20 to-[#4B0082]/20",
                      "relative border border-[#9370DB]/20",
                      "group-hover:from-[#9370DB]/30 group-hover:to-[#4B0082]/30 transition-colors"
                    )}>
                      {/* Icon Corner Decorations */}
                      <div className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 -top-[1px] -left-[1px] border-t border-l border-[#9370DB]/50" />
                      <div className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 -top-[1px] -right-[1px] border-t border-r border-[#9370DB]/50" />
                      <div className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 -bottom-[1px] -left-[1px] border-b border-l border-[#9370DB]/50" />
                      <div className="absolute h-1 sm:h-1.5 w-1 sm:w-1.5 -bottom-[1px] -right-[1px] border-b border-r border-[#9370DB]/50" />
                      <Star className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#E6E6FA]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light tracking-wider text-[#E6E6FA] group-hover:text-white transition-colors">
                      {article.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <p className="text-[#E6E6FA]/70 text-xs sm:text-sm line-clamp-2 mb-4 font-light">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-center gap-3 text-xs text-[#9370DB]">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="relative mt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={cn(
                        "w-full h-7 sm:h-8 text-xs sm:text-sm font-light tracking-wider",
                        "bg-gradient-to-r from-[#9370DB]/10 via-[#4B0082]/10 to-transparent",
                        "border-[#9370DB]/20 text-[#E6E6FA]",
                        "group-hover:border-[#9370DB]/40 group-hover:from-[#9370DB]/20 group-hover:via-[#4B0082]/20 group-hover:to-transparent",
                        "transition-all duration-300",
                        "relative"
                      )}
                    >
                      <span className="flex items-center justify-center gap-2">
                        Read Article
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Button>
                    {/* Button Corner Decorations */}
                    <div className="absolute h-1 w-1 -top-[1px] -left-[1px] border-t border-l border-[#9370DB]/50" />
                    <div className="absolute h-1 w-1 -top-[1px] -right-[1px] border-t border-r border-[#9370DB]/50" />
                    <div className="absolute h-1 w-1 -bottom-[1px] -left-[1px] border-b border-l border-[#9370DB]/50" />
                    <div className="absolute h-1 w-1 -bottom-[1px] -right-[1px] border-b border-r border-[#9370DB]/50" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link href="/blog" className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-[#9370DB]/20 px-4 sm:px-6 py-2 sm:py-3 text-white font-light tracking-wider text-sm">
            <ShimmerButton 
              shimmerColor="#9370DB"
              background="black"
              shimmerSize="0.1em"
              className="absolute inset-0 w-full h-full"
            />
            <span className="relative flex items-center gap-2">
              VIEW ALL ARTICLES
              <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 