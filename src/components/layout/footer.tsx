'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUp, Sun, Moon, Mail, Twitter, Instagram, Facebook, Phone, Youtube, Linkedin, Heart } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
}

const navigation = {
  categories: [
    {
      id: 'main',
      name: 'Main',
      sections: [
        {
          id: 'about',
          name: 'About',
          items: [
            { name: 'About', href: '/about' },
            { name: 'How it Works', href: '/how-it-works' },
            { name: 'Pricing', href: '/pricing' },
          ],
        },
        {
          id: 'features',
          name: 'Features',
          items: [
            { name: 'Mystery Boxes', href: '/boxes' },
            { name: 'Shop', href: '/shop' },
            { name: 'Astrology', href: '/astrology' },
          ],
        },
        {
          id: 'support',
          name: 'Support',
          items: [
            { name: 'Help Center', href: '/help' },
            { name: 'Terms', href: '/terms' },
            { name: 'Privacy', href: '/privacy' },
          ],
        },
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform`;

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="border-[#9370DB]/20 mx-auto w-full border-b border-t px-2">
      <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex">
        <Link href="/">
          <p className="flex items-center justify-center rounded-full">
            <span className="text-lg md:text-xl font-light tracking-[0.15em] bg-clip-text text-transparent bg-gradient-to-r from-[#E6E6FA] to-[#9370DB]">
              ASTROBOX
            </span>
          </p>
        </Link>
        <p className="bg-transparent text-center text-xs leading-4 text-[#E6E6FA]/60 md:text-left">
          Welcome to Astrobox, where mystery meets astrology. We specialize in curating unique mystery boxes
          tailored to your astrological profile. Our mission is to bring the magic of the cosmos to your doorstep,
          combining carefully selected items that resonate with your zodiac sign and current celestial alignments.
          Each box is thoughtfully crafted to enhance your spiritual journey and personal growth.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b border-dotted border-[#9370DB]/20"></div>
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-3 flex-row justify-between gap-6 leading-6 md:flex"
            >
              {category.sections.map((section) => (
                <div key={section.name}>
                  <ul
                    role="list"
                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                    className="flex flex-col space-y-2"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <Link
                          href={item.href}
                          className="text-sm text-[#E6E6FA]/60 hover:text-[#9370DB] dark:text-[#E6E6FA]/60 hover:dark:text-[#9370DB] md:text-xs"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-b border-dotted border-[#9370DB]/20"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <Link
            aria-label="Email"
            href="mailto:contact@astrobox.com"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Mail strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Twitter"
            href="https://twitter.com/astrobox"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Instagram"
            href="https://www.instagram.com/astrobox"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Facebook"
            href="https://www.facebook.com/astrobox"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Facebook className="h-5 w-5" />
          </Link>
          <Link
            aria-label="YouTube"
            href="https://www.youtube.com/@astrobox"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Youtube className="h-5 w-5" />
          </Link>
          <Link
            aria-label="LinkedIn"
            href="https://www.linkedin.com/company/astrobox"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center rounded-full border border-dotted border-[#9370DB]/20">
            <button
              onClick={() => setTheme('light')}
              className={cn(
                "mr-3 rounded-full p-2",
                theme === 'light' 
                  ? "bg-[#9370DB]/20 text-[#9370DB]" 
                  : "bg-black text-white dark:bg-background dark:text-white"
              )}
            >
              <Sun className="h-5 w-5" strokeWidth={1} />
              <span className="sr-only">Light Theme</span>
            </button>

            <button type="button" onClick={handleScrollTop}>
              <ArrowUp className="h-3 w-3" />
              <span className="sr-only">Scroll to Top</span>
            </button>

            <button
              onClick={() => setTheme('dark')}
              className={cn(
                "ml-3 rounded-full p-2",
                theme === 'dark'
                  ? "bg-[#9370DB]/20 text-[#9370DB]"
                  : "bg-black text-black dark:bg-black dark:text-white"
              )}
            >
              <Moon className="h-5 w-5" strokeWidth={1} />
              <span className="sr-only">Dark Theme</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-[#E6E6FA]/60">
          <span>©</span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <Heart className="text-[#9370DB] mx-1 h-4 w-4 animate-pulse" />
          <span>by</span>
          <span className="hover:text-[#9370DB] cursor-pointer text-[#E6E6FA]">
            <Link
              aria-label="Astrobox"
              className="font-bold"
              href="/"
            >
              Astrobox
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
} 