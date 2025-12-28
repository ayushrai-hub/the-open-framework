import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Download,
  Shield,
  CheckCircle2,
  AlertCircle,
  Ban,
  Scale,
  FileText,
  Calendar,
  ExternalLink,
  Mail,
  MapPin
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const tocItems = [
  { id: "acceptance", label: "Acceptance of Terms", icon: CheckCircle2 },
  { id: "eligibility", label: "Eligibility", icon: Shield },
  { id: "accounts", label: "User Accounts", icon: FileText },
  { id: "permitted", label: "Permitted & Prohibited", icon: Ban },
  { id: "ip", label: "Intellectual Property", icon: Scale },
  { id: "content", label: "Content Ownership", icon: FileText },
  { id: "disclaimers", label: "Disclaimers", icon: AlertCircle },
  { id: "termination", label: "Termination", icon: Ban },
  { id: "disputes", label: "Dispute Resolution", icon: Scale },
  { id: "contact", label: "Contact", icon: Mail },
];

const prohibitedActivities = [
  { icon: Ban, title: "Data Scraping", description: "Use any robot, spider, crawler, scraper, or other automated means or interface not provided by us to access the Platform or to extract data." },
  { icon: AlertCircle, title: "Misrepresentation", description: "Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity." },
  { icon: Ban, title: "Malicious Content", description: "Upload, transmit, or distribute any computer viruses, worms, or any software intended to damage or alter a computer system or data." },
  { icon: AlertCircle, title: "Fraudulent Activity", description: "Engage in any activity that facilitates fraud, money laundering, or terrorist financing." },
];

export default function TermsOfUsePage() {
  const [activeSection, setActiveSection] = useState("acceptance");

  return (
    <Layout>
      <div className="bg-background">
        {/* Header Banner */}
        <div className="bg-primary text-primary-foreground py-3">
          <div className="container-wide flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <span className="text-xs px-2 py-1 bg-primary-foreground/20 rounded">Legal Document</span>
              <span className="text-sm">Binding Agreement</span>
            </div>
          </div>
        </div>

        <div className="container-wide py-8">
          <div className="grid lg:grid-cols-[250px_1fr] gap-8">
            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <h4 className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-4">
                  Table of Contents
                </h4>
                <p className="text-xs text-text-secondary mb-4">Jump to section</p>
                <nav className="space-y-1">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setActiveSection(item.id)}
                      className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                        activeSection === item.id
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
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
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Use</h1>
                    <p className="text-lg text-text-secondary mb-4 max-w-3xl">
                      This agreement governs your use of the India NGO Connect platform. It sets forth your rights, 
                      obligations, and the terms of service usage. Please read carefully before accessing the platform.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Effective: January 1, 2025
                      </span>
                      <span>Version 3.0</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                    <Download className="h-4 w-4" />
                    Download as PDF
                  </button>
                </div>
              </div>

              {/* Version Control Notice */}
              <div className="card-elevated p-4 mb-8 flex items-center justify-between bg-muted/50">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Version Control</p>
                    <p className="text-sm text-text-secondary">
                      This version (3.0) supersedes all previous agreements. Changes reflect new DPI data privacy standards.
                    </p>
                  </div>
                </div>
                <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                  View Archive
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* 01. Acceptance of Terms */}
              <section id="acceptance" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">01. Acceptance of Terms</h2>
                <p className="text-text-secondary mb-4">
                  By accessing, registering, or using the India NGO Connect platform (the "Platform"), you acknowledge 
                  that you have read, understood, and agree to be bound by these Terms of Use ("Terms"). These Terms 
                  constitute a legally binding agreement between you ("User", "you", or "your") and the Platform Operator 
                  ("we", "us", or "our").
                </p>
                <p className="text-text-secondary">
                  If you are entering into these Terms on behalf of a non-governmental organization (NGO), civil society 
                  organization (CSO), or other legal entity, you represent that you have the authority to bind such entity 
                  to these Terms. If you do not agree to these Terms, you must not access or use the Platform.
                </p>
              </section>

              {/* 02. Eligibility */}
              <section id="eligibility" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">02. Eligibility</h2>
                <p className="text-text-secondary mb-4">
                  The Platform is intended solely for use by verified NGOs, CSOs, funding agencies, and authorized 
                  individuals operating within the Indian ecosystem. By using the Platform, you represent and warrant that:
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">You are at least 18 years of age.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">
                      You represent a legitimate organization registered under applicable Indian laws (e.g., Societies 
                      Registration Act, Trust Act, Section 8 Company).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">You have not been previously suspended or removed from the Platform.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">
                      Your registration and use of the Platform is in compliance with all applicable laws and regulations.
                    </span>
                  </li>
                </ul>
              </section>

              {/* 03. User Accounts & Responsibilities */}
              <section id="accounts" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">03. User Accounts & Responsibilities</h2>
                <div className="card-elevated p-4 mb-6 bg-primary/5 border-l-4 border-primary">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Account Security</p>
                      <p className="text-sm text-text-secondary">
                        You are responsible for maintaining the confidentiality of your credentials. We support multi-factor 
                        authentication to enhance security.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">
                  You agree to provide accurate, current, and complete information during the registration process and to 
                  update such information to keep it accurate, current, and complete. You are responsible for all activities 
                  that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
                <p className="text-text-secondary">
                  We reserve the right to disable any user account if we reasonably believe you have failed to comply with 
                  any of the provisions of these Terms.
                </p>
              </section>

              {/* 04. Permitted & Prohibited Uses */}
              <section id="permitted" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">04. Permitted & Prohibited Uses</h2>
                <p className="text-text-secondary mb-6">
                  You agree to use the Platform only for lawful purposes and in accordance with these Terms.
                </p>
                <h3 className="font-semibold text-lg mb-4">Prohibited Activities</h3>
                <p className="text-text-secondary mb-4">You shall not:</p>
                <div className="space-y-4">
                  {prohibitedActivities.map((activity) => (
                    <div key={activity.title} className="flex items-start gap-4 p-4 bg-destructive/5 rounded-lg">
                      <activity.icon className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-destructive">{activity.title}:</p>
                        <p className="text-sm text-text-secondary">{activity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 05. Intellectual Property */}
              <section id="ip" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">05. Intellectual Property</h2>
                <p className="text-text-secondary">
                  The Platform and its entire contents, features, and functionality (including but not limited to all information, 
                  software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are 
                  owned by the Platform Operator, its licensors, or other providers of such material and are protected by 
                  Indian and international copyright, trademark, patent, trade secret, and other intellectual property or 
                  proprietary rights laws.
                </p>
              </section>

              {/* 06. Content Ownership & Licensing */}
              <section id="content" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">06. Content Ownership & Licensing</h2>
                <p className="text-text-secondary mb-4">
                  We claim no ownership over the data or content you submit to the Platform ("User Content"). However, by 
                  uploading User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, 
                  modify, adapt, publish, and display such content solely for the purpose of providing and improving the 
                  Platform services, in accordance with our Privacy Policy.
                </p>
                <p className="text-text-secondary">
                  You represent and warrant that you own or control all rights in and to your User Content and have the right 
                  to grant the license granted above.
                </p>
              </section>

              {/* 07. Disclaimers & Limitation of Liability */}
              <section id="disclaimers" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">07. Disclaimers & Limitation of Liability</h2>
                <div className="card-elevated p-6 bg-amber-50 border-l-4 border-amber-500 mb-6">
                  <h4 className="font-semibold text-amber-800 uppercase mb-2">DISCLAIMER OF WARRANTIES</h4>
                  <p className="text-sm text-amber-900">
                    THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, 
                    EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED OR ERROR-FREE.
                  </p>
                </div>
                <p className="text-text-secondary">
                  To the fullest extent provided by law, in no event will the Platform Operator, its affiliates, or their licensors, 
                  service providers, employees, agents, officers, or directors be liable for damages of any kind, under any 
                  legal theory, arising out of or in connection with your use, or inability to use, the Platform, including any 
                  direct, indirect, special, incidental, consequential, or punitive damages.
                </p>
              </section>

              {/* 08. Termination */}
              <section id="termination" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">08. Termination</h2>
                <p className="text-text-secondary">
                  We may terminate or suspend your account and bar access to the Platform immediately, without prior 
                  notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but 
                  not limited to a breach of the Terms. Upon termination, your right to use the Platform will immediately 
                  cease.
                </p>
              </section>

              {/* 09. Dispute Resolution & Governing Law */}
              <section id="disputes" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">09. Dispute Resolution & Governing Law</h2>
                <p className="text-text-secondary">
                  These Terms shall be governed and construed in accordance with the laws of India, without regard to its 
                  conflict of law provisions. Any dispute arising out of or relating to these Terms or the Platform shall be 
                  resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat 
                  of arbitration shall be New Delhi, India. The language of the arbitration shall be English.
                </p>
              </section>

              {/* 10. Contact Information */}
              <section id="contact" className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
                <p className="text-text-secondary mb-6">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card-elevated p-6">
                    <h4 className="font-medium mb-3">Email Support</h4>
                    <a href="mailto:legal@ngoconnect.in" className="text-primary hover:underline">
                      legal@ngoconnect.in
                    </a>
                  </div>
                  <div className="card-elevated p-6">
                    <h4 className="font-medium mb-3">Registered Office</h4>
                    <p className="text-sm text-text-secondary">
                      DPI Foundation, 4th Floor, Tech Park, Outer Ring Road, Bangalore, KA 560103
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
