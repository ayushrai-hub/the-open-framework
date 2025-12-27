import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/AuthContext";
import {
  ChevronRight, User, Lock, Eye, Bell, Database, Info,
  Download, AlertTriangle
} from "lucide-react";

const sidebarItems = [
  { id: "profile", label: "Profile Details", icon: User, active: true },
  { id: "security", label: "Security & Login", icon: Lock },
  { id: "privacy", label: "Privacy & Consent", icon: Eye },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "data", label: "Data Management", icon: Database }
];

const notificationTypes = [
  {
    id: "donation-receipts",
    label: "Donation Receipts",
    description: "Tax certificates and transaction confirmations",
    email: true,
    sms: true,
    whatsapp: true
  },
  {
    id: "impact-reports",
    label: "Impact Reports",
    description: "Updates on how your funds were utilized",
    email: true,
    sms: false,
    whatsapp: false
  },
  {
    id: "platform-updates",
    label: "Platform Updates",
    description: "New features and policy changes",
    email: false,
    sms: false,
    whatsapp: false
  }
];

export default function DonorSettingsPage() {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState("profile");
  const [anonymousDonations, setAnonymousDonations] = useState(false);
  const [federatedVisibility, setFederatedVisibility] = useState(true);
  const [language, setLanguage] = useState("english");

  return (
    <DashboardLayout role="donor">
      <Helmet>
        <title>Account Settings | Donor Dashboard</title>
        <meta name="description" content="Manage your personal information, privacy preferences, and security details across the federated network." />
      </Helmet>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/donor/dashboard" className="hover:text-foreground">Dashboard</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Account Settings</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Account Settings</h1>
        <p className="text-muted-foreground">
          Manage your personal information, privacy preferences, and security details across the federated network.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-4">
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {user?.firstName?.charAt(0) || "R"}{user?.lastName?.charAt(0) || "S"}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{user?.firstName || "Rohan"} {user?.lastName || "Sharma"}</p>
                  <p className="text-xs text-muted-foreground">ID: #FED-9823-IND</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
                      activeSection === item.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>
                ))}
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Personal Information</CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">Edit Details</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input value={user?.firstName ? `${user.firstName} ${user.lastName}` : "Rohan Sharma"} readOnly className="bg-muted/50" />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    Email Address
                    <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-[10px]">✓</span>
                    </span>
                  </Label>
                  <Input value={user?.email || "rohan.sharma@example.com"} readOnly className="bg-muted/50" />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-1">
                    PAN Number
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </Label>
                  <Input value="XXXXX1234X" readOnly className="bg-muted/50" />
                  <p className="text-xs text-muted-foreground">Contact support to update KYC documents.</p>
                </div>
                <div className="space-y-2">
                  <Label>Preferred Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">हिंदी</SelectItem>
                      <SelectItem value="tamil">தமிழ்</SelectItem>
                      <SelectItem value="marathi">मराठी</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Consent */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Consent</CardTitle>
              <p className="text-sm text-muted-foreground">
                Control how your data is shared across the federated NGO ecosystem.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Anonymous Donations</p>
                  <p className="text-sm text-muted-foreground">
                    When enabled, your name and identity will be hidden from NGOs by default. You can still choose to reveal your identity for individual donations.
                  </p>
                </div>
                <Switch checked={anonymousDonations} onCheckedChange={setAnonymousDonations} />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Federated ID Visibility</p>
                  <p className="text-sm text-muted-foreground">
                    Allow partner platforms in the DPI network to discover your donor profile for seamless impact tracking.
                  </p>
                </div>
                <Switch checked={federatedVisibility} onCheckedChange={setFederatedVisibility} />
              </div>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">TYPE</th>
                      <th className="text-center p-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">EMAIL</th>
                      <th className="text-center p-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">SMS</th>
                      <th className="text-center p-3 text-xs font-medium text-muted-foreground uppercase tracking-wide">WHATSAPP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notificationTypes.map((type) => (
                      <tr key={type.id} className="border-b border-border">
                        <td className="p-3">
                          <p className="font-medium text-foreground">{type.label}</p>
                          <p className="text-xs text-muted-foreground">{type.description}</p>
                        </td>
                        <td className="p-3 text-center">
                          <Checkbox defaultChecked={type.email} />
                        </td>
                        <td className="p-3 text-center">
                          <Checkbox defaultChecked={type.sms} />
                        </td>
                        <td className="p-3 text-center">
                          <Checkbox defaultChecked={type.whatsapp} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <Download className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground">Your Data</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Download a copy of your donation history and personal data in machine-readable formats.
                    </p>
                    <Button variant="outline">Download JSON Archive</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-destructive/50">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-destructive">Danger Zone</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Permanently delete your account and all associated personal data from the DPI registry.
                    </p>
                    <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button size="lg">Save Changes</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
