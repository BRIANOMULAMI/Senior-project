import React from "react";
import {
  UseJudgeGetAwardedMarks,
  UseJudgeGetStatisticReports,
} from "../../Api/judge";
import { formatCustomDateTime } from "../../Utils";
import { Loader2Icon, PenBoxIcon } from "lucide-react";

const JudgeStatistics: React.FC = () => {
  const { data: JUDGE_STATS, isLoading: STATS_LOADING } =
    UseJudgeGetStatisticReports();
  const stats = [
    {
      label: "Competitions Judged",
      value: JUDGE_STATS?.TotalCompetitionsAssigned,
      color: "#60A5FA",
    }, // blue-400
    {
      label: "Performances Scored",
      value: JUDGE_STATS?.TotalMarksAwarded,
      color: "#4ADE80",
    }, // green-400
    {
      label: "Average Score Given",
      value: JUDGE_STATS?.AverageScore,
      color: "#C084FC",
    }, // purple-400
  ];

  const { data: SCORES, isLoading: SCORES_LOADING } = UseJudgeGetAwardedMarks();

  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">
        Your Judging Statistics
      </h2>
      <p className="text-gray-300 mb-4">
        This section provides an overview of your personal judging activity and
        statistics based on the scores you have submitted.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {STATS_LOADING ? (
          <Loader2Icon className="animate-spin mx-auto" />
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

      {/* List of Scored Performances */}
      <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">
        Scored Performances
      </h3>
      {SCORES_LOADING ? (
        <Loader2Icon className="animate-spin mx-auto" />
      ) : SCORES?.length === 0 ? (
        <p className="text-gray-400">No performances scored yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-600">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                  Competition
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                  Performance
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                  Marks
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                  Comments
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                  Timestamp
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-600">
              {SCORES?.map((score) => (
                <tr key={score.id} className="hover:bg-gray-650">
                  <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                    {score.participant.competition.name}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                    {score.participant.school.user.name}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                    {score.score}
                  </td>
                  <td className="py-3 px-4 text-gray-200">{score.comments}</td>
                  <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                    {formatCustomDateTime(score.createdAt)}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                    <button className="size-5">
                      <PenBoxIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default JudgeStatistics;
