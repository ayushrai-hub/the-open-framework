import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  X,
  SlidersHorizontal,
  Building2,
  MapPin,
  GraduationCap,
  Users,
  Leaf,
  Heart,
  CheckCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";

const searchResults = [
  {
    id: 1,
    name: "Seva Foundation India",
    status: "Active",
    regNo: "1234/MH/2020",
    source: "NITI Aayog (Darpan)",
    location: "Pune, Maharashtra",
    sectors: ["Education", "Women Empowerment"],
    updated: "Oct 2023",
    verified: true,
  },
  {
    id: 2,
    name: "Global Learning Initiative",
    status: "Active",
    regNo: "DL/2019/5561",
    source: "Ministry of Corp. Affairs",
    location: "New Delhi, Delhi",
    sectors: ["Education", "Skill Development"],
    updated: "Sep 2023",
    verified: true,
  },
  {
    id: 3,
    name: "Vidya Rural Development Society",
    status: "Pending Verification",
    regNo: "KAR/2209/2021",
    source: "State Registry (Karnataka)",
    location: "Bangalore Rural, Karnataka",
    sectors: ["Education"],
    updated: "Jan 2024",
    verified: false,
  },
  {
    id: 4,
    name: "TechnoServe India",
    status: "Active",
    regNo: "887/MUM/2015",
    source: "NITI Aayog (Darpan)",
    location: "Mumbai, Maharashtra",
    sectors: ["Livelihoods", "Education"],
    updated: "Dec 2023",
    verified: true,
  },
];

const sectorIcons: Record<string, typeof GraduationCap> = {
  Education: GraduationCap,
  "Skill Development": Users,
  "Women Empowerment": Users,
  Livelihoods: Leaf,
  Healthcare: Heart,
};

const RegistrySearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("Education");
  const [stateFilter, setStateFilter] = useState("maharashtra");
  const [sectorFilter, setSectorFilter] = useState("education");
  const [statusFilter, setStatusFilter] = useState("active");
  const [sortBy, setSortBy] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Search Registry - National Civil Society Registry</title>
        <meta name="description" content="Search across federated databases of verified NGOs and civil society organizations in India." />
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container-wide">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <svg className="h-5 w-5 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-semibold text-lg">National Civil Society Registry</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
              <Link to="/ecosystem/network" className="text-sm text-muted-foreground hover:text-foreground">Partners</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link to="/login" className="text-sm text-primary hover:underline">Login</Link>
              <div className="w-8 h-8 rounded-full bg-amber-100 border-2 border-amber-300" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container-wide py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/registry" className="hover:text-primary">Registry</Link>
          <span>/</span>
          <span className="text-foreground">Search Results</span>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">Search Results</h1>
          <p className="text-muted-foreground">
            Showing results for '<span className="text-primary font-medium">{searchQuery}</span>' across federated databases.
          </p>
        </div>

        {/* Search Box */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, ID, or sector..."
                  className="pl-10 pr-10"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <X className="h-4 w-4 text-muted-foreground" />
                  </button>
                )}
              </div>
              <Button>Search</Button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <Select value={stateFilter} onValueChange={setStateFilter}>
                <SelectTrigger className="w-44">
                  <span>State: </span>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="karnataka">Karnataka</SelectItem>
                  <SelectItem value="all">All States</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sectorFilter} onValueChange={setSectorFilter}>
                <SelectTrigger className="w-44">
                  <span>Sector: </span>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="environment">Environment</SelectItem>
                  <SelectItem value="livelihoods">Livelihoods</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-36">
                  <span>Status: </span>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="all">All</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm" className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                More Filters
              </Button>

              <div className="flex-1" />

              <span className="text-sm text-muted-foreground">1,240 results found</span>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-4">
          {searchResults.map((result) => (
            <Card key={result.id} className="hover:shadow-md transition-shadow">
              <CardContent className="py-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg">{result.name}</h3>
                      <Badge
                        variant={result.verified ? "default" : "outline"}
                        className={result.verified ? "bg-emerald-100 text-emerald-700 border-0" : "text-amber-600 border-amber-300"}
                      >
                        {result.verified ? (
                          <>
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Active
                          </>
                        ) : (
                          <>
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Pending Verification
                          </>
                        )}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        Reg No: {result.regNo}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        Source: {result.source}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {result.location}
                      </Badge>
                      {result.sectors.map((sector) => {
                        const Icon = sectorIcons[sector] || GraduationCap;
                        return (
                          <Badge key={sector} variant="outline" className="flex items-center gap-1 text-primary border-primary/30">
                            <Icon className="h-3 w-3" />
                            {sector}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs text-muted-foreground">Updated: {result.updated}</span>
                    <Link to={`/registry/profile/${result.id}`}>
                      <Button variant="outline" size="sm">View Profile</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-8">
          <p className="text-sm text-muted-foreground">
            Showing 1 to 10 of 1,240 results
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="default" size="sm" className="w-8 h-8">1</Button>
            <Button variant="outline" size="sm" className="w-8 h-8">2</Button>
            <Button variant="outline" size="sm" className="w-8 h-8">3</Button>
            <span className="px-2">...</span>
            <Button variant="outline" size="sm" className="w-8 h-8">12</Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegistrySearchPage;
