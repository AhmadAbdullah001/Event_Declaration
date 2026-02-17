'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { TicketCategories } from '@/components/ticket-categories';
import { VenueDetails } from '@/components/venue-details';
import { SponsorsSection } from '@/components/sponsors-section';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, MapPin, Calendar, Users, Heart, Zap, Sparkles, Stethoscope } from 'lucide-react';

export default function Home() {
  const highlights = [
    {
      icon: Stethoscope,
      title: 'Expert Clinicians',
      description: 'Connect with 5,000+ emergency, critical care, and trauma specialists worldwide.',
    },
    {
      icon: Heart,
      title: 'Life-Saving Knowledge',
      description: 'Learn latest evidence-based practices and innovative emergency care techniques.',
    },
    {
      icon: Zap,
      title: 'Hands-On Training',
      description: 'Interactive workshops, case discussions, and simulation training sessions.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Image */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/hero-medical.jpg"
            alt="Emergency, Critical Care and Trauma Conference"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        </div>

        {/* Gradient overlay elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/40">
              March 15-16, 2025
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-pretty leading-tight">
              Emergency, Critical Care
              <span className="block mt-3 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                and Trauma Conference
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto text-pretty leading-relaxed">
              Join 5,000+ healthcare professionals for cutting-edge emergency care, critical care management, and trauma surgery expertise.
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center py-8">
            <div className="flex items-center gap-3 bg-background/70 backdrop-blur px-6 py-3 rounded-lg border border-primary/20">
              <MapPin size={20} className="text-accent flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-foreground/60 uppercase tracking-wide">Venue</p>
                <p className="text-foreground font-medium">New Delhi, India</p>
              </div>
            </div>
            <div className="h-px w-12 bg-border hidden sm:block" />
            <div className="flex items-center gap-3 bg-background/70 backdrop-blur px-6 py-3 rounded-lg border border-primary/20">
              <Calendar size={20} className="text-accent flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-foreground/60 uppercase tracking-wide">Date</p>
                <p className="text-foreground font-medium">March 15-16, 2025</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="#tickets">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg transition-all duration-300 px-8 font-medium shadow-md"
              >
                View Tickets
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Intro with Image */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-6">
                About ECTC 2025
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Emergency, Critical Care and Trauma Conference (ECTC) is Asia's premier gathering for emergency medicine, critical care, and trauma surgery specialists. Featuring world-renowned clinicians, cutting-edge research presentations, and interactive hands-on training sessions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Over three transformative days, healthcare professionals will enhance their clinical skills, stay updated with the latest evidence-based practices, and network with leaders in emergency and trauma care.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="text-2xl font-bold text-primary">5000+</p>
                  <p className="text-sm text-muted-foreground">Attendees</p>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <p className="text-2xl font-bold text-accent">100+</p>
                  <p className="text-sm text-muted-foreground">Speakers</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="text-2xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Sessions</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about-medical.jpg"
                alt="Medical professionals at ECTC"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-16 text-center">
            Why Attend ECTC 2025
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="group relative bg-card border border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden p-8"
                >
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                  <div className="space-y-4">
                    <div className="inline-block p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors duration-300">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ticket Categories Component */}
      <TicketCategories />

      {/* Conference Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-16 text-center">
            Conference Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: '/images/event-highlights.jpg', alt: 'Medical Training', title: 'Hands-On Training' },
              { src: '/images/about-medical.jpg', alt: 'Expert Speakers', title: 'Expert Speakers' },
              { src: '/images/hero-medical.jpg', alt: 'Professional Network', title: 'Networking' },
            ].map((item, idx) => (
              <div key={idx} className="group relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 group-hover:from-primary/80 transition-colors duration-300">
                  <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl sm:text-6xl font-light tracking-tight text-foreground">
            Get Ready for Summit 2025
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join industry leaders, innovators, and visionaries for an unforgettable experience. Reserve your spot today.
          </p>
          <Link href="/registration">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 px-8 font-medium"
            >
              View Pricing
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
