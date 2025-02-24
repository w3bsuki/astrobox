import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Package,
  CreditCard,
  Gift,
  Truck,
  Shield,
  Trophy,
  ArrowRight,
  CheckCircle,
  Users,
  Star,
} from 'lucide-react';

const steps = [
  {
    icon: Package,
    title: '1. Choose Your Box',
    description:
      'Browse our selection of mystery boxes, each containing carefully curated items. View possible contents and winning odds before purchase.',
  },
  {
    icon: CreditCard,
    title: '2. Make a Purchase',
    description:
      'Securely purchase your chosen box using various payment methods, including credit cards, PayPal, or cryptocurrency.',
  },
  {
    icon: Gift,
    title: '3. Open Your Box',
    description:
      'Experience the thrill of opening your mystery box and instantly revealing your prize. Each box guarantees a valuable item!',
  },
  {
    icon: Truck,
    title: '4. Receive Your Item',
    description:
      'Physical items are shipped directly to your door. Digital items are instantly added to your account.',
  },
];

const features = [
  {
    icon: Shield,
    title: 'Fair & Transparent',
    description: 'All odds are verified and displayed clearly. Our random number generation is regularly audited.',
  },
  {
    icon: Trophy,
    title: 'Premium Items',
    description: 'Only genuine, high-quality products from trusted brands and authorized dealers.',
  },
  {
    icon: Users,
    title: 'Active Community',
    description: 'Join thousands of collectors and enthusiasts. Share your wins and experiences.',
  },
];

const stats = [
  { label: 'Active Users', value: '50K+' },
  { label: 'Boxes Opened', value: '1M+' },
  { label: 'Items Delivered', value: '500K+' },
  { label: 'Satisfaction Rate', value: '99%' },
];

const guarantees = [
  'Genuine Products Guaranteed',
  'Secure Payment Processing',
  'Fast Worldwide Shipping',
  'Responsive Customer Support',
  '100% Transparency',
];

export default function HowItWorksPage() {
  return (
    <div className="container py-10">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">How Astrobox Works</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Discover how our mystery box platform brings excitement and value to collectors worldwide
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <a href="/boxes">
              Explore Mystery Boxes <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/faq">Read FAQ</a>
          </Button>
        </div>
      </div>

      {/* Steps Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {steps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Astrobox?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          We're committed to providing the best mystery box experience
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <Card className="mb-16">
        <CardContent className="py-8">
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Guarantees Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Our Guarantees</h2>
        <div className="grid gap-4 md:grid-cols-5 mt-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm">{guarantee}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <Card className="text-center">
        <CardHeader>
          <CardTitle>Ready to Start?</CardTitle>
          <CardDescription>
            Join thousands of satisfied customers and start unboxing excitement today
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <a href="/boxes">
              Explore Mystery Boxes <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/faq">Read FAQ</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
} 