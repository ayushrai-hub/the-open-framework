import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  RefreshCw,
  Plus,
  Minus,
  Crosshair,
  X,
  CheckCircle,
  Circle,
} from "lucide-react";

const sectors = [
  { label: "Education", count: "4.2k", checked: true },
  { label: "Healthcare", count: "3.1k", checked: true },
  { label: "Environment", count: "1.8k", checked: false },
  { label: "Livelihoods", count: "950", checked: false },
];

const verification = [
  { label: "Verified Partner", icon: CheckCircle, checked: true },
  { label: "Registered Only", icon: Circle, checked: false },
];

const EcosystemMapPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState([
    { label: "Sector: Education", removable: true },
    { label: "Region: All India", removable: true },
  ]);

  const removeFilter = (label: string) => {
    setActiveFilters((prev) => prev.filter((f) => f.label !== label));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Ecosystem Map - India DPI Platform</title>
        <meta name="description" content="Filter organizations by region, sector, and status. Explore the civil society ecosystem." />
      </Helmet>

      {/* Minimal Header for Map View */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container-wide">
          <div className="flex h-14 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <svg className="h-4 w-4 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-semibold">DPI Platform</span>
            </Link>

            <nav className="flex items-center gap-6">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link>
              <Link to="/ecosystem/map" className="text-sm font-medium text-primary border-b-2 border-primary pb-1">
                Ecosystem
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link to="/ecosystem/ngos">
                <Button variant="outline" size="sm">Register</Button>
              </Link>
              <Link to="/login">
                <Button size="sm">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Filters */}
        <aside className="w-72 border-r border-border bg-muted/20 p-6 flex flex-col">
          <div className="mb-6">
            <h1 className="text-xl font-bold">Ecosystem Map</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Filter organizations by region, sector, and status.
            </p>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search state or district..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          {/* Sectors */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider">SECTORS</h3>
              <Button variant="link" className="text-primary p-0 h-auto text-xs">
                Select All
              </Button>
            </div>
            <div className="space-y-2">
              {sectors.map((sector) => (
                <label key={sector.label} className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Checkbox defaultChecked={sector.checked} />
                    <span className="text-sm">{sector.label}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{sector.count}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Verification */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">VERIFICATION</h3>
            <div className="space-y-2">
              {verification.map((item) => (
                <label key={item.label} className="flex items-center gap-2 cursor-pointer">
                  <Checkbox defaultChecked={item.checked} />
                  <item.icon className={`h-4 w-4 ${item.checked ? "text-emerald-500" : "text-amber-500"}`} />
                  <span className="text-sm">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Map Density Key */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">MAP DENSITY KEY</h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Low</span>
              <div className="flex-1 mx-3 h-2 rounded-full bg-gradient-to-r from-blue-100 via-blue-300 to-blue-600" />
              <span className="text-xs text-muted-foreground">High</span>
            </div>
          </div>

          <div className="mt-auto">
            <Button variant="outline" className="w-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset Filters
            </Button>
          </div>
        </aside>

        {/* Map Area */}
        <main className="flex-1 relative">
          {/* Map Placeholder - India Map Visualization */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100">
            {/* SVG India Map would go here - using placeholder */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-full max-w-2xl aspect-[4/5] mx-auto">
                {/* Simplified India outline */}
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  <defs>
                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#dbeafe" />
                      <stop offset="100%" stopColor="#93c5fd" />
                    </linearGradient>
                  </defs>
                  {/* Simplified India shape */}
                  <path
                    d="M200 50 L300 80 L350 150 L340 250 L300 300 L280 350 L250 400 L220 450 L180 450 L150 400 L120 350 L100 300 L60 250 L50 150 L100 80 Z"
                    fill="url(#mapGradient)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  
                  {/* Cluster circles */}
                  <circle cx="180" cy="180" r="40" fill="rgba(59, 130, 246, 0.3)" stroke="none" />
                  <circle cx="180" cy="180" r="20" fill="rgba(59, 130, 246, 0.5)" stroke="none" />
                  <text x="180" y="165" textAnchor="middle" className="text-xs fill-primary font-medium">Delhi NCR</text>
                  
                  <circle cx="220" cy="350" r="50" fill="rgba(59, 130, 246, 0.3)" stroke="none" />
                  <circle cx="220" cy="350" r="25" fill="rgba(59, 130, 246, 0.5)" stroke="none" />
                  <text x="220" y="380" textAnchor="middle" className="text-xs fill-primary font-medium">Bangalore</text>
                </svg>
              </div>
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute right-4 bottom-24 flex flex-col gap-2">
            <Button variant="outline" size="icon" className="bg-background">
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-background">
              <Minus className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-background">
              <Crosshair className="h-4 w-4" />
            </Button>
          </div>

          <Button variant="outline" size="sm" className="absolute right-4 bottom-4 bg-background">
            Aggregated View
          </Button>

          {/* Active Filters Bar */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background rounded-lg shadow-lg px-4 py-2 flex items-center gap-3">
            <span className="text-sm text-muted-foreground">ACTIVE FILTERS:</span>
            {activeFilters.map((filter) => (
              <Badge key={filter.label} variant="secondary" className="flex items-center gap-1">
                {filter.label}
                {filter.removable && (
                  <button onClick={() => removeFilter(filter.label)}>
                    <X className="h-3 w-3" />
                  </button>
                )}
              </Badge>
            ))}
            <Button variant="link" className="text-primary p-0 h-auto text-sm">
              Clear All
            </Button>
          </div>

          {/* Summary Card */}
          <Card className="absolute top-4 right-4 w-72">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  CURRENT VIEW SUMMARY
                </p>
                <Badge className="bg-emerald-100 text-emerald-700 border-0 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1" />
                  Live Data
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground">Total NGOs</p>
                  <p className="text-2xl font-bold">12,400</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Verified</p>
                  <p className="text-2xl font-bold">8,500</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-2">Top Sectors in View</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">Education</span>
                  </div>
                  <span className="text-sm font-medium">42%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full mt-1 overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "42%" }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default EcosystemMapPage;
