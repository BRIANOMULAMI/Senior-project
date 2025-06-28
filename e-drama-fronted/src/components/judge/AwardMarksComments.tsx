
import React, { useState, useEffect } from 'react';


interface JudgeAssignedCompetition {
  id: string;
  name: string;
  date: string;
  status: 'Upcoming' | 'Active' | 'Completed';
}

interface Performance {
  id: string;
  competitionId: string;
  schoolName: string;
  performanceTitle: string;
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

interface AwardMarksCommentsProps {
  assignedCompetitions: JudgeAssignedCompetition[];
  performances: Performance[];
  scores: Score[]; // Scores already given by the current judge
  addScore: (performanceId: string, competitionId: string, marks: number, comments: string) => void;
  currentJudgeUsername: string;
}

const AwardMarksComments: React.FC<AwardMarksCommentsProps> = ({
  assignedCompetitions,
  performances,
  scores,
  addScore,
  currentJudgeUsername,
}) => {
  const [selectedCompetitionId, setSelectedCompetitionId] = useState<string | null>(null);
  const [selectedPerformanceId, setSelectedPerformanceId] = useState<string | null>(null);
  const [marks, setMarks] = useState<string>(''); // Use string for input, parse to number
  const [comments, setComments] = useState<string>('');
  const [isEditingExistingScore, setIsEditingExistingScore] = useState(false);


  const activeAndUpcomingCompetitions = assignedCompetitions.filter(
    (comp) => comp.status === 'Active' || comp.status === 'Upcoming'
  );

  const performancesForSelectedComp = selectedCompetitionId
    ? performances.filter((perf) => perf.competitionId === selectedCompetitionId)
    : [];


  const existingScoreForPerformance = selectedPerformanceId
    ? scores.find((s) => s.performanceId === selectedPerformanceId && s.judgeUsername === currentJudgeUsername)
    : undefined;


  useEffect(() => {
    if (existingScoreForPerformance) {
      setMarks(existingScoreForPerformance.marks.toString());
      setComments(existingScoreForPerformance.comments);
      setIsEditingExistingScore(true);
    } else {
      setMarks('');
      setComments('');
      setIsEditingExistingScore(false);
    }
  }, [selectedPerformanceId, existingScoreForPerformance]);


  const handleMarksSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedCompetitionId || !selectedPerformanceId) {
      alert('Please select both a competition and a performance.');
      return;
    }

    const parsedMarks = parseInt(marks);
    if (isNaN(parsedMarks) || parsedMarks < 0 || parsedMarks > 100) { // Example range 0-100
      alert('Please enter a valid mark between 0 and 100.');
      return;
    }

 
    addScore(selectedPerformanceId, selectedCompetitionId, parsedMarks, comments);

    // After submission, clear form and optionally reset selection
    setMarks('');
    setComments('');
    
  };

  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-orange-300 mb-6">Award Marks & Comments</h2>

      {/* Step 1: Select Competition */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-inner mb-8">
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">1. Select Competition</h3>
        <select
          value={selectedCompetitionId || ''}
          onChange={(e) => {
            setSelectedCompetitionId(e.target.value);
            setSelectedPerformanceId(null); // Reset performance selection when comp changes
          }}
          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">-- Select a Competition --</option>
          {activeAndUpcomingCompetitions.map((comp) => (
            <option key={comp.id} value={comp.id}>
              {comp.name} ({comp.status})
            </option>
          ))}
        </select>
        {activeAndUpcomingCompetitions.length === 0 && (
          <p className="text-gray-400 text-sm mt-2">No active or upcoming competitions assigned.</p>
        )}
      </div>

      {/* Step 2: Select School/Performance */}
      {selectedCompetitionId && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-inner mb-8">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">2. Select Performance</h3>
          <select
            value={selectedPerformanceId || ''}
            onChange={(e) => setSelectedPerformanceId(e.target.value)}
            className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">-- Select a Performance --</option>
            {performancesForSelectedComp.length === 0 ? (
              <option value="" disabled>No performances found for this competition</option>
            ) : (
              performancesForSelectedComp.map((perf) => (
                <option key={perf.id} value={perf.id}>
                  {perf.schoolName} - {perf.performanceTitle}
                </option>
              ))
            )}
          </select>
          {performancesForSelectedComp.length === 0 && (
            <p className="text-gray-400 text-sm mt-2">No performances currently available for this competition.</p>
          )}
        </div>
      )}

      {/* Step 3: Enter Marks and Comments */}
      {selectedPerformanceId && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">3. Enter Marks & Comments</h3>
          <form onSubmit={handleMarksSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Marks Input */}
            <div>
              <label htmlFor="marks" className="block text-gray-300 text-sm font-medium mb-1">Marks (0-100)</label>
              <input
                type="number"
                id="marks"
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                placeholder="e.g., 85"
                min="0"
                max="100"
              />
            </div>


            <div className="md:col-span-2">
              <label htmlFor="comments" className="block text-gray-300 text-sm font-medium mb-1">Comments</label>
              <textarea
                id="comments"
                rows={4}
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-y"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Provide constructive feedback here..."
              ></textarea>
            </div>

          
            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200 shadow-md"
              >
                {isEditingExistingScore ? 'Update Score' : 'Submit Score'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AwardMarksComments;