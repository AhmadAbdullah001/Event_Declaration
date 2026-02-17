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
      title: 'Medical Experts',
      description: 'Connect with emergency physicians and healthcare professionals from around the world.',
    },
    {
      icon: Zap,
      title: 'Clinical Updates',
      description: 'Learn the latest advancements shaping emergency, critical care, and trauma practice.',
    },
    {
      icon: Sparkles,
      title: 'Hands-On Learning',
      description: 'Participate in practical workshops, expert lectures, and peer networking sessions.',
    },
  ];

  const ticketPlans = [
    {
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
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Image */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bg.jpg"
            alt="Emergency care conference venue"
            fill
            className="object-cover"
            priority
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" /> */}
        </div>

        {/* Gradient overlay elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-20">
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight text-foreground text-pretty leading-tight">
              Emergency Critical Care and
              <span className="block mt-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                Trauma Conference
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto text-pretty leading-relaxed">
             Join leading emergency physicians, critical care specialists, and trauma experts. Connect, learn, and strengthen life-saving skills at the Emergency Critical Care and Trauma Conference 2026.
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center py-8">
            <div className="flex items-center gap-3 bg-background/60 backdrop-blur px-6 py-3 rounded-lg border border-primary/20">
              <MapPin size={20} className="text-accent flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-foreground/60 uppercase tracking-wide">Location</p>
                <p className="text-foreground font-medium">Kathmandu</p>
              </div>
            </div>
            <div className="h-px w-12 bg-border hidden sm:block" />
            <div className="flex items-center gap-3 bg-background/60 backdrop-blur px-6 py-3 rounded-lg border border-primary/20">
              <Calendar size={20} className="text-accent flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-foreground/60 uppercase tracking-wide">Dates</p>
                <p className="text-foreground font-medium">March 24-27, 2026</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/registration">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-8 font-medium shadow-md hover:shadow-lg"
              >
                View Registration Fees
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div> */}
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
              ECTC 2026 is a focused medical conference designed to educate, support, and connect professionals in emergency medicine, critical care, and trauma. Featuring renowned clinicians, practical workshops, and meaningful networking, the conference centers on advancing clinical practice and improving patient outcomes.              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
              This event brings together physicians, healthcare teams, and specialists for focused days of learning, collaboration, and sharing life-saving expertise in emergency and critical care.              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/speaker-keynote.jpg"
                alt="Emergency medicine keynote speaker"
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
            Why Attend ECTC 2026
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

      {/* Registration Fees */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-16 text-center">
            Registration Fees
          </h2>

          <div className="grid md:grid-cols-3 gap-2">
            {ticketPlans.map((plan, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-card to-card/80 border-2 border-primary/30 p-8 flex flex-col relative overflow-hidden group">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative flex flex-col h-full">
                  <div className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-medium rounded-lg border border-accent/40 mb-6">
                    {plan.label}
                  </div>

                  <h3 className="text-3xl font-light text-foreground mb-3">
                    {plan.title}
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    {plan.description}
                  </p>

                  {/* Price Section */}
                  <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-6xl font-light text-primary">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {plan.note}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="text-lg font-medium text-foreground mb-4">What's Included:</h4>
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-start gap-3">
                          <div className="mt-1 p-1 bg-accent/30 rounded-full">
                            <ArrowRight size={14} className="text-accent" />
                          </div>
                          <p className="text-foreground">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="space-y-4 mt-auto">
                    <Link href="/registration" className="block">
                      <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium py-6 text-base hover:shadow-lg hover:shadow-accent/50 transition-all duration-300">
                        {plan.cta}
                        <ArrowRight size={20} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Early registration available until February 28, 2026
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-16 text-center">
            Conference Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: '/images/networking-event.jpg', alt: 'Clinical Networking', title: 'Clinical Networking' },
              { src: '/images/workshop-session.jpg', alt: 'Trauma Workshops', title: 'Trauma Workshops' },
              { src: '/images/attendees-group.jpg', alt: 'Healthcare Teams', title: 'Healthcare Teams' },
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
            Prepare for ECTC 2026
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join physicians, trauma specialists, and healthcare providers for an impactful clinical learning experience. Reserve your place today.
          </p>
          <Link href="/registration">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 px-8 font-medium"
            >
              View Registration Fees
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

