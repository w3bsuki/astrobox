import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const zodiacSigns = [
  { name: 'Aries', dates: 'Mar 21 - Apr 19', element: 'Fire', symbol: '♈︎' },
  { name: 'Taurus', dates: 'Apr 20 - May 20', element: 'Earth', symbol: '♉︎' },
  { name: 'Gemini', dates: 'May 21 - Jun 20', element: 'Air', symbol: '♊︎' },
  { name: 'Cancer', dates: 'Jun 21 - Jul 22', element: 'Water', symbol: '♋︎' },
  { name: 'Leo', dates: 'Jul 23 - Aug 22', element: 'Fire', symbol: '♌︎' },
  { name: 'Virgo', dates: 'Aug 23 - Sep 22', element: 'Earth', symbol: '♍︎' },
  { name: 'Libra', dates: 'Sep 23 - Oct 22', element: 'Air', symbol: '♎︎' },
  { name: 'Scorpio', dates: 'Oct 23 - Nov 21', element: 'Water', symbol: '♏︎' },
  { name: 'Sagittarius', dates: 'Nov 22 - Dec 21', element: 'Fire', symbol: '♐︎' },
  { name: 'Capricorn', dates: 'Dec 22 - Jan 19', element: 'Earth', symbol: '♑︎' },
  { name: 'Aquarius', dates: 'Jan 20 - Feb 18', element: 'Air', symbol: '♒︎' },
  { name: 'Pisces', dates: 'Feb 19 - Mar 20', element: 'Water', symbol: '♓︎' },
];

const elementColors = {
  Fire: 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300',
  Earth: 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300',
  Air: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300',
  Water: 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300',
};

export default function HoroscopePage() {
  return (
    <div className="container py-10">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Daily Horoscope & Cosmic Insights
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover your daily cosmic guidance, personalized horoscope readings, and astrological insights
          to navigate your path through the stars.
        </p>
      </div>

      {/* Featured Daily Reading */}
      <Card className="mb-16">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Star className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle>Today's Cosmic Energy</CardTitle>
          <CardDescription>
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="max-w-2xl mx-auto text-center">
          <p className="text-lg mb-6">
            The Moon's transition through Libra brings harmony and balance to all zodiac signs today.
            It's an excellent time for relationship building and creative endeavors.
          </p>
          <Button size="lg">
            Get Your Personal Reading <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>

      {/* Zodiac Signs Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center mb-8">Choose Your Zodiac Sign</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {zodiacSigns.map((sign) => (
            <Card
              key={sign.name}
              className="group hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-4xl">{sign.symbol}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${elementColors[sign.element as keyof typeof elementColors]}`}
                  >
                    {sign.element}
                  </span>
                </div>
                <CardTitle>{sign.name}</CardTitle>
                <CardDescription>{sign.dates}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                  Read Horoscope <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Features */}
      <div className="grid gap-6 md:grid-cols-3 mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Personal Horoscope</CardTitle>
            <CardDescription>
              Get a detailed reading based on your birth chart
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Calculate Birth Chart
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Karmic Calendar</CardTitle>
            <CardDescription>
              Discover your favorable days and cosmic timing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              View Calendar
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Synastry Reading</CardTitle>
            <CardDescription>
              Explore relationship compatibility
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Check Compatibility
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 