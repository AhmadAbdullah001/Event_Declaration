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

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 -z-20" style={{ backgroundAttachment: 'fixed' }}>
          <Image
            src="/images/hero-emergency.jpg"
            alt="Emergency care team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/30 to-accent/30" />
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-red-500/30 backdrop-blur text-white rounded-full text-sm font-bold border border-red-400/50">
              March 20-22, 2025
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white text-pretty leading-tight drop-shadow-lg">
              Emergency, Critical Care &
              <span className="block mt-4 bg-gradient-to-r from-red-300 via-orange-200 to-yellow-200 bg-clip-text text-transparent">
                Trauma Conference
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed drop-shadow">
              Connect with leading emergency medicine physicians, trauma surgeons, and critical care specialists. Master life-saving protocols and the latest trauma management innovations.
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center py-8">
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
              <MapPin size={20} className="text-red-200 flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-white/70 uppercase tracking-wide font-semibold">Location</p>
                <p className="text-white font-bold">New Delhi, India</p>
              </div>
            </div>
            <div className="h-px w-12 bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition-all">
              <Calendar size={20} className="text-cyan-200 flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-white/70 uppercase tracking-wide font-semibold">Date</p>
                <p className="text-white font-bold">3 Days</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/registration">
              <Button
                size="lg"
                className="group bg-red-600 text-white hover:bg-red-700 transition-all duration-300 px-8 font-bold shadow-lg hover:shadow-xl"
              >
                View Tickets
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Event Section with Parallax */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundAttachment: 'fixed', backgroundImage: 'url(/images/trauma-center.jpg)', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary/50 -z-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                About ECTC 2025
              </h2>
              <p className="text-lg text-white/90 leading-relaxed font-medium">
                The Emergency, Critical Care and Trauma Conference is the premier gathering for healthcare professionals dedicated to emergency medicine, trauma care, and critical care management.
              </p>
              <p className="text-lg text-white/90 leading-relaxed font-medium">
                Join 1,000+ physicians, nurses, paramedics, and medical professionals for intensive learning, advanced simulations, and networking with global experts shaping emergency care.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 text-white">
                  <Award className="text-yellow-300" size={24} />
                  <span className="font-bold">World-Class Speakers</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Heart className="text-red-300" size={24} />
                  <span className="font-bold">Practical Training</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl border-4 border-white/20">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-16 text-center">
            Why Attend ECTC
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const colors = ['from-red-500 to-orange-500', 'from-orange-500 to-yellow-500', 'from-cyan-500 to-blue-500'];
              return (
                <Card
                  key={index}
                  className="group relative bg-white border-0 hover:shadow-xl transition-all duration-300 overflow-hidden p-8"
                >
                  {/* Gradient top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors[index]}`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />

                  <div className="space-y-4">
                    <div className={`inline-block p-3 bg-gradient-to-br ${colors[index]} rounded-lg group-hover:shadow-lg transition-all duration-300`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ticket Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-16 text-center">
            Ticket Categories
          </h2>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {ticketCategories.map((ticket, index) => (
              <Card 
                key={index}
                className={`relative p-8 flex flex-col ${ticket.highlighted ? 'md:scale-105 border-2 border-red-500 shadow-2xl' : 'border'} overflow-hidden group hover:shadow-xl transition-all duration-300`}
              >
                {/* Gradient top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${ticket.color}`} />
                
                {ticket.highlighted && <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full">POPULAR</div>}

                <div className="relative">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{ticket.name}</h3>
                  
                  {/* Price */}
                  <div className={`mb-8 p-6 bg-gradient-to-r ${ticket.color} rounded-lg text-white`}>
                    <div className="text-4xl font-bold mb-2">{ticket.price}</div>
                    <p className="text-sm opacity-90">Per person (3 days)</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8 space-y-3 flex-1">
                    {ticket.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-1 p-1 bg-gradient-to-r ${ticket.color} rounded-full`}>
                          <ArrowRight size={14} className="text-white" />
                        </div>
                        <p className="text-foreground text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href="/registration" className="block w-full">
                    <Button className={`w-full font-bold py-6 text-lg transition-all duration-300 bg-gradient-to-r ${ticket.color} text-white hover:shadow-lg`}>
                      Get Tickets
                      <ArrowRight size={20} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Early bird pricing available until February 15, 2025. Group discounts available for 10+ attendees.
          </p>
        </div>
      </section>

      {/* Venue Details Section with Parallax */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundAttachment: 'fixed', backgroundImage: 'url(/images/venue-exterior.jpg)', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/40 -z-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-16 text-center">
            Venue Details
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-white">
              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <MapPin size={28} className="text-red-400" />
                  Venue Location
                </h3>
                <p className="text-lg font-medium">Delhi Convention Center</p>
                <p className="text-white/80">Pragati Maidan, New Delhi 110001, India</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <Calendar size={28} className="text-cyan-400" />
                  Dates & Hours
                </h3>
                <p className="text-lg font-medium">March 20-22, 2025</p>
                <p className="text-white/80">9:00 AM - 6:00 PM (Daily)</p>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/20">
                <h4 className="font-bold mb-3">Facilities Available:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">✓ State-of-the-art auditoriums</li>
                  <li className="flex items-center gap-2">✓ Simulation labs & training areas</li>
                  <li className="flex items-center gap-2">✓ On-site medical facilities</li>
                  <li className="flex items-center gap-2">✓ Free Wi-Fi & parking</li>
                </ul>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl border-4 border-white/20">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
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
              <div key={idx} className="group relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 group-hover:from-red-600/70 transition-colors duration-300">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4 text-center">
            Our Sponsors
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            ECTC 2025 is supported by leading medical technology and healthcare companies committed to advancing emergency care.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.map((sponsor, idx) => {
              const colors = {
                'Platinum': 'from-amber-500 to-yellow-600',
                'Gold': 'from-orange-400 to-amber-500',
                'Silver': 'from-gray-400 to-slate-500',
              };
              return (
                <Card
                  key={idx}
                  className={`p-6 text-center border-0 hover:shadow-lg transition-all group cursor-pointer`}
                >
                  <div className={`h-24 bg-gradient-to-br ${colors[sponsor.category as keyof typeof colors] || colors['Silver']} rounded-lg mb-4 flex items-center justify-center group-hover:shadow-lg transition-all`}>
                    <span className="text-white font-bold text-2xl">{sponsor.name.split(' ')[0]}</span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{sponsor.name}</h4>
                  <p className={`text-xs font-bold px-3 py-1 rounded-full inline-block ${
                    sponsor.category === 'Platinum' ? 'bg-amber-100 text-amber-800' :
                    sponsor.category === 'Gold' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {sponsor.category} Sponsor
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">Interested in sponsoring ECTC 2025?</p>
            <Link href="/contact">
              <Button className="bg-red-600 text-white hover:bg-red-700 font-bold">
                Become a Sponsor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 via-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
            Join the Emergency Care Revolution
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium">
            Connect with 1,000+ emergency medicine professionals, trauma surgeons, and critical care experts. Reserve your spot at ECTC 2025 today and advance your emergency care expertise.
          </p>
          <Link href="/registration">
            <Button
              size="lg"
              className="group bg-white text-red-600 hover:bg-red-50 font-bold px-8 shadow-lg hover:shadow-xl transition-all duration-300"
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
