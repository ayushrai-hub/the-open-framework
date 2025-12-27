import { Link } from "react-router-dom";
import { Building2, Github, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  platform: {
    title: "Platform",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contextual Framework", href: "/context" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "For NGOs", href: "/ecosystem/ngos" },
      { label: "For Donors", href: "/ecosystem/donors" },
      { label: "Network Map", href: "/ecosystem/network" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/documentation" },
      { label: "API Reference", href: "/resources/api" },
      { label: "Community", href: "/community" },
      { label: "Templates", href: "/resources/templates" },
      { label: "Status", href: "/status" },
    ],
  },
  governance: {
    title: "Governance",
    links: [
      { label: "Board Members", href: "/governance#board" },
      { label: "Funding Sources", href: "/governance#funding" },
      { label: "Annual Reports", href: "/governance#reports" },
      { label: "Code of Conduct", href: "/governance#ethics" },
      { label: "Careers", href: "/careers" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Grievance Redressal", href: "/grievance" },
      { label: "RTI Disclosure", href: "/rti" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 text-white hover:text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-tight">India DPI</span>
                <span className="text-[10px] uppercase tracking-wider text-white/80">Civil Society</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-white/90 max-w-xs">
              A neutral, non-profit digital public infrastructure designed to empower India's civil society 
              through trust, transparency, and collaboration.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Twitter className="h-4 w-4 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Github className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} India DPI Foundation. Licensed under CC-BY-4.0.
            </p>
            <span className="hidden sm:inline text-white/40">•</span>
            <p className="text-sm text-white/80">
              Built by{" "}
              <a
                href="https://www.linkedin.com/in/ayushrai02/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline font-medium"
              >
                Ayush Rai
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2 text-sm text-white">
              <span className="w-2 h-2 rounded-full bg-status-operational animate-pulse" />
              <span>All Systems Operational</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
