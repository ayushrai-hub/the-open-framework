import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  FileText, 
  Code2, 
  Users, 
  Download, 
  Printer,
  ArrowRight,
  ChevronDown,
  Home,
  Settings,
  Book,
  Database,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const sidebarSections = [
  {
    title: "Getting Started",
    items: [
      { label: "Overview", href: "#", icon: Home, active: true },
      { label: "Architecture", href: "#", icon: Settings },
      { label: "Trust & Privacy", href: "#", icon: FileText },
    ],
  },
  {
    title: "Role Guides",
    items: [
      { label: "NGOs & Civil Society", href: "#", icon: Book },
      { label: "Developers", href: "#", icon: Code2 },
      { label: "Auditors", href: "#", icon: Users },
    ],
  },
  {
    title: "Reference",
    items: [
      { label: "API Reference", href: "/resources/api", icon: Code2 },
      { label: "Compliance Templates", href: "/resources/templates", icon: FileText },
      { label: "Data Dictionary", href: "#", icon: Database },
      { label: "Changelog", href: "#", icon: RefreshCw },
    ],
  },
];

const roleCards = [
  {
    icon: Book,
    color: "text-primary bg-primary/10",
    title: "For NGOs",
    description: "Register your organization, file annual returns, and manage compliance documents securely.",
  },
  {
    icon: Code2,
    color: "text-accent bg-accent/10",
    title: "For Developers",
    description: "Integrate via APIs, explore the sandbox environment, and access SDKs for building extensions.",
  },
  {
    icon: Users,
    color: "text-success bg-success/10",
    title: "For Auditors",
    description: "Review submitted data, verify compliance status (12A/80G), and issue audit certificates.",
  },
];

const templates = [
  { name: "Form 10B - Audit Report", updated: "Oct 12, 2023", size: "2.4 MB", format: "PDF" },
  { name: "FCRA Annual Return Template", updated: "Sep 28, 2023", format: "DOCX" },
];

const faqs = [
  "How do I reset my organization's master key?",
  "Is offline data entry supported?",
  "What formats are accepted for bulk uploads?",
];

const tocLinks = [
  { label: "Browse by Role", href: "#role" },
  { label: "Compliance Templates", href: "#templates" },
  { label: "API Quick Start", href: "#api" },
  { label: "FAQ", href: "#faq" },
];

export default function DocumentationPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      <div className="min-h-screen">
        <div className="grid lg:grid-cols-[260px_1fr_200px]">
          {/* Left Sidebar */}
          <aside className="hidden lg:block border-r border-border bg-muted/30 p-6">
            <div className="sticky top-24">
              {sidebarSections.map((section) => (
                <div key={section.title} className="mb-6">
                  <h4 className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-3">
                    {section.title}
                  </h4>
                  <nav className="space-y-1">
                    {section.items.map((item) => {
                      const isExternal = item.href.startsWith("#");
                      return isExternal ? (
                        <a
                          key={item.label}
                          href={item.href}
                          className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                            item.active
                              ? "bg-accent/10 text-link font-medium"
                              : "text-text-secondary hover:text-text-primary hover:bg-muted"
                          }`}
                        >
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors text-text-secondary hover:text-text-primary hover:bg-muted"
                        >
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="p-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-text-secondary mb-6">
              <Link to="/" className="hover:text-text-primary">Home</Link>
              <span>/</span>
              <span className="text-text-primary">Documentation Hub</span>
            </nav>

            {/* Header */}
            <h1 className="text-3xl font-bold mb-4">How can we help you build?</h1>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl">
              Explore the comprehensive documentation for India's National Civil Society Platform. 
              Access integration guides, compliance standards, and federated data models designed for scale and trust.
            </p>

            {/* Search */}
            <div className="flex gap-3 mb-12">
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Search for 'FCRA compliance', 'Auth API', or 'User Registration'..."
                  className="w-full h-11 pl-10 pr-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button>Search</Button>
            </div>

            {/* Browse by Role */}
            <section id="role" className="mb-12">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full" />
                Browse by Role
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {roleCards.map((card) => (
                  <div key={card.title} className="card-elevated p-5 hover:shadow-md transition-shadow">
                    <div className={`w-10 h-10 rounded-lg ${card.color} flex items-center justify-center mb-4`}>
                      <card.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold mb-2">{card.title}</h3>
                    <p className="text-sm text-text-secondary">{card.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Compliance Templates */}
            <section id="templates" className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="w-1 h-5 bg-primary rounded-full" />
                  Compliance Templates
                </h2>
                <Link to="/resources/templates" className="link-arrow text-sm">
                  View all templates
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="space-y-3">
                {templates.map((template) => (
                  <div key={template.name} className="card-elevated p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className={`h-5 w-5 ${template.format === 'PDF' ? 'text-destructive' : 'text-accent'}`} />
                      <div>
                        <div className="font-medium text-sm">{template.name}</div>
                        <div className="text-xs text-text-secondary">
                          Updated: {template.updated} {template.size && `• ${template.size}`}
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download {template.format}
                    </Button>
                  </div>
                ))}
              </div>
            </section>

            {/* API Quick Start */}
            <section id="api" className="mb-12">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full" />
                API Quick Start
              </h2>

              <div className="rounded-lg overflow-hidden border border-border">
                <div className="bg-foreground text-background px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-warning" />
                    <div className="w-3 h-3 rounded-full bg-success" />
                  </div>
                  <span className="text-xs opacity-70">POST /api/v2/auth/token</span>
                </div>
                <div className="bg-code-bg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-text-primary">
{`curl -X POST https://api.bharat-dpi.gov.in/v2/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "client_id": "your_client_id",
    "client_secret": "your_client_secret",
    "grant_type": "client_credentials"
  }'`}
                  </pre>
                </div>
                <div className="bg-muted px-4 py-3 flex items-center justify-between">
                  <span className="text-xs text-text-secondary">Authentication requires OAuth 2.0 credentials.</span>
                  <Link to="/resources/api" className="link-arrow text-sm">
                    Read Full Documentation
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full" />
                Frequently Asked Questions
              </h2>

              <div className="space-y-2">
                {faqs.map((faq) => (
                  <button
                    key={faq}
                    className="w-full card-elevated p-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-sm font-medium">{faq}</span>
                    <ChevronDown className="h-4 w-4 text-text-secondary" />
                  </button>
                ))}
              </div>
            </section>
          </main>

          {/* Right Sidebar - Table of Contents */}
          <aside className="hidden xl:block border-l border-border p-6">
            <div className="sticky top-24">
              <h4 className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-4">
                On This Page
              </h4>
              <nav className="space-y-2 mb-8">
                {tocLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <h4 className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-4">
                Tools
              </h4>
              <div className="space-y-2">
                <button className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors">
                  <Printer className="h-4 w-4" />
                  Print / PDF
                </button>
                <button className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors">
                  <Download className="h-4 w-4" />
                  Save for Offline
                </button>
              </div>

              <div className="mt-8 p-4 bg-success/10 rounded-lg">
                <div className="flex items-center gap-2 text-success text-xs font-medium mb-2">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  New Update
                </div>
                <p className="text-xs text-text-secondary mb-2">
                  v2.4 released with updated FCRA compliance schemas.
                </p>
                <Link to="#" className="text-xs text-link">Read Changelog</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
