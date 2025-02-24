import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight, RefreshCw } from 'lucide-react';

export default function VerifyEmailPage() {
  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-primary/10 p-3">
            <Mail className="h-6 w-6 text-primary" />
          </div>
        </div>
        <CardTitle className="text-2xl">Check Your Email</CardTitle>
        <CardDescription className="mt-2">
          We've sent a verification link to your email address
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-center pb-6">
        <p className="text-muted-foreground">
          Click the link in the email to verify your account. If you don't see the email, check your
          spam folder.
        </p>
        <div className="flex justify-center">
          <div className="bg-muted rounded-lg px-6 py-4 max-w-sm">
            <p className="text-sm font-medium truncate">john@example.com</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button className="w-full" variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" />
          Resend Verification Email
        </Button>
        <div className="flex items-center justify-between w-full text-sm">
          <Button variant="link" className="text-muted-foreground" asChild>
            <a href="/auth/login">Back to Login</a>
          </Button>
          <Button variant="link" asChild>
            <a href="/contact">Need Help?</a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
} 