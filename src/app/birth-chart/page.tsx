'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { CalendarIcon, Clock, MapPin, Star } from 'lucide-react';
import BirthChartWheel from '@/components/astrology/birth-chart-wheel';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { calculatePlanetaryPositions } from '@/lib/astrology-service';

// Sample data for planetary positions
const planetaryPositions = [
  { planet: 'Sun', sign: 'Leo', degree: '15', house: '10th', aspect: 'Trine Moon' },
  { planet: 'Moon', sign: 'Sagittarius', degree: '23', house: '2nd', aspect: 'Square Mars' },
  { planet: 'Mercury', sign: 'Virgo', degree: '8', house: '11th', aspect: 'Sextile Venus' },
  { planet: 'Venus', sign: 'Libra', degree: '3', house: '12th', aspect: 'Conjunct Ascendant' },
  { planet: 'Mars', sign: 'Scorpio', degree: '19', house: '1st', aspect: 'Opposition Jupiter' },
  { planet: 'Jupiter', sign: 'Taurus', degree: '27', house: '7th', aspect: 'Trine Saturn' },
  { planet: 'Saturn', sign: 'Capricorn', degree: '11', house: '3rd', aspect: 'Square Uranus' },
  { planet: 'Uranus', sign: 'Aquarius', degree: '5', house: '4th', aspect: 'Sextile Neptune' },
  { planet: 'Neptune', sign: 'Pisces', degree: '21', house: '5th', aspect: 'Trine Pluto' },
  { planet: 'Pluto', sign: 'Scorpio', degree: '29', house: '1st', aspect: 'Square Sun' },
];

// Sample house interpretations
const houseInterpretations = [
  {
    house: '1st House',
    title: 'House of Self',
    ruling: 'Appearance, Identity, and New Beginnings',
    description: "The First House represents your outward personality, physical appearance, and how you approach life. It is the \"mask\" you wear in public.",
  },
  {
    house: '2nd House',
    title: 'House of Value',
    ruling: 'Money, Possessions, and Self-Worth',
    description: 'This house governs your material resources, personal values, and earning capacity. It represents what you value most.',
  },
  {
    house: '3rd House',
    title: 'House of Communication',
    ruling: 'Learning, Communication, and Siblings',
    description: 'This house rules communication, early education, siblings, and short journeys. It shows how you think and express yourself.',
  },
  {
    house: '4th House',
    title: 'House of Home',
    ruling: 'Home, Family, and Roots',
    description: 'The foundation of your chart, representing your home, family, and emotional security. It shows your connection to your roots.',
  },
  {
    house: '5th House',
    title: 'House of Pleasure',
    ruling: 'Creativity, Romance, and Self-Expression',
    description: 'This house governs creativity, romance, pleasure, and children. It shows how you express yourself creatively and find joy.',
  },
  {
    house: '6th House',
    title: 'House of Service',
    ruling: 'Health, Work, and Daily Routine',
    description: 'This house rules your daily work, health habits, and service to others. It shows how you handle responsibilities and self-improvement.',
  },
  {
    house: '7th House',
    title: 'House of Partnership',
    ruling: 'Relationships and Marriage',
    description: 'The house of partnerships, both personal and professional. It shows how you relate to others one-on-one.',
  },
  {
    house: '8th House',
    title: 'House of Transformation',
    ruling: 'Shared Resources, Death, and Rebirth',
    description: 'This house governs transformation, shared resources, and deep psychological matters. It represents life cycles and regeneration.',
  },
  {
    house: '9th House',
    title: 'House of Philosophy',
    ruling: 'Higher Learning, Travel, and Beliefs',
    description: 'The house of higher learning, long-distance travel, and philosophy. It shows your worldview and quest for meaning.',
  },
  {
    house: '10th House',
    title: 'House of Career',
    ruling: 'Career, Status, and Public Image',
    description: 'This house represents your career, public status, and life direction. It shows how you appear to the world at large.',
  },
  {
    house: '11th House',
    title: 'House of Community',
    ruling: 'Friends, Groups, and Hopes',
    description: 'The house of friendships, groups, and collective endeavors. It represents your social circle and future aspirations.',
  },
  {
    house: '12th House',
    title: 'House of Spirituality',
    ruling: 'Spirituality, Secrets, and Subconscious',
    description: 'This house rules the subconscious, spirituality, and hidden matters. It represents your connection to the divine and inner world.',
  },
];

export default function BirthChartPage() {
  const [birthData, setBirthData] = useState({
    name: '',
    month: '',
    day: '',
    year: '',
    hour: '',
    minute: '',
    place: '',
  });

  const [showChart, setShowChart] = useState(false);

  const handleCalculate = () => {
    // Here we would normally make an API call to calculate the actual positions
    setShowChart(true);
  };

  return (
    <div className="container py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Birth Chart Calculator</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover your unique astrological blueprint with our detailed birth chart analysis. Enter your birth details below for a comprehensive reading.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Birth Details Form */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Enter Birth Details</CardTitle>
            <CardDescription>
              Provide accurate information for precise calculations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={birthData.name}
                onChange={(e) => setBirthData({ ...birthData, name: e.target.value })}
              />
            </div>

            {/* Birth Date */}
            <div className="space-y-2">
              <Label htmlFor="birthDate">Birth Date</Label>
              <div className="flex gap-4">
                <Select
                  onValueChange={(value) => setBirthData({ ...birthData, month: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => (
                      <SelectItem key={i + 1} value={String(i + 1)}>
                        {new Date(0, i).toLocaleString('default', { month: 'long' })}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  onValueChange={(value) => setBirthData({ ...birthData, day: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Day" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 31 }, (_, i) => (
                      <SelectItem key={i + 1} value={String(i + 1)}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  onValueChange={(value) => setBirthData({ ...birthData, year: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 100 }, (_, i) => (
                      <SelectItem key={i} value={String(2024 - i)}>
                        {2024 - i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Birth Time */}
            <div className="space-y-2">
              <Label htmlFor="birthTime">Birth Time</Label>
              <div className="flex gap-4">
                <Select
                  onValueChange={(value) => setBirthData({ ...birthData, hour: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Hour" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }, (_, i) => (
                      <SelectItem key={i} value={String(i)}>
                        {i.toString().padStart(2, '0')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  onValueChange={(value) => setBirthData({ ...birthData, minute: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Minute" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 60 }, (_, i) => (
                      <SelectItem key={i} value={String(i)}>
                        {i.toString().padStart(2, '0')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Birth Place */}
            <div className="space-y-2">
              <Label htmlFor="birthPlace">Birth Place</Label>
              <Input
                id="birthPlace"
                placeholder="Enter city, country"
                value={birthData.place}
                onChange={(e) => setBirthData({ ...birthData, place: e.target.value })}
              />
            </div>

            <Button className="w-full" onClick={handleCalculate}>
              Calculate Birth Chart
            </Button>
          </CardContent>
        </Card>

        {/* Chart Display and Interpretations */}
        <div className="md:col-span-2 space-y-6">
          {/* Birth Chart Wheel */}
          <Card>
            <CardHeader>
              <CardTitle>Your Birth Chart</CardTitle>
              <CardDescription>
                A visual representation of the planetary positions at your time of birth
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showChart ? (
                <BirthChartWheel
                  planetaryPositions={planetaryPositions}
                  className="w-full max-w-2xl mx-auto"
                />
              ) : (
                <div className="aspect-square bg-muted rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground">Enter your birth details to generate chart</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Interpretations */}
          <Tabs defaultValue="planets">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="planets">
                <Star className="h-4 w-4 mr-2" />
                Planetary Positions
              </TabsTrigger>
              <TabsTrigger value="houses">
                <MapPin className="h-4 w-4 mr-2" />
                Houses
              </TabsTrigger>
              <TabsTrigger value="aspects">
                <Clock className="h-4 w-4 mr-2" />
                Aspects
              </TabsTrigger>
            </TabsList>

            {/* Planets Tab */}
            <TabsContent value="planets">
              <Card>
                <CardHeader>
                  <CardTitle>Planetary Positions</CardTitle>
                  <CardDescription>
                    The location of planets in your birth chart
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {planetaryPositions.map((position) => (
                      <div
                        key={position.planet}
                        className="flex items-center justify-between p-4 rounded-lg border"
                      >
                        <div>
                          <p className="font-medium">{position.planet}</p>
                          <p className="text-sm text-muted-foreground">
                            {position.sign} {position.degree}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{position.house} House</p>
                          <p className="text-sm text-muted-foreground">
                            {position.aspect}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Houses Tab */}
            <TabsContent value="houses">
              <Card>
                <CardHeader>
                  <CardTitle>House Placements</CardTitle>
                  <CardDescription>
                    The twelve houses and their meanings in your chart
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {houseInterpretations.map((house) => (
                      <div key={house.house} className="space-y-2">
                        <h3 className="text-lg font-medium">{house.house} - {house.title}</h3>
                        <p className="text-sm font-medium text-muted-foreground">
                          {house.ruling}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {house.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Aspects Tab */}
            <TabsContent value="aspects">
              <Card>
                <CardHeader>
                  <CardTitle>Planetary Aspects</CardTitle>
                  <CardDescription>
                    The relationships between planets in your chart
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Aspect grid would go here */}
                    <p className="text-muted-foreground">
                      Aspect interpretations would be displayed here
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
} 