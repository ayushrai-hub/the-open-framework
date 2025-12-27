import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Edit, MapPin, CheckCircle2, Mail, Phone, Globe, Linkedin, 
  Settings, LogOut, Trash2, Eye, Shield, Building2, Users,
  BadgeCheck, ExternalLink, Lock, ChevronRight, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/contexts/AuthContext";

export default function UserProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const maskEmail = (email: string) => {
    const [local, domain] = email.split("@");
    return `${local.charAt(0)}***@${domain}`;
  };

  const maskPhone = (phone: string) => {
    if (!phone) return "";
    return phone.replace(/(\+91\s?)(\d{2})(\d+)(\d{2})/, "$1$2*** ***$4");
  };

  return (
    <Layout>
      <Helmet>
        <title>My Profile | India DPI Platform</title>
        <meta name="description" content="Manage your digital identity, credentials, and data visibility on the India DPI Platform." />
      </Helmet>

      <div className="bg-muted/30 min-h-screen">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-background">
          <div className="container-wide py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-text-secondary hover:text-text-primary">Home</Link>
              <span className="text-text-secondary">/</span>
              <span className="text-text-primary font-medium">My Profile</span>
            </nav>
          </div>
        </div>

        <div className="container-wide py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Card */}
            <div className="space-y-6">
              {/* Main Profile Card */}
              <Card className="overflow-hidden">
                <div className="relative">
                  <div className="h-20 bg-gradient-to-r from-primary to-primary/80" />
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-background border-4 border-background overflow-hidden">
                        {user.avatar ? (
                          <img src={user.avatar} alt={user.firstName} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center text-2xl font-bold text-text-secondary">
                            {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                          </div>
                        )}
                      </div>
                      {user.verified && (
                        <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-status-operational rounded-full flex items-center justify-center border-2 border-background">
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <CardContent className="pt-16 pb-6 text-center">
                  <h2 className="text-xl font-bold text-text-primary flex items-center justify-center gap-2">
                    {user.firstName} {user.lastName}
                    {user.verified && <BadgeCheck className="h-5 w-5 text-primary" />}
                  </h2>
                  <p className="text-text-secondary flex items-center justify-center gap-1 mt-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {user.location || "Location not set"}
                  </p>

                  <div className="mt-4 py-2 px-4 bg-primary/10 rounded-lg inline-flex items-center gap-2 text-sm text-primary">
                    <Globe className="h-4 w-4" />
                    Identity provided by Udyam Portal
                  </div>

                  <Link to="/profile/edit">
                    <Button variant="outline" className="w-full mt-4">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </Link>

                  <div className="mt-4 flex items-center justify-between text-xs text-text-secondary pt-4 border-t border-border">
                    <span>Last login: Today, 10:00 AM</span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-status-operational" />
                      Aadhaar Auth
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info Card */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Contact Info</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      <Eye className="h-3 w-3 mr-1" />
                      Verified Orgs
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wide mb-1">Email Address</p>
                    <div className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
                      <span className="text-sm text-text-primary">{maskEmail(user.email)}</span>
                      <Button variant="ghost" size="sm" className="text-link h-auto p-0 text-xs font-medium">
                        REVEAL
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wide mb-1">Phone Number</p>
                    <div className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
                      <span className="text-sm text-text-primary">{maskPhone(user.phone || "+91 98765 43210")}</span>
                      <Button variant="ghost" size="sm" className="text-link h-auto p-0 text-xs font-medium">
                        REVEAL
                      </Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wide mb-1">Social Links</p>
                    <div className="flex items-center gap-2">
                      {user.linkedIn && (
                        <a href={user.linkedIn} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                          <Linkedin className="h-4 w-4 text-text-secondary" />
                        </a>
                      )}
                      {user.website && (
                        <a href={user.website} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                          <Globe className="h-4 w-4 text-text-secondary" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Account Actions */}
              <div className="space-y-2">
                <Link to="/account/security">
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Account Settings
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-amber-600 border-amber-200 hover:bg-amber-50"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
                <Button variant="ghost" className="w-full justify-center text-text-secondary text-sm">
                  Delete Account
                </Button>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Active Roles */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-semibold text-text-primary">Active Roles</h3>
                  <Badge className="bg-primary/10 text-primary border-0">2</Badge>
                </div>
                <div className="space-y-4">
                  {/* NGO Role */}
                  <Card className="overflow-hidden">
                    <div className="flex">
                      <div className="w-32 h-28 bg-muted flex-shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                          <Building2 className="h-10 w-10 text-green-600" />
                        </div>
                      </div>
                      <CardContent className="flex-1 py-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-text-primary">Program Manager</h4>
                            <p className="text-sm text-text-secondary">{user.organization?.name || "Green Earth Foundation"}</p>
                            <p className="text-sm text-text-secondary mt-2 line-clamp-2">
                              Managing sustainable water sanitation projects across rural Maharashtra districts, overseeing grant allocation and field deployment.
                            </p>
                          </div>
                          <Badge className="bg-status-operational/10 text-status-operational border-0 flex-shrink-0">
                            ACTIVE
                          </Badge>
                        </div>
                        <Link to="/ngo/dashboard">
                          <Button size="sm" className="mt-3">
                            Go to Dashboard <ArrowRight className="h-3.5 w-3.5 ml-1" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>

                  {/* Volunteer Role */}
                  <Card className="overflow-hidden">
                    <div className="flex">
                      <div className="w-32 h-28 bg-muted flex-shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                          <Users className="h-10 w-10 text-blue-600" />
                        </div>
                      </div>
                      <CardContent className="flex-1 py-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-text-primary">Volunteer</h4>
                            <p className="text-sm text-text-secondary">Mumbai Coastal Cleanup</p>
                            <p className="text-sm text-text-secondary mt-2 line-clamp-2">
                              Participating in weekend cleanup drives and community awareness programs regarding marine pollution.
                            </p>
                          </div>
                          <Badge className="bg-status-operational/10 text-status-operational border-0 flex-shrink-0">
                            ACTIVE
                          </Badge>
                        </div>
                        <Button variant="outline" size="sm" className="mt-3">
                          View Activities
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </div>

              {/* About Me */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">About Me</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      <Eye className="h-3 w-3 mr-1" />
                      Public
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary leading-relaxed">
                    {user.bio || "No bio added yet."}
                  </p>
                </CardContent>
              </Card>

              {/* Skills & Experience Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Skills */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Skills & Interests</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        <Eye className="h-3 w-3 mr-1" />
                        Public
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {(user.skills || ["Project Management", "Grant Writing", "Hindi", "English", "Marathi", "Sustainable Ag", "WASH"]).map((skill, i) => (
                        <Badge key={i} variant="secondary" className="bg-muted text-text-primary font-normal">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Experience */}
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Experience</CardTitle>
                      <Button variant="ghost" size="sm" className="text-xs text-text-secondary h-auto p-0">
                        <Users className="h-3 w-3 mr-1" />
                        Connections
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <div>
                          <p className="font-medium text-text-primary text-sm">Senior Program Officer</p>
                          <p className="text-xs text-text-secondary">Green Earth Foundation • 2018 - Present</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <div>
                          <p className="font-medium text-text-primary text-sm">Field Coordinator</p>
                          <p className="text-xs text-text-secondary">Rural Development Trust • 2015 - 2018</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <div>
                          <p className="font-medium text-text-primary text-sm">Masters in Social Work</p>
                          <p className="text-xs text-text-secondary">Tata Institute of Social Sciences • 2013 - 2015</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
