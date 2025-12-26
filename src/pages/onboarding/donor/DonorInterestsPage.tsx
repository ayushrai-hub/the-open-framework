import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { 
  Box,
  GraduationCap,
  Heart,
  TreeDeciduous,
  Tractor,
  Users,
  AlertTriangle,
  Palette,
  Lightbulb,
  Info,
  ChevronRight,
  Globe
} from "lucide-react";

const interestCategories = [
  { id: "education", icon: GraduationCap, label: "Education & Skills" },
  { id: "healthcare", icon: Heart, label: "Healthcare" },
  { id: "environment", icon: TreeDeciduous, label: "Environment" },
  { id: "rural", icon: Tractor, label: "Rural Dev." },
  { id: "women", icon: Users, label: "Women Empowerment" },
  { id: "disaster", icon: AlertTriangle, label: "Disaster Relief" },
  { id: "arts", icon: Palette, label: "Arts & Culture" },
  { id: "tech", icon: Lightbulb, label: "Tech & Innovation" },
];

export default function DonorInterestsPage() {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["education"]);

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  const handleNext = () => {
    navigate("/onboarding/donor/geography");
  };

  const handleBack = () => {
    navigate("/onboarding/donor/identity");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Donor Onboarding - Interest Areas | India Civil Society Platform</title>
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
            <span className="text-text-secondary">Step 2 of 4</span>
            <span className="text-text-primary font-medium">Interest Areas</span>
          </div>
          <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
            <div className="w-2/4 h-full bg-primary rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container-wide px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="card-elevated p-8">
            <h1 className="text-2xl font-bold text-text-primary mb-2">What areas interest you most?</h1>
            <p className="text-text-secondary mb-8">
              Select sectors you would like to explore. This helps us personalize your discovery feed. You can update these preferences or browse all categories at any time.
            </p>

            <div className="grid grid-cols-4 gap-4 mb-8">
              {interestCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => toggleInterest(category.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${
                    selectedInterests.includes(category.id)
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <category.icon className={`h-6 w-6 mx-auto mb-2 ${
                    selectedInterests.includes(category.id) ? "text-primary" : "text-text-secondary"
                  }`} />
                  <div className={`text-sm font-medium ${
                    selectedInterests.includes(category.id) ? "text-primary" : "text-text-primary"
                  }`}>
                    {category.label}
                  </div>
                </button>
              ))}
            </div>

            {/* Info Box */}
            <div className="p-4 bg-muted/30 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-text-secondary mt-0.5" />
                <div>
                  <div className="font-medium text-text-primary">Why do we ask this?</div>
                  <p className="text-sm text-text-secondary">
                    We use these categories to filter the national registry for you. We do not use this data for marketing, nor do we share your preferences with organizations until you choose to connect.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              <Button variant="ghost" onClick={handleBack}>Back</Button>
              <div className="flex items-center gap-3">
                <Button variant="ghost">Skip for now</Button>
                <Button onClick={handleNext}>
                  Next Step
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Preview Next Step */}
          <div className="mt-8 pl-4 border-l-2 border-border">
            <div className="text-sm text-text-secondary mb-2">Step 3: Geography</div>
            <div className="h-8 w-48 bg-muted rounded animate-pulse" />
            <div className="h-6 w-32 bg-muted rounded animate-pulse mt-2" />
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
