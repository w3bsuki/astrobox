'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Moon, Sun, Star, Calendar } from 'lucide-react';
import KarmicCalendar from '@/components/astrology/karmic-calendar';

// Sample data - In production, this would come from an API
const currentInfluences = [
  {
    planet: 'Sun',
    sign: 'Aries',
    house: '10th House',
    aspect: 'Trine Jupiter',
    interpretation: 'Excellent time for career advancement and public recognition.',
  },
  {
    planet: 'Moon',
    sign: 'Libra',
    house: '4th House',
    aspect: 'Square Mars',
    interpretation: 'Emotional tensions may arise in home and family matters.',
  },
  {
    planet: 'Mercury',
    sign: 'Pisces',
    house: '9th House',
    aspect: 'Sextile Venus',
    interpretation: 'Favorable for creative writing and spiritual studies.',
  },
];

const upcomingTransits = [
  {
    date: '2024-03-20',
    event: 'Spring Equinox',
    description: 'Sun enters Aries, marking the astrological new year.',
  },
  {
    date: '2024-03-25',
    event: 'Full Moon in Libra',
    description: 'Focus on relationships and finding balance in your life.',
  },
  {
    date: '2024-04-01',
    event: 'Mercury Retrograde',
    description: 'Time to review and revise plans, avoid major decisions.',
  },
];

export default function KarmicCalendarPage() {
  return (
    <div className="container py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Karmic Calendar</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Navigate your path through the stars with our detailed astrological calendar.
          Plan your activities in harmony with cosmic energies.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="space-y-6 lg:col-span-1">
          {/* Current Influences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Current Influences
              </CardTitle>
              <CardDescription>
                Active planetary positions and their effects
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentInfluences.map((influence, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{influence.planet}</span>
                    <span className="text-sm text-muted-foreground">{influence.sign}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {influence.house} • {influence.aspect}
                  </div>
                  <p className="text-sm border-l-2 border-primary pl-2">
                    {influence.interpretation}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Transits */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Transits
              </CardTitle>
              <CardDescription>
                Major astrological events
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingTransits.map((transit, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">
                      {new Date(transit.date).toLocaleDateString('default', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="text-sm text-muted-foreground">{transit.event}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {transit.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Calendar */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Overview</CardTitle>
              <CardDescription>
                View daily astrological influences and plan your activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <KarmicCalendar />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Legend */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-sm">Calendar Legend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/20" />
              <span className="text-sm">Very Favorable</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/20" />
              <span className="text-sm">Favorable</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-orange-100 dark:bg-orange-900/20" />
              <span className="text-sm">Challenging</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-100 dark:bg-red-900/20" />
              <span className="text-sm">Very Challenging</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 