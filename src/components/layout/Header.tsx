import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Building2, Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
}

const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "Overview", href: "/about", description: "Our mission and mandate" },
      { label: "How It Works", href: "/how-it-works", description: "Platform architecture and model" },
      { label: "Governance", href: "/governance", description: "Transparency and structure" },
      { label: "Contact", href: "/contact", description: "Get in touch with us" },
    ],
  },
  {
    label: "Ecosystem",
    children: [
      { label: "For NGOs", href: "/ecosystem/ngos", description: "Registration and compliance" },
      { label: "For Donors", href: "/ecosystem/donors", description: "Discovery and grant-making" },
      { label: "For Volunteers", href: "/ecosystem/volunteers", description: "Skills and opportunities" },
      { label: "Network Map", href: "/ecosystem/network", description: "Explore the ecosystem" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Documentation", href: "/documentation", description: "Guides, APIs, and references" },
      { label: "Community", href: "/community", description: "Forums and knowledge exchange" },
      { label: "Compliance Templates", href: "/resources/templates", description: "Forms and documents" },
      { label: "API Reference", href: "/resources/api", description: "Developer documentation" },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;
  const isParentActive = (children: NavItem["children"]) =>
    children?.some((child) => location.pathname === child.href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-wide">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-foreground">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Building2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold leading-tight">India DPI</span>
              <span className="text-[10px] uppercase tracking-wider text-text-secondary">Civil Society</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.href ? (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted ${
                      isActive(item.href) ? "text-link" : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted ${
                      isParentActive(item.children) ? "text-link" : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                )}

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-popover border border-border rounded-lg shadow-lg py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className={`block px-4 py-3 hover:bg-muted transition-colors ${
                          isActive(child.href) ? "bg-muted" : ""
                        }`}
                      >
                        <div className="text-sm font-medium text-text-primary">{child.label}</div>
                        {child.description && (
                          <div className="text-xs text-text-secondary mt-0.5">{child.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs text-text-secondary">
              <Globe className="h-3.5 w-3.5" />
              <span>EN</span>
            </div>
            
            <Button variant="default" size="sm" className="hidden sm:inline-flex">
              Partner Login
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-muted"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="space-y-1">
              {navigation.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2 text-sm font-medium rounded-md ${
                        isActive(item.href)
                          ? "text-link bg-muted"
                          : "text-text-secondary hover:text-text-primary hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="space-y-1">
                      <div className="px-4 py-2 text-sm font-medium text-text-primary">{item.label}</div>
                      <div className="pl-4 space-y-1">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-2 text-sm rounded-md ${
                              isActive(child.href)
                                ? "text-link bg-muted"
                                : "text-text-secondary hover:text-text-primary hover:bg-muted"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 px-4">
              <Button variant="default" className="w-full">
                Partner Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
