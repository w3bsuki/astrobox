'use client';

import * as React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Moon, Sun, Star, Package, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function SiteHeader() {
  const { setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">Astrobox</span>
          </Link>
        </div>

        {/* Main Navigation - Centered */}
        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="space-x-2">
            {/* Astrology */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="rounded-none">
                <Star className="mr-2 h-4 w-4" />
                Astrology
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/horoscope" title="Daily Horoscope">
                    Get your personalized daily astrological guidance.
                  </ListItem>
                  <ListItem href="/birth-chart" title="Birth Chart">
                    Discover your complete astrological profile.
                  </ListItem>
                  <ListItem href="/astrology/synastry" title="Compatibility">
                    Explore relationship compatibility with synastry readings.
                  </ListItem>
                  <ListItem href="/karmic-calendar" title="Karmic Calendar">
                    Plan your days according to cosmic energies.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Mystery */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="rounded-none">
                <Package className="mr-2 h-4 w-4" />
                Mystery
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-none bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/boxes"
                      >
                        <Package className="h-6 w-6 mb-3" />
                        <div className="mb-2 text-lg font-medium">
                          Astrology Boxes
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Discover mystical treasures aligned with your cosmic energy.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/boxes/zodiac" title="Zodiac Mystery Box">
                    Curated items based on your zodiac sign's unique traits and energies.
                  </ListItem>
                  <ListItem href="/boxes/celestial" title="Celestial Mystery Box">
                    Rare crystals, tarot decks, and cosmic-themed collectibles.
                  </ListItem>
                  <ListItem href="/boxes/spiritual" title="Spiritual Wellness Box">
                    Meditation tools, sacred herbs, and spiritual guidance materials.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Shop */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="rounded-none">
                Shop
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/shop?category=personal-horoscopes" title="Personal Horoscopes">
                    Detailed birth chart analysis and yearly forecasts.
                  </ListItem>
                  <ListItem href="/shop?category=synastry" title="Synastry Reports">
                    In-depth compatibility analysis and relationship readings.
                  </ListItem>
                  <ListItem href="/shop?category=karmic-calendars" title="Karmic Calendars">
                    Personal lunar calendars and karmic path analysis.
                  </ListItem>
                  <ListItem href="/shop" title="View All Products">
                    Browse our complete collection of astrological services.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* FAQ */}
            <NavigationMenuItem>
              <Link href="/how-it-works" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "rounded-none")}>
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "rounded-none")}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-none">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-none">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="default" size="sm" className="rounded-none" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
} 