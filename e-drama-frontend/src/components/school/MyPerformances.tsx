// src/components/school/MyPerformances.tsx
import React, { useState } from 'react';
// No Firebase-specific imports

// Define types (Local to SchoolDashboard's components)
interface Competition {
  id: string;
  name: string;
}

interface Performance {
  id: string;
  competitionId: string;
  schoolId: string;
  schoolName: string;
  performanceTitle: string;
}

interface Score {
  id: string;
  judgeId: string;
  judgeUsername: string;
  performanceId: string;
  competitionId: string;
  marks: number;
  comments: string;
  timestamp: string;
}

interface MyPerformancesProps {
  performances: Performance[]; // Passed from SchoolDashboard
  scores: Score[]; // Passed from SchoolDashboard
  competitions: Competition[]; // Passed from SchoolDashboard to get names
  updatePerformance: (id: string, updatedFields: Partial<Performance>) => void; // Passed from SchoolDashboard
  deletePerformance: (id: string) => void; // Passed from SchoolDashboard
  simulateScore: (newScore: Omit<Score, 'id' | 'timestamp' | 'judgeId' | 'judgeUsername'>) => void; // Passed for simulating scores
}

const MyPerformances: React.FC<MyPerformancesProps> = ({
  performances,
  scores,
  competitions,
  updatePerformance,
  deletePerformance,
  simulateScore,
}) => {
  const [editingPerformanceId, setEditingPerformanceId] = useState<string | null>(null);
  const [editedPerformanceTitle, setEditedPerformanceTitle] = useState('');

  const getCompetitionName = (competitionId: string) => {
    return competitions.find(comp => comp.id === competitionId)?.name || 'Unknown Competition';
  };

  const getPerformanceScore = (performanceId: string) => {
    const scoresForPerformance = scores.filter(score => score.performanceId === performanceId);
    if (scoresForPerformance.length === 0) return { avgMarks: 'N/A', comments: 'No scores yet.', allScores: [] };

    const totalMarks = scoresForPerformance.reduce((sum, score) => sum + score.marks, 0);
    const avgMarks = (totalMarks / scoresForPerformance.length).toFixed(1);
    const allComments = scoresForPerformance.map(score => `${score.judgeUsername}: "${score.comments}"`).join('; ');

    return { avgMarks, comments: allComments, allScores: scoresForPerformance };
  };

  const handleEditClick = (performance: Performance) => {
    setEditingPerformanceId(performance.id);
    setEditedPerformanceTitle(performance.performanceTitle);
  };

  const handleSaveEdit = (performanceId: string) => {
    if (!editedPerformanceTitle.trim()) {
      alert("Performance title cannot be empty.");
      return;
    }
    updatePerformance(performanceId, { performanceTitle: editedPerformanceTitle });
    setEditingPerformanceId(null);
    setEditedPerformanceTitle('');
  };

  const handleCancelEdit = () => {
    setEditingPerformanceId(null);
    setEditedPerformanceTitle('');
  };

  const handleDeleteClick = (performanceId: string, performanceTitle: string) => {
    if (window.confirm(`Are you sure you want to delete the performance "${performanceTitle}"? This will also remove any associated scores.`)) {
      deletePerformance(performanceId);
    }
  };


  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-cyan-300 mb-6">My Performances</h2>
      <p className="text-gray-300 mb-4">
        View details and judging results for your school's performances in approved competitions.
        You can also add/edit your performance title here.
      </p>

      {performances.length === 0 ? (
        <p className="text-gray-400">Your school has no registered performances yet. Apply to a competition and get approved by an admin!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-600">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Competition</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Performance Title</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Avg. Marks</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Comments</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {performances.map(perf => {
                const { avgMarks, comments, allScores } = getPerformanceScore(perf.id);
                return (
                  <tr key={perf.id} className="hover:bg-gray-700">
                    <td className="py-3 px-4 whitespace-nowrap text-gray-200">{getCompetitionName(perf.competitionId)}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                      {editingPerformanceId === perf.id ? (
                        <input
                          type="text"
                          value={editedPerformanceTitle}
                          onChange={(e) => setEditedPerformanceTitle(e.target.value)}
                          className="w-full bg-gray-600 text-white px-2 py-1 rounded"
                        />
                      ) : (
                        perf.performanceTitle
                      )}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap text-gray-200">{avgMarks} ({allScores.length} judges)</td>
                    <td className="py-3 px-4 text-gray-200 text-sm">{comments}</td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        {editingPerformanceId === perf.id ? (
                          <>
                            <button onClick={() => handleSaveEdit(perf.id)} className="text-green-400 hover:text-green-300 text-sm">Save</button>
                            <button onClick={handleCancelEdit} className="text-gray-400 hover:text-gray-300 text-sm">Cancel</button>
                          </>
                        ) : (
                          <button onClick={() => handleEditClick(perf)} className="text-blue-400 hover:text-blue-300 text-sm">Edit Title</button>
                        )}
                        <button onClick={() => handleDeleteClick(perf.id, perf.performanceTitle)} className="text-red-400 hover:text-red-300 text-sm">Delete</button>
                        {/* Button to simulate judge scoring for testing */}
                        <button
                            onClick={() => simulateScore({ performanceId: perf.id, competitionId: perf.competitionId, marks: Math.floor(Math.random() * 101), comments: `Simulated comment from Judge ${Math.floor(Math.random() * 5 + 1)}` })}
                            className="text-orange-400 hover:text-orange-300 text-sm"
                        >
                            Simulate Score
                        </button>
                      </div>
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