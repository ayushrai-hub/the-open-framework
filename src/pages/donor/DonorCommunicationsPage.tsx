import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/contexts/AuthContext";
import {
  Search, LayoutDashboard, Users, MessageSquare, User, Shield,
  Download, MoreVertical, Paperclip, Bold, List, Send, FileText
} from "lucide-react";

const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/donor/dashboard" },
  { id: "search", label: "Search", icon: Search, href: "/registry/search" },
  { id: "connections", label: "My Connections", icon: Users, href: "/donor/saved" },
  { id: "communications", label: "Communication Hub", icon: MessageSquare, href: "/donor/communications", active: true },
  { id: "profile", label: "Profile", icon: User, href: "/profile" }
];

const conversations = [
  {
    id: "1",
    ngo: "Green Earth Foundation",
    preview: "Regarding your grant query...",
    lastMessage: "Thanks for the clarification on the timeline.",
    time: "10:30 AM",
    unread: false,
    avatar: "/placeholder.svg"
  },
  {
    id: "2",
    ngo: "Pratham Education",
    subject: "Impact Assessment Report Q3",
    preview: "Please find attached the requested doc...",
    time: "Yesterday",
    unread: false,
    avatar: "/placeholder.svg"
  },
  {
    id: "3",
    ngo: "Rural Development Trust",
    subject: "Inquiry: Solar Pump Initiative",
    preview: "This conversation has been closed.",
    time: "",
    status: "CLOSED",
    avatar: "/placeholder.svg"
  }
];

const currentConversation = {
  id: "1",
  ngo: "Green Earth Foundation",
  regId: "GEF-2023-8892",
  verified: true,
  date: "October 24, 2023",
  messages: [
    {
      id: "1",
      sender: "ngo",
      content: 'Hello, thank you for reaching out regarding the "Clean Water for All" initiative. We have received your preliminary questions.',
      time: "10:15 AM"
    },
    {
      id: "2",
      sender: "donor",
      content: "Thank you. Could you specifically elaborate on the deployment timeline for the first 50 units? Our compliance team needs this for the grant approval cycle.",
      time: "10:22 AM"
    },
    {
      id: "3",
      sender: "ngo",
      content: "Understood. We plan to deploy the first batch within 45 days of fund receipt. I'm attaching the detailed Gantt chart below.",
      time: "10:30 AM",
      attachment: {
        name: "Deployment_Schedule_v2.pdf",
        size: "2.4 MB"
      }
    }
  ]
};

const templates = [
  "Request Proposal",
  "Due Diligence Query",
  "Site Visit Request",
  "Impact Report Reminder"
];

export default function DonorCommunicationsPage() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("open");
  const [selectedConversation, setSelectedConversation] = useState(currentConversation.id);
  const [messageText, setMessageText] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Communication Hub | Donor Dashboard</title>
        <meta name="description" content="Manage open requests and messages with NGOs across the federated network." />
      </Helmet>

      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border bg-card flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-foreground">Civil Society Platform</h2>
            <p className="text-xs text-muted-foreground">Donor Interface</p>
          </div>

          <nav className="flex-1 p-3 space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  item.active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                {user?.firstName?.charAt(0) || "A"}{user?.lastName?.charAt(0) || "B"}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {user?.firstName || "Aditya"} {user?.lastName?.charAt(0) || "B"}...
                </p>
                <p className="text-xs text-muted-foreground">Donor Account</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-3 w-3" />
              FEDERATED SECURE NETWORK
            </div>
          </div>
        </aside>

        {/* Conversation List */}
        <div className="w-80 border-r border-border bg-card flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground mb-1">Inquiries</h2>
            <p className="text-sm text-muted-foreground">Manage open requests and messages</p>
          </div>

          <div className="p-3 border-b border-border space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search NGO or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              {["Open", "Closed by NGO", "Archived"].map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter.toLowerCase().replace(/ /g, "-") ? "default" : "outline"}
                  size="sm"
                  className="text-xs"
                  onClick={() => setActiveFilter(filter.toLowerCase().replace(/ /g, "-"))}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className={`p-4 border-b border-border cursor-pointer transition-colors ${
                  selectedConversation === conv.id ? "bg-muted" : "hover:bg-muted/50"
                }`}
                onClick={() => setSelectedConversation(conv.id)}
              >
                <div className="flex items-start gap-3">
                  <img src={conv.avatar} alt="" className="w-10 h-10 rounded-full bg-muted" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium text-foreground text-sm truncate">{conv.ngo}</p>
                      <span className="text-xs text-muted-foreground shrink-0">
                        {conv.status ? (
                          <Badge variant="outline" className="text-xs">{conv.status}</Badge>
                        ) : conv.time}
                      </span>
                    </div>
                    {conv.subject && (
                      <p className="text-sm text-foreground truncate">{conv.subject}</p>
                    )}
                    <p className="text-xs text-muted-foreground truncate mt-0.5">{conv.lastMessage || conv.preview}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col bg-background">
          {/* Chat Header */}
          <div className="p-4 border-b border-border flex items-center justify-between bg-card">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-foreground">{currentConversation.ngo}</h2>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Reg ID: {currentConversation.regId}</span>
                <span>•</span>
                {currentConversation.verified && (
                  <span className="flex items-center gap-1 text-green-600">
                    <Shield className="h-3 w-3" />
                    Verified
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export History
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="text-center">
              <Badge variant="outline" className="text-xs">{currentConversation.date}</Badge>
            </div>

            {currentConversation.messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === "donor" ? "flex-row-reverse" : ""}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  message.sender === "donor" ? "bg-primary/10 text-primary" : "bg-green-100"
                }`}>
                  {message.sender === "donor" ? (
                    <span className="text-xs font-medium">{user?.firstName?.charAt(0) || "A"}{user?.lastName?.charAt(0) || "B"}</span>
                  ) : (
                    <img src="/placeholder.svg" alt="" className="w-full h-full rounded-full" />
                  )}
                </div>
                <div className={`max-w-md ${message.sender === "donor" ? "text-right" : ""}`}>
                  <div className={`inline-block p-4 rounded-lg ${
                    message.sender === "donor"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    {message.attachment && (
                      <div className={`flex items-center gap-2 mt-3 p-3 rounded ${
                        message.sender === "donor" ? "bg-primary-foreground/10" : "bg-background"
                      }`}>
                        <FileText className="h-5 w-5 text-red-500" />
                        <div className="text-left">
                          <p className="text-sm font-medium">{message.attachment.name}</p>
                          <p className="text-xs opacity-80">{message.attachment.size}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className={`text-xs text-muted-foreground mt-1 ${message.sender === "donor" ? "text-right" : ""}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}

            <p className="text-xs text-muted-foreground text-center">
              This conversation is active. No read receipts are shared to respect privacy.
            </p>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="mb-3">
              <p className="text-xs text-muted-foreground mb-2">TEMPLATES:</p>
              <div className="flex flex-wrap gap-2">
                {templates.map((template) => (
                  <Button key={template} variant="outline" size="sm" className="text-xs">
                    {template}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Textarea
                placeholder="Type your message here..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                rows={3}
                className="resize-none"
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <List className="h-4 w-4" />
                  </Button>
                </div>
                <Button>
                  Send <Send className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
