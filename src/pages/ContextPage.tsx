import { Layout } from "@/components/layout/Layout";
import { 
  FileText, 
  AlertTriangle, 
  TrendingUp, 
  Shield, 
  Layers,
  ArrowRight,
  Download,
  Quote,
  BarChart3,
  Clock,
  Building2,
  Users,
  IndianRupee,
  Wifi
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  { id: "overview", label: "Problem Overview", icon: FileText },
  { id: "fragmentation", label: "Ecosystem Fragmentation", icon: Layers },
  { id: "trust", label: "Trust Deficit", icon: Shield },
  { id: "compliance", label: "Compliance Burden", icon: AlertTriangle },
  { id: "theory", label: "Theory of Change", icon: TrendingUp },
  { id: "limitations", label: "Platform Limitations", icon: AlertTriangle },
];

export default function ContextPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="container-wide py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            {/* Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                <nav className="space-y-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-3">
                    On This Page
                  </h3>
                  {sidebarLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-muted rounded-md transition-colors text-left"
                    >
                      <link.icon className="h-4 w-4" />
                      {link.label}
                    </button>
                  ))}
                </nav>

                {/* CTA Card */}
                <div className="bg-primary rounded-lg p-5 text-primary-foreground">
                  <h4 className="font-semibold mb-2">Download Whitepaper</h4>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Get the complete research report on civil society infrastructure challenges.
                  </p>
                  <Button variant="secondary" size="sm" className="w-full gap-2">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="space-y-16">
              {/* Hero Section */}
              <section id="overview">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium mb-4">
                  <FileText className="h-3 w-3" />
                  CONTEXTUAL FRAMEWORK
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  The Civil Society Challenge: Systemic Barriers & Fragmentation
                </h1>
                <p className="text-lg text-text-secondary max-w-3xl">
                  Understanding why India's civil society ecosystem needs a Digital Public Infrastructure approach 
                  to unlock its true potential.
                </p>
              </section>

              {/* Executive Summary */}
              <section className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-text-primary mb-3">Executive Summary</h2>
                <p className="text-text-secondary leading-relaxed">
                  India is home to over 3.2 million registered NGOs, making it one of the largest civil society 
                  ecosystems globally. Yet, this ecosystem remains fragmented, plagued by trust deficits, 
                  compliance inefficiencies, and isolated data systems that limit collaboration and impact. 
                  The India DPI for Civil Society proposes a federated infrastructure layer that addresses 
                  these challenges through open standards, shared protocols, and verifiable trust networks.
                </p>
              </section>

              {/* Ecosystem Fragmentation */}
              <section id="fragmentation" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Ecosystem Fragmentation
                  </h2>
                  <p className="text-text-secondary leading-relaxed max-w-3xl">
                    The civil society ecosystem operates in silos. NGOs use disparate systems for compliance, 
                    donors maintain separate due diligence databases, and regulators operate disconnected 
                    portals. This fragmentation creates duplication, inefficiency, and opacity.
                  </p>
                </div>

                {/* Data Visualization */}
                <div className="bg-surface border border-border rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <BarChart3 className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold text-text-primary">Data Isolation Index</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-text-secondary">Non-interoperable Systems</span>
                        <span className="font-semibold text-text-primary">92%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-destructive rounded-full" style={{ width: "92%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-text-secondary">Duplicate Data Entry</span>
                        <span className="font-semibold text-text-primary">78%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-warning rounded-full" style={{ width: "78%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-text-secondary">Cross-sector Data Sharing</span>
                        <span className="font-semibold text-text-primary">12%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-status-operational rounded-full" style={{ width: "12%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-surface border border-border rounded-lg p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                      <Building2 className="h-6 w-6 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-text-primary mb-1">3.2M</div>
                    <div className="text-sm text-text-secondary">Estimated Active NGOs</div>
                  </div>
                  <div className="bg-surface border border-border rounded-lg p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-warning/10 mb-4">
                      <IndianRupee className="h-6 w-6 text-warning" />
                    </div>
                    <div className="text-3xl font-bold text-text-primary mb-1">₹15k Cr</div>
                    <div className="text-sm text-text-secondary">Annual Compliance Cost</div>
                  </div>
                  <div className="bg-surface border border-border rounded-lg p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-destructive/10 mb-4">
                      <Wifi className="h-6 w-6 text-destructive" />
                    </div>
                    <div className="text-3xl font-bold text-text-primary mb-1">Low</div>
                    <div className="text-sm text-text-secondary">Digital Readiness Index</div>
                  </div>
                </div>
              </section>

              {/* Trust Deficit */}
              <section id="trust" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">
                    The Trust Deficit
                  </h2>
                  <p className="text-text-secondary leading-relaxed max-w-3xl">
                    Trust in civil society organizations has eroded due to lack of transparency, 
                    limited accountability mechanisms, and high-profile scandals. Donors and 
                    government agencies spend significant resources on repeated verification.
                  </p>
                </div>

                {/* Quote Block */}
                <div className="bg-surface border-l-4 border-accent rounded-r-lg p-6">
                  <Quote className="h-8 w-8 text-accent/50 mb-4" />
                  <blockquote className="text-lg text-text-primary italic mb-4">
                    "The lack of a unified verification system means every donor must independently 
                    verify each organization, creating massive duplication of effort and inconsistent 
                    standards across the sector."
                  </blockquote>
                  <cite className="text-sm text-text-secondary not-italic">
                    — NITI Aayog Report on Civil Society Organizations, 2023
                  </cite>
                </div>

                {/* Verification Latency Chart */}
                <div className="bg-surface border border-border rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Clock className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold text-text-primary">Verification Latency Comparison</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-sm text-text-secondary">Digital (DPI)</div>
                      <div className="flex-1">
                        <div className="h-8 bg-status-operational/20 rounded flex items-center px-3" style={{ width: "10%" }}>
                          <span className="text-xs font-semibold text-status-operational">Instant</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-sm text-text-secondary">Manual Process</div>
                      <div className="flex-1">
                        <div className="h-8 bg-destructive/20 rounded flex items-center justify-end px-3" style={{ width: "100%" }}>
                          <span className="text-xs font-semibold text-destructive">3-6 Months</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Compliance Burden */}
              <section id="compliance" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Compliance Burden
                  </h2>
                  <p className="text-text-secondary leading-relaxed max-w-3xl">
                    NGOs face overlapping compliance requirements across multiple regulatory bodies. 
                    Small organizations spend disproportionate resources on paperwork rather than 
                    mission delivery.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-surface border border-border rounded-lg p-6">
                    <div className="text-4xl font-bold text-destructive mb-2">7+</div>
                    <div className="text-sm font-medium text-text-primary mb-1">Regulatory Bodies</div>
                    <div className="text-sm text-text-secondary">
                      NGOs must file with multiple agencies including MHA, MCA, Income Tax, FCRA, and state-level bodies
                    </div>
                  </div>
                  <div className="bg-surface border border-border rounded-lg p-6">
                    <div className="text-4xl font-bold text-warning mb-2">40%</div>
                    <div className="text-sm font-medium text-text-primary mb-1">Admin Overhead</div>
                    <div className="text-sm text-text-secondary">
                      Small NGOs spend up to 40% of their time on compliance and reporting activities
                    </div>
                  </div>
                </div>
              </section>

              {/* Theory of Change */}
              <section id="theory" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Theory of Change
                  </h2>
                  <p className="text-text-secondary leading-relaxed max-w-3xl">
                    The DPI approach creates systemic change through open standards, federated architecture, 
                    and shared infrastructure that enables interoperability without centralization.
                  </p>
                </div>

                {/* Flow Diagram */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-surface border border-border rounded-lg p-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                      01 — Input
                    </div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">DPI Standards</h4>
                    <p className="text-sm text-text-secondary">
                      Open protocols, shared schemas, and interoperability frameworks that any system can adopt
                    </p>
                  </div>
                  <div className="bg-surface border border-border rounded-lg p-6 relative">
                    <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-border" />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                      02 — Process
                    </div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">Federation</h4>
                    <p className="text-sm text-text-secondary">
                      Distributed networks of verified providers sharing trust and data through common rails
                    </p>
                  </div>
                  <div className="bg-accent text-accent-foreground rounded-lg p-6 relative">
                    <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-border" />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/70 mb-3">
                      03 — Impact
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Efficiency & Trust</h4>
                    <p className="text-sm text-accent-foreground/80">
                      Reduced costs, faster verification, increased transparency, and greater sector collaboration
                    </p>
                  </div>
                </div>
              </section>

              {/* Platform Limitations */}
              <section id="limitations" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Platform Limitations
                  </h2>
                  <p className="text-text-secondary leading-relaxed max-w-3xl">
                    It is important to understand what this platform is not. Clear boundaries help set 
                    appropriate expectations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-warning/5 border border-warning/20 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-warning/10">
                        <AlertTriangle className="h-4 w-4 text-warning" />
                      </div>
                      <h4 className="font-semibold text-text-primary">Not a Regulator</h4>
                    </div>
                    <p className="text-sm text-text-secondary">
                      This platform does not replace government regulatory bodies. It provides infrastructure 
                      for data exchange but does not grant legal status or compliance certifications.
                    </p>
                  </div>
                  <div className="bg-warning/5 border border-warning/20 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-warning/10">
                        <Users className="h-4 w-4 text-warning" />
                      </div>
                      <h4 className="font-semibold text-text-primary">Not a Funding Agency</h4>
                    </div>
                    <p className="text-sm text-text-secondary">
                      The platform does not provide grants or funding. It connects NGOs with donors but 
                      does not intermediate financial transactions or guarantee funding outcomes.
                    </p>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
}
