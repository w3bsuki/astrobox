'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Calendar, Heart, PieChart, Moon, Sun, Sparkles, ArrowRight } from 'lucide-react';
import { zodiacSigns } from '@/lib/astrology-service';

const features = [
  {
    title: 'Personal Horoscope',
    description: 'Get a detailed reading based on your birth chart',
    icon: PieChart,
    href: '/birth-chart',
    color: 'bg-blue-500/10 text-blue-500',
    buttonText: 'Calculate Birth Chart',
  },
  {
    title: 'Karmic Calendar',
    description: 'Discover your favorable days and cosmic timing',
    icon: Calendar,
    href: '/karmic-calendar',
    color: 'bg-purple-500/10 text-purple-500',
    buttonText: 'View Calendar',
  },
  {
    title: 'Synastry Reading',
    description: 'Explore relationship compatibility',
    icon: Heart,
    href: '/astrology/synastry',
    color: 'bg-pink-500/10 text-pink-500',
    buttonText: 'Check Compatibility',
  },
  {
    title: 'Daily Horoscope',
    description: 'Get your daily astrological guidance',
    icon: Star,
    href: '/horoscope',
    color: 'bg-yellow-500/10 text-yellow-500',
    buttonText: 'Read Horoscope',
  },
];

const currentCelestialEvents = [
  {
    title: 'Full Moon in Virgo',
    date: 'February 24, 2024',
    description: 'A time for completion and illumination of practical matters',
    icon: Moon,
  },
  {
    title: 'Mercury enters Pisces',
    date: 'March 2, 2024',
    description: 'Communication becomes more intuitive and creative',
    icon: Star,
  },
  {
    title: 'Venus-Mars Conjunction',
    date: 'March 14, 2024',
    description: 'Powerful energy for relationships and creative endeavors',
    icon: Heart,
  },
];

export default function AstrologyPage() {
  return (
    <div className="container py-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-blue-500/20 p-8 md:p-12 mb-16">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <Sun className="absolute right-4 top-4 h-12 w-12 text-yellow-500/20" />
        <Moon className="absolute left-4 bottom-4 h-12 w-12 text-blue-500/20" />
        <div className="relative">
          <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl lg:text-6xl">
            Discover Your <span className="text-primary">Cosmic Path</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore the ancient wisdom of astrology through our comprehensive tools and personalized readings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/birth-chart">
                Get Your Birth Chart <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/horoscope">Daily Horoscope</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Current Celestial Events */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Current Celestial Events</h2>
          <p className="text-muted-foreground">Important astrological transits and their influences</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {currentCelestialEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <event.icon className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Features */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Astrological Tools</h2>
          <p className="text-muted-foreground">Comprehensive features for your spiritual journey</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={feature.href}>{feature.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Zodiac Signs Quick Access */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Explore Zodiac Signs</h2>
          <p className="text-muted-foreground">Learn about the characteristics of each zodiac sign</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {zodiacSigns.map((sign, index) => (
            <motion.div
              key={sign.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={`/horoscope/${sign.name.toLowerCase()}`}>
                <Card className="text-center hover:bg-muted/50 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="text-3xl mb-2">{sign.symbol}</div>
                    <div className="font-medium text-sm">{sign.name}</div>
                    <div className="text-xs text-muted-foreground">{sign.element}</div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium Features */}
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
        <CardHeader className="text-center relative">
          <Sparkles className="w-8 h-8 mx-auto mb-4 text-primary" />
          <CardTitle>Premium Astrological Insights</CardTitle>
          <CardDescription>
            Unlock deeper cosmic understanding with our advanced features
          </CardDescription>
        </CardHeader>
        <CardContent className="relative">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <Star className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-medium mb-2">Personalized Reports</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Detailed PDF reports with in-depth analysis of your unique cosmic blueprint
              </p>
              <Button variant="outline" size="sm">Learn More</Button>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-medium mb-2">Transit Alerts</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Stay informed about important planetary movements affecting your chart
              </p>
              <Button variant="outline" size="sm">Coming Soon</Button>
            </div>
            <div className="text-center">
              <Heart className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="font-medium mb-2">Relationship Insights</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Advanced compatibility analysis and relationship forecasting
              </p>
              <Button variant="outline" size="sm">Explore</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 