'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/boxes', label: 'Mystery Boxes' },
    { href: '/shop', label: 'Shop' },
    { href: '/astrology', label: 'Astrology' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-black/95 backdrop-blur-sm border-b border-[#FFD700]/20">
      <div className="relative w-full h-full max-w-[1920px] mx-auto">
        {/* Main vertical separator lines - These define our content boundaries */}
        <div className="absolute inset-y-0 left-[15%] w-px bg-[#FFD700]/20" />
        <div className="absolute inset-y-0 right-[15%] w-px bg-[#FFD700]/20" />
        
        {/* Content container - Exactly 70% width between separators */}
        <div className="relative mx-auto" style={{ width: "70%", margin: "0 15%" }}>
          <header className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#C0C0C0]">
                  Astrobox
                </span>
              </Link>
            </div>

            {/* Navigation - Center */}
            <nav className="hidden md:flex items-center justify-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium",
                    "text-[#C0C0C0] hover:text-[#FFD700]",
                    "transition-colors duration-200"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Section - Sign In */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                asChild 
                className={cn(
                  "hidden md:flex h-8",
                  "border border-[#FFD700]/20",
                  "bg-transparent",
                  "text-[#FFD700]",
                  "hover:border-[#FFD700]/40 hover:bg-[#FFD700]/5",
                  "transition-colors duration-200"
                )}
              >
                <Link href="/login">Sign In</Link>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="md:hidden hover:bg-transparent"
                  >
                    <Menu className="h-6 w-6 text-[#FFD700]" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className={cn(
                    "w-[300px] sm:w-[400px]",
                    "bg-black/95 backdrop-blur-sm",
                    "border-l border-[#FFD700]/20"
                  )}
                >
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "text-lg font-medium",
                          "text-[#C0C0C0] hover:text-[#FFD700]",
                          "transition-colors duration-200"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <DropdownMenuSeparator className="bg-[#FFD700]/20" />
                    <Button 
                      variant="outline"
                      asChild 
                      className={cn(
                        "w-full",
                        "border border-[#FFD700]/20",
                        "bg-transparent",
                        "text-[#FFD700]",
                        "hover:border-[#FFD700]/40 hover:bg-[#FFD700]/5",
                        "transition-colors duration-200"
                      )}
                    >
                      <Link href="/login" onClick={() => setIsOpen(false)}>Sign In</Link>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
} 