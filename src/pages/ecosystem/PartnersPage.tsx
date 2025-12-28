import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Globe, 
  Handshake, 
  ChevronRight,
  ExternalLink,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Partner {
  name: string;
  type: "government" | "corporate" | "foundation" | "academic" | "international";
  description: string;
  partnershipType: string;
  logo?: string;
  website?: string;
}

const partnerCategories = [
  { id: "government", label: "Government Partners", icon: Building2 },
  { id: "foundation", label: "Foundations", icon: Handshake },
  { id: "corporate", label: "Corporate Partners", icon: Building2 },
  { id: "academic", label: "Academic Institutions", icon: FileText },
  { id: "international", label: "International Organizations", icon: Globe },
];

const partners: Partner[] = [
  // Government
  {
    name: "NITI Aayog",
    type: "government",
    description: "Strategic advisory and policy alignment for civil society digital infrastructure",
    partnershipType: "Strategic Advisory",
  },
  {
    name: "Ministry of Electronics & IT",
    type: "government",
    description: "Technical standards and interoperability frameworks",
    partnershipType: "Technical Standards",
  },
  {
    name: "Ministry of Corporate Affairs",
    type: "government",
    description: "Integration with MCA21 for company and NGO data verification",
    partnershipType: "Data Integration",
  },
  // Foundations
  {
    name: "Rohini Nilekani Philanthropies",
    type: "foundation",
    description: "Founding support for platform development and civil society strengthening",
    partnershipType: "Founding Partner",
  },
  {
    name: "Azim Premji Foundation",
    type: "foundation",
    description: "Capacity building and grassroots organization support",
    partnershipType: "Capacity Building",
  },
  {
    name: "Tata Trusts",
    type: "foundation",
    description: "Rural and underserved community outreach programs",
    partnershipType: "Community Outreach",
  },
  // Corporate
  {
    name: "Infosys Foundation",
    type: "corporate",
    description: "Technology infrastructure and cloud computing support",
    partnershipType: "Technology Partner",
  },
  {
    name: "Wipro Foundation",
    type: "corporate",
    description: "Sustainability and environmental impact tracking integration",
    partnershipType: "Impact Measurement",
  },
  // Academic
  {
    name: "Indian Institute of Management, Bangalore",
    type: "academic",
    description: "Research on civil society effectiveness and impact measurement",
    partnershipType: "Research Partner",
  },
  {
    name: "Ashoka University",
    type: "academic",
    description: "Policy research and governance framework development",
    partnershipType: "Policy Research",
  },
  // International
  {
    name: "Ford Foundation",
    type: "international",
    description: "Global best practices and international standards alignment",
    partnershipType: "Knowledge Partner",
  },
  {
    name: "USAID",
    type: "international",
    description: "Capacity building for transparency and accountability",
    partnershipType: "Development Partner",
  },
];

export default function PartnersPage() {
  const getPartnersByType = (type: string) => 
    partners.filter((p) => p.type === type);

  return (
    <Layout>
      <Helmet>
        <title>Partners & Collaborations | India DPI</title>
        <meta name="description" content="Organizations and institutions partnering with India DPI to strengthen civil society infrastructure." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 border-b border-border">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              Partners & Collaborations
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Building India's civil society infrastructure through strategic partnerships 
              with government, foundations, corporations, and academic institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-16 border-b border-border">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Our Partnership Philosophy
            </h2>
            <div className="prose prose-lg text-text-secondary">
              <p>
                India DPI operates as neutral, non-profit digital public infrastructure. 
                Our partnerships are guided by principles of transparency, mutual benefit, 
                and alignment with our mission to strengthen India's civil society ecosystem.
              </p>
              <p>
                All partnership arrangements are disclosed publicly. We do not accept 
                partnerships that could compromise our neutrality or create conflicts of 
                interest with our core mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-16">
        <div className="container-wide">
          {partnerCategories.map((category) => {
            const categoryPartners = getPartnersByType(category.id);
            if (categoryPartners.length === 0) return null;
            
            return (
              <div key={category.id} className="mb-16 last:mb-0">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary">
                    {category.label}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryPartners.map((partner) => (
                    <div
                      key={partner.name}
                      className="p-6 rounded-xl border border-border bg-card"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-text-secondary" />
                        </div>
                        {partner.website && (
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-primary"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <h3 className="font-semibold text-lg text-text-primary mb-1">
                        {partner.name}
                      </h3>
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded mb-3">
                        {partner.partnershipType}
                      </span>
                      <p className="text-sm text-text-secondary">
                        {partner.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Disclosure Section */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              Partnership Disclosures
            </h2>
            <div className="space-y-4 text-text-secondary">
              <p>
                In accordance with our transparency commitments, we disclose the following:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All financial contributions from partners are reported in our annual reports</li>
                <li>No partner has preferential access to platform data or features</li>
                <li>Partnership agreements do not grant editorial or operational control</li>
                <li>Conflicts of interest are reviewed by our independent Ethics Committee</li>
              </ul>
              <p>
                For detailed partnership agreements and financial disclosures, please refer 
                to our{" "}
                <Link to="/governance" className="text-link hover:underline">
                  Governance & Transparency
                </Link>{" "}
                section.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 border-t border-border">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Become a Partner
            </h2>
            <p className="text-text-secondary mb-8">
              We welcome partnerships with organizations aligned with our mission to 
              strengthen India's civil society. To discuss potential collaboration, 
              please reach out to our partnerships team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button>
                  Contact Partnerships Team
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link to="/governance">
                <Button variant="outline">
                  View Governance Framework
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
