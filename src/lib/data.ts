import { Star, Moon, Sun } from 'lucide-react';

export const astrologyFeatures = [
  {
    title: "Daily Horoscope",
    description: "Get personalized daily insights based on your zodiac sign to guide your mystery box choices.",
    icon: Star,
    color: "bg-purple-500/10",
    href: "/astrology/daily",
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&q=80&w=1600"
  },
  {
    title: "Lunar Phase Timing",
    description: "Discover the optimal times to open boxes based on the current moon phase and its influence.",
    icon: Moon,
    color: "bg-blue-500/10",
    href: "/astrology/lunar",
    image: "https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?auto=format&fit=crop&q=80&w=1600"
  },
  {
    title: "Cosmic Alignment",
    description: "See how planetary alignments affect your luck and potential rewards in real-time.",
    icon: Sun,
    color: "bg-yellow-500/10",
    href: "/astrology/alignment",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1600"
  }
]; 