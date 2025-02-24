import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';

// This would come from your backend verification logic
const verificationStates = {
  success: {
    icon: CheckCircle,
    title: 'Email Verified',
    description: 'Your email has been successfully verified',
    message: 'You can now access all features of your account.',
    buttonText: 'Go to Dashboard',
    buttonHref: '/dashboard',
  },
  expired: {
    icon: XCircle,
    title: 'Link Expired',
    description: 'This verification link has expired',
    message: 'Please request a new verification link.',
    buttonText: 'Request New Link',
    buttonHref: '/auth/verify-email',
  },
  invalid: {
    icon: XCircle,
    title: 'Invalid Link',
    description: 'This verification link is invalid',
    message: 'Please make sure you clicked the correct link or request a new one.',
    buttonText: 'Request New Link',
    buttonHref: '/auth/verify-email',
  },
};

interface PageProps {
  params: {
    token: string;
  };
  searchParams: {
    email?: string;
  };
}

export default function VerifyEmailConfirmationPage({ params, searchParams }: PageProps) {
  // This would be replaced with actual verification logic
  const verificationStatus = 'success' as keyof typeof verificationStates;
  const state = verificationStates[verificationStatus];

  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div
            className={`rounded-full p-3 ${
              verificationStatus === 'success'
                ? 'bg-green-100 dark:bg-green-900/20'
                : 'bg-destructive/10'
            }`}
          >
            <state.icon
              className={`h-6 w-6 ${
                verificationStatus === 'success'
                  ? 'text-green-600 dark:text-green-500'
                  : 'text-destructive'
              }`}
            />
          </div>
        </div>
        <CardTitle className="text-2xl">{state.title}</CardTitle>
        <CardDescription className="mt-2">{state.description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center pb-6">
        <p className="text-muted-foreground">{state.message}</p>
        {searchParams.email && (
          <div className="mt-4">
            <div className="bg-muted rounded-lg px-6 py-4 inline-block">
              <p className="text-sm font-medium">{searchParams.email}</p>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button className="w-full" asChild>
          <a href={state.buttonHref}>{state.buttonText}</a>
        </Button>
        <div className="flex items-center justify-center w-full">
          <Button variant="link" className="text-muted-foreground" asChild>
            <a href="/contact">Need Help?</a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
} 