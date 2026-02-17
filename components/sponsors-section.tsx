'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Sponsor {
  name: string;
  category: string;
  description?: string;
}

export function SponsorsSection() {
  const sponsors = {
    title: [
      { name: 'MediCare Global', category: 'Title Sponsor', description: 'Leading healthcare innovators' },
      { name: 'Emergency Plus', category: 'Title Sponsor', description: 'Emergency response solutions' },
    ],
    gold: [
      { name: 'HealthTech Solutions' },
      { name: 'Critical Care Systems' },
      { name: 'Trauma Management Inc' },
      { name: 'Medical Devices Ltd' },
    ],
    silver: [
      { name: 'Hospitals Network' },
      { name: 'Diagnostic Services' },
      { name: 'Medical Education' },
      { name: 'Research Institute' },
      { name: 'Healthcare Analytics' },
      { name: 'Pharma Solutions' },
    ],
    bronze: [
      { name: 'Med Publishing' },
      { name: 'Clinical Training' },
      { name: 'Hospital Supply' },
      { name: 'Tech Innovation' },
      { name: 'Care Solutions' },
      { name: 'Wellness Center' },
      { name: 'Medical Services' },
      { name: 'Emergency Care' },
    ],
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-4">
            Our Partners & Sponsors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're grateful to our partners who make ECTC possible. Join them in supporting healthcare excellence.
          </p>
          <Link href="#contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Become a Sponsor
            </Button>
          </Link>
        </div>

        {/* Title Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Title Sponsors</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {sponsors.title.map((sponsor, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-to-br from-primary/10 via-card to-accent/5 border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="space-y-3">
                  <h4 className="text-3xl font-semibold text-foreground">{sponsor.name}</h4>
                  <p className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                    {sponsor.category}
                  </p>
                  {sponsor.description && (
                    <p className="text-muted-foreground">{sponsor.description}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6">Gold Sponsors</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {sponsors.gold.map((sponsor, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-yellow-50 to-card border border-yellow-200/50 hover:border-yellow-300 hover:shadow-md transition-all duration-300"
              >
                <div className="h-24 bg-secondary/40 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-muted-foreground font-semibold">{sponsor.name}</p>
                </div>
                <p className="text-xs font-semibold text-yellow-700 bg-yellow-50 px-2 py-1 rounded text-center">
                  Gold Sponsor
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6">Silver Sponsors</h3>
          <div className="grid md:grid-cols-3 gap-6 lg:grid-cols-6">
            {sponsors.silver.map((sponsor, index) => (
              <Card
                key={index}
                className="p-4 bg-gradient-to-br from-gray-50 to-card border border-gray-200/50 hover:border-gray-300 hover:shadow-md transition-all duration-300"
              >
                <div className="h-16 bg-secondary/40 rounded mb-3 flex items-center justify-center">
                  <p className="text-muted-foreground font-semibold text-sm text-center">{sponsor.name}</p>
                </div>
                <p className="text-xs font-semibold text-gray-700 bg-gray-50 px-2 py-1 rounded text-center">
                  Silver
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Bronze Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6">Bronze Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {sponsors.bronze.map((sponsor, index) => (
              <Card
                key={index}
                className="p-3 bg-gradient-to-br from-orange-50 to-card border border-orange-100/50 hover:border-orange-200 hover:shadow-md transition-all duration-300 flex items-center justify-center"
              >
                <p className="text-xs font-semibold text-orange-700 text-center">{sponsor.name}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Sponsorship Opportunities */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-lg p-12 border border-primary/20">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-semibold text-foreground">
              Sponsorship Opportunities
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partner with ECTC 2025 and showcase your brand to 5,000+ healthcare professionals. Customize your sponsorship package to meet your marketing objectives.
            </p>
            <div className="grid md:grid-cols-4 gap-4 my-8">
              {[
                { tier: 'Title', benefit: 'Maximum visibility' },
                { tier: 'Gold', benefit: 'Premium positioning' },
                { tier: 'Silver', benefit: 'Featured placement' },
                { tier: 'Bronze', benefit: 'Event presence' },
              ].map((item, index) => (
                <div key={index} className="bg-card rounded-lg p-4 border border-border">
                  <p className="font-semibold text-foreground">{item.tier}</p>
                  <p className="text-sm text-muted-foreground">{item.benefit}</p>
                </div>
              ))}
            </div>
            <Link href="#contact" className="inline-block">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg transition-all duration-300"
              >
                Get Sponsorship Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
