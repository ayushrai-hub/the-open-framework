import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Camera, Save, X, BadgeCheck, Eye, Lock, Plus, Trash2,
  Mail, Phone, Linkedin, Globe, Twitter, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Layout } from "@/components/layout/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

interface Experience {
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
}

export default function EditProfilePage() {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();
  const [hasChanges, setHasChanges] = useState(false);

  const [formData, setFormData] = useState({
    fullName: user ? `${user.firstName} ${user.lastName}` : "",
    displayName: user?.displayName || "",
    pronouns: user?.pronouns || "",
    location: user?.location || "",
    bio: user?.bio || "",
    email: user?.email || "",
    phone: user?.phone || "",
    twitter: user?.twitter || "",
    linkedIn: user?.linkedIn || "",
    website: user?.website || "",
  });

  const [skills, setSkills] = useState<string[]>(user?.skills || []);
  const [newSkill, setNewSkill] = useState("");
  const [experiences, setExperiences] = useState<Experience[]>([
    { role: "Program Director", organization: "TechForGood India", startDate: "Jan 2019", endDate: "Present" }
  ]);

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setHasChanges(true);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
      setHasChanges(true);
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(s => s !== skillToRemove));
    setHasChanges(true);
  };

  const handleAddExperience = () => {
    setExperiences([...experiences, { role: "", organization: "", startDate: "", endDate: "" }]);
    setHasChanges(true);
  };

  const handleExperienceChange = (index: number, field: keyof Experience, value: string) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
    setHasChanges(true);
  };

  const handleSave = () => {
    const [firstName, ...lastNameParts] = formData.fullName.split(" ");
    updateUser({
      firstName,
      lastName: lastNameParts.join(" "),
      displayName: formData.displayName,
      bio: formData.bio,
      location: formData.location,
      skills,
      phone: formData.phone,
      linkedIn: formData.linkedIn,
      twitter: formData.twitter,
      website: formData.website,
      pronouns: formData.pronouns,
    });
    toast.success("Profile updated successfully");
    setHasChanges(false);
    navigate("/profile");
  };

  const handleCancel = () => {
    if (hasChanges) {
      if (confirm("You have unsaved changes. Are you sure you want to leave?")) {
        navigate("/profile");
      }
    } else {
      navigate("/profile");
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Edit Profile | India DPI Platform</title>
        <meta name="description" content="Update your personal information and manage privacy settings." />
      </Helmet>

      <div className="bg-muted/30 min-h-screen">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-background">
          <div className="container-wide py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-text-secondary hover:text-text-primary">Home</Link>
              <span className="text-text-secondary">&gt;</span>
              <Link to="/profile" className="text-text-secondary hover:text-text-primary">Profile</Link>
              <span className="text-text-secondary">&gt;</span>
              <span className="text-text-primary font-medium">Edit</span>
            </nav>
          </div>
        </div>

        <div className="container-wide py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-text-primary">Edit Profile</h1>
              <p className="text-text-secondary mt-1">Update your personal information and manage privacy settings.</p>
            </div>
            <Badge className="bg-primary/10 text-primary border-0">
              <BadgeCheck className="h-3.5 w-3.5 mr-1" />
              Federated ID Verified
            </Badge>
          </div>

          <div className="max-w-3xl space-y-6">
            {/* Basic Identity */}
            <Card>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Basic Identity</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    <Eye className="h-3 w-3 mr-1" />
                    PUBLIC VIEW
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                        {user.avatar ? (
                          <img src={user.avatar} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <div className="text-2xl font-bold text-text-secondary">
                            {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                          </div>
                        )}
                      </div>
                      <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/90">
                        <Camera className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="text-xs text-text-secondary">JPG or PNG, max 2MB</span>
                  </div>

                  {/* Name Fields */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Badge variant="outline" className="text-xs text-amber-600 border-amber-200">
                          <Lock className="h-3 w-3 mr-1" />
                          Verified by Aadhaar
                        </Badge>
                      </div>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        disabled
                        className="bg-muted"
                      />
                      <p className="text-xs text-text-secondary mt-1">Official name cannot be changed here.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <Label htmlFor="displayName">Display Name</Label>
                          <button className="text-text-secondary hover:text-text-primary">
                            <Camera className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <Input
                          id="displayName"
                          value={formData.displayName}
                          onChange={(e) => handleInputChange("displayName", e.target.value)}
                          placeholder="How you want to be called"
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <Label htmlFor="pronouns">Pronouns</Label>
                          <Badge variant="outline" className="text-xs">
                            <Eye className="h-3 w-3 mr-1" />
                          </Badge>
                        </div>
                        <Select value={formData.pronouns} onValueChange={(v) => handleInputChange("pronouns", v)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select pronouns" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="He/Him">He/Him</SelectItem>
                            <SelectItem value="She/Her">She/Her</SelectItem>
                            <SelectItem value="They/Them">They/Them</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <Label htmlFor="location">Location</Label>
                        <Badge variant="outline" className="text-xs">
                          <Eye className="h-3 w-3 mr-1" />
                          Members Only
                        </Badge>
                      </div>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          className="pl-10"
                          placeholder="City, State"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">About</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <Label htmlFor="bio">Bio</Label>
                    <span className="text-xs text-text-secondary">{formData.bio.length}/500 characters</span>
                  </div>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    rows={4}
                    maxLength={500}
                    placeholder="Tell others about yourself, your work, and your interests..."
                    className="resize-none"
                  />
                  <div className="flex items-center gap-4 mt-2 text-text-secondary">
                    <button className="font-bold hover:text-text-primary">B</button>
                    <button className="italic hover:text-text-primary">I</button>
                    <button className="hover:text-text-primary">≡</button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Details */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Professional Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Skills */}
                <div>
                  <Label className="mb-2 block">Skills & Interests</Label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-muted text-text-primary font-normal pr-1.5">
                        {skill}
                        <button 
                          onClick={() => handleRemoveSkill(skill)}
                          className="ml-1.5 hover:text-destructive"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                    <Input
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
                      placeholder="Add a skill..."
                      className="w-32 h-7 text-sm"
                    />
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <Label className="mb-3 block">Experience</Label>
                  {experiences.map((exp, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4 mb-4 p-4 bg-muted/50 rounded-lg">
                      <div>
                        <Label className="text-xs text-text-secondary uppercase tracking-wide mb-1 block">Role</Label>
                        <Input
                          value={exp.role}
                          onChange={(e) => handleExperienceChange(index, "role", e.target.value)}
                          placeholder="e.g., Program Director"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-text-secondary uppercase tracking-wide mb-1 block">Organization</Label>
                        <Input
                          value={exp.organization}
                          onChange={(e) => handleExperienceChange(index, "organization", e.target.value)}
                          placeholder="e.g., TechForGood India"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-text-secondary uppercase tracking-wide mb-1 block">Timeline</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            value={exp.startDate}
                            onChange={(e) => handleExperienceChange(index, "startDate", e.target.value)}
                            placeholder="Jan 2019"
                            className="flex-1"
                          />
                          <span className="text-text-secondary">-</span>
                          <Input
                            value={exp.endDate}
                            onChange={(e) => handleExperienceChange(index, "endDate", e.target.value)}
                            placeholder="Present"
                            className="flex-1"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" onClick={handleAddExperience} className="w-full border-dashed">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Position
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact & Connectivity */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Contact & Connectivity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="mb-1.5 block">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
                      <Input
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <Label>Phone Number</Label>
                      <Badge variant="outline" className="text-xs">
                        <Lock className="h-3 w-3 mr-1" />
                        Private
                      </Badge>
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pl-10"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block">Social Links</Label>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <Twitter className="h-4 w-4 text-text-secondary" />
                      </div>
                      <Input
                        value={formData.twitter}
                        onChange={(e) => handleInputChange("twitter", e.target.value)}
                        placeholder="Twitter Profile URL"
                        className="flex-1"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <Linkedin className="h-4 w-4 text-text-secondary" />
                      </div>
                      <Input
                        value={formData.linkedIn}
                        onChange={(e) => handleInputChange("linkedIn", e.target.value)}
                        placeholder="LinkedIn Profile URL"
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Save Bar */}
            {hasChanges && (
              <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border py-4 px-4 z-40">
                <div className="container-wide flex items-center justify-between">
                  <p className="text-sm text-amber-600 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    Unsaved changes will be lost.
                  </p>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave}>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
