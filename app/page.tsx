'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, MapPin, Calendar, Users, Zap, Sparkles, Heart, AlertCircle, Stethoscope, Award } from 'lucide-react';

export default function Home() {
  const highlights = [
    {
      icon: Heart,
      title: 'Critical Care Excellence',
      description: 'Learn advanced protocols and best practices in critical care from top intensivists worldwide.',
    },
    {
      icon: AlertCircle,
      title: 'Emergency Response',
      description: 'Master emergency medicine techniques and trauma management from leading experts.',
    },
    {
      icon: Stethoscope,
      title: 'Hands-on Training',
      description: 'Participate in interactive workshops, simulations, and case studies with real-world scenarios.',
    },
  ];

  const ticketCategories = [
    {
      name: 'Standard Pass',
      price: '₹4,999',
      color: 'from-blue-500 to-cyan-500',
      features: ['3-day conference access', 'All keynote sessions', 'Digital materials', 'Certificate of attendance'],
    },
    {
      name: 'Premium Pass',
      price: '₹7,999',
      color: 'from-red-500 to-orange-500',
      features: ['All Standard features', 'VIP networking lunch', 'Meet & greet with speakers', 'Recorded sessions access', 'Merchandise bundle'],
      highlighted: true,
    },
    {
      name: 'Professional Pass',
      price: '₹10,999',
      color: 'from-purple-500 to-pink-500',
      features: ['All Premium features', 'Priority seating', 'Private roundtable discussion', '6-month online access', 'CME credits'],
    },
  ];

  const sponsors = [
    { name: 'MedTech Solutions', category: 'Platinum' },
    { name: 'Emergency Care Inc.', category: 'Gold' },
    { name: 'Trauma Systems', category: 'Gold' },
    { name: 'Healthcare Innovations', category: 'Silver' },
    { name: 'Critical Devices', category: 'Silver' },
    { name: 'Med Equipment Pro', category: 'Silver' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/hero-emergency.jpg"
            alt="Emergency care team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
              March 20-22, 2025
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white text-pretty leading-tight">
              Emergency, Critical Care and Trauma Conference
            </h1>
            <p className="text-xl text-white/95 max-w-2xl mx-auto text-pretty leading-relaxed font-medium">
              Connect with leading emergency medicine physicians, trauma surgeons, and critical care specialists. Master life-saving protocols and the latest innovations in emergency care.
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center py-8">
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur px-6 py-3 rounded-lg">
              <MapPin size={20} className="text-accent flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-white/70 uppercase tracking-wide">Location</p>
                <p className="text-white font-semibold">New Delhi, India</p>
              </div>
            </div>
            <div className="h-px w-12 bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur px-6 py-3 rounded-lg">
              <Calendar size={20} className="text-accent flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-white/70 uppercase tracking-wide">Date</p>
                <p className="text-white font-semibold">3 Days</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/registration">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-8 font-semibold shadow-lg hover:shadow-xl"
              >
                View Tickets
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Event Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
                About ECTC 2025
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Emergency, Critical Care and Trauma Conference is the premier gathering for healthcare professionals dedicated to emergency medicine, trauma care, and critical care management.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join 1,000+ physicians, nurses, paramedics, and medical professionals for intensive learning, advanced simulations, and networking with global experts shaping the future of emergency care.
              </p>
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="text-primary" size={20} />
                  </div>
                  <span className="text-foreground font-semibold">World-Class International Speakers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Heart className="text-accent" size={20} />
                  </div>
                  <span className="text-foreground font-semibold">Hands-on Practical Training</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/conference-speakers.jpg"
                alt="Medical conference"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conference Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-16 text-center">
            Why Attend ECTC
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const accentColors = ['text-primary', 'text-accent', 'text-primary'];
              const bgColors = ['bg-primary/10', 'bg-accent/10', 'bg-primary/10'];
              return (
                <Card
                  key={index}
                  className="group relative bg-white hover:shadow-lg transition-all duration-300 overflow-hidden p-8 border-0"
                >
                  <div className="space-y-4">
                    <div className={`inline-block p-3 ${bgColors[index]} rounded-lg`}>
                      <Icon size={24} className={accentColors[index]} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ticket Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-16 text-center">
            Ticket Categories
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {ticketCategories.map((ticket, index) => {
              const ticketColors = {
                'Standard Pass': { bg: 'bg-blue-50', border: 'border-blue-200', accent: 'bg-blue-100 text-blue-700' },
                'Premium Pass': { bg: 'bg-red-50', border: 'border-red-200', accent: 'bg-red-100 text-red-700' },
                'Professional Pass': { bg: 'bg-purple-50', border: 'border-purple-200', accent: 'bg-purple-100 text-purple-700' },
              };
              const colors = ticketColors[ticket.name as keyof typeof ticketColors];
              return (
                <Card 
                  key={index}
                  className={`relative p-8 flex flex-col border-2 overflow-hidden group hover:shadow-lg transition-all duration-300 ${colors.border} ${colors.bg} ${ticket.highlighted ? 'md:scale-105 ring-2 ring-primary shadow-lg' : ''}`}
                >
                  {ticket.highlighted && <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">MOST POPULAR</div>}

                  <div className="relative">
                    <h3 className="text-xl font-bold text-foreground mb-4">{ticket.name}</h3>
                    
                    {/* Price */}
                    <div className={`mb-8 p-4 ${colors.accent} rounded-lg`}>
                      <div className="text-3xl font-bold mb-1">{ticket.price}</div>
                      <p className="text-sm opacity-90">Per person (3 days)</p>
                    </div>

                    {/* Features */}
                    <div className="mb-8 space-y-2 flex-1">
                      {ticket.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="mt-1 text-primary">✓</div>
                          <p className="text-foreground text-sm">{feature}</p>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link href="/registration" className="block w-full">
                      <Button className={`w-full font-semibold py-5 text-base transition-all duration-300 ${ticket.highlighted ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-foreground text-background hover:bg-foreground/90'}`}>
                        Get Tickets
                        <ArrowRight size={18} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Early bird pricing available until February 15, 2025. Group discounts available for 10+ attendees.
          </p>
        </div>
      </section>

      {/* Venue Details Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-16 text-center">
            Venue Details
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <MapPin size={24} className="text-primary" />
                  Venue Location
                </h3>
                <p className="font-semibold text-foreground">Delhi Convention Center</p>
                <p className="text-muted-foreground text-sm">Pragati Maidan, New Delhi 110001, India</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <Calendar size={24} className="text-accent" />
                  Dates & Hours
                </h3>
                <p className="font-semibold text-foreground">March 20-22, 2025</p>
                <p className="text-muted-foreground text-sm">9:00 AM - 6:00 PM (Daily)</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                <h4 className="font-bold text-foreground mb-3">Facilities Available:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> State-of-the-art auditoriums</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Simulation labs & training areas</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> On-site medical facilities</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Free Wi-Fi & parking</li>
                </ul>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/medical-training.jpg"
                alt="Medical training setup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-16 text-center">
            Event Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: '/images/medical-networking.jpg', alt: 'Networking', title: 'Networking' },
              { src: '/images/trauma-center.jpg', alt: 'Trauma Care', title: 'Trauma Care' },
              { src: '/images/medical-training.jpg', alt: 'Training', title: 'Training' },
            ].map((item, idx) => (
              <div key={idx} className="group relative h-80 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 text-center">
            Our Sponsors
          </h2>
          <p className="text-base text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            ECTC 2025 is supported by leading medical technology and healthcare companies committed to advancing emergency care.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.map((sponsor, idx) => {
              const categoryColors = {
                'Platinum': { bg: 'bg-amber-50', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-800' },
                'Gold': { bg: 'bg-orange-50', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-800' },
                'Silver': { bg: 'bg-gray-50', text: 'text-gray-700', badge: 'bg-gray-100 text-gray-800' },
              };
              const colors = categoryColors[sponsor.category as keyof typeof categoryColors];
              return (
                <Card
                  key={idx}
                  className={`p-6 text-center border border-border hover:shadow-md transition-all group cursor-pointer ${colors.bg}`}
                >
                  <div className={`h-20 rounded-lg mb-4 flex items-center justify-center font-bold text-lg ${colors.text}`}>
                    {sponsor.name}
                  </div>
                  <p className={`text-xs font-semibold px-3 py-1 rounded-full inline-block ${colors.badge}`}>
                    {sponsor.category}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4 text-sm">Interested in sponsoring ECTC 2025?</p>
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Become a Sponsor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Ready to Advance Your Emergency Care Expertise?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Connect with 1,000+ emergency medicine professionals, trauma surgeons, and critical care experts. Reserve your spot at ECTC 2025 today.
          </p>
          <Link href="/registration">
            <Button
              size="lg"
              className="group bg-white text-primary hover:bg-white/90 font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Your Tickets Now
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
