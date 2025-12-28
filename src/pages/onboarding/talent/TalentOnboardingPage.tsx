import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Sparkles,
  Lock,
  Shield,
  ShieldCheck,
  Info,
  X,
  Plus,
  SlidersHorizontal,
  Search,
  Briefcase,
  FolderOpen,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const sidebarSteps = [
  { number: 1, label: "Experience & Role", status: "in_progress" as const },
  { number: 2, label: "Skills & Taxonomy", status: "pending" as const },
  { number: 3, label: "Availability & Location", status: "pending" as const },
  { number: 4, label: "Privacy & Visibility", status: "pending" as const },
];

const experienceLevels = [
  { id: "entry", label: "Entry Level", sublabel: "0-2 years" },
  { id: "mid", label: "Mid-Level", sublabel: "3-5 years" },
  { id: "senior", label: "Senior", sublabel: "5-10 years" },
  { id: "executive", label: "Executive", sublabel: "10+ years" },
];

const workTypes = [
  { id: "fulltime", label: "Full-time", sublabel: "40hr/wk" },
  { id: "parttime", label: "Part-time", sublabel: "20hr/wk" },
  { id: "contract", label: "Contract", sublabel: "Project" },
  { id: "volunteer", label: "Volunteer", sublabel: "Pro-bono" },
];

const suggestedSkills = ["Data Analysis", "Public Policy"];
const locations = ["New Delhi, Delhi", "Mumbai, Maharashtra", "Bangalore, Karnataka", "Chennai, Tamil Nadu"];

export default function TalentOnboardingPage() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState("mid");
  const [selectedWorkTypes, setSelectedWorkTypes] = useState<string[]>(["fulltime", "contract"]);
  const [skills, setSkills] = useState<string[]>(["Impact Assessment", "Grant Writing"]);
  const [skillSearch, setSkillSearch] = useState("");
  const [location, setLocation] = useState("New Delhi, Delhi");
  const [openToRemote, setOpenToRemote] = useState(true);
  const [profileHidden, setProfileHidden] = useState(true);
  const [jobFunction, setJobFunction] = useState("");

  const toggleWorkType = (id: string) => {
    setSelectedWorkTypes(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const addSkill = (skill: string) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  const handleNext = () => {
    navigate("/talent/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Talent Profile Setup | Civil Society Talent Registry</title>
      </Helmet>

      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container-wide flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <div className="font-semibold text-text-primary">Civil Society Talent Registry</div>
              <div className="text-xs text-text-secondary">National DPI Platform</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-sm text-emerald-700 dark:text-emerald-300">
              <Lock className="h-3.5 w-3.5" />
              End-to-End Encrypted
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-text-primary">Priya Sharma</span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-wide px-4 py-10">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <h2 className="font-semibold text-text-primary mb-2">Profile Setup</h2>
            <p className="text-sm text-text-secondary mb-6">Complete these steps to join the federated network.</p>

            <div className="space-y-3">
              {sidebarSteps.map((step) => (
                <div
                  key={step.number}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    step.status === "in_progress" 
                      ? "bg-primary/10 border border-primary" 
                      : "bg-muted/30"
                  }`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium ${
                    step.status === "in_progress"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {step.number}
                  </div>
                  <div>
                    <div className={`text-sm font-medium ${
                      step.status === "in_progress" ? "text-primary" : "text-text-secondary"
                    }`}>
                      {step.label}
                    </div>
                    {step.status === "in_progress" && (
                      <div className="text-xs text-text-secondary">In Progress</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Info Card */}
            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-text-primary">No Resume Required</div>
                  <p className="text-xs text-text-secondary mt-1">
                    Your profile is built from structured data to ensure fairness and searchability across the network.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-3">
            <div className="card-elevated p-8">
              {/* Experience & Role */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-text-primary mb-2">Experience & Role</h1>
                <p className="text-text-secondary mb-6">
                  Select your experience band to get started. This helps match you with the right opportunities.
                </p>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Primary Job Function
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
                    <Input
                      placeholder="e.g. Project Manager, Field Researcher, Data Analyst"
                      className="pl-10"
                      value={jobFunction}
                      onChange={(e) => setJobFunction(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    Years of Experience
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {experienceLevels.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setSelectedLevel(level.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedLevel === level.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="font-medium text-text-primary">{level.label}</div>
                        <div className="text-sm text-text-secondary">{level.sublabel}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills & Taxonomy */}
              <div className="mb-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-text-primary">Skills & Taxonomy</h2>
                    <p className="text-sm text-text-secondary">Add up to 10 skills from the national registry.</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
                  <Input
                    placeholder="Search skills (e.g. Monitoring & Evaluation)"
                    className="pl-10"
                    value={skillSearch}
                    onChange={(e) => setSkillSearch(e.target.value)}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 text-primary rounded-full text-sm"
                    >
                      {skill}
                      <button onClick={() => removeSkill(skill)}>
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  {suggestedSkills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => addSkill(skill)}
                      className="flex items-center gap-1 px-3 py-1.5 bg-muted border border-border text-text-secondary rounded-full text-sm hover:bg-muted/80"
                    >
                      <Plus className="h-3 w-3" />
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability & Location */}
              <div className="mb-8 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-3 mb-6">
                  {workTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => toggleWorkType(type.id)}
                      className={`px-4 py-3 rounded-xl border-2 text-center transition-all ${
                        selectedWorkTypes.includes(type.id)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className={`font-medium ${
                        selectedWorkTypes.includes(type.id) ? "text-primary" : "text-text-primary"
                      }`}>
                        {type.label}
                      </div>
                      <div className="text-xs text-text-secondary">{type.sublabel}</div>
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Current Location
                    </label>
                    <Select value={location} onValueChange={setLocation}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((loc) => (
                          <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2 pt-6">
                    <Switch checked={openToRemote} onCheckedChange={setOpenToRemote} />
                    <span className="text-sm text-text-primary">Open to Remote</span>
                  </div>
                </div>
              </div>

              {/* Privacy Settings */}
              <div className="p-6 bg-muted/30 rounded-xl mb-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-text-secondary mt-0.5" />
                    <div>
                      <div className="font-medium text-text-primary">Privacy Settings</div>
                      <p className="text-sm text-text-secondary mt-1">
                        By default, your profile is hidden. You are in complete control of who can see your data.
                      </p>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center gap-2 text-sm text-success">
                          <CheckCircle2 className="h-4 w-4" />
                          Hidden from public search engines
                        </div>
                        <div className="flex items-center gap-2 text-sm text-success">
                          <CheckCircle2 className="h-4 w-4" />
                          Only verified organizations can send requests
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Switch checked={profileHidden} onCheckedChange={setProfileHidden} />
                    <div className="text-xs text-text-secondary mt-1 uppercase tracking-wide">
                      Currently Hidden
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <Button variant="ghost">Save Draft</Button>
                <div className="flex items-center gap-3">
                  <Button variant="outline" asChild>
                    <Link to="/join">Back</Link>
                  </Button>
                  <Button onClick={handleNext}>
                    Next Step
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
