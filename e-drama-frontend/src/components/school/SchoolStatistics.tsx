// src/components/school/SchoolStatistics.tsx
import React from 'react';
// No Firebase-specific imports

// Define types (Local to SchoolDashboard's components)
interface Competition {
  id: string;
  name: string;
}

interface SchoolRequest {
  id: string;
  schoolId: string;
  schoolName: string;
  competitionId: string;
  status: 'pending' | 'approved' | 'denied';
  timestamp: string;
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

interface SchoolStatisticsProps {
  competitions: Competition[]; // Passed from SchoolDashboard
  schoolRequests: SchoolRequest[]; // Passed from SchoolDashboard
  performances: Performance[]; // Passed from SchoolDashboard
  scores: Score[]; // Passed from SchoolDashboard
}

const SchoolStatistics: React.FC<SchoolStatisticsProps> = ({
  competitions,
  schoolRequests,
  performances,
  scores,
}) => {
  const totalApplications = schoolRequests.length;
  const approvedApplications = schoolRequests.filter(req => req.status === 'approved').length;
  const pendingApplications = schoolRequests.filter(req => req.status === 'pending').length;
  const totalPerformances = performances.length;

  let totalMarksSum = 0;
  let totalScoresCount = 0;

  performances.forEach(perf => {
    const scoresForPerformance = scores.filter(score => score.performanceId === perf.id);
    scoresForPerformance.forEach(score => {
      totalMarksSum += score.marks;
      totalScoresCount++;
    });
  });

  const averageScoreAcrossPerformances = totalScoresCount > 0 ? (totalMarksSum / totalScoresCount).toFixed(1) : 'N/A';


  const stats = [
    { label: 'Total Applications', value: totalApplications, color: '#F87171' },
    { label: 'Approved Applications', value: approvedApplications, color: '#34D399' },
    { label: 'Pending Applications', value: pendingApplications, color: '#FBBF24' },
    { label: 'Total Performances', value: totalPerformances, color: '#60A5FA' },
    { label: 'Avg. Score (All Performances)', value: averageScoreAcrossPerformances, color: '#A78BFA' },
  ];

  const getCompetitionName = (id: string) => competitions.find(c => c.id === id)?.name || 'Unknown Competition';

  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-lime-300 mb-6">Your School Statistics</h2>
      <p className="text-gray-300 mb-4">
        Get insights into your school's participation and performance in drama competitions.
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

      <h3 className="text-2xl font-semibold text-gray-100 mb-4 mt-8">Recent Activities</h3>
      {schoolRequests.length === 0 && performances.length === 0 ? (
        <p className="text-gray-400">No recent activities to display.</p>
      ) : (
        <ul className="list-disc list-inside text-gray-300">
          {schoolRequests.slice(-3).reverse().map(req => (
            <li key={req.id} className="mb-1">
              Applied to <span className="font-semibold">{getCompetitionName(req.competitionId)}</span> (Status: {req.status}) on {new Date(req.timestamp).toLocaleDateString()}
            </li>
          ))}
          {performances.slice(-3).reverse().map(perf => (
            <li key={perf.id} className="mb-1">
              Registered performance "<span className="font-semibold">{perf.performanceTitle}</span>" for {getCompetitionName(perf.competitionId)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SchoolStatistics;