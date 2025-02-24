import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left side - Auth Form */}
      <div className="relative flex items-center justify-center px-6 py-12 md:px-8 lg:px-12">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="mb-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">Astrobox</span>
            </Link>
          </div>

          {/* Auth Form */}
          {children}

          {/* Terms and Privacy */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            By continuing, you agree to our{' '}
            <Link href="/terms" className="underline underline-offset-4 hover:text-foreground">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-foreground">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Right side - Feature Showcase */}
      <div className="hidden md:block relative bg-muted">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
        <div className="relative flex h-full items-center justify-center p-8">
          <div className="max-w-md text-center">
            <h1 className="mb-6 text-3xl font-bold tracking-tight">
              Discover Exclusive Mystery Boxes
            </h1>
            <p className="text-lg text-muted-foreground">
              Join thousands of collectors and enthusiasts in the thrill of unboxing rare and exclusive
              items.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 