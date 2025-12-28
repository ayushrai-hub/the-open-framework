import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Code2, 
  BookOpen, 
  Terminal, 
  GitBranch, 
  Shield, 
  Zap,
  ChevronRight,
  ExternalLink,
  FileCode2,
  Bug,
  MessageSquare,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const quickLinks = [
  {
    icon: BookOpen,
    title: "API Reference",
    description: "Complete REST API documentation with examples",
    href: "/resources/api",
    badge: "v2.4.0",
  },
  {
    icon: Terminal,
    title: "Sandbox Environment",
    description: "Test your integrations in a safe environment",
    href: "/resources/api#sandbox",
    badge: "Available",
  },
  {
    icon: FileCode2,
    title: "SDKs & Libraries",
    description: "Official client libraries for popular languages",
    href: "/resources/api#sdks",
  },
  {
    icon: GitBranch,
    title: "GitHub Repository",
    description: "Open source components and contribution guides",
    href: "https://github.com/indiadpi",
    external: true,
  },
];

const gettingStarted = [
  {
    step: 1,
    title: "Request API Access",
    description: "Register your application and get API credentials. Access is granted to verified developers and organizations.",
  },
  {
    step: 2,
    title: "Explore the Sandbox",
    description: "Use our sandbox environment to test API calls without affecting production data. Full functionality available.",
  },
  {
    step: 3,
    title: "Integrate & Build",
    description: "Use our SDKs or direct REST calls to integrate India DPI features into your application.",
  },
  {
    step: 4,
    title: "Submit for Review",
    description: "Before going live, submit your integration for security and compliance review.",
  },
];

const changelog = [
  {
    version: "2.4.0",
    date: "December 15, 2024",
    type: "feature",
    changes: [
      "New NGO verification status endpoints",
      "Bulk data export API for donors",
      "Enhanced rate limiting with burst support",
    ],
  },
  {
    version: "2.3.2",
    date: "November 28, 2024",
    type: "fix",
    changes: [
      "Fixed pagination issue in search results",
      "Improved error messages for validation failures",
      "Updated OAuth token refresh flow",
    ],
  },
  {
    version: "2.3.0",
    date: "November 10, 2024",
    type: "feature",
    changes: [
      "Webhook support for real-time notifications",
      "New grant application status events",
      "GraphQL beta endpoint available",
    ],
  },
];

const resources = [
  {
    title: "Integration Guides",
    items: [
      { label: "Authentication & OAuth", href: "/documentation#auth" },
      { label: "Webhook Integration", href: "/documentation#webhooks" },
      { label: "Error Handling Best Practices", href: "/documentation#errors" },
      { label: "Rate Limiting & Quotas", href: "/documentation#rate-limits" },
    ],
  },
  {
    title: "Use Cases",
    items: [
      { label: "Building a Donor Dashboard", href: "/documentation#donor-dashboard" },
      { label: "NGO Data Verification", href: "/documentation#ngo-verification" },
      { label: "Grant Application Automation", href: "/documentation#grant-automation" },
      { label: "Impact Reporting Integration", href: "/documentation#impact-reporting" },
    ],
  },
  {
    title: "Governance & Compliance",
    items: [
      { label: "Data Usage Guidelines", href: "/legal/privacy" },
      { label: "API Terms of Service", href: "/legal/terms" },
      { label: "Security Requirements", href: "/governance/conduct" },
      { label: "Open Source Licenses", href: "https://github.com/indiadpi/licenses" },
    ],
  },
];

export default function DeveloperBoardPage() {
  return (
    <Layout>
      <Helmet>
        <title>Developer Board | India DPI</title>
        <meta name="description" content="Build on India DPI platform. Access APIs, SDKs, documentation, and developer resources." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 border-b border-border">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code2 className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              Developer Board
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Build applications and integrations on India's civil society infrastructure. 
              Access APIs, documentation, and developer resources.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/resources/api">
                <Button size="lg">
                  <BookOpen className="h-5 w-5 mr-2" />
                  API Documentation
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Terminal className="h-5 w-5 mr-2" />
                Access Sandbox
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 border-b border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                target={link.external ? "_blank" : undefined}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <link.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    {link.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {link.badge}
                      </Badge>
                    )}
                    {link.external && (
                      <ExternalLink className="h-3 w-3 text-text-secondary" />
                    )}
                  </div>
                  <p className="text-sm text-text-secondary">
                    {link.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 border-b border-border">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Getting Started
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gettingStarted.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-text-primary mb-1">
                  Security & Compliance Review
                </h3>
                <p className="text-sm text-text-secondary">
                  All production integrations must pass our security review to ensure 
                  user data protection and platform integrity. Review typically takes 
                  5-7 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 border-b border-border bg-muted/30">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Resources & Guides
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-text-primary mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        className="text-sm text-text-secondary hover:text-primary flex items-center gap-1"
                      >
                        <ChevronRight className="h-3 w-3" />
                        {item.label}
                        {item.href.startsWith("http") && (
                          <ExternalLink className="h-3 w-3 ml-1" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-16 border-b border-border">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-text-primary">
              API Changelog
            </h2>
            <Link to="/resources/api#changelog" className="text-link hover:underline text-sm">
              View full changelog
            </Link>
          </div>
          
          <div className="space-y-6">
            {changelog.map((release) => (
              <div
                key={release.version}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-mono font-semibold text-text-primary">
                    v{release.version}
                  </span>
                  <Badge 
                    variant={release.type === "feature" ? "default" : "secondary"}
                    className={release.type === "feature" ? "bg-emerald-100 text-emerald-700" : ""}
                  >
                    {release.type === "feature" ? "Feature" : "Bug Fix"}
                  </Badge>
                  <span className="flex items-center gap-1 text-sm text-text-secondary">
                    <Clock className="h-3 w-3" />
                    {release.date}
                  </span>
                </div>
                <ul className="space-y-1">
                  {release.changes.map((change, idx) => (
                    <li key={idx} className="text-sm text-text-secondary flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Support */}
      <section className="py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Developer Support
            </h2>
            <p className="text-text-secondary mb-8">
              Get help with your integration or report issues
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/community"
                className="p-5 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors"
              >
                <MessageSquare className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-text-primary mb-1">Community Forum</h3>
                <p className="text-sm text-text-secondary">Ask questions and share knowledge</p>
              </Link>
              
              <a
                href="https://github.com/indiadpi/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors"
              >
                <Bug className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-text-primary mb-1">Report Issues</h3>
                <p className="text-sm text-text-secondary">File bug reports on GitHub</p>
              </a>
              
              <Link
                to="/contact"
                className="p-5 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors"
              >
                <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-text-primary mb-1">Enterprise Support</h3>
                <p className="text-sm text-text-secondary">Priority support for partners</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
