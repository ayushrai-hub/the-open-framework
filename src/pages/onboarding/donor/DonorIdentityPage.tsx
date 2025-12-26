import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { 
  Box,
  Building2,
  Heart,
  User,
  Shield,
  ChevronRight,
  Globe
} from "lucide-react";

const donorTypes = [
  {
    id: "csr",
    icon: Building2,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    title: "Corporate CSR",
    description: "Representing a registered company's mandated CSR initiatives.",
  },
  {
    id: "foundation",
    icon: Heart,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    title: "Philanthropic Foundation",
    description: "Trusts, family offices, or intermediaries managing grants.",
  },
  {
    id: "individual",
    icon: User,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    title: "Individual Donor",
    description: "Citizens or residents looking to support causes personally.",
  },
];

const interestAreas = ["Education", "Healthcare", "Rural Development"];

export default function DonorIdentityPage() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleNext = () => {
    navigate("/onboarding/donor/interests");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Donor Onboarding - Identity | India Civil Society Platform</title>
      </Helmet>

      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container-wide flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Box className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="font-semibold text-text-primary">India Civil Society Platform</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Globe className="h-4 w-4" />
              English (India)
            </div>
            <Button variant="outline" size="sm">
              Browse without signing up
            </Button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="border-b border-border bg-card">
        <div className="container-wide px-4 py-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-text-secondary">Step 1 of 4</span>
            <span className="text-text-primary font-medium">Identity</span>
          </div>
          <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
            <div className="w-1/4 h-full bg-primary rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container-wide px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="card-elevated p-8">
            <h1 className="text-2xl font-bold text-text-primary mb-2">How do you identify?</h1>
            <p className="text-text-secondary mb-8">
              We tailor your experience based on your giving profile. This helps us ensure regulatory compliance and suggest relevant opportunities.
            </p>

            <div className="space-y-4 mb-8">
              {donorTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                    selectedType === type.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg ${type.iconBg} flex items-center justify-center`}>
                    <type.icon className={`h-6 w-6 ${type.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-text-primary">{type.title}</div>
                    <p className="text-sm text-text-secondary">{type.description}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 ${
                    selectedType === type.id 
                      ? "border-primary bg-primary" 
                      : "border-border"
                  }`}>
                    {selectedType === type.id && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Trust Architecture */}
            <div className="p-4 bg-muted/30 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-text-primary">Trust-First Architecture</div>
                  <p className="text-sm text-text-secondary">
                    Your identity data is processed locally. We only connect you to verified registries.{" "}
                    <Link to="/privacy" className="text-link underline">Learn about our privacy protocol.</Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              <Button variant="ghost" asChild>
                <Link to="/join">Back</Link>
              </Button>
              <div className="flex items-center gap-3">
                <Button variant="ghost">Skip</Button>
                <Button onClick={handleNext} disabled={!selectedType}>
                  Next Step
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Preview Next Step */}
          <div className="mt-8 pl-4 border-l-2 border-border">
            <div className="text-sm text-text-secondary mb-2">Step 2: Interest Areas</div>
            <div className="flex gap-2">
              {interestAreas.map((area) => (
                <span key={area} className="px-3 py-1 bg-muted rounded-full text-sm text-text-secondary">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-auto">
        <div className="container-wide px-4 py-4">
          <div className="flex items-center justify-between text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Part of India's Digital Public Infrastructure
            </div>
            <div className="flex items-center gap-6">
              <Link to="/terms" className="hover:text-text-primary">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-text-primary">Privacy Policy</Link>
              <Link to="/help" className="hover:text-text-primary">Help Center</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
