import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Pencil,
  Inbox,
  Send,
  Archive,
  AlertTriangle,
  Trash2,
  Search,
  ChevronRight,
  ChevronLeft,
  MoreVertical,
  DollarSign,
  FileText,
  Sparkles,
  CheckCircle,
  Star,
} from "lucide-react";

const mailboxItems = [
  { label: "Inbox", icon: Inbox, count: 3, active: true },
  { label: "Sent", icon: Send },
  { label: "Archived", icon: Archive },
  { label: "System Alerts", icon: AlertTriangle, count: 1 },
  { label: "Trash", icon: Trash2 },
];

const labels = [
  { label: "Funding", color: "bg-primary" },
  { label: "Compliance", color: "bg-amber-500" },
  { label: "Updates", color: "bg-purple-500" },
];

const messages = [
  {
    id: 1,
    sender: "Ministry of Home Affairs",
    verified: true,
    subtitle: "Compliance Division",
    subject: "FCRA Renewal: Additional Documentation Needed",
    preview: "We have reviewed your renewal document set submitted on Oct 12th. Please...",
    date: "10:30 AM",
    isActionRequired: true,
    unread: true,
  },
  {
    id: 2,
    sender: "Karnataka State Dept",
    verified: true,
    subtitle: "Via Karnataka Node",
    subject: "Clarification on CSR Fund A Impact Report",
    preview: "The grant officer has requested additional data regarding the beneficiary metrics...",
    date: "Yesterday",
    unread: true,
  },
  {
    id: 3,
    sender: "DPI System",
    verified: false,
    subtitle: "Automated Report",
    subject: "Weekly Profile Visibility Report",
    preview: "Your organization profile was viewed by 12 distinct funders this week. Click to vie...",
    date: "Oct 24",
    unread: true,
  },
  {
    id: 4,
    sender: "Azim Premji Foundation",
    verified: true,
    subtitle: "Grant Team",
    subject: "Application #4928 Received",
    preview: "This is a confirmation that we have received your application for the Q4 Educatio...",
    date: "Oct 22",
    isFunding: true,
    unread: false,
  },
  {
    id: 5,
    sender: "DPI Platform Support",
    verified: true,
    subtitle: "System Admin",
    subject: "New Feature: Bulk Document Upload",
    preview: "We have deployed a new feature allowing you to upload multiple compliance...",
    date: "Oct 20",
    isUpdate: true,
    unread: false,
  },
  {
    id: 6,
    sender: "Tamil Nadu State Node",
    verified: true,
    subtitle: "Via Tamil Nadu Node",
    subject: "Invitation: Regional NGO Summit",
    preview: "The State Department invites you to the annual summit for civil society...",
    date: "Oct 18",
    unread: false,
  },
];

const filterTabs = [
  { label: "All", icon: Inbox, active: true },
  { label: "Funding", icon: DollarSign },
  { label: "Compliance", icon: FileText },
  { label: "Platform Updates", icon: Sparkles },
];

const NgoMessagesPage = () => {
  const [selectedMailbox, setSelectedMailbox] = useState("Inbox");
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <DashboardLayout>
      <Helmet>
        <title>Messages - Seva Foundation - India DPI Platform</title>
        <meta name="description" content="View and manage your messages, communications, and notifications." />
      </Helmet>

      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-muted/30 p-4">
          <Button className="w-full mb-6 bg-primary">
            <Pencil className="h-4 w-4 mr-2" />
            Compose
          </Button>

          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">MAILBOX</p>
            {mailboxItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setSelectedMailbox(item.label)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                  selectedMailbox === item.label
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </span>
                {item.count && (
                  <Badge variant={selectedMailbox === item.label ? "secondary" : "default"} className="h-5 px-2">
                    {item.count}
                  </Badge>
                )}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-1">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">LABELS</p>
            {labels.map((label) => (
              <button
                key={label.label}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-md transition-colors"
              >
                <span className={`w-2 h-2 rounded-full ${label.color}`} />
                {label.label}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
              <div className="p-1 rounded bg-background">
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <p>All communications are end-to-end mediated by the DPI Platform for transparency.</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Breadcrumb */}
          <div className="px-6 py-3 border-b border-border bg-muted/20">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/ngo/dashboard" className="hover:text-foreground">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/ngo/dashboard" className="hover:text-foreground">Dashboard</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Inbox</span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="px-6 py-3 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              {filterTabs.map((tab) => (
                <Button
                  key={tab.label}
                  variant={activeFilter === tab.label ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(tab.label)}
                  className={activeFilter === tab.label ? "bg-primary" : ""}
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>1-50 of 248</span>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages List */}
          <ScrollArea className="flex-1">
            <div className="divide-y divide-border">
              {/* Header Row */}
              <div className="px-6 py-3 grid grid-cols-12 gap-4 text-xs font-medium text-muted-foreground uppercase tracking-wider bg-muted/20">
                <div className="col-span-1 flex items-center">
                  <Checkbox />
                </div>
                <div className="col-span-3">ENTITY / SENDER</div>
                <div className="col-span-7">SUBJECT / PREVIEW</div>
                <div className="col-span-1 text-right">DATE</div>
              </div>

              {/* Message Rows */}
              {messages.map((message) => (
                <button
                  key={message.id}
                  onClick={() => setSelectedMessage(message.id)}
                  className={`w-full px-6 py-4 grid grid-cols-12 gap-4 items-center text-left hover:bg-muted/50 transition-colors ${
                    message.unread ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="col-span-1 flex items-center gap-2">
                    <Checkbox onClick={(e) => e.stopPropagation()} />
                  </div>
                  <div className="col-span-3">
                    <div className="flex items-center gap-1">
                      <p className={`font-medium ${message.unread ? "" : "text-muted-foreground"}`}>
                        {message.sender}
                      </p>
                      {message.verified && (
                        <CheckCircle className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{message.subtitle}</p>
                  </div>
                  <div className="col-span-7">
                    <div className="flex items-center gap-2">
                      {message.isActionRequired && (
                        <Badge className="bg-red-100 text-red-700 border-0 text-xs">ACTION REQUIRED</Badge>
                      )}
                      {message.isFunding && (
                        <Badge className="bg-primary/10 text-primary border-0 text-xs">FUNDING</Badge>
                      )}
                      {message.isUpdate && (
                        <Badge className="bg-purple-100 text-purple-700 border-0 text-xs">UPDATE</Badge>
                      )}
                      <p className={`font-medium ${message.unread ? "" : "text-muted-foreground"}`}>
                        {message.subject}
                      </p>
                      {message.unread && <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{message.preview}</p>
                  </div>
                  <div className="col-span-1 text-right text-sm text-muted-foreground">
                    {message.date}
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>

          {/* Footer Actions */}
          <div className="px-6 py-3 border-t border-border bg-muted/20 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">No message selected</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">Mark as Read</Button>
              <Button variant="outline" size="sm" className="text-destructive">Delete</Button>
            </div>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
};

export default NgoMessagesPage;
