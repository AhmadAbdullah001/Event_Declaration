import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - ECTC 2026 Conference Support & Inquiries',
  description: 'Contact the ECTC 2026 organizing team for registration help, program inquiries, and venue details. Email info@ectc2026.org or call +977-1-555-0123. Bhrikutimandap, Kathmandu, Nepal.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us - ECTC 2026 Conference Support & Inquiries',
    description: 'Reach the ECTC 2026 team for registration, program, or venue inquiries. Email info@ectc2026.org or call +977-1-555-0123.',
    url: '/contact',
    images: [
      {
        url: '/images/contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact ECTC 2026 - Emergency Critical Care Conference Support',
      },
    ],
  },
};

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'For registration and conference support',
      value: 'info@ectc2026.org',
      link: 'mailto:info@ectc2026.org',
    },
    {
      icon: Phone,
      title: 'Call Coordination',
      description: 'Our team is available 9 AM - 5 PM NPT',
      value: '+977-1-555-0123',
      link: 'tel:+977-1-555-0123',
    },
    {
      icon: MapPin,
      title: 'Conference Venue',
      description: 'ECTC organizing office in Kathmandu',
      value: 'Bhrikutimandap, Kathmandu 44600',
      link: 'https://maps.google.com',
    },
  ];

  const faqItems = [
    {
      q: 'How do I contact support for ticket issues?',
      a: 'Email us at info@ectc2026.org with your registration ID or call +977-1-555-0123 during support hours.',
    },
    {
      q: 'What is the refund policy?',
      a: 'Refunds are available up to 14 days before the conference. After that, registrations are non-refundable but transferable.',
    },
    {
      q: 'Can I change my registration information?',
      a: 'Yes, you can update your registration details up to 7 days before the conference. Contact support for assistance.',
    },
    {
      q: 'Is there parking available at the venue?',
      a: 'Yes, parking is available at the venue. Refer to the venue information guide for access details.',
    },
    {
      q: 'How do I arrange accommodation?',
      a: 'Recommended nearby hotels will be shared with registered attendees before ECTC 2026.',
    },
  ];

  const contactPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact ECTC 2026',
    description: 'Contact the ECTC 2026 organizing team for registration help, program inquiries, and venue details.',
    url: 'https://ectc2026.org/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'ECTC 2026',
      email: 'info@ectc2026.org',
      telephone: '+977-1-555-0123',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bhrikutimandap',
        addressLocality: 'Kathmandu',
        postalCode: '44600',
        addressCountry: 'NP',
      },
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />

        <main>
          {/* Hero Section */}
          <section className="relative min-h-96 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-secondary/50 to-background">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/contact.jpg"
                alt="Contact ECTC 2026 conference organizing team in Kathmandu"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
              {/* <h1 className="text-6xl sm:text-7xl font-light tracking-tight text-foreground">
                Contact ECTC 2026
              </h1> */}
              {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about registration, sessions, or logistics? Our team is here to help.
              </p> */}
            </div>
          </section>

          {/* Contact Methods */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-20">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.link}
                      target={method.title === 'Conference Venue' ? '_blank' : undefined}
                      rel={method.title === 'Conference Venue' ? 'noopener noreferrer' : undefined}
                      className="group"
                    >
                      <Card className="bg-card border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 p-8 h-full flex flex-col items-center text-center">
                        <div className="inline-block p-3 bg-accent/20 group-hover:bg-accent/30 transition-colors mb-4 rounded-lg">
                          <Icon size={24} className="text-accent" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-medium text-foreground mb-2">
                          {method.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {method.description}
                        </p>
                        <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                          {method.value}
                        </p>
                      </Card>
                    </a>
                  );
                })}
              </div>

              {/* Operating Hours */}
              <div className="bg-card/50 border border-border rounded-lg p-8 flex items-start gap-4">
                <Clock size={24} className="text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-3">Operating Hours</h4>
                  <p className="text-muted-foreground mb-4">
                    Our support desk is available during these hours:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-foreground font-medium">Monday - Friday</p>
                      <p className="text-muted-foreground">9:00 AM - 5:00 PM NPT</p>
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Saturday - Sunday</p>
                      <p className="text-muted-foreground">10:00 AM - 3:00 PM NPT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-8 text-center">
                Send a Message
              </h2>

              <Card className="bg-card/50 border-border p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input
                        id="first-name"
                        type="text"
                        name="first-name"
                        autoComplete="given-name"
                        placeholder="Aarav"
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        type="text"
                        name="last-name"
                        autoComplete="family-name"
                        placeholder="Sharma"
                        className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="doctor@example.com"
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder="Registration assistance"
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your question regarding ECTC 2026..."
                      rows={6}
                      className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-8 font-medium shadow-md hover:shadow-lg"
                  >
                    Send Message
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    We typically respond to all conference inquiries within 24 hours.
                  </p>
                </form>
              </Card>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-8 text-center">
                Venue Location
              </h2>
              <div className="h-96 bg-muted rounded-lg border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Kathmandu,+Nepal&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ECTC 2026 venue location - Bhrikutimandap Convention Area, Kathmandu, Nepal"
                />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-16 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {faqItems.map((faq, idx) => (
                  <Card key={idx} className="bg-card/50 border-border p-6">
                    <h3 className="text-lg font-medium text-foreground mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
