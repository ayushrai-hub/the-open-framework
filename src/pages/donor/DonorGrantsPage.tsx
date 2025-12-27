import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import {
  Search, MessageSquare, Clock, FileCheck, TrendingUp, CheckCircle,
  AlertCircle, ChevronRight, Paperclip, Send, X, FileText
} from "lucide-react";

const stats = [
  { label: "ACTIVE INQUIRIES", value: 24, icon: MessageSquare, change: "+3 this week", trend: "up" },
  { label: "AWAITING RESPONSE", value: 8, icon: Clock, note: "Requires follow-up" },
  { label: "UNDER REVIEW", value: 12, icon: FileCheck, note: "Due diligence phase" }
];

const inquiries = [
  {
    id: "1",
    ngo: "Pratham Education Foundation",
    location: "Mumbai, Maharashtra",
    sector: "Education",
    ref: "INQ-2023-894",
    lastUpdated: "Oct 24, 2023",
    timeAgo: "2 hours ago",
    registry: "Darpan",
    verified: true
  },
  {
    id: "2",
    ngo: "Goonj",
    location: "New Delhi, Delhi",
    sector: "Disaster Relief",
    ref: "INQ-2023-901",
    lastUpdated: "Oct 23, 2023",
    timeAgo: "1 day ago",
    registry: "CSR Portal",
    verified: true,
    unread: true
  },
  {
    id: "3",
    ngo: "Akshaya Patra Foundation",
    location: "Bengaluru, Karnataka",
    sector: "Nutrition",
    ref: "INQ-2023-882",
    lastUpdated: "Oct 20, 2023",
    timeAgo: "4 days ago",
    registry: "Darpan",
    verified: true
  },
  {
    id: "4",
    ngo: "GiveIndia Foundation",
    location: "Mumbai, Maharashtra",
    sector: "Fundraising",
    ref: "INQ-2023-810",
    lastUpdated: "Oct 15, 2023",
    timeAgo: "Last week",
    registry: "CSR Portal",
    verified: true
  },
  {
    id: "5",
    ngo: "HelpAge India",
    location: "New Delhi, Delhi",
    sector: "Elderly Care",
    ref: "INQ-2023-755",
    lastUpdated: "Sep 28, 2023",
    timeAgo: "1 month ago",
    registry: "Darpan",
    verified: true
  }
];

const inquiryDetail = {
  ngo: "Pratham Education Foundation",
  registryId: "NGO-DARPAN-MH/2016/0101569",
  sector: "Education & Literacy",
  location: "Mumbai, MH",
  verified: true,
  timeline: [
    { step: 1, label: "Sent", completed: true },
    { step: 2, label: "Discussion", completed: true, active: true },
    { step: 3, label: "Review", completed: false },
    { step: 4, label: "Grant", completed: false }
  ],
  messages: [
    {
      id: "1",
      sender: "system",
      date: "Oct 24, 10:00 AM",
      content: "Inquiry created and draft saved."
    },
    {
      id: "2",
      sender: "donor",
      date: "Oct 24, 10:15 AM",
      content: 'Hello Pratham Team, we are interested in supporting your digital literacy initiative in rural Maharashtra. Could you share the latest impact report?'
    },
    {
      id: "3",
      sender: "ngo",
      name: "Pratham Admin",
      date: "Oct 24, 02:30 PM",
      content: "Thank you for reaching out. We have attached the Q3 Impact Report. We would be happy to schedule a call to discuss further.",
      attachment: { name: "Q3_Impact_Report_2023.pdf", size: "" }
    }
  ]
};

export default function DonorGrantsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedInquiry, setSelectedInquiry] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  return (
    <DashboardLayout role="donor">
      <Helmet>
        <title>Grant & Inquiry Tracker | Donor Dashboard</title>
        <meta name="description" content="Manage ongoing conversations, review grant requests, and track status across the federated registry." />
      </Helmet>

      <div className="space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/donor/dashboard" className="hover:text-foreground">Dashboard</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Grant Inquiry Tracker</span>
        </div>

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Grant & Inquiry Tracker</h1>
          <p className="text-muted-foreground">
            Manage ongoing conversations, review grant requests, and track status across the federated registry. All data is verified against the national NGO registry nodes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</span>
                  <stat.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                {stat.change && (
                  <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </p>
                )}
                {stat.note && (
                  <p className="text-sm text-muted-foreground mt-1">{stat.note}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by NGO Name, ID, or Inquiry Ref..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Inquiry Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">NGO Details</th>
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Inquiry Ref</th>
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Last Updated</th>
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Registry Source</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inquiry) => (
                  <tr
                    key={inquiry.id}
                    className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors"
                    onClick={() => setSelectedInquiry(inquiry.id)}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        <p className="font-medium text-foreground">{inquiry.ngo}</p>
                        {inquiry.unread && <span className="w-2 h-2 rounded-full bg-primary" />}
                      </div>
                      <p className="text-sm text-muted-foreground">{inquiry.location} • {inquiry.sector}</p>
                    </td>
                    <td className="p-4 font-mono text-sm text-foreground">{inquiry.ref}</td>
                    <td className="p-4">
                      <p className="text-sm text-foreground">{inquiry.lastUpdated}</p>
                      <p className="text-xs text-muted-foreground">{inquiry.timeAgo}</p>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{inquiry.registry}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-border text-sm text-muted-foreground">
            Showing 1 to 5 of 24 results
          </div>
        </Card>

        {/* Inquiry Detail Sheet */}
        <Sheet open={!!selectedInquiry} onOpenChange={() => setSelectedInquiry(null)}>
          <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
            <SheetHeader className="flex flex-row items-start justify-between space-y-0 pb-4 border-b border-border">
              <div>
                <SheetTitle className="text-xl">{inquiryDetail.ngo}</SheetTitle>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-muted-foreground font-mono">Reg ID: {inquiryDetail.registryId}</span>
                  {inquiryDetail.verified && (
                    <Badge className="bg-green-100 text-green-700">VERIFIED</Badge>
                  )}
                </div>
              </div>
            </SheetHeader>

            <div className="py-4 space-y-6">
              {/* NGO Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Sector</p>
                  <p className="font-medium">{inquiryDetail.sector}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-medium">{inquiryDetail.location}</p>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">STATUS TIMELINE</p>
                <div className="flex items-center justify-between">
                  {inquiryDetail.timeline.map((step, index) => (
                    <div key={step.step} className="flex flex-col items-center relative">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step.completed
                          ? step.active
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {step.completed && !step.active ? <CheckCircle className="h-4 w-4" /> : step.step}
                      </div>
                      <p className={`text-xs mt-1 ${step.active ? "text-primary font-medium" : "text-muted-foreground"}`}>
                        {step.label}
                      </p>
                      {index < inquiryDetail.timeline.length - 1 && (
                        <div className="absolute top-4 left-full w-12 h-0.5 bg-border -translate-y-1/2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Log */}
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">ACTIVITY LOG</p>
                <div className="space-y-4">
                  {inquiryDetail.messages.map((message) => (
                    <div key={message.id} className={`flex gap-3 ${message.sender === "donor" ? "flex-row-reverse" : ""}`}>
                      {message.sender !== "donor" && (
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                          {message.sender === "system" ? "●" : message.name?.charAt(0)}
                        </div>
                      )}
                      <div className={`flex-1 ${message.sender === "donor" ? "text-right" : ""}`}>
                        <div className="flex items-center gap-2 mb-1 text-xs text-muted-foreground">
                          {message.sender !== "donor" && <span className="font-medium text-foreground">{message.sender === "system" ? "System" : message.name}</span>}
                          <span>{message.date}</span>
                        </div>
                        <div className={`inline-block p-3 rounded-lg text-sm ${
                          message.sender === "donor"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}>
                          {message.content}
                          {message.attachment && (
                            <div className="flex items-center gap-2 mt-2 p-2 bg-background/50 rounded">
                              <FileText className="h-4 w-4 text-red-500" />
                              <span className="text-xs">{message.attachment.name}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {message.sender === "donor" && (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary text-sm font-medium">
                          AB
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                This conversation is active. No read receipts are shared to respect privacy.
              </p>

              {/* Templates */}
              <div>
                <p className="text-xs text-muted-foreground mb-2">TEMPLATES:</p>
                <div className="flex flex-wrap gap-2">
                  {["Request Proposal", "Due Diligence Query", "Site Visit Request", "Impact Report Reminder"].map((template) => (
                    <Button key={template} variant="outline" size="sm" className="text-xs">
                      {template}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Reply Input */}
              <div className="space-y-3">
                <Textarea
                  placeholder="Type your message here..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  rows={3}
                />
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button>
                    Send <Send className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </DashboardLayout>
  );
}
