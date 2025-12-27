import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
  avatar?: string;
  role: "individual" | "ngo_admin" | "donor" | "volunteer";
  organization?: {
    name: string;
    role: string;
  };
  verified: boolean;
  location?: string;
  bio?: string;
  skills?: string[];
  phone?: string;
  linkedIn?: string;
  twitter?: string;
  website?: string;
  pronouns?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demo
const mockUser: User = {
  id: "usr-001",
  email: "amit.patel@seva-foundation.org",
  firstName: "Amit",
  lastName: "Patel",
  displayName: "Amit P.",
  avatar: undefined,
  role: "ngo_admin",
  organization: {
    name: "Seva Foundation",
    role: "Administrator"
  },
  verified: true,
  location: "Mumbai, Maharashtra",
  bio: "Development professional with over 10 years of on-ground experience in water sanitation and sustainable agriculture. Passionate about leveraging technology to bridge the gap between policy and implementation in rural India.",
  skills: ["Project Management", "Grant Writing", "Hindi", "English", "Sustainable Ag", "WASH"],
  phone: "+91 98765 43210",
  linkedIn: "https://linkedin.com/in/amitpatel",
  pronouns: "He/Him"
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const storedAuth = localStorage.getItem("dpi_auth");
    if (storedAuth) {
      try {
        const parsed = JSON.parse(storedAuth);
        if (parsed.isAuthenticated) {
          setUser(mockUser);
        }
      } catch (e) {
        localStorage.removeItem("dpi_auth");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Basic validation
    if (!email || !password) {
      setIsLoading(false);
      return { success: false, error: "Email and password are required" };
    }

    if (password.length < 8) {
      setIsLoading(false);
      return { success: false, error: "Password must be at least 8 characters" };
    }

    // For demo: accept any valid-looking credentials
    if (email.includes("@") && password.length >= 8) {
      const userData = { ...mockUser, email };
      setUser(userData);
      localStorage.setItem("dpi_auth", JSON.stringify({ isAuthenticated: true, email }));
      setIsLoading(false);
      return { success: true };
    }

    setIsLoading(false);
    return { success: false, error: "Invalid email or password" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("dpi_auth");
  };

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
