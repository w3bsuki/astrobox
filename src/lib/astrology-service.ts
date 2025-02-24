interface HoroscopeResponse {
  date_range: string;
  current_date: string;
  description: string;
  compatibility: string;
  mood: string;
  color: string;
  lucky_number: string;
  lucky_time: string;
}

interface PlanetaryPosition {
  planet: string;
  sign: string;
  degree: string;
  house: string;
  aspect?: string;
}

interface TransitEvent {
  date: string;
  planet: string;
  event: string;
  impact: string;
}

export async function getDailyHoroscope(sign: string, day: 'today' | 'tomorrow' | 'yesterday' = 'today'): Promise<HoroscopeResponse> {
  const response = await fetch('https://aztro.sameerkumar.website/?' + new URLSearchParams({
    sign: sign.toLowerCase(),
    day,
  }), {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch horoscope data');
  }

  return response.json();
}

// Calculate moon phase based on date
export function calculateMoonPhase(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Calculate Julian date
  let jd = 367 * year - Math.floor((7 * (year + Math.floor((month + 9) / 12))) / 4) + 
           Math.floor((275 * month) / 9) + day - 730530;

  // Calculate moon's age in days (0-29.53)
  let moonAge = (jd % 29.53);

  // Determine moon phase
  if (moonAge < 1.84566) return 'new';
  else if (moonAge < 5.53699) return 'waxing-crescent';
  else if (moonAge < 9.22831) return 'first-quarter';
  else if (moonAge < 12.91963) return 'waxing-gibbous';
  else if (moonAge < 16.61096) return 'full';
  else if (moonAge < 20.30228) return 'waning-gibbous';
  else if (moonAge < 23.99361) return 'last-quarter';
  else if (moonAge < 27.68493) return 'waning-crescent';
  else return 'new';
}

export function calculatePlanetaryPositions(date: Date): PlanetaryPosition[] {
  // This would be replaced with actual ephemeris calculations
  // For now, we'll use the date to generate somewhat realistic positions
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  
  const calculatePosition = (speed: number, startSign: number): { sign: string; degree: string } => {
    const totalDays = dayOfYear * speed;
    const signIndex = (startSign + Math.floor(totalDays / 30)) % 12;
    const degree = Math.floor(totalDays % 30);
    return {
      sign: zodiacSigns[signIndex].name,
      degree: degree.toString(),
    };
  };

  return [
    { planet: 'Sun', ...calculatePosition(1, 0), house: ((dayOfYear % 12) + 1).toString() },
    { planet: 'Moon', ...calculatePosition(13.2, 3), house: ((dayOfYear * 13 % 12) + 1).toString() },
    { planet: 'Mercury', ...calculatePosition(1.2, 1), house: ((dayOfYear * 2 % 12) + 1).toString() },
    { planet: 'Venus', ...calculatePosition(0.8, 2), house: ((dayOfYear * 3 % 12) + 1).toString() },
    { planet: 'Mars', ...calculatePosition(0.5, 4), house: ((dayOfYear * 4 % 12) + 1).toString() },
    { planet: 'Jupiter', ...calculatePosition(0.08, 5), house: ((dayOfYear * 5 % 12) + 1).toString() },
    { planet: 'Saturn', ...calculatePosition(0.03, 6), house: ((dayOfYear * 6 % 12) + 1).toString() },
  ];
}

export function getUpcomingTransits(startDate: Date, endDate: Date): TransitEvent[] {
  const transits: TransitEvent[] = [];
  const currentPositions = calculatePlanetaryPositions(startDate);
  const futurePositions = calculatePlanetaryPositions(endDate);

  // Compare positions to find transits
  currentPositions.forEach((current, i) => {
    const future = futurePositions[i];
    if (current.sign !== future.sign) {
      transits.push({
        date: endDate.toISOString().split('T')[0],
        planet: current.planet,
        event: `enters ${future.sign}`,
        impact: `${current.planet} moves into ${future.sign}, bringing new energy`,
      });
    }
  });

  return transits;
}

export function calculateDailyEnergy(date: Date, planetaryPositions: PlanetaryPosition[]): {
  energy: 'very-favorable' | 'favorable' | 'neutral' | 'challenging' | 'very-challenging';
  interpretation: string;
} {
  // Calculate energy based on planetary aspects
  const aspects = calculateAspects(planetaryPositions);
  let score = 0;

  aspects.forEach(aspect => {
    switch (aspect.aspect) {
      case 'conjunction':
        score += 2;
        break;
      case 'trine':
        score += 3;
        break;
      case 'sextile':
        score += 1;
        break;
      case 'square':
        score -= 2;
        break;
      case 'opposition':
        score -= 1;
        break;
    }
  });

  // Determine energy level based on score
  let energy: 'very-favorable' | 'favorable' | 'neutral' | 'challenging' | 'very-challenging';
  if (score >= 5) energy = 'very-favorable';
  else if (score >= 2) energy = 'favorable';
  else if (score >= -1) energy = 'neutral';
  else if (score >= -4) energy = 'challenging';
  else energy = 'very-challenging';

  return {
    energy,
    interpretation: `Based on ${aspects.length} planetary aspects, overall energy is ${energy.replace('-', ' ')}`,
  };
}

// Helper function to calculate aspects between planets
export function calculateAspects(positions: PlanetaryPosition[]): {
  planet1: string;
  planet2: string;
  aspect: string;
  orb: number;
}[] {
  const aspects: { planet1: string; planet2: string; aspect: string; orb: number; }[] = [];
  
  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      const p1 = positions[i];
      const p2 = positions[j];
      
      const angle = Math.abs(parseInt(p1.degree) - parseInt(p2.degree));
      
      if (angle <= 10) {
        aspects.push({ planet1: p1.planet, planet2: p2.planet, aspect: 'conjunction', orb: angle });
      } else if (Math.abs(angle - 60) <= 10) {
        aspects.push({ planet1: p1.planet, planet2: p2.planet, aspect: 'sextile', orb: Math.abs(angle - 60) });
      } else if (Math.abs(angle - 90) <= 10) {
        aspects.push({ planet1: p1.planet, planet2: p2.planet, aspect: 'square', orb: Math.abs(angle - 90) });
      } else if (Math.abs(angle - 120) <= 10) {
        aspects.push({ planet1: p1.planet, planet2: p2.planet, aspect: 'trine', orb: Math.abs(angle - 120) });
      } else if (Math.abs(angle - 180) <= 10) {
        aspects.push({ planet1: p1.planet, planet2: p2.planet, aspect: 'opposition', orb: Math.abs(angle - 180) });
      }
    }
  }
  
  return aspects;
}

// Constants for astrological calculations
export const zodiacSigns = [
  { name: 'Aries', symbol: '♈', element: 'Fire', color: '#FFD700' },
  { name: 'Taurus', symbol: '♉', element: 'Earth', color: '#C0C0C0' },
  { name: 'Gemini', symbol: '♊', element: 'Air', color: '#FFD700' },
  { name: 'Cancer', symbol: '♋', element: 'Water', color: '#C0C0C0' },
  { name: 'Leo', symbol: '♌', element: 'Fire', color: '#FFD700' },
  { name: 'Virgo', symbol: '♍', element: 'Earth', color: '#C0C0C0' },
  { name: 'Libra', symbol: '♎', element: 'Air', color: '#FFD700' },
  { name: 'Scorpio', symbol: '♏', element: 'Water', color: '#C0C0C0' },
  { name: 'Sagittarius', symbol: '♐', element: 'Fire', color: '#FFD700' },
  { name: 'Capricorn', symbol: '♑', element: 'Earth', color: '#C0C0C0' },
  { name: 'Aquarius', symbol: '♒', element: 'Air', color: '#FFD700' },
  { name: 'Pisces', symbol: '♓', element: 'Water', color: '#C0C0C0' },
] as const;

export type ZodiacSign = typeof zodiacSigns[number];

export const getElementColor = (element: string) => {
  switch (element) {
    case 'Fire':
      return '#FFD700'; // Gold
    case 'Earth':
      return '#C0C0C0'; // Silver
    case 'Air':
      return '#4B0082'; // Indigo
    case 'Water':
      return '#191970'; // Midnight Blue
    default:
      return '#FFD700';
  }
};

export const planetSymbols = {
  Sun: '☉',
  Moon: '☽',
  Mercury: '☿',
  Venus: '♀',
  Mars: '♂',
  Jupiter: '♃',
  Saturn: '♄',
  Uranus: '♅',
  Neptune: '♆',
  Pluto: '♇',
}; 