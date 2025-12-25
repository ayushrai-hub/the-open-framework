import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  Send,
  MessageSquare,
  HelpCircle,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const contactMethods = [
  {
    icon: MessageSquare,
    title: "General Inquiries",
    email: "contact@dpi.org.in",
    description: "For partnership, media, and general questions.",
  },
  {
    icon: HelpCircle,
    title: "Technical Support",
    email: "support@dpi.org.in",
    description: "For API issues, integration help, and bug reports.",
  },
  {
    icon: FileText,
    title: "Compliance & Legal",
    email: "legal@dpi.org.in",
    description: "For RTI requests, grievances, and regulatory matters.",
  },
];

const offices = [
  {
    city: "New Delhi",
    type: "Registered Office",
    address: "DPI Foundation, 4th Floor\nInstitutional Area, Lodhi Road\nNew Delhi, Delhi 110003",
    phone: "+91 11 2345 6789",
  },
  {
    city: "Bangalore",
    type: "Technology Hub",
    address: "WeWork Galaxy\nResidency Road\nBangalore, Karnataka 560025",
    phone: "+91 80 1234 5678",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-card border-b border-border">
        <div className="container-wide section-padding">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-text-secondary">
              Have questions about the platform, want to partner with us, or need technical support? 
              We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-alt">
        <div className="container-wide section-padding">
          <h2 className="text-2xl font-semibold mb-8">Contact Channels</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method) => (
              <div key={method.title} className="card-elevated p-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <method.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{method.title}</h3>
                <p className="text-sm text-text-secondary mb-3">{method.description}</p>
                <a href={`mailto:${method.email}`} className="text-sm text-link">
                  {method.email}
                </a>
              </div>
            ))}
          </div>

          {/* Toll Free */}
          <div className="card-elevated p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="font-semibold">Toll-Free Helpline</h3>
                <p className="text-sm text-text-secondary">For immediate assistance in Hindi and English</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold">1800-111-9999</span>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Clock className="h-4 w-4" />
                <span>Mon-Sat, 9AM - 6PM IST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="bg-card">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full h-11 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full h-11 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Organization (Optional)</label>
                  <input
                    type="text"
                    className="w-full h-11 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Subject *</label>
                  <select
                    required
                    className="w-full h-11 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="">Select a topic...</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="technical">Technical Support</option>
                    <option value="media">Media & Press</option>
                    <option value="grievance">Grievance / Complaint</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <p className="text-xs text-text-secondary">
                  We aim to respond within 2 business days. For urgent matters, please use our toll-free helpline.
                </p>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office) => (
                  <div key={office.city} className="card-elevated p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{office.city}</h3>
                          <span className="text-xs px-2 py-0.5 rounded bg-muted text-text-secondary">
                            {office.type}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary whitespace-pre-line mb-3">
                          {office.address}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                          <Phone className="h-4 w-4" />
                          <span>{office.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-6 h-48 bg-secondary/50 rounded-lg flex items-center justify-center">
                <span className="text-sm text-text-secondary">Interactive Map</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Notice */}
      <section className="border-t border-border">
        <div className="container-wide py-8">
          <div className="flex items-center justify-center gap-3 text-sm text-text-secondary">
            <Clock className="h-4 w-4" />
            <span>
              <strong className="text-text-primary">SLA Commitment:</strong> All inquiries receive acknowledgement 
              within 24 hours and resolution within 5 business days.
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
