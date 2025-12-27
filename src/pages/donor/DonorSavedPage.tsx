import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bookmark, Search, Download, MapPin, Pencil, Trash2, CheckCircle } from "lucide-react";

const savedNgos = [
  {
    id: "1",
    name: "Pratham Education Foundation",
    location: "Mumbai, Maharashtra",
    tags: ["Education", "FCRA Compliant"],
    description: "Innovative learning organization created to improve the quality of education in India.",
    verifiedBy: "NITI Aayog",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Goonj",
    location: "New Delhi, Delhi",
    tags: ["Disaster Relief", "Circular Economy"],
    description: "Turning urban surplus material into a tool for rural development and disaster relief across...",
    verifiedBy: "GiveIndia",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "The Akshaya Patra",
    location: "Bengaluru, Karnataka",
    tags: ["Nutrition", "Children"],
    description: "World's largest NGO-run mid-day meal programme serving wholesome school lunch.",
    verifiedBy: "CSR Hub",
    image: "/placeholder.svg"
  }
];

const savedSearches = [
  {
    id: "1",
    name: "Water Conservation + Maharashtra",
    filters: "CSR Eligible",
    savedDate: "Oct 12, 2023"
  },
  {
    id: "2",
    name: "Women Empowerment + North East India",
    filters: "Verified only",
    savedDate: "Nov 01, 2023"
  }
];

export default function DonorSavedPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ngos");
  const [sector, setSector] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  return (
    <DashboardLayout role="donor">
      <Helmet>
        <title>My Saved Items | Donor Dashboard</title>
        <meta name="description" content="Access your bookmarked NGOs, manage your custom search filters, and track updates from your favorite organizations." />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Saved Items</h1>
          <p className="text-muted-foreground">
            Access your bookmarked NGOs, manage your custom search filters, and track updates from your favorite organizations.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="border-b border-border w-full justify-start rounded-none bg-transparent p-0 h-auto">
            <TabsTrigger
              value="ngos"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3"
            >
              <Bookmark className="h-4 w-4 mr-2" />
              Saved NGOs
              <Badge variant="secondary" className="ml-2">12</Badge>
            </TabsTrigger>
            <TabsTrigger
              value="searches"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-3"
            >
              <Search className="h-4 w-4 mr-2" />
              Saved Searches
              <Badge variant="secondary" className="ml-2">4</Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ngos" className="mt-6">
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex gap-3">
                <Select value={sector} onValueChange={setSector}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="All Sectors" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sectors</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="health">Healthcare</SelectItem>
                    <SelectItem value="environment">Environment</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Recently Added" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Recently Added</SelectItem>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="location">Location</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export List
              </Button>
            </div>

            {/* NGO Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedNgos.map((ngo) => (
                <Card key={ngo.id} className="overflow-hidden group">
                  <div className="relative h-40 bg-gradient-to-br from-muted to-muted/50">
                    <img src={ngo.image} alt="" className="w-full h-full object-cover opacity-80" />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/90 text-foreground text-xs">
                        <CheckCircle className="h-3 w-3 mr-1 text-green-600" />
                        {ngo.verifiedBy}
                      </Badge>
                    </div>
                    <button className="absolute top-3 right-3 w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center">
                      <Bookmark className="h-4 w-4 fill-current" />
                    </button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded bg-muted flex items-center justify-center text-sm font-medium shrink-0">
                        {ngo.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{ngo.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {ngo.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {ngo.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{ngo.description}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">Donate</Button>
                      <Button variant="outline" size="sm" className="flex-1" onClick={() => navigate(`/registry/profile/${ngo.id}`)}>
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="searches" className="mt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Recent Saved Searches</h3>
              {savedSearches.map((search) => (
                <Card key={search.id}>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Search className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{search.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          Filters: {search.filters} • Saved: {search.savedDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm">Run Search</Button>
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
