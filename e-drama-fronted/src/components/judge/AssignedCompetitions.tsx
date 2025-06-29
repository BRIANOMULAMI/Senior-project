import React from "react";
import { UseJudgeGetAllCompetitons } from "../../Api/judge";
import { Loader2 } from "lucide-react";

const AssignedCompetitions: React.FC = () => {
  const { data: COMPETITIONS, isPending } = UseJudgeGetAllCompetitons();
  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">
        Your Assigned Competitions
      </h2>
      <p className="text-gray-300 mb-4">
        This section lists all the competitions you have been assigned to judge.
        Click on "View Details" to see more information, or "Enter Scores" for
        active competitions.
      </p>
      {isPending ? (
        <Loader2 className="animate-spin justify-center flex items-center h-full mx-auto" />
      ) : COMPETITIONS?.length === 0 ? (
        <p className="text-gray-400">
          No competitions are currently assigned to you.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPETITIONS?.map((comp) => (
            <div
              key={comp.id}
              className="bg-gray-800 p-5 rounded-lg shadow-inner border border-gray-700 hover:shadow-xl transition-shadow duration-200"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {comp.name}
              </h3>
              <p className="text-gray-300 mb-1">Date: {comp.schedule}</p>
              <p className="text-gray-300 mb-4">
                Status:
                <span
                  className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold
                  ${
                    comp.status === "UPCOMING"
                      ? "bg-indigo-500"
                      : comp.status === "ACTIVE"
                      ? "bg-green-500"
                      : "bg-gray-500"
                  }`}
                >
                  {comp.status}
                </span>
              </p>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssignedCompetitions;
