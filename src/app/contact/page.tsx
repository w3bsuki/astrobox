import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, MessageSquare, Phone, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container py-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          We're here to help! Choose your preferred way to reach us.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Contact Methods */}
        <div className="space-y-6">
          {/* Live Chat */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Live Chat
              </CardTitle>
              <CardDescription>Chat with our support team</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Available 24/7 for instant support
              </p>
              <Button className="w-full" variant="secondary" asChild>
                <a href="/live-chat">Start Chat</a>
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Support
              </CardTitle>
              <CardDescription>Get help via email</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Response within 24 hours
              </p>
              <Button className="w-full" variant="secondary" asChild>
                <a href="mailto:support@astrobox.com">Send Email</a>
              </Button>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Phone Support
              </CardTitle>
              <CardDescription>Talk to our team</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Mon-Fri, 9AM-5PM EST
              </p>
              <Button className="w-full" variant="secondary" asChild>
                <a href="tel:+1-800-123-4567">+1 (800) 123-4567</a>
              </Button>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Business Hours
              </CardTitle>
              <CardDescription>When we're available</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">
                <strong>Live Chat:</strong>{' '}
                <span className="text-muted-foreground">24/7</span>
              </p>
              <p className="text-sm">
                <strong>Phone Support:</strong>{' '}
                <span className="text-muted-foreground">Mon-Fri, 9AM-5PM EST</span>
              </p>
              <p className="text-sm">
                <strong>Email Support:</strong>{' '}
                <span className="text-muted-foreground">24/7 (responses within 24h)</span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Order Number (Optional) */}
              <div className="space-y-2">
                <Label htmlFor="orderNumber">
                  Order number <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="orderNumber"
                  placeholder="Enter your order number if applicable"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="order">Order Issue</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="min-h-[150px]"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Send Message
              </Button>

              {/* Privacy Notice */}
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our{' '}
                <a href="/privacy" className="underline hover:text-primary">
                  Privacy Policy
                </a>
                . We'll never share your information without permission.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 