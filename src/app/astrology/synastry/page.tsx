'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { calculatePlanetaryPositions } from '@/lib/astrology-service';

interface BirthInfo {
  name: string;
  date: string;
  time: string;
  location: string;
  zodiacSign: string;
}

interface CompatibilityScore {
  overall: number;
  romance: number;
  friendship: number;
  communication: number;
  values: number;
}

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const calculateCompatibility = (person1: BirthInfo, person2: BirthInfo): CompatibilityScore => {
  // This is a placeholder for actual compatibility calculations
  // In production, this would use proper astrological calculations
  const score = Math.random() * 100;
  return {
    overall: score,
    romance: score * 0.8 + Math.random() * 20,
    friendship: score * 0.7 + Math.random() * 30,
    communication: score * 0.9 + Math.random() * 10,
    values: score * 0.6 + Math.random() * 40,
  };
};

export default function SynastryPage() {
  const [person1, setPerson1] = useState<BirthInfo>({
    name: '',
    date: '',
    time: '',
    location: '',
    zodiacSign: '',
  });

  const [person2, setPerson2] = useState<BirthInfo>({
    name: '',
    date: '',
    time: '',
    location: '',
    zodiacSign: '',
  });

  const [compatibility, setCompatibility] = useState<CompatibilityScore | null>(null);

  const handleCalculate = () => {
    const score = calculateCompatibility(person1, person2);
    setCompatibility(score);
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Astrological Compatibility</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover your astrological compatibility with another person. Enter birth details for both
          people to see how your stars align in various aspects of life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Person 1 */}
        <Card>
          <CardHeader>
            <CardTitle>Person 1</CardTitle>
            <CardDescription>Enter your birth details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name1">Name</Label>
              <Input
                id="name1"
                value={person1.name}
                onChange={(e) => setPerson1({ ...person1, name: e.target.value })}
                placeholder="Enter name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date1">Birth Date</Label>
              <Input
                id="date1"
                type="date"
                value={person1.date}
                onChange={(e) => setPerson1({ ...person1, date: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time1">Birth Time</Label>
              <Input
                id="time1"
                type="time"
                value={person1.time}
                onChange={(e) => setPerson1({ ...person1, time: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location1">Birth Location</Label>
              <Input
                id="location1"
                value={person1.location}
                onChange={(e) => setPerson1({ ...person1, location: e.target.value })}
                placeholder="City, Country"
              />
            </div>
            <div className="space-y-2">
              <Label>Zodiac Sign</Label>
              <Select
                value={person1.zodiacSign}
                onValueChange={(value) => setPerson1({ ...person1, zodiacSign: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select zodiac sign" />
                </SelectTrigger>
                <SelectContent>
                  {zodiacSigns.map((sign) => (
                    <SelectItem key={sign} value={sign}>
                      {sign}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Person 2 */}
        <Card>
          <CardHeader>
            <CardTitle>Person 2</CardTitle>
            <CardDescription>Enter their birth details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name2">Name</Label>
              <Input
                id="name2"
                value={person2.name}
                onChange={(e) => setPerson2({ ...person2, name: e.target.value })}
                placeholder="Enter name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date2">Birth Date</Label>
              <Input
                id="date2"
                type="date"
                value={person2.date}
                onChange={(e) => setPerson2({ ...person2, date: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time2">Birth Time</Label>
              <Input
                id="time2"
                type="time"
                value={person2.time}
                onChange={(e) => setPerson2({ ...person2, time: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location2">Birth Location</Label>
              <Input
                id="location2"
                value={person2.location}
                onChange={(e) => setPerson2({ ...person2, location: e.target.value })}
                placeholder="City, Country"
              />
            </div>
            <div className="space-y-2">
              <Label>Zodiac Sign</Label>
              <Select
                value={person2.zodiacSign}
                onValueChange={(value) => setPerson2({ ...person2, zodiacSign: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select zodiac sign" />
                </SelectTrigger>
                <SelectContent>
                  {zodiacSigns.map((sign) => (
                    <SelectItem key={sign} value={sign}>
                      {sign}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button
          size="lg"
          onClick={handleCalculate}
          disabled={!person1.name || !person2.name}
        >
          <Heart className="mr-2 h-4 w-4" />
          Calculate Compatibility
        </Button>
      </div>

      {compatibility && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Compatibility Results</CardTitle>
              <CardDescription>
                Analysis based on planetary positions and aspects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="details">Detailed Analysis</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <div className="text-center py-8">
                    <div className="text-6xl font-bold mb-4">
                      {Math.round(compatibility.overall)}%
                    </div>
                    <p className="text-muted-foreground">
                      Overall Compatibility Score
                    </p>
                  </div>
                  <div className="grid gap-4">
                    {Object.entries(compatibility)
                      .filter(([key]) => key !== 'overall')
                      .map(([key, value]) => (
                        <div
                          key={key}
                          className="flex items-center justify-between"
                        >
                          <span className="capitalize">{key}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-48 h-2 bg-secondary rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-primary"
                                initial={{ width: 0 }}
                                animate={{ width: `${value}%` }}
                                transition={{ duration: 1, delay: 0.2 }}
                              />
                            </div>
                            <span className="w-12 text-right">
                              {Math.round(value)}%
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="details" className="space-y-4">
                  <div className="prose dark:prose-invert max-w-none">
                    <h3>Planetary Aspects</h3>
                    <p>
                      The compatibility between {person1.name} and {person2.name} is
                      influenced by several key planetary aspects:
                    </p>
                    <ul>
                      <li>
                        Sun-Moon Harmony: Their luminaries form a {' '}
                        {compatibility.overall > 70 ? 'harmonious' : 'challenging'} aspect
                      </li>
                      <li>
                        Venus-Mars Dynamic: The relationship between their Venus and Mars
                        positions suggests {compatibility.romance > 70 ? 'strong' : 'moderate'} romantic compatibility
                      </li>
                      <li>
                        Mercury Alignment: Their Mercury positions indicate {' '}
                        {compatibility.communication > 70 ? 'excellent' : 'developing'} communication potential
                      </li>
                    </ul>
                    <h3>Recommendations</h3>
                    <p>
                      Based on their astrological compatibility, here are some suggestions
                      for harmonious interaction:
                    </p>
                    <ul>
                      <li>Focus on shared intellectual interests</li>
                      <li>Maintain open and honest communication</li>
                      <li>Respect each other's need for independence</li>
                      <li>Create space for emotional expression</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
} 