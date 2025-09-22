import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  LayoutDashboard,
  TrendingUp,
  Wallet,
  Bell,
  Settings,
  LogOut,
  Newspaper,
  BarChart3,
} from "lucide-react";
import brand_logo from "@/assets/HDBank logo-01.png";

const mainNavigation = [
  { name: "Overview", href: "/overview", icon: LayoutDashboard },
  { name: "Exchange", href: "/exchange", icon: TrendingUp },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "News", href: "/news", icon: Newspaper },
];

const accountNavigation = [
  {
    name: "Notification",
    href: "/notifications",
    icon: Bell,
    badge: "12",
  },
  { name: "Balance", href: "/balance", icon: Wallet },
  { name: "Setting", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const { logout } = useAuth();
  const location = useLocation();

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex items-center space-x-2 p-6 border-b border-gray-200">
        <div className="flex items-center justify-center">
          <img src={brand_logo} alt="HD Bank Logo" className="w-35" />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-6 space-y-8">
        <div>
          <nav className="space-y-1">
            {mainNavigation.map((item) => {
              const isActive =
                location.pathname === item.href ||
                (item.href === "/overview" &&
                  location.pathname === "/dashboard");
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Account
          </p>
          <nav className="space-y-1">
            {accountNavigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <Badge
                      className={`text-xs ${
                        isActive
                          ? "bg-white text-orange-500 hover:bg-gray-100"
                          : "bg-red-500 text-white hover:bg-red-600"
                      }`}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-600 hover:bg-red-50"
          onClick={logout}
        >
          <LogOut className="h-4 w-4 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );
}
