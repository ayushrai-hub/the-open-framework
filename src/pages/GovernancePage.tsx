import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  FileText,
  Download,
  Shield,
  Database,
  ExternalLink,
  Calendar
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const sidebarLinks = [
  { label: "Overview", href: "#overview", active: true },
  { label: "Structure", href: "#structure" },
  { label: "Board of Advisors", href: "#board" },
  { label: "Funding", href: "#funding" },
  { label: "Policies", href: "#policies" },
  { label: "Audits & Reports", href: "#reports" },
];

const federatedPrinciples = [
  "Decentralized Data Authority",
  "Standardized Interoperability Protocol",
  "Open Source Core Infrastructure",
];

const boardMembers = [
  {
    name: "Dr. Anita Sharma",
    role: "Chairperson",
    bio: "Former Secretary of Technology, focusing on digital inclusion policies and rural connectivity.",
  },
  {
    name: "Rajesh Kumar",
    role: "Technical Lead",
    bio: "Chief Architect of IndiaStack, advocating for open APIs and scalable public goods.",
  },
  {
    name: "Priya Desai",
    role: "Civil Society Liaison",
    bio: "Activist and lawyer specializing in digital rights and privacy for marginalized communities.",
  },
];

const fundingSources = [
  { name: "Philanthropic Grants", percentage: 65, color: "bg-primary" },
  { name: "Public Sector Contribution", percentage: 25, color: "bg-accent" },
  { name: "Community Donations", percentage: 10, color: "bg-success" },
];

const policies = [
  {
    icon: Shield,
    title: "Conflict of Interest Policy",
    description: "Mandatory disclosure requirements for all board members and key technical staff to prevent commercial influence on public infrastructure decisions.",
  },
  {
    icon: Database,
    title: "Data Privacy Framework",
    description: "Aligned with India's DPDP Act 2023, outlining purpose limitation, data minimization, and citizen grievance redressal mechanisms.",
  },
];

const reports = [
  { name: "Annual Transparency Report 2023", category: "Annual Report", date: "Oct 2023" },
  { name: "Q3 Security Audit Log", category: "Security", date: "Sep 2023" },
  { name: "Federated API Compliance Review", category: "Compliance", date: "Aug 2023" },
];

export default function GovernancePage() {
  return (
    <Layout>
      <div className="container-wide">
        <div className="grid lg:grid-cols-[240px_1fr] gap-8 py-8">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h4 className="text-sm font-medium text-text-secondary mb-4">Contents</h4>
              <p className="text-xs text-text-tertiary mb-4">Jump to section</p>
              <nav className="space-y-1">
                {sidebarLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                      link.active 
                        ? 'bg-accent/10 text-link font-medium' 
                        : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-sm font-medium text-text-secondary mb-4">Contact Governance</h4>
                <a href="mailto:ombudsman@dpi.org.in" className="text-sm text-link">
                  ombudsman@dpi.org.in
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="min-w-0">
            {/* Header */}
            <section id="overview" className="mb-12">
              <div className="badge-official mb-4">
                <Shield className="h-3 w-3" />
                Institutional Neutrality
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Governance & Transparency
              </h1>
              <p className="text-lg text-text-secondary mb-6 max-w-3xl">
                Our commitment to trust-first operations. We ensure institutional neutrality, 
                federated architecture visibility, and open access to our operational standards for 
                India's civil society ecosystem.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Last Updated: October 26, 2023
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Source: Secretariat
                </span>
              </div>
            </section>

            {/* Governance Structure */}
            <section id="structure" className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Governance Structure</h2>
              <p className="text-text-secondary mb-6">
                Understanding our federated operational model and separation of concerns.
              </p>

              <div className="card-elevated p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">The Federated Model</h3>
                    <p className="text-sm text-text-secondary mb-6">
                      The DPI Platform operates on a federated architecture where data ownership remains distributed. 
                      Our central governance body establishes standards, protocols, and security mandates, but does not 
                      centralize data storage.
                    </p>
                    <ul className="space-y-3">
                      {federatedPrinciples.map((principle) => (
                        <li key={principle} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent" />
                          <span>{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="flex justify-center gap-2 mb-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="w-3 h-3 rounded-full bg-accent/60" />
                        ))}
                      </div>
                      <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-2 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div className="flex justify-center gap-2 mt-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="w-3 h-3 rounded-full bg-accent/60" />
                        ))}
                      </div>
                      <p className="text-xs text-text-secondary mt-4 uppercase tracking-wider">
                        Federated Network Topology
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Board of Advisors */}
            <section id="board" className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Board of Advisors</h2>
                <Link to="#" className="link-arrow text-sm">
                  View Charter
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {boardMembers.map((member) => (
                  <div key={member.name} className="text-center">
                    <div className="w-full aspect-[4/3] bg-secondary/50 rounded-lg mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-text-tertiary" />
                    </div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-link mb-2">{member.role}</p>
                    <p className="text-xs text-text-secondary">{member.bio}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Funding & Sustainability */}
            <section id="funding" className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Funding & Sustainability</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-elevated p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-accent" />
                    </div>
                    <h3 className="font-semibold">Funding Sources</h3>
                  </div>

                  <div className="space-y-4">
                    {fundingSources.map((source) => (
                      <div key={source.name}>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="font-medium">{source.name}</span>
                          <span className="text-text-secondary">{source.percentage}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${source.color} rounded-full`}
                            style={{ width: `${source.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-text-secondary mb-4">
                    Our diversified funding model ensures no single entity influences the platform's roadmap. 
                    We maintain a strict <span className="font-medium text-text-primary">Firewall Policy</span> between 
                    donors and operational decision-making.
                  </p>
                  <a href="#" className="link-arrow text-sm">
                    <Download className="h-4 w-4" />
                    Download 2023 Financial Statement
                  </a>
                </div>
              </div>
            </section>

            {/* Operational Policies */}
            <section id="policies" className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Operational Policies</h2>

              <div className="space-y-4">
                {policies.map((policy) => (
                  <div key={policy.title} className="card-elevated p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <policy.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{policy.title}</h3>
                        <ExternalLink className="h-4 w-4 text-text-tertiary" />
                      </div>
                      <p className="text-sm text-text-secondary mt-1">{policy.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Audits & Reports */}
            <section id="reports" className="mb-12">
              <h2 className="text-2xl font-semibold mb-2">Audits & Reports</h2>
              <p className="text-text-secondary mb-6">
                Independent security audits and annual transparency reports.
              </p>

              <div className="card-elevated overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left text-xs font-medium text-text-secondary uppercase tracking-wider px-6 py-3">
                        Document Name
                      </th>
                      <th className="text-left text-xs font-medium text-text-secondary uppercase tracking-wider px-6 py-3">
                        Category
                      </th>
                      <th className="text-left text-xs font-medium text-text-secondary uppercase tracking-wider px-6 py-3">
                        Date
                      </th>
                      <th className="text-right text-xs font-medium text-text-secondary uppercase tracking-wider px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.map((report, index) => (
                      <tr key={report.name} className={index !== reports.length - 1 ? 'border-b border-border' : ''}>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <FileText className="h-5 w-5 text-destructive" />
                            <span className="font-medium text-sm">{report.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-text-secondary">{report.category}</td>
                        <td className="px-6 py-4 text-sm text-text-secondary">{report.date}</td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="text-sm text-link hover:text-link-hover">Download</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
