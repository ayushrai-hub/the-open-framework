import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  MapPin, 
  Code2, 
  Shield,
  Users,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const values = [
  {
    icon: "⚖️",
    title: "Neutrality",
    description: "We build the rails, not the trains. Enabling the ecosystem without picking winners or locking in users.",
  },
  {
    icon: "🔒",
    title: "Trust-First",
    description: "Privacy by design. Security and consent are foundational primitives, never afterthoughts.",
  },
  {
    icon: "👥",
    title: "Population Scale",
    description: "Engineering for 1.4 billion people. Systems designed for extreme resilience, low bandwidth, and diverse accessibility needs.",
  },
];

const process = [
  { number: "1", title: "Application", description: "Review of skills and mission alignment." },
  { number: "2", title: "Technical Review", description: "Practical assessment of craft." },
  { number: "3", title: "Values Fit", description: "Discussion on neutrality and ethics." },
  { number: "4", title: "Offer", description: "Transparent, standard compensation." },
];

const positions = [
  {
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Remote (India)",
    tags: ["Rust", "Go"],
  },
  {
    title: "Policy & Governance Lead",
    department: "Policy",
    location: "New Delhi",
    tags: [],
  },
  {
    title: "Frontend Architect (Accessibility)",
    department: "Engineering",
    location: "Remote (India)",
    tags: ["WCAG 2.1 AA"],
  },
];

export default function CareersPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-card border-b border-border">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Build Infrastructure<br />that Endures
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                Join us in building digital public goods for India's civil society. This is not a startup sprint 
                — it is a generational marathon to enable 1.4 billion people.
              </p>
              <Button size="lg" asChild>
                <a href="#positions">View Open Roles</a>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center text-text-secondary">
                <div className="w-32 h-32 mx-auto mb-4 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Code2 className="h-16 w-16 text-accent" />
                </div>
                <span className="text-sm">Building at Scale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-alt">
        <div className="container-wide section-padding">
          <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
          <p className="text-text-secondary mb-10">
            We prioritize institutional neutrality and trust above all else. We are the stewards, not the owners.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-elevated p-6">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Challenge */}
      <section className="bg-card">
        <div className="container-wide section-padding">
          <h2 className="text-2xl font-semibold mb-4">The Engineering Challenge</h2>
          <p className="text-text-secondary mb-10 max-w-2xl">
            We tackle hard engineering problems to create visibility and access across a highly federated architecture.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-primary/30 flex items-center justify-center mb-3">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-5 border border-t-0 border-border rounded-b-lg">
                <h3 className="font-semibold mb-2">Federated Architecture</h3>
                <p className="text-sm text-text-secondary">
                  Designing systems that allow independent nodes — from government bodies to NGOs — to communicate 
                  seamlessly without a central point of failure.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-accent/30 flex items-center justify-center mb-3">
                    <Code2 className="h-8 w-8 text-accent" />
                  </div>
                </div>
              </div>
              <div className="p-5 border border-t-0 border-border rounded-b-lg">
                <h3 className="font-semibold mb-2">Interoperability Standards</h3>
                <p className="text-sm text-text-secondary">
                  Creating open protocols (like HTTP or SMTP for civil society) that ensure long-term durability 
                  and universal accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-alt">
        <div className="container-wide section-padding">
          <h2 className="text-2xl font-semibold mb-10">Our Process</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {process.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-semibold">
                  {step.number}
                </div>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-xs text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="bg-card">
        <div className="container-wide section-padding">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Open Positions</h2>
            <span className="badge-official">
              <span className="w-2 h-2 rounded-full bg-success" />
              Actively Hiring
            </span>
          </div>

          <div className="space-y-4">
            {positions.map((position) => (
              <div key={position.title} className="card-elevated p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{position.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary">
                    <span className="flex items-center gap-1">
                      <Code2 className="h-4 w-4" />
                      {position.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {position.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {position.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded text-xs font-medium bg-muted text-text-secondary">
                      {tag}
                    </span>
                  ))}
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compensation Philosophy */}
      <section className="border-t border-border">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-accent mb-4">
              <Users className="h-5 w-5" />
              <span className="font-medium">Compensation Philosophy</span>
            </div>
            <p className="text-text-secondary mb-6">
              We believe in fair, fixed, and transparent compensation. We do not negotiate salaries based on past earnings. 
              Our pay bands are benchmarked against top-tier Indian technology firms to ensure we attract the best talent 
              for this critical national mission.
            </p>
            <Link to="#" className="link-arrow justify-center">
              Read our full compensation guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
