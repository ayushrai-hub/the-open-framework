import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FileText,
  Sparkles,
  Users,
  ShieldCheck,
  Wallet,
  Eye,
  History,
  Upload,
  MapPin,
  Mail,
  Phone,
  Globe,
  Calendar,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Image as ImageIcon,
  Lock,
} from "lucide-react";

const sidebarItems = [
  { id: "basic", label: "Basic Info", icon: FileText, status: "complete" },
  { id: "mission", label: "Mission & Impact", icon: Sparkles, status: "complete" },
  { id: "financials", label: "Financials", icon: Wallet, status: "optional" },
  { id: "team", label: "Team Composition", icon: Users, status: "pending" },
  { id: "projects", label: "Projects", icon: FileText, status: "optional" },
  { id: "docs", label: "Verification Docs", icon: ShieldCheck, status: "warning" },
];

const NgoProfilePage = () => {
  const [activeSection, setActiveSection] = useState("basic");
  const [visibility, setVisibility] = useState("public");

  return (
    <DashboardLayout>
      <Helmet>
        <title>Profile Editor - Seva Foundation - India DPI Platform</title>
        <meta name="description" content="Edit your NGO profile, update organization details, and manage your public presence." />
      </Helmet>

      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-muted/30 p-4">
          <div className="mb-6">
            <h2 className="font-semibold">Seva Foundation</h2>
            <p className="text-xs text-primary">ID: 992-883-FED</p>
            <div className="mt-3">
              <Progress value={65} className="h-1.5" />
              <p className="text-xs text-muted-foreground mt-1">Profile Completion: 65%</p>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Core Identity</p>
            {sidebarItems.slice(0, 2).map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </span>
                {item.status === "complete" && <CheckCircle className="h-4 w-4 text-emerald-500" />}
                {item.status === "pending" && <span className="w-2 h-2 rounded-full bg-amber-500" />}
                {item.status === "warning" && <AlertCircle className="h-4 w-4 text-red-500" />}
              </button>
            ))}

            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-4 mb-2">Governance</p>
            {sidebarItems.slice(2, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </span>
                {item.status === "optional" && <span className="text-xs">Optional</span>}
                {item.status === "pending" && <span className="w-2 h-2 rounded-full bg-amber-500" />}
              </button>
            ))}

            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mt-4 mb-2">Operations</p>
            {sidebarItems.slice(4).map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </span>
                {item.status === "warning" && <AlertCircle className="h-4 w-4 text-red-500" />}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <Link to="/ngo/profile/preview">
              <Button variant="outline" className="w-full">
                <Eye className="h-4 w-4 mr-2" />
                View Public Profile
              </Button>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/ngo/dashboard" className="hover:text-foreground">Dashboard</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Profile Editor</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <History className="h-4 w-4 mr-2" />
                History
              </Button>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button size="sm" className="bg-primary">
                <Upload className="h-4 w-4 mr-2" />
                Publish Changes
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold">Basic Info</h1>
            <p className="text-muted-foreground flex items-center gap-2 text-sm mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              All changes saved automatically • Last saved at 10:42 AM
            </p>
          </div>

          {/* General Details Card */}
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">General Details</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">VISIBILITY:</span>
                <Select value={visibility} onValueChange={setVisibility}>
                  <SelectTrigger className="w-32 h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">
                      <span className="flex items-center gap-2">
                        <Globe className="h-3 w-3" /> Public
                      </span>
                    </SelectItem>
                    <SelectItem value="private">
                      <span className="flex items-center gap-2">
                        <Lock className="h-3 w-3" /> Private
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Official Organization Name</Label>
                <Input defaultValue="Seva Foundation" />
                <p className="text-xs text-muted-foreground">Must match your registration certificate.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Registration Number</Label>
                  <div className="relative">
                    <Input defaultValue="REG-2023-MH-8821" disabled className="bg-muted/50" />
                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <Lock className="h-3 w-3" />
                    Verified field. Contact support to change.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label>Date of Establishment</Label>
                  <Input type="date" defaultValue="2010-04-15" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Short Bio / Tagline</Label>
                <Textarea
                  defaultValue="Empowering rural communities through sustainable education and healthcare initiatives."
                  className="min-h-[80px]"
                  maxLength={160}
                />
                <p className="text-xs text-muted-foreground text-right">86/160 characters</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Location Card */}
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Contact & Location</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">VISIBILITY:</span>
                <Select defaultValue="public">
                  <SelectTrigger className="w-32 h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">
                      <span className="flex items-center gap-2">
                        <Globe className="h-3 w-3" /> Public
                      </span>
                    </SelectItem>
                    <SelectItem value="private">
                      <span className="flex items-center gap-2">
                        <Lock className="h-3 w-3" /> Private
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Official Email
                  </Label>
                  <Input defaultValue="contact@seva.org" />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Primary Phone
                  </Label>
                  <Input defaultValue="+91 98765 43210" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Registered Address</Label>
                <Input defaultValue="Plot No. 42, Green Avenue, Sector 15" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Input placeholder="City" defaultValue="Pune" />
                <Input placeholder="State" defaultValue="Maharashtra" />
                <Input placeholder="PIN" defaultValue="411001" />
                <Input placeholder="Country" defaultValue="India" disabled className="bg-muted/50" />
              </div>

              {/* Map Placeholder */}
              <div className="space-y-2">
                <Label>Headquarters Location</Label>
                <div className="relative w-full h-48 bg-muted rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Map preview</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        <MapPin className="h-4 w-4 mr-2" />
                        Update Pin
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Media & Branding Card */}
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Media & Branding</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">VISIBILITY:</span>
                <Badge variant="outline">
                  <Globe className="h-3 w-3 mr-1" /> Public
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Organization Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                      SEVA
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">Min 200x200px, PNG or JPG.</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Replace</Button>
                        <Button variant="ghost" size="sm" className="text-destructive">Remove</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Profile Cover Image</Label>
                  <div className="w-full h-24 border-2 border-dashed border-border rounded-lg flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                    <div className="text-center">
                      <ImageIcon className="h-6 w-6 text-muted-foreground mx-auto mb-1" />
                      <p className="text-sm text-primary">Click to upload cover</p>
                      <p className="text-xs text-muted-foreground">1200x400px recommended</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Privacy Notice */}
          <div className="text-sm text-muted-foreground p-4 bg-muted/30 rounded-lg">
            <p className="font-medium mb-1">Data Retention & Privacy</p>
            <p>
              Information provided here is part of the Digital Public Infrastructure. Public fields are
              accessible via open APIs. Private fields are encrypted and only shared with explicit consent.
            </p>
            <div className="flex gap-4 mt-2">
              <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              <Link to="/federation" className="text-primary hover:underline">Federation Terms</Link>
            </div>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
};

export default NgoProfilePage;
