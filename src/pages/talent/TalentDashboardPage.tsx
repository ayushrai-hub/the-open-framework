import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { useAuth } from "@/contexts/AuthContext";
import {
  Search, FileText, Bookmark, Building2, ArrowRight, Sparkles,
  CheckCircle, MapPin, Clock, ExternalLink, Briefcase, BookOpen
} from "lucide-react";

const myApplications = [
  {
    id: "1",
    role: "Senior Researcher",
    organization: "Centre for Policy Research",
    status: "IN REVIEW",
    statusType: "warning",
    updated: "Updated yesterday"
  },
  {
    id: "2",
    role: "Communications Lead",
    organization: "Dasra",
    status: "SUBMITTED",
    statusType: "success",
    updated: "Submitted Oct 12"
  }
];

const savedOpportunities = [
  {
    id: "1",
    role: "Field Coordinator",
    organization: "Gram Vikas Trust",
    location: "Odisha"
  },
  {
    id: "2",
    role: "Public Health Analyst",
    organization: "Swasth Alliance",
    location: "Remote"
  }
];

const recommendedOpportunities = [
  {
    id: "1",
    title: "Program Manager, Education Initiatives",
    organization: "Teach for India Network",
    location: "Mumbai, MH (Hybrid)",
    tags: ["Matches Project Management skill", "Civil Society Hub"],
    posted: "2 days ago",
    type: "Full-time"
  },
  {
    id: "2",
    title: "Field Coordinator",
    organization: "Gram Vikas Trust",
    location: "Odisha (On-site)",
    tags: ["Strong local language match"],
    verified: true,
    posted: "5 days ago",
    type: "Contract"
  },
  {
    id: "3",
    title: "Public Health Analyst",
    organization: "Swasth Alliance",
    location: "Remote",
    tags: ["Based on your interest in Policy"],
    posted: "1 week ago",
    type: "Part-time"
  }
];

const resources = [
  {
    id: "1",
    icon: FileText,
    title: "CV Guide for Development Sector",
    description: "Best practices for crafting a resume that highlights your social impact."
  },
  {
    id: "2",
    icon: Briefcase,
    title: "Impact Careers Podcast",
    description: "Listen to industry leaders discuss the future of digital public goods."
  },
  {
    id: "3",
    icon: BookOpen,
    title: "Certification Roadmap",
    description: "Key certifications that NGOs value in 2024."
  }
];

export default function TalentDashboardPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [publicVisibility, setPublicVisibility] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/talent/opportunities?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <DashboardLayout role="talent">
      <Helmet>
        <title>Talent Dashboard | India DPI Platform</title>
        <meta name="description" content="Find your next impact role. Explore opportunities tailored to your skills in India's digital public infrastructure ecosystem." />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {getGreeting()}, {user?.firstName || "Priya"}
            </h1>
            <p className="text-muted-foreground">Welcome back to your dashboard</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Search Card */}
            <Card className="bg-gradient-to-br from-card to-muted/30">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground mb-2">Find your next impact role</h2>
                    <p className="text-muted-foreground mb-4">
                      Explore opportunities tailored to your skills in India's digital public infrastructure ecosystem.
                    </p>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Job title, skill, or keyword"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                          className="pl-9"
                        />
                      </div>
                      <Button onClick={handleSearch}>Search Opportunities</Button>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">
                      <span className="text-muted-foreground">Popular searches:</span>
                      {["Program Management", "Policy Research", "Data Science"].map((term) => (
                        <Badge key={term} variant="outline" className="cursor-pointer hover:bg-muted">
                          {term}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:block w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                    <Briefcase className="h-12 w-12 text-primary/40" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Applications and Saved */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* My Applications */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-foreground" />
                    <CardTitle className="text-base">My Applications</CardTitle>
                  </div>
                  <Badge variant="outline">{myApplications.length} Active</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  {myApplications.map((app) => (
                    <div key={app.id} className="flex items-start justify-between py-2 border-b border-border last:border-0">
                      <div>
                        <p className="font-medium text-foreground text-sm">{app.role}</p>
                        <p className="text-xs text-muted-foreground">{app.organization}</p>
                        <p className="text-xs text-muted-foreground">{app.updated}</p>
                      </div>
                      <Badge className={
                        app.statusType === "warning" ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"
                      }>
                        {app.status}
                      </Badge>
                    </div>
                  ))}
                  <Button variant="ghost" size="sm" className="w-full text-primary" onClick={() => navigate("/talent/applications")}>
                    View All Applications
                  </Button>
                </CardContent>
              </Card>

              {/* Saved */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-3">
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-5 w-5 text-foreground" />
                    <CardTitle className="text-base">Saved</CardTitle>
                  </div>
                  <span className="text-sm text-muted-foreground">{savedOpportunities.length} items</span>
                </CardHeader>
                <CardContent className="space-y-3">
                  {savedOpportunities.map((opp) => (
                    <div key={opp.id} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                      <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{opp.role}</p>
                        <p className="text-xs text-muted-foreground">{opp.organization} • {opp.location}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="ghost" size="sm" className="w-full text-primary" onClick={() => navigate("/talent/saved")}>
                    View Saved List
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Explore NGOs */}
            <Card className="bg-gradient-to-br from-muted/50 to-background">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Explore NGOs</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Connect with mission-driven organizations across the country. Filter by cause, location, and impact area.
                    </p>
                    <Button variant="outline" onClick={() => navigate("/registry/search")}>
                      Find Organizations <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Opportunities */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Recommended for you</h2>
                  <p className="text-sm text-muted-foreground">Curated based on your profile and preferences.</p>
                </div>
                <Button variant="ghost" size="sm" className="text-primary" onClick={() => navigate("/talent/opportunities")}>View All</Button>
              </div>

              <div className="space-y-4">
                {recommendedOpportunities.map((opp) => (
                  <Card key={opp.id} className="hover:border-primary/30 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          <Building2 className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="font-semibold text-foreground">{opp.title}</h3>
                              <p className="text-sm text-muted-foreground flex items-center gap-1">
                                {opp.organization} • <MapPin className="h-3 w-3" /> {opp.location}
                              </p>
                            </div>
                            <Button size="sm" onClick={() => navigate(`/talent/opportunities/${opp.id}`)}>View Details</Button>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {opp.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs bg-primary/5">
                                <Sparkles className="h-3 w-3 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                            {opp.verified && (
                              <Badge className="bg-green-100 text-green-700 text-xs">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Verified Partner
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              Posted {opp.posted}
                            </span>
                            <span>•</span>
                            <span>{opp.type}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Profile Strength */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <CardTitle className="text-base">Profile Strength</CardTitle>
                <Button variant="ghost" size="sm" className="text-primary" onClick={() => navigate("/profile/edit")}>
                  Edit Profile
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Completeness</span>
                    <span className="font-semibold text-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    Add your certifications to reach 100% and improve matching.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm font-medium text-foreground">Public Visibility</span>
                  </div>
                  <Switch checked={publicVisibility} onCheckedChange={setPublicVisibility} />
                </div>
                <Button variant="ghost" size="sm" className="w-full text-primary" onClick={() => navigate("/talent/settings")}>
                  Manage Privacy Settings <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Resources & Guides */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Resources & Guides</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {resources.map((resource) => (
                  <div key={resource.id} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-muted flex items-center justify-center shrink-0">
                      <resource.icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{resource.title}</p>
                      <p className="text-xs text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full" onClick={() => navigate("/documentation")}>
                  View All Resources
                </Button>
              </CardContent>
            </Card>

            {/* Need Assistance */}
            <Card className="bg-muted/50">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-2">Need assistance?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Our support team is here to help you navigate the platform.
                </p>
                <Button variant="link" className="p-0 h-auto text-primary" asChild>
                  <Link to="/contact">
                    Contact Support <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
