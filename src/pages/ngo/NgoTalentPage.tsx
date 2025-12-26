import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus,
  Briefcase,
  Users,
  ClipboardList,
  Search,
  SlidersHorizontal,
  Archive,
  Download,
  Eye,
  Mail,
  MapPin,
  GraduationCap,
  Languages,
  Info,
  CheckCircle,
  Send,
} from "lucide-react";

const applicants = [
  {
    id: 1,
    initials: "RS",
    name: "Riya Singh",
    role: "Field Coordinator",
    location: "Pune District",
    time: "2h ago",
    status: "New Applicant",
    verified: true,
    color: "bg-primary",
    education: "MSW, Tata Institute",
    languages: "English, Marathi, Hindi",
    city: "Pune, MH",
    summary: "Riya has 3 years of experience in community mobilization with a focus on rural health initiatives. She previously volunteered with the Maharashtra State Rural Livelihoods Mission. Her references are verified on the platform.",
  },
  {
    id: 2,
    initials: "AK",
    name: "Amit Kumar",
    role: "Community Health Volunteer",
    location: "",
    time: "1d ago",
    status: "Under Review",
    verified: false,
    color: "bg-amber-500",
    education: "B.Sc Nursing",
    languages: "Hindi, English",
    city: "Lucknow, UP",
    summary: "Amit has 5 years of experience working with community health programs in rural Uttar Pradesh.",
  },
  {
    id: 3,
    initials: "VP",
    name: "Vikram Patel",
    role: "Field Coordinator",
    location: "Mumbai",
    time: "2d ago",
    status: "Verified ID",
    verified: true,
    color: "bg-emerald-500",
    education: "MA Social Work",
    languages: "English, Hindi, Gujarati",
    city: "Mumbai, MH",
    summary: "Vikram brings extensive experience in field coordination with a background in education and skill development projects.",
  },
  {
    id: 4,
    initials: "SM",
    name: "Sneha M.",
    role: "Research Assistant",
    location: "",
    time: "3d ago",
    status: "",
    verified: false,
    color: "bg-rose-400",
    education: "M.Phil Sociology",
    languages: "English, Tamil",
    city: "Chennai, TN",
    summary: "Sneha is a research enthusiast with expertise in qualitative research methods and data analysis.",
  },
];

const NgoTalentPage = () => {
  const [selectedApplicant, setSelectedApplicant] = useState(applicants[0]);
  const [activeTab, setActiveTab] = useState("pipeline");
  const [sortBy, setSortBy] = useState("newest");

  return (
    <DashboardLayout>
      <Helmet>
        <title>Talent Management - NGO Dashboard</title>
        <meta name="description" content="Post opportunities, review applicants, and coordinate hiring efficiently." />
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Talent & Volunteer Management</h1>
            <p className="text-muted-foreground">
              Post opportunities, review applicants equally, and coordinate hiring efficiently across the national network.
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Opportunity
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">ACTIVE ROLES</p>
                  <p className="text-3xl font-bold mt-1">12</p>
                  <p className="text-sm text-muted-foreground">4 Volunteer, 8 Full-time</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">TOTAL APPLICANTS</p>
                  <p className="text-3xl font-bold mt-1">458</p>
                  <p className="text-sm text-emerald-600 flex items-center gap-1">
                    <span>↗</span> +12% this week
                  </p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <Users className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">PENDING REVIEWS</p>
                  <p className="text-3xl font-bold mt-1">34</p>
                  <p className="text-sm text-muted-foreground">Requires attention</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <ClipboardList className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-between border-b">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center justify-between">
              <TabsList className="bg-transparent h-auto p-0 gap-8">
                <TabsTrigger
                  value="posted"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 pb-3"
                >
                  Posted Opportunities
                </TabsTrigger>
                <TabsTrigger
                  value="pipeline"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 pb-3"
                >
                  Applicant Pipeline
                </TabsTrigger>
                <TabsTrigger
                  value="communications"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 pb-3"
                >
                  Communications
                </TabsTrigger>
              </TabsList>
              <Button variant="ghost" size="sm" className="gap-2">
                <Archive className="h-4 w-4" />
                Archived
              </Button>
            </div>

            <TabsContent value="pipeline" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Applicant List */}
                <Card>
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium">SORT:</span>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="newest">Date Applied (Newest)</SelectItem>
                          <SelectItem value="oldest">Date Applied (Oldest)</SelectItem>
                          <SelectItem value="name">Name</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="ghost" size="icon">
                        <SlidersHorizontal className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-2">
                      {applicants.map((applicant) => (
                        <div
                          key={applicant.id}
                          onClick={() => setSelectedApplicant(applicant)}
                          className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                            selectedApplicant.id === applicant.id
                              ? "bg-primary/5 border-l-4 border-primary"
                              : "hover:bg-muted/50"
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full ${applicant.color} text-white flex items-center justify-center text-sm font-medium`}>
                            {applicant.initials}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{applicant.name}</span>
                              <span className="text-xs text-muted-foreground">{applicant.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {applicant.role} {applicant.location && `• ${applicant.location}`}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              {applicant.status && (
                                <Badge variant={applicant.status === "New Applicant" ? "default" : "secondary"} className="text-xs">
                                  {applicant.status}
                                </Badge>
                              )}
                              {applicant.verified && (
                                <Badge variant="outline" className="text-xs">
                                  Verified ID
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground text-center mt-4">
                      Showing {applicants.length} of 458 applicants
                    </p>
                  </CardContent>
                </Card>

                {/* Applicant Detail */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full ${selectedApplicant.color} text-white flex items-center justify-center text-lg font-medium`}>
                          {selectedApplicant.initials}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg">{selectedApplicant.name}</h3>
                            {selectedApplicant.verified && (
                              <CheckCircle className="h-4 w-4 text-primary" />
                            )}
                          </div>
                          <p className="text-muted-foreground">
                            Applicant for <span className="font-medium text-foreground">{selectedApplicant.role}</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download className="h-4 w-4" />
                          Resume
                        </Button>
                        <Button variant="outline" size="sm">
                          View Full Profile
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {selectedApplicant.city}
                      </span>
                      <span className="flex items-center gap-1">
                        <GraduationCap className="h-4 w-4" />
                        {selectedApplicant.education}
                      </span>
                      <span className="flex items-center gap-1">
                        <Languages className="h-4 w-4" />
                        {selectedApplicant.languages}
                      </span>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6 flex items-start gap-2">
                      <Info className="h-4 w-4 text-blue-600 mt-0.5" />
                      <p className="text-sm text-blue-800">
                        <span className="font-medium">Privacy Protection:</span> Phone and email details are hidden. They will be revealed automatically once you initiate contact through the platform.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        APPLICANT SUMMARY
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {selectedApplicant.summary}
                      </p>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span className="font-medium">Send Message</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Template:</span>
                          <Select defaultValue="interview">
                            <SelectTrigger className="w-40">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="interview">Schedule Interview</SelectItem>
                              <SelectItem value="followup">Follow-up</SelectItem>
                              <SelectItem value="offer">Job Offer</SelectItem>
                              <SelectItem value="rejection">Rejection</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="border-l-4 border-muted pl-4 mb-3">
                        <p className="text-sm italic text-muted-foreground mb-2">
                          Subject: Interview Request for {selectedApplicant.role} Position
                        </p>
                      </div>

                      <Textarea
                        defaultValue={`Dear ${selectedApplicant.name.split(" ")[0]},

We were impressed by your background in community health. We would like to invite you for a brief video interview to discuss the ${selectedApplicant.role} role further.

Please let us know your availability for next week.`}
                        className="min-h-32 mb-3"
                      />

                      <div className="flex justify-end">
                        <Button className="gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="posted" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground text-center py-8">
                    Your posted opportunities will appear here. Click "Create Opportunity" to post a new role.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="communications" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground text-center py-8">
                    Communication history with applicants will appear here.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NgoTalentPage;
