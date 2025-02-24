import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { ArrowLeft, Calendar, Star, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// This would come from your database/API
const zodiacData = {
  aries: {
    name: 'Aries',
    dates: 'March 21 - April 19',
    element: 'Fire',
    symbol: '♈︎',
    ruling_planet: 'Mars',
    traits: ['Confident', 'Courageous', 'Enthusiastic', 'Impulsive', 'Natural Leader'],
    compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
    daily_horoscope: {
      general: "Today's planetary alignment brings exciting opportunities for leadership and personal growth. Your natural confidence is heightened, making it an excellent time to start new projects or take the initiative in important matters.",
      love: "Venus's position suggests romantic encounters could be particularly meaningful today. Single Aries might find themselves attracted to someone who challenges them intellectually.",
      career: "Mars empowers your professional ambitions. Your dynamic energy helps you stand out in meetings and presentations. Consider pitching new ideas.",
      health: "Your energy levels are high, but be mindful not to overexert yourself. Balance physical activity with adequate rest.",
      lucky_number: 7,
      lucky_color: 'Red',
    },
    weekly_horoscope: {
      overview: "This week brings a powerful surge of energy as Mars, your ruling planet, forms a harmonious aspect with Jupiter. You'll find yourself particularly effective in group situations and collaborative projects. Your natural leadership abilities are highlighted.",
      love_relationships: "Relationship matters take center stage mid-week. Existing partnerships benefit from honest communication, while single Aries might encounter intriguing new connections through social activities.",
      career_money: "Professional opportunities abound, particularly in areas requiring initiative and innovation. Financial decisions made this week have long-term positive implications.",
      health_wellness: "Focus on establishing balanced routines. The stars support starting new fitness regimens or health practices.",
    },
    monthly_horoscope: {
      overview: "March 2024 presents a significant period of personal growth and self-discovery. The Sun's position in your sign amplifies your natural characteristics and brings opportunities for advancement in various life areas.",
      major_transits: [
        {
          date: "March 5",
          event: "Venus enters your sign",
          impact: "Enhanced charm and attraction potential"
        },
        {
          date: "March 19",
          event: "Full Moon in your partnership sector",
          impact: "Relationship developments and realizations"
        }
      ],
      focus_areas: [
        "Personal development and self-expression",
        "Career advancement and recognition",
        "Relationship growth and understanding",
        "Financial planning and investment"
      ]
    }
  }
  // ... other signs would be here
};

interface PageProps {
  params: {
    sign: string;
  };
}

export default function ZodiacSignPage({ params }: PageProps) {
  // In production, this would fetch data for the specific sign
  const sign = zodiacData.aries; // Using Aries as example

  return (
    <div className="container py-10">
      {/* Navigation */}
      <div className="flex items-center gap-2 mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/horoscope">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Horoscopes
          </Link>
        </Button>
      </div>

      {/* Sign Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-primary/10 p-6">
            <span className="text-6xl">{sign.symbol}</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">{sign.name}</h1>
        <p className="text-lg text-muted-foreground mb-4">{sign.dates}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {sign.traits.map((trait) => (
            <span
              key={trait}
              className="px-3 py-1 rounded-full bg-muted text-sm font-medium"
            >
              {trait}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-8 text-sm text-muted-foreground">
          <div>
            <span className="font-medium">Element:</span> {sign.element}
          </div>
          <div>
            <span className="font-medium">Ruling Planet:</span> {sign.ruling_planet}
          </div>
          <div>
            <span className="font-medium">Compatible With:</span>{' '}
            {sign.compatibility.join(', ')}
          </div>
        </div>
      </div>

      {/* Horoscope Tabs */}
      <Tabs defaultValue="daily" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="daily" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            Daily
          </TabsTrigger>
          <TabsTrigger value="weekly" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Weekly
          </TabsTrigger>
          <TabsTrigger value="monthly" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Monthly
          </TabsTrigger>
        </TabsList>

        {/* Daily Content */}
        <TabsContent value="daily">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>General Overview</CardTitle>
                <CardDescription>Your daily cosmic guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{sign.daily_horoscope.general}</p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <p className="text-sm font-medium">Lucky Number</p>
                    <p className="text-2xl font-bold">{sign.daily_horoscope.lucky_number}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Lucky Color</p>
                    <p className="text-2xl font-bold">{sign.daily_horoscope.lucky_color}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Love & Relationships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{sign.daily_horoscope.love}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Career & Money</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{sign.daily_horoscope.career}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Health & Wellness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{sign.daily_horoscope.health}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Weekly Content */}
        <TabsContent value="weekly">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Overview</CardTitle>
                <CardDescription>Your cosmic forecast for the week ahead</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">{sign.weekly_horoscope.overview}</p>
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="font-medium mb-2">Love & Relationships</h3>
                    <p className="text-sm text-muted-foreground">
                      {sign.weekly_horoscope.love_relationships}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Career & Money</h3>
                    <p className="text-sm text-muted-foreground">
                      {sign.weekly_horoscope.career_money}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Health & Wellness</h3>
                    <p className="text-sm text-muted-foreground">
                      {sign.weekly_horoscope.health_wellness}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Monthly Content */}
        <TabsContent value="monthly">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Overview</CardTitle>
                <CardDescription>Your cosmic journey this month</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">{sign.monthly_horoscope.overview}</p>
                
                <h3 className="font-medium mb-4">Major Transits & Events</h3>
                <div className="space-y-4 mb-6">
                  {sign.monthly_horoscope.major_transits.map((transit) => (
                    <div
                      key={transit.date}
                      className="flex items-start gap-4 p-4 rounded-lg border"
                    >
                      <div className="flex-1">
                        <p className="font-medium">{transit.date}</p>
                        <p className="text-sm text-muted-foreground">{transit.event}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {transit.impact}
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="font-medium mb-4">Focus Areas</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {sign.monthly_horoscope.focus_areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Additional Features */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
        <Button variant="outline" className="w-full" asChild>
          <Link href="/birth-chart">Calculate Birth Chart</Link>
        </Button>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/compatibility">Check Compatibility</Link>
        </Button>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/karmic-calendar">View Karmic Calendar</Link>
        </Button>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/tarot">Get Tarot Reading</Link>
        </Button>
      </div>
    </div>
  );
} 