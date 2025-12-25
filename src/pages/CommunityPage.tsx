import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  MessageSquare, 
  Bookmark, 
  Clock, 
  Eye, 
  CheckCircle2,
  Edit,
  ChevronLeft,
  ChevronRight,
  Filter,
  AlertCircle,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const categories = [
  { icon: "⚖️", title: "Compliance & FCRA", subtitle: "Tax, Legal, Quarterly Returns", color: "bg-primary/10" },
  { icon: "₹", title: "Fundraising & Grants", subtitle: "CSR, Global Grants, Ethics", color: "bg-success/10" },
  { icon: "👥", title: "HR & Admin", subtitle: "Policies, Hiring, Culture", color: "bg-accent/10" },
  { icon: "🛠️", title: "Tech & Tools", subtitle: "Digital Transformation, OSS", color: "bg-warning/10" },
];

const discussions = [
  {
    id: 1,
    category: "Compliance",
    categoryColor: "bg-primary/10 text-primary",
    author: "Anonymous",
    isVerified: false,
    time: "2 hours ago",
    title: "Clarification needed on FCRA renewal timeline for multi-state NGOs",
    preview: "Our organization operates across three states and we are approaching our renewal window. The recent amendments seem to suggest a centralized filing requirement that contradicts previous state-level submissions. Has anyone navigated this...",
    replies: 12,
    views: 450,
  },
  {
    id: 2,
    category: "Tech & Tools",
    categoryColor: "bg-warning/10 text-warning",
    author: "Rajesh Kumar",
    authorLabel: "Verified NGO",
    isVerified: true,
    time: "5 hours ago",
    title: "Seeking open-source alternatives for impact measurement software",
    preview: "We are looking to move away from proprietary tools to reduce overhead. Does anyone have experience with KoboToolbox for long-term impact tracking in rural education sectors? We need offline capabilities.",
    replies: 8,
    views: 210,
    answered: true,
  },
  {
    id: 3,
    category: "HR & Admin",
    categoryColor: "bg-accent/10 text-accent",
    author: "Sarah M.",
    isVerified: false,
    time: "1 day ago",
    title: "Best practices for POSH committee formation in small remote teams",
    preview: "According to the Act, we need an external member. For a fully remote team scattered across 4 districts, how do you manage the logistics of committee meetings while remaining compliant?",
    replies: 3,
    views: 156,
  },
];

const sidebarItems = [
  { icon: MessageSquare, label: "All Discussions", active: true },
  { icon: Bookmark, label: "Saved Topics" },
  { icon: Clock, label: "My Activity" },
];

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout>
      <div className="container-wide py-8">
        {/* Header */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="badge-official">Neutral Zone</span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-text-secondary">
            Chronological Feed
          </span>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr_300px] gap-8">
          {/* Header Section - spans full width on mobile */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">Peer Support & Knowledge Exchange</h1>
            <p className="text-text-secondary mb-6 max-w-2xl">
              A neutral space for verified NGOs to share knowledge and discuss challenges. 
              Discussions are chronologically sorted and peer-moderated.
            </p>

            {/* Search */}
            <div className="flex gap-3 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Search topics like 'FCRA compliance' or 'Grant writing'..."
                  className="w-full h-11 pl-10 pr-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button>Search</Button>
            </div>
          </div>

          {/* Government Visibility Notice */}
          <div className="lg:row-start-1">
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-accent mb-2">Government Visibility</h3>
                  <p className="text-xs text-text-secondary">
                    This is public infrastructure. Discussions are visible to regulatory bodies. 
                    Anonymous posting options are available to protect identity, but content liability remains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 mt-8">
          {/* Sidebar */}
          <aside>
            <Button className="w-full mb-6">
              <Edit className="h-4 w-4 mr-2" />
              Start New Discussion
            </Button>

            <nav className="space-y-1 mb-8">
              {sidebarItems.map((item) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                    item.active
                      ? "bg-accent/10 text-link font-medium"
                      : "text-text-secondary hover:text-text-primary hover:bg-muted"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="border-t border-border pt-6">
              <h4 className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-4">
                Transparency & Rules
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <Users className="h-4 w-4 text-text-secondary mt-0.5" />
                  <span className="text-text-secondary">Moderation is peer-led. No algorithmic ranking.</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Eye className="h-4 w-4 text-text-secondary mt-0.5" />
                  <span className="text-text-secondary">Public records are archived for 7 years per IT rules.</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.title}
                  className="card-elevated p-4 text-left hover:shadow-md transition-shadow"
                >
                  <div className={`w-10 h-10 rounded-lg ${cat.color} flex items-center justify-center text-lg mb-3`}>
                    {cat.icon}
                  </div>
                  <h3 className="font-medium text-sm">{cat.title}</h3>
                  <p className="text-xs text-text-secondary">{cat.subtitle}</p>
                </button>
              ))}
            </div>

            {/* Recent Discussions */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Recent Discussions</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-secondary">Sorted by:</span>
                <select className="text-sm border border-border rounded-md px-2 py-1 bg-background">
                  <option>Newest First</option>
                  <option>Most Views</option>
                  <option>Most Replies</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="card-elevated p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      {discussion.isVerified ? (
                        <img 
                          src={`https://api.dicebear.com/7.x/initials/svg?seed=${discussion.author}`}
                          alt={discussion.author}
                          className="w-10 h-10 rounded-full"
                        />
                      ) : (
                        <Users className="h-5 w-5 text-text-secondary" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${discussion.categoryColor}`}>
                          {discussion.category}
                        </span>
                        <span className="text-xs text-text-secondary">
                          Posted by {discussion.author}
                          {discussion.authorLabel && (
                            <span className="text-success"> ({discussion.authorLabel})</span>
                          )}
                          {" • "}{discussion.time}
                        </span>
                      </div>
                      <h3 className="font-semibold mb-2">{discussion.title}</h3>
                      <p className="text-sm text-text-secondary line-clamp-2 mb-4">
                        {discussion.preview}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-text-secondary">
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-3.5 w-3.5" />
                          {discussion.replies} Replies
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3.5 w-3.5" />
                          {discussion.views} Views
                        </span>
                        {discussion.answered && (
                          <span className="flex items-center gap-1 text-success">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Answered
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-8">
              <span className="text-sm text-text-secondary">Showing 1 to 3 of 42 results</span>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="sm" disabled>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
