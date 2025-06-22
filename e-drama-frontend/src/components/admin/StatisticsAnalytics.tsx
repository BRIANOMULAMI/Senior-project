
import React from 'react';


interface Competition {
  id: string;
  name: string;
  location: string;
  time: string;
  maxSchools: number;
}

interface Judge {
  id: string;
  name: string;
  email: string;
  password?: string; 
  assignedCompetitions: string[];
}

interface SchoolRequest {
  id: string;
  schoolName: string;
  competitionId: string;
  status: 'pending' | 'approved' | 'denied';
}

interface StatisticsAnalyticsProps {
  competitions: Competition[];
  judges: Judge[];
  schoolRequests: SchoolRequest[];
}

const StatisticsAnalytics: React.FC<StatisticsAnalyticsProps> = ({
  competitions,
  judges,
  schoolRequests,
}) => {
  const totalCompetitions = competitions.length;
  const totalJudges = judges.length;
  const pendingRequests = schoolRequests.filter(req => req.status === 'pending').length;
  const approvedRequests = schoolRequests.filter(req => req.status === 'approved').length;
  const deniedRequests = schoolRequests.filter(req => req.status === 'denied').length;

  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-purple-300 mb-6">Statistics & Analytics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      
        <div className="bg-gray-800 p-6 rounded-lg shadow-inner text-center">
          <p className="text-5xl font-extrabold text-indigo-400">{totalCompetitions}</p>
          <p className="text-gray-300 mt-2 text-lg">Total Competitions</p>
        </div>
      
        <div className="bg-gray-800 p-6 rounded-lg shadow-inner text-center">
          <p className="text-5xl font-extrabold text-green-400">{totalJudges}</p>
          <p className="text-gray-300 mt-2 text-lg">Total Judges</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-inner text-center">
          <p className="text-5xl font-extrabold text-yellow-400">{pendingRequests}</p>
          <p className="text-gray-300 mt-2 text-lg">Pending School Requests</p>
        </div>
       
        <div className="bg-gray-800 p-6 rounded-lg shadow-inner text-center">
          <p className="text-5xl font-extrabold text-blue-400">{approvedRequests}</p>
          <p className="text-gray-300 mt-2 text-lg">Approved School Requests</p>
        </div>
      
        <div className="bg-gray-800 p-6 rounded-lg shadow-inner text-center">
          <p className="text-5xl font-extrabold text-red-400">{deniedRequests}</p>
          <p className="text-gray-300 mt-2 text-lg">Denied School Requests</p>
        </div>
      </div>

      {/* Detailed view example (expandable in a real app) */}
      <h3 className="text-2xl font-semibold text-gray-100 mb-4">Competition Overview</h3>
      {competitions.length === 0 ? (
        <p className="text-gray-400">No competition data to display.</p>
      ) : (
        <ul className="list-disc list-inside text-gray-300">
          {competitions.map(comp => (
            <li key={comp.id} className="mb-1">
              <span className="font-semibold">{comp.name}</span> at {comp.location} ({comp.maxSchools} schools max)
            </li>
          ))}
        </ul>
      )}

      <h3 className="text-2xl font-semibold text-gray-100 mt-8 mb-4">Judge Assignments</h3>
      {judges.length === 0 ? (
        <p className="text-gray-400">No judge data to display.</p>
      ) : (
        <ul className="list-disc list-inside text-gray-300">
          {judges.map(judge => (
            <li key={judge.id} className="mb-1">
              <span className="font-semibold">{judge.name}</span> ({judge.email}) assigned to:{' '}
              {judge.assignedCompetitions.length > 0 ? (
                judge.assignedCompetitions.map(comp_id => competitions.find(c => c.id === comp_id)?.name || 'N/A').join(', ')
              ) : (
                'None'
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StatisticsAnalytics;