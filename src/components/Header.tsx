import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Button } from "./ui/button";
import brand_logo from "@/assets/HDBank logo-01.png";

export default function Header() {
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
              <img src={brand_logo} alt="brand_logo" className="w-30 h-auto"/>
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
                <Link to="/dashboard">
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
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
