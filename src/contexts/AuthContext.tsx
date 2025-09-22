import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { AuthContext, type User } from "../types/auth-context";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("hdbank_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, _password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful login
      const mockUser: User = {
        id: "1",
        email,
        name: "Nhat Huynh",
      };

      setUser(mockUser);
      localStorage.setItem("hdbank_user", JSON.stringify(mockUser));
      setIsLoading(false);
      return true;
    } catch {
      setIsLoading(false);
      return false;
    }
  };

  const register = async (
    email: string,
    _password: string
  ): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful registration
      const mockUser: User = {
        id: "1",
        email,
        name: email.split("@")[0],
      };

      setUser(mockUser);
      localStorage.setItem("hdbank_user", JSON.stringify(mockUser));
      setIsLoading(false);
      return true;
    } catch {
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("hdbank_user");
  };

  const value = {
    user,
    login,
    register,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
