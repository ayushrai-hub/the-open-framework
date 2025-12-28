import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Award,
  ChevronRight,
  ExternalLink,
  Video
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  type: "conference" | "workshop" | "webinar" | "award" | "meetup";
  status: "upcoming" | "past" | "ongoing";
  registrationOpen?: boolean;
  link?: string;
}

const events: Event[] = [
  // Upcoming Events
  {
    id: "1",
    title: "Civil Society Digital Transformation Summit 2025",
    description: "Annual gathering of NGOs, donors, and policymakers to discuss digital infrastructure for civil society. Keynotes, panels, and networking opportunities.",
    date: "March 15-16, 2025",
    time: "9:00 AM - 6:00 PM IST",
    location: "India Habitat Centre, New Delhi",
    type: "conference",
    status: "upcoming",
    registrationOpen: true,
  },
  {
    id: "2",
    title: "NGO Compliance Workshop Series",
    description: "Hands-on workshop on navigating FCRA regulations, 80G compliance, and annual reporting requirements. Free for registered NGOs.",
    date: "January 20, 2025",
    time: "2:00 PM - 5:00 PM IST",
    location: "Virtual (Zoom)",
    type: "workshop",
    status: "upcoming",
    registrationOpen: true,
  },
  {
    id: "3",
    title: "Donor Due Diligence Webinar",
    description: "Learn best practices for conducting due diligence on NGOs, understanding compliance documents, and making informed grant decisions.",
    date: "February 5, 2025",
    time: "11:00 AM - 12:30 PM IST",
    location: "Virtual",
    type: "webinar",
    status: "upcoming",
    registrationOpen: true,
  },
  // Past Events
  {
    id: "4",
    title: "India DPI Civil Society Excellence Awards 2024",
    description: "Recognizing outstanding contributions to India's civil society ecosystem. Awards in categories including transparency, impact, and innovation.",
    date: "December 10, 2024",
    location: "Taj Palace, New Delhi",
    type: "award",
    status: "past",
  },
  {
    id: "5",
    title: "Volunteer Management Masterclass",
    description: "Comprehensive training on recruiting, managing, and retaining volunteers. Featuring case studies from successful NGOs.",
    date: "November 25, 2024",
    location: "Virtual",
    type: "workshop",
    status: "past",
  },
  {
    id: "6",
    title: "State-Level NGO Meetup: Karnataka",
    description: "Regional meetup for Karnataka-based NGOs to network, share experiences, and learn about state-specific compliance requirements.",
    date: "October 15, 2024",
    location: "Bangalore International Centre",
    type: "meetup",
    status: "past",
  },
];

const awards = [
  {
    year: "2024",
    categories: [
      { name: "Transparency Excellence", winner: "Pratham Education Foundation" },
      { name: "Innovation in Impact", winner: "Akshaya Patra Foundation" },
      { name: "Community Leadership", winner: "Self Employed Women's Association" },
      { name: "Emerging Organization", winner: "Teach For India" },
    ],
  },
  {
    year: "2023",
    categories: [
      { name: "Transparency Excellence", winner: "CRY India" },
      { name: "Innovation in Impact", winner: "Goonj" },
      { name: "Community Leadership", winner: "Smile Foundation" },
      { name: "Emerging Organization", winner: "iVolunteer" },
    ],
  },
];

const getEventTypeBadge = (type: Event["type"]) => {
  const styles = {
    conference: "bg-blue-100 text-blue-700",
    workshop: "bg-emerald-100 text-emerald-700",
    webinar: "bg-purple-100 text-purple-700",
    award: "bg-amber-100 text-amber-700",
    meetup: "bg-pink-100 text-pink-700",
  };
  const labels = {
    conference: "Conference",
    workshop: "Workshop",
    webinar: "Webinar",
    award: "Award Ceremony",
    meetup: "Meetup",
  };
  return <Badge className={styles[type]}>{labels[type]}</Badge>;
};

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const pastEvents = events.filter((e) => e.status === "past");

  return (
    <Layout>
      <Helmet>
        <title>Awards & Events | India DPI</title>
        <meta name="description" content="Conferences, workshops, and award ceremonies organized by India DPI for the civil society ecosystem." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 border-b border-border">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              Awards & Events
            </h1>
            <p className="text-lg text-text-secondary">
              Conferences, workshops, and ceremonies that bring together India's civil 
              society ecosystem for learning, networking, and recognition.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 border-b border-border">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Upcoming Events
          </h2>
          
          {upcomingEvents.length > 0 ? (
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="lg:w-32 flex-shrink-0">
                      <div className="w-full lg:w-32 h-24 rounded-lg bg-primary/10 flex flex-col items-center justify-center text-center">
                        <Calendar className="h-6 w-6 text-primary mb-1" />
                        <span className="text-sm font-medium text-primary">
                          {event.date.split(",")[0]}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {getEventTypeBadge(event.type)}
                        {event.registrationOpen && (
                          <Badge className="bg-emerald-100 text-emerald-700">
                            Registration Open
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        {event.title}
                      </h3>
                      <p className="text-text-secondary mb-4">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </span>
                        {event.time && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          {event.location.includes("Virtual") ? (
                            <Video className="h-4 w-4" />
                          ) : (
                            <MapPin className="h-4 w-4" />
                          )}
                          {event.location}
                        </span>
                      </div>
                    </div>
                    
                    {event.registrationOpen && (
                      <div className="flex-shrink-0">
                        <Button>
                          Register
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-text-secondary">No upcoming events at this time.</p>
          )}
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 border-b border-border bg-muted/30">
        <div className="container-wide">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-amber-500" />
            <h2 className="text-2xl font-bold text-text-primary">
              Civil Society Excellence Awards
            </h2>
          </div>
          
          <p className="text-text-secondary max-w-3xl mb-8">
            The India DPI Civil Society Excellence Awards recognize organizations 
            demonstrating outstanding commitment to transparency, impact, and 
            community service. Awards are determined by an independent jury based 
            on objective criteria.
          </p>
          
          <div className="space-y-8">
            {awards.map((yearData) => (
              <div key={yearData.year}>
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  {yearData.year} Awardees
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {yearData.categories.map((cat) => (
                    <div
                      key={cat.name}
                      className="p-4 rounded-lg border border-border bg-card"
                    >
                      <p className="text-sm text-text-secondary mb-1">{cat.name}</p>
                      <p className="font-medium text-text-primary">{cat.winner}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 border-b border-border">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Past Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <div className="flex items-center gap-2 mb-3">
                  {getEventTypeBadge(event.type)}
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="text-sm text-text-secondary space-y-1">
                  <p className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </p>
                  <p className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participation Guidelines */}
      <section className="py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Participation Guidelines
            </h2>
            <div className="prose text-text-secondary">
              <ul className="space-y-3">
                <li>Events are open to registered platform users unless otherwise specified</li>
                <li>Registration is required for all events; some may have limited capacity</li>
                <li>Virtual events are recorded and made available to registered attendees</li>
                <li>Speakers and panelists must adhere to our Code of Conduct</li>
                <li>No promotional or sales activities are permitted at events</li>
                <li>Photography and recording policies vary by event</li>
              </ul>
            </div>
            
            <div className="mt-8 p-6 rounded-xl bg-muted/50 border border-border">
              <h3 className="font-semibold text-text-primary mb-2">
                Propose an Event
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                Organizations can propose workshops, meetups, or webinars for the 
                community. All proposals are reviewed for alignment with platform mission.
              </p>
              <Link to="/contact">
                <Button variant="outline" size="sm">
                  Submit Proposal
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
