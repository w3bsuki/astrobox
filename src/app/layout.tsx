import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Footer } from '@/components/layout/footer';
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
          <div className="relative min-h-screen flex flex-col">
            {/* Main vertical separator lines - hidden on mobile, visible from md up */}
            <div className="fixed inset-0 pointer-events-none z-50 hidden md:block">
              <div className="h-full w-[80%] mx-auto relative">
                <div className="absolute inset-y-0 left-0 w-px bg-[#9370DB]/20" />
                <div className="absolute inset-y-0 right-0 w-px bg-[#9370DB]/20" />
              </div>
            </div>
            
            {/* Content container - full width on mobile, 80% on desktop */}
            <div className="relative w-full md:w-[80%] mx-auto">
              <div className="w-full px-4 md:px-0">
                <Navbar />
                <main className="w-full">
                  {children}
                </main>
                <Footer />
              </div>
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
