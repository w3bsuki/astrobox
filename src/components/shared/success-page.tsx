import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface SuccessPageProps {
  title: string;
  description: string;
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
  footerText?: string;
  footerLinkText?: string;
  footerLinkHref?: string;
}

export function SuccessPage({
  title,
  description,
  primaryActionLabel,
  primaryActionHref,
  secondaryActionLabel,
  secondaryActionHref,
  footerText,
  footerLinkText,
  footerLinkHref,
}: SuccessPageProps) {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-green-100 dark:bg-green-900/20 p-3">
            <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-500" />
          </div>
        </div>
        <CardTitle className="text-center">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button asChild>
          <Link href={primaryActionHref}>{primaryActionLabel}</Link>
        </Button>
        {secondaryActionLabel && secondaryActionHref && (
          <Button variant="outline" asChild>
            <Link href={secondaryActionHref}>{secondaryActionLabel}</Link>
          </Button>
        )}
      </CardContent>
      {(footerText || (footerLinkText && footerLinkHref)) && (
        <CardFooter className="text-center text-sm text-muted-foreground">
          <p>
            {footerText}{' '}
            {footerLinkText && footerLinkHref && (
              <Link
                href={footerLinkHref}
                className="text-primary underline-offset-4 hover:underline"
              >
                {footerLinkText}
              </Link>
            )}
          </p>
        </CardFooter>
      )}
    </Card>
  );
} 