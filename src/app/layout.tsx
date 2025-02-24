import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { SiteFooter } from '@/components/layout/site-footer';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'Astrobox - Mystery Box Platform',
  description: 'A modern mystery box platform built with Next.js',
  keywords: ['mystery box', 'ecommerce', 'next.js', 'react'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-black font-sans antialiased',
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col overflow-hidden">
            <Navbar />
            <main className="flex-1 w-full overflow-hidden">
              <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
