'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface PlanetaryPosition {
  planet: string;
  sign: string;
  degree: string;
  house: string;
  aspect?: string;
}

interface BirthChartWheelProps {
  planetaryPositions?: PlanetaryPosition[];
  className?: string;
}

interface Aspect {
  planet1: string;
  planet2: string;
  type: 'conjunction' | 'opposition' | 'trine' | 'square' | 'sextile';
  degree: number;
}

const zodiacSigns = [
  { name: 'Aries', symbol: '♈︎', degree: 0, element: 'Fire', ruler: 'Mars' },
  { name: 'Taurus', symbol: '♉︎', degree: 30, element: 'Earth', ruler: 'Venus' },
  { name: 'Gemini', symbol: '♊︎', degree: 60, element: 'Air', ruler: 'Mercury' },
  { name: 'Cancer', symbol: '♋︎', degree: 90, element: 'Water', ruler: 'Moon' },
  { name: 'Leo', symbol: '♌︎', degree: 120, element: 'Fire', ruler: 'Sun' },
  { name: 'Virgo', symbol: '♍︎', degree: 150, element: 'Earth', ruler: 'Mercury' },
  { name: 'Libra', symbol: '♎︎', degree: 180, element: 'Air', ruler: 'Venus' },
  { name: 'Scorpio', symbol: '♏︎', degree: 210, element: 'Water', ruler: 'Pluto' },
  { name: 'Sagittarius', symbol: '♐︎', degree: 240, element: 'Fire', ruler: 'Jupiter' },
  { name: 'Capricorn', symbol: '♑︎', degree: 270, element: 'Earth', ruler: 'Saturn' },
  { name: 'Aquarius', symbol: '♒︎', degree: 300, element: 'Air', ruler: 'Uranus' },
  { name: 'Pisces', symbol: '♓︎', degree: 330, element: 'Water', ruler: 'Neptune' },
];

const planetSymbols = {
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

const aspectColors = {
  conjunction: '#FFD700', // Gold
  opposition: '#FF4444', // Red
  trine: '#44FF44',     // Green
  square: '#FF44FF',    // Magenta
  sextile: '#4444FF',   // Blue
};

export default function BirthChartWheel({ planetaryPositions = [], className = '' }: BirthChartWheelProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);
  const [hoveredSign, setHoveredSign] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const size = 600;
  const center = size / 2;
  const radius = {
    outer: size * 0.45,
    zodiac: size * 0.4,
    houses: size * 0.35,
    planets: size * 0.3,
    inner: size * 0.1,
  };

  // Function to calculate point on circle
  const getPointOnCircle = (degree: number, r: number) => {
    const radian = (degree - 90) * (Math.PI / 180);
    return {
      x: center + r * Math.cos(radian),
      y: center + r * Math.sin(radian),
    };
  };

  // Function to calculate aspects between planets
  const calculateAspects = (): Aspect[] => {
    const aspects: Aspect[] = [];
    for (let i = 0; i < planetaryPositions.length; i++) {
      for (let j = i + 1; j < planetaryPositions.length; j++) {
        const planet1 = planetaryPositions[i];
        const planet2 = planetaryPositions[j];
        const sign1Index = zodiacSigns.findIndex(sign => sign.name === planet1.sign);
        const sign2Index = zodiacSigns.findIndex(sign => sign.name === planet2.sign);
        const degree1 = sign1Index * 30 + parseInt(planet1.degree);
        const degree2 = sign2Index * 30 + parseInt(planet2.degree);
        const difference = Math.abs(degree1 - degree2);

        // Define aspect types based on degree differences
        if (difference <= 10) aspects.push({ planet1: planet1.planet, planet2: planet2.planet, type: 'conjunction', degree: difference });
        else if (Math.abs(difference - 180) <= 10) aspects.push({ planet1: planet1.planet, planet2: planet2.planet, type: 'opposition', degree: difference });
        else if (Math.abs(difference - 120) <= 10) aspects.push({ planet1: planet1.planet, planet2: planet2.planet, type: 'trine', degree: difference });
        else if (Math.abs(difference - 90) <= 10) aspects.push({ planet1: planet1.planet, planet2: planet2.planet, type: 'square', degree: difference });
        else if (Math.abs(difference - 60) <= 10) aspects.push({ planet1: planet1.planet, planet2: planet2.planet, type: 'sextile', degree: difference });
      }
    }
    return aspects;
  };

  // Function to draw aspect lines
  const drawAspectLines = () => {
    const aspects = calculateAspects();
    return aspects.map((aspect, index) => {
      const planet1Pos = planetaryPositions.find(p => p.planet === aspect.planet1);
      const planet2Pos = planetaryPositions.find(p => p.planet === aspect.planet2);
      if (!planet1Pos || !planet2Pos) return null;

      const sign1Index = zodiacSigns.findIndex(sign => sign.name === planet1Pos.sign);
      const sign2Index = zodiacSigns.findIndex(sign => sign.name === planet2Pos.sign);
      const degree1 = sign1Index * 30 + parseInt(planet1Pos.degree);
      const degree2 = sign2Index * 30 + parseInt(planet2Pos.degree);
      
      const point1 = getPointOnCircle(degree1, radius.planets - 15);
      const point2 = getPointOnCircle(degree2, radius.planets - 15);

      return (
        <motion.line
          key={`${aspect.planet1}-${aspect.planet2}`}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1, delay: index * 0.1 }}
          x1={point1.x}
          y1={point1.y}
          x2={point2.x}
          y2={point2.y}
          stroke={aspectColors[aspect.type]}
          strokeWidth="1"
          strokeDasharray="4,4"
          className={`transition-opacity duration-200 ${
            hoveredPlanet && 
            (hoveredPlanet === aspect.planet1 || hoveredPlanet === aspect.planet2) 
              ? 'opacity-100' 
              : 'opacity-30'
          }`}
        />
      );
    });
  };

  // Function to draw zodiac wheel
  const drawZodiacWheel = () => {
    return (
      <g>
        {/* Aspect lines */}
        {drawAspectLines()}

        {/* Outer circle */}
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
          cx={center}
          cy={center}
          r={radius.outer}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />

        {/* Zodiac segments */}
        {zodiacSigns.map((sign, index) => {
          const startAngle = sign.degree;
          const endAngle = startAngle + 30;
          const startPoint = getPointOnCircle(startAngle, radius.outer);
          const midPoint = getPointOnCircle(startAngle + 15, radius.zodiac + 20);

          return (
            <motion.g
              key={sign.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredSign(sign.name)}
              onMouseLeave={() => setHoveredSign(null)}
              className="cursor-pointer"
            >
              {/* Segment line */}
              <line
                x1={center}
                y1={center}
                x2={startPoint.x}
                y2={startPoint.y}
                stroke="currentColor"
                strokeWidth="1"
              />
              
              {/* Zodiac symbol */}
              <text
                x={midPoint.x}
                y={midPoint.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="20"
                fill="currentColor"
                className={`transition-transform duration-200 ${
                  hoveredSign === sign.name ? 'scale-125' : 'scale-100'
                }`}
              >
                {sign.symbol}
              </text>

              {/* Tooltip */}
              {hoveredSign === sign.name && (
                <g>
                  <rect
                    x={midPoint.x + 15}
                    y={midPoint.y - 30}
                    width="120"
                    height="60"
                    rx="4"
                    fill="var(--background)"
                    stroke="var(--border)"
                  />
                  <text
                    x={midPoint.x + 75}
                    y={midPoint.y - 15}
                    textAnchor="middle"
                    fontSize="12"
                    fill="currentColor"
                  >
                    {sign.name}
                  </text>
                  <text
                    x={midPoint.x + 75}
                    y={midPoint.y + 5}
                    textAnchor="middle"
                    fontSize="10"
                    fill="var(--muted-foreground)"
                  >
                    Element: {sign.element}
                  </text>
                  <text
                    x={midPoint.x + 75}
                    y={midPoint.y + 20}
                    textAnchor="middle"
                    fontSize="10"
                    fill="var(--muted-foreground)"
                  >
                    Ruler: {sign.ruler}
                  </text>
                </g>
              )}
            </motion.g>
          );
        })}

        {/* House circles */}
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          cx={center}
          cy={center}
          r={radius.houses}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          cx={center}
          cy={center}
          r={radius.planets}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          cx={center}
          cy={center}
          r={radius.inner}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />

        {/* House numbers */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = i * 30;
          const point = getPointOnCircle(angle + 15, radius.houses - 20);
          return (
            <motion.text
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              x={point.x}
              y={point.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="12"
              fill="currentColor"
            >
              {((i + 1) % 12) + 1}
            </motion.text>
          );
        })}

        {/* Planetary positions */}
        {planetaryPositions.map((position, index) => {
          const signIndex = zodiacSigns.findIndex(sign => sign.name === position.sign);
          const degreeInSign = parseInt(position.degree);
          const totalDegree = signIndex * 30 + degreeInSign;
          const point = getPointOnCircle(totalDegree, radius.planets - 15 - (index * 15) % 30);

          return (
            <motion.g
              key={position.planet}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
              onMouseEnter={() => setHoveredPlanet(position.planet)}
              onMouseLeave={() => setHoveredPlanet(null)}
              className="cursor-pointer"
            >
              <text
                x={point.x}
                y={point.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fill="currentColor"
                className={`transition-transform duration-200 ${
                  hoveredPlanet === position.planet ? 'scale-125' : 'scale-100'
                }`}
              >
                {planetSymbols[position.planet as keyof typeof planetSymbols]}
              </text>

              {/* Tooltip */}
              {hoveredPlanet === position.planet && (
                <g>
                  <rect
                    x={point.x + 15}
                    y={point.y - 30}
                    width="140"
                    height="60"
                    rx="4"
                    fill="var(--background)"
                    stroke="var(--border)"
                  />
                  <text
                    x={point.x + 85}
                    y={point.y - 15}
                    textAnchor="middle"
                    fontSize="12"
                    fill="currentColor"
                  >
                    {position.planet}
                  </text>
                  <text
                    x={point.x + 85}
                    y={point.y + 5}
                    textAnchor="middle"
                    fontSize="10"
                    fill="var(--muted-foreground)"
                  >
                    {position.sign} {position.degree}°
                  </text>
                  <text
                    x={point.x + 85}
                    y={point.y + 20}
                    textAnchor="middle"
                    fontSize="10"
                    fill="var(--muted-foreground)"
                  >
                    House {position.house}
                  </text>
                </g>
              )}
            </motion.g>
          );
        })}
      </g>
    );
  };

  // Zoom controls
  const handleZoom = (delta: number) => {
    setScale(prev => Math.min(Math.max(0.5, prev + delta * 0.1), 2));
  };

  return (
    <div className={`relative ${className}`}>
      {/* Zoom controls */}
      <div className="absolute top-4 right-4 space-x-2">
        <button
          onClick={() => handleZoom(1)}
          className="p-2 rounded-full bg-background border hover:bg-accent"
        >
          +
        </button>
        <button
          onClick={() => handleZoom(-1)}
          className="p-2 rounded-full bg-background border hover:bg-accent"
        >
          -
        </button>
      </div>

      <div
        className="overflow-hidden"
        onWheel={(e) => handleZoom(e.deltaY > 0 ? -1 : 1)}
      >
        <motion.div
          animate={{ scale }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <svg
            ref={svgRef}
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="w-full h-full"
          >
            {drawZodiacWheel()}
          </svg>
        </motion.div>
      </div>
    </div>
  );
} 