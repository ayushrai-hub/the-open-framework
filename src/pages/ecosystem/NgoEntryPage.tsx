import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { IndianRupee, ShieldCheck, LayoutGrid, Globe, Building, Users, ChevronDown, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
const NgoEntryPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>For NGOs - Institutional Access | Civil Society Platform</title>
        <meta name="description" content="A neutral digital public utility designed to streamline compliance, funding, and collaboration for India's NGOs." />
      </Helmet>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span className="text-primary font-medium text-sm tracking-wide uppercase">
                    Digital Public Infrastructure
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                  Institutional Access<br />
                  for Civil Society
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  A neutral digital public utility designed to streamline compliance, funding, and collaboration for India's NGOs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="px-6">
                    <Link to="/onboarding/ngo/identity">Start NGO Registration</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2">
                    Learn more <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 relative overflow-hidden">
                  {/* India Map Visualization */}
                  <div className="aspect-[4/3] flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Dotted map pattern */}
                      <div className="absolute inset-0 opacity-30">
                        {Array.from({ length: 20 }).map((_, row) => (
                          <div key={row} className="flex justify-center gap-2">
                            {Array.from({ length: 15 }).map((_, col) => (
                              <div 
                                key={col} 
                                className="w-1 h-1 rounded-full bg-cyan-400"
                                style={{
                                  opacity: Math.random() > 0.5 ? 0.8 : 0.3
                                }}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                      <Globe className="h-32 w-32 text-cyan-400 opacity-20" />
                    </div>
                  </div>
                  {/* Trust Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-800/80 backdrop-blur rounded-lg p-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Trusted by 12,000+ NGOs</p>
                      <p className="text-slate-400 text-sm">Secure, federated, and encrypted data.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Capabilities */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Platform Capabilities</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Empowering your organization with digital tools designed for scale and trust.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <IndianRupee className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Manage Grants</h3>
                <p className="text-muted-foreground text-sm">
                  Streamline funding applications with unified data. One-time data entry for multiple grant opportunities.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Verify Credentials</h3>
                <p className="text-muted-foreground text-sm">
                  Issue and receive digital verifiable credentials. Build an immutable trust score for your organization.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <LayoutGrid className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Access Public Data</h3>
                <p className="text-muted-foreground text-sm">
                  Access open government datasets for better impact planning. Leverage data for evidence-based proposals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Roadmap */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">Registration Roadmap</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Steps */}
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Identity Verification</h3>
                    <p className="text-muted-foreground text-sm">
                      Link your PAN or DARPAN ID to verify the organization's legal existence. This is a one-time verification step.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Building className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Organization Profile</h3>
                    <p className="text-muted-foreground text-sm">
                      Fill in basic details, sector focus areas, and operational geography. This helps funders find you.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Governance Setup</h3>
                    <p className="text-muted-foreground text-sm">
                      Add board members and authorized signatories. We use this to establish accountability hierarchies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Cards */}
              <div className="space-y-6">
                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Progress saved automatically</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    No need to rush. You can pause and resume the registration process at any time. All data is encrypted locally before transmission.
                  </p>
                  <Link 
                    to="/documentation" 
                    className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline"
                  >
                    Read about our data security <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Documents you might need</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Organization PAN Card
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Registration Certificate
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Board Member details
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to join the network?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of other change-makers building a better India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="px-6">
                <Link to="/onboarding/ngo/identity">Start NGO Registration</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default NgoEntryPage;
