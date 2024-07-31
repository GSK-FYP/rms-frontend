import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  admin: Admin | null;
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

interface Admin {
  id: string;
  name: string;
  email: string;
  username: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedAdmin = localStorage.getItem("admin");
    if (storedToken && storedAdmin) {
      setToken(storedToken);
      setAdmin(JSON.parse(storedAdmin));
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await fetch("http://0.0.0.0:9002/super-admins/authenticate", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      setToken(data.access_token);
      localStorage.setItem("token", data.access_token);

      // Fetch admin details
      const adminResponse = await fetch("http://0.0.0.0:9002/super-admins/current", {
        headers: { Authorization: `Bearer ${data.access_token}` },
      });

      if (!adminResponse.ok) {
        throw new Error("Failed to fetch admin details");
      }

      const adminData = await adminResponse.json();
      const admin: Admin = {
        id: adminData.id,
        name: adminData.name,
        email: adminData.email,
        username: adminData.username,
      };

      setAdmin(admin);
      localStorage.setItem("admin", JSON.stringify(admin));

      navigate("/admin/overview");
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = () => {
    setAdmin(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/auth/login");
  };

  const value = {
    admin,
    token,
    login,
    logout,
    isAuthenticated: !!admin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
