'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Zap } from 'lucide-react';
import Link from 'next/link';

interface TicketTier {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  badge?: string;
  highlight?: boolean;
}

export function TicketCategories() {
  const tickets: TicketTier[] = [
    {
      name: 'Student Pass',
      price: '₹1,999',
      originalPrice: '₹2,999',
      description: 'Perfect for medical students and residents',
      features: [
        'Full 2-day access to all sessions',
        'Keynote presentations',
        'Networking events',
        'Digital materials',
        'Student badge',
      ],
      badge: 'Best Value',
    },
    {
      name: 'Professional Pass',
      price: '₹4,999',
      originalPrice: '₹5,999',
      description: 'Ideal for healthcare professionals',
      features: [
        'Full 2-day access to all sessions',
        'Interactive workshops',
        'Keynote presentations',
        'Networking mixers',
        'Digital & physical materials',
        'Speaker directory',
        'Post-event recordings',
        'Certificate of attendance',
      ],
      highlight: true,
      badge: 'Most Popular',
    },
    {
      name: 'VIP Pass',
      price: '₹9,999',
      description: 'Premium experience with exclusive benefits',
      features: [
        'All Professional Pass benefits',
        'VIP seating in all sessions',
        'Exclusive VIP networking dinner',
        'One-on-one speaker sessions',
        'Premium conference bag',
        'Priority support',
        'VIP lounge access',
        'Private transport',
      ],
      badge: 'Premium',
    },
    {
      name: 'Sponsorship Package',
      price: 'Contact Sales',
      description: 'Brand visibility and partnership opportunities',
      features: [
        'Exhibition booth space',
        'Branding opportunities',
        'Speaking slot option',
        '10 conference passes',
        'Logo on all materials',
        'Social media promotion',
        'Post-event analytics',
        'Dedicated support team',
      ],
    },
  ];

  return (
    <section id="tickets" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
            Ticket Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your ECTC experience. Early bird pricing available until February 28, 2025.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {tickets.map((ticket, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ${
                ticket.highlight
                  ? 'lg:scale-105 border-2 border-accent shadow-xl bg-gradient-to-br from-card to-accent/5'
                  : 'border-border hover:border-primary/50 hover:shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {ticket.badge && (
                <div className={`absolute top-0 right-0 px-4 py-2 text-sm font-semibold rounded-bl-lg ${
                  ticket.highlight
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-primary/20 text-primary'
                }`}>
                  {ticket.badge}
                </div>
              )}

              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {ticket.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {ticket.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-light text-primary">
                      {ticket.price}
                    </span>
                    {ticket.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {ticket.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Per person</p>
                </div>

                {/* Features List */}
                <div className="mb-8 space-y-3">
                  {ticket.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <Check size={16} className="text-accent" />
                      </div>
                      <p className="text-sm text-foreground">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href="/registration" className="block">
                  <Button
                    className={`w-full transition-all duration-300 ${
                      ticket.highlight
                        ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    {ticket.price === 'Contact Sales' ? 'Get in Touch' : 'Register Now'}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
