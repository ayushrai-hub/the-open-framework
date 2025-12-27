import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Shield, Lock, Smartphone, Monitor, LogOut, Trash2, 
  Download, Eye, EyeOff, ChevronRight, AlertTriangle,
  CheckCircle2, Clock, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const activeSessions = [
  {
    id: 1,
    device: "Chrome on Windows",
    location: "Mumbai, Maharashtra",
    lastActive: "Active now",
    current: true,
    icon: Monitor,
  },
  {
    id: 2,
    device: "Safari on iPhone",
    location: "Mumbai, Maharashtra",
    lastActive: "2 hours ago",
    current: false,
    icon: Smartphone,
  },
  {
    id: 3,
    device: "Firefox on MacOS",
    location: "Delhi, NCR",
    lastActive: "3 days ago",
    current: false,
    icon: Monitor,
  },
];

export default function AccountSecurityPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("Please fill in all password fields");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }
    if (newPassword.length < 12) {
      toast.error("Password must be at least 12 characters");
      return;
    }
    toast.success("Password changed successfully");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleLogoutAllDevices = () => {
    toast.success("Logged out from all other devices");
  };

  const handleDeleteAccount = () => {
    logout();
    navigate("/");
    toast.success("Account deletion request submitted");
  };

  const handleExportData = () => {
    toast.success("Data export initiated. You will receive an email with your data within 24 hours.");
  };

  return (
    <Layout>
      <Helmet>
        <title>Account & Security | India DPI Platform</title>
        <meta name="description" content="Manage your account security, password, and privacy settings." />
      </Helmet>

      <div className="bg-muted/30 min-h-screen">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-background">
          <div className="container-wide py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-text-secondary hover:text-text-primary">Home</Link>
              <span className="text-text-secondary">/</span>
              <Link to="/profile" className="text-text-secondary hover:text-text-primary">Profile</Link>
              <span className="text-text-secondary">/</span>
              <span className="text-text-primary font-medium">Account & Security</span>
            </nav>
          </div>
        </div>

        <div className="container-wide py-8">
          <div className="max-w-3xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Account & Security
              </h1>
              <p className="text-text-secondary mt-1">
                Manage your password, two-factor authentication, and active sessions.
              </p>
            </div>

            <div className="space-y-6">
              {/* Change Password */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lock className="h-5 w-5 text-text-secondary" />
                    Change Password
                  </CardTitle>
                  <CardDescription>
                    Use a strong password with at least 12 characters. Passphrases are recommended.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <div className="relative mt-1.5">
                      <Input
                        id="currentPassword"
                        type={showCurrentPassword ? "text" : "password"}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder="Enter current password"
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
                      >
                        {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="newPassword">New Password</Label>
                      <div className="relative mt-1.5">
                        <Input
                          id="newPassword"
                          type={showNewPassword ? "text" : "password"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Enter new password"
                          className="pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
                        >
                          {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm new password"
                        className="mt-1.5"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <Link to="/forgot-password" className="text-sm text-link hover:text-link-hover">
                      Forgot your password?
                    </Link>
                    <Button onClick={handleChangePassword}>
                      Update Password
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Two-Factor Authentication */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Smartphone className="h-5 w-5 text-text-secondary" />
                        Two-Factor Authentication
                      </CardTitle>
                      <CardDescription>
                        Add an extra layer of security to your account
                      </CardDescription>
                    </div>
                    <Badge variant={twoFactorEnabled ? "default" : "secondary"} className={twoFactorEnabled ? "bg-status-operational" : ""}>
                      {twoFactorEnabled ? "Enabled" : "Disabled"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Smartphone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">Authenticator App</p>
                        <p className="text-sm text-text-secondary">
                          Use an app like Google Authenticator or Authy
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={twoFactorEnabled}
                      onCheckedChange={setTwoFactorEnabled}
                    />
                  </div>
                  {!twoFactorEnabled && (
                    <Button variant="outline" className="mt-4 w-full">
                      Enable 2FA
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Active Sessions */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Monitor className="h-5 w-5 text-text-secondary" />
                        Active Sessions
                      </CardTitle>
                      <CardDescription>
                        Devices where you're currently logged in
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm" onClick={handleLogoutAllDevices}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout All Devices
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {activeSessions.map((session) => (
                      <div
                        key={session.id}
                        className={`flex items-center justify-between p-4 rounded-lg ${
                          session.current ? "bg-primary/5 border border-primary/20" : "bg-muted/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            session.current ? "bg-primary/10" : "bg-muted"
                          }`}>
                            <session.icon className={`h-5 w-5 ${session.current ? "text-primary" : "text-text-secondary"}`} />
                          </div>
                          <div>
                            <p className="font-medium text-text-primary flex items-center gap-2">
                              {session.device}
                              {session.current && (
                                <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-0">
                                  Current
                                </Badge>
                              )}
                            </p>
                            <p className="text-sm text-text-secondary flex items-center gap-2">
                              <MapPin className="h-3 w-3" />
                              {session.location}
                              <span className="text-text-secondary/50">•</span>
                              <Clock className="h-3 w-3" />
                              {session.lastActive}
                            </p>
                          </div>
                        </div>
                        {!session.current && (
                          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                            End Session
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Data & Privacy */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Download className="h-5 w-5 text-text-secondary" />
                    Data & Privacy
                  </CardTitle>
                  <CardDescription>
                    Export your data or delete your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <p className="font-medium text-text-primary">Export Your Data</p>
                      <p className="text-sm text-text-secondary">
                        Download a copy of all your data in JSON format
                      </p>
                    </div>
                    <Button variant="outline" onClick={handleExportData}>
                      <Download className="h-4 w-4 mr-2" />
                      Export Data
                    </Button>
                  </div>

                  <Separator />

                  <div className="p-4 border border-destructive/20 bg-destructive/5 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-destructive">Delete Account</p>
                        <p className="text-sm text-text-secondary mt-1">
                          Permanently delete your account and all associated data. This action cannot be undone.
                        </p>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive" size="sm" className="mt-3">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete My Account
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers. All linked roles and organizations
                                will be notified of your departure.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={handleDeleteAccount}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                Yes, Delete My Account
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
