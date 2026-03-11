import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Target, Users, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ECTC 2026 - Mission, Objectives & Conference Overview',
  description: 'Learn about ECTC 2026, the Emergency Critical Care and Trauma Conference in Kathmandu, Nepal. 500+ attendees, 50+ speakers, 40+ sessions focused on emergency medicine, critical care, and trauma management.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About ECTC 2026 - Emergency Critical Care and Trauma Conference',
    description: 'Learn about ECTC 2026 in Kathmandu, Nepal. 500+ attendees, 50+ speakers, 40+ sessions advancing emergency medicine and trauma care.',
    url: '/about',
    images: [
      {
        url: '/images/About.jpg',
        width: 1200,
        height: 630,
        alt: 'About ECTC 2026 - Emergency Critical Care and Trauma Conference',
      },
    ],
  },
};

export default function About() {
  const objectives = [
    {
      icon: Target,
      title: 'Strengthen Clinical Practice',
      description: 'Share evidence-based emergency and trauma care approaches that improve outcomes at the bedside.',
    },
    {
      icon: Users,
      title: 'Build Care Networks',
      description: 'Create meaningful collaboration between physicians, nurses, trauma teams, and allied health staff.',
    },
    {
      icon: CheckCircle2,
      title: 'Advance Patient Safety',
      description: 'Deliver practical learning that supports safer emergency response and critical care delivery.',
    },
  ];

  const audiences = [
    {
      title: 'Emergency Physicians',
      description: 'Clinicians seeking advanced updates in emergency medicine, resuscitation, and trauma response.',
    },
    {
      title: 'Critical Care Teams',
      description: 'ICU consultants and multidisciplinary teams focused on severe illness and high-acuity care.',
    },
    {
      title: 'Nurses & Paramedics',
      description: 'Frontline professionals building practical skills for emergency stabilization and transfer care.',
    },
    {
      title: 'Residents & Students',
      description: 'Trainees and early-career healthcare professionals developing core emergency care competency.',
    },
  ];

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ECTC 2026 - Emergency Critical Care and Trauma Conference',
    url: 'https://ectc2026.org',
    logo: 'https://ectc2026.org/images/Icon.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+977-1-555-0123',
      contactType: 'customer service',
      email: 'info@ectc2026.org',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bhrikutimandap',
      addressLocality: 'Kathmandu',
      postalCode: '44600',
      addressCountry: 'NP',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />

        <main>
          {/* Hero Section */}
          <section className="relative min-h-96 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-secondary/50 to-background">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            </div>
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/About.jpg"
                alt="About ECTC 2026 - Emergency medicine professionals at the conference venue in Kathmandu"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
              <h1 className="text-6xl sm:text-7xl font-light tracking-tight text-foreground">
                About ECTC 2026
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Advancing emergency medicine, critical care, and trauma management through shared clinical learning
              </p>
            </div>
          </section>

          {/* Event Overview */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-8">
                Event Overview
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-foreground">
                  Emergency Critical Care and Trauma Conference 2026 is a focused gathering of physicians, nurses, trauma specialists, and healthcare educators. The conference brings frontline teams together to review current evidence, refine practical skills, and strengthen coordinated emergency response.
                </p>
                <p className="text-muted-foreground">
                  Each session is designed to deliver clinically relevant insights that can be applied immediately in emergency departments, ICUs, and trauma units. From expert-led keynote talks to case-based workshops, ECTC 2026 supports high-impact learning for real-world patient care.
                </p>
                <p className="text-muted-foreground">
                  Whether you want to update protocols, improve team decision-making, or connect with peers across specialties, ECTC 2026 provides a practical platform for collaboration and professional growth.
                </p>
              </div>
            </div>
          </section>

          {/* Objectives */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-16 text-center">
                Our Mission & Objectives
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {objectives.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={index}
                      className="p-8 bg-card border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                    >
                      <div className="inline-block p-3 bg-accent/20 rounded-lg mb-4 group-hover:bg-accent/30 transition-colors">
                        <Icon size={24} className="text-accent" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-medium text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Target Audience */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-16 text-center">
                Who Should Attend
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {audiences.map((audience, index) => (
                  <Card key={index} className="p-6 bg-card border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                    <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                      {audience.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {audience.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Key Highlights */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-16 text-center">
                What to Expect
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-light text-foreground mb-4">Evidence-Based Sessions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Keynote addresses from experienced clinicians, practical workshops, and panel discussions on emergency and trauma care.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-foreground mb-4">Interdisciplinary Networking</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Clinical roundtables and networking sessions designed to connect healthcare teams across emergency and critical care services.
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-light text-foreground mb-4">Simulation-Focused Training</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hands-on learning environments with scenario-based trauma and critical care training for frontline teams.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-foreground mb-4">Clinical Professional Development</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Gain actionable knowledge, review current guidelines, and build competencies that improve patient care quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30" aria-label="Conference statistics">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-4xl sm:text-5xl font-light text-accent mb-2">500+</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">Attendees</p>
                </div>
                <div>
                  <p className="text-4xl sm:text-5xl font-light text-accent mb-2">50+</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">Speakers</p>
                </div>
                <div>
                  <p className="text-4xl sm:text-5xl font-light text-accent mb-2">40+</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">Sessions</p>
                </div>
                <div>
                  <p className="text-4xl sm:text-5xl font-light text-accent mb-2">2</p>
                  <p className="text-muted-foreground text-sm uppercase tracking-wide">Days</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-5xl sm:text-6xl font-light tracking-tight text-foreground">
                Ready for ECTC 2026?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Review registration options and secure your place in this emergency and trauma care learning experience.
              </p>
              <Link href="/registration">
                <Button
                  size="lg"
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-8 font-medium shadow-md hover:shadow-lg"
                >
                  View Registration Fees
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
