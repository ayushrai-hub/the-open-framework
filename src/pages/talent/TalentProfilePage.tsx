import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User, Settings, Lock, Shield, Bell, FileText, X, Globe, Phone,
  Info, Save, ChevronRight
} from "lucide-react";

const sidebarItems = [
  { icon: User, label: "Personal Info", id: "personal" },
  { icon: Settings, label: "Skills & Availability", id: "skills", active: true },
  { icon: FileText, label: "Experience", id: "experience" },
  { icon: Settings, label: "Preferences", id: "preferences" },
  { icon: Lock, label: "Privacy", id: "privacy" },
];

const suggestedSkills = [
  "Project Management", "Fundraising", "Hindi", "Community Outreach",
  "Data Analysis", "Grant Writing", "Social Media", "Research"
];

export default function TalentProfilePage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("skills");
  const [primaryRole, setPrimaryRole] = useState("");
  const [experience, setExperience] = useState("mid");
  const [skills, setSkills] = useState(["Project Management", "Fundraising", "Hindi"]);
  const [newSkill, setNewSkill] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState([10]);
  const [workMode, setWorkMode] = useState("remote");
  const [pincode, setPincode] = useState("110001");
  const [city, setCity] = useState("New Delhi");
  const [globalVisibility, setGlobalVisibility] = useState(true);
  const [phonePrivacy, setPhonePrivacy] = useState(true);

  const removeSkill = (skill: string) => {
    setSkills(prev => prev.filter(s => s !== skill));
  };

  const addSkill = (skill: string) => {
    if (skill && !skills.includes(skill)) {
      setSkills(prev => [...prev, skill]);
      setNewSkill("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Edit Profile | India DPI Platform</title>
        <meta name="description" content="Manage how civil society organizations see your skills and availability." />
      </Helmet>

      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container-wide flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-semibold text-foreground">DPI Platform</span>
              <p className="text-xs text-muted-foreground">India Civil Society Network</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span>English / हिंदी</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">Ravi Kumar</span>
              <Badge variant="outline" className="text-xs text-primary">ID: IND-8839-DPI</Badge>
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">RK</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-wide px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                Account Settings
              </p>
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    activeSection === item.id 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Data Sovereignty Notice */}
            <div className="mt-8 p-4 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Data Sovereignty</span>
                <br />
                Your data is hosted on <span className="font-medium text-foreground">Civil Society Registry Node A (Delhi)</span>.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-foreground">Edit Profile</h1>
              <p className="text-muted-foreground">
                Manage how civil society organizations see your skills and availability.
              </p>
            </div>

            {/* Core Competencies */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">Core Competencies</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Primary Role
                    </label>
                    <Select value={primaryRole} onValueChange={setPrimaryRole}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="program-manager">Program Manager</SelectItem>
                        <SelectItem value="researcher">Researcher</SelectItem>
                        <SelectItem value="coordinator">Coordinator</SelectItem>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="analyst">Analyst</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Years of Experience
                    </label>
                    <Select value={experience} onValueChange={setExperience}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                        <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                        <SelectItem value="senior">Senior (6-10 years)</SelectItem>
                        <SelectItem value="expert">Expert (10+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Skills & Expertise
                  </label>
                  <div className="flex flex-wrap items-center gap-2 p-3 border border-border rounded-lg bg-background">
                    {skills.map((skill) => (
                      <Badge key={skill} className="bg-primary/10 text-primary gap-1 px-3 py-1.5">
                        {skill}
                        <button onClick={() => removeSkill(skill)}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                    <Input
                      placeholder="Add a skill (e.g. Graphic Design)..."
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addSkill(newSkill)}
                      className="flex-1 min-w-[200px] border-0 shadow-none focus-visible:ring-0 px-0"
                    />
                  </div>
                  <p className="text-sm text-primary mt-2">
                    Select from the standardized DPI taxonomy for better matching.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Availability & Logistics */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Settings className="h-4 w-4 text-amber-600" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">Availability & Logistics</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-foreground">Time Commitment</label>
                      <span className="text-sm font-medium text-primary">{hoursPerWeek[0]} hrs/week</span>
                    </div>
                    <Slider
                      value={hoursPerWeek}
                      onValueChange={setHoursPerWeek}
                      max={40}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1 hr</span>
                      <span>20 hrs</span>
                      <span>40+ hrs</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-3 block">Preferred Mode</label>
                    <div className="flex gap-2">
                      {["Remote", "Hybrid", "On-site"].map((mode) => (
                        <Button
                          key={mode}
                          variant={workMode === mode.toLowerCase() ? "default" : "outline"}
                          size="sm"
                          onClick={() => setWorkMode(mode.toLowerCase())}
                          className="flex-1"
                        >
                          {mode}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">Location Preference</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                    <Input
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust & Visibility */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-green-600" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">Trust & Visibility</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Global Search Visibility</p>
                        <p className="text-sm text-muted-foreground">
                          Allow verified NGOs across the entire network to discover your profile based on skills.
                        </p>
                      </div>
                    </div>
                    <Switch checked={globalVisibility} onCheckedChange={setGlobalVisibility} />
                  </div>

                  <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Phone Number Privacy</p>
                        <p className="text-sm text-muted-foreground">
                          Only show my phone number to organizations after I accept their connection request.
                        </p>
                      </div>
                    </div>
                    <Switch checked={phonePrivacy} onCheckedChange={setPhonePrivacy} />
                  </div>
                </div>

                <div className="flex items-start gap-2 mt-4 p-3 bg-blue-50 rounded-lg">
                  <Info className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800">
                    Your data is stored securely and only shared with verified non-profits according to these settings. You <span className="font-medium">retain full ownership of your data at all times</span>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3">
              <Button variant="outline" onClick={() => navigate("/talent/dashboard")}>
                Cancel
              </Button>
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
