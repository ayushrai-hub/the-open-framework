import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, Building2, Globe, Bell, User, Settings, LogOut, Shield, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

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
      { label: "Contextual Framework", href: "/context", description: "Problem statement and challenges" },
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
    children: [
      { label: "Overview", href: "/careers", description: "Open positions and culture" },
      { label: "Join Us", href: "/join", description: "Onboard to the ecosystem" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);
  const { user, isAuthenticated, logout } = useAuth();

  const isActive = (href: string) => location.pathname === href;
  const isParentActive = (children: NavItem["children"]) =>
    children?.some((child) => location.pathname === child.href);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setProfileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
  }, [location.pathname]);

  const handleDropdownClick = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
    setProfileDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-wide">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-foreground">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Building2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold leading-tight">India DPI</span>
              <span className="text-[10px] uppercase tracking-wider text-text-secondary">Civil Society</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.label} className="relative">
                {item.href ? (
                  <Link to={item.href} className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted ${isActive(item.href) ? "text-link" : "text-text-secondary hover:text-text-primary"}`}>
                    {item.label}
                  </Link>
                ) : (
                  <button onClick={() => handleDropdownClick(item.label)} className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted ${isParentActive(item.children) || openDropdown === item.label ? "text-link" : "text-text-secondary hover:text-text-primary"}`}>
                    {item.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                )}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-popover border border-border rounded-lg shadow-lg py-2 z-50">
                    {item.children.map((child) => (
                      <Link key={child.href} to={child.href} className={`block px-4 py-3 hover:bg-muted transition-colors ${isActive(child.href) ? "bg-muted" : ""}`}>
                        <div className="text-sm font-medium text-text-primary">{child.label}</div>
                        {child.description && <div className="text-xs text-text-secondary mt-0.5">{child.description}</div>}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs text-text-secondary">
              <Globe className="h-3.5 w-3.5" />
              <span>EN</span>
            </div>
            
            {isAuthenticated && user ? (
              <div className="relative">
                <button onClick={() => { setProfileDropdownOpen(!profileDropdownOpen); setOpenDropdown(null); }} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-muted transition-colors">
                  <Bell className="h-5 w-5 text-text-secondary hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                      {user.avatar ? <img src={user.avatar} alt="" className="w-full h-full object-cover" /> : <span className="text-sm font-medium text-primary">{user.firstName.charAt(0)}</span>}
                    </div>
                    <div className="hidden sm:block text-left">
                      <p className="text-sm font-medium text-text-primary leading-tight">{user.firstName}</p>
                      {user.organization && <p className="text-[10px] text-text-secondary">{user.organization.role}</p>}
                    </div>
                    <ChevronDown className={`h-4 w-4 text-text-secondary transition-transform ${profileDropdownOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                {profileDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-72 bg-popover border border-border rounded-xl shadow-xl z-50 overflow-hidden">
                    <div className="p-4 bg-muted/50 border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-lg font-semibold text-primary">{user.firstName.charAt(0)}{user.lastName.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-text-primary">{user.firstName} {user.lastName}</p>
                          <p className="text-sm text-text-secondary">{user.email}</p>
                          {user.verified && <span className="inline-flex items-center gap-1 text-xs text-primary mt-0.5"><Shield className="h-3 w-3" />Verified via Bharat-ID</span>}
                        </div>
                      </div>
                    </div>
                    {/* Role Dashboards */}
                    <div className="p-3 border-b border-border">
                      <div className="flex items-center justify-between text-xs text-text-secondary mb-2">
                        <span>YOUR DASHBOARDS</span>
                      </div>
                      <div className="space-y-1">
                        {user.organization && (
                          <Link to="/ngo/dashboard" className="flex items-center justify-between p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center"><Building2 className="h-4 w-4 text-primary" /></div>
                              <div><p className="text-sm font-medium text-text-primary">{user.organization.name}</p><p className="text-xs text-text-secondary">NGO Dashboard</p></div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-text-secondary" />
                          </Link>
                        )}
                        <Link to="/donor/dashboard" className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-emerald-100 flex items-center justify-center"><Users className="h-4 w-4 text-emerald-600" /></div>
                            <div><p className="text-sm font-medium text-text-primary">Donor Dashboard</p><p className="text-xs text-text-secondary">Grants & Discovery</p></div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-text-secondary" />
                        </Link>
                        <Link to="/talent/dashboard" className="flex items-center justify-between p-2 rounded-lg hover:bg-muted transition-colors">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-amber-100 flex items-center justify-center"><User className="h-4 w-4 text-amber-600" /></div>
                            <div><p className="text-sm font-medium text-text-primary">Talent Dashboard</p><p className="text-xs text-text-secondary">Opportunities</p></div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-text-secondary" />
                        </Link>
                      </div>
                    </div>
                    <div className="p-2">
                      <Link to="/profile/public" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors">
                        <Globe className="h-4 w-4 text-text-secondary" /><div><p className="text-sm font-medium text-text-primary">Public Profile</p><p className="text-xs text-text-secondary">View & manage visibility</p></div>
                      </Link>
                      <Link to="/profile" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors">
                        <User className="h-4 w-4 text-text-secondary" /><div><p className="text-sm font-medium text-text-primary">My Profile</p><p className="text-xs text-text-secondary">Personal details & bio</p></div>
                      </Link>
                      <Link to="/account/security" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors">
                        <Shield className="h-4 w-4 text-text-secondary" /><div><p className="text-sm font-medium text-text-primary">Account & Security</p><p className="text-xs text-text-secondary">Password, 2FA, linked IDs</p></div>
                      </Link>
                      <Link to="/notifications" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors">
                        <Bell className="h-4 w-4 text-text-secondary" /><div className="flex items-center gap-2"><p className="text-sm font-medium text-text-primary">Notifications</p><span className="w-2 h-2 rounded-full bg-destructive" /></div><p className="text-xs text-text-secondary ml-auto">System alerts & updates</p>
                      </Link>
                    </div>
                    <div className="p-2 border-t border-border">
                      <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-border hover:bg-muted transition-colors text-text-primary">
                        <LogOut className="h-4 w-4" />Sign Out
                      </button>
                    </div>
                    <div className="px-4 py-2 text-center text-[10px] text-text-secondary border-t border-border">Federation ID: IN-8492-XJ • Version 2.4.0</div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login"><Button variant="default" size="sm" className="hidden sm:inline-flex">Partner Login</Button></Link>
            )}

            <button className="lg:hidden p-2 rounded-md hover:bg-muted" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="space-y-1">
              {navigation.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link to={item.href} onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-2 text-sm font-medium rounded-md ${isActive(item.href) ? "text-link bg-muted" : "text-text-secondary hover:text-text-primary hover:bg-muted"}`}>{item.label}</Link>
                  ) : (
                    <div className="space-y-1">
                      <button onClick={() => handleDropdownClick(item.label)} className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-text-primary hover:bg-muted rounded-md">
                        {item.label}<ChevronDown className={`h-3.5 w-3.5 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 space-y-1">{item.children?.map((child) => (<Link key={child.href} to={child.href} onClick={() => setMobileMenuOpen(false)} className={`block px-4 py-2 text-sm rounded-md ${isActive(child.href) ? "text-link bg-muted" : "text-text-secondary hover:text-text-primary hover:bg-muted"}`}>{child.label}</Link>))}</div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 px-4">
              {isAuthenticated ? (
                <Button variant="outline" className="w-full" onClick={handleLogout}><LogOut className="h-4 w-4 mr-2" />Sign Out</Button>
              ) : (
                <Link to="/login"><Button variant="default" className="w-full">Partner Login</Button></Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
