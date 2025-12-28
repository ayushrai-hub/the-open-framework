import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search, Building2, MapPin, CheckCircle, X, ExternalLink
} from "lucide-react";

const opportunities = [
  {
    id: "1",
    title: "Program Manager - Rural Education",
    organization: "Pratham Foundation",
    type: "Full-time",
    location: "Mumbai, MH",
    compensation: "₹8-10 LPA",
    posted: "12 Oct 2023",
    verified: true,
  },
  {
    id: "2",
    title: "Volunteer Teacher - English",
    organization: "Teach For India",
    type: "Volunteer",
    location: "New Delhi",
    compensation: "Unpaid",
    posted: "11 Oct 2023",
    verified: true,
  },
  {
    id: "3",
    title: "Research Associate - Policy",
    organization: "Centre for Policy Research",
    type: "Internship",
    location: "Remote",
    compensation: "₹15-20k / mo",
    posted: "10 Oct 2023",
    verified: true,
  },
  {
    id: "4",
    title: "District Coordinator",
    organization: "SEWA",
    type: "Gig",
    location: "Ahmedabad, GJ",
    compensation: "₹25k / mo",
    posted: "09 Oct 2023",
    verified: true,
  },
  {
    id: "5",
    title: "Senior Director - Operations",
    organization: "Akshaya Patra",
    type: "Full-time",
    location: "Bangalore, KA",
    compensation: "₹15-20 LPA",
    posted: "08 Oct 2023",
    verified: true,
  },
];

const roleTypes = ["Full-time", "Volunteer", "Internship", "Gig / Contract"];
const causeAreas = ["Education", "Climate Action", "Healthcare", "Gender Equality"];
const compensationOptions = ["Any", "Paid (Market)", "Paid (Stipend)", "Unpaid / Volunteer"];

export default function TalentOpportunitiesPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedRoleTypes, setSelectedRoleTypes] = useState<string[]>(["Full-time"]);
  const [selectedCauses, setSelectedCauses] = useState<string[]>([]);
  const [locationQuery, setLocationQuery] = useState("");
  const [remoteFriendly, setRemoteFriendly] = useState(false);
  const [compensation, setCompensation] = useState("any");
  const [activeFilters, setActiveFilters] = useState<string[]>(["Full-time"]);
  const [sortBy, setSortBy] = useState("newest");

  const toggleRoleType = (type: string) => {
    setSelectedRoleTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleCause = (cause: string) => {
    setSelectedCauses(prev => 
      prev.includes(cause) ? prev.filter(c => c !== cause) : [...prev, cause]
    );
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(prev => prev.filter(f => f !== filter));
    setSelectedRoleTypes(prev => prev.filter(t => t !== filter));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setSelectedRoleTypes([]);
    setSelectedCauses([]);
    setLocationQuery("");
    setRemoteFriendly(false);
    setCompensation("any");
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "Full-time": return "bg-blue-100 text-blue-700";
      case "Volunteer": return "bg-green-100 text-green-700";
      case "Internship": return "bg-purple-100 text-purple-700";
      case "Gig": return "bg-amber-100 text-amber-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Find Opportunities in Civil Society | India DPI Platform</title>
        <meta name="description" content="Explore verified roles across the federated network. Listings are displayed by date to ensure neutrality and equal visibility for all organizations." />
      </Helmet>

      {/* Registry Banner */}
      <div className="bg-primary/5 border-b border-primary/20 py-2">
        <div className="container-wide px-4">
          <p className="text-sm text-primary flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Connected to Node: India Civil Society Registry (Verified)
          </p>
        </div>
      </div>

      <div className="container-wide px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Opportunities in Civil Society</h1>
          <p className="text-muted-foreground">
            Explore verified roles across the federated network. Listings are displayed by date to ensure neutrality 
            and equal visibility for all organizations.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by role title, skill, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-base"
              />
            </div>
            <Button size="lg" className="h-14 px-8">Search</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Filters</h3>
                  <Button variant="link" size="sm" onClick={clearAllFilters} className="text-primary p-0 h-auto">
                    Reset
                  </Button>
                </div>

                {/* Role Type */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Role Type</h4>
                  <div className="space-y-2">
                    {roleTypes.map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox
                          checked={selectedRoleTypes.includes(type)}
                          onCheckedChange={() => toggleRoleType(type)}
                        />
                        <span className="text-sm text-foreground">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Cause Area */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Cause Area</h4>
                  <div className="relative mb-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search causes..." className="pl-9 h-9" />
                  </div>
                  <div className="space-y-2">
                    {causeAreas.map((cause) => (
                      <label key={cause} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox
                          checked={selectedCauses.includes(cause)}
                          onCheckedChange={() => toggleCause(cause)}
                        />
                        <span className="text-sm text-foreground">{cause}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Location</h4>
                  <Input
                    placeholder="City or State"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                  />
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm text-foreground">Remote Friendly</span>
                    <Switch checked={remoteFriendly} onCheckedChange={setRemoteFriendly} />
                  </div>
                </div>

                {/* Compensation */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Compensation</h4>
                  <div className="space-y-2">
                    {compensationOptions.map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox
                          checked={compensation === option.toLowerCase().replace(/\s/g, "-")}
                          onCheckedChange={() => setCompensation(option.toLowerCase().replace(/\s/g, "-"))}
                        />
                        <span className="text-sm text-foreground">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="text-foreground font-medium">{opportunities.length}</span> verified opportunities
                </p>
                {activeFilters.length > 0 && (
                  <div className="flex items-center gap-2">
                    {activeFilters.map((filter) => (
                      <Badge key={filter} variant="secondary" className="gap-1">
                        {filter}
                        <button onClick={() => removeFilter(filter)}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                    <Button variant="link" size="sm" className="text-primary p-0 h-auto" onClick={clearAllFilters}>
                      Clear all
                    </Button>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First (Default)</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="compensation">Compensation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Table */}
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Role & Organization
                      </th>
                      <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Type
                      </th>
                      <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Location
                      </th>
                      <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Compensation
                      </th>
                      <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Posted
                      </th>
                      <th className="text-right p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {opportunities.map((opp) => (
                      <tr key={opp.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                        <td className="p-4">
                          <div>
                            <p className="font-medium text-foreground">{opp.title}</p>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              {opp.organization}
                              {opp.verified && <CheckCircle className="h-3 w-3 text-primary" />}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className={getTypeBadgeColor(opp.type)}>{opp.type}</Badge>
                        </td>
                        <td className="p-4">
                          <span className="text-foreground">{opp.location}</span>
                        </td>
                        <td className="p-4">
                          <span className="text-primary">{opp.compensation}</span>
                        </td>
                        <td className="p-4">
                          <span className="text-muted-foreground">{opp.posted}</span>
                        </td>
                        <td className="p-4 text-right">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => navigate(`/talent/opportunity/${opp.id}`)}
                          >
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">Showing 1-5 of {opportunities.length}</p>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="sm" disabled>←</Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <span className="px-2 text-muted-foreground">...</span>
                <Button variant="outline" size="sm">12</Button>
                <Button variant="outline" size="sm">→</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
