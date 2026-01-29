import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Target, Users, ArrowRight } from 'lucide-react';

export default function About() {
  const objectives = [
    {
      icon: Target,
      title: 'Inspire Innovation',
      description: 'Foster groundbreaking ideas and pioneering solutions that shape the future of our industry.',
    },
    {
      icon: Users,
      title: 'Build Communities',
      description: 'Create meaningful connections between professionals, leaders, and visionaries worldwide.',
    },
    {
      icon: CheckCircle2,
      title: 'Deliver Excellence',
      description: 'Provide world-class content and experiences that exceed expectations and drive growth.',
    },
  ];

  const audiences = [
    {
      title: 'C-Suite Executives',
      description: 'Strategic leaders and decision-makers seeking industry insights and networking opportunities.',
    },
    {
      title: 'Innovators & Entrepreneurs',
      description: 'Visionary thinkers and startup founders looking to scale and collaborate.',
    },
    {
      title: 'Technical Professionals',
      description: 'Engineers, architects, and technical experts eager to advance their expertise.',
    },
    {
      title: 'Industry Experts',
      description: 'Thought leaders and specialists passionate about sharing knowledge and insights.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-secondary/50 to-background">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-6xl sm:text-7xl font-light tracking-tight text-foreground">
            About Summit 2025
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming industries through connection, innovation, and shared vision
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
              Summit 2025 represents a pivotal gathering of thought leaders, innovators, and industry professionals. With over 500 attendees expected from across the globe, this two-day conference brings together the brightest minds to explore emerging trends, share breakthrough insights, and forge meaningful connections.
            </p>
            <p className="text-muted-foreground">
              Each carefully curated session is designed to provide actionable insights and strategic perspectives that will elevate your career and organization. From keynote addresses by industry luminaries to intimate breakout workshops, Summit 2025 offers a premium experience designed for those who demand excellence.
            </p>
            <p className="text-muted-foreground">
              Whether you're seeking to expand your professional network, stay ahead of industry developments, or discover transformative opportunities, Summit 2025 delivers an unparalleled platform for growth and collaboration.
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
                    <Icon size={24} className="text-accent" />
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
                <h3 className="text-2xl font-light text-foreground mb-4">Premium Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Keynote addresses from industry leaders, interactive workshops, and panel discussions featuring the most innovative minds in the field.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light text-foreground mb-4">Networking Opportunities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Exclusive networking events, roundtable discussions, and social gatherings designed to facilitate meaningful connections.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light text-foreground mb-4">World-Class Venue</h3>
                <p className="text-muted-foreground leading-relaxed">
                  State-of-the-art facilities in the heart of New York City, featuring modern amenities and seamless connectivity.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light text-foreground mb-4">Professional Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gain actionable insights, discover emerging trends, and acquire knowledge that will elevate your career and organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
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
            Ready to Join Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about our event and check out ticket pricing options on our registration page.
          </p>
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
      </section>


    </div>
  );
}
