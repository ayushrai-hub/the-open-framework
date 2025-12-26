import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Sliders,
  X,
  Bookmark,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Calendar,
  Info,
  Shield,
  ChevronDown,
} from "lucide-react";

const opportunities = [
  {
    id: 1,
    donor: "Tata Trusts",
    verified: true,
    title: "Rural Sanitation Infrastructure Grant 2024",
    match: "95% Match",
    amount: "₹10L - ₹25L",
    duration: "12-24 Months",
    sector: "WASH",
    location: "Karnataka",
    deadline: "Oct 30, 2024",
    saved: false,
  },
  {
    id: 2,
    donor: "Azim Premji Foundation",
    verified: true,
    title: "Teacher Training Capacity Building",
    match: "88% Match",
    amount: "₹25L - ₹50L",
    duration: "3 Years",
    sector: "Education",
    location: "Pan-India",
    deadline: "Nov 15, 2024",
    saved: false,
  },
  {
    id: 3,
    donor: "Bill & Melinda Gates Foundation",
    verified: true,
    title: "Digital Health Innovation Pilot",
    match: "72% Match",
    amount: "₹50L+",
    duration: "18 Months",
    sector: "Health",
    location: "Selected Districts",
    deadline: "Dec 01, 2024",
    saved: false,
  },
];

const applications = [
  { name: "Clean Water Project Ph.2", donor: "GlobalGiving", status: "Under Review", statusColor: "bg-amber-100 text-amber-700" },
  { name: "Women Livelihood Grant", donor: "NABARD", status: "Action Required", statusColor: "bg-red-100 text-red-700" },
  { name: "Rural Digital Literacy", donor: "Infosys Foundation", status: "Draft Saved", statusColor: "bg-muted text-muted-foreground" },
];

const tabs = [
  { label: "Recommended for You", icon: Sparkles, active: true },
  { label: "New Arrivals", active: false },
  { label: "Saved", active: false },
];

const NgoFundingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Recommended for You");
  const [savedOpportunities, setSavedOpportunities] = useState<number[]>([]);

  const toggleSave = (id: number) => {
    setSavedOpportunities((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <DashboardLayout>
      <Helmet>
        <title>Funding Discovery - India DPI Platform</title>
        <meta name="description" content="Discover funding opportunities from verified federated partners for registered entities." />
      </Helmet>

      <div className="container-wide py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Funding Discovery</h1>
            <p className="text-muted-foreground mt-1">
              Aggregated opportunities from verified federated partners (CSR, Govt, Philanthropy) for registered entities.
            </p>
          </div>
          <Button variant="outline">
            <Sliders className="w-4 h-4 mr-2" />
            Manage Saved Searches
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search */}
            <Card>
              <CardContent className="pt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search grants by keyword, donor, or region..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <Select defaultValue="csr">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csr">CSR Funding</SelectItem>
                      <SelectItem value="govt">Government</SelectItem>
                      <SelectItem value="philanthropy">Philanthropy</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="education">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="health">Healthcare</SelectItem>
                      <SelectItem value="environment">Environment</SelectItem>
                      <SelectItem value="livelihoods">Livelihoods</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="karnataka">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="pan-india">Pan-India</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant="outline">
                    <Sliders className="w-4 h-4 mr-2" />
                    More Filters
                  </Button>

                  <Button variant="ghost" className="text-primary">
                    Clear all
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <div className="flex items-center gap-4 border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(tab.label)}
                  className={`flex items-center gap-2 pb-3 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === tab.label
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.icon && <tab.icon className="h-4 w-4" />}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Opportunity Cards */}
            <div className="space-y-4">
              {opportunities.map((opp) => (
                <Card key={opp.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                          <span className="text-lg font-bold text-muted-foreground">
                            {opp.donor.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm text-muted-foreground">{opp.donor}</p>
                            {opp.verified && (
                              <Badge className="bg-emerald-100 text-emerald-700 border-0 text-xs">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                VERIFIED
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-semibold text-lg mt-1">{opp.title}</h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-primary/10 text-primary border-0 flex items-center gap-1">
                          <Sparkles className="h-3 w-3" />
                          {opp.match}
                        </Badge>
                        <Button variant="link" className="text-primary p-0 h-auto text-xs">
                          Why this match?
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">AMOUNT</p>
                        <p className="font-medium">{opp.amount}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">DURATION</p>
                        <p className="font-medium">{opp.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">SECTOR</p>
                        <p className="font-medium">{opp.sector}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">LOCATION</p>
                        <p className="font-medium">{opp.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        Applications open until {opp.deadline}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          onClick={() => toggleSave(opp.id)}
                          className={savedOpportunities.includes(opp.id) ? "text-primary" : ""}
                        >
                          <Bookmark className={`h-4 w-4 mr-2 ${savedOpportunities.includes(opp.id) ? "fill-current" : ""}`} />
                          Save
                        </Button>
                        <Button className="bg-primary">
                          View Details
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="link" className="text-primary">
                Load More Opportunities
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Your Applications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Applications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{app.name}</p>
                      <p className="text-xs text-muted-foreground">{app.donor}</p>
                    </div>
                    <Badge className={app.statusColor}>{app.status}</Badge>
                  </div>
                ))}
                <Button variant="link" className="text-primary p-0 h-auto w-full justify-start">
                  View Application Dashboard <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Trust Badge */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Trusted & Neutral</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Our algorithms are designed for transparent discovery, prioritizing your organization's fit over speed.
                    </p>
                    <Button variant="link" className="text-primary p-0 h-auto text-sm mt-2">
                      How matching works
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Sources */}
            <Card>
              <CardContent className="pt-6">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  DATA SOURCED FROM FEDERATED PARTNERS
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">NITI Aayog</Badge>
                  <Badge variant="outline">CSR India</Badge>
                  <Badge variant="outline">GuideStar</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NgoFundingPage;
