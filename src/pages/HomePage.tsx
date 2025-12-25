import { Link } from "react-router-dom";
import { 
  Building2, 
  Users, 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Shield, 
  Code2, 
  Globe,
  Sparkles,
  Lock,
  Network
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const stats = [
  { value: "34,102", label: "Registered Entities" },
  { value: "682", label: "Districts Covered" },
  { value: "12", label: "Active Registry Nodes" },
  { value: "3", label: "Open Protocols" },
];

const roles = [
  {
    icon: Building2,
    title: "Civil Society Organizations",
    description: "Register your entity, manage verifiable credentials, discover grants, and access digital public goods.",
    cta: "Enter Portal",
    href: "/ecosystem/ngos",
  },
  {
    icon: Heart,
    title: "Philanthropic Partners",
    description: "Discover verified projects, track impact through standardized data, and streamline grant-making.",
    cta: "Access Dashboard",
    href: "/ecosystem/donors",
  },
  {
    icon: Users,
    title: "Volunteers & Talent",
    description: "Connect with impact organizations, offer skills, and contribute to open-source DPI projects.",
    cta: "Explore Opportunities",
    href: "/ecosystem/volunteers",
  },
];

const updates = [
  {
    date: "Oct 12",
    title: "Protocol v2.1 Released",
    description: "Includes enhanced privacy-preserving verifiable credentials schema and improved discovery API latency.",
  },
  {
    date: "Sep 28",
    title: "New Compliance Framework",
    description: "Updated guidelines for FCRA-registered entities to simplify reporting workflows automatically.",
  },
  {
    date: "Sep 10",
    title: "10,000 Nodes Milestone",
    description: "The network has crossed 10,000 verified nodes across 12 states.",
  },
];

const principles = [
  { icon: Lock, title: "Zero Knowledge", subtitle: "Privacy First Design" },
  { icon: Code2, title: "Open Source", subtitle: "MIT Licensed Codebase" },
  { icon: Shield, title: "Regulatory Compliant", subtitle: "CSR & FCRA Ready" },
  { icon: Network, title: "Federated", subtitle: "No Central Data Silo" },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground">
        <div className="container-wide py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="badge-official mb-6 bg-primary-foreground/20 text-primary-foreground">
              <span className="w-2 h-2 rounded-full bg-status-operational animate-pulse" />
              System Operational: v2.4 Active
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground leading-tight">
              Digital Public Infrastructure for India's Social Sector
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
              An open, federated protocol enabling trust, discovery, and collaboration across the civil society ecosystem. 
              Built for institutional neutrality, data sovereignty, and endurance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero-secondary" size="lg" asChild>
                <Link to="/documentation">
                  <FileText className="h-4 w-4" />
                  Documentation
                </Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <Link to="/how-it-works">
                  <Sparkles className="h-4 w-4" />
                  Join Network
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-border bg-card">
        <div className="container-wide py-8">
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
            <Globe className="h-4 w-4" />
            <span className="uppercase tracking-wider font-medium">Ecosystem Scale (Live)</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-text-primary">{stat.value}</div>
                <div className="text-sm text-text-secondary mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <section className="section-alt">
        <div className="container-wide section-padding">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Select your role to access the ecosystem
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The platform serves as a neutral bridge for various stakeholders. Choose your entry point below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {roles.map((role) => (
              <div
                key={role.title}
                className="card-elevated p-6 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <role.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{role.title}</h3>
                <p className="text-sm text-text-secondary mb-6">{role.description}</p>
                <Link
                  to={role.href}
                  className="link-arrow text-sm"
                >
                  {role.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updates and Principles */}
      <section className="bg-card">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Protocol Updates */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Globe className="h-5 w-5 text-link" />
                  Protocol Updates
                </h3>
                <Link to="/documentation" className="text-sm link-arrow">
                  View All
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="space-y-4">
                {updates.map((update, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <div className="text-sm text-text-secondary font-medium whitespace-nowrap">{update.date}</div>
                    <div>
                      <div className="font-medium text-text-primary">{update.title}</div>
                      <div className="text-sm text-text-secondary mt-1">{update.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Governed by Community Standards */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-link" />
                  Governed by Community Standards
                </h3>
                <p className="text-sm text-text-secondary mt-2">
                  The platform adheres to the highest standards of data privacy, institutional neutrality, and 
                  open-source governance. It is not an intermediary, but a digital public good.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {principles.map((principle) => (
                  <div key={principle.title} className="p-4 rounded-lg border border-border">
                    <principle.icon className="h-5 w-5 text-link mb-2" />
                    <div className="font-medium text-text-primary">{principle.title}</div>
                    <div className="text-xs text-text-secondary">{principle.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-t border-border">
        <div className="container-wide py-12">
          <div className="text-center">
            <p className="text-xs uppercase tracking-wider text-text-secondary mb-6">Ecosystem Partners</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <span className="px-4 py-2 border border-border rounded-full text-sm">Ministry of IT</span>
              <span className="px-4 py-2 border border-border rounded-full text-sm">Digital India</span>
              <span className="px-4 py-2 border border-border rounded-full text-sm">Open Network</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
