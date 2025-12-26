import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Key, 
  AlertCircle, 
  Users, 
  ChevronDown, 
  ChevronRight,
  Home,
  Wallet,
  Network,
  Download,
  FileText,
  Copy,
  Check
} from "lucide-react";

const ApiReferencePage = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(["citizens"]);
  const [copiedCode, setCopiedCode] = useState(false);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(curlCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const curlCode = `curl --request GET \\
  --url 'https://api.dpi.gov.in/v2/citizens/12345' \\
  --header 'Authorization: Bearer <YOUR_TOKEN>' \\
  --header 'Content-Type: application/json'`;

  const nodeCode = `const response = await fetch(
  'https://api.dpi.gov.in/v2/citizens/12345',
  {
    headers: {
      'Authorization': 'Bearer <YOUR_TOKEN>',
      'Content-Type': 'application/json'
    }
  }
);
const data = await response.json();`;

  const pythonCode = `import requests

response = requests.get(
    'https://api.dpi.gov.in/v2/citizens/12345',
    headers={
        'Authorization': 'Bearer <YOUR_TOKEN>',
        'Content-Type': 'application/json'
    }
)
data = response.json()`;

  const responseJson = `{
  "data": {
    "id": "123456789012",
    "full_name": "Aarav Sharma",
    "status": "active",
    "verification_tier": "verified",
    "federation_node": "IN_MH_01"
  }
}`;

  const sidebarItems = [
    {
      category: "CORE MODULES",
      items: [
        { icon: BookOpen, label: "Getting Started", href: "#getting-started" },
        { icon: Key, label: "Authentication", href: "#authentication" },
        { icon: AlertCircle, label: "Errors", href: "#errors" },
      ]
    },
    {
      category: "CIVIL REGISTRY API",
      items: [
        { icon: FileText, label: "Overview", href: "#overview" },
        { 
          icon: Users, 
          label: "Citizens", 
          href: "#citizens",
          expandable: true,
          subItems: [
            { method: "GET", label: "Retrieve Citizen" },
            { method: "POST", label: "Register Citizen" },
            { method: "PUT", label: "Update Record" },
          ]
        },
        { icon: Home, label: "Households", href: "#households" },
      ]
    },
    {
      category: "PAYMENTS INTERFACE",
      items: [
        { icon: Wallet, label: "Beneficiaries", href: "#beneficiaries" },
        { icon: Network, label: "Disbursements", href: "#disbursements" },
      ]
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>API Reference - Civil Registry API | DPI Platform</title>
        <meta name="description" content="Complete API documentation for the Civil Registry API. Programmatically manage citizen identities, households, and demographic data." />
      </Helmet>

      <div className="min-h-screen bg-background flex">
        {/* Left Sidebar */}
        <aside className="w-64 border-r border-border bg-muted/30 flex-shrink-0 sticky top-0 h-screen overflow-y-auto">
          <div className="p-4">
            {sidebarItems.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-3">
                  {section.category}
                </h3>
                <nav className="space-y-1">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx}>
                      <button
                        onClick={() => item.expandable && toggleSection(item.label.toLowerCase())}
                        className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                          item.label === "Citizens" 
                            ? "bg-primary/10 text-primary font-medium" 
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </span>
                        {item.expandable && (
                          expandedSections.includes(item.label.toLowerCase()) 
                            ? <ChevronDown className="h-4 w-4" />
                            : <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                      {item.expandable && expandedSections.includes(item.label.toLowerCase()) && item.subItems && (
                        <div className="ml-6 mt-1 space-y-1">
                          {item.subItems.map((subItem, subIdx) => (
                            <a
                              key={subIdx}
                              href="#"
                              className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                            >
                              <Badge 
                                variant="outline" 
                                className={`text-[10px] px-1.5 py-0 font-mono ${
                                  subItem.method === "GET" ? "text-emerald-600 border-emerald-300 bg-emerald-50" :
                                  subItem.method === "POST" ? "text-blue-600 border-blue-300 bg-blue-50" :
                                  "text-amber-600 border-amber-300 bg-amber-50"
                                }`}
                              >
                                {subItem.method}
                              </Badge>
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-8 py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <a href="/" className="hover:text-foreground">Home</a>
              <span>/</span>
              <a href="/resources/api" className="hover:text-foreground">API Reference</a>
              <span>/</span>
              <span className="text-foreground">Civil Registry API</span>
            </nav>

            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="text-3xl font-bold text-foreground">Civil Registry API</h1>
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-300">
                    <Check className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>
                <p className="text-muted-foreground max-w-xl">
                  Programmatically manage citizen identities, households, and demographic data. 
                  This API ensures institutional neutrality by providing raw, verified data structures 
                  suitable for both public and private sector integrations.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 border border-border rounded-md px-3 py-1.5 text-sm">
                  <span className="text-muted-foreground">VER:</span>
                  <span className="font-medium">v2.1 (Latest)</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  PDF
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Offline Guide
                </Button>
              </div>
            </div>

            {/* Federated Architecture Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <Network className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Federated Architecture Notice</h3>
                  <p className="text-sm text-muted-foreground">
                    This API interacts with a distributed mesh of state-level registry nodes. 
                    Read operations are routed to the nearest available node for low latency, 
                    while write operations are eventually consistent across the federation.{" "}
                    <a href="#" className="text-primary hover:underline">Learn about topology</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Endpoint */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-300 font-mono">
                  GET
                </Badge>
                <code className="text-lg font-mono text-foreground">/v2/citizens/{"{citizen_id}"}</code>
              </div>
              <p className="text-muted-foreground mb-6">
                Retrieves the public profile and verification status of a specific citizen entity. 
                This endpoint does not return sensitive biometric data, which requires a separate 
                specialized authorization flow.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {/* Parameters */}
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    PATH PARAMETERS
                  </h3>
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <code className="font-mono text-foreground">citizen_id</code>
                      <Badge variant="outline" className="text-red-600 border-red-300 text-[10px]">required</Badge>
                      <span className="text-xs text-muted-foreground">string</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The unique 12-digit identifier (DID) assigned to the citizen.
                    </p>
                  </div>

                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    QUERY PARAMETERS
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <code className="font-mono text-foreground">include_household</code>
                        <span className="text-xs text-muted-foreground">boolean</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        If true, returns the linked household ID and summary. Defaults to <code className="bg-muted px-1 rounded">false</code>.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <code className="font-mono text-foreground">verification_level</code>
                        <span className="text-xs text-muted-foreground">enum</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Filter fields based on trust assurance level. Options: <code className="bg-muted px-1 rounded">basic</code>, <code className="bg-muted px-1 rounded">verified</code>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Code Examples */}
                <div>
                  <div className="bg-slate-900 rounded-lg overflow-hidden">
                    <Tabs defaultValue="curl" className="w-full">
                      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-700">
                        <TabsList className="bg-transparent h-auto p-0 gap-0">
                          <TabsTrigger 
                            value="curl" 
                            className="bg-slate-800 text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-slate-400 rounded-md px-3 py-1 text-sm"
                          >
                            cURL
                          </TabsTrigger>
                          <TabsTrigger 
                            value="node" 
                            className="data-[state=inactive]:bg-transparent data-[state=inactive]:text-slate-400 rounded-md px-3 py-1 text-sm"
                          >
                            Node.js
                          </TabsTrigger>
                          <TabsTrigger 
                            value="python" 
                            className="data-[state=inactive]:bg-transparent data-[state=inactive]:text-slate-400 rounded-md px-3 py-1 text-sm"
                          >
                            Python
                          </TabsTrigger>
                        </TabsList>
                        <button onClick={handleCopyCode} className="text-slate-400 hover:text-white">
                          {copiedCode ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                      <TabsContent value="curl" className="m-0 p-4">
                        <pre className="text-sm text-slate-300 font-mono whitespace-pre-wrap">
                          <span className="text-pink-400">curl</span> --request GET \{"\n"}
                          {"  "}--url <span className="text-green-400">'https://api.dpi.gov.in/v2/citizens/12345'</span> \{"\n"}
                          {"  "}--header <span className="text-amber-400">'Authorization: Bearer {"<YOUR_TOKEN>"}'</span> \{"\n"}
                          {"  "}--header <span className="text-amber-400">'Content-Type: application/json'</span>
                        </pre>
                      </TabsContent>
                      <TabsContent value="node" className="m-0 p-4">
                        <pre className="text-sm text-slate-300 font-mono whitespace-pre-wrap">{nodeCode}</pre>
                      </TabsContent>
                      <TabsContent value="python" className="m-0 p-4">
                        <pre className="text-sm text-slate-300 font-mono whitespace-pre-wrap">{pythonCode}</pre>
                      </TabsContent>
                    </Tabs>

                    {/* Response */}
                    <div className="border-t border-slate-700 px-4 py-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-400 uppercase tracking-wider">RESPONSE</span>
                        <Badge className="bg-emerald-900/50 text-emerald-400 border-emerald-700 text-xs">
                          ● 200 OK
                        </Badge>
                      </div>
                      <pre className="text-sm text-slate-300 font-mono whitespace-pre-wrap">
                        <span className="text-slate-500">{"{"}</span>{"\n"}
                        {"  "}<span className="text-blue-400">"data"</span>: <span className="text-slate-500">{"{"}</span>{"\n"}
                        {"    "}<span className="text-blue-400">"id"</span>: <span className="text-green-400">"123456789012"</span>,{"\n"}
                        {"    "}<span className="text-blue-400">"full_name"</span>: <span className="text-green-400">"Aarav Sharma"</span>,{"\n"}
                        {"    "}<span className="text-blue-400">"status"</span>: <span className="text-green-400">"active"</span>,{"\n"}
                        {"    "}<span className="text-blue-400">"verification_tier"</span>: <span className="text-green-400">"verified"</span>,{"\n"}
                        {"    "}<span className="text-blue-400">"federation_node"</span>: <span className="text-cyan-400">"IN_MH_01"</span>{"\n"}
                        {"  "}<span className="text-slate-500">{"}"}</span>{"\n"}
                        <span className="text-slate-500">{"}"}</span>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default ApiReferencePage;
