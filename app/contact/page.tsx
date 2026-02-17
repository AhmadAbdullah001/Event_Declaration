import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-secondary/50 to-background">
        {/* <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div> */}
         <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/contact.jpg"
                    alt="Emergency care conference venue"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" /> */}
                </div>

        {/* <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-6xl sm:text-7xl font-light tracking-tight text-foreground">
            Contact ECTC 2026
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about registration, sessions, or logistics? Our team is here to help.
          </p>
        </div> */}
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
                      <Icon size={24} className="text-accent" />
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
            <Clock size={24} className="text-accent flex-shrink-0 mt-1" />
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
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Aarav"
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Sharma"
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="doctor@example.com"
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Registration assistance"
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your question regarding ECTC 2026..."
                  rows={6}
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                />
              </div>

            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-8 font-medium shadow-md hover:shadow-lg"
            >
              View Registration Fees
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
            {[
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
            ].map((faq, idx) => (
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

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-foreground font-medium mb-4">ECTC 2026</h4>
              <p className="text-muted-foreground text-sm">Emergency Critical Care and Trauma Conference.</p>
            </div>
            <div>
              <h4 className="text-foreground font-medium mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact Desk
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2026 ECTC. All rights reserved. Built for Emergency Critical Care and Trauma Conference.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
