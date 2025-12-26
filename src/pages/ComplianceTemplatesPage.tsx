import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Globe, 
  Scale, 
  BarChart3,
  Building2,
  Search,
  Download,
  Printer,
  Settings,
  WifiOff,
  Check
} from "lucide-react";

const ComplianceTemplatesPage = () => {
  const [activeTemplate, setActiveTemplate] = useState("tax-exemptions");
  const [activeSection, setActiveSection] = useState("introduction");
  const [offlineMode, setOfflineMode] = useState(false);

  const sidebarItems = [
    {
      category: "GETTING STARTED",
      items: [
        { icon: FileText, label: "Overview", id: "overview" },
        { icon: Scale, label: "Legal Frameworks", id: "legal" },
      ]
    },
    {
      category: "TEMPLATES",
      items: [
        { icon: Building2, label: "Tax Exemptions (12A/80G)", id: "tax-exemptions", active: true },
        { icon: Globe, label: "Foreign Funding (FCRA)", id: "fcra" },
        { icon: Scale, label: "CSR Compliance", id: "csr" },
        { icon: BarChart3, label: "Reporting Formats", id: "reporting" },
      ]
    }
  ];

  const templateCards = [
    {
      icon: FileText,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      title: "Form 10A Guide",
      description: "Step-by-step guide for initial registration.",
      format: "PDF"
    },
    {
      icon: BarChart3,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
      title: "Donor List Template",
      description: "Standard format for maintaining 80G donor records.",
      format: "XLSX"
    },
    {
      icon: FileText,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50",
      title: "Deed Sample Clauses",
      description: "Mandatory clauses for Trust Deed drafting.",
      format: "DOCX"
    }
  ];

  const tableOfContents = [
    { id: "introduction", label: "Introduction", active: true },
    { id: "eligibility", label: "Eligibility Criteria" },
    { id: "documents", label: "Required Documents" },
    { id: "walkthrough", label: "Form 10A Walkthrough" },
    { id: "signature", label: "Digital Signature" },
    { id: "submission", label: "Submission Process" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Compliance Templates - 12A/80G Application | DPI Platform</title>
        <meta name="description" content="Standardized, version-controlled templates for applying for tax exemptions under sections 12A and 80G of the Income Tax Act." />
      </Helmet>

      <div className="min-h-screen bg-background flex">
        {/* Left Sidebar */}
        <aside className="w-64 border-r border-border bg-muted/30 flex-shrink-0 sticky top-0 h-screen overflow-y-auto flex flex-col">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-foreground">Compliance Hub</h2>
            <div className="flex items-center gap-2 mt-2">
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-300 text-xs">
                Verified
              </Badge>
              <span className="text-xs text-muted-foreground">v2024.1</span>
            </div>
          </div>

          <div className="flex-1 p-4">
            {sidebarItems.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="text-xs font-semibold text-muted-foreground tracking-wider mb-3">
                  {section.category}
                </h3>
                <nav className="space-y-1">
                  {section.items.map((item, itemIdx) => (
                    <button
                      key={itemIdx}
                      onClick={() => setActiveTemplate(item.id)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                        item.active || activeTemplate === item.id
                          ? "bg-primary/10 text-primary font-medium" 
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            ))}
          </div>

          {/* Offline Mode Toggle */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <WifiOff className="h-4 w-4" />
                Offline Mode
              </div>
              <Switch checked={offlineMode} onCheckedChange={setOfflineMode} />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-8 py-8">
            {/* Breadcrumb & Search */}
            <div className="flex items-center justify-between mb-6">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <a href="/" className="hover:text-foreground">Home</a>
                <span>/</span>
                <a href="/resources/templates" className="hover:text-foreground">Resources</a>
                <span>/</span>
                <a href="/resources/templates" className="hover:text-foreground">Compliance</a>
                <span>/</span>
                <span className="text-foreground">12A/80G Templates</span>
              </nav>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search 80G forms, FCRA formats..." 
                  className="pl-10 w-80 bg-muted/50"
                />
              </div>
            </div>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-3xl font-bold text-foreground">12A & 80G Application Templates</h1>
                <Badge className="bg-blue-100 text-blue-700 border-blue-300">
                  Verified by CBDT
                </Badge>
              </div>
              <p className="text-muted-foreground max-w-3xl">
                Standardized, version-controlled templates for applying for tax exemptions under sections 
                12A and 80G of the Income Tax Act. Sourced directly from the Central Board of Direct Taxes (CBDT).
              </p>
            </div>

            {/* Template Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {templateCards.map((card, idx) => (
                <div key={idx} className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg ${card.iconBg}`}>
                      <card.icon className={`h-5 w-5 ${card.iconColor}`} />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{card.format}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              ))}
            </div>

            {/* Tabs & Actions */}
            <div className="flex items-center justify-between mb-6">
              <Tabs defaultValue="preview" className="w-auto">
                <TabsList className="bg-muted/50">
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                  <TabsTrigger value="instructions">Instructions</TabsTrigger>
                  <TabsTrigger value="changelog">Changelog</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Settings className="h-4 w-4" />
                  Source: Ministry of Finance
                </div>
                <Button variant="outline" size="sm">
                  <Printer className="h-4 w-4 mr-2" />
                  Print
                </Button>
                <Button size="sm" className="bg-primary">
                  <Download className="h-4 w-4 mr-2" />
                  Download Pack (v2.4)
                </Button>
              </div>
            </div>

            {/* Document Preview */}
            <div className="grid grid-cols-[200px_1fr] gap-6">
              {/* Table of Contents */}
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  ON THIS PAGE
                </h3>
                <nav className="space-y-1">
                  {tableOfContents.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full text-left px-3 py-1.5 text-sm rounded transition-colors ${
                        activeSection === item.id
                          ? "text-primary font-medium border-l-2 border-primary bg-primary/5" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Document */}
              <div className="bg-muted/30 border border-border rounded-lg p-8">
                <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto">
                  {/* Form Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide mb-1">
                        APPLICATION FOR REGISTRATION
                      </h2>
                      <p className="text-muted-foreground italic">
                        Under Section 12A of Income Tax Act, 1961
                      </p>
                    </div>
                    <div className="text-right border border-border rounded px-3 py-2">
                      <div className="font-bold text-foreground">FORM NO.</div>
                      <div className="text-2xl font-bold text-foreground">10A</div>
                      <div className="text-xs text-muted-foreground">See Rule 17A</div>
                    </div>
                  </div>

                  <div className="border-t-2 border-foreground mb-6"></div>

                  {/* Form Content */}
                  <div className="space-y-4 text-foreground">
                    <p>To,</p>
                    <p className="ml-8">The Principal Commissioner / Commissioner of Income Tax,</p>
                    <p>Sir/Madam,</p>
                    <p>
                      I, on behalf of{" "}
                      <span className="inline-block border-b border-dashed border-primary px-2 bg-primary/5">
                        [Name of Trust/Institution]
                      </span>
                      , hereby apply for the registration of the said trust/institution under section 12A of the Income-tax Act, 1961.
                    </p>
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

export default ComplianceTemplatesPage;
