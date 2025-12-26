import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  User,
  Lock,
  Shield,
  FileText,
  Eye,
  CheckCircle,
  ExternalLink,
  Monitor,
  Smartphone,
  Download,
  AlertTriangle,
  Key,
  HelpCircle,
  MessageSquare,
} from "lucide-react";

const sidebarItems = [
  { id: "profile", label: "General Profile", icon: User },
  { id: "security", label: "Security & Login", icon: Lock, active: true },
  { id: "privacy", label: "Data Privacy", icon: Shield },
  { id: "logs", label: "Audit Logs", icon: FileText },
];

const recentActivity = [
  {
    device: "Chrome on Windows",
    location: "New Delhi, India",
    date: "Oct 24, 2023 at 10:42 AM",
    ip: "103.21.22.14",
    status: "Current Session",
    statusColor: "text-emerald-500",
    icon: Monitor,
  },
  {
    device: "Safari on iPhone 13",
    location: "Mumbai, India",
    date: "Oct 22, 2023 at 04:15 PM",
    ip: "114.143.28.11",
    status: "Logged out",
    statusColor: "text-muted-foreground",
    icon: Smartphone,
  },
];

const NgoSettingsPage = () => {
  const [activeSection, setActiveSection] = useState("security");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <DashboardLayout>
      <Helmet>
        <title>Account Settings & Security - India DPI Platform</title>
        <meta name="description" content="Manage your organization's profile, security preferences, and data privacy." />
      </Helmet>

      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-muted/30 p-4">
          <div className="mb-6">
            <h2 className="font-semibold">NGO Settings</h2>
            <p className="text-sm text-muted-foreground">Manage your organization</p>
          </div>

          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-6 space-y-2">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">SUPPORT</p>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-md transition-colors">
              <HelpCircle className="h-4 w-4" />
              Help Center
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-md transition-colors">
              <MessageSquare className="h-4 w-4" />
              Contact NITI Aayog Support
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-3xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Account Settings & Security</h1>
              <p className="text-muted-foreground mt-1">
                Manage your organization's profile, security preferences, and data privacy.
              </p>
            </div>

            {/* Organization Summary */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                      SEVA
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">Seva Foundation</h3>
                        <Badge className="bg-emerald-100 text-emerald-700 border-0">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">DARPAN ID: MH/2023/019283</p>
                      <p className="text-xs text-muted-foreground">
                        Registered via NITI Aayog • Synced 2 hours ago
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    View Public Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Organization Details */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Organization Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Registered Organization Name</Label>
                    <div className="relative">
                      <Input value="Seva Foundation" disabled className="bg-muted/50 pr-10" />
                      <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="text-xs text-amber-600">
                      To change your organization name, please submit a re-registration request.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label>DARPAN ID / Registration No.</Label>
                    <div className="relative">
                      <Input value="MH/2023/019283" disabled className="bg-muted/50 pr-10" />
                      <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Official Correspondence Email</Label>
                    <div className="flex gap-2">
                      <Input value="contact@sevafoundation.org" className="flex-1" />
                      <Button variant="outline">EDIT</Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      We'll send a verification link to the new address.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label>Authorized Mobile Number</Label>
                    <div className="flex gap-2">
                      <Input value="+91 98765 43210" className="flex-1" />
                      <Button variant="outline">EDIT</Button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button className="bg-primary">Save Changes</Button>
                </div>
              </CardContent>
            </Card>

            {/* Security & Authentication */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Security & Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Password Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Key className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Change Password</p>
                        <p className="text-sm text-muted-foreground">Last changed 90 days ago</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label>Current Password</Label>
                        <Input
                          type="password"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>New Password</Label>
                        <Input
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Confirm New</Label>
                        <Input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <Button variant="outline">Update Password</Button>
                    </div>
                  </div>

                  {/* 2FA Section */}
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 rounded-lg bg-red-100">
                        <Shield className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">2-Step Verification</p>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account by requiring a code when signing in.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm">Status</span>
                      <span className="text-sm text-muted-foreground">Disabled</span>
                    </div>
                    <Button className="w-full bg-primary">
                      Enable 2FA <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Recent Activity</CardTitle>
                <Button variant="link" className="text-primary p-0 h-auto">
                  View All Logs
                </Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider py-3">
                          Device / Location
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider py-3">
                          Date & Time
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider py-3">
                          IP Address
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider py-3">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentActivity.map((activity, index) => (
                        <tr key={index} className="border-b border-border last:border-0">
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <activity.icon className="h-4 w-4 text-muted-foreground" />
                              <div>
                                <p className="font-medium text-sm">{activity.device}</p>
                                <p className="text-xs text-muted-foreground">{activity.location}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 text-sm text-muted-foreground">{activity.date}</td>
                          <td className="py-4 font-mono text-sm text-muted-foreground">{activity.ip}</td>
                          <td className={`py-4 text-sm ${activity.statusColor}`}>{activity.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Data Control */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Data Control</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <p className="font-medium">Export Data</p>
                    <p className="text-sm text-muted-foreground">
                      Download a copy of your organization's data, including profile details, compliance history, and audit logs.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        JSON
                      </Button>
                      <Button variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        PDF Report
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border border-destructive/30 bg-destructive/5 rounded-lg">
                    <p className="font-medium text-destructive">Close Account</p>
                    <p className="text-sm text-destructive/80 mt-1">
                      Permanently remove your NGO from the National Registry. This action is irreversible and will revoke all digital certificates.
                    </p>
                    <Button variant="destructive" className="mt-4">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Request Account Deletion
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default NgoSettingsPage;
