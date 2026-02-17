'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Wifi, UtensilsCrossed, Accessibility } from 'lucide-react';

export function VenueDetails() {
  const amenities = [
    { icon: Wifi, name: 'High-Speed WiFi', description: 'Throughout the venue' },
    { icon: UtensilsCrossed, name: 'Catering Services', description: 'Meals & refreshments included' },
    { icon: Accessibility, name: 'Accessibility', description: 'Wheelchair accessible facilities' },
    { icon: Clock, name: '24/7 Support', description: 'Dedicated event team available' },
  ];

  return (
    <section id="venue" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
            Venue Details
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us at India's premier medical conference venue in the heart of New Delhi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Venue Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/venue-modern.jpg"
              alt="ECTC Venue - Modern Conference Center"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Venue Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-foreground mb-4">
                Rajendra Prasad Auditorium
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Located in the heart of New Delhi, our state-of-the-art venue offers the perfect setting for medical professionals to connect, learn, and grow together. With world-class facilities and comprehensive amenities, we ensure an unforgettable conference experience.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg mt-1">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    Rajendra Prasad Auditorium<br />
                    Mandi House, New Delhi 110001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-lg mt-1">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">
                    <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                      +91 (800) 123-4567
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg mt-1">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:venue@ectc2025.com" className="hover:text-primary transition-colors">
                      venue@ectc2025.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-secondary/40 rounded-lg p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-4">Venue Specifications</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Capacity</p>
                  <p className="font-semibold text-foreground">5,000+ attendees</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Exhibition Space</p>
                  <p className="font-semibold text-foreground">25,000 sq ft</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Breakout Rooms</p>
                  <p className="font-semibold text-foreground">15+ rooms</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Parking</p>
                  <p className="font-semibold text-foreground">1,000+ spaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities Grid */}
        <div>
          <h3 className="text-3xl font-semibold text-foreground mb-12 text-center">
            Premium Amenities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Icon size={24} className="text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{amenity.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {amenity.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Directions */}
        <div className="mt-16 bg-secondary/30 rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Getting Here</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-2">By Air</h4>
              <p className="text-muted-foreground">
                Indira Gandhi International Airport (25 km away). Approximately 45 minutes drive or direct metro access.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">By Metro</h4>
              <p className="text-muted-foreground">
                Mandi House Metro Station is directly connected. Yellow Line provides easy access from the airport.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">By Road</h4>
              <p className="text-muted-foreground">
                Prime location in New Delhi with ample parking. Convenient access from major highways and arterial roads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
