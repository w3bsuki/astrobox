import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export default function VerifyEmailLoading() {
  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-primary/10 p-3">
            <Loader2 className="h-6 w-6 text-primary animate-spin" />
          </div>
        </div>
        <CardTitle className="text-2xl">Verifying Email</CardTitle>
        <CardDescription className="mt-2">
          Please wait while we verify your email address
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center pb-6">
        <p className="text-muted-foreground">
          This should only take a moment...
        </p>
      </CardContent>
    </Card>
  );
} 