import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Search, Bell, User, ArrowUpRight } from "lucide-react";

interface DashboardHeaderProps {
  title?: string;
  subtitle?: string;
}

const getPageInfo = (pathname: string) => {
  switch (pathname) {
    case "/overview":
    case "/dashboard":
      return {
        title: "Dashboard",
        subtitle: "Manage your digital assets and traditional investments",
      };
    case "/balance":
      return {
        title: "Balance",
        subtitle: "View and manage your account balances",
      };
    case "/exchange":
      return {
        title: "Exchange",
        subtitle: "Trade and exchange your digital assets",
      };
    case "/analytics":
      return {
        title: "Analytics",
        subtitle: "Analyze your portfolio performance and market trends",
      };
    case "/news":
      return {
        title: "Crypto News & Analysis",
        subtitle: "Stay updated with the latest market news and insights",
      };
    case "/notifications":
      return {
        title: "Notifications",
        subtitle: "Manage your alerts and notifications",
      };
    case "/settings":
      return {
        title: "Settings",
        subtitle: "Configure your account and preferences",
      };
    default:
      return {
        title: "Dashboard",
        subtitle: "Manage your digital assets and traditional investments",
      };
  }
};

export default function DashboardHeader({
  title,
  subtitle,
}: DashboardHeaderProps) {
  const location = useLocation();
  const pageInfo = getPageInfo(location.pathname);

  const displayTitle = title || pageInfo.title;
  const displaySubtitle = subtitle || pageInfo.subtitle;
  return (
    <header className="bg-card px-6 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{displayTitle}</h1>
          {displaySubtitle && (
            <p className="text-muted-foreground">{displaySubtitle}</p>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search assets...." className="pl-10 w-64" />
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <ArrowUpRight className="h-4 w-4 mr-2" />
            Create RWA Contract
          </Button>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Badge className="absolute -top-1 -right-1 text-xs min-w-[1.25rem] h-5 flex items-center justify-center bg-red-500 text-white border-0 hover:bg-red-600">
                1
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Nhat Huynh</span>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
