import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { 
  Box,
  Globe,
  Lock,
  Shield,
  Check
} from "lucide-react";

export default function DonorNotificationsPage() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    newMatches: false,
    savedUpdates: false,
    regulatory: false,
    announcements: false,
  });
  const [verifyOrg, setVerifyOrg] = useState({
    orgName: "",
    cin: "",
  });

  const handleFinish = () => {
    navigate("/donor/dashboard");
  };

  const handleBack = () => {
    navigate("/onboarding/donor/geography");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Donor Onboarding - Notifications | India Civil Society Platform</title>
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
            <span className="text-text-secondary">Step 4 of 4</span>
            <span className="text-text-primary font-medium">Notifications & Verification</span>
          </div>
          <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
            <div className="w-full h-full bg-primary rounded-full" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container-wide px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="card-elevated p-8">
            <h1 className="text-2xl font-bold text-text-primary mb-2">Stay updated & Verified</h1>
            <p className="text-text-secondary mb-8">
              Configure how you receive updates. For organizations, you can optionally provide registration details now to build trust faster.
            </p>

            {/* Notification Preferences */}
            <div className="mb-8">
              <div className="text-sm font-medium text-text-secondary uppercase tracking-wide mb-4">
                A. Notification Preferences
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div>
                    <div className="font-medium text-text-primary">New NGO Matches</div>
                    <p className="text-sm text-text-secondary">Get notified when new organizations match your cause interests.</p>
                  </div>
                  <Switch
                    checked={notifications.newMatches}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, newMatches: checked })}
                  />
                </div>

                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div>
                    <div className="font-medium text-text-primary">Updates from Saved NGOs</div>
                    <p className="text-sm text-text-secondary">Quarterly reports and impact stories from your saved list.</p>
                  </div>
                  <Switch
                    checked={notifications.savedUpdates}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, savedUpdates: checked })}
                  />
                </div>

                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-text-primary">Regulatory & Compliance Updates</span>
                      <span className="text-xs px-2 py-0.5 bg-muted rounded text-text-secondary">Optional</span>
                    </div>
                    <p className="text-sm text-text-secondary">FCRA changes and CSR amendment alerts relevant to you.</p>
                  </div>
                  <Switch
                    checked={notifications.regulatory}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, regulatory: checked })}
                  />
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <div className="font-medium text-text-primary">Platform Announcements</div>
                    <p className="text-sm text-text-secondary">Major feature releases and ecosystem news.</p>
                  </div>
                  <Switch
                    checked={notifications.announcements}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, announcements: checked })}
                  />
                </div>
              </div>
            </div>

            {/* Optional Verification */}
            <div className="mb-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-text-secondary uppercase tracking-wide">
                    B. Optional Verification
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded">Corporate CSR</span>
                </div>
                <button className="text-sm text-link">Verify later</button>
              </div>

              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg mb-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-text-primary">Why verify?</div>
                    <p className="text-sm text-text-secondary">
                      Verified profiles get access to deeper impact analytics and direct implementation partners. No document upload is required at this stage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Organization Name
                  </label>
                  <Input
                    placeholder="e.g. Tata Consultancy Services"
                    value={verifyOrg.orgName}
                    onChange={(e) => setVerifyOrg({ ...verifyOrg, orgName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Registration / CIN
                  </label>
                  <Input
                    placeholder="e.g. L12345MH2000PLC..."
                    value={verifyOrg.cin}
                    onChange={(e) => setVerifyOrg({ ...verifyOrg, cin: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Data Privacy */}
            <div className="p-4 bg-muted/30 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-text-secondary mt-0.5" />
                <div>
                  <div className="font-medium text-text-primary">Your data stays with you</div>
                  <p className="text-sm text-text-secondary">
                    Notification settings can be changed anytime. Verification details are only shared with NGOs you explicitly connect with.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              <Button variant="ghost" onClick={handleBack}>Back</Button>
              <div className="flex items-center gap-3">
                <Button variant="ghost">Skip</Button>
                <Button onClick={handleFinish}>
                  Finish Setup
                  <Check className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Preview Dashboard */}
          <div className="mt-8">
            <div className="text-center text-sm text-text-secondary mb-4 border-t border-dashed border-border pt-6">
              Next: Your Personalized Dashboard
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-24 bg-muted rounded-lg animate-pulse" />
              <div className="h-24 bg-muted rounded-lg animate-pulse" />
              <div className="h-24 bg-muted rounded-lg animate-pulse" />
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
