import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronRight,
  Download,
  Settings,
  Eye,
  Info,
  TrendingUp,
  Megaphone,
  Target,
  Users,
  CheckCircle,
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { name: "Aug 1", views: 45 },
  { name: "", views: 55 },
  { name: "", views: 65 },
  { name: "Aug 15", views: 75 },
  { name: "", views: 85 },
  { name: "", views: 95 },
  { name: "", views: 55 },
  { name: "Aug 30", views: 125 },
];

const discoveryTerms = [
  { term: '"Rural Health"', percentage: 42 },
  { term: '"Education Karnataka"', percentage: 28 },
  { term: '"Women Empowerment"', percentage: 15 },
  { term: '"Sanitation"', percentage: 10 },
];

const funnelMetrics = [
  { label: "POSTED", value: "12", sublabel: "Opportunities", icon: Megaphone, color: "bg-primary" },
  { label: "VIEWED", value: "840", sublabel: "Total Views", icon: Eye, color: "bg-primary/80" },
  { label: "APPLIED", value: "156", sublabel: "Applications", icon: Target, color: "bg-primary/60", subvalue: "18.5% Conv." },
  { label: "MATCHED", value: "8", sublabel: "Positions Filled", icon: CheckCircle, color: "bg-primary" },
];

const NgoReportsPage = () => {
  const [collectingData, setCollectingData] = useState(true);
  const [timeRange, setTimeRange] = useState("3months");

  return (
    <DashboardLayout>
      <Helmet>
        <title>Impact Analytics - Seva Foundation - India DPI Platform</title>
        <meta name="description" content="Gain insights into your organization's visibility and impact metrics." />
      </Helmet>

      <div className="container-wide py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/ngo/dashboard" className="hover:text-foreground">Dashboard</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Analytics</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Impact Analytics</h1>
            <p className="text-muted-foreground mt-1">
              Gain insights into your organization's visibility. Your data is private, secure, and only visible to you. We prioritize transparency.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Data Settings
            </Button>
            <Button className="bg-primary">
              <Download className="w-4 h-4 mr-2" />
              Export Report (CSV/PDF)
            </Button>
          </div>
        </div>

        {/* Analytics Opt-In Status */}
        <Card className="mb-8">
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Analytics Opt-In Status</p>
                  <p className="text-sm text-muted-foreground">
                    Active. You are currently collecting aggregate visibility metrics.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Collecting Data</span>
                <Switch checked={collectingData} onCheckedChange={setCollectingData} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Profile Visibility Chart */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg">Profile Visibility (Reach)</CardTitle>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Info className="h-4 w-4" />
                </Button>
              </div>
              <Badge variant="outline" className="text-primary">Aggregate Only</Badge>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between mb-4">
                <p className="text-sm text-muted-foreground">Views over the last 30 days.</p>
                <div className="text-right">
                  <p className="text-3xl font-bold">1,240</p>
                  <p className="text-sm text-emerald-600">↗ +12% vs last month</p>
                </div>
              </div>

              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} className="text-xs" />
                    <YAxis axisLine={false} tickLine={false} className="text-xs" />
                    <Tooltip />
                    <Bar dataKey="views" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                <Info className="h-4 w-4" />
                <span>This data is aggregated anonymously. We do not track individual users visiting your profile.</span>
              </div>
            </CardContent>
          </Card>

          {/* Discovery Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg">Discovery</CardTitle>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Info className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-6">
                Top search terms surfacing your profile.
              </p>

              <div className="space-y-4">
                {discoveryTerms.map((term, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{term.term}</span>
                      <span className="text-sm text-muted-foreground">{term.percentage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${term.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="link" className="text-primary p-0 h-auto mt-6">
                View all 24 search terms
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Effectiveness Funnel */}
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">Effectiveness (Application Funnel)</CardTitle>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Info className="h-4 w-4" />
              </Button>
            </div>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-36 h-8">
                <SelectValue placeholder="Time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1month">Last Month</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-6">
              For active opportunities posted in the last quarter.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {funnelMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 rounded-full ${metric.color} mx-auto flex items-center justify-center mb-3`}>
                    <metric.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {metric.label}
                  </p>
                  <p className="text-3xl font-bold mt-1">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.sublabel}</p>
                  {metric.subvalue && (
                    <Badge className="bg-emerald-100 text-emerald-700 border-0 mt-2">
                      {metric.subvalue}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center space-y-4 py-8">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="p-1 rounded bg-muted">
              <TrendingUp className="h-4 w-4" />
            </div>
            <span>Data sourced from the National Registry Node (Federated Architecture)</span>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
            <Link to="/governance" className="text-muted-foreground hover:text-primary">Data Governance Standards</Link>
            <Link to="/settings" className="text-muted-foreground hover:text-primary">Opt-Out Preferences</Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NgoReportsPage;
