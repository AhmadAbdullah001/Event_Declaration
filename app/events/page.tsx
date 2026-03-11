import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Users, Download, MapPin, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Schedule & Sessions - ECTC 2026 Conference Program",
  description:
    "View the full ECTC 2026 event schedule: keynote talks, trauma workshops, ICU sessions, panel discussions, and networking events. March 24-27 at Bhrikutimandap, Kathmandu, Nepal.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Event Schedule & Sessions - ECTC 2026 Conference Program",
    description:
      "Full ECTC 2026 schedule: keynotes, trauma workshops, ICU sessions, panel discussions, and networking. March 24-27, Kathmandu.",
    url: "/events",
    images: [
      {
        url: "/images/Events.jpg",
        width: 1200,
        height: 630,
        alt: "ECTC 2026 Event Schedule - Emergency Critical Care Conference Sessions",
      },
    ],
  },
};

export default function Events() {
  const sessions = [
    {
      title: "Keynote: Advancing Emergency Response Systems",
      speaker: "Dr. Sarah Anderson",
      time: "9:00 AM - 10:00 AM",
      day: "Day 1",
      type: "Keynote",
      capacity: "500 attendees",
      description:
        "A clinical overview of rapid triage, resuscitation workflows, and system-level strategies for emergency care.",
    },
    {
      title: "Trauma Resuscitation: From Arrival to Stabilization",
      speaker: "Dr. Michael Chen",
      time: "10:30 AM - 11:30 AM",
      day: "Day 1",
      type: "Workshop",
      capacity: "100 attendees",
      description:
        "Hands-on discussion of trauma bay priorities, hemorrhage control, airway pathways, and team-based stabilization.",
    },
    {
      title: "Sepsis and Shock: Evidence-Based ICU Pathways",
      speaker: "Dr. Emma Thompson",
      time: "1:00 PM - 2:30 PM",
      day: "Day 1",
      type: "Workshop",
      capacity: "150 attendees",
      description:
        "Review current best practices for early recognition, hemodynamic support, and escalation in critical care settings.",
    },
    {
      title: "Panel: High-Performing Emergency Teams",
      speaker: "Senior Emergency Faculty",
      time: "3:00 PM - 4:00 PM",
      day: "Day 1",
      type: "Panel Discussion",
      capacity: "300 attendees",
      description:
        "Explore communication frameworks, role clarity, and decision support approaches during high-pressure emergencies.",
    },
    {
      title: "Advanced Airway and Ventilation Strategies",
      speaker: "Dr. James Wilson",
      time: "9:00 AM - 10:30 AM",
      day: "Day 2",
      type: "Workshop",
      capacity: "120 attendees",
      description:
        "Case-driven review of difficult airway management and ventilation planning in trauma and critical illness.",
    },
    {
      title: "Neurologic Emergencies and Time-Critical Care",
      speaker: "Dr. Lisa Rodriguez",
      time: "11:00 AM - 12:00 PM",
      day: "Day 2",
      type: "Workshop",
      capacity: "100 attendees",
      description:
        "Focused updates on stroke, status epilepticus, and neurocritical management in emergency settings.",
    },
    {
      title: "Closing Keynote: The Future of Trauma Care",
      speaker: "Robert Kim",
      time: "2:00 PM - 3:00 PM",
      day: "Day 2",
      type: "Keynote",
      capacity: "500 attendees",
      description:
        "A closing perspective on trauma systems, multidisciplinary coordination, and improving patient survival.",
    },
    {
      title: "Clinical Networking Forum",
      speaker: "All Participants",
      time: "4:00 PM - 6:00 PM",
      day: "Day 2",
      type: "Social Event",
      capacity: "500 attendees",
      description:
        "Connect with clinicians, faculty, and healthcare leaders to exchange practical approaches and experiences.",
    },
  ];

  const scheduleDay1 = [
    { time: "8:00 AM", event: "Registration & Breakfast" },
    { time: "9:00 AM", event: "Keynote: Advancing Emergency Response Systems" },
    { time: "10:30 AM", event: "Trauma Resuscitation Workshop" },
    { time: "12:00 PM", event: "Lunch Break" },
    { time: "1:00 PM", event: "Sepsis and Shock: ICU Pathways" },
    { time: "3:00 PM", event: "Panel: High-Performing Emergency Teams" },
    { time: "5:00 PM", event: "Clinical Networking Reception" },
  ];

  const scheduleDay2 = [
    { time: "8:30 AM", event: "Breakfast & Networking" },
    { time: "9:00 AM", event: "Advanced Airway and Ventilation Strategies" },
    {
      time: "11:00 AM",
      event: "Neurologic Emergencies and Time-Critical Care",
    },
    { time: "12:30 PM", event: "Lunch Break" },
    { time: "2:00 PM", event: "Closing Keynote: The Future of Trauma Care" },
    { time: "3:30 PM", event: "Clinical Networking Forum" },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Keynote":
        return "bg-accent/20 text-accent border-accent/30";
      case "Workshop":
        return "bg-foreground/10 text-foreground border-foreground/30";
      case "Panel Discussion":
        return "bg-secondary/30 text-foreground border-secondary/30";
      case "Social Event":
        return "bg-muted/30 text-foreground border-muted/30";
      default:
        return "bg-secondary/30 text-foreground border-secondary/30";
    }
  };

  const eventScheduleJsonLd = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    name: "ECTC 2026 Conference Sessions",
    description:
      "Two-day schedule of keynotes, workshops, panel discussions, and networking events at ECTC 2026.",
    startDate: "2026-03-24",
    endDate: "2026-03-27",
    location: {
      "@type": "Place",
      name: "Bhrikutimandap Convention Area",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        postalCode: "44600",
        addressCountry: "NP",
      },
    },
    subEvent: sessions.map((session) => ({
      "@type": "Event",
      name: session.title,
      description: session.description,
      performer: {
        "@type": "Person",
        name: session.speaker,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventScheduleJsonLd) }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />

        <main>
          {/* Hero Section */}
          <section className="relative min-h-80 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-secondary/50 to-background">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/Events.jpg"
                alt="ECTC 2026 event sessions and clinical workshops at Kathmandu convention center"
                fill
                className="object-cover "
                priority
              />
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
              {/* <h1 className="text-6xl sm:text-7xl font-light tracking-tight text-foreground">
                Event Schedule
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Multi-day clinical sessions, expert faculty, and practical emergency
                care learning
              </p> */}
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
                    <article className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-medium text-foreground group-hover:text-accent transition-colors mb-2">
                            {session.title}
                          </h3>
                          <p className="text-muted-foreground font-light">
                            {session.speaker}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap border ${getTypeColor(
                            session.type,
                          )}`}
                        >
                          {session.type}
                        </span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {session.description}
                      </p>

                      <div className="space-y-2 pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock size={16} aria-hidden="true" />
                          <span>{session.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users size={16} aria-hidden="true" />
                          <span>{session.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin size={16} aria-hidden="true" />
                          <span>{session.day}</span>
                        </div>
                      </div>
                    </article>
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
                  <h3 className="text-2xl font-light text-foreground mb-8">
                    Day One - <time dateTime="2026-03-24">March 24</time>
                  </h3>
                  <div className="space-y-4">
                    {scheduleDay1.map((item, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="w-24 flex-shrink-0">
                          <p className="text-sm font-medium text-accent group-hover:text-foreground transition-colors">
                            {item.time}
                          </p>
                        </div>
                        <div className="pb-4 border-l border-border pl-6 group-hover:border-foreground/30 transition-colors">
                          <p className="text-foreground group-hover:text-accent transition-colors">
                            {item.event}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Day 2 */}
                <div>
                  <h3 className="text-2xl font-light text-foreground mb-8">
                    Day Two - <time dateTime="2026-03-25">March 25</time>
                  </h3>
                  <div className="space-y-4">
                    {scheduleDay2.map((item, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="w-24 flex-shrink-0">
                          <p className="text-sm font-medium text-accent group-hover:text-foreground transition-colors">
                            {item.time}
                          </p>
                        </div>
                        <div className="pb-4 border-l border-border pl-6 group-hover:border-foreground/30 transition-colors">
                          <p className="text-foreground group-hover:text-accent transition-colors">
                            {item.event}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Venue Details */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-8 text-center">
                Venue Details
              </h2>
              <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
                Emergency Critical Care and Trauma Conference 2026 will be hosted in
                Kathmandu with on-site clinical sessions and workshops.
              </p>

              <div className="relative h-100 rounded-lg overflow-hidden my-8">
                <Image
                  src="/images/Venue.jpg"
                  alt="Bhrikutimandap Convention Area exterior - ECTC 2026 venue in Kathmandu, Nepal"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-8">

                <Card className="bg-card/50 border-border p-8">
                  <h3 className="text-2xl font-medium text-foreground mb-6">
                    Conference Venue
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <MapPin
                        size={18}
                        className="text-accent mt-1 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <address className="not-italic">Bhrikutimandap Convention Area, Kathmandu 44600, Nepal</address>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-accent mt-1 flex-shrink-0" aria-hidden="true" />
                      <p>Conference Dates: <time dateTime="2026-03-24/2026-03-27">March 24-27, 2026</time></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users size={18} className="text-accent mt-1 flex-shrink-0" aria-hidden="true" />
                      <p>
                        Recommended Arrival: 60 minutes before your first session
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-card/50 border-border p-8">
                  <h3 className="text-2xl font-medium text-foreground mb-6">
                    Access and Logistics
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      On-site registration counters open from 7:30 AM each
                      conference day.
                    </p>
                    <p>
                      Public transport and taxi access are available near the venue
                      entrance.
                    </p>
                    <p>
                      Parking is available in designated venue zones for attendees.
                    </p>
                    <p>
                      For venue assistance, contact the coordination desk at
                      +977-1-555-0123.
                    </p>
                  </div>
                </Card>
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
                Download detailed clinical program information and faculty materials
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="group bg-card/50 border-border hover:border-foreground/20 transition-all duration-300 p-8 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-foreground mb-2">
                        Full Clinical Schedule
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Complete timetable for both days
                      </p>
                    </div>
                    <Download
                      size={24}
                      className="text-accent group-hover:scale-110 transition-transform flex-shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    Detailed schedule with session timings, locations, and faculty
                    information.
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
                      <h3 className="text-xl font-medium text-foreground mb-2">
                        Speaker Directory
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Faculty bios and specialties
                      </p>
                    </div>
                    <Download
                      size={24}
                      className="text-accent group-hover:scale-110 transition-transform flex-shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    Comprehensive faculty profiles, specialties, and clinical
                    background.
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
                      <h3 className="text-xl font-medium text-foreground mb-2">
                        Workshop Materials
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Clinical guides and resources
                      </p>
                    </div>
                    <Download
                      size={24}
                      className="text-accent group-hover:scale-110 transition-transform flex-shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    Pre-workshop guides, protocol summaries, and recommended
                    clinical resources.
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
                      <h3 className="text-xl font-medium text-foreground mb-2">
                        Venue Information
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Maps, access, and logistics
                      </p>
                    </div>
                    <Download
                      size={24}
                      className="text-accent group-hover:scale-110 transition-transform flex-shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    Venue details, transportation guidance, and accessibility
                    information.
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
                Plan Your ECTC Sessions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Review the program and choose the registration category that fits
                your clinical role.
              </p>
              <Link href="/registration">
                <Button
                  size="lg"
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 px-8 font-medium shadow-md hover:shadow-lg"
                >
                  View Registration Fees
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
