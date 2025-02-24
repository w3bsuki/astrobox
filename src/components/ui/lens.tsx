'use client';

import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { useState } from "react";

interface LensProps {
  children: React.ReactNode;
  zoomFactor?: number;
  lensSize?: number;
  isStatic?: boolean;
  lensColor?: string;
}

export function Lens({
  children,
  zoomFactor = 1.5,
  lensSize = 200,
  isStatic = false,
  lensColor = "white",
}: LensProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (!isStatic) {
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    }
  }

  const maskImage = useMotionTemplate`radial-gradient(${lensSize}px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Original Content */}
      <div className="w-full h-full">
        {children}
      </div>

      {/* Magnified Content */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none [mask-size:contain] [mask-repeat:no-repeat]"
          style={{
            maskImage,
            WebkitMaskImage: maskImage,
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat'
          }}
        >
          <div
            className="absolute inset-0 transition-transform duration-100"
            style={{
              transform: `scale(${zoomFactor})`,
              transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
            }}
          >
            {children}
          </div>
        </motion.div>
      )}
    </div>
  );
} 