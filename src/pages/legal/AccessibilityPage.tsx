import { Link } from "react-router-dom";
import { 
  Shield,
  CheckCircle2,
  Eye,
  Keyboard,
  Volume2,
  Monitor,
  MessageSquare,
  ArrowRight,
  Mail,
  Phone,
  Calendar
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const wcagCompliance = [
  { level: "Level A", status: "Fully Compliant", description: "All essential accessibility requirements met" },
  { level: "Level AA", status: "Fully Compliant", description: "Enhanced accessibility features implemented" },
  { level: "Level AAA", status: "Partial", description: "Working towards full compliance" },
];

const accessibilityFeatures = [
  {
    icon: Eye,
    title: "Screen Reader Support",
    description: "Full compatibility with popular screen readers including JAWS, NVDA, and VoiceOver. All images have descriptive alt text."
  },
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    description: "Complete keyboard accessibility. Navigate the entire platform using Tab, Enter, and arrow keys without requiring a mouse."
  },
  {
    icon: Volume2,
    title: "Audio Descriptions",
    description: "Video content includes captions and audio descriptions. Critical alerts have audio cues for visually impaired users."
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    description: "Content adapts to different screen sizes and zoom levels up to 400% without loss of functionality."
  },
];

const assistiveTechnologies = [
  "JAWS (Job Access With Speech)",
  "NVDA (NonVisual Desktop Access)",
  "VoiceOver (macOS/iOS)",
  "TalkBack (Android)",
  "Dragon NaturallySpeaking",
  "ZoomText",
  "Windows Magnifier",
  "High Contrast Mode",
];

export default function AccessibilityPage() {
  return (
    <Layout>
      <div className="bg-background">
        {/* Hero Section */}
        <div className="bg-primary/5 py-12">
          <div className="container-wide">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-official">
                <Shield className="h-3 w-3" />
                WCAG 2.1 AA COMPLIANT
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Accessibility Statement
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mb-6">
              India DPI Foundation is committed to ensuring digital accessibility for people with disabilities. 
              We continually improve the user experience for everyone and apply relevant accessibility standards.
            </p>
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Last Updated: January 2025
              </span>
            </div>
          </div>
        </div>

        <div className="container-wide py-12">
          {/* WCAG Compliance Status */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Conformance Status</h2>
            <p className="text-text-secondary mb-6">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to 
              improve accessibility for people with disabilities. It defines three levels of conformance: Level A, 
              Level AA, and Level AAA. India DPI Platform is partially conformant with WCAG 2.1 level AA.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {wcagCompliance.map((item) => (
                <div key={item.level} className="card-elevated p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{item.level}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.status === 'Fully Compliant' 
                        ? 'bg-success/10 text-success' 
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Accessibility Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Accessibility Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {accessibilityFeatures.map((feature) => (
                <div key={feature.title} className="card-elevated p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-text-secondary">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Assistive Technology Support */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Supported Assistive Technologies</h2>
            <p className="text-text-secondary mb-6">
              Our platform is designed to be compatible with the following assistive technologies:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {assistiveTechnologies.map((tech) => (
                <div key={tech} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Technical Specifications</h2>
            <div className="card-elevated p-6">
              <p className="text-text-secondary mb-4">
                Accessibility of the India DPI Platform relies on the following technologies to work with the 
                particular combination of web browser and any assistive technologies or plugins installed on your computer:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>HTML5</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>WAI-ARIA</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>CSS3</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span>JavaScript (Progressive Enhancement)</span>
                </li>
              </ul>
              <p className="text-sm text-text-secondary mt-4">
                These technologies are relied upon for conformance with the accessibility standards used.
              </p>
            </div>
          </section>

          {/* Limitations and Alternatives */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Known Limitations</h2>
            <p className="text-text-secondary mb-6">
              Despite our best efforts to ensure accessibility of the India DPI Platform, there may be some limitations. 
              Below is a description of known limitations and potential solutions:
            </p>
            <div className="space-y-4">
              <div className="card-elevated p-4">
                <h4 className="font-medium mb-2">Uploaded Documents</h4>
                <p className="text-sm text-text-secondary">
                  PDF documents uploaded by third-party organizations may not be fully accessible. We encourage all 
                  organizations to upload accessible documents. Contact us if you need an accessible version of any document.
                </p>
              </div>
              <div className="card-elevated p-4">
                <h4 className="font-medium mb-2">Third-Party Content</h4>
                <p className="text-sm text-text-secondary">
                  Some third-party integrations may have accessibility limitations beyond our control. We are actively 
                  working with our partners to improve accessibility across all integrations.
                </p>
              </div>
            </div>
          </section>

          {/* Feedback & Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Feedback & Contact</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-text-secondary mb-6">
                  We welcome your feedback on the accessibility of the India DPI Platform. Please let us know if you 
                  encounter accessibility barriers:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:accessibility@dpi.org.in" className="text-sm text-primary hover:underline">
                        accessibility@dpi.org.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+911800XXXXXX" className="text-sm text-primary hover:underline">
                        1800-XXX-XXXX (Toll Free)
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-text-secondary">We aim to respond within 3 business days</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-6 bg-primary/5 border-l-4 border-primary">
                <h3 className="font-semibold mb-4">Need Immediate Assistance?</h3>
                <p className="text-sm text-text-secondary mb-6">
                  If you are unable to access any content or feature on this platform due to a disability, we are here to help. 
                  Our support team can provide accessible alternatives or assist you directly.
                </p>
                <div className="space-y-3">
                  <Link 
                    to="/contact" 
                    className="flex items-center justify-between p-3 bg-background rounded-lg hover:bg-muted transition-colors"
                  >
                    <span className="font-medium">Contact Support</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link 
                    to="/grievance" 
                    className="flex items-center justify-between p-3 bg-background rounded-lg hover:bg-muted transition-colors"
                  >
                    <span className="font-medium">File Accessibility Grievance</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Assessment Methodology */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Assessment Approach</h2>
            <p className="text-text-secondary mb-4">
              India DPI Foundation assessed the accessibility of the platform by the following approaches:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                <span>Self-evaluation by internal accessibility specialists</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                <span>External audit by certified accessibility consultants</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                <span>User testing with individuals who have disabilities</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                <span>Automated accessibility testing tools (WAVE, axe, Lighthouse)</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}
