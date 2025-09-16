import type React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "./ui/button";

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">HD</span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-red-600">HD</span>
                <span className="text-gray-700">Bank</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Trade
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              Market
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-orange-500 font-medium"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/platform/dashboard">
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                  >
                    Dashboard
                  </Button>
                </Link>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-50 bg-transparent"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/register">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Register
                  </Button>
                </Link>
                <Link to="/login">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Login
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
