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
      title: 'Email Us',
      description: 'For general inquiries and support',
      value: 'hello@summit2025.com',
      link: 'mailto:hello@summit2025.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Our team is available 9 AM - 5 PM EST',
      value: '+1 (212) 555-0123',
      link: 'tel:+1-212-555-0123',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Summit headquarters in New York',
      value: '123 Main Street, NYC 10001',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-secondary/50 to-background">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-6xl sm:text-7xl font-light tracking-tight text-foreground">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Our team is here to help. Contact us anytime.
          </p>
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
                  target={method.title === 'Visit Us' ? '_blank' : undefined}
                  rel={method.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
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
                Our team is available to answer your questions during business hours:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-foreground font-medium">Monday - Friday</p>
                  <p className="text-muted-foreground">9:00 AM - 5:00 PM EST</p>
                </div>
                <div>
                  <p className="text-foreground font-medium">Saturday - Sunday</p>
                  <p className="text-muted-foreground">10:00 AM - 3:00 PM EST</p>
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
            Send us a Message
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
                    placeholder="John"
                    className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
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
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                />
              </div>

            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-8 font-medium shadow-md hover:shadow-lg"
            >
              View Pricing
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

              <p className="text-center text-xs text-muted-foreground">
                We typically respond to all inquiries within 24 hours.
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-8 text-center">
            Find Us
          </h2>
          <div className="h-96 bg-muted rounded-lg border border-border overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00601562346047!3d40.71282314279166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3855555%3A0xce36da7f474e2e5!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1"
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
                a: 'Email us at hello@summit2025.com with your ticket number or call +1 (212) 555-0123 during business hours.',
              },
              {
                q: 'What is the refund policy?',
                a: 'Refunds are available up to 14 days before the event. Tickets are non-refundable after that date but can be transferred to another person.',
              },
              {
                q: 'Can I change my registration information?',
                a: 'Yes, you can update your information up to 7 days before the event. Contact our support team for assistance.',
              },
              {
                q: 'Is there parking available at the venue?',
                a: 'Yes, there is ample parking available at The Grand Convention Center. Download our venue information guide for details.',
              },
              {
                q: 'How do I arrange accommodation?',
                a: 'Visit our Accommodation page for information about nearby hotels with special Summit 2025 rates.',
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
              <h4 className="text-foreground font-medium mb-4">SUMMIT</h4>
              <p className="text-muted-foreground text-sm">The world's premier conference experience.</p>
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
                    Help Center
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
            <p>&copy; 2025 Summit. All rights reserved. Crafted with precision and care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
