'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, MapPin, Calendar, Users, Zap, Sparkles } from 'lucide-react';

export default function Home() {
  const highlights = [
    {
      icon: Users,
      title: 'Industry Leaders',
      description: 'Connect with 500+ professionals and innovators from around the world.',
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Insights',
      description: 'Learn latest trends and breakthroughs shaping the future of our industry.',
    },
    {
      icon: Sparkles,
      title: 'Unforgettable Experience',
      description: 'Immersive workshops, keynotes, and networking throughout the event.',
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
            src="/images/hero-conference.jpg"
            alt="Conference venue"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        {/* Gradient overlay elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/30">
              June 15-16, 2025
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight text-foreground text-pretty leading-tight">
              The World's Premier
              <span className="block mt-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Conference Experience
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto text-pretty leading-relaxed">
              Join industry visionaries, innovators, and leaders. Network, learn, and be inspired at Summit 2025.
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center py-8">
            <div className="flex items-center gap-3 bg-background/60 backdrop-blur px-6 py-3 rounded-lg border border-primary/20">
              <MapPin size={20} className="text-accent flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-foreground/60 uppercase tracking-wide">Location</p>
                <p className="text-foreground font-medium">New York City</p>
              </div>
            </div>
            <div className="h-px w-12 bg-border hidden sm:block" />
            <div className="flex items-center gap-3 bg-background/60 backdrop-blur px-6 py-3 rounded-lg border border-primary/20">
              <Calendar size={20} className="text-accent flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-foreground/60 uppercase tracking-wide">Duration</p>
                <p className="text-foreground font-medium">2 Days</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/registration">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-8 font-medium shadow-md hover:shadow-lg"
              >
                View Pricing
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Intro with Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-6">
                About This Event
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Summit 2025 is a carefully curated gathering designed to inspire, educate, and connect. Featuring world-renowned speakers, interactive workshops, and unparalleled networking opportunities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This event brings together the brightest minds in the industry for two transformative days of learning and collaboration.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/speaker-keynote.jpg"
                alt="Keynote speaker"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-16 text-center">
            Why Attend Summit
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

      {/* Ticket Pricing - Single Ticket */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-16 text-center">
            Ticket Pricing
          </h2>

          <Card className="bg-gradient-to-br from-card to-card/80 border-2 border-primary/30 p-10 flex flex-col relative overflow-hidden group">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative">
              <div className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-medium rounded-lg border border-accent/40 mb-6">
                Two-Day Conference Pass
              </div>

              <h3 className="text-4xl font-light text-foreground mb-3">
                Summit 2025 Full Pass
              </h3>
              <p className="text-muted-foreground text-xl mb-8">
                Complete access to all sessions, workshops, and networking events
              </p>

              {/* Price Section */}
              <div className="mb-10 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-7xl font-light text-primary">
                    ₹4,999
                  </span>
                </div>
                <p className="text-muted-foreground text-lg">
                  Per person (June 15-16, 2025)
                </p>
              </div>

              {/* Features List */}
              <div className="mb-10">
                <h4 className="text-lg font-medium text-foreground mb-6">What's Included:</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Full 2-day access to all sessions',
                    'Interactive workshops & breakouts',
                    'Keynote presentations',
                    'Networking events & mixers',
                    'Digital event materials',
                    'Speaker directory & profiles',
                    'Post-event video recordings',
                    'Certificate of attendance',
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-accent/30 rounded-full">
                        <ArrowRight size={14} className="text-accent" />
                      </div>
                      <p className="text-foreground text-lg">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <Link href="/registration" className="block">
                  <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium py-6 text-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300">
                    View Full Details
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                </Link>
                <p className="text-center text-sm text-muted-foreground">
                  Early bird pricing available until February 28, 2025
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-16 text-center">
            Event Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: '/images/networking-event.jpg', alt: 'Networking', title: 'Networking' },
              { src: '/images/workshop-session.jpg', alt: 'Workshops', title: 'Workshops' },
              { src: '/images/attendees-group.jpg', alt: 'Attendees', title: 'Community' },
            ].map((item, idx) => (
              <div key={idx} className="group relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 group-hover:from-primary/80 transition-colors duration-300">
                  <h3 className="text-white text-xl font-light">{item.title}</h3>
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
