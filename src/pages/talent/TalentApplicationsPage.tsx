import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Search, FileText, Building2, MapPin, Calendar, CheckCircle,
  Clock, MessageSquare, ExternalLink, Filter, ArrowUpDown, MoreHorizontal,
  CalendarDays, AlertCircle
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const applications = [
  {
    id: "1",
    role: "Teaching Assistant - Primary Ed.",
    organization: "Pratham Education Foundation",
    location: "Mumbai, MH (Hybrid)",
    appliedDate: "12 days ago",
    status: "interview",
    statusLabel: "Action Required",
    registry: "National NGO Registry",
    verified: true,
    progress: 75,
    action: {
      type: "interview",
      message: "The NGO has requested a 30-min video call. Please select a slot by Oct 24.",
    }
  },
  {
    id: "2",
    role: "Field Coordinator - Relief Ops",
    organization: "Goonj",
    location: "New Delhi, DL",
    appliedDate: "15 days ago",
    status: "reviewing",
    statusLabel: "In Review",
    registry: "Delhi State Registry",
    verified: false,
    progress: 50,
    action: {
      type: "waiting",
      message: "It's been 15 days since you applied. We have automatically nudged the NGO to update your status.",
    }
  },
  {
    id: "3",
    role: "Research Associate - Policy",
    organization: "Centre for Policy Research",
    location: "New Delhi, DL",
    appliedDate: "20 days ago",
    status: "applied",
    statusLabel: "Under Review",
    registry: "National NGO Registry",
    verified: true,
    progress: 25,
  },
  {
    id: "4",
    role: "Program Coordinator",
    organization: "Akshaya Patra Foundation",
    location: "Bengaluru, KA",
    appliedDate: "1 month ago",
    status: "rejected",
    statusLabel: "Not Selected",
    registry: "Karnataka State Registry",
    verified: true,
    progress: 100,
  }
];

const stats = {
  active: 4,
  interviews: 1,
  hoursVolunteered: 120,
  hoursChange: "+12% this month"
};

export default function TalentApplicationsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("active");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "interview": return "bg-amber-100 text-amber-700 border-amber-200";
      case "reviewing": return "bg-blue-100 text-blue-700 border-blue-200";
      case "applied": return "bg-gray-100 text-gray-700 border-gray-200";
      case "rejected": return "bg-red-50 text-red-600 border-red-200";
      case "accepted": return "bg-green-100 text-green-700 border-green-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getProgressSteps = (status: string) => {
    const steps = ["Applied", "Reviewed", "Interview", "Decision"];
    const currentIndex = status === "applied" ? 0 : status === "reviewing" ? 1 : status === "interview" ? 2 : 3;
    return { steps, currentIndex };
  };

  const filteredApplications = applications.filter(app => {
    if (activeTab === "active") return app.status !== "rejected" && app.status !== "accepted";
    if (activeTab === "reviewing") return app.status === "reviewing";
    if (activeTab === "interviews") return app.status === "interview";
    if (activeTab === "closed") return app.status === "rejected" || app.status === "accepted";
    return true;
  });

  return (
    <DashboardLayout role="talent">
      <Helmet>
        <title>My Applications | India DPI Platform</title>
        <meta name="description" content="Track your job applications, schedule interviews, and manage communications with NGOs." />
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">My Applications</h1>
            <p className="text-muted-foreground">
              Track your progress, schedule interviews, and manage communications with NGOs across the IndiaCivic network.
            </p>
          </div>
          <Button onClick={() => navigate("/talent/opportunities")}>
            <Search className="h-4 w-4 mr-2" />
            Find New Roles
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Applications</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{stats.active}</p>
                </div>
                <FileText className="h-8 w-8 text-primary/30" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Interviews</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{stats.interviews}</p>
                  <p className="text-xs text-destructive mt-1">Action Required</p>
                </div>
                <CalendarDays className="h-8 w-8 text-primary/30" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Hours Volunteered</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{stats.hoursVolunteered}</p>
                  <p className="text-xs text-green-600 mt-1">{stats.hoursChange}</p>
                </div>
                <Clock className="h-8 w-8 text-primary/30" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs and Filter */}
        <div className="flex items-center justify-between">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="active">Active ({applications.filter(a => a.status !== "rejected" && a.status !== "accepted").length})</TabsTrigger>
              <TabsTrigger value="reviewing">Reviewing</TabsTrigger>
              <TabsTrigger value="interviews">Interviews</TabsTrigger>
              <TabsTrigger value="closed">Closed/History</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Sort
            </Button>
          </div>
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {filteredApplications.map((app) => {
            const { steps, currentIndex } = getProgressSteps(app.status);
            
            return (
              <Card key={app.id} className={app.status === "interview" ? "border-l-4 border-l-amber-400" : ""}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Organization Logo */}
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <Building2 className="h-6 w-6 text-muted-foreground" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground">{app.role}</h3>
                            <Badge className={getStatusColor(app.status)}>{app.statusLabel}</Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              {app.verified && <CheckCircle className="h-3 w-3 text-primary" />}
                              {app.organization}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {app.location}
                            </span>
                            <span>•</span>
                            <Badge variant="outline" className="text-xs">
                              <Building2 className="h-3 w-3 mr-1" />
                              {app.registry}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <p>Applied {app.appliedDate}</p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-xs mb-2">
                          {steps.map((step, idx) => (
                            <span 
                              key={step} 
                              className={idx <= currentIndex ? "text-primary font-medium" : "text-muted-foreground"}
                            >
                              {step}
                            </span>
                          ))}
                        </div>
                        <div className="relative h-1.5 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-500 via-amber-500 to-amber-500 rounded-full transition-all"
                            style={{ width: `${app.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Action Message */}
                      {app.action && (
                        <div className={`mt-4 p-3 rounded-lg flex items-start gap-3 ${
                          app.action.type === "interview" ? "bg-amber-50" : "bg-muted/50"
                        }`}>
                          {app.action.type === "interview" ? (
                            <Calendar className="h-5 w-5 text-amber-600 shrink-0" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-muted-foreground shrink-0" />
                          )}
                          <div>
                            <p className="font-medium text-foreground text-sm">
                              {app.action.type === "interview" ? "Interview Invitation Received" : "Awaiting Response"}
                            </p>
                            <p className="text-xs text-muted-foreground">{app.action.message}</p>
                          </div>
                          {app.action.type === "waiting" && (
                            <Button variant="link" size="sm" className="ml-auto text-primary">
                              View Details
                            </Button>
                          )}
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex items-center gap-3 mt-4">
                        {app.status === "interview" && (
                          <>
                            <Button size="sm">
                              <Calendar className="h-4 w-4 mr-2" />
                              Schedule Interview
                            </Button>
                            <Button variant="outline" size="sm">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Message NGO
                            </Button>
                          </>
                        )}
                        {app.status !== "interview" && app.status !== "rejected" && (
                          <>
                            <Button variant="ghost" size="sm">
                              View Application
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </Button>
                            <span className="text-muted-foreground">|</span>
                            <Button variant="ghost" size="sm" className="text-muted-foreground">
                              Withdraw
                            </Button>
                          </>
                        )}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="ml-auto">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View NGO Profile</DropdownMenuItem>
                            <DropdownMenuItem>Download Application</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Report Issue</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Verifiable Credentials Badge */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t">
          <CheckCircle className="h-4 w-4 text-primary" />
          <span>Verifiable Credentials Enabled</span>
        </div>
      </div>
    </DashboardLayout>
  );
}
