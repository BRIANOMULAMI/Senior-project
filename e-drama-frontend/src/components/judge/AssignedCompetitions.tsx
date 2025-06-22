
import React from 'react';


interface JudgeAssignedCompetition {
  id: string;
  name: string;
  date: string;
  status: 'Upcoming' | 'Active' | 'Completed';
}

interface AssignedCompetitionsProps {
  competitions: JudgeAssignedCompetition[];
}

const AssignedCompetitions: React.FC<AssignedCompetitionsProps> = ({ competitions }) => {
  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-blue-300 mb-6">Your Assigned Competitions</h2>
      <p className="text-gray-300 mb-4">
        This section lists all the competitions you have been assigned to judge.
        Click on "View Details" to see more information, or "Enter Scores" for active competitions.
      </p>

      {competitions.length === 0 ? (
        <p className="text-gray-400">No competitions are currently assigned to you.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map(comp => (
            <div key={comp.id} className="bg-gray-800 p-5 rounded-lg shadow-inner border border-gray-700 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-2xl font-semibold text-white mb-2">{comp.name}</h3>
              <p className="text-gray-300 mb-1">Date: {comp.date}</p>
              <p className="text-gray-300 mb-4">Status:
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold
                  ${comp.status === 'Upcoming' ? 'bg-indigo-500' :
                     comp.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'}`}>
                  {comp.status}
                </span>
              </p>
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => console.log(`Viewing details for ${comp.name}`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 shadow-md"
                >
                  View Details
                </button>
                {comp.status === 'Active' && (
                  <button
                    onClick={() => console.log(`Entering scores for ${comp.name}`)}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 shadow-md"
                  >
                    Enter Scores
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssignedCompetitions;