import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Edit,
  CheckCircle,
  Eye,
  ExternalLink,
  ArrowRight,
  AlertCircle,
  DollarSign,
  MessageSquare,
  TrendingUp,
  FileText,
  Settings,
  Users,
  Shield,
  ChartBar,
  HelpCircle,
  Clock,
  Calendar,
  LayoutGrid,
  Building,
  Map,
} from "lucide-react";

const NgoDashboardPage = () => {
  return (
    <DashboardLayout>
      <Helmet>
        <title>NGO Dashboard - India DPI Platform</title>
        <meta name="description" content="Manage your NGO operations, compliance, and growth from a central hub." />
      </Helmet>

      <div className="container-wide py-8">
        {/* Status Banner */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Badge className="bg-emerald-100 text-emerald-700 border-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
            Active
          </Badge>
          <Badge variant="outline" className="border-primary/30 text-primary">
            <Shield className="w-3 h-3 mr-1" />
            Level 2 Verified
          </Badge>
        </div>

        {/* Welcome Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Namaste, Seva Foundation</h1>
            <p className="text-muted-foreground mt-1">
              Welcome to your central hub for operations, compliance, and growth.
            </p>
          </div>
          <Button variant="outline" className="self-start">
            <HelpCircle className="w-4 h-4 mr-2" />
            Help Center
          </Button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Profile & Actions */}
          <div className="lg:col-span-3 space-y-6">
            {/* Organization Profile Card */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-medium">Organization Profile</CardTitle>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Building className="h-4 w-4 text-primary" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Last synced: Today 09:30 AM</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Profile Completion</span>
                    <span className="text-sm font-medium text-primary">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Adding 'Impact Stories' will reach 90%.
                  </p>
                </div>

                <Link to="/ngo/profile">
                  <Button className="w-full">
                    <Edit className="w-4 h-4 mr-2" />
                    NGO Profile Editor
                  </Button>
                </Link>
                <Link to="/ngo/compliance">
                  <Button variant="outline" className="w-full">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Compliance Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Account & Security */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-muted">
                      <Shield className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Account & Security</p>
                      <p className="text-xs text-muted-foreground">2FA Enabled • Last login 2h ago</p>
                    </div>
                  </div>
                  <Link to="/ngo/settings">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Public Visibility */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Public Visibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/ngo/profile/preview" className="flex items-center justify-between text-sm hover:bg-muted p-2 rounded-md transition-colors">
                  <span className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                    Public NGO Profile View
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </Link>
                <Link to="/ngo/registry" className="flex items-center justify-between text-sm hover:bg-muted p-2 rounded-md transition-colors">
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    NGO Registry Listing
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
                <Link to="/ngo/search-preview" className="flex items-center justify-between text-sm hover:bg-muted p-2 rounded-md transition-colors">
                  <span className="flex items-center gap-2">
                    <LayoutGrid className="h-4 w-4 text-muted-foreground" />
                    Search Results Preview
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
                <Link to="/ecosystem/map" className="flex items-center justify-between text-sm hover:bg-muted p-2 rounded-md transition-colors">
                  <span className="flex items-center gap-2">
                    <Map className="h-4 w-4 text-muted-foreground" />
                    Network Map
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Center Column - Opportunities & Funding */}
          <div className="lg:col-span-5 space-y-6">
            {/* Funding Opportunities */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-medium flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    Funding Opportunities
                  </CardTitle>
                  <Link to="/ngo/funding">
                    <Button variant="link" size="sm" className="text-primary p-0 h-auto">
                      View All Listings
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/ngo/funding/1" className="block p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <Badge className="bg-emerald-100 text-emerald-700 border-0 text-xs">Grant</Badge>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h4 className="font-medium mt-2">Digital Literacy Expansion FY24</h4>
                  <p className="text-sm text-muted-foreground">Ministry of Education • Deadline: 15 Oct</p>
                </Link>

                <Link to="/ngo/funding/2" className="block p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <Badge className="bg-amber-100 text-amber-700 border-0 text-xs">CSR Initiative</Badge>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h4 className="font-medium mt-2">Tech for Good Partnership</h4>
                  <p className="text-sm text-muted-foreground">Infosys Foundation • Deadline: Rolling</p>
                </Link>

                <p className="text-sm text-muted-foreground text-center py-2">
                  Complete your profile to unlock 3 more matched opportunities.
                </p>
              </CardContent>
            </Card>

            {/* Funding & Donors Stats */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium">Funding & Donors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <p className="text-3xl font-bold">3</p>
                    <p className="text-sm text-muted-foreground">ACTIVE GRANTS</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <p className="text-3xl font-bold">1</p>
                    <p className="text-sm text-muted-foreground">NEW INQUIRY</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link to="/ngo/grants" className="flex-1">
                    <Button variant="outline" className="w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      Grant Tracker
                    </Button>
                  </Link>
                  <Link to="/ngo/donors" className="flex-1">
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Donor Hub
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Talent Management */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">NGO Talent Management</p>
                      <p className="text-sm text-muted-foreground">
                        You have <span className="text-primary font-medium">2 active</span> job postings.
                      </p>
                    </div>
                  </div>
                  <Link to="/ngo/talent">
                    <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
                      Manage Talent
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Analytics & Notifications */}
          <div className="lg:col-span-4 space-y-6">
            {/* Analytics Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Profile Views (Last 30 days)</p>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-primary">128</span>
                    <span className="text-sm text-emerald-600 mb-1">▲ 12%</span>
                  </div>
                </div>
                <div className="flex items-end gap-1 h-16 mt-4">
                  {[40, 55, 45, 60, 75, 65, 80, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/80 rounded-sm"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <Link to="/ngo/reports">
                  <Button variant="link" className="p-0 h-auto text-primary mt-4">
                    View Full Reports
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Notifications */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-medium">Recent Notifications</CardTitle>
                  <Button variant="link" size="sm" className="text-primary p-0 h-auto">
                    Mark read
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="text-sm font-medium">Compliance Alert</p>
                    <p className="text-xs text-muted-foreground">
                      FCRA annual return filing window opens in 3 days.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2" />
                  <div>
                    <p className="text-sm font-medium">New Message</p>
                    <p className="text-xs text-muted-foreground">
                      Support team replied to your ticket #9921.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground mt-2" />
                  <div>
                    <p className="text-sm font-medium">System Update</p>
                    <p className="text-xs text-muted-foreground">
                      Platform maintenance scheduled for Sunday.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                  </div>
                </div>

                <Link to="/ngo/messages" className="block">
                  <Button variant="ghost" className="w-full justify-center text-muted-foreground">
                    Go to Messages
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NgoDashboardPage;
