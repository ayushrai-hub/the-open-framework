import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Building2, 
  MapPin, 
  Users2, 
  Save, 
  HelpCircle,
  Info,
  Lock,
  Headphones
} from "lucide-react";

const steps = [
  { number: 1, label: "Identity", active: true, completed: false },
  { number: 2, label: "Legal Status", active: false, completed: false },
  { number: 3, label: "Visibility", active: false, completed: false },
  { number: 4, label: "Verify", active: false, completed: false },
];

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", 
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
  "Uttarakhand", "West Bengal"
];

export default function NgoIdentityPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ngoName: "",
    acronym: "",
    address: "",
    state: "",
    district: "",
    pincode: "",
    contactName: "",
    mobile: "",
    email: "",
    website: "",
  });

  const handleNext = () => {
    navigate("/onboarding/ngo/legal");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>NGO Registration - Identity | Civil Society Platform</title>
      </Helmet>

      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container-wide flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Users2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <div className="font-semibold text-text-primary">Civil Society Platform</div>
              <div className="text-xs text-text-secondary">Government of India Digital Service</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Save className="h-4 w-4 mr-2" />
              Save Draft
            </Button>
            <Button variant="outline" size="sm">
              <HelpCircle className="h-4 w-4 mr-2" />
              Help & Support
            </Button>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="border-b border-border bg-card">
        <div className="container-wide px-4 py-6">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm ${
                    step.active 
                      ? "bg-primary text-primary-foreground" 
                      : step.completed 
                        ? "bg-success text-success-foreground"
                        : "bg-muted text-muted-foreground"
                  }`}>
                    {step.number}
                  </div>
                  <span className={`text-xs mt-2 ${step.active ? "text-primary font-medium" : "text-text-secondary"}`}>
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-20 md:w-32 h-1 mx-2 rounded ${
                    step.completed ? "bg-success" : "bg-border"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container-wide px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="card-elevated p-8">
              <h1 className="text-2xl font-bold text-text-primary mb-2">Organizational Identity</h1>
              <p className="text-text-secondary mb-8">
                Let's start with the basics. This information will form the core of your digital profile and helps donors find you.
              </p>

              {/* Organization Details */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold text-text-primary">Organization Details</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Official NGO Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="e.g. Navkriti Foundation for Rural Development"
                      value={formData.ngoName}
                      onChange={(e) => setFormData({ ...formData, ngoName: e.target.value })}
                    />
                    <p className="text-xs text-text-secondary mt-1">
                      Please enter the name exactly as it appears on your registration certificate.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Acronym / Short Name <span className="text-text-secondary">(Optional)</span>
                    </label>
                    <Input
                      placeholder="e.g. NFRD"
                      value={formData.acronym}
                      onChange={(e) => setFormData({ ...formData, acronym: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Registered Location */}
              <div className="mb-8 pt-6 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold text-text-primary">Registered Location</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Registered Address <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      placeholder="Street address, building name, floor number..."
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        State <span className="text-destructive">*</span>
                      </label>
                      <Select value={formData.state} onValueChange={(value) => setFormData({ ...formData, state: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent>
                          {states.map((state) => (
                            <SelectItem key={state} value={state}>{state}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        District/City <span className="text-destructive">*</span>
                      </label>
                      <Input
                        placeholder="District"
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Pincode <span className="text-destructive">*</span>
                      </label>
                      <Input
                        placeholder="000000"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary Contact */}
              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Users2 className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold text-text-primary">Primary Contact</h2>
                </div>
                <p className="text-sm text-text-secondary mb-4">
                  Who should we contact for official communications regarding this account?
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Contact Person Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="Full Name"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Mobile Number <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="+91  98765 43210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Official Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="contact@ngo.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Website URL <span className="text-text-secondary">(Optional)</span>
                    </label>
                    <Input
                      placeholder="https://www.example.org"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
                <Button variant="outline" asChild>
                  <Link to="/join">Back</Link>
                </Button>
                <Button onClick={handleNext}>
                  Next: Legal Status
                  <span className="ml-2">→</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card-elevated p-6">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-text-primary">Why do we need this?</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-primary">1</span>
                  </div>
                  <div>
                    <div className="font-medium text-text-primary text-sm">Establish Identity</div>
                    <p className="text-xs text-text-secondary mt-1">
                      Accurate basic details help in creating a unique and searchable profile for your NGO in the national registry.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-primary">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-text-primary text-sm">Local Discovery</div>
                    <p className="text-xs text-text-secondary mt-1">
                      Your location helps local donors, volunteers, and government bodies find NGOs working in their vicinity.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-primary">3</span>
                  </div>
                  <div>
                    <div className="font-medium text-text-primary text-sm">Secure Communication</div>
                    <p className="text-xs text-text-secondary mt-1">
                      Verified contact details ensure you never miss critical compliance alerts or funding opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-start gap-2">
                <Lock className="h-4 w-4 text-text-secondary mt-0.5" />
                <p className="text-xs text-text-secondary">
                  Your contact details are kept private by default until you choose to publish your profile.
                </p>
              </div>
            </div>

            <div className="card-elevated p-6 bg-muted/30">
              <div className="flex items-center gap-2 mb-2">
                <Headphones className="h-5 w-5 text-primary" />
                <h3 className="font-medium text-text-primary">Need help filling this?</h3>
              </div>
              <Link to="/contact" className="text-sm text-link hover:underline">
                Contact our onboarding support
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
