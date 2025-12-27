import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Edit, MapPin, CheckCircle2, Mail, Phone, Globe, Building2, Eye, EyeOff,
  BadgeCheck, Lock, ArrowRight, Shield, Award, GraduationCap, AlertCircle, Fingerprint
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/contexts/AuthContext";

type ViewMode = "public" | "members" | "government";

export default function PublicProfilePage() {
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth();
  const [viewMode, setViewMode] = useState<ViewMode>("public");

  // Mock user data for public profile (would come from API based on id)
  const profileData = {
    id: id || "aarav-patel",
    firstName: "Aarav",
    lastName: "Patel",
    title: "Program Director",
    organization: "Green Earth NGO",
    location: "Bangalore, Karnataka",
    avatar: null,
    verified: true,
    memberSince: "August 2021",
    status: "Active",
    linkedIdentifiers: {
      aadhaar: { value: "XXXX-XXXX-4588", visibility: "private" },
      registryId: { value: "NGO-DIR-2023-4588", visibility: "public" }
    },
    contact: {
      email: { value: "aarav.patel@greenearth-ngo.org", visibility: viewMode === "public" ? "hidden" : "visible" },
      phone: { value: "+91 98765 43210", visibility: viewMode === "public" ? "hidden" : "visible" },
      website: { value: "www.greenearth-ngo.org", visibility: "public" },
      address: { value: "Sector 4, HSR Layout, Bangalore", visibility: "public" }
    },
    credentials: [
      { title: "Certified Social Auditor", issuer: "Institute of Social Auditors India", status: "Valid" },
      { title: "Masters in Public Policy", issuer: "National Law School of India University", status: "Verified" }
    ]
  };

  const isOwnProfile = isAuthenticated && user?.email === "aarav.patel@greenearth-ngo.org";

  return (
    <Layout>
      <Helmet>
        <title>Universal User Profile | India DPI Platform</title>
        <meta name="description" content="View public profile and federated credentials on the India DPI Platform." />
      </Helmet>

      <div className="bg-muted/30 min-h-screen">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-background">
          <div className="container-wide py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-text-secondary hover:text-text-primary">Home</Link>
              <span className="text-text-secondary">/</span>
              <Link to="/registry/search" className="text-text-secondary hover:text-text-primary">Registry</Link>
              <span className="text-text-secondary">/</span>
              <span className="text-text-primary font-medium">Profile</span>
            </nav>
          </div>
        </div>

        <div className="container-wide py-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary">Universal User Profile</h1>
              <p className="text-text-secondary mt-1">Manage your digital identity, federated credentials, and data visibility.</p>
            </div>
            {isOwnProfile && (
              <Link to="/profile/edit">
                <Button variant="outline" className="gap-2">
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Button>
              </Link>
            )}
          </div>

          {/* Visibility Notice */}
          <Card className="mb-6 border-primary/20 bg-primary/5">
            <CardContent className="py-4">
              <div className="flex items-start gap-3">
                <Eye className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    You are viewing your profile as: <span className="text-primary font-semibold capitalize">{viewMode === "members" ? "Platform Members" : viewMode === "government" ? "Government Agencies" : "Public"}</span>
                  </p>
                  <p className="text-sm text-text-secondary mt-0.5">
                    {viewMode === "public" 
                      ? "This is how your profile appears to unauthenticated users or the general public. Sensitive data is automatically redacted."
                      : viewMode === "members"
                      ? "This is how your profile appears to other verified platform members."
                      : "This is how your profile appears to authorized government agencies."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* View Mode Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={viewMode === "public" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("public")}
              className="gap-2"
            >
              <Globe className="h-4 w-4" />
              View as: Public
            </Button>
            <Button
              variant={viewMode === "members" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("members")}
              className="gap-2"
            >
              <Building2 className="h-4 w-4" />
              View as: Platform Members
            </Button>
            <Button
              variant={viewMode === "government" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("government")}
              className="gap-2"
            >
              <Shield className="h-4 w-4" />
              View as: Government Agencies
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Profile Card */}
              <Card className="overflow-hidden">
                <div className="h-24 bg-gradient-to-r from-primary to-primary/70" />
                <CardContent className="pt-0 -mt-12 pb-6">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full bg-background border-4 border-background overflow-hidden">
                      {profileData.avatar ? (
                        <img src={profileData.avatar} alt={profileData.firstName} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center text-2xl font-bold text-text-secondary">
                          {profileData.firstName.charAt(0)}{profileData.lastName.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-text-primary">
                      {profileData.firstName} {profileData.lastName}
                    </h2>
                    {profileData.verified && (
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <p className="text-text-secondary text-sm mt-1">
                    {profileData.title} @ {profileData.organization}
                  </p>
                  <p className="text-text-secondary text-sm flex items-center gap-1 mt-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {profileData.location}
                  </p>

                  <div className="mt-6 pt-4 border-t border-border space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-secondary">Member Since</span>
                      <span className="text-text-primary font-medium">{profileData.memberSince}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-text-secondary">Profile Status</span>
                      <Badge className="bg-status-operational/10 text-status-operational border-0">
                        {profileData.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Linked Identifiers */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Fingerprint className="h-4 w-4 text-primary" />
                    Linked Identifiers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-text-secondary uppercase tracking-wide">AADHAAR REFERENCE</span>
                      <Badge variant="outline" className="text-xs text-destructive border-destructive/30 bg-destructive/5">
                        <Lock className="h-3 w-3 mr-1" />
                        Private
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2">
                      <span className="text-sm text-text-secondary">{profileData.linkedIdentifiers.aadhaar.value}</span>
                      <span className="text-xs text-text-secondary">Hidden from Public</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-text-secondary uppercase tracking-wide">PUBLIC REGISTRY ID</span>
                      <Badge variant="outline" className="text-xs text-primary border-primary/30 bg-primary/5">
                        <Eye className="h-3 w-3 mr-1" />
                        Public
                      </Badge>
                    </div>
                    <div className="bg-muted/50 rounded-lg px-3 py-2">
                      <span className="text-sm text-text-primary font-mono">{profileData.linkedIdentifiers.registryId.value}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Contact Information</CardTitle>
                    {viewMode === "public" && (
                      <span className="text-xs text-text-secondary italic">Some fields are hidden</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-text-secondary">Official Email</span>
                        {profileData.contact.email.visibility === "hidden" ? (
                          <EyeOff className="h-4 w-4 text-text-secondary" />
                        ) : (
                          <Eye className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2.5">
                        {profileData.contact.email.visibility === "hidden" ? (
                          <>
                            <span className="text-sm text-text-secondary">••••••••••@••••.org</span>
                            <Lock className="h-4 w-4 text-text-secondary ml-auto" />
                          </>
                        ) : (
                          <span className="text-sm text-text-primary">{profileData.contact.email.value}</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-text-secondary">Mobile Number</span>
                        {profileData.contact.phone.visibility === "hidden" ? (
                          <EyeOff className="h-4 w-4 text-text-secondary" />
                        ) : (
                          <Eye className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2.5">
                        {profileData.contact.phone.visibility === "hidden" ? (
                          <>
                            <span className="text-sm text-text-secondary">+91 •••••• ••••</span>
                            <Lock className="h-4 w-4 text-text-secondary ml-auto" />
                          </>
                        ) : (
                          <span className="text-sm text-text-primary">{profileData.contact.phone.value}</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-text-secondary">Website</span>
                        <Globe className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted/50 rounded-lg px-3 py-2.5">
                        <a href={`https://${profileData.contact.website.value}`} target="_blank" rel="noopener noreferrer" className="text-sm text-link hover:underline">
                          {profileData.contact.website.value}
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-text-secondary">Office Address</span>
                        <Globe className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted/50 rounded-lg px-3 py-2.5">
                        <span className="text-sm text-text-primary">{profileData.contact.address.value}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Credentials */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Professional Credentials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {profileData.credentials.map((credential, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${index === 0 ? "bg-amber-100 text-amber-600" : "bg-rose-100 text-rose-600"}`}>
                          {index === 0 ? <Award className="h-5 w-5" /> : <GraduationCap className="h-5 w-5" />}
                        </div>
                        <div>
                          <p className="font-medium text-text-primary">{credential.title}</p>
                          <p className="text-sm text-text-secondary">Issued by {credential.issuer}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className={`${credential.status === "Valid" ? "text-status-operational border-status-operational/30 bg-status-operational/5" : "text-text-primary border-border bg-muted"}`}>
                        {credential.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Compliance & Financial History (Restricted) */}
              <Card className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Compliance & Financial History</CardTitle>
                    <Badge variant="outline" className="text-xs text-destructive border-destructive/30 bg-destructive/5">
                      <Lock className="h-3 w-3 mr-1" />
                      RESTRICTED ACCESS
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative h-48 bg-gradient-to-br from-muted via-muted/50 to-muted overflow-hidden">
                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-30" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                        <AlertCircle className="h-6 w-6 text-amber-600" />
                      </div>
                      <h3 className="font-semibold text-text-primary mb-2">Access Restricted</h3>
                      <p className="text-sm text-text-secondary max-w-sm">
                        Financial history and compliance records are only visible to the profile owner and authorized government agencies.
                      </p>
                      <Button variant="link" className="mt-3 text-primary gap-1">
                        Manage Permissions <ArrowRight className="h-4 w-4" />
                      </Button>
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
