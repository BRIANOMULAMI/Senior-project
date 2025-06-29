import { UseSchoolGetStatistics } from "@/Api/Schools";
import { Loader2 } from "lucide-react";
import React from "react";

const SchoolStatistics: React.FC = () => {
  const { data: STATISTICS, isLoading: STATS_LOADING } =
    UseSchoolGetStatistics();

  const stats = [
    {
      label: "Total Applications",
      value: STATISTICS?.TotalApplications,
      color: "#F87171",
    },
    {
      label: "Approved Applications",
      value: STATISTICS?.ApprovedApplications,
      color: "#34D399",
    },
    {
      label: "Pending Applications",
      value: STATISTICS?.PendingApplications,
      color: "#FBBF24",
    },
    {
      label: "Total Performances",
      value: STATISTICS?.TotalPerformances,
      color: "#60A5FA",
    },
    {
      label: "Avg. Score (All Performances)",
      value: STATISTICS?.AverageScore,
      color: "#A78BFA",
    },
  ];

  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">
        Your School Statistics
      </h2>
      <p className="text-gray-300 mb-4">
        Get insights into your school's participation and performance in drama
        competitions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {STATS_LOADING ? (
          <Loader2 className="animate-spin mx-auto" />
        ) : (
          stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-800 p-6 rounded-lg shadow-inner text-center"
            >
              <p
                className="text-5xl font-extrabold"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="text-gray-300 mt-2 text-lg">{stat.label}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SchoolStatistics;
