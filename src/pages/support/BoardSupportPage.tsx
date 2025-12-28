import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Lock, 
  ChevronRight, 
  AlertTriangle,
  CheckCircle2,
  Mail,
  Phone,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const inquiryTypes = [
  { value: "governance", label: "Governance Matter" },
  { value: "compliance", label: "Compliance Concern" },
  { value: "ethics", label: "Ethics Violation Report" },
  { value: "strategic", label: "Strategic Input" },
  { value: "whistleblower", label: "Whistleblower Report" },
  { value: "other", label: "Other" },
];

export default function BoardSupportPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    subject: "",
    message: "",
    confidential: false,
    attachments: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const referenceId = `BOARD-${Date.now().toString(36).toUpperCase()}`;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Inquiry Submitted",
      description: `Reference ID: ${referenceId}. You will receive a confidential response within 3-5 business days.`,
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <Helmet>
          <title>Inquiry Submitted | Board Support | India DPI</title>
        </Helmet>
        
        <section className="py-24">
          <div className="container-wide max-w-xl">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-emerald-600" />
              </div>
              <h1 className="text-3xl font-bold text-text-primary mb-4">
                Inquiry Submitted Successfully
              </h1>
              <p className="text-text-secondary mb-8">
                Your inquiry has been securely submitted to the Board. You will receive a 
                confidential response within 3-5 business days at the email address provided.
              </p>
              <div className="p-4 rounded-lg bg-muted/50 border border-border mb-8">
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">Confidentiality Notice:</strong> All 
                  communications with the Board are treated with strict confidentiality and 
                  handled only by authorized personnel.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/">
                  <Button>Return to Home</Button>
                </Link>
                <Link to="/governance/board">
                  <Button variant="outline">View Board Members</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>Board Member Support Center | India DPI</title>
        <meta name="description" content="Secure channel for governance inquiries and communications with the India DPI Board of Directors." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 border-b border-border">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-text-secondary mb-4">
              <Link to="/support" className="hover:text-primary">Support</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-text-primary">Board Support</span>
            </nav>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              Board Member Support Center
            </h1>
            <p className="text-lg text-text-secondary">
              Secure channel for governance inquiries and board communications
            </p>
          </div>
        </div>
      </section>

      {/* Confidentiality Notice */}
      <section className="py-8 border-b border-border bg-primary/5">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto flex items-start gap-4 p-4 rounded-lg border border-primary/20">
            <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-text-primary mb-1">Confidentiality Notice</h3>
              <p className="text-sm text-text-secondary">
                All communications submitted through this portal are encrypted and handled with 
                strict confidentiality. Only authorized board members and designated governance 
                officers have access to these inquiries. Your identity will be protected unless 
                disclosure is legally required or you provide explicit consent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Submit an Inquiry
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type *</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Detailed Message *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={8}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please provide detailed information about your inquiry..."
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="confidential"
                      checked={formData.confidential}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, confidential: checked as boolean })
                      }
                    />
                    <div className="space-y-1">
                      <Label htmlFor="confidential" className="text-sm font-medium">
                        Request Enhanced Confidentiality
                      </Label>
                      <p className="text-xs text-text-secondary">
                        Check this if you require additional privacy measures for sensitive matters
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="attachments"
                      checked={formData.attachments}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, attachments: checked as boolean })
                      }
                    />
                    <div className="space-y-1">
                      <Label htmlFor="attachments" className="text-sm font-medium">
                        I have supporting documents to share
                      </Label>
                      <p className="text-xs text-text-secondary">
                        You will receive a secure upload link after submission
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto"
                    disabled={isSubmitting || !formData.inquiryType}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Secure Inquiry"}
                  </Button>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold text-text-primary mb-4">Direct Channels</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-text-primary">Email</p>
                      <a href="mailto:board@indiadpi.org" className="text-sm text-link hover:underline">
                        board@indiadpi.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-text-primary">Governance Hotline</p>
                      <p className="text-sm text-text-secondary">1800-XXX-XXXX (Ext. 100)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-amber-50 border border-amber-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">Whistleblower Protection</h3>
                    <p className="text-sm text-amber-700">
                      If you're reporting misconduct or ethics violations, your identity is 
                      protected under our Whistleblower Policy. You may choose to remain 
                      anonymous.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold text-text-primary mb-4">Related Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/governance/board" className="text-sm text-link hover:underline flex items-center gap-1">
                      <ChevronRight className="h-3 w-3" />
                      Board of Directors
                    </Link>
                  </li>
                  <li>
                    <Link to="/governance/conduct" className="text-sm text-link hover:underline flex items-center gap-1">
                      <ChevronRight className="h-3 w-3" />
                      Code of Conduct
                    </Link>
                  </li>
                  <li>
                    <Link to="/governance/grievance" className="text-sm text-link hover:underline flex items-center gap-1">
                      <ChevronRight className="h-3 w-3" />
                      Grievance Redressal
                    </Link>
                  </li>
                  <li>
                    <Link to="/legal/privacy" className="text-sm text-link hover:underline flex items-center gap-1">
                      <ChevronRight className="h-3 w-3" />
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
