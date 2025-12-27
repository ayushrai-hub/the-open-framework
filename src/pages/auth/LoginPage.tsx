import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Eye, EyeOff, Lock, Shield, Info, Globe, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { Footer } from "@/components/layout/Footer";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email address is required";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) {
      return "Password is required";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    
    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (emailErr || passwordErr) {
      return;
    }

    const result = await login(email, password);
    
    if (result.success) {
      navigate("/");
    } else {
      setError(result.error || "Login failed. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign In | India DPI Platform</title>
        <meta name="description" content="Secure access for civil society partners on India's Digital Public Infrastructure platform." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        {/* Header */}
        <header className="border-b border-border bg-background">
          <div className="container-wide">
            <div className="flex h-16 items-center justify-between">
              <Link to="/" className="flex items-center gap-2 text-foreground hover:text-foreground">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <Building2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold leading-tight">DPI Platform</span>
                  <span className="text-[10px] uppercase tracking-wider text-text-secondary">Universal Identity Layer</span>
                </div>
              </Link>
              
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Globe className="h-4 w-4" />
                <span>English (India)</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-md">
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-text-primary mb-2">Sign in to DPI Platform</h1>
                <p className="text-text-secondary">Secure access for civil society partners</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-text-primary font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@organization.org"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError("");
                    }}
                    className={`h-12 ${emailError ? "border-destructive" : ""}`}
                    aria-describedby={emailError ? "email-error" : undefined}
                  />
                  {emailError && (
                    <p id="email-error" className="text-sm text-destructive">{emailError}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-text-primary font-medium">Password</Label>
                    <Link 
                      to="/forgot-password" 
                      className="text-sm text-link hover:text-link-hover font-medium"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (passwordError) setPasswordError("");
                      }}
                      className={`h-12 pr-12 ${passwordError ? "border-destructive" : ""}`}
                      aria-describedby={passwordError ? "password-error" : "password-hint"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {passwordError ? (
                    <p id="password-error" className="text-sm text-destructive">{passwordError}</p>
                  ) : (
                    <p id="password-hint" className="text-xs text-text-secondary flex items-center gap-1">
                      <Info className="h-3 w-3" />
                      Use 12 or more characters. Passphrases are encouraged.
                    </p>
                  )}
                </div>

                {error && (
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 text-sm text-destructive">
                    {error}
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-medium"
                  disabled={isLoading}
                >
                  <Lock className="h-4 w-4 mr-2" />
                  {isLoading ? "Signing in..." : "Secure Login"}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-text-primary font-medium">Your data is secure.</p>
                    <p className="text-sm text-text-secondary">
                      We never share your data with third parties.{" "}
                      <Link to="/privacy" className="text-link hover:text-link-hover">
                        Read our Privacy Policy
                      </Link>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-text-secondary">New to the platform?</span>
                  </div>
                </div>

                <Link to="/register">
                  <Button variant="outline" className="w-full h-12 mt-4 text-base font-medium">
                    Create an account
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-8 text-center space-y-3">
              <p className="text-sm text-text-secondary flex items-center justify-center gap-2">
                <Shield className="h-4 w-4 text-amber-500" />
                For security, your session will time out after 15 minutes of inactivity.
              </p>
              <p className="text-xs text-text-secondary max-w-sm mx-auto">
                Access to this system is audited. Unauthorized access is prohibited and subject to prosecution under the Information Technology Act.
              </p>
            </div>
          </div>
        </main>

        {/* Simple Footer */}
        <footer className="border-t border-border py-6">
          <div className="container-wide text-center">
            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} Digital Public Infrastructure Platform. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
