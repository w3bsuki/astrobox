'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Moon, Sun, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  calculateMoonPhase,
  calculatePlanetaryPositions,
  calculateDailyEnergy,
  getUpcomingTransits,
} from '@/lib/astrology-service';

interface DayInfo {
  date: Date;
  moonPhase: string;
  energy: 'very-favorable' | 'favorable' | 'neutral' | 'challenging' | 'very-challenging';
  transits: {
    planet: string;
    event: string;
    impact: string;
  }[];
  planetaryPositions: Array<{
    planet: string;
    sign: string;
    degree: string;
    house: string;
  }>;
}

const moonPhaseSymbols = {
  'new': '🌑',
  'waxing-crescent': '🌒',
  'first-quarter': '🌓',
  'waxing-gibbous': '🌔',
  'full': '🌕',
  'waning-gibbous': '🌖',
  'last-quarter': '🌗',
  'waning-crescent': '🌘',
};

const energyColors = {
  'very-favorable': 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300',
  'favorable': 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300',
  'neutral': 'bg-gray-100 dark:bg-gray-900/20 text-gray-700 dark:text-gray-300',
  'challenging': 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300',
  'very-challenging': 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300',
};

export default function KarmicCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<DayInfo | null>(null);
  const [monthData, setMonthData] = useState<DayInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateMonthData = async () => {
      setLoading(true);
      const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getDate();

      const data: DayInfo[] = await Promise.all(
        Array.from({ length: daysInMonth }, async (_, i) => {
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1);
          const planetaryPositions = calculatePlanetaryPositions(date);
          const { energy } = calculateDailyEnergy(date, planetaryPositions);
          const transits = getUpcomingTransits(date, date).filter(
            transit => transit.date === date.toISOString().split('T')[0]
          );

          return {
            date,
            moonPhase: calculateMoonPhase(date),
            energy,
            transits,
            planetaryPositions,
          };
        })
      );

      setMonthData(data);
      setLoading(false);
    };

    generateMonthData();
  }, [currentDate]);

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const daysInPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-4">
        {/* Day Labels */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-medium text-sm py-2">
            {day}
          </div>
        ))}

        {/* Previous Month Days */}
        {Array.from({ length: firstDayOfMonth }, (_, i) => (
          <div
            key={`prev-${i}`}
            className="p-2 text-muted-foreground text-sm text-center"
          >
            {daysInPrevMonth - firstDayOfMonth + i + 1}
          </div>
        ))}

        {/* Current Month Days */}
        {loading ? (
          <div className="col-span-7 py-20 text-center text-muted-foreground">
            Loading calendar data...
          </div>
        ) : (
          monthData.map((dayInfo, index) => (
            <motion.div
              key={dayInfo.date.toISOString()}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.01 }}
              className={`relative p-2 rounded-lg border cursor-pointer hover:border-primary transition-colors ${
                energyColors[dayInfo.energy]
              }`}
              onClick={() => setSelectedDay(dayInfo)}
            >
              <div className="text-sm font-medium mb-1">
                {dayInfo.date.getDate()}
              </div>
              <div className="text-lg" title="Moon Phase">
                {moonPhaseSymbols[dayInfo.moonPhase as keyof typeof moonPhaseSymbols]}
              </div>
              {dayInfo.transits.length > 0 && (
                <div className="absolute top-1 right-1">
                  <Star className="h-3 w-3" />
                </div>
              )}
            </motion.div>
          ))
        )}
      </div>

      {/* Selected Day Details */}
      <AnimatePresence>
        {selectedDay && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>
                  {selectedDay.date.toLocaleDateString('default', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}
                </CardTitle>
                <CardDescription>
                  Daily Astrological Influences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">
                    {moonPhaseSymbols[selectedDay.moonPhase as keyof typeof moonPhaseSymbols]}
                  </div>
                  <div>
                    <p className="font-medium">Moon Phase</p>
                    <p className="text-sm text-muted-foreground capitalize">
                      {selectedDay.moonPhase.replace('-', ' ')}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-2">Energy Level</p>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm capitalize ${
                    energyColors[selectedDay.energy]
                  }`}>
                    {selectedDay.energy.replace('-', ' ')}
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-2">Planetary Positions</p>
                  <div className="grid gap-2">
                    {selectedDay.planetaryPositions.map((position, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="font-medium">{position.planet}</span>
                        <span className="text-muted-foreground">
                          {position.sign} {position.degree}° (House {position.house})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedDay.transits.length > 0 && (
                  <div>
                    <p className="font-medium mb-2">Planetary Transits</p>
                    {selectedDay.transits.map((transit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Star className="h-4 w-4" />
                        <span>
                          {transit.planet} {transit.event} - {transit.impact}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 