import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { 
  Building2, 
  HandCoins, 
  Users, 
  Eye, 
  Info, 
  ChevronDown, 
  Shield, 
  Lock, 
  Smartphone,
  Mail,
  ArrowRight
} from "lucide-react";

interface RoleCard {
  id: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
}

const roles: RoleCard[] = [
  {
    id: "ngo",
    icon: Building2,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    title: "NGO / Non-Profit",
    description: "For registered non-profits seeking funding, partners, or ecosystem visibility.",
  },
  {
    id: "donor",
    icon: HandCoins,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    title: "Funder / Donor",
    description: "For institutions or individuals providing grants, resources, and oversight.",
  },
  {
    id: "volunteer",
    icon: Users,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
    title: "Talent / Volunteer",
    description: "For individuals offering skills, time, or expertise to civil society projects.",
  },
  {
    id: "observer",
    icon: Eye,
    iconColor: "text-slate-600",
    iconBg: "bg-slate-100",
    title: "Other / Observer",
    description: "For researchers, government observers, or general public interest.",
  },
];

export default function JoinUsPage() {
  const [selectedRole, setSelectedRole] = useState<string>("ngo");
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [plainLanguage, setPlainLanguage] = useState(false);
  const [helpExpanded, setHelpExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log({ selectedRole, email, termsAccepted, privacyAccepted });
  };

  return (
    <Layout>
      <Helmet>
        <title>Join Us | India DPI Civil Society Platform</title>
        <meta
          name="description"
          content="Join the Civil Society Ecosystem. Select your profile type to get started with the onboarding process."
        />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container-wide max-w-5xl">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Join the Civil Society Ecosystem
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl">
              Select the profile that best describes your organization or intent to get started 
              with the onboarding process.
            </p>
          </div>
        </section>

        {/* Role Selection */}
        <section className="py-10 border-b border-border">
          <div className="container-wide max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roles.map((role) => {
                const IconComponent = role.icon;
                const isSelected = selectedRole === role.id;
                const linkPath = role.id === "ngo" ? "/ecosystem/ngos" 
                  : role.id === "donor" ? "/onboarding/donor/identity"
                  : role.id === "volunteer" ? "/onboarding/talent"
                  : null;
                
                return (
                  <Link
                    key={role.id}
                    to={linkPath || "#"}
                    onClick={(e) => { if (!linkPath) e.preventDefault(); setSelectedRole(role.id); }}
                    className={`text-left p-6 rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
                      isSelected 
                        ? "border-primary bg-primary/5 shadow-sm" 
                        : "border-border bg-card hover:border-primary/50"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-lg ${role.iconBg} flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-6 w-6 ${role.iconColor}`} />
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">{role.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{role.description}</p>
                  </Link>
                );
              })}
            </div>

            {/* Help Accordion */}
            <div className="mt-6">
              <button
                onClick={() => setHelpExpanded(!helpExpanded)}
                className="w-full flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Info className="h-5 w-5 text-text-secondary" />
                  <span className="text-sm text-text-secondary">Not sure which role to choose?</span>
                </div>
                <ChevronDown className={`h-5 w-5 text-text-secondary transition-transform ${helpExpanded ? "rotate-180" : ""}`} />
              </button>
              
              {helpExpanded && (
                <div className="mt-2 p-4 bg-muted/30 rounded-lg border border-border">
                  <p className="text-sm text-text-secondary mb-3">
                    Here's a quick guide to help you choose:
                  </p>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li className="flex gap-2">
                      <span className="font-medium text-text-primary">NGO / Non-Profit:</span>
                      If you represent a registered charitable organization, trust, or society.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium text-text-primary">Funder / Donor:</span>
                      If you're a CSR foundation, grant-making body, or individual philanthropist.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium text-text-primary">Talent / Volunteer:</span>
                      If you want to contribute your skills or time to civil society causes.
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium text-text-primary">Other / Observer:</span>
                      If you're here for research, policy analysis, or general exploration.
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Security & Form Section */}
        <section className="py-10">
          <div className="container-wide max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Column - Security & Trust */}
              <div>
                <h2 className="text-xl font-semibold text-text-primary mb-6">Security & Trust</h2>
                
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary text-sm uppercase tracking-wide mb-2">
                        Institutional Neutrality
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        We do not support social logins (Google, Facebook) to ensure data sovereignty.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-text-secondary">
                    <Lock className="h-4 w-4 text-amber-600" />
                    <span>Strong password required later.</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-secondary">
                    <Smartphone className="h-4 w-4 text-rose-600" />
                    <span>Mandatory 2FA protection.</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Email Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Organization Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@organization.org"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-12 h-12 border-border"
                      />
                    </div>
                    <p className="mt-2 text-xs text-link">
                      A verification link will be sent to this email. It must be valid to proceed.
                    </p>
                  </div>

                  {/* Terms & Privacy */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-medium text-text-primary">Terms & Privacy</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-text-secondary">Plain Language</span>
                        <Switch
                          checked={plainLanguage}
                          onCheckedChange={setPlainLanguage}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="terms"
                          checked={termsAccepted}
                          onCheckedChange={(checked) => setTermsAccepted(checked === true)}
                          className="mt-0.5"
                        />
                        <div>
                          <label htmlFor="terms" className="text-sm font-medium text-text-primary cursor-pointer">
                            I agree to the Terms of Service
                          </label>
                          <p className="text-xs text-text-secondary mt-0.5">
                            {plainLanguage 
                              ? "We promise not to sell your data. We respect your ownership of content."
                              : "By accepting, you agree to our terms of service and acceptable use policies."
                            }
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="privacy"
                          checked={privacyAccepted}
                          onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
                          className="mt-0.5"
                        />
                        <div>
                          <label htmlFor="privacy" className="text-sm font-medium text-text-primary cursor-pointer">
                            I consent to the Privacy Policy
                          </label>
                          <p className="text-xs text-text-secondary mt-0.5">
                            {plainLanguage 
                              ? "We collect only essential data for verification. You can request deletion at any time."
                              : "We process your data in accordance with applicable privacy regulations."
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12"
                    disabled={!termsAccepted || !privacyAccepted || !email}
                  >
                    Verify Email & Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
