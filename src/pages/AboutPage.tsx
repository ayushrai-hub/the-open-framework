import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Shield, 
  Users, 
  Calendar, 
  Globe,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const timeline = [
  {
    date: "DEC 2023",
    title: "National Scale Rollout",
    description: "Infrastructure reaches 25 states with 10k+ nodes active.",
    active: true,
  },
  {
    date: "AUG 2022",
    title: "Federated Protocol v1.0",
    description: "Open standards published for public review.",
    active: false,
  },
  {
    date: "JAN 2021",
    title: "Public Trust Charter",
    description: "Signed by 50 founding civil society organizations.",
    active: false,
  },
  {
    date: "2020",
    title: "Concept Inception",
    description: "Initial research and ecosystem mapping began.",
    active: false,
  },
];

const leadership = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Executive Director",
    disclosure: "No external board seats held. Full-time appointment. No equity in vendor partners.",
  },
  {
    name: "Priya Desai",
    role: "Chairperson, Ethics Comm.",
    disclosure: "Recused from all decisions regarding funding allocation to associated NGOs.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-card">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="badge-official mb-4">
                <Shield className="h-3 w-3" />
                Official Public Utility
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Building India's Civil Society Digital Backbone
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                A neutral, federated infrastructure ensuring trust, endurance, and accessibility for the entire ecosystem. 
                We operate as a public good, not a product.
              </p>
            </div>
            <div className="bg-primary/5 rounded-lg p-8 border border-border">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <span className="text-sm text-text-secondary">Federated Architecture Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mandate & Timeline */}
      <section className="section-alt">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Our Mandate */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Our Mandate</h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  We exist to provide a neutral and trusted digital foundation. Our mission is to enable civil society 
                  organizations to collaborate effectively through open standards, ensuring data sovereignty and 
                  institutional longevity. Unlike private platforms, our incentives are aligned solely with the resilience 
                  of the ecosystem.
                </p>
                <p>
                  Operating under the Trust-First Principle, all code is open-source, and governance is distributed 
                  across a multi-stakeholder board.
                </p>
              </div>

              {/* Institutional Governance */}
              <h3 className="text-xl font-semibold mt-10 mb-6">Institutional Governance</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {leadership.map((person) => (
                  <div key={person.name} className="card-elevated p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-text-primary">{person.name}</div>
                        <div className="text-xs text-link uppercase tracking-wider">{person.role}</div>
                      </div>
                    </div>
                    <div className="text-xs text-text-secondary">
                      <span className="font-medium text-text-primary">Conflict of Interest Disclosure: </span>
                      {person.disclosure}
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/governance" className="link-arrow mt-6 inline-flex">
                View Full Board & Disclosures
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Organizational History */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Organizational History</h2>
              <div className="relative pl-6">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pb-8 last:pb-0">
                    {index !== timeline.length - 1 && (
                      <div className="timeline-line" />
                    )}
                    <div className={`timeline-dot absolute left-0 top-1.5 -translate-x-1/2 ${item.active ? 'bg-accent' : ''}`} />
                    <div className="pl-6">
                      <div className={`text-xs font-medium uppercase tracking-wider mb-1 ${item.active ? 'text-link' : 'text-text-secondary'}`}>
                        {item.date}
                      </div>
                      <div className="font-medium text-text-primary">{item.title}</div>
                      <div className="text-sm text-text-secondary mt-1">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* India-Scale Accessibility */}
      <section className="bg-card">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">India-Scale Accessibility</h2>
              <p className="text-text-secondary mb-8">
                Our federated nodes ensure low-latency access even in low-bandwidth regions. We design for the 
                "next billion users," prioritizing text-first interfaces and offline capabilities.
              </p>
              <div className="flex gap-6">
                <div className="p-4 border border-border rounded-lg">
                  <div className="text-3xl font-bold text-text-primary">28</div>
                  <div className="text-sm text-text-secondary">States Covered</div>
                </div>
                <div className="p-4 border border-border rounded-lg">
                  <div className="text-3xl font-bold text-text-primary">12</div>
                  <div className="text-sm text-text-secondary">Languages</div>
                </div>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center text-text-secondary">
                <Globe className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <span className="text-sm">India Coverage Map</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="section-alt">
        <div className="container-wide section-padding">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Mail className="h-5 w-5 text-link" />
            Contact & Support
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card-elevated p-6">
              <h3 className="font-semibold mb-6">Operational Inquiries</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-text-secondary mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-text-secondary">General Secretariat</div>
                    <a href="mailto:secretariat@dpi.org.in" className="text-link">secretariat@dpi.org.in</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-text-secondary mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-text-secondary">Technical Support</div>
                    <a href="mailto:support@dpi.org.in" className="text-link">support@dpi.org.in</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-text-secondary mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-text-secondary">Toll Free (9AM - 6PM IST)</div>
                    <span className="text-text-primary">1800-111-9999</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg flex items-start gap-3">
                <Calendar className="h-5 w-5 text-accent mt-0.5" />
                <div className="text-sm">
                  <span className="font-medium text-text-primary">SLA Commitment: </span>
                  <span className="text-text-secondary">We aim to respond to all inquiries within 48 business hours.</span>
                </div>
              </div>
            </div>

            <div className="card-elevated p-6">
              <div className="bg-secondary/50 rounded-lg h-48 mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Registered Office</h3>
              <p className="text-sm text-text-secondary mb-4">
                DPI Foundation, 4th Floor, Institutional Area<br />
                Lodhi Road, New Delhi<br />
                Delhi 110003, India
              </p>
              <a href="#" className="link-arrow text-sm">
                Get Directions
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
