"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// FAQ categories with their questions and answers
const faqCategories = [
  {
    title: 'General Questions',
    icon: '🎁',
    questions: [
      {
        q: 'What is Astrobox?',
        a: 'Astrobox is a premium mystery box platform where users can purchase and open digital boxes containing various exciting items, from tech gadgets to collectibles.',
      },
      {
        q: 'How does it work?',
        a: 'Choose a mystery box, make a purchase, and instantly reveal your item. Each box contains items of different rarities with clearly displayed odds of winning.',
      },
      {
        q: 'Is Astrobox legitimate?',
        a: 'Yes, Astrobox is a legitimate platform operating with full transparency. We are licensed and regulated, ensuring fair odds and genuine products for all users.',
      },
    ],
  },
  {
    title: 'Mystery Boxes',
    icon: '📦',
    questions: [
      {
        q: 'What can I win from mystery boxes?',
        a: 'Each box contains a variety of items within its theme (tech, gaming, collectibles, etc.). The possible items and their odds are clearly displayed on each box page.',
      },
      {
        q: 'Are the odds fair?',
        a: 'Yes, all odds are verified and audited by third-party services to ensure complete fairness and transparency.',
      },
      {
        q: 'Can I get a refund if I do not like my item?',
        a: 'All mystery box openings are final and non-refundable, as clearly stated in our Terms of Service. However, you can view all possible items before purchasing.',
      },
    ],
  },
  {
    title: 'Shipping & Delivery',
    icon: '🚚',
    questions: [
      {
        q: 'How long does shipping take?',
        a: 'Standard shipping takes 3-5 business days within the US, and 7-14 business days for international orders.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes, we ship to most countries worldwide. Shipping costs and times vary by location.',
      },
      {
        q: 'How can I track my order?',
        a: 'Once your order ships, you will receive a tracking number via email to monitor your delivery.',
      },
    ],
  },
  {
    title: 'Payments & Billing',
    icon: '💳',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept major credit cards, PayPal, and various cryptocurrency payments.',
      },
      {
        q: 'Is my payment information secure?',
        a: 'Yes, we use industry-standard encryption and never store your full payment details. All transactions are processed through secure payment providers.',
      },
      {
        q: 'Do you charge any hidden fees?',
        a: 'No, all costs including taxes and shipping (if applicable) are clearly displayed before purchase.',
      },
    ],
  },
  {
    title: 'Account & Security',
    icon: '🔒',
    questions: [
      {
        q: 'How do I create an account?',
        a: 'Click the "Sign Up" button, enter your email and create a password. You can also sign up using Google or other social accounts.',
      },
      {
        q: 'How can I reset my password?',
        a: 'Click "Forgot Password" on the login page and follow the instructions sent to your email.',
      },
      {
        q: 'Is my personal information safe?',
        a: 'Yes, we use advanced security measures to protect your data. Read our Privacy Policy for more details.',
      },
    ],
  },
  {
    title: 'Returns & Refunds',
    icon: '🔄',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 30-day return policy for unopened mystery boxes. Digital items are non-refundable.',
      },
      {
        q: 'How do I request a refund?',
        a: 'Contact our support team through the help center with your order number to initiate a refund.',
      },
      {
        q: 'Are shipping costs refundable?',
        a: 'Original shipping costs are non-refundable unless the item arrived damaged or incorrect.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="container py-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Find answers to common questions about Astrobox
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Input
            type="search"
            placeholder="Search FAQ..."
            className="pl-10"
          />
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="max-w-3xl mx-auto">
        {faqCategories.map((category, index) => (
          <Card key={index} className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span role="img" aria-label={category.title}>
                  {category.icon}
                </span>
                {category.title}
              </CardTitle>
              <CardDescription>
                Common questions about {category.title.toLowerCase()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, qIndex) => (
                  <AccordionItem key={qIndex} value={`${index}-${qIndex}`}>
                    <AccordionTrigger>{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}

        {/* Still Need Help Section */}
        <Card className="mt-10 text-center">
          <CardHeader>
            <CardTitle>Still Need Help?</CardTitle>
            <CardDescription>
              Can't find what you're looking for? We're here to help!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" asChild>
              <a href="/contact">Contact Support</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/live-chat">Start Live Chat</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 