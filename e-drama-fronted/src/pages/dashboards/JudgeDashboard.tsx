import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🔁 For "Back to Home"

import AssignedCompetitions from "../../components/judge/AssignedCompetitions";
import AwardMarksComments from "../../components/judge/AwardMarksComments";
import JudgeStatistics from "../../components/judge/JudgeStatistics";
import { UseAuthContext } from "../../context/ AuthContext";
import { UseAuthSignOut } from "../../Api/Auth";

const JudgeDashboard: React.FC = () => {
  const { user } = UseAuthContext();
  const navigate = useNavigate(); // ✅ For navigation
  const [activeSection, setActiveSection] = useState<string>(
    "assigned-competitions"
  );

  const renderActiveComponent = () => {
    switch (activeSection) {
      case "assigned-competitions":
        return <AssignedCompetitions />;
      case "award-marks-comments":
        return <AwardMarksComments />;
      case "judge-statistics":
        return <JudgeStatistics />;
      default:
        return <AssignedCompetitions />;
    }
  };
  const { LogoutUser } = UseAuthSignOut();

  const handleLogout = async () => {
    await LogoutUser();
    navigate("/login");
  };
  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 text-white min-h-[calc(100vh-80px)]">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 bg-gray-800 p-6 shadow-xl flex flex-col justify-between min-h-full">
        <div>
          <h2 className="text-3xl font-bold text-indigo-400 mb-8 text-center lg:text-left">
            Judge Panel
          </h2>
          <nav>
            <ul>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection("assigned-competitions")}
                  className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3 ${
                    activeSection === "assigned-competitions"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <i className="fas fa-trophy text-lg"></i>
                  <span className="text-lg">Assigned Competitions</span>
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection("award-marks-comments")}
                  className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3 ${
                    activeSection === "award-marks-comments"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <i className="fas fa-edit text-lg"></i>
                  <span className="text-lg">Award Marks & Comments</span>
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection("judge-statistics")}
                  className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3 ${
                    activeSection === "judge-statistics"
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <i className="fas fa-chart-bar text-lg"></i>
                  <span className="text-lg">Dashboard Statistics</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Controls */}
        <div className="mt-8 space-y-4">
          <button
            onClick={() => navigate("/")} // 🔁 Go to landing page
            className="w-full px-4 py-3 text-left bg-blue-600 text-white rounded-md hover:bg-gray-600"
          >
            ← Back to Home
          </button>
          <button
            onClick={() => handleLogout()}
            className="w-full px-4 py-3 text-left bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-4xl font-extrabold text-gray-50 mb-6">
          Welcome,{" "}
          <span className="text-indigo-400">{user?.name || "Judge"}</span>!
        </h1>
        {renderActiveComponent()}
      </main>
    </div>
  );
};

export default JudgeDashboard;
