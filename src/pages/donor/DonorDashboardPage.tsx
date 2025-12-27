import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import {
  Search, ArrowRight, Bookmark, BarChart3, Settings, FileText,
  MessageSquare, AlertTriangle, CheckCircle, Clock, RefreshCw,
  ExternalLink, ChevronRight, Sparkles, TrendingUp, Info
} from "lucide-react";

const suggestedMatches = [
  {
    id: "1",
    initial: "S",
    name: "Sankalp Education Fdn.",
    location: "Patna, Bihar",
    matchScore: 98,
    reason: 'High alignment with your "Rural Education" goal in Aspirational Districts.'
  },
  {
    id: "2",
    initial: "G",
    name: "Green Earth Initiative",
    location: "Guwahati, Assam",
    matchScore: 92,
    reason: "Strong track record in tribal welfare and environmental sustainability."
  }
];

const savedNgos = [
  { id: "1", initial: "J", name: "Jan Seva Trust", status: "FCRA Valid", note: "Last Audit Mar '23" },
  { id: "2", initial: "W", name: "Women's League", status: "Compliance Alert", note: "2 days ago", alert: true },
  { id: "3", initial: "R", name: "Rural Tech", status: "Pending Review", note: "" }
];

const recentActivity = [
  { id: "1", icon: FileText, title: "Annual Report Uploaded", description: "Jan Seva Trust updated their FY23-24 documentation.", source: "MCA", time: "2h ago" },
  { id: "2", icon: MessageSquare, title: "New Message", description: "Response from Women's Empowerment League regarding your inquiry #INQ-2024.", time: "Yesterday" },
  { id: "3", icon: AlertTriangle, title: "Compliance Alert", description: "Rural Tech Initiative FCRA validity expiring in 30 days.", time: "2d ago", warning: true },
  { id: "4", icon: CheckCircle, title: "Grant Approved", description: "Your grant for EduCare India has been processed.", time: "3d ago", success: true }
];

export default function DonorDashboardPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/registry/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <DashboardLayout role="donor">
      <Helmet>
        <title>Donor Dashboard | India DPI Platform</title>
        <meta name="description" content="Manage your due diligence, grants, and discovery in one trusted hub." />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Welcome back, {user?.firstName || "Amit"}
            </h1>
            <p className="text-muted-foreground">
              Manage your due diligence, grants, and discovery in one trusted hub.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            Last login: Today, 09:30 AM
          </p>
        </div>

        {/* NGO Search & Discovery */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">NGO Search & Discovery</CardTitle>
            </div>
            <Link to="/registry/search" className="text-sm text-primary hover:underline flex items-center gap-1">
              Go to Discovery Page <ArrowRight className="h-4 w-4" />
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Search by Name, PAN, Darpan ID, or Region"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1"
              />
              <Button onClick={handleSearch}>Search</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Sector", "Geography", "Compliance Status", "Budget Size"].map((filter) => (
                <Button key={filter} variant="outline" size="sm">{filter}</Button>
              ))}
              <Button variant="ghost" size="sm" className="text-primary">
                <Settings className="h-4 w-4 mr-1" />
                Advanced Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Suggested Matches */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-foreground">Suggested Matches</h2>
                <Badge variant="outline" className="text-xs">OPT-IN</Badge>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
                  <Info className="h-4 w-4" /> Explain Logic
                </button>
                <Link to="/donor/discover" className="text-sm text-primary hover:underline">View All Matches</Link>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {suggestedMatches.map((match) => (
                <Card key={match.id} className="hover:border-primary/30 transition-colors cursor-pointer" onClick={() => navigate(`/registry/profile/${match.id}`)}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                          {match.initial}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{match.name}</p>
                          <p className="text-sm text-muted-foreground">{match.location}</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        {match.matchScore}% Match
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{match.reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Saved & Watchlist + Grant Tracker */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Saved & Watchlist */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-3">
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-5 w-5 text-foreground" />
                    <CardTitle className="text-base">Saved & Watchlist</CardTitle>
                  </div>
                  <Link to="/donor/saved" className="text-sm text-primary hover:underline">View All</Link>
                </CardHeader>
                <CardContent className="space-y-3">
                  {savedNgos.map((ngo) => (
                    <div key={ngo.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-muted flex items-center justify-center text-sm font-medium">
                          {ngo.initial}
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">{ngo.name}</p>
                          <p className={`text-xs ${ngo.alert ? "text-amber-600" : "text-muted-foreground"}`}>
                            {ngo.status} {ngo.note && `• ${ngo.note}`}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                  <Button variant="ghost" size="sm" className="w-full text-primary mt-2">
                    + Add to watchlist
                  </Button>
                </CardContent>
              </Card>

              {/* Grant & Inquiry Tracker */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-foreground" />
                    <CardTitle className="text-base">Grant & Inquiry Tracker</CardTitle>
                  </div>
                  <Link to="/donor/grants" className="text-sm text-primary hover:underline">Dashboard</Link>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">2</p>
                        <p className="text-sm text-muted-foreground">Active Grants</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-amber-100 flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">5</p>
                        <p className="text-sm text-muted-foreground">Pending Inquiries</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => navigate("/donor/communications")}>Go to Hub</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:border-primary/30 transition-colors">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Reports & Analytics</h3>
                    <p className="text-sm text-muted-foreground mb-3">Access comprehensive sector analysis and export your data.</p>
                    <div className="flex gap-3 text-sm">
                      <Link to="/donor/reports" className="text-primary hover:underline">New Report</Link>
                      <span className="text-muted-foreground">|</span>
                      <Link to="/donor/reports" className="text-muted-foreground hover:text-foreground">View History</Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/30 transition-colors">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <Settings className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Account Settings</h3>
                    <p className="text-sm text-muted-foreground mb-3">Manage organization profile, team access, and notifications.</p>
                    <Link to="/donor/settings" className="text-sm text-primary hover:underline">Manage Account</Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Sidebar - Recent Activity */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-foreground" />
                  <CardTitle className="text-base">Recent Activity</CardTitle>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <RefreshCw className="h-4 w-4" />
                </button>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 ${
                      activity.warning ? "bg-amber-100" : 
                      activity.success ? "bg-green-100" : "bg-muted"
                    }`}>
                      <activity.icon className={`h-4 w-4 ${
                        activity.warning ? "text-amber-600" : 
                        activity.success ? "text-green-600" : "text-muted-foreground"
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-medium text-foreground text-sm">{activity.title}</p>
                        <span className="text-xs text-muted-foreground shrink-0">{activity.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{activity.description}</p>
                      {activity.source && (
                        <span className="inline-flex items-center gap-1 mt-1 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                          Source: {activity.source}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                <Link to="/donor/activity" className="text-sm text-primary hover:underline flex items-center justify-center gap-1 pt-2">
                  View Full Timeline
                </Link>
              </CardContent>
            </Card>

            {/* Impact Analytics Beta */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-5">
                <h3 className="font-semibold mb-2">New: Impact Analytics Beta</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get deeper insights into sector-wide funding trends across India.
                </p>
                <Button variant="secondary" size="sm">
                  Explore Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
