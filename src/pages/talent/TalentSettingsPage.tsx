import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  User, Lock, Shield, Bell, FileText, Globe, Download, Trash2, Info,
  CheckCircle, ExternalLink, History, Network
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const sidebarItems = [
  { icon: User, label: "General Profile", id: "general" },
  { icon: Lock, label: "Login & Security", id: "security" },
  { icon: Shield, label: "Privacy & Visibility", id: "privacy", active: true },
  { icon: Bell, label: "Notifications", id: "notifications" },
  { icon: FileText, label: "Data Rights", id: "data" },
];

const dataAccessLog = [
  {
    organization: "Teach For India",
    dataAccessed: "Email, Phone, Certs",
    date: "Oct 24, 2023",
    purpose: "Application"
  },
  {
    organization: "Environment Foundation",
    dataAccessed: "Basic Profile",
    date: "Sep 12, 2023",
    purpose: "Discovery"
  },
];

export default function TalentSettingsPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("privacy");
  const [visibility, setVisibility] = useState("public");
  const [crossStateDiscovery, setCrossStateDiscovery] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy & Visibility Settings | India DPI Platform</title>
        <meta name="description" content="Manage who can see your profile and control how your data is shared across the federated network." />
      </Helmet>

      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container-wide flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">Civil Society Platform</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <span className="text-sm font-medium text-primary-foreground">RG</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container-wide px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Rohan Gupta</p>
                    <div className="flex items-center gap-1 text-xs text-primary">
                      <CheckCircle className="h-3 w-3" />
                      Verified Volunteer
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nav */}
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    activeSection === item.id 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Data Sovereignty Notice */}
            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">
                  Your data is hosted by the <span className="font-medium text-foreground">Karnataka State Node</span> as part of the Federated Civil Registry.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-foreground">Privacy & Visibility Settings</h1>
              <p className="text-muted-foreground">
                Manage who can see your profile and control how your data is shared across the federated network.
              </p>
            </div>

            {/* Profile Discoverability */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <h2 className="text-lg font-semibold text-foreground">Profile Discoverability</h2>
                </div>

                <RadioGroup value={visibility} onValueChange={setVisibility} className="space-y-3">
                  <label className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                    visibility === "public" ? "border-primary bg-primary/5" : "border-border hover:bg-muted/50"
                  }`}>
                    <RadioGroupItem value="public" className="mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Public (Visible to all)</p>
                      <p className="text-sm text-muted-foreground">
                        Anyone can search for and view your volunteer profile, including unregistered visitors.
                      </p>
                    </div>
                  </label>

                  <label className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                    visibility === "registered" ? "border-primary bg-primary/5" : "border-border hover:bg-muted/50"
                  }`}>
                    <RadioGroupItem value="registered" className="mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Registered Non-profits Only</p>
                      <p className="text-sm text-muted-foreground">
                        Only verified organizations logged into the platform can view your full details.
                      </p>
                    </div>
                  </label>

                  <label className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                    visibility === "private" ? "border-primary bg-primary/5" : "border-border hover:bg-muted/50"
                  }`}>
                    <RadioGroupItem value="private" className="mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Private (Hidden)</p>
                      <p className="text-sm text-muted-foreground">
                        Your profile is hidden from search results. You can still apply to opportunities directly.
                      </p>
                    </div>
                  </label>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Federated Sharing */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Network className="h-5 w-5 text-muted-foreground" />
                  <h2 className="text-lg font-semibold text-foreground">Federated Sharing</h2>
                </div>

                <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Allow cross-state discovery</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Enable other State Nodes (e.g., Maharashtra Civil Portal) to access your verified credentials when you apply for national-level opportunities.
                    </p>
                  </div>
                  <Switch checked={crossStateDiscovery} onCheckedChange={setCrossStateDiscovery} />
                </div>
              </CardContent>
            </Card>

            {/* Recent Data Access */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <History className="h-5 w-5 text-muted-foreground" />
                    <h2 className="text-lg font-semibold text-foreground">Recent Data Access</h2>
                  </div>
                  <Button variant="link" className="text-primary p-0 h-auto">
                    View Full Log
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs uppercase">Organization</TableHead>
                      <TableHead className="text-xs uppercase">Data Accessed</TableHead>
                      <TableHead className="text-xs uppercase">Date</TableHead>
                      <TableHead className="text-xs uppercase">Purpose</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dataAccessLog.map((log, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">{log.organization}</TableCell>
                        <TableCell>{log.dataAccessed}</TableCell>
                        <TableCell>{log.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={
                            log.purpose === "Application" 
                              ? "bg-blue-50 text-blue-700 border-blue-200" 
                              : "bg-purple-50 text-purple-700 border-purple-200"
                          }>
                            {log.purpose}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Data Management */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Data Management</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-5">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
                      <Download className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">Download Your Data</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get a copy of your profile, volunteer hours, and certificates in JSON or CSV format.
                    </p>
                    <Button variant="outline" className="w-full">
                      Request Archive
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-destructive/20">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                      <Trash2 className="h-5 w-5 text-destructive" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">Delete Account</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Permanently remove your account and all associated data from the platform.
                    </p>
                    <Button variant="outline" className="w-full text-destructive border-destructive/30 hover:bg-destructive/10">
                      Delete My Account
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3">
              <Button variant="outline" onClick={() => navigate("/talent/dashboard")}>
                Cancel
              </Button>
              <Button>
                <Shield className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
