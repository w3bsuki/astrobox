import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] gap-4">
      <div className="space-y-4 text-center">
        <div className="flex justify-center">
          <div className="rounded-full bg-destructive/10 p-4">
            <AlertCircle className="h-12 w-12 text-destructive" />
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
        <p className="text-lg text-muted-foreground max-w-[600px]">
          Sorry, we couldn't find the page you're looking for. The page might have been
          moved, deleted, or never existed.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Button asChild size="lg">
          <Link href="/">Return Home</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>

      <div className="mt-8 space-y-4 text-center">
        <p className="text-sm text-muted-foreground">Popular pages you might be looking for:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="link" asChild>
            <Link href="/boxes">Mystery Boxes</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/shop">Shop</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/how-it-works">How It Works</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/faq">FAQ</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 