import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  Users2, 
  Save, 
  HelpCircle,
  Globe,
  CheckCircle2,
  Shield,
  Image,
  Scale,
  Phone,
  FileText,
  Lightbulb
} from "lucide-react";

const steps = [
  { number: 1, label: "Identity", active: false, completed: true },
  { number: 2, label: "Legal Status", active: false, completed: true },
  { number: 3, label: "Visibility", active: true, completed: false },
  { number: 4, label: "Verify", active: false, completed: false },
];

type AccessLevel = "everyone" | "verified" | "private";

interface DataControl {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  level: AccessLevel;
}

export default function NgoVisibilityPage() {
  const navigate = useNavigate();
  const [showInPublicSearch, setShowInPublicSearch] = useState(true);
  const [dataControls, setDataControls] = useState<DataControl[]>([
    {
      id: "profile",
      icon: Image,
      title: "General Profile",
      description: "Mission, Work Area, Website, Logo",
      level: "everyone",
    },
    {
      id: "legal",
      icon: Scale,
      title: "Legal Registration",
      description: "Registration No., PAN, Darpan ID, FCRA",
      level: "verified",
    },
    {
      id: "contact",
      icon: Phone,
      title: "Direct Contact Info",
      description: "Phone Numbers, Email Addresses, Office Address",
      level: "verified",
    },
    {
      id: "financial",
      icon: FileText,
      title: "Financial Reports",
      description: "Annual Reports, Balance Sheets",
      level: "private",
    },
  ]);

  const updateDataControl = (id: string, level: AccessLevel) => {
    setDataControls(dataControls.map(control => 
      control.id === id ? { ...control, level } : control
    ));
  };

  const handleNext = () => {
    navigate("/onboarding/ngo/verify");
  };

  const handleBack = () => {
    navigate("/onboarding/ngo/legal");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>NGO Registration - Visibility | Civil Society Platform</title>
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
              <h1 className="text-2xl font-bold text-text-primary mb-2">Visibility Preferences</h1>
              <p className="text-text-secondary mb-8">
                You are in full control. Choose who can see your organization's details across the platform ecosystem.
              </p>

              {/* Discovery Settings */}
              <div className="mb-8 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold text-text-primary">Discovery Settings</h2>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-text-primary">Show in Public Search</div>
                    <p className="text-sm text-text-secondary">
                      Allow donors and volunteers to find your organization on the public registry.
                    </p>
                  </div>
                  <Switch
                    checked={showInPublicSearch}
                    onCheckedChange={setShowInPublicSearch}
                  />
                </div>
              </div>

              {/* Data Access Controls */}
              <div className="mb-8">
                <h2 className="font-semibold text-text-primary mb-4">Data Access Controls</h2>

                <div className="space-y-4">
                  {dataControls.map((control) => (
                    <div key={control.id} className="p-4 bg-muted/20 rounded-lg">
                      <div className="flex items-start gap-3 mb-3">
                        <control.icon className="h-5 w-5 text-text-secondary mt-0.5" />
                        <div className="flex-1">
                          <div className="font-medium text-text-primary">{control.title}</div>
                          <p className="text-sm text-text-secondary">{control.description}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-8">
                        <Button
                          variant={control.level === "everyone" ? "default" : "outline"}
                          size="sm"
                          onClick={() => updateDataControl(control.id, "everyone")}
                          className={control.level === "everyone" ? "" : "text-text-secondary"}
                        >
                          Everyone
                        </Button>
                        <Button
                          variant={control.level === "verified" ? "default" : "outline"}
                          size="sm"
                          onClick={() => updateDataControl(control.id, "verified")}
                          className={control.level === "verified" ? "" : "text-text-secondary"}
                        >
                          Verified Only
                        </Button>
                        <Button
                          variant={control.level === "private" ? "default" : "outline"}
                          size="sm"
                          onClick={() => updateDataControl(control.id, "private")}
                          className={control.level === "private" ? "" : "text-text-secondary"}
                        >
                          Private
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tip */}
              <div className="mb-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-amber-600 mt-0.5" />
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <span className="font-medium">Tip:</span> Donors are 3x more likely to fund organizations with Public transparency on legal and financial data. You can always change this later.
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <Button variant="outline" onClick={handleBack}>
                  Back to Legal Status
                </Button>
                <Button onClick={handleNext}>
                  Save & Proceed to Verify
                  <span className="ml-2">→</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card-elevated p-6">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-text-primary">Privacy Tiers Explained</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-text-primary text-sm">Everyone (Public)</div>
                    <p className="text-xs text-text-secondary mt-1">
                      Visible to anyone searching the registry. Good for general awareness and discovery.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-text-primary text-sm">Verified Only</div>
                    <p className="text-xs text-text-secondary mt-1">
                      Visible only to authenticated government bodies, CSR partners, and verified grant-makers. Best for trust-building.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-text-primary text-sm">Private</div>
                    <p className="text-xs text-text-secondary mt-1">
                      Visible only to you and system administrators for compliance checks. Not seen by donors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-start gap-2">
                  <Shield className="h-4 w-4 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-text-primary text-sm">Data Sovereignty</div>
                    <p className="text-xs text-text-secondary mt-1">
                      You retain full ownership of your data. You can change these settings or revoke access at any time from your dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elevated p-6 bg-muted/30">
              <div className="text-xs uppercase text-text-secondary font-medium mb-2">Common Practice</div>
              <p className="text-sm text-text-secondary">
                "Most NGOs keep their <span className="font-semibold text-text-primary">Mission</span> public but restrict <span className="font-semibold text-text-primary">Financials</span> to Verified Partners only."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
