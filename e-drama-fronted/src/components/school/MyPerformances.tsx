import React from "react";
import { UseSchoolsGetParticipationResults } from "../../Api/Schools";
import { Loader2Icon } from "lucide-react";
import SchoolCompetitionRankings from "./SchoolCompetitionRankings";

const MyPerformances: React.FC = () => {
  const { data: RESULTS, isLoading: RESULTS_LOADING } =
    UseSchoolsGetParticipationResults();

  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">
        My Performances
      </h2>
      <p className="text-gray-300 mb-4">
        View details and judging results for your school's performances in
        approved competitions. You can also add/edit your performance title
        here.
      </p>

      {RESULTS_LOADING ? (
        <Loader2Icon className="mx-auto animate-spin" />
      ) : RESULTS?.length === 0 ? (
        <p className="text-gray-400">
          Your school has no registered performances yet. Apply to a competition
          and get approved by an admin!
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-600">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                  Competition
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                  Performance Title
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                  Avg. Marks
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                  Comments
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {RESULTS?.map((perf) => {
                return (
                  <tr key={perf.id} className="hover:bg-gray-700">
                    <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                      {perf.participant.competition.name}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                      {perf.participant.school.user.name}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                      {perf.score}
                    </td>
                    <td className="py-3 px-4 text-gray-200 text-sm">
                      {perf.comments}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <SchoolCompetitionRankings
                        id={perf.participant.competition.id}
                        name={perf.participant.competition.name}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyPerformances;
