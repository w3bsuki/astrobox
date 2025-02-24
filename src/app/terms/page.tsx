import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function TermsPage() {
  return (
    <div className="container py-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
        <p className="text-lg text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
            <CardDescription>
              Please read these terms of service carefully before using our platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed mb-4">
              By accessing or using the Astrobox platform, you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with any of these terms, you
              are prohibited from using or accessing this platform.
            </p>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="definitions">
            <AccordionTrigger>1. Definitions</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed space-y-4">
              <p>
                <strong>"Platform"</strong> refers to the Astrobox website and services.
              </p>
              <p>
                <strong>"User"</strong> refers to any individual who accesses or uses the Platform.
              </p>
              <p>
                <strong>"Mystery Box"</strong> refers to a digital container with randomized items available
                for purchase on the Platform.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="account">
            <AccordionTrigger>2. Account Terms</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed space-y-4">
              <p>
                You must be at least 18 years old to use this Platform. You are responsible for
                maintaining the security of your account and password.
              </p>
              <p>
                The Platform cannot and will not be liable for any loss or damage from your failure to
                comply with security obligations.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="purchases">
            <AccordionTrigger>3. Purchases and Payments</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed space-y-4">
              <p>
                All purchases are final and non-refundable unless otherwise required by law. Prices for
                Mystery Boxes are subject to change without notice.
              </p>
              <p>
                The contents of Mystery Boxes are randomly generated based on predetermined probabilities
                that are clearly displayed for each item.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="conduct">
            <AccordionTrigger>4. User Conduct</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed space-y-4">
              <p>Users agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Platform for any illegal purpose</li>
                <li>Attempt to manipulate or exploit the Platform</li>
                <li>Share account credentials with others</li>
                <li>Harass or abuse other users</li>
                <li>Attempt to access restricted areas of the Platform</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="intellectual">
            <AccordionTrigger>5. Intellectual Property</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed space-y-4">
              <p>
                The Platform and its original content, features, and functionality are owned by Astrobox
                and are protected by international copyright, trademark, patent, trade secret, and other
                intellectual property laws.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="termination">
            <AccordionTrigger>6. Termination</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed space-y-4">
              <p>
                We may terminate or suspend your account and bar access to the Platform immediately,
                without prior notice or liability, under our sole discretion, for any reason whatsoever.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="liability">
            <AccordionTrigger>7. Limitation of Liability</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed space-y-4">
              <p>
                In no event shall Astrobox, nor its directors, employees, partners, agents, suppliers,
                or affiliates, be liable for any indirect, incidental, special, consequential, or
                punitive damages.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="changes">
            <AccordionTrigger>8. Changes to Terms</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed space-y-4">
              <p>
                We reserve the right to modify or replace these Terms at any time. We will provide
                notice of any changes by posting the new Terms on the Platform.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              If you have any questions about these Terms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">
              Please contact us at{' '}
              <a
                href="mailto:legal@astrobox.com"
                className="text-primary hover:underline"
              >
                legal@astrobox.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 