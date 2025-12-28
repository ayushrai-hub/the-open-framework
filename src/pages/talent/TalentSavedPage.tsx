import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Search, Building2, MapPin, Bookmark, BookmarkX, Clock, Network, ArrowUpDown
} from "lucide-react";

const savedOpportunities = [
  {
    id: "1",
    title: "Digital Literacy Trainer",
    organization: "Pratham Foundation",
    location: "Mumbai, MH",
    type: "Volunteer",
    mode: "On-site",
    via: "CivilSocietyHub",
    color: "bg-blue-500",
    saved: true,
  },
  {
    id: "2",
    title: "Regional Program Coordinator",
    organization: "Rural Development Trust",
    location: "Anantapur, AP",
    type: "Full-time Job",
    mode: "Hybrid",
    via: "Niti Aayog",
    color: "bg-green-500",
    saved: true,
  },
  {
    id: "3",
    title: "Content Translator (Hindi/English)",
    organization: "Khan Academy India",
    location: "Remote",
    type: "Volunteer",
    mode: "Remote Only",
    via: "EduConnect",
    color: "bg-cyan-500",
    saved: true,
  },
  {
    id: "4",
    title: "Community Health Organizer",
    organization: "Swasth Foundation",
    location: "Delhi, DL",
    type: "Full-time Job",
    mode: "Urgent",
    via: "HealthGrid",
    color: "bg-orange-500",
    saved: true,
  },
  {
    id: "5",
    title: "Frontend Developer (React)",
    organization: "Tech for Good",
    location: "Bangalore, KA",
    type: "Full-time Job",
    mode: "Hybrid",
    via: "TechSoup",
    color: "bg-pink-500",
    saved: true,
  },
  {
    id: "6",
    title: "Environmental Surveyor",
    organization: "Green Earth",
    location: "Kerala, KL",
    type: "Volunteer",
    mode: "Field Work",
    via: "CivilSocietyHub",
    color: "bg-gray-400",
    saved: true,
    closed: true,
  },
];

export default function TalentSavedPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("volunteer");
  const [sortBy, setSortBy] = useState("newest");
  const [savedItems, setSavedItems] = useState(savedOpportunities);

  const toggleSave = (id: string) => {
    setSavedItems(prev => prev.filter(item => item.id !== id));
  };

  const getTypeBadgeColor = (type: string) => {
    if (type.includes("Full-time")) return "bg-blue-100 text-blue-700";
    if (type.includes("Volunteer")) return "bg-green-100 text-green-700";
    return "bg-gray-100 text-gray-700";
  };

  const getModeBadgeColor = (mode: string) => {
    if (mode === "Remote Only") return "bg-emerald-100 text-emerald-700";
    if (mode === "Urgent") return "bg-red-100 text-red-600";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <Layout>
      <Helmet>
        <title>My Saved Opportunities | India DPI Platform</title>
        <meta name="description" content="Review and manage the roles you have bookmarked across the federated network." />
      </Helmet>

      <div className="container-wide px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <button onClick={() => navigate("/")} className="hover:text-primary">Home</button>
          <span>/</span>
          <button onClick={() => navigate("/talent/dashboard")} className="hover:text-primary">Talent</button>
          <span>/</span>
          <span className="text-foreground">Saved Opportunities</span>
        </nav>

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">My Saved Opportunities</h1>
            <p className="text-muted-foreground">
              Review and manage the roles you have bookmarked across the federated network.
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            <Clock className="h-4 w-4" />
            History
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search within saved items (e.g. 'teacher', 'remote')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="full-time">Full-time</SelectItem>
              <SelectItem value="volunteer">Volunteer</SelectItem>
              <SelectItem value="internship">Internship</SelectItem>
            </SelectContent>
          </Select>

          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="volunteer">Volunteer</SelectItem>
              <SelectItem value="coordinator">Coordinator</SelectItem>
              <SelectItem value="developer">Developer</SelectItem>
            </SelectContent>
          </Select>

          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Full-time Job" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="full-time">Full-time Job</SelectItem>
              <SelectItem value="part-time">Part-time</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort:</span>
            <Button variant="outline" size="sm" className="gap-1">
              Newest
              <ArrowUpDown className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Saved Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedItems.map((opp) => (
            <Card 
              key={opp.id} 
              className={`relative ${opp.closed ? "opacity-60" : ""}`}
            >
              <CardContent className="p-5">
                {/* Header with Logo and Bookmark */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${opp.color} flex items-center justify-center`}>
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <button 
                    onClick={() => toggleSave(opp.id)}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    {opp.saved ? (
                      <Bookmark className="h-5 w-5 fill-current" />
                    ) : (
                      <BookmarkX className="h-5 w-5" />
                    )}
                  </button>
                </div>

                {/* Closed Badge */}
                {opp.closed && (
                  <Badge variant="secondary" className="absolute top-4 right-12 text-xs">
                    CLOSED
                  </Badge>
                )}

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{opp.title}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    {opp.organization} • <MapPin className="h-3 w-3" /> {opp.location}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge className={getTypeBadgeColor(opp.type)}>{opp.type}</Badge>
                    <Badge className={getModeBadgeColor(opp.mode)}>{opp.mode}</Badge>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Network className="h-3 w-3" />
                    Via {opp.via}
                  </div>
                  {opp.closed ? (
                    <Button variant="secondary" size="sm" disabled>
                      Applications Closed
                    </Button>
                  ) : (
                    <Button size="sm" onClick={() => navigate(`/talent/opportunity/${opp.id}`)}>
                      Apply Now
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <Button variant="outline" size="sm" disabled>←</Button>
          <Button variant="default" size="sm">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <span className="px-2 text-muted-foreground">...</span>
          <Button variant="outline" size="sm">12</Button>
          <Button variant="outline" size="sm">→</Button>
        </div>
      </div>
    </Layout>
  );
}
