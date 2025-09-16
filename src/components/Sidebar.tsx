import type React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  LayoutDashboard,
  TrendingUp,
  Building2,
  BarChart3,
  Briefcase,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "./ui/button";

export const Sidebar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/platform/dashboard",
      active: location.pathname === "/platform/dashboard",
    },
    {
      icon: TrendingUp,
      label: "Trading",
      path: "/platform/trading",
      active: location.pathname === "/platform/trading",
    },
    {
      icon: Building2,
      label: "Banking",
      path: "/platform/banking",
      active: location.pathname === "/platform/banking",
    },
    {
      icon: BarChart3,
      label: "Analytics",
      path: "/platform/analytics",
      active: location.pathname === "/platform/analytics",
    },
    {
      icon: Briefcase,
      label: "Portfolio",
      path: "/platform/portfolio",
      active: location.pathname === "/platform/portfolio",
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/platform/settings",
      active: location.pathname === "/platform/settings",
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">HD</span>
          </div>
          <div>
            <div className="text-lg font-bold">
              <span className="text-red-600">HD</span>
              <span className="text-gray-700">Bank</span>
            </div>
            <div className="text-xs text-gray-500">
              Cơn kết tối ích cao nhất
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User Profile & Logout */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-600 font-medium">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 truncate">
              {user?.name || "User"}
            </div>
            <div className="text-xs text-gray-500 truncate">{user?.email}</div>
          </div>
        </div>
        <Button
          onClick={logout}
          variant="outline"
          className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};
