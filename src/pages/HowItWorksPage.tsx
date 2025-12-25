import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Building2, 
  Heart, 
  Users, 
  CheckCircle2, 
  Shield,
  Database,
  Eye,
  Clock,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const architectureSteps = [
  {
    icon: Building2,
    title: "Social Purpose Orgs",
    description: "Submit registration details & impact data once.",
    badge: "Data Input",
  },
  {
    icon: Shield,
    title: "The Trust Layer",
    description: "Standardizes data, verifies legal status, and issues \"Trust Tokens\".",
    badge: "Verified Status",
    highlighted: true,
  },
  {
    icon: Users,
    title: "Ecosystem Partners",
    description: "Access verified data for funding or volunteering.",
    badge: "Discovery",
  },
];

const journeys = [
  {
    icon: Building2,
    title: "For NGOs",
    color: "text-primary",
    steps: [
      { number: "1", title: "Register Profile", description: "Input basic organizational details (PAN, FCRA) and mission statement." },
      { number: "2", title: "Digital Verification", description: "Platform automatically checks public records for compliance." },
      { number: "3", title: "Get Visible", description: "Receive a \"Verified\" badge and appear in donor searches." },
    ],
    cta: "Start NGO Registration",
    href: "/ecosystem/ngos",
  },
  {
    icon: Heart,
    title: "For Donors",
    color: "text-success",
    steps: [
      { number: "1", title: "Create Account", description: "Institutional donors sign up for discovery access." },
      { number: "2", title: "Discover & Filter", description: "Search by geography, cause area (SDGs), and compliance status." },
      { number: "3", title: "Connect", description: "Directly contact verified NGOs. No platform middlemen." },
    ],
    cta: "Access Donor Portal",
    href: "/ecosystem/donors",
  },
  {
    icon: Users,
    title: "For Talent",
    color: "text-accent",
    steps: [
      { number: "1", title: "Build Profile", description: "Highlight skills relevant to the social sector (e.g., M&E, Fundraising)." },
      { number: "2", title: "Browse Opportunities", description: "Find jobs and volunteer roles at verified organizations." },
      { number: "3", title: "Apply", description: "Submit applications directly through the platform." },
    ],
    cta: "Find Opportunities",
    href: "/ecosystem/volunteers",
  },
];

const dataPolicy = [
  {
    icon: Database,
    title: "What We Collect",
    description: "Only statutory data (Registration certs, 12A/80G) and organizational impact metrics. No personal beneficiary data is ever stored.",
  },
  {
    icon: Eye,
    title: "Who Sees It",
    description: "Public data is open to all. Compliance documents are viewable only by verified donors after you grant specific permission.",
  },
  {
    icon: Clock,
    title: "Retention",
    description: "Data is retained as long as your account is active. You can request full deletion of your profile at any time via settings.",
  },
];

const verificationSteps = [
  { label: "Submission", status: "pending" },
  { label: "Auto-Check", status: "active" },
  { label: "Legal Review", status: "pending" },
  { label: "Verified", status: "complete" },
];

export default function HowItWorksPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-card border-b border-border">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-official mb-4">
                <Sparkles className="h-3 w-3" />
                Trust-First Architecture
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                How the Platform Works:<br />
                <span className="text-link">A Federated Model</span>
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                We are building a neutral, accessible digital public infrastructure. Understand how data flows, 
                how verification works, and how we ensure the ecosystem remains open and free for civil society.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/ecosystem/ngos">
                    Explore User Journeys
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  Watch Explainer
                </Button>
              </div>
            </div>
            <div className="bg-secondary/30 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs text-text-secondary">NGOs</span>
                </div>
                <ArrowRight className="h-5 w-5 text-text-secondary" />
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <span className="text-xs text-text-secondary font-medium">DPI Platform</span>
                </div>
                <ArrowRight className="h-5 w-5 text-text-secondary" />
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-2">
                    <Heart className="h-6 w-6 text-success" />
                  </div>
                  <span className="text-xs text-text-secondary">Donors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ecosystem Architecture */}
      <section className="section-alt">
        <div className="container-wide section-padding">
          <h2 className="text-2xl font-semibold mb-4">The Ecosystem Architecture</h2>
          <p className="text-text-secondary mb-10 max-w-3xl">
            Our platform acts as a neutral verification & discovery layer. We do not own the data; we facilitate 
            trusted interactions between authenticated participants.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {architectureSteps.map((step, index) => (
              <div
                key={step.title}
                className={`card-elevated p-6 text-center ${step.highlighted ? 'ring-2 ring-accent' : ''}`}
              >
                <div className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center ${step.highlighted ? 'bg-accent' : 'bg-secondary'}`}>
                  <step.icon className={`h-7 w-7 ${step.highlighted ? 'text-accent-foreground' : 'text-primary'}`} />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary mb-4">{step.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${step.highlighted ? 'bg-accent/20 text-accent' : 'bg-secondary text-text-secondary'}`}>
                  {step.badge}
                </span>
                {index < architectureSteps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                    <ArrowRight className="h-5 w-5 text-text-tertiary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participation Journeys */}
      <section className="bg-card">
        <div className="container-wide section-padding">
          <h2 className="text-2xl font-semibold mb-10">Participation Journeys</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {journeys.map((journey) => (
              <div key={journey.title} className="card-elevated">
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <journey.icon className={`h-5 w-5 ${journey.color}`} />
                    <h3 className="font-semibold">{journey.title}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  {journey.steps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-xs font-medium flex items-center justify-center">
                        {step.number}
                      </div>
                      <div>
                        <div className="font-medium text-text-primary text-sm">{step.title}</div>
                        <div className="text-xs text-text-secondary mt-1">{step.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 pt-0">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={journey.href}>{journey.cta}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency & Data */}
      <section className="section-alt">
        <div className="container-wide section-padding">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Transparency & Data</h2>
              <p className="text-text-secondary">
                We believe in data sovereignty. You own your data; we are just the custodians.
              </p>
            </div>
            <Link to="/privacy" className="link-arrow text-sm hidden sm:flex">
              Read full Privacy Policy
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {dataPolicy.map((item) => (
              <div key={item.title} className="card-elevated p-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Verification Standard */}
          <div className="card-elevated p-8">
            <h3 className="font-semibold text-center mb-8">The Verification Standard</h3>
            <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
              {verificationSteps.map((step, index) => (
                <div key={step.label} className="flex items-center gap-4">
                  <div className="text-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                      step.status === 'complete' ? 'bg-success' : 
                      step.status === 'active' ? 'bg-accent' : 'bg-secondary'
                    }`}>
                      {step.status === 'complete' ? (
                        <CheckCircle2 className="h-5 w-5 text-success-foreground" />
                      ) : (
                        <span className={`text-sm font-medium ${step.status === 'active' ? 'text-accent-foreground' : 'text-text-secondary'}`}>
                          {index + 1}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-text-secondary">{step.label}</span>
                  </div>
                  {index < verificationSteps.length - 1 && (
                    <div className="w-12 h-0.5 bg-border hidden md:block" />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-text-secondary mt-6">
              Typical turnaround: <span className="font-medium text-text-primary">3-5 Business Days</span>
            </p>
          </div>
        </div>
      </section>

      {/* Cost Structure */}
      <section className="gradient-hero text-primary-foreground">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-wider opacity-70 mb-2">Cost Structure</div>
              <h2 className="text-3xl font-bold mb-6">Zero Cost for Changemakers</h2>
              <p className="opacity-90 mb-6">
                The platform is a Digital Public Good. We do not charge NGOs for registration, verification, or visibility.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <span>Free Registration</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <span>No Commission on Funding</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <span>Open Access to Tools</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Sustainability Model</h3>
              <p className="text-sm opacity-80 mb-4">
                The platform is sustained through philanthropic grants and CSR partnerships committed to 
                strengthening India's development ecosystem.
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-primary-foreground/20">
                <Shield className="h-4 w-4 opacity-70" />
                <span className="text-sm opacity-70">Supported by</span>
                <span className="font-medium">Philanthropic Consortium</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
