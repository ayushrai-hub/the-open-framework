import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Users2, 
  Save, 
  HelpCircle,
  CheckCircle2,
  Shield,
  Upload,
  FileText,
  Trash2,
  ShieldCheck,
  Check
} from "lucide-react";

const steps = [
  { number: 1, label: "Identity", active: false, completed: true },
  { number: 2, label: "Legal Status", active: false, completed: true },
  { number: 3, label: "Visibility", active: false, completed: true },
  { number: 4, label: "Verify & Submit", active: true, completed: false },
];

export default function NgoVerifyPage() {
  const navigate = useNavigate();
  const [trustDeedUploaded, setTrustDeedUploaded] = useState(true);
  const [declaration, setDeclaration] = useState(false);

  const handleSubmit = () => {
    // Submit logic - redirect to NGO Dashboard
    navigate("/ngo/dashboard");
  };

  const handleBack = () => {
    navigate("/onboarding/ngo/visibility");
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>NGO Registration - Final Verification | Civil Society Platform</title>
      </Helmet>

      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container-wide flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Users2 className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <div className="font-semibold text-text-primary">Civil Society Platform</div>
              <div className="text-xs text-text-secondary">Government of India Digital Service</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Save className="h-4 w-4 mr-2" />
              Save Draft
            </Button>
            <Button variant="outline" size="sm">
              <HelpCircle className="h-4 w-4 mr-2" />
              Help & Support
            </Button>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="border-b border-border bg-card">
        <div className="container-wide px-4 py-6">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm ${
                    step.active 
                      ? "bg-primary text-primary-foreground" 
                      : step.completed 
                        ? "bg-success text-success-foreground"
                        : "bg-muted text-muted-foreground"
                  }`}>
                    {step.completed ? <CheckCircle2 className="h-5 w-5" /> : step.number}
                  </div>
                  <span className={`text-xs mt-2 ${step.active ? "text-primary font-medium" : "text-text-secondary"}`}>
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-20 md:w-32 h-1 mx-2 rounded ${
                    step.completed ? "bg-success" : "bg-border"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container-wide px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="card-elevated p-8">
              <h1 className="text-2xl font-bold text-text-primary mb-2">Final Verification</h1>
              <p className="text-text-secondary mb-8">
                Upload supporting documents to verify your legal status. Verified profiles gain faster access to government grants.
              </p>

              {/* Documents Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-primary" />
                  <h2 className="font-semibold text-text-primary">Documents</h2>
                </div>

                {/* Required Document */}
                <div className="p-4 border border-border rounded-lg mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-medium text-text-primary">Registration Certificate / Trust Deed</div>
                      <p className="text-sm text-text-secondary">Required for legal entity verification. Max 5MB.</p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">Required</span>
                  </div>

                  {trustDeedUploaded ? (
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-destructive" />
                        </div>
                        <div>
                          <div className="font-medium text-text-primary text-sm">trust_registration_2023.pdf</div>
                          <div className="text-xs text-text-secondary">2.4 MB • Uploaded just now</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => setTrustDeedUploaded(false)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="font-medium text-text-primary">Upload Registration Certificate</div>
                      <p className="text-sm text-text-secondary">Drag & drop or <span className="text-link cursor-pointer">browse</span></p>
                      <p className="text-xs text-text-secondary mt-1">Supports PDF, JPG, PNG up to 5MB</p>
                    </div>
                  )}
                </div>

                {/* PAN Upload */}
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center mb-4">
                  <Upload className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-medium text-text-primary">Upload PAN Card Copy</div>
                  <p className="text-sm text-text-secondary">Drag & drop or <span className="text-link cursor-pointer">browse</span></p>
                  <p className="text-xs text-text-secondary mt-1">Supports PDF, JPG, PNG up to 2MB</p>
                </div>

                {/* 12A/80G Certificate */}
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <div className="font-medium text-text-primary">12A / 80G Certificate (Optional)</div>
                  <p className="text-sm text-text-secondary">Proof of tax exemption status</p>
                </div>
              </div>

              {/* Review Details */}
              <div className="mb-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <h2 className="font-semibold text-text-primary">Review Details</h2>
                  </div>
                  <Button variant="ghost" size="sm" className="text-link">
                    Edit Details
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                  <div>
                    <div className="text-xs text-text-secondary">Organization Name</div>
                    <div className="font-medium text-text-primary">Jan Seva Foundation</div>
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary">Organization Type</div>
                    <div className="font-medium text-text-primary">Trust (Non-Government)</div>
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary">Registration Number</div>
                    <div className="font-medium text-text-primary">TR/2023/MUM/0981</div>
                  </div>
                  <div>
                    <div className="text-xs text-text-secondary">Darpan ID</div>
                    <div className="font-medium text-text-primary">MH/2023/029192</div>
                  </div>
                </div>
              </div>

              {/* Declaration */}
              <div className="mb-8 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="declaration"
                    checked={declaration}
                    onCheckedChange={(checked) => setDeclaration(checked === true)}
                    className="mt-0.5"
                  />
                  <div>
                    <label htmlFor="declaration" className="font-medium text-text-primary cursor-pointer">
                      I hereby declare that the information provided is true and correct.
                    </label>
                    <p className="text-sm text-text-secondary mt-1">
                      I understand that providing false information may result in the cancellation of registration. This action will be digitally signed and audited.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleSubmit} disabled={!declaration}>
                  <ShieldCheck className="h-4 w-4 mr-2" />
                  Submit Application
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card-elevated p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-success" />
                <h3 className="font-semibold text-text-primary">Why Verify?</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-text-primary text-sm">Trust Score Boost</div>
                    <p className="text-xs text-text-secondary mt-1">
                      Verified profiles appear higher in donor searches and are flagged as 'Trusted'.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-text-primary text-sm">One-Time Process</div>
                    <p className="text-xs text-text-secondary mt-1">
                      Once verified here, you won't need to re-upload these documents for State or Central grants linked to this platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elevated p-6 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-text-primary">Data Security Promise</h3>
              </div>
              <p className="text-sm text-text-secondary mb-4">
                Your documents are stored in an encrypted vault (AES-256). They are only shared with government regulators for compliance checks. You retain full ownership of your data.
              </p>
              <div className="flex items-center gap-2 text-success text-sm">
                <CheckCircle2 className="h-4 w-4" />
                <span className="font-medium">AUDITED & SAFE</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
