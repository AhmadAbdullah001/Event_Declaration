'use client';

import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function Registration() {
  const tickets = [{
      label: 'Doctor Pass',
      title: 'ECTC 2026 Doctor',
      description: 'For emergency physicians, intensivists, and trauma consultants',
      price: '$599',
      note: 'Per attendee (March 24-27, 2026)',
      features: [
        'Full access to all clinical sessions',
        'Advanced trauma and critical care workshops',
        'Expert panel discussions',
        'Healthcare networking forums',
      ],
      cta: 'Register as Doctor',
    },
    {
      label: 'Nurse Pass',
      title: 'ECTC 2026 Nurse',
      description: 'For emergency, ICU, trauma, and critical care nursing professionals',
      price: '$399',
      note: 'Per attendee (March 24-27, 2026)',
      features: [
        'Full access to nursing-relevant sessions',
        'Hands-on emergency care workshops',
        'Case-based trauma discussions',
        'Healthcare networking forums',
      ],
      cta: 'Register as Nurse',
    },
    {
      label: 'Resident/Student Pass',
      title: 'ECTC 2026 Resident',
      description: 'For residents, fellows, interns, and medical/nursing students',
      price: '$249',
      note: 'Per attendee (March 24-27, 2026)',
      features: [
        'Full access to all core sessions',
        'Skills-focused emergency workshops',
        'Mentorship and career networking',
        'Digital clinical resource materials',
      ],
      cta: 'Register as Resident/Student',
    }]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-80 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-secondary to-background">
             <div className="absolute inset-1 z-0">
                      <Image
                        src="/images/Register.jpg"
                        alt="Emergency care conference venue"
                        fill
                        className="object-cover object-top"
                        priority
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" /> */}
                    </div>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl font-light tracking-tight text-foreground">
              Registration Fees
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join ECTC 2026 to learn from emergency medicine, critical care, and trauma experts.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {tickets.map((ticket, idx) => (
            <Card key={idx} className="bg-card border-primary/20 border-2 p-8 flex flex-col relative overflow-hidden group">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Badge */}
              <div className="relative mb-6">
                <div className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/30">
                  {ticket.label}
                </div>
              </div>

              {/* Content */}
              <div className="relative flex flex-col h-full">
                <h2 className="text-3xl font-light text-foreground mb-3">
                  {ticket.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {ticket.description}
                </p>

                {/* Price Section */}
                <div className="mb-6 p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-light text-primary">
                      {ticket.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {ticket.note}
                  </p>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-foreground mb-4">
                    What's Included:
                  </h3>
                  <div className="space-y-3">
                    {ticket.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 p-1 bg-accent/20 rounded-full">
                          <Check size={16} className="text-accent" />
                        </div>
                        <p className="text-foreground/80">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA - Pricing Display Only */}
                <div className="space-y-3 mt-auto">
                  <p className="text-center text-sm text-muted-foreground">
                    Early registration available until February 28, 2026
                  </p>
                  <p className="text-center text-sm font-medium text-foreground/70">
                    {ticket.cta}
                  </p>
                </div>
              </div>
            </Card>
          ))}
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
                a: 'Yes, we offer group registration support for hospital teams of 5 or more participants.',
              },
              {
                q: 'Can I get a refund?',
                a: 'Refunds are available if cancellation is requested at least 15 days before the conference start date.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept credit cards, debit cards, and bank transfers for registration payment.',
              },
              {
                q: 'Will recordings be provided?',
                a: 'Yes, session recordings are shared with registered attendees after the conference.',
              },
              {
                q: 'Is accommodation included?',
                a: 'Accommodation is not included, but recommended nearby hotels are shared with attendees.',
              },
              {
                q: 'Can I bring a guest?',
                a: 'Each registration is valid for one attendee. Additional participants require separate registration.',
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
            Contact our conference team for help with registration, institutional groups, or program-related questions.
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
