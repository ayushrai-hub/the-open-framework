import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { Sparkles, Building2, ShieldCheck, Globe, ArrowRight, Landmark, Target, Award } from "lucide-react";

const principles = [
  {
    icon: Sparkles,
    title: "Federated Visibility",
    description: "Access verified data from across the network. View real-time impact reports from source."
  },
  {
    icon: Building2,
    title: "Neutral Ground",
    description: "No algorithm bias or pressure to donate. Entities are displayed based on relevance, not ranking."
  },
  {
    icon: ShieldCheck,
    title: "Endurance",
    description: "Building long-term ecosystem health through standardized, open protocols."
  }
];

const partners = [
  { name: "Govt of India", icon: Landmark },
  { name: "NITI Aayog", icon: Target },
  { name: "Digital India", icon: Globe }
];

export default function DonorEntryPage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Helmet>
        <title>For Donors | India DPI Civil Society Platform</title>
        <meta name="description" content="Discover and support verified NGOs across India. Explore the unified interface for India's civil society with zero pressure to fund immediately." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-20 overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Discover First,<br />Decide Later.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Welcome to the unified interface for India's civil society. Explore verified impact data across the federated network with zero pressure to fund immediately.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => navigate("/onboarding/donor/identity")}>
                  Continue as Donor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate("/how-it-works")}>
                  Learn Architecture
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl" />
              <div className="relative bg-gradient-to-br from-[#0a3d4d] to-[#0d5a5a] rounded-2xl p-8 aspect-video flex items-center justify-center">
                <svg viewBox="0 0 400 300" className="w-full h-full opacity-80">
                  <defs>
                    <linearGradient id="indiaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                      <stop offset="100%" stopColor="rgba(16, 185, 129, 0.3)" />
                    </linearGradient>
                  </defs>
                  <path d="M200,20 L180,40 L160,35 L150,60 L130,70 L120,100 L100,120 L90,150 L100,180 L120,200 L140,220 L160,250 L180,270 L200,280 L220,270 L240,250 L260,220 L280,200 L300,180 L310,150 L300,120 L280,100 L270,70 L250,60 L240,35 L220,40 Z" fill="url(#indiaGrad)" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
                  {[
                    { cx: 180, cy: 80 }, { cx: 250, cy: 100 }, { cx: 150, cy: 150 },
                    { cx: 220, cy: 160 }, { cx: 280, cy: 140 }, { cx: 200, cy: 200 },
                    { cx: 160, cy: 220 }, { cx: 240, cy: 220 }, { cx: 200, cy: 120 }
                  ].map((point, i) => (
                    <g key={i}>
                      <circle cx={point.cx} cy={point.cy} r="4" fill="#3b82f6" />
                      <circle cx={point.cx} cy={point.cy} r="8" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5">
                        <animate attributeName="r" from="4" to="12" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                        <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
                      </circle>
                    </g>
                  ))}
                  <line x1="180" y1="80" x2="200" y2="120" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
                  <line x1="200" y1="120" x2="250" y2="100" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
                  <line x1="200" y1="120" x2="220" y2="160" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
                  <line x1="150" y1="150" x2="200" y2="120" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
                  <line x1="220" y1="160" x2="280" y2="140" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
                  <line x1="200" y1="200" x2="160" y2="220" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
                  <line x1="200" y1="200" x2="240" y2="220" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Principles of the Platform</h2>
            <p className="text-lg text-muted-foreground">
              Designed for neutrality, trust, and endurance. We prioritize transparency over persuasion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <principle.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery First Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container-wide">
          <Card className="border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    <Sparkles className="h-4 w-4" />
                    COMMITMENT FREE
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Discovery First Approach</h3>
                  <p className="text-muted-foreground">
                    There is absolutely no pressure to fund. This platform is designed as a utility for understanding the landscape first. Browsing requires no commitment — you are here to explore.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-amber-100 to-blue-100 min-h-[250px] flex items-center justify-center">
                  <div className="text-center p-8">
                    <Globe className="h-16 w-16 text-primary/40 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">Explore India's civil society ecosystem</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container-wide text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            TRUSTED ECOSYSTEM PARTNERS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center gap-3 text-muted-foreground">
                <partner.icon className="h-6 w-6" />
                <span className="font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
