import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ChevronRight, FileText, Download, RefreshCw, Filter, ArrowRight,
  CheckCircle, Database, HardDrive, FileSpreadsheet, Table, Shield
} from "lucide-react";

const stats = [
  { label: "Reports Generated (YTD)", value: "24", change: "+3 this month", changeType: "positive" },
  { label: "Connected Nodes", value: "18", status: "Live", statusType: "success" },
  { label: "Storage Used", value: "45 MB", note: "Of 5GB quota" }
];

const recentReports = [
  {
    id: "1",
    name: "FY23-24 Impact Summary",
    size: "2.4 MB",
    type: "Annual Report",
    icon: FileText,
    date: "Oct 24, 2023",
    time: "10:45 AM",
    source: "Federated (All)",
    sourceType: "federated",
    status: "Ready",
    statusType: "success"
  },
  {
    id: "2",
    name: "Q3 Education Sector Logs",
    size: "845 KB",
    type: "Raw Data",
    icon: FileSpreadsheet,
    date: "Oct 22, 2023",
    time: "02:15 PM",
    source: "Partial (MH, KA)",
    sourceType: "partial",
    status: "Ready",
    statusType: "success"
  },
  {
    id: "3",
    name: "Custom Funding Analysis",
    size: "Calculating...",
    type: "Custom",
    icon: RefreshCw,
    date: "Just now",
    time: "--",
    source: "Federated (All)",
    sourceType: "federated",
    status: "Processing",
    statusType: "processing"
  },
  {
    id: "4",
    name: "Healthcare Beneficiary Reach",
    size: "1.2 MB",
    type: "XLS",
    icon: Table,
    date: "Sep 15, 2023",
    time: "09:30 AM",
    source: "UP District Nodes",
    sourceType: "partial",
    status: "Ready",
    statusType: "success"
  }
];

export default function DonorReportsPage() {
  const [reportType, setReportType] = useState("impact-summary");
  const [geography, setGeography] = useState("national");
  const [sector, setSector] = useState("all");
  const [exportFormat, setExportFormat] = useState("pdf");

  return (
    <DashboardLayout role="donor">
      <Helmet>
        <title>Reports & Exports | Donor Dashboard</title>
        <meta name="description" content="Access aggregated data regarding your funding history and discovery activities across the federated network." />
      </Helmet>

      <div className="space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/donor/dashboard" className="hover:text-foreground">Donor Dashboard</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Reports & Exports</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Reports & Data Exports</h1>
            <p className="text-muted-foreground">
              Access aggregated data regarding your funding history and discovery activities across the federated network. Securely export insights for offline analysis.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground border border-border rounded-lg px-3 py-2">
            <Shield className="h-4 w-4 text-primary" />
            DPI Privacy Standards Compliant
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Report Generator */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="h-5 w-5" />
                  Generate New Report
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Report Type</Label>
                  <Select value={reportType} onValueChange={setReportType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="impact-summary">Impact Summary (Aggregated)</SelectItem>
                      <SelectItem value="funding-history">Funding History</SelectItem>
                      <SelectItem value="compliance-audit">Compliance Audit</SelectItem>
                      <SelectItem value="custom">Custom Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Timeframe</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <Input type="text" placeholder="mm/dd/yyyy" className="pl-3" />
                    </div>
                    <div className="relative">
                      <Input type="text" placeholder="mm/dd/yyyy" className="pl-3" />
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {["FY 23-24", "Last Quarter", "YTD"].map((preset) => (
                      <Button key={preset} variant="outline" size="sm" className="text-xs">
                        {preset}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Geography</Label>
                  <Select value={geography} onValueChange={setGeography}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="national">All States (National)</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="delhi">Delhi NCR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Sector</Label>
                  <Select value={sector} onValueChange={setSector}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sectors</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="environment">Environment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Export Format</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: "pdf", label: "PDF", icon: FileText },
                      { value: "csv", label: "CSV", icon: FileSpreadsheet },
                      { value: "excel", label: "Excel", icon: Table }
                    ].map((format) => (
                      <Button
                        key={format.value}
                        variant={exportFormat === format.value ? "default" : "outline"}
                        size="sm"
                        className="flex flex-col items-center gap-1 h-auto py-3"
                        onClick={() => setExportFormat(format.value)}
                      >
                        <format.icon className="h-5 w-5" />
                        <span className="text-xs">{format.label}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <Button className="w-full">
                  Generate Report <ArrowRight className="h-4 w-4 ml-2" />
                </Button>

                <p className="text-xs text-muted-foreground">
                  Data is aggregated to protect beneficiary privacy in accordance with DPI standards. Individual PII is automatically redacted at the federated node level before consolidation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Stats & Recent Exports */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{stat.label}</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      {stat.change && (
                        <span className="text-sm text-green-600">{stat.change}</span>
                      )}
                      {stat.status && (
                        <span className="flex items-center gap-1 text-sm text-green-600">
                          <span className="w-2 h-2 rounded-full bg-green-500" />
                          {stat.status}
                        </span>
                      )}
                      {stat.note && (
                        <span className="text-sm text-muted-foreground">{stat.note}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Exports Table */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="text-lg">Recent Exports</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Report Name</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Date Generated</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Data Source</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wide">Status</th>
                        <th className="p-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentReports.map((report) => (
                        <tr key={report.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded flex items-center justify-center ${
                                report.type === "Annual Report" ? "bg-red-100" :
                                report.type === "Raw Data" ? "bg-green-100" :
                                report.type === "Custom" ? "bg-blue-100" : "bg-purple-100"
                              }`}>
                                <report.icon className={`h-5 w-5 ${
                                  report.type === "Annual Report" ? "text-red-600" :
                                  report.type === "Raw Data" ? "text-green-600" :
                                  report.type === "Custom" ? "text-blue-600" : "text-purple-600"
                                }`} />
                              </div>
                              <div>
                                <p className="font-medium text-foreground">{report.name}</p>
                                <p className="text-xs text-muted-foreground">{report.size} • {report.type}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <p className="text-sm text-foreground">{report.date}</p>
                            <p className="text-xs text-muted-foreground">{report.time}</p>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              {report.sourceType === "federated" ? (
                                <Database className="h-4 w-4 text-primary" />
                              ) : (
                                <HardDrive className="h-4 w-4 text-amber-600" />
                              )}
                              <span className="text-sm">{report.source}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge className={
                              report.statusType === "success" ? "bg-green-100 text-green-700" :
                              "bg-blue-100 text-blue-700"
                            }>
                              • {report.status}
                            </Badge>
                          </td>
                          <td className="p-4">
                            {report.status === "Ready" && (
                              <Button variant="ghost" size="icon">
                                <Download className="h-4 w-4" />
                              </Button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
                  <span>Showing 4 of 12 reports</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Previous</Button>
                    <Button variant="outline" size="sm">Next</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
