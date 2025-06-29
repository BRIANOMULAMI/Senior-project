import React, { useState } from "react";
import { UseAuthContext } from "../../context/ AuthContext";
import { useNavigate } from "react-router-dom";

import AvailableCompetitions from "../../components/school/AvailableCompetitions";
import MyRequests from "../../components/school/MyRequests";
import MyPerformances from "../../components/school/MyPerformances";
import SchoolStatistics from "../../components/school/SchoolStatistics";
import { UseAuthSignOut } from "../../Api/Auth";
import { Loader2 } from "lucide-react";

const SchoolDashboard: React.FC = () => {
  const { LogoutUser, isLoading } = UseAuthSignOut();

  const { user } = UseAuthContext();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>(
    "available-competitions"
  );

  const renderActiveComponent = () => {
    switch (activeSection) {
      case "available-competitions":
        return <AvailableCompetitions />;
      case "my-requests":
        return <MyRequests />;
      case "my-performances":
        return <MyPerformances />;
      case "school-statistics":
        return <SchoolStatistics />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 text-white min-h-[calc(100vh-80px)]">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-gray-800 p-6 shadow-xl flex flex-col justify-between min-h-[calc(100vh-80px)]">
        <div>
          <h2 className="text-3xl font-bold text-indigo-400 mb-8 text-center lg:text-left">
            School Panel
          </h2>
          <nav>
            <ul>
              {[
                {
                  id: "available-competitions",
                  icon: "fas fa-search",
                  label: "Available Competitions",
                },
                {
                  id: "my-requests",
                  icon: "fas fa-clipboard-list",
                  label: "My Competition Requests",
                },
                {
                  id: "my-performances",
                  icon: "fas fa-theater-masks",
                  label: "My Performances",
                },
                {
                  id: "school-statistics",
                  icon: "fas fa-chart-pie",
                  label: "School Statistics",
                },
              ].map((section) => (
                <li key={section.id} className="mb-4">
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-indigo-600 text-white shadow-md"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    <i className={`${section.icon} text-lg`}></i>
                    <span className="text-lg">{section.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Buttons */}
        <div className="space-y-4 mt-10">
          <button
            onClick={() => navigate("/")}
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-gray-600 transition duration-200"
          >
            ← Back to Home
          </button>
          <button
            onClick={async () => {
              await LogoutUser();
              navigate("/login");
            }}
            disabled={isLoading}
            className="w-full px-4 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
          >
            {isLoading ? (
              <Loader2 className="size-5 animate-spin mx-auto" />
            ) : (
              "Logout"
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-4xl font-extrabold text-gray-50 mb-6">
          Welcome,{" "}
          <span className="text-indigo-400">{user?.name || "School"}</span>!
        </h1>
        {renderActiveComponent()}
      </main>
    </div>
  );
};

export default SchoolDashboard;
