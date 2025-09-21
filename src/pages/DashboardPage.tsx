import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import { Chatbot } from "../components/ChatBox";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50 relative">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>

      {/* Chatbot - only available in dashboard pages */}
      <Chatbot />
    </div>
  );
}
