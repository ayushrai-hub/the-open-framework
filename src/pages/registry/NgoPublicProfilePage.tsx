import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Globe,
  Share2,
  Building2,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle,
  Users,
  FileText,
  Heart,
  Info,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";

const NgoPublicProfilePage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Pratham Education Foundation - Civil Society Registry</title>
        <meta name="description" content="View verified profile of Pratham Education Foundation on the Civil Society Registry." />
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container-wide">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center text-primary">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-semibold">Civil Society Registry</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link to="/registry/search" className="text-sm text-muted-foreground hover:text-foreground">Search Registry</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About DPI</Link>
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground">Resources</Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="relative hidden lg:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, ID, or sector..."
                  className="pl-9 w-72"
                />
              </div>
              <Button>Login</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container-wide py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/registry/search" className="hover:text-primary">Search Registry</Link>
          <span>/</span>
          <span className="text-foreground">Pratham Education Foundation</span>
        </div>

        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center">
                <Building2 className="h-12 w-12 text-muted-foreground" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-2xl font-bold">Pratham Education Foundation</h1>
                      <Badge className="bg-emerald-100 text-emerald-700 border-0">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified Trust
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>Reg No: E-1234-MUM-1995</span>
                      <span>•</span>
                      <span>Est. 1995</span>
                      <span>•</span>
                      <span className="text-emerald-600 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        Active
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">Education</Badge>
                      <Badge variant="secondary">Skill Development</Badge>
                      <Badge variant="secondary">Research</Badge>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">
                      Data last updated: 12 Oct 2023 via Ministry of Corporate Affairs
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Button variant="outline" className="gap-2">
                      <Globe className="h-4 w-4" />
                      Visit Website
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="space-y-6">
            {/* Compliance Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base uppercase tracking-wider text-muted-foreground">
                  COMPLIANCE STATUS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">FCRA Status</span>
                  <Badge className="bg-emerald-100 text-emerald-700 border-0">Valid</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">12A Registration</span>
                  <Badge className="bg-blue-100 text-blue-700 border-0">Registered</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">80G Certificate</span>
                  <Badge className="bg-emerald-100 text-emerald-700 border-0">Available</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">CSR-1 Form</span>
                  <Badge className="bg-blue-100 text-blue-700 border-0">Filed</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact & Location */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base uppercase tracking-wider text-muted-foreground">
                  CONTACT & LOCATION
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-muted to-muted/50 rounded-lg h-40 flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase mb-1">REGISTERED OFFICE</p>
                    <p className="text-sm">
                      Y.B. Chavan Center, 4th Floor,<br />
                      Gen. Jagannath Bhosale Marg,<br />
                      Nariman Point, Mumbai-400021<br />
                      Maharashtra, India
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:info@pratham.org">info@pratham.org</a>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>+91 22 2288 6975</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* External Verification */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base uppercase tracking-wider text-muted-foreground">
                  EXTERNAL VERIFICATION
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="text-xs text-muted-foreground">NITI Aayog Darpan ID</p>
                    <p className="text-sm font-medium">MH/2017/0157923</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="text-xs text-muted-foreground">Guidestar India</p>
                    <p className="text-sm font-medium">GSN-1002</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="bg-muted/50 p-1">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="impact">Impact & Reach</TabsTrigger>
                    <TabsTrigger value="financials">Financials</TabsTrigger>
                    <TabsTrigger value="governance">Governance</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-6 space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3">About the Organization</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Pratham is an innovative learning organization created to improve the quality of education in India. As one of the largest non-governmental organizations in the country, Pratham focuses on high-quality, low-cost, and replicable interventions to address gaps in the education system.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Our Mission</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        "Every Child in School and Learning Well." We work towards this by collaborating with governments, communities, parents, and teachers to create a sustainable impact on the education landscape of India.
                      </p>
                    </div>

                    {/* Impact Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <Card className="bg-blue-50 border-blue-100">
                        <CardContent className="pt-6 text-center">
                          <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                          <p className="text-2xl font-bold">4.5M+</p>
                          <p className="text-sm text-muted-foreground">Children Reached Annually</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-blue-50 border-blue-100">
                        <CardContent className="pt-6 text-center">
                          <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                          <p className="text-2xl font-bold">21</p>
                          <p className="text-sm text-muted-foreground">States & UTs Covered</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-blue-50 border-blue-100">
                        <CardContent className="pt-6 text-center">
                          <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                          <p className="text-2xl font-bold">100K+</p>
                          <p className="text-sm text-muted-foreground">Volunteers Mobilized</p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="financials" className="mt-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">Financial Overview (FY 2022-23)</h3>
                        <Button variant="link" className="text-primary p-0">
                          View Full Report
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <Card className="bg-muted/50">
                          <CardContent className="pt-6">
                            <p className="text-xs text-muted-foreground mb-1">Total Income</p>
                            <p className="text-xl font-bold">₹ 152.4 Cr</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-muted/50">
                          <CardContent className="pt-6">
                            <p className="text-xs text-muted-foreground mb-1">Total Expenditure</p>
                            <p className="text-xl font-bold">₹ 148.9 Cr</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-muted/50">
                          <CardContent className="pt-6">
                            <p className="text-xs text-muted-foreground mb-1">Prog. Expense Ratio</p>
                            <p className="text-xl font-bold text-emerald-600">92%</p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                        <Info className="h-4 w-4 text-blue-600 mt-0.5" />
                        <p className="text-sm text-blue-800">
                          Financial data is sourced from audited returns filed with the Income Tax Department.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="impact" className="mt-6">
                    <p className="text-muted-foreground">
                      Detailed impact metrics and reach data will be displayed here.
                    </p>
                  </TabsContent>

                  <TabsContent value="governance" className="mt-6">
                    <p className="text-muted-foreground">
                      Governance structure and board information will be displayed here.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Registration Details */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Registration Details</h3>
                  <Badge variant="secondary" className="text-xs">Source: MCA Registry</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase mb-1">Legal Entity Type</p>
                    <p className="font-medium">Public Charitable Trust</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase mb-1">Operational Status</p>
                    <p className="font-medium flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Active
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase mb-1">Date of Establishment</p>
                    <p className="font-medium">01 April 1995</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase mb-1">PAN Number</p>
                    <p className="font-medium">AAATP****F</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 mt-12">
        <div className="container-wide py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-3">National Civil Society Registry</h4>
              <p className="text-sm text-muted-foreground">
                A federated digital public infrastructure ensuring transparency, trust, and visibility for India's civil society ecosystem.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link to="/data-policies" className="hover:text-foreground">Data Policies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/help" className="hover:text-foreground">Help Center</Link></li>
                <li><a href="mailto:support@ncsr.gov.in" className="hover:text-foreground">support@ncsr.gov.in</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <p className="text-center text-sm text-muted-foreground mb-4">
              © 2024 National Civil Society Registry. All rights reserved.
            </p>
            <p className="text-center text-xs text-muted-foreground max-w-3xl mx-auto">
              Disclaimer: The data presented on this profile is aggregated from various public government registries (MCA, NITI Aayog, FCRA). While we strive for accuracy, the Civil Society Registry does not guarantee the real-time validity of all data points. Please refer to original source documents for legal purposes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NgoPublicProfilePage;
