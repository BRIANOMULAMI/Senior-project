
import React from 'react';

interface JudgeAssignedCompetition {
  id: string;
  name: string;
  date: string;
  status: 'Upcoming' | 'Active' | 'Completed';
}

interface Score {
  id: string;
  judgeUsername: string;
  performanceId: string; 
  competitionId: string;
  marks: number;
  comments: string;
  timestamp: string;
}

interface JudgeStatisticsProps {
  competitions: JudgeAssignedCompetition[];
  scores: Score[]; 
}

const JudgeStatistics: React.FC<JudgeStatisticsProps> = ({ competitions, scores }) => {

  const competitionsJudgedIds = new Set(scores.map(s => s.competitionId));
  const totalCompetitionsJudged = competitionsJudgedIds.size;

  // Total performances scored (which is simply the count of scores)
  const totalPerformancesScored = scores.length;


  const totalMarks = scores.reduce((sum, s) => sum + s.marks, 0);
  const averageScore = totalPerformancesScored > 0 ? (totalMarks / totalPerformancesScored).toFixed(1) : 'N/A';


  const getCompetitionName = (competitionId: string) => {
    return competitions.find(comp => comp.id === competitionId)?.name || `Competition ${competitionId.substring(0, 8)}...`;
  };

  const getPerformanceName = (performanceId: string) => {

    return `Performance ${performanceId.substring(0, 8)}...`;
  };

  // Stats to display
  const stats = [
    { label: 'Competitions Judged', value: totalCompetitionsJudged, color: '#60A5FA' }, // blue-400
    { label: 'Performances Scored', value: totalPerformancesScored, color: '#4ADE80' }, // green-400
    { label: 'Average Score Given', value: averageScore, color: '#C084FC' }, // purple-400
  ];

  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-purple-300 mb-6">Your Judging Statistics</h2>
      <p className="text-gray-300 mb-4">
        This section provides an overview of your personal judging activity and statistics based on the scores you have submitted.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map(stat => (
          <div key={stat.label} className="bg-gray-800 p-6 rounded-lg shadow-inner text-center">
            <p className="text-5xl font-extrabold" style={{ color: stat.color }}>
              {stat.value}
            </p>
            <p className="text-gray-300 mt-2 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* List of Scored Performances */}
      <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Scored Performances</h3>
      {scores.length === 0 ? (
        <p className="text-gray-400">No performances scored yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-600">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Competition</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Performance</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Marks</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Comments</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-600">
              {scores.map(score => (
                <tr key={score.id} className="hover:bg-gray-650">
                  <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                    {getCompetitionName(score.competitionId)}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                    {getPerformanceName(score.performanceId)}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap text-gray-200">{score.marks}</td>
                  <td className="py-3 px-4 text-gray-200">{score.comments}</td>
                  <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                    {new Date(score.timestamp).toLocaleString()}
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