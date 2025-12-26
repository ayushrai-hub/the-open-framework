import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Box,
  Globe,
  MapPin,
  Plus,
  X,
  Shield,
  ChevronRight
} from "lucide-react";

const states = [
  "Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "Uttar Pradesh",
  "Gujarat", "Rajasthan", "West Bengal", "Madhya Pradesh", "Kerala"
];

interface Selection {
  id: string;
  name: string;
  type: "state" | "district";
  color: string;
}

export default function DonorGeographyPage() {
  const navigate = useNavigate();
  const [panIndia, setPanIndia] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [districtSearch, setDistrictSearch] = useState("");
  const [selections, setSelections] = useState<Selection[]>([
    { id: "1", name: "Maharashtra", type: "state", color: "bg-primary" },
    { id: "2", name: "Varanasi", type: "district", color: "bg-violet-500" },
  ]);

  const removeSelection = (id: string) => {
    setSelections(selections.filter(s => s.id !== id));
  };

  const handleNext = () => {
    navigate("/onboarding/donor/notifications");
  };

  const handleBack = () => {
    navigate("/onboarding/donor/interests");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Donor Onboarding - Geography | India Civil Society Platform</title>
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
            <span className="text-text-secondary">Step 3 of 4</span>
            <span className="text-text-primary font-medium">Geography Preferences</span>
          </div>
          <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-primary rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container-wide px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="card-elevated p-8">
            <h1 className="text-2xl font-bold text-text-primary mb-2">Which regions would you like to focus on?</h1>
            <p className="text-text-secondary mb-8">
              Setting a preference helps us recommend relevant NGOs. This does <span className="font-semibold">not</span> restrict your access — you can always explore causes across all of India.
            </p>

            {/* Pan-India Option */}
            <div className={`p-4 rounded-xl border-2 mb-6 ${panIndia ? "border-primary bg-amber-50 dark:bg-amber-900/20" : "border-border"}`}>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="panIndia"
                  checked={panIndia}
                  onCheckedChange={(checked) => setPanIndia(checked === true)}
                  className="mt-0.5"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-amber-600" />
                    <label htmlFor="panIndia" className="font-medium text-text-primary cursor-pointer">
                      No specific preference (Pan-India)
                    </label>
                  </div>
                  <p className="text-sm text-text-secondary mt-1">
                    I am open to supporting impactful causes anywhere in the country.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-text-secondary uppercase tracking-wide">Or Select Specific Regions</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Region Selection */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-2">
                  State / Union Territory
                </label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-text-secondary" />
                      <SelectValue placeholder="Maharashtra" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-xs font-medium text-text-secondary uppercase tracking-wide mb-2">
                  District (Optional)
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
                  <Input
                    placeholder="Search districts..."
                    className="pl-10"
                    value={districtSearch}
                    onChange={(e) => setDistrictSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-end">
                <Button variant="outline" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>
            </div>

            {/* Selected Regions */}
            {selections.length > 0 && (
              <div className="p-4 bg-muted/30 rounded-lg mb-6">
                <div className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-3">
                  Your Selections
                </div>
                <div className="flex flex-wrap gap-2">
                  {selections.map((selection) => (
                    <div
                      key={selection.id}
                      className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full"
                    >
                      <div className={`w-2 h-2 rounded-full ${selection.color}`} />
                      <span className="text-sm text-text-primary">{selection.name}</span>
                      <span className="text-xs text-text-secondary">
                        ({selection.type === "state" ? "State-wide" : "District, UP"})
                      </span>
                      <button onClick={() => removeSelection(selection.id)}>
                        <X className="h-3 w-3 text-text-secondary hover:text-text-primary" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Federated Info */}
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-text-primary">Connecting to Federated Registries</div>
                  <p className="text-sm text-text-secondary">
                    When you select a state, we synchronize verified NGO data directly from that state's digital registry. Your preferences help us surface the most trustworthy local organizations.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              <Button variant="ghost" onClick={handleBack}>Back</Button>
              <div className="flex items-center gap-3">
                <Button variant="ghost">Skip Step</Button>
                <Button onClick={handleNext}>
                  Next: Notifications
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Preview Next Step */}
          <div className="mt-8 pl-4 border-l-2 border-border">
            <div className="text-sm text-text-secondary mb-2">Step 4: Notifications & Verification</div>
            <div className="text-sm text-text-secondary">Receive quarterly impact reports</div>
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
