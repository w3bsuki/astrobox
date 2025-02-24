import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function PrivacyPage() {
  return (
    <div className="container py-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Privacy Matters</CardTitle>
            <CardDescription>
              We are committed to protecting your personal information and your right to privacy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed mb-4">
              This Privacy Policy describes how we collect, use, and protect your personal information
              when you use our platform. By using Astrobox, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="collection">
            <AccordionTrigger>1. Information We Collect</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed space-y-4">
              <p>We collect several types of information for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address, shipping address, and
                  payment information
                </li>
                <li>
                  <strong>Account Information:</strong> Login credentials and account preferences
                </li>
                <li>
                  <strong>Transaction Data:</strong> Purchase history, mystery box openings, and winnings
                </li>
                <li>
                  <strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent
                  on the platform
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="usage">
            <AccordionTrigger>2. How We Use Your Information</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed space-y-4">
              <p>We use the collected information for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processing your purchases and delivering items</li>
                <li>Managing your account and providing customer support</li>
                <li>Sending important updates about our services</li>
                <li>Improving our platform and user experience</li>
                <li>Preventing fraud and ensuring platform security</li>
                <li>Complying with legal obligations</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sharing">
            <AccordionTrigger>3. Information Sharing</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed space-y-4">
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Payment processors, shipping companies, and cloud
                  storage providers
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law or to protect our rights
                </li>
                <li>
                  <strong>Business Partners:</strong> Only with your explicit consent
                </li>
              </ul>
              <p>
                We never sell your personal information to third parties or use it for marketing
                purposes without your consent.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="security">
            <AccordionTrigger>4. Data Security</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed space-y-4">
              <p>
                We implement appropriate security measures to protect your personal information,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage and transmission</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cookies">
            <AccordionTrigger>5. Cookies and Tracking</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed space-y-4">
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our
                platform. You can control cookie preferences through your browser settings.
              </p>
              <p>Types of cookies we use:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Essential cookies for platform functionality</li>
                <li>Analytics cookies to improve our service</li>
                <li>Preference cookies to remember your settings</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rights">
            <AccordionTrigger>6. Your Privacy Rights</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="children">
            <AccordionTrigger>7. Children's Privacy</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed space-y-4">
              <p>
                Our platform is not intended for children under 18 years of age. We do not knowingly
                collect personal information from children. If you believe we have collected information
                from a child, please contact us immediately.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="updates">
            <AccordionTrigger>8. Updates to Privacy Policy</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed space-y-4">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Questions about our Privacy Policy?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">
              If you have any questions about this Privacy Policy, please contact our Data Protection
              Officer at{' '}
              <a
                href="mailto:privacy@astrobox.com"
                className="text-primary hover:underline"
              >
                privacy@astrobox.com
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 