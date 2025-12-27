import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { EyeOff, Globe, Briefcase, Lock, ArrowRight, Shield } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: EyeOff,
    title: "Hidden by Default",
    description: "No one sees your data until you explicitly apply to an opportunity. You retain full ownership."
  },
  {
    icon: Globe,
    title: "Federated Access",
    description: "Your data lives on the platform and is never sold to third parties. Secure by design."
  },
  {
    icon: Briefcase,
    title: "Enduring Profile",
    description: "A portable professional identity that travels with you across the ecosystem."
  }
];

export default function TalentEntryPage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Helmet>
        <title>For Volunteers | India DPI Talent Network</title>
        <meta name="description" content="Join India's Civil Society Talent Network. A neutral, public infrastructure connecting you with purpose-driven organizations without compromising your privacy." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-20 overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Join India's Civil Society Talent Network
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                A neutral, public infrastructure designed to connect you with purpose-driven organizations without compromising your privacy. Your profile remains invisible until you choose to share it.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => navigate("/onboarding/talent")}>
                  Create Talent Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate("/how-it-works")}>
                  Learn how it works
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative bg-gradient-to-br from-[#0a3d5c] to-[#1a5a8a] rounded-2xl p-8 aspect-video flex items-center justify-center">
                <svg viewBox="0 0 400 300" className="w-full h-full opacity-80">
                  <defs>
                    <linearGradient id="networkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                      <stop offset="100%" stopColor="rgba(139, 92, 246, 0.4)" />
                    </linearGradient>
                  </defs>
                  {/* Network nodes */}
                  {[
                    { cx: 200, cy: 150, r: 20 },
                    { cx: 100, cy: 100, r: 12 }, { cx: 300, cy: 100, r: 12 },
                    { cx: 80, cy: 200, r: 10 }, { cx: 320, cy: 200, r: 10 },
                    { cx: 150, cy: 250, r: 8 }, { cx: 250, cy: 250, r: 8 },
                    { cx: 150, cy: 60, r: 8 }, { cx: 250, cy: 60, r: 8 }
                  ].map((node, i) => (
                    <g key={i}>
                      <circle cx={node.cx} cy={node.cy} r={node.r} fill="url(#networkGrad)" stroke="#3b82f6" strokeWidth="2" />
                      {i === 0 && <circle cx={node.cx} cy={node.cy} r={node.r + 5} fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />}
                    </g>
                  ))}
                  {/* Connection lines */}
                  <line x1="200" y1="150" x2="100" y2="100" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
                  <line x1="200" y1="150" x2="300" y2="100" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
                  <line x1="200" y1="150" x2="80" y2="200" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
                  <line x1="200" y1="150" x2="320" y2="200" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
                  <line x1="100" y1="100" x2="150" y2="60" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
                  <line x1="300" y1="100" x2="250" y2="60" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
                  <line x1="80" y1="200" x2="150" y2="250" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
                  <line x1="320" y1="200" x2="250" y2="250" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container-wide text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Your Skills, Your Terms</h2>
          <p className="text-lg text-muted-foreground">
            Built on trust-first principles for the social sector.
          </p>
        </div>

        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Control Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <Card className="border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    <Lock className="h-4 w-4" />
                    PRIVACY FIRST
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-4">You are always in control</h3>
                  <p className="text-muted-foreground mb-6">
                    Toggle your visibility at any time. We design for privacy, not engagement. Recruiters cannot search for you unless you opt-in.
                  </p>
                  <Button variant="outline">Read our Data Protection Policy</Button>
                </div>
                <div className="bg-muted/50 p-8 flex items-center justify-center">
                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border w-full max-w-sm">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground">Profile Status</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">ACTIVE</Badge>
                    </div>
                    <div className="flex items-center justify-between py-4 border-t border-border">
                      <div>
                        <p className="font-medium text-foreground">Public Visibility</p>
                        <p className="text-sm text-muted-foreground">Allow recruiters to find me</p>
                      </div>
                      <Switch />
                    </div>
                    <div className="mt-4 p-3 rounded-lg bg-amber-50 border border-amber-200">
                      <p className="text-sm text-amber-700 flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Default setting: OFF. You are invisible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background text-center">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to make an impact?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join the network of trusted professionals driving change in India.
          </p>
          <Button size="lg" onClick={() => navigate("/onboarding/talent")}>
            Create Talent Profile
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Takes ~2 minutes. No credit card required.
          </p>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 border-t border-border bg-muted/30">
        <div className="container-wide text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Built on Digital Public Infrastructure principles. Secure. Open. Federated.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="/contact" className="hover:text-foreground transition-colors">Contact Support</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
