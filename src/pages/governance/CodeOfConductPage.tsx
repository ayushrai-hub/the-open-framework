import { Link } from "react-router-dom";
import { 
  Download,
  Shield,
  Users,
  Search,
  Lock,
  Ban,
  AlertTriangle,
  XCircle,
  Building2,
  Heart,
  Code,
  ArrowRight,
  CheckCircle2,
  Clock
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const corePrinciples = [
  {
    icon: Users,
    title: "Respect & Dignity",
    description: "We treat every user with absolute respect regardless of caste, creed, gender, or status. Discrimination of any form is strictly prohibited on the platform."
  },
  {
    icon: Search,
    title: "Radical Transparency",
    description: "Honesty in impact reporting and financial disclosure is non-negotiable. Misrepresentation of data undermines the trust of the entire ecosystem."
  },
  {
    icon: Lock,
    title: "Data Privacy & Consent",
    description: "User data belongs to the user. We adhere strictly to DPDP Act 2023 guidelines. Data is shared only with explicit, informed consent."
  },
  {
    icon: Ban,
    title: "Zero Tolerance",
    description: "Fraud, harassment, hate speech, or exploitation of beneficiaries will result in immediate suspension and reporting to relevant authorities."
  }
];

const detailedGuidelines = [
  {
    title: "For NGOs & Civil Society Organizations",
    icon: Building2,
    items: [
      { label: "Financial Integrity", description: "Funds raised via the platform must be used solely for stated purposes." },
      { label: "Impact Reporting", description: "Progress updates must be accurate and verifiable. Falsifying beneficiary numbers is a violation." },
      { label: "Beneficiary Dignity", description: "Images or stories of beneficiaries must preserve their dignity and privacy. No \"poverty porn\" imagery." }
    ]
  },
  {
    title: "For Donors & Funders",
    icon: Heart,
    items: [
      { label: "Due Diligence", description: "Conduct proper research before making grants. The platform provides data, not endorsements." },
      { label: "No Quid Pro Quo", description: "Donations must not be tied to inappropriate conditions or personal benefits." },
      { label: "Transparent Giving", description: "Large donations may require disclosure to maintain ecosystem integrity." }
    ]
  },
  {
    title: "For Talent & Volunteers",
    icon: Users,
    items: [
      { label: "Commitment", description: "Honor time and skill commitments made to organizations." },
      { label: "Professionalism", description: "Conduct yourself professionally in all interactions." },
      { label: "Confidentiality", description: "Respect sensitive information shared during your engagement." }
    ]
  },
  {
    title: "For Developers & API Partners",
    icon: Code,
    items: [
      { label: "Responsible Use", description: "APIs must only be used for stated purposes aligned with platform values." },
      { label: "Security", description: "Report vulnerabilities responsibly. No exploitation of discovered issues." },
      { label: "Data Handling", description: "Data accessed via APIs must be protected according to our data standards." }
    ]
  }
];

const enforcementSteps = [
  { icon: AlertTriangle, title: "1. Warning", description: "Minor violations result in a formal warning logged in the system.", color: "text-amber-500" },
  { icon: XCircle, title: "2. Suspension", description: "Repeated offenses or serious breaches lead to temporary account freeze.", color: "text-destructive" },
  { icon: Ban, title: "3. Permanent Ban", description: "Fraud, abuse, or legal violations result in permanent removal.", color: "text-destructive" }
];

export default function CodeOfConductPage() {
  return (
    <Layout>
      <div className="bg-background">
        {/* Breadcrumb */}
        <div className="container-wide py-4">
          <nav className="flex items-center gap-2 text-sm text-text-secondary">
            <Link to="/" className="hover:text-text-primary">Home</Link>
            <span>/</span>
            <Link to="/governance" className="hover:text-text-primary">Governance</Link>
            <span>/</span>
            <span className="text-primary">Code of Conduct</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="container-wide pb-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="badge-official">
                  <Shield className="h-3 w-3" />
                  PUBLIC POLICY
                </span>
                <span className="text-sm text-text-secondary">Updated Jan 2025</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Platform Code of Conduct
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl mb-4">
                Purpose: Establishing behavioral expectations for all platform participants to 
                ensure a safe, transparent, and dignified digital space for India's social sector.
              </p>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Shield className="h-4 w-4" />
                <span>Version 2.0 (Official)</span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
              <Download className="h-4 w-4" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Core Principles */}
        <div className="container-wide py-12">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Core Principles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {corePrinciples.map((principle) => (
              <div key={principle.title} className="card-elevated p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <principle.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{principle.title}</h3>
                    <p className="text-sm text-text-secondary">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Guidelines */}
        <div className="container-wide py-12 bg-muted/30">
          <h2 className="text-2xl font-semibold mb-6">Detailed Guidelines</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {detailedGuidelines.map((guideline, index) => (
              <AccordionItem key={guideline.title} value={`item-${index}`} className="card-elevated border-none">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <guideline.icon className="h-5 w-5 text-primary" />
                    <span className="font-semibold">{guideline.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-sm text-text-secondary mb-4">
                    As the backbone of this platform, {guideline.title.toLowerCase().replace('for ', '')} are held to the highest standard of integrity.
                  </p>
                  <ul className="space-y-3">
                    {guideline.items.map((item) => (
                      <li key={item.label} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div>
                          <span className="font-medium">{item.label}:</span>{" "}
                          <span className="text-text-secondary">{item.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Enforcement Section */}
        <div className="container-wide py-12">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">How We Enforce This Code</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {enforcementSteps.map((step) => (
                  <div key={step.title} className="text-center">
                    <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${step.color === 'text-amber-500' ? 'bg-amber-50' : 'bg-destructive/10'}`}>
                      <step.icon className={`h-6 w-6 ${step.color}`} />
                    </div>
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-text-secondary">{step.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="card-elevated p-4 bg-success/5 border-l-4 border-success">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Transparency Report</h4>
                    <p className="text-sm text-text-secondary">
                      To date, 99.8% of users maintain good standing. See our{" "}
                      <Link to="/governance#reports" className="text-primary hover:underline">Quarterly Transparency Report</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Report a Violation */}
            <div className="card-elevated p-6 border-l-4 border-primary h-fit">
              <h3 className="font-semibold text-lg mb-4">See something wrong?</h3>
              <p className="text-sm text-text-secondary mb-6">
                If you witness a violation of this code, please report it. Your report is 
                confidential and outcomes are shared only with involved parties.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Lock className="h-4 w-4 text-primary" />
                  <span>Confidential Reporting</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Reviewed within 48 hrs</span>
                </div>
              </div>
              <Link 
                to="/grievance" 
                className="block w-full text-center px-4 py-3 bg-destructive text-destructive-foreground rounded-lg font-medium hover:bg-destructive/90 transition-colors"
              >
                Report a Violation
              </Link>
              <Link to="/grievance" className="block text-center text-sm text-text-secondary hover:text-primary mt-3">
                Read Appeals Process
              </Link>
            </div>
          </div>
        </div>

        {/* Appeal Banner */}
        <div className="container-wide py-8">
          <div className="card-elevated p-6 flex items-center justify-between flex-wrap gap-4 bg-muted/50">
            <div className="flex items-center gap-4">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold">Unfairly suspended?</h3>
                <p className="text-sm text-text-secondary">
                  You can appeal any moderation decision within 30 days via our Grievance Redressal system.
                </p>
              </div>
            </div>
            <Link to="/grievance" className="flex items-center gap-2 text-primary hover:underline font-medium">
              Go to Grievance Redressal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
