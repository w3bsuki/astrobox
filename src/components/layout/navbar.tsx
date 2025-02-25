'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, Instagram, Facebook, Phone } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/shop', label: 'Shop' },
    { href: '/astrology', label: 'Astrology' },
    { href: '/about', label: 'About' },
  ];

  return (
    <div className="w-full flex justify-center border-b border-[#9370DB]/10">
      <header className="w-full flex items-center h-16 justify-between">
        {/* Left: Logo */}
        <div className="flex items-center pl-4 sm:pl-6">
          <Link href="/" className="flex items-center">
            <span className="text-lg md:text-xl font-light tracking-[0.15em] bg-clip-text text-transparent bg-gradient-to-r from-[#E6E6FA] to-[#9370DB]">
              ASTROBOX
            </span>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex space-x-1">
            {navLinks.map((link, index) => (
              <div key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2",
                    "text-sm font-medium",
                    "text-[#E6E6FA]/80 hover:text-[#9370DB]",
                    "transition-colors duration-200"
                  )}
                >
                  {link.label}
                </Link>
                {index < navLinks.length - 1 && (
                  <div className="h-4 w-[1px] bg-[#9370DB]/10" />
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Right Side */}
        <div className="flex items-center pr-4 sm:pr-6">
          {/* Social Media Links */}
          <div className="hidden md:flex items-center space-x-4 mr-6">
            <Link
              href="https://instagram.com/astrobox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E6E6FA]/80 hover:text-[#9370DB] transition-colors"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://facebook.com/astrobox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E6E6FA]/80 hover:text-[#9370DB] transition-colors"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="/contact"
              className="text-[#E6E6FA]/80 hover:text-[#9370DB] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="sr-only">Contact</span>
            </Link>
          </div>

          <div className="hidden md:block relative">
            <Link href="/login" className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-[#9370DB]/20 px-4 py-1.5 text-white font-light tracking-wider text-sm">
              <ShimmerButton 
                shimmerColor="#9370DB"
                background="black"
                shimmerSize="0.1em"
                className="absolute inset-0 w-full h-full"
              />
              <span className="relative flex items-center gap-2">
                Sign In
              </span>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden hover:bg-transparent"
              >
                <Menu className="h-5 w-5 text-[#9370DB]" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className={cn(
                "w-full sm:w-80",
                "bg-black/95 backdrop-blur-sm",
                "border-l border-[#9370DB]/20"
              )}
            >
              <nav className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-base font-medium",
                      "text-[#E6E6FA]/80 hover:text-[#9370DB]",
                      "transition-colors duration-200"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* Social Media Links for Mobile */}
                <div className="flex items-center space-x-4 pt-4">
                  <Link
                    href="https://instagram.com/astrobox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E6E6FA]/80 hover:text-[#9370DB] transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://facebook.com/astrobox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E6E6FA]/80 hover:text-[#9370DB] transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="text-[#E6E6FA]/80 hover:text-[#9370DB] transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="sr-only">Contact</span>
                  </Link>
                </div>
                <div className="relative mt-4">
                  <Link href="/login" onClick={() => setIsOpen(false)} className="group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-[#9370DB]/20 px-4 py-1.5 text-white font-light tracking-wider text-sm w-full">
                    <ShimmerButton 
                      shimmerColor="#9370DB"
                      background="black"
                      shimmerSize="0.1em"
                      className="absolute inset-0 w-full h-full"
                    />
                    <span className="relative flex items-center gap-2">
                      Sign In
                    </span>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
} 