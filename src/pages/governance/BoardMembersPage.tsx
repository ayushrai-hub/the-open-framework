import { Link } from "react-router-dom";
import { 
  ExternalLink, 
  Shield, 
  AlertTriangle,
  CheckCircle2,
  Download,
  ArrowRight,
  Calendar
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const boardMembers = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Chairperson",
    term: "2023-2025",
    bio: "Former specialized surgeon with 20 years of public health experience leading major initiatives in rural India.",
    conflictOfInterest: null,
    linkedIn: "#"
  },
  {
    name: "Anjali Desai",
    role: "Vice Chair",
    term: "2023-2025",
    bio: "Senior legal counsel specializing in digital rights and privacy frameworks for emerging technologies.",
    conflictOfInterest: "Advisory role at Tech4Good",
    linkedIn: "#"
  },
  {
    name: "Vikram Singh",
    role: "Treasurer",
    term: "2022-2024",
    bio: "Chartered Accountant and former CFO of a major NGO, bringing fiscal discipline and transparency expertise.",
    conflictOfInterest: null,
    linkedIn: "#"
  },
  {
    name: "Meera Reddy",
    role: "Secretary",
    term: "2023-2025",
    bio: "Policy expert in rural development with extensive background in grassroots mobilization and community outreach.",
    conflictOfInterest: null,
    linkedIn: "#"
  },
  {
    name: "Suresh Patel",
    role: "Member",
    term: "2022-2024",
    bio: "Retired civil servant who served in the Ministry of Electronics, providing governance oversight.",
    conflictOfInterest: null,
    linkedIn: "#"
  },
  {
    name: "Priya Sharma",
    role: "Member",
    term: "2023-2025",
    bio: "Technology strategist with 15 years in enterprise software architecture and scalability planning.",
    conflictOfInterest: "Board seat at Partner Org",
    linkedIn: "#"
  },
];

const governanceDocuments = [
  {
    title: "Board Charter",
    description: "Official document outlining board responsibilities.",
    type: "pdf"
  },
  {
    title: "Board Code of Ethics",
    description: "Ethical guidelines and standards for members.",
    type: "pdf"
  },
  {
    title: "Meeting Minutes Archive",
    description: "Chronological list of redacted public minutes.",
    type: "link"
  },
];

export default function BoardMembersPage() {
  return (
    <Layout>
      <div className="bg-background">
        {/* Breadcrumb */}
        <div className="container-wide py-4">
          <nav className="flex items-center gap-2 text-sm text-text-secondary">
            <Link to="/" className="hover:text-text-primary">Home</Link>
            <span>/</span>
            <Link to="/governance" className="hover:text-text-primary">Governance</Link>
            <span>/</span>
            <span className="text-primary">Board Members</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="container-wide pb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Governing Board
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl">
                Our board members serve in a fiduciary capacity to oversee the strategic direction and 
                ensure accountability. They are committed to the principles of trust, transparency, and 
                public service.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-text-secondary bg-muted px-4 py-2 rounded-lg">
              <Calendar className="h-4 w-4 text-primary" />
              <span>AS OF OCTOBER 2023</span>
            </div>
          </div>
        </div>

        {/* Board Members Grid */}
        <div className="container-wide py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member) => (
              <div key={member.name} className="card-elevated overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  {/* Placeholder for member image - using initials */}
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-semibold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <a href={member.linkedIn} className="text-text-tertiary hover:text-primary">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <div className="inline-flex items-center px-2 py-1 bg-muted rounded text-xs text-text-secondary mb-4">
                    TERM: {member.term}
                  </div>
                  <p className="text-sm text-text-secondary mb-4">{member.bio}</p>
                  <div className="pt-4 border-t border-border">
                    {member.conflictOfInterest ? (
                      <div className="flex items-center gap-2 text-xs text-amber-600">
                        <AlertTriangle className="h-3.5 w-3.5" />
                        <span>{member.conflictOfInterest}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-xs text-text-secondary">
                        <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                        <span>Conflict of Interest Declaration: None</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Governance Documents Section */}
        <div className="container-wide py-12">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Governance Documents</h2>
              <div className="space-y-4">
                {governanceDocuments.map((doc) => (
                  <div key={doc.title} className="card-elevated p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${doc.type === 'pdf' ? 'bg-destructive/10' : 'bg-primary/10'}`}>
                        {doc.type === 'pdf' ? (
                          <Download className="h-5 w-5 text-destructive" />
                        ) : (
                          <ArrowRight className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium">{doc.title}</h4>
                        <p className="text-sm text-text-secondary">{doc.description}</p>
                      </div>
                    </div>
                    <button className="text-text-tertiary hover:text-primary">
                      {doc.type === 'pdf' ? (
                        <Download className="h-5 w-5" />
                      ) : (
                        <ArrowRight className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparency Note */}
            <div className="card-elevated p-6 bg-primary/5 border-l-4 border-primary h-fit">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-primary">Transparency Note</h3>
              </div>
              <p className="text-sm text-text-secondary mb-4">
                All board members serve strictly in a fiduciary capacity with no financial stake in the platform. 
                Conflicts of interest are disclosed publicly in their respective profiles above to ensure 
                institutional legitimacy and radical transparency.
              </p>
              <Link to="/governance#policies" className="text-sm text-primary hover:underline flex items-center gap-1">
                View full conflict of interest policy
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
