'use client';

import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function Registration() {
  const ticket = {
    name: 'Summit 2025 Pass',
    price: 4999,
    currency: '₹',
    description: 'Full conference experience with all access',
    duration: 'Two-day pass',
    features: [
      'Access to all sessions & workshops',
      'Digital & print materials',
      'Networking events',
      'Exclusive digital badge',
      'Access to speaker directory',
      'Post-event recordings',
      'Meals included both days',
      'Certificate of attendance',
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-80 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl font-light tracking-tight text-foreground">
              Ticket Pricing
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join Summit 2025 - An extraordinary conference experience bringing together industry leaders and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-primary/20 border-2 p-10 flex flex-col relative overflow-hidden group">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Badge */}
            <div className="relative mb-8">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/30">
                Two-Day Conference Pass
              </div>
            </div>

            {/* Content */}
            <div className="relative">
              <h2 className="text-4xl font-light text-foreground mb-3">
                {ticket.name}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {ticket.description}
              </p>

              {/* Price Section */}
              <div className="mb-10 p-8 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-light text-primary">
                    {ticket.currency}{ticket.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-muted-foreground text-lg">
                    per person
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {ticket.duration}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-10">
                <h3 className="text-lg font-medium text-foreground mb-6">
                  What's Included:
                </h3>
                <div className="space-y-4">
                  {ticket.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="mt-1 p-1 bg-accent/20 rounded-full">
                        <Check size={16} className="text-accent" />
                      </div>
                      <p className="text-foreground/80 text-lg">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA - Pricing Display Only */}
              <div className="space-y-4">
                <p className="text-center text-sm text-muted-foreground">
                  Early bird pricing available until February 28, 2025
                </p>
                <p className="text-center text-sm font-medium text-foreground/70">
                  Registration details coming soon
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-16 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FAQ Items */}
            {[
              {
                q: 'Is group discount available?',
                a: 'Yes, we offer special group discounts for 5 or more attendees. Contact our team for details.',
              },
              {
                q: 'Can I get a refund?',
                a: 'Refunds are available if cancellation is made 15 days before the event date.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept credit cards, debit cards, UPI, and bank transfers for payment.',
              },
              {
                q: 'Will recordings be provided?',
                a: 'Yes, all session recordings will be provided to ticket holders after the event.',
              },
              {
                q: 'Is accommodation included?',
                a: 'Accommodation is not included, but we have partner hotels offering special rates.',
              },
              {
                q: 'Can I bring a guest?',
                a: 'Each ticket is for one person. Additional guests require separate tickets.',
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {item.q}
                </h3>
                <p className="text-muted-foreground">
                  {item.a}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl sm:text-6xl font-light tracking-tight text-foreground">
            Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact our event team for more information about tickets, sponsorships, or any other inquiries.
          </p>
          <Link href="/contact">
            <button className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
