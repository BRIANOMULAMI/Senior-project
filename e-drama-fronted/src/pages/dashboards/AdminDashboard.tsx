import React, { useState } from "react";
import CompetitionManagement from "../../components/admin/CompetitionManagement";
import JudgeManagement from "../../components/admin/JudgeManagement";
import StatisticsAnalytics from "../../components/admin/StatisticsAnalytics";
import SchoolRequests from "../../components/admin/SchoolRequests";
import { UseAuthContext } from "../../context/ AuthContext";
import { UseAuthSignOut } from "../../Api/Auth";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard: React.FC = () => {
  const { LogoutUser, isLoading: SIGNOUT_LOADING } = UseAuthSignOut();

  const { user } = UseAuthContext();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("competitions");
  const HandleAuthLogout = async () => {
    await LogoutUser();
    navigate("/login");
  };

  const renderActiveComponent = () => {
    switch (activeSection) {
      case "competitions":
        return <CompetitionManagement />;
      case "judges":
        return <JudgeManagement />;
      case "statistics":
        return <StatisticsAnalytics />;
      case "requests":
        return <SchoolRequests />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 text-white min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-gray-800 p-6 shadow-xl flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-indigo-400 mb-8 text-center lg:text-left">
            Admin Panel
          </h2>
          <nav>
            <ul>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection("competitions")}
                  className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 ${
                    activeSection === "competitions"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <i className="fas fa-trophy text-lg"></i>
                  <span className="text-lg">Competition Management</span>
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection("judges")}
                  className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 ${
                    activeSection === "judges"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <i className="fas fa-gavel text-lg"></i>
                  <span className="text-lg">Judge Management</span>
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection("statistics")}
                  className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 ${
                    activeSection === "statistics"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <i className="fas fa-chart-line text-lg"></i>
                  <span className="text-lg">Statistics & Analytics</span>
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection("requests")}
                  className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 ${
                    activeSection === "requests"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <i className="fas fa-clipboard-list text-lg"></i>
                  <span className="text-lg">School Requests</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* ✅ Bottom Buttons */}
        <div className="mt-10 flex flex-col gap-3">
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full text-left px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            ⬅ Back to Home
          </button>
          <button
            onClick={() => HandleAuthLogout()}
            disabled={SIGNOUT_LOADING}
            className="w-full text-left px-4 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200 cursor-pointer"
          >
            {SIGNOUT_LOADING ? (
              <Loader2 className="animate-spin mx-auto" />
            ) : (
              " Logout"
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-4xl font-extrabold text-gray-50 mb-6">
          Welcome,{" "}
          <span className="text-indigo-400">{user?.name || "Admin"}</span>!
        </h1>
        {renderActiveComponent()}
      </main>
    </div>
  );
};

export default AdminDashboard;
