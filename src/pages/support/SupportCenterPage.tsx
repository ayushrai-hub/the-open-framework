import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  HelpCircle, 
  FileText, 
  MessageSquare, 
  AlertTriangle, 
  Building2, 
  Users, 
  User, 
  ChevronRight,
  Phone,
  Mail,
  Clock,
  Search,
  BookOpen,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const supportCategories = [
  {
    icon: Building2,
    title: "NGO Support",
    description: "Registration, compliance, profile management, and verification issues",
    links: [
      { label: "Registration Help", href: "/support/faq#ngo-registration" },
      { label: "Compliance Questions", href: "/support/faq#ngo-compliance" },
      { label: "Profile Updates", href: "/support/faq#ngo-profile" },
    ],
  },
  {
    icon: Users,
    title: "Donor Support",
    description: "Grant-making, discovery, due diligence, and reporting queries",
    links: [
      { label: "Grant Process", href: "/support/faq#donor-grants" },
      { label: "Due Diligence", href: "/support/faq#donor-diligence" },
      { label: "Impact Reports", href: "/support/faq#donor-reports" },
    ],
  },
  {
    icon: User,
    title: "Talent Support",
    description: "Volunteer opportunities, applications, and skill matching",
    links: [
      { label: "Finding Opportunities", href: "/support/faq#talent-opportunities" },
      { label: "Application Process", href: "/support/faq#talent-applications" },
      { label: "Profile Verification", href: "/support/faq#talent-verification" },
    ],
  },
  {
    icon: Shield,
    title: "Account & Security",
    description: "Login issues, password recovery, and account security",
    links: [
      { label: "Login Problems", href: "/support/faq#account-login" },
      { label: "Password Reset", href: "/support/faq#account-password" },
      { label: "Two-Factor Auth", href: "/support/faq#account-2fa" },
    ],
  },
];

const quickActions = [
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Find answers to common questions",
    href: "/support/faq",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MessageSquare,
    title: "Contact Us",
    description: "Get in touch with our team",
    href: "/contact",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: AlertTriangle,
    title: "File Grievance",
    description: "Report issues or concerns",
    href: "/governance/grievance",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Browse guides and references",
    href: "/documentation",
    color: "bg-blue-100 text-blue-600",
  },
];

export default function SupportCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/support/faq?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Support Center | India DPI</title>
        <meta name="description" content="Get help with India DPI platform. Find answers, contact support, or file a grievance." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 border-b border-border">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              How can we help you?
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Search our knowledge base or browse categories below
            </p>
            
            <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
              <Input
                type="text"
                placeholder="Search for help articles, guides, FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-base rounded-xl border-border"
              />
              <Button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2">
                Search
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 border-b border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.title}
                to={action.href}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors group"
              >
                <div className={`p-3 rounded-lg ${action.color}`}>
                  <action.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    {action.description}
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-text-secondary group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-text-primary">
                      {category.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {category.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-sm text-link hover:underline flex items-center gap-1"
                      >
                        <ChevronRight className="h-3 w-3" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
              Need More Help?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Toll-Free Helpline</h3>
                <p className="text-lg font-medium text-primary">1800-XXX-XXXX</p>
                <p className="text-sm text-text-secondary mt-1">Mon-Sat, 9 AM - 6 PM IST</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Email Support</h3>
                <a href="mailto:support@indiadpi.org" className="text-lg font-medium text-link hover:underline">
                  support@indiadpi.org
                </a>
                <p className="text-sm text-text-secondary mt-1">Response within 24-48 hours</p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">Response Times</h3>
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">Critical:</strong> 4 hours<br />
                  <strong className="text-text-primary">Standard:</strong> 24-48 hours
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-amber-50 border border-amber-200 text-center">
              <AlertTriangle className="h-6 w-6 text-amber-600 mx-auto mb-2" />
              <p className="text-amber-800">
                For urgent grievances or escalations, please use our{" "}
                <Link to="/governance/grievance" className="font-medium underline">
                  Grievance Redressal Portal
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 border-t border-border">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Additional Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              to="/documentation"
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors"
            >
              <BookOpen className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-text-primary">Documentation</h3>
                <p className="text-sm text-text-secondary">Comprehensive guides</p>
              </div>
            </Link>
            
            <Link
              to="/resources/api"
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors"
            >
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-text-primary">API Reference</h3>
                <p className="text-sm text-text-secondary">Developer docs</p>
              </div>
            </Link>
            
            <Link
              to="/community"
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:bg-muted/50 transition-colors"
            >
              <Users className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold text-text-primary">Community</h3>
                <p className="text-sm text-text-secondary">Forums & discussions</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
