import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, ChevronRight, Building2, Users, User, Shield, CreditCard, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqCategories = [
  { id: "all", label: "All Questions", icon: FileText },
  { id: "ngo", label: "For NGOs", icon: Building2 },
  { id: "donor", label: "For Donors", icon: Users },
  { id: "talent", label: "For Volunteers", icon: User },
  { id: "account", label: "Account & Security", icon: Shield },
  { id: "platform", label: "Platform & General", icon: CreditCard },
];

const faqs: FAQ[] = [
  // NGO FAQs
  {
    id: "ngo-registration",
    question: "How do I register my NGO on the platform?",
    answer: "To register your NGO, click on 'Join Us' in the header and select 'Register as NGO'. You'll need to provide your organization's legal details including registration number, PAN, and FCRA status if applicable. The verification process typically takes 3-5 business days.",
    category: "ngo",
  },
  {
    id: "ngo-compliance",
    question: "What compliance documents are required?",
    answer: "Required documents include: Registration Certificate (Society/Trust/Section 8), PAN Card, 12A/80G Certificates (if applicable), FCRA Registration (for foreign funding), Latest Annual Reports, and Audited Financial Statements. All documents should be valid and current.",
    category: "ngo",
  },
  {
    id: "ngo-profile",
    question: "How can I update my NGO's profile information?",
    answer: "Navigate to your NGO Dashboard and click on 'Profile'. From there, you can update organization details, add team members, upload photos, and update your mission statement. Changes to legal information may require re-verification.",
    category: "ngo",
  },
  {
    id: "ngo-verification",
    question: "How long does NGO verification take?",
    answer: "Standard verification takes 3-5 business days. Express verification (for urgent grant applications) is available and takes 24-48 hours. You'll receive email updates at each stage of the verification process.",
    category: "ngo",
  },
  {
    id: "ngo-funding",
    question: "How do I apply for grants through the platform?",
    answer: "Once verified, browse available grants in your dashboard under 'Funding Opportunities'. Click on a grant to view requirements and eligibility. Submit your application with the required documents and track its status in real-time.",
    category: "ngo",
  },
  // Donor FAQs
  {
    id: "donor-grants",
    question: "How do I create a grant opportunity?",
    answer: "Navigate to your Donor Dashboard and click 'Create Grant'. Define the grant parameters including focus areas, geography, funding amount, eligibility criteria, and application deadline. You can save as draft or publish immediately.",
    category: "donor",
  },
  {
    id: "donor-diligence",
    question: "What due diligence information is available?",
    answer: "Each NGO profile includes verification status, compliance history, financial reports, impact metrics, and references. Premium donors get access to detailed background checks, site visit reports, and comparative analytics.",
    category: "donor",
  },
  {
    id: "donor-reports",
    question: "How can I track the impact of my grants?",
    answer: "Your dashboard includes an 'Impact Reports' section where you can view progress reports from grantees, financial utilization certificates, photos and media, and aggregated impact metrics across all your grants.",
    category: "donor",
  },
  {
    id: "donor-discovery",
    question: "How do I find NGOs that match my interests?",
    answer: "Use the Discovery feature in your dashboard. Filter by cause area, geography, budget size, and impact metrics. Save searches and get notified when new matching organizations join the platform.",
    category: "donor",
  },
  // Talent FAQs
  {
    id: "talent-opportunities",
    question: "How do I find volunteer opportunities?",
    answer: "Browse the 'Opportunities' section in your Talent Dashboard. Filter by skills, location, time commitment, and cause area. Click on any opportunity to see details and apply directly through the platform.",
    category: "talent",
  },
  {
    id: "talent-applications",
    question: "How do I track my volunteer applications?",
    answer: "All your applications are listed in the 'Applications' tab of your dashboard. You can see the status (Pending, Under Review, Accepted, Rejected), communicate with organizations, and manage your commitments.",
    category: "talent",
  },
  {
    id: "talent-verification",
    question: "Do I need to verify my skills or credentials?",
    answer: "While not mandatory, verified skills and credentials increase your visibility to organizations. You can upload certificates, link professional profiles, and request endorsements from previous volunteer engagements.",
    category: "talent",
  },
  // Account FAQs
  {
    id: "account-login",
    question: "I can't log in to my account. What should I do?",
    answer: "First, try resetting your password using the 'Forgot Password' link. If you're still having issues, ensure you're using the correct email address. Contact support@indiadpi.org if problems persist.",
    category: "account",
  },
  {
    id: "account-password",
    question: "How do I reset my password?",
    answer: "Click 'Forgot Password' on the login page and enter your registered email. You'll receive a reset link valid for 24 hours. For security, we recommend using a strong, unique password.",
    category: "account",
  },
  {
    id: "account-2fa",
    question: "How do I enable two-factor authentication?",
    answer: "Go to Account Settings > Security > Two-Factor Authentication. You can choose between SMS, authenticator app, or email-based verification. We strongly recommend enabling 2FA for all accounts.",
    category: "account",
  },
  {
    id: "account-delete",
    question: "How do I delete my account?",
    answer: "Navigate to Account Settings > Privacy > Delete Account. Note that account deletion is irreversible. For organizations, you must first transfer ownership or close all active grants/applications.",
    category: "account",
  },
  // Platform FAQs
  {
    id: "platform-cost",
    question: "Is the platform free to use?",
    answer: "Basic platform access is free for all users. Premium features for donors and advanced compliance tools for NGOs are available through subscription plans. Volunteers always have free access.",
    category: "platform",
  },
  {
    id: "platform-data",
    question: "How is my data protected?",
    answer: "We follow industry-standard security practices including end-to-end encryption, regular security audits, and compliance with data protection regulations. See our Privacy Policy for detailed information.",
    category: "platform",
  },
  {
    id: "platform-support",
    question: "How can I contact support?",
    answer: "Reach us via: Toll-free helpline (1800-XXX-XXXX, Mon-Sat 9AM-6PM), Email (support@indiadpi.org), or the Contact form. Standard response time is 24-48 hours.",
    category: "platform",
  },
];

export default function FAQPage() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch = 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <Layout>
      <Helmet>
        <title>Frequently Asked Questions | India DPI</title>
        <meta name="description" content="Find answers to common questions about India DPI platform for NGOs, donors, and volunteers." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 border-b border-border">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-text-secondary mb-4">
              <Link to="/support" className="hover:text-primary">Support</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-text-primary">FAQ</span>
            </nav>
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Quick answers to common questions
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-base rounded-xl border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-2">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-text-secondary hover:bg-muted/80"
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="container-wide max-w-3xl">
          {filteredFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-left text-text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-secondary">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-16">
              <p className="text-text-secondary mb-4">
                No questions found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="text-link hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container-wide text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Still have questions?
          </h2>
          <p className="text-text-secondary mb-8">
            Our support team is here to help
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-card text-text-primary rounded-lg hover:bg-muted transition-colors"
            >
              Back to Support Center
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
