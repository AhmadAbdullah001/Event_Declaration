import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, Users, Download, MapPin, ArrowRight } from 'lucide-react';

export default function Events() {
  const sessions = [
    {
      title: 'Keynote: The Future of Innovation',
      speaker: 'Dr. Sarah Anderson',
      time: '9:00 AM - 10:00 AM',
      day: 'Day 1',
      type: 'Keynote',
      capacity: '500 attendees',
      description: 'An inspiring look at how emerging technologies are reshaping industries and creating unprecedented opportunities.',
    },
    {
      title: 'Scaling Your Startup: From Idea to Impact',
      speaker: 'Michael Chen',
      time: '10:30 AM - 11:30 AM',
      day: 'Day 1',
      type: 'Workshop',
      capacity: '100 attendees',
      description: 'Learn proven strategies for scaling your startup from founders who have successfully navigated the journey.',
    },
    {
      title: 'Digital Transformation Best Practices',
      speaker: 'Emma Thompson',
      time: '1:00 PM - 2:30 PM',
      day: 'Day 1',
      type: 'Workshop',
      capacity: '150 attendees',
      description: 'Discover how enterprise leaders are leveraging digital transformation to drive competitive advantage.',
    },
    {
      title: 'Panel: The Future of Work',
      speaker: 'Industry Experts',
      time: '3:00 PM - 4:00 PM',
      day: 'Day 1',
      type: 'Panel Discussion',
      capacity: '300 attendees',
      description: 'Explore emerging workplace trends, remote work strategies, and talent management in a rapidly evolving landscape.',
    },
    {
      title: 'Advanced AI & Machine Learning',
      speaker: 'Dr. James Wilson',
      time: '9:00 AM - 10:30 AM',
      day: 'Day 2',
      type: 'Workshop',
      capacity: '120 attendees',
      description: 'Deep dive into cutting-edge AI applications and practical machine learning implementations.',
    },
    {
      title: 'Building Sustainable Business Models',
      speaker: 'Lisa Rodriguez',
      time: '11:00 AM - 12:00 PM',
      day: 'Day 2',
      type: 'Workshop',
      capacity: '100 attendees',
      description: 'Strategies for integrating sustainability into your business model while maintaining profitability.',
    },
    {
      title: 'Closing Keynote: Building the Future',
      speaker: 'Robert Kim',
      time: '2:00 PM - 3:00 PM',
      day: 'Day 2',
      type: 'Keynote',
      capacity: '500 attendees',
      description: 'An inspiring conclusion on creating lasting impact and building a better future through innovation.',
    },
    {
      title: 'Networking Reception',
      speaker: 'All Attendees',
      time: '4:00 PM - 6:00 PM',
      day: 'Day 2',
      type: 'Social Event',
      capacity: '500 attendees',
      description: 'Connect with fellow attendees, speakers, and industry leaders in an exclusive networking environment.',
    },
  ];

  const scheduleDay1 = [
    { time: '8:00 AM', event: 'Registration & Breakfast' },
    { time: '9:00 AM', event: 'Keynote: The Future of Innovation' },
    { time: '10:30 AM', event: 'Scaling Your Startup Workshop' },
    { time: '12:00 PM', event: 'Lunch Break' },
    { time: '1:00 PM', event: 'Digital Transformation Best Practices' },
    { time: '3:00 PM', event: 'Panel: The Future of Work' },
    { time: '5:00 PM', event: 'Cocktail Reception' },
  ];

  const scheduleDay2 = [
    { time: '8:30 AM', event: 'Breakfast & Networking' },
    { time: '9:00 AM', event: 'Advanced AI & Machine Learning' },
    { time: '11:00 AM', event: 'Building Sustainable Business Models' },
    { time: '12:30 PM', event: 'Lunch Break' },
    { time: '2:00 PM', event: 'Closing Keynote: Building the Future' },
    { time: '3:30 PM', event: 'Networking Reception' },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Keynote':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'Workshop':
        return 'bg-foreground/10 text-foreground border-foreground/30';
      case 'Panel Discussion':
        return 'bg-secondary/30 text-foreground border-secondary/30';
      case 'Social Event':
        return 'bg-muted/30 text-foreground border-muted/30';
      default:
        return 'bg-secondary/30 text-foreground border-secondary/30';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-80 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-secondary/50 to-background">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-6xl sm:text-7xl font-light tracking-tight text-foreground">
            Event Schedule
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Two days of world-class content, expert speakers, and unforgettable networking
          </p>
        </div>
      </section>

      {/* Sessions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-16 text-center">
            Featured Sessions & Workshops
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {sessions.map((session, index) => (
              <Card
                key={index}
                className="group bg-card/50 border-border hover:border-foreground/20 transition-all duration-300 overflow-hidden p-8"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium text-foreground group-hover:text-accent transition-colors mb-2">
                        {session.title}
                      </h3>
                      <p className="text-muted-foreground font-light">{session.speaker}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap border ${getTypeColor(
                        session.type,
                      )}`}
                    >
                      {session.type}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{session.description}</p>

                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={16} />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users size={16} />
                      <span>{session.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={16} />
                      <span>{session.day}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-16 text-center">
            Event Schedule
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Day 1 */}
            <div>
              <h3 className="text-2xl font-light text-foreground mb-8">Day One - June 15</h3>
              <div className="space-y-4">
                {scheduleDay1.map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="w-24 flex-shrink-0">
                      <p className="text-sm font-medium text-accent group-hover:text-foreground transition-colors">
                        {item.time}
                      </p>
                    </div>
                    <div className="pb-4 border-l border-border pl-6 group-hover:border-foreground/30 transition-colors">
                      <p className="text-foreground group-hover:text-accent transition-colors">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div>
              <h3 className="text-2xl font-light text-foreground mb-8">Day Two - June 16</h3>
              <div className="space-y-4">
                {scheduleDay2.map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="w-24 flex-shrink-0">
                      <p className="text-sm font-medium text-accent group-hover:text-foreground transition-colors">
                        {item.time}
                      </p>
                    </div>
                    <div className="pb-4 border-l border-border pl-6 group-hover:border-foreground/30 transition-colors">
                      <p className="text-foreground group-hover:text-accent transition-colors">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-8 text-center">
            Event Materials
          </h2>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
            Download detailed program information and speaker materials
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group bg-card/50 border-border hover:border-foreground/20 transition-all duration-300 p-8 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Full Event Schedule</h3>
                  <p className="text-muted-foreground text-sm">Complete timetable for both days</p>
                </div>
                <Download
                  size={24}
                  className="text-accent group-hover:scale-110 transition-transform flex-shrink-0"
                />
              </div>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                Detailed schedule with session timings, locations, and speaker information.
              </p>
              <Button
                variant="outline"
                className="border-foreground text-foreground hover:bg-secondary w-full justify-center bg-transparent"
              >
                Download PDF
              </Button>
            </Card>

            <Card className="group bg-card/50 border-border hover:border-foreground/20 transition-all duration-300 p-8 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Speaker Directory</h3>
                  <p className="text-muted-foreground text-sm">Bios and contact information</p>
                </div>
                <Download
                  size={24}
                  className="text-accent group-hover:scale-110 transition-transform flex-shrink-0"
                />
              </div>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                Comprehensive speaker profiles, expertise areas, and professional background.
              </p>
              <Button
                variant="outline"
                className="border-foreground text-foreground hover:bg-secondary w-full justify-center bg-transparent"
              >
                Download PDF
              </Button>
            </Card>

            <Card className="group bg-card/50 border-border hover:border-foreground/20 transition-all duration-300 p-8 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Workshop Materials</h3>
                  <p className="text-muted-foreground text-sm">Preparation guides and resources</p>
                </div>
                <Download
                  size={24}
                  className="text-accent group-hover:scale-110 transition-transform flex-shrink-0"
                />
              </div>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                Pre-workshop guides, reading materials, and recommended resources.
              </p>
              <Button
                variant="outline"
                className="border-foreground text-foreground hover:bg-secondary w-full justify-center bg-transparent"
              >
                Download PDF
              </Button>
            </Card>

            <Card className="group bg-card/50 border-border hover:border-foreground/20 transition-all duration-300 p-8 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-2">Venue Information</h3>
                  <p className="text-muted-foreground text-sm">Maps, directions, and logistics</p>
                </div>
                <Download
                  size={24}
                  className="text-accent group-hover:scale-110 transition-transform flex-shrink-0"
                />
              </div>
              <p className="text-muted-foreground text-sm mb-6 flex-grow">
                Venue details, parking information, transportation guides, and accessibility.
              </p>
              <Button
                variant="outline"
                className="border-foreground text-foreground hover:bg-secondary w-full justify-center bg-transparent"
              >
                Download PDF
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl sm:text-6xl font-light tracking-tight text-foreground">
            Don't Miss These Sessions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our event schedule and check out available ticket pricing options.
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
