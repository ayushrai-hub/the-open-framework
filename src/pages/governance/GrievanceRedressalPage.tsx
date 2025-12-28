import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Shield,
  Clock,
  FileText,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Send,
  HelpCircle
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
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
import { toast } from "sonner";

const grievanceCategories = [
  { value: "account", label: "Account Issues" },
  { value: "verification", label: "Verification Problems" },
  { value: "fund", label: "Fund Disbursement" },
  { value: "conduct", label: "Code of Conduct Violation" },
  { value: "privacy", label: "Privacy & Data Concerns" },
  { value: "technical", label: "Technical Issues" },
  { value: "other", label: "Other" },
];

const processSteps = [
  {
    step: "1",
    title: "Submit Grievance",
    description: "Fill out the form with details of your concern"
  },
  {
    step: "2",
    title: "Acknowledgment",
    description: "Receive reference ID within 24 hours"
  },
  {
    step: "3",
    title: "Investigation",
    description: "Our team reviews and investigates the issue"
  },
  {
    step: "4",
    title: "Resolution",
    description: "Receive resolution within 15 working days"
  }
];

const timelineExpectations = [
  { category: "Account Issues", timeline: "3-5 business days" },
  { category: "Verification Problems", timeline: "5-7 business days" },
  { category: "Fund Disbursement", timeline: "7-10 business days" },
  { category: "Code of Conduct Violation", timeline: "10-15 business days" },
  { category: "Privacy & Data Concerns", timeline: "5-7 business days" },
];

export default function GrievanceRedressalPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    registrationId: "",
    subject: "",
    description: "",
    attachments: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.category || !formData.subject || !formData.description) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const refId = `GRV-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
    setReferenceId(refId);
    setSubmitted(true);
    setIsSubmitting(false);
    toast.success("Grievance submitted successfully");
  };

  if (submitted) {
    return (
      <Layout>
        <div className="container-wide py-16">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-8 w-8 text-success" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Grievance Submitted Successfully</h1>
            <p className="text-text-secondary mb-6">
              Your grievance has been registered. Please save your reference ID for tracking.
            </p>
            <div className="card-elevated p-6 mb-8">
              <p className="text-sm text-text-secondary mb-2">Your Reference ID</p>
              <p className="text-2xl font-mono font-bold text-primary">{referenceId}</p>
              <p className="text-sm text-text-secondary mt-4">
                You will receive an acknowledgment email within 24 hours at {formData.email}
              </p>
            </div>
            <div className="space-y-3">
              <Link to="/support">
                <Button variant="default" className="w-full">
                  Go to Support Center
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="w-full">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-background">
        {/* Breadcrumb */}
        <div className="container-wide py-4">
          <nav className="flex items-center gap-2 text-sm text-text-secondary">
            <Link to="/" className="hover:text-text-primary">Home</Link>
            <span>/</span>
            <Link to="/support" className="hover:text-text-primary">Support</Link>
            <span>/</span>
            <span className="text-primary">Grievance Redressal</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="container-wide pb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge-official">
              <Shield className="h-3 w-3" />
              STATUTORY COMPLIANCE
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Grievance Redressal
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            We are committed to addressing your concerns promptly and fairly. Submit your grievance 
            below and our dedicated team will investigate and respond within the specified timeline.
          </p>
        </div>

        {/* Process Steps */}
        <div className="container-wide py-8">
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block flex-1 h-0.5 bg-border" />
                  )}
                </div>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="container-wide py-12">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
            {/* Grievance Form */}
            <div className="card-elevated p-8">
              <h2 className="text-xl font-semibold mb-6">Submit Your Grievance</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registrationId">Registration/Entity ID</Label>
                    <Input
                      id="registrationId"
                      placeholder="If applicable"
                      value={formData.registrationId}
                      onChange={(e) => setFormData({ ...formData, registrationId: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Grievance Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {grievanceCategories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    placeholder="Brief subject of your grievance"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Please provide all relevant details about your grievance..."
                    rows={6}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attachments">Supporting Documents (Optional)</Label>
                  <Input
                    id="attachments"
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={(e) => setFormData({ ...formData, attachments: e.target.files?.[0] || null })}
                  />
                  <p className="text-xs text-text-secondary">
                    Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB)
                  </p>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Grievance
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Timeline Expectations */}
              <div className="card-elevated p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Resolution Timeline</h3>
                </div>
                <div className="space-y-3">
                  {timelineExpectations.map((item) => (
                    <div key={item.category} className="flex items-center justify-between text-sm">
                      <span className="text-text-secondary">{item.category}</span>
                      <span className="font-medium">{item.timeline}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Escalation Notice */}
              <div className="card-elevated p-6 bg-amber-50 border-l-4 border-amber-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-800">Escalation Process</h4>
                    <p className="text-sm text-amber-700 mt-1">
                      If your grievance is not resolved within 15 working days, you may escalate 
                      to the Grievance Appellate Officer at{" "}
                      <a href="mailto:appellate@dpi.org.in" className="underline">appellate@dpi.org.in</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Links */}
              <div className="card-elevated p-6">
                <h3 className="font-semibold mb-4">Related Resources</h3>
                <div className="space-y-3">
                  <Link to="/code-of-conduct" className="flex items-center gap-2 text-sm text-primary hover:underline">
                    <FileText className="h-4 w-4" />
                    Code of Conduct
                  </Link>
                  <Link to="/support" className="flex items-center gap-2 text-sm text-primary hover:underline">
                    <HelpCircle className="h-4 w-4" />
                    Support Center
                  </Link>
                  <Link to="/faq" className="flex items-center gap-2 text-sm text-primary hover:underline">
                    <HelpCircle className="h-4 w-4" />
                    FAQs
                  </Link>
                  <Link to="/contact" className="flex items-center gap-2 text-sm text-primary hover:underline">
                    <ArrowRight className="h-4 w-4" />
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Grievance Officer */}
              <div className="card-elevated p-6">
                <h3 className="font-semibold mb-4">Grievance Officer</h3>
                <p className="text-sm text-text-secondary mb-2">Mr. Rajesh Kumar</p>
                <p className="text-sm text-text-secondary mb-2">Chief Grievance Officer</p>
                <a href="mailto:grievance@dpi.org.in" className="text-sm text-primary hover:underline">
                  grievance@dpi.org.in
                </a>
                <p className="text-xs text-text-secondary mt-4">
                  Available: Mon-Fri, 9:00 AM - 5:00 PM IST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
