import { Link } from "react-router-dom";
import { 
  Download,
  Shield,
  CheckCircle2,
  Lock,
  Eye,
  Trash2,
  Edit,
  Calendar,
  ExternalLink,
  Mail,
  MapPin,
  Clock
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const tocItems = [
  { id: "summary", label: "Plain Language Summary" },
  { id: "collect", label: "1. Information We Collect" },
  { id: "use", label: "2. How We Use Data" },
  { id: "sharing", label: "3. Sharing & Disclosure" },
  { id: "rights", label: "4. Your Rights & Controls" },
  { id: "security", label: "5. Data Security" },
  { id: "contact", label: "6. Contact Us" },
];

const dataCategories = [
  { category: "Directly Provided", examples: "Name, Email Address, Phone Number, Organization Registration Details (PAN/TAN), Profile Information." },
  { category: "Automatically Collected", examples: "IP Address, Browser Type, Device Information, Login Timestamps (for security audits)." },
  { category: "Verification Data", examples: "Documents uploaded for KYO (Know Your Organization) verification processes." },
];

const securityMeasures = [
  { icon: Lock, title: "Encryption", description: "AES-256 at rest" },
  { icon: Shield, title: "Audits", description: "Regular 3rd Party" },
  { icon: Eye, title: "Access Control", description: "Role-based Access" },
  { icon: CheckCircle2, title: "Compliance", description: "ISO 27001" },
];

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="bg-background">
        {/* Header Banner */}
        <div className="bg-primary text-primary-foreground py-3">
          <div className="container-wide flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <span className="text-xs px-2 py-1 bg-primary-foreground/20 rounded">Legal Document</span>
              <span className="text-sm">Public Access</span>
            </div>
          </div>
        </div>

        <div className="container-wide py-8">
          <div className="grid lg:grid-cols-[250px_1fr] gap-8">
            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <h4 className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-4">
                  TABLE OF CONTENTS
                </h4>
                <nav className="space-y-1">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block px-3 py-2 text-sm rounded-md transition-colors text-text-secondary hover:text-text-primary hover:bg-muted"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="min-w-0">
              {/* Hero */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-lg text-text-secondary mb-6 max-w-3xl">
                  This document explains how the DPI Portal collects, uses, stores, and protects your 
                  personal data. We are committed to radical transparency and user sovereignty.
                </p>
                <div className="flex items-center gap-6 flex-wrap text-sm text-text-secondary">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Effective January 1, 2025
                  </span>
                  <span>Version 3.0</span>
                  <a href="#" className="text-primary hover:underline">View Previous Versions</a>
                </div>
                <div className="mt-4">
                  <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </button>
                </div>
              </div>

              {/* Plain Language Summary */}
              <section id="summary" className="mb-12">
                <div className="card-elevated p-6 bg-primary/5 border-l-4 border-primary">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="h-5 w-5 text-primary" />
                    <h2 className="font-semibold text-lg">In Short</h2>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                      <span>We only collect data you explicitly give us or that is essential for service delivery.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                      <span>We never sell your data to third parties.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                      <span>You control who sees your data and can request deletion at any time.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* 1. Information We Collect */}
              <section id="collect" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="text-text-secondary mb-6">
                  We collect information to provide better services to all our users. The specific data collected 
                  depends on how you interact with the DPI Portal.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-xs font-medium text-text-secondary uppercase">Data Category</th>
                        <th className="text-left py-3 px-4 text-xs font-medium text-text-secondary uppercase">Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataCategories.map((item) => (
                        <tr key={item.category} className="border-b border-border">
                          <td className="py-4 px-4 font-medium">{item.category}</td>
                          <td className="py-4 px-4 text-text-secondary">{item.examples}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 2. How We Use Your Information */}
              <section id="use" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="text-text-secondary mb-6">
                  We use the information we collect for the following specific purposes:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <span className="font-medium">Identity Verification:</span>{" "}
                      <span className="text-text-secondary">To verify the legitimacy of NGO/CSO entities participating in the ecosystem.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                    <div>
                      <span className="font-medium">Service Delivery:</span>{" "}
                      <span className="text-text-secondary">To enable access to grants, partnerships, and digital tools provided through the portal.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2" />
                    <div>
                      <span className="font-medium">Security & Fraud Prevention:</span>{" "}
                      <span className="text-text-secondary">To detect and prevent unauthorized access or abuse of services.</span>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-destructive/5 border-l-4 border-destructive rounded-r-lg">
                  <h4 className="font-semibold text-destructive mb-1">We Do Not Sell Data</h4>
                  <p className="text-sm text-text-secondary">
                    We engage in no data trading. Your information is never sold to advertisers or third-party data brokers.
                  </p>
                </div>
              </section>

              {/* 3. Data Sharing & Disclosure */}
              <section id="sharing" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">3. Data Sharing & Disclosure</h2>
                <p className="text-text-secondary mb-6">
                  We may share information in the following limited circumstances:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card-elevated p-6">
                    <h3 className="font-semibold mb-3">With Consent</h3>
                    <p className="text-sm text-text-secondary">
                      We share personal information outside of the DPI Portal when we have your explicit consent to do so 
                      (e.g., applying for a specific grant).
                    </p>
                  </div>
                  <div className="card-elevated p-6">
                    <h3 className="font-semibold mb-3">For Legal Reasons</h3>
                    <p className="text-sm text-text-secondary">
                      We will share personal information with government agencies if we have a good-faith belief that access, 
                      use, preservation, or disclosure is reasonably necessary to meet applicable laws.
                    </p>
                  </div>
                </div>
              </section>

              {/* 4. Your Rights & Controls */}
              <section id="rights" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">4. Your Rights & Controls</h2>
                <p className="text-text-secondary mb-6">
                  Under the Digital Personal Data Protection Act (DPDP), you have the following rights regarding your data:
                </p>
                <div className="space-y-4">
                  <div className="card-elevated p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Eye className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Right to Access</h4>
                        <p className="text-sm text-text-secondary">You can request a copy of all personal data we hold about you.</p>
                      </div>
                    </div>
                    <a href="#" className="text-sm text-primary hover:underline">Request</a>
                  </div>
                  <div className="card-elevated p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Edit className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Right to Correction</h4>
                        <p className="text-sm text-text-secondary">You can update inaccurate or incomplete information.</p>
                      </div>
                    </div>
                    <Link to="/profile/edit" className="text-sm text-primary hover:underline">Edit Profile</Link>
                  </div>
                  <div className="card-elevated p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Trash2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Right to Erasure</h4>
                        <p className="text-sm text-text-secondary">You can ask us to delete your personal data ("Right to be Forgotten").</p>
                      </div>
                    </div>
                    <a href="#" className="text-sm text-destructive hover:underline">Delete</a>
                  </div>
                </div>
              </section>

              {/* 5. Data Security */}
              <section id="security" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                <p className="text-text-secondary mb-6">
                  We work hard to protect the DPI Portal and our users from unauthorized access, alteration, disclosure, or 
                  destruction of information we hold.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {securityMeasures.map((measure) => (
                    <div key={measure.title} className="card-elevated p-6 text-center">
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mx-auto mb-3">
                        <measure.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-medium mb-1">{measure.title}</h4>
                      <p className="text-xs text-text-secondary">{measure.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. Contact Us */}
              <section id="contact" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
                <p className="text-text-secondary mb-6">
                  If you have questions about this Policy or our data practices, or if you wish to exercise your rights, 
                  please contact our Data Protection Officer (DPO).
                </p>
                <div className="card-elevated p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs text-text-secondary uppercase tracking-wider mb-2">GRIEVANCE OFFICER</p>
                      <p className="font-semibold">Mr. Rajesh Kumar</p>
                      <p className="text-sm text-text-secondary">Chief Data Officer</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="h-4 w-4 text-primary" />
                        <a href="mailto:grievance@dpi-portal.org.in" className="text-primary hover:underline">
                          grievance@dpi-portal.org.in
                        </a>
                      </div>
                      <div className="flex items-start gap-3 text-sm">
                        <MapPin className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-text-secondary">
                          3rd Floor, Electronics Niketan, 6, CGO Complex, Lodhi Road, New Delhi - 110003
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-text-secondary">Mon - Fri, 9:00 AM - 5:00 PM IST</span>
                      </div>
                    </div>
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
