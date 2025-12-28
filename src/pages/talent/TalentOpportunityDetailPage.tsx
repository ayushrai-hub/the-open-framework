import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2, MapPin, Clock, Briefcase, Calendar, CheckCircle,
  Bookmark, MessageSquare, Link2, ExternalLink, Network, ChevronRight
} from "lucide-react";

export default function TalentOpportunityDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const opportunity = {
    id: id || "1",
    title: "Senior Program Coordinator",
    organization: "Pratham Foundation",
    verified: true,
    location: "Pune, Maharashtra",
    type: "Full-time",
    mode: "Hybrid",
    posted: "2 days ago",
    deadline: "October 25, 2023",
    daysRemaining: 12,
    description: `Join a national effort to improve literacy in rural districts. We are looking for a dedicated Senior Program Coordinator to manage district-level interventions, liaise with local government bodies, and ensure the faithful execution of our flagship "Read India" initiative.

In this role, you will act as the bridge between the central strategy team and field volunteers. You will be responsible for data collection integrity, volunteer training schedules, and quarterly impact reporting. This position requires a blend of administrative precision and a deep passion for grassroots education reform.`,
    responsibilities: [
      "Oversee the implementation of educational programs across 15+ village clusters in the Pune district.",
      "Coordinate training workshops for 200+ community volunteers and school teachers.",
      "Monitor program budgets and ensure resource allocation aligns with donor guidelines.",
      "Prepare detailed monthly reports on student learning outcomes using the ASER framework."
    ],
    mustHave: [
      "Fluency in Marathi and English (Written & Spoken).",
      "3+ years experience in project management.",
      "Bachelor's degree in Social Work, Education, or related field."
    ],
    goodToHave: [
      "Experience with government stakeholder management.",
      "Previous volunteer experience in rural education.",
      "Data analysis skills (Excel/SPSS)."
    ],
    orgDescription: "Pratham is one of the largest non-governmental organizations in India. We focus on high-quality, low-cost, and replicable interventions to address gaps i...",
    verifiedBy: "NITI Aayog Node",
    federatedNode: "Swayam Federation Node",
    federatedDescription: "The Civil Society Talent Network aggregates data to provide a unified view but does not own the hiring process."
  };

  return (
    <Layout>
      <Helmet>
        <title>{opportunity.title} at {opportunity.organization} | India DPI Platform</title>
        <meta name="description" content={`Apply for ${opportunity.title} at ${opportunity.organization}. ${opportunity.description.slice(0, 150)}...`} />
      </Helmet>

      <div className="container-wide px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <button onClick={() => navigate("/")} className="hover:text-primary">Home</button>
          <ChevronRight className="h-3 w-3" />
          <button onClick={() => navigate("/talent/dashboard")} className="hover:text-primary">Talent Network</button>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Education</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-muted-foreground">Opp #{opportunity.id}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{opportunity.title}</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="h-4 w-4" />
                <span>{opportunity.organization}</span>
                {opportunity.verified && (
                  <Badge className="bg-green-100 text-green-700 gap-1">
                    <CheckCircle className="h-3 w-3" />
                    VERIFIED
                  </Badge>
                )}
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-3 mt-4">
                <Badge variant="outline" className="gap-1">
                  <MapPin className="h-3 w-3" />
                  {opportunity.location}
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Clock className="h-3 w-3" />
                  {opportunity.type}
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Briefcase className="h-3 w-3" />
                  {opportunity.mode}
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Calendar className="h-3 w-3" />
                  Posted {opportunity.posted}
                </Badge>
              </div>
            </div>

            {/* About the Role */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-sm">i</span>
                  </span>
                  About the Role
                </h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  {opportunity.description.split('\n\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Responsibilities */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </span>
                  Key Responsibilities
                </h2>
                <ul className="space-y-3">
                  {opportunity.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements & Skills */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-sm">📋</span>
                  </span>
                  Requirements & Skills
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-medium text-foreground mb-3">MUST HAVES</h3>
                    <ul className="space-y-2">
                      {opportunity.mustHave.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-medium text-foreground mb-3">GOOD TO HAVE</h3>
                    <ul className="space-y-2">
                      {opportunity.goodToHave.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Application Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">Application Deadline</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-5 w-5 text-destructive" />
                    <span className="font-semibold text-foreground">{opportunity.deadline}</span>
                  </div>
                  <p className="text-sm text-primary mt-1">{opportunity.daysRemaining} days remaining to apply</p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    Apply Now
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save for Later
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">Share Opportunity</p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <Building2 className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <Link2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Organization Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{opportunity.organization}</h3>
                    <Button variant="link" className="p-0 h-auto text-primary text-sm">
                      Visit Website
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {opportunity.orgDescription}
                </p>

                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Identity verified by {opportunity.verifiedBy}</span>
                </div>
              </CardContent>
            </Card>

            {/* Federation Notice */}
            <Card className="bg-muted/50">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Network className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Federated Opportunity</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      This opportunity is hosted on the <span className="font-medium">{opportunity.federatedNode}</span>. {opportunity.federatedDescription}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
