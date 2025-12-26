import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CheckCircle,
  Clock,
  AlertTriangle,
  FileText,
  Download,
  Calendar,
  ChevronRight,
  ExternalLink,
  HelpCircle,
  Bell,
  Filter,
  ArrowUpDown,
  Play,
  FileCheck,
  Megaphone,
} from "lucide-react";

const statusCards = [
  {
    label: "OVERALL HEALTH",
    value: "Good Standing",
    sublabel: "Stable & Compliant",
    icon: CheckCircle,
    iconColor: "text-emerald-500",
    trend: "positive",
  },
  {
    label: "NEXT DEADLINE",
    value: "15 Days",
    sublabel: "FCRA Renewal Application",
    icon: Clock,
    iconColor: "text-amber-500",
    trend: "neutral",
  },
  {
    label: "PENDING ACTIONS",
    value: "2 Items",
    sublabel: "Require your attention",
    icon: FileText,
    iconColor: "text-primary",
    trend: "neutral",
  },
];

const deadlines = [
  {
    title: "FCRA Renewal Application",
    due: "Due in 15 days",
    priority: "High Priority",
    priorityColor: "text-red-500",
    icon: AlertTriangle,
    action: "Start Filing",
  },
  {
    title: "Annual Return (Form 10BD)",
    due: "Due in 45 days",
    priority: "Standard",
    priorityColor: "text-muted-foreground",
    icon: FileText,
    action: "Prepare",
  },
  {
    title: "Quarterly Financial Report",
    due: "Due in 3 months",
    priority: "Low Priority",
    priorityColor: "text-muted-foreground",
    icon: FileCheck,
    action: "View Details",
  },
];

const actionItems = [
  {
    title: "Update Governing Board List",
    status: "Pending",
    statusColor: "bg-amber-100 text-amber-700",
    description: "Required for the upcoming Annual General Meeting filing.",
    completed: false,
    hasTemplate: true,
  },
  {
    title: "Complete CSR-1 Registration",
    status: "Submitted",
    statusColor: "bg-emerald-100 text-emerald-700",
    description: "Your application was submitted on Oct 12, 2023.",
    completed: true,
    hasReceipt: true,
  },
];

const recentFilings = [
  { name: "Annual Report 2022-23", date: "Sep 28, 2023", status: "Accepted", statusColor: "text-emerald-500" },
  { name: "Form 10A Registration", date: "Jun 15, 2023", status: "Verified", statusColor: "text-emerald-500" },
];

const regulatoryUpdates = [
  {
    date: "Oct 10, 2023",
    source: "Ministry of Home Affairs",
    title: "New amendment to FCRA banking norms for sub-accounts.",
  },
  {
    date: "Sep 22, 2023",
    source: "Income Tax Dept",
    title: "Deadline extension for Form 10B audit report filing.",
  },
  {
    date: "Aug 05, 2023",
    source: "NITI Aayog",
    title: "Updated guidelines for NGO Darpan registration renewal.",
  },
];

const knowledgeBase = [
  { title: "How to file FC-4 Annual Return", icon: FileText },
  { title: "Understanding 12A vs 80G", icon: HelpCircle },
  { title: "Video: Digital Signature Setup", icon: Play },
];

const NgoCompliancePage = () => {
  return (
    <DashboardLayout>
      <Helmet>
        <title>Compliance & Governance Center - India DPI Platform</title>
        <meta name="description" content="Manage your NGO's compliance roadmap, deadlines, and regulatory filings." />
      </Helmet>

      <div className="container-wide py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Compliance & Governance Center</h1>
            <p className="text-muted-foreground mt-1">
              Hello <span className="font-medium text-foreground">Seva Foundation</span>, here is your compliance roadmap for FY 2024-25.
            </p>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download FY 2024-25 Guide
          </Button>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {statusCards.map((card, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {card.label}
                    </p>
                    <p className="text-2xl font-bold mt-1">{card.value}</p>
                    <p className={`text-sm mt-1 ${card.trend === "positive" ? "text-emerald-600" : "text-muted-foreground"}`}>
                      {card.trend === "positive" && "↗ "}
                      {card.sublabel}
                    </p>
                  </div>
                  <div className={`p-2 rounded-lg bg-muted ${card.iconColor}`}>
                    <card.icon className="h-5 w-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Deadlines & Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
                <Button variant="link" className="text-primary p-0 h-auto">
                  View Calendar
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {deadlines.map((deadline, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-muted">
                        <deadline.icon className={`h-5 w-5 ${deadline.priorityColor}`} />
                      </div>
                      <div>
                        <p className="font-medium">{deadline.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {deadline.due} • <span className={deadline.priorityColor}>{deadline.priority}</span>
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">{deadline.action}</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Action Items Checklist */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Action Items Checklist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {actionItems.map((item, index) => (
                  <div key={index} className="flex items-start justify-between p-4 rounded-lg border border-border">
                    <div className="flex items-start gap-4">
                      <Checkbox checked={item.completed} className="mt-1" />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className={`font-medium ${item.completed ? "line-through text-muted-foreground" : ""}`}>
                            {item.title}
                          </p>
                          <Badge className={item.statusColor}>{item.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                        {!item.completed && (
                          <Button variant="link" className="text-primary p-0 h-auto text-sm mt-1">
                            Why is this needed?
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {item.hasTemplate && (
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Template
                        </Button>
                      )}
                      {item.hasReceipt && (
                        <Button variant="outline" size="sm">View Receipt</Button>
                      )}
                      {!item.completed && (
                        <Button size="sm" className="bg-primary">Start Update</Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Filings & History */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Recent Filings & History</CardTitle>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ArrowUpDown className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider py-3">
                          Document Name
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider py-3">
                          Date Filed
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider py-3">
                          Status
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentFilings.map((filing, index) => (
                        <tr key={index} className="border-b border-border last:border-0">
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-red-500" />
                              {filing.name}
                            </div>
                          </td>
                          <td className="py-4 text-muted-foreground">{filing.date}</td>
                          <td className="py-4">
                            <span className={`flex items-center gap-1 ${filing.statusColor}`}>
                              <span className="w-2 h-2 rounded-full bg-current" />
                              {filing.status}
                            </span>
                          </td>
                          <td className="py-4">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Download className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Updates & Knowledge */}
          <div className="space-y-6">
            {/* Regulatory Updates */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Megaphone className="h-5 w-5" />
                  Regulatory Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {regulatoryUpdates.map((update, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <p className="text-xs text-muted-foreground">
                      {update.date} • {update.source}
                    </p>
                    <p className="text-sm mt-1">{update.title}</p>
                  </div>
                ))}
                <Button variant="link" className="text-primary p-0 h-auto w-full justify-start">
                  View All Updates <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Knowledge Base */}
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="text-lg">Knowledge Base</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Guides and templates to help you stay compliant without the stress.
                </p>
              </CardHeader>
              <CardContent className="space-y-2">
                {knowledgeBase.map((item, index) => (
                  <Button key={index} variant="ghost" className="w-full justify-start bg-background hover:bg-muted">
                    <item.icon className="h-4 w-4 mr-2 text-primary" />
                    {item.title}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Integrated With */}
            <Card>
              <CardContent className="pt-6">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider text-center mb-4">
                  INTEGRATED WITH
                </p>
                <div className="flex justify-center gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-muted" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Data federated securely from official sources.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NgoCompliancePage;
