import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Users2, 
  Save, 
  HelpCircle,
  Info,
  Lock,
  Headphones,
  CheckCircle2,
  Building2,
  Calendar
} from "lucide-react";

const steps = [
  { number: 1, label: "Identity", active: false, completed: true },
  { number: 2, label: "Legal Status", active: true, completed: false },
  { number: 3, label: "Visibility", active: false, completed: false },
  { number: 4, label: "Verify", active: false, completed: false },
];

const orgTypes = [
  "Trust",
  "Society",
  "Section 8 Company",
  "Trust (Non-Government)",
  "Cooperative Society",
];

export default function NgoLegalPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    orgType: "",
    registrationDate: "",
    registrationNumber: "",
    darpanId: "",
    panNumber: "",
    hasFcra: false,
    noDocuments: false,
  });

  const handleNext = () => {
    navigate("/onboarding/ngo/visibility");
  };

  const handleBack = () => {
    navigate("/onboarding/ngo/identity");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>NGO Registration - Legal Status | Civil Society Platform</title>
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
                    {step.completed ? <CheckCircle2 className="h-5 w-5" /> : step.number}
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
              <h1 className="text-2xl font-bold text-text-primary mb-2">Legal Status & Compliance</h1>
              <p className="text-text-secondary mb-8">
                Provide your registration details to establish trust. We only ask for what's legally required.
              </p>

              {/* Registration Details */}
              <div className="mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Organization Type <span className="text-destructive">*</span>
                    </label>
                    <Select value={formData.orgType} onValueChange={(value) => setFormData({ ...formData, orgType: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Trust" />
                      </SelectTrigger>
                      <SelectContent>
                        {orgTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Date of Registration <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        type="date"
                        value={formData.registrationDate}
                        onChange={(e) => setFormData({ ...formData, registrationDate: e.target.value })}
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Registration Number <span className="text-destructive">*</span>
                    <span className="float-right text-text-secondary font-normal text-xs cursor-pointer hover:text-link">
                      Where to find this?
                    </span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
                    <Input
                      placeholder="e.g. A-1234/2023"
                      className="pl-10"
                      value={formData.registrationNumber}
                      onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Standard Identifiers */}
              <div className="mb-8 pt-6 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold text-text-primary">Standard Identifiers</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      NGO Darpan ID
                    </label>
                    <Input
                      placeholder="E.G. DL/2023/000000"
                      value={formData.darpanId}
                      onChange={(e) => setFormData({ ...formData, darpanId: e.target.value })}
                    />
                    <p className="text-xs text-text-secondary mt-1">
                      Links your profile to the NITI Aayog database.
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      PAN Number <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="ABCDE1234F"
                      value={formData.panNumber}
                      onChange={(e) => setFormData({ ...formData, panNumber: e.target.value })}
                    />
                    <p className="text-xs text-text-secondary mt-1">
                      Required for financial compliance verification.
                    </p>
                  </div>
                </div>
              </div>

              {/* FCRA Registration */}
              <div className="mb-8 p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-text-primary">FCRA Registration</div>
                    <p className="text-sm text-text-secondary">
                      Do you have a Foreign Contribution Regulation Act registration?
                    </p>
                  </div>
                  <Switch
                    checked={formData.hasFcra}
                    onCheckedChange={(checked) => setFormData({ ...formData, hasFcra: checked })}
                  />
                </div>
              </div>

              {/* Skip Option */}
              <div className="flex items-start gap-3 mb-8">
                <Checkbox
                  id="noDocuments"
                  checked={formData.noDocuments}
                  onCheckedChange={(checked) => setFormData({ ...formData, noDocuments: checked === true })}
                  className="mt-0.5"
                />
                <div>
                  <label htmlFor="noDocuments" className="text-sm font-medium text-text-primary cursor-pointer">
                    I don't have all documents handy right now
                  </label>
                  <p className="text-xs text-text-secondary mt-0.5">
                    You can proceed and update these details later from your dashboard.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleNext}>
                  Next: Visibility Settings
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
                    <div className="font-medium text-text-primary text-sm">Verification & Trust</div>
                    <p className="text-xs text-text-secondary mt-1">
                      Linking your Darpan ID and PAN helps verify your entity automatically, building immediate trust with donors.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-primary">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-text-primary text-sm">Federated Identity</div>
                    <p className="text-xs text-text-secondary mt-1">
                      This single ID works across multiple state portals, so you don't have to register everywhere separately.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-primary">3</span>
                  </div>
                  <div>
                    <div className="font-medium text-text-primary text-sm">Compliance Safety</div>
                    <p className="text-xs text-text-secondary mt-1">
                      We monitor expiration dates for your registrations and remind you before they lapse.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-start gap-2">
                <Lock className="h-4 w-4 text-text-secondary mt-0.5" />
                <p className="text-xs text-text-secondary">
                  Your legal data is encrypted and only shared with regulators or verified partners you approve.
                </p>
              </div>
            </div>

            <div className="card-elevated p-6 bg-muted/30">
              <div className="flex items-center gap-2 mb-2">
                <Headphones className="h-5 w-5 text-primary" />
                <h3 className="font-medium text-text-primary">Need help with IDs?</h3>
              </div>
              <Link to="/contact" className="text-sm text-link hover:underline">
                Contact our support team
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
