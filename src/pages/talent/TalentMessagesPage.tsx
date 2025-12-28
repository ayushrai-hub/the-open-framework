import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Search, Send, Building2, Clock, CheckCheck, Paperclip
} from "lucide-react";

const conversations = [
  {
    id: "1",
    organization: "Pratham Education Foundation",
    role: "Teaching Assistant",
    lastMessage: "We'd like to schedule an interview with you...",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: "2",
    organization: "Goonj",
    role: "Field Coordinator",
    lastMessage: "Thank you for your application. Our team is reviewing...",
    time: "1 day ago",
    unread: false,
  },
  {
    id: "3",
    organization: "Centre for Policy Research",
    role: "Research Associate",
    lastMessage: "Your profile matches our requirements perfectly.",
    time: "3 days ago",
    unread: false,
  },
];

const messages = [
  {
    id: "1",
    sender: "Pratham Education Foundation",
    content: "Hello! Thank you for applying to the Teaching Assistant position. We've reviewed your application and are impressed with your qualifications.",
    time: "Yesterday, 2:30 PM",
    isOrg: true,
  },
  {
    id: "2",
    sender: "You",
    content: "Thank you for considering my application! I'm very excited about this opportunity.",
    time: "Yesterday, 3:15 PM",
    isOrg: false,
  },
  {
    id: "3",
    sender: "Pratham Education Foundation",
    content: "We'd like to schedule an interview with you. Would you be available for a 30-minute video call this week? Please let us know your preferred time slots.",
    time: "2 hours ago",
    isOrg: true,
  },
];

export default function TalentMessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message
      setNewMessage("");
    }
  };

  return (
    <DashboardLayout role="talent">
      <Helmet>
        <title>Messages | India DPI Platform</title>
        <meta name="description" content="Communicate with NGOs about your applications and opportunities." />
      </Helmet>

      <div className="h-[calc(100vh-12rem)]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Messages</h1>
            <p className="text-muted-foreground">Communicate with NGOs about your applications</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100%-5rem)]">
          {/* Conversations List */}
          <Card className="lg:col-span-1 flex flex-col">
            <CardHeader className="pb-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-full">
                <div className="space-y-1 p-3">
                  {conversations.map((conv) => (
                    <button
                      key={conv.id}
                      onClick={() => setSelectedConversation(conv)}
                      className={`w-full flex items-start gap-3 p-3 rounded-lg text-left transition-colors ${
                        selectedConversation.id === conv.id 
                          ? "bg-primary/10" 
                          : "hover:bg-muted"
                      }`}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-muted">
                          <Building2 className="h-5 w-5 text-muted-foreground" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className={`font-medium text-sm truncate ${conv.unread ? "text-foreground" : "text-muted-foreground"}`}>
                            {conv.organization}
                          </p>
                          <span className="text-xs text-muted-foreground whitespace-nowrap">{conv.time}</span>
                        </div>
                        <p className="text-xs text-primary">{conv.role}</p>
                        <p className={`text-sm truncate mt-1 ${conv.unread ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                          {conv.lastMessage}
                        </p>
                      </div>
                      {conv.unread && (
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      )}
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Messages */}
          <Card className="lg:col-span-2 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10">
                      <Building2 className="h-5 w-5 text-primary" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{selectedConversation.organization}</p>
                    <p className="text-sm text-muted-foreground">{selectedConversation.role}</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  View Application
                </Badge>
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isOrg ? "justify-start" : "justify-end"}`}
                  >
                    <div className={`max-w-[80%] ${msg.isOrg ? "order-2" : "order-1"}`}>
                      {msg.isOrg && (
                        <div className="flex items-center gap-2 mb-1">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="bg-muted text-xs">
                              <Building2 className="h-3 w-3" />
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-xs font-medium text-muted-foreground">{msg.sender}</span>
                        </div>
                      )}
                      <div className={`p-3 rounded-lg ${
                        msg.isOrg 
                          ? "bg-muted text-foreground" 
                          : "bg-primary text-primary-foreground"
                      }`}>
                        <p className="text-sm">{msg.content}</p>
                      </div>
                      <div className={`flex items-center gap-1 mt-1 text-xs text-muted-foreground ${
                        msg.isOrg ? "justify-start" : "justify-end"
                      }`}>
                        <Clock className="h-3 w-3" />
                        <span>{msg.time}</span>
                        {!msg.isOrg && <CheckCheck className="h-3 w-3 ml-1" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t border-border">
              <div className="flex items-end gap-3">
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Textarea
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="min-h-[80px] resize-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button onClick={handleSendMessage} className="shrink-0">
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
