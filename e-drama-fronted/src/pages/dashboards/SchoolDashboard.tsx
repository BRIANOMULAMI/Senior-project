// // src/pages/dashboards/SchoolDashboard.tsx
// import React, { useState } from 'react';
// import { useAuth } from '../../context/ AuthContext';


// import AvailableCompetitions from '../../components/school/AvailableCompetitions';
// import MyRequests from '../../components/school/MyRequests';
// import MyPerformances from '../../components/school/MyPerformances';
// import SchoolStatistics from '../../components/school/SchoolStatistics';

// interface Competition { 
//   id: string;
//   name: string;
//   location: string;
//   time: string;
//   maxSchools: number;
//   status: 'Upcoming' | 'Active' | 'Completed';
// }

// interface SchoolRequest {
//   id: string;
//   schoolId: string; 
//   schoolName: string;
//   competitionId: string;
//   status: 'pending' | 'approved' | 'denied';
//   timestamp: string;
// }

// interface Performance {
//   id: string;
//   competitionId: string;
//   schoolId: string;
//   schoolName: string;
//   performanceTitle: string;
// }

// interface Score {
//   id: string;
//   judgeId: string; 
//   judgeUsername: string;
//   performanceId: string;
//   competitionId: string;
//   marks: number;
//   comments: string;
//   timestamp: string;
// }


// const SchoolDashboard: React.FC = () => {
//   const { user } = useAuth(); // Get user information from AuthContext
//   const [activeSection, setActiveSection] = useState<string>('available-competitions'); // Default to available competitions

//   // Local state for School's data (SIMULATED data)
//   // These will not reflect changes from Admin/Judge dashboard without a backend
//   const [competitions] = useState<Competition[]>([
//     { id: 'school-comp-001', name: 'District Drama Festival', location: 'Community Theatre', time: '2025-10-01', maxSchools: 12, status: 'Upcoming' },
//     { id: 'school-comp-002', name: 'Annual Talent Show', location: 'School Auditorium', time: '2025-11-15', maxSchools: 8, status: 'Active' },
//     { id: 'school-comp-003', name: 'Youth Drama Challenge', location: 'City Arts Center', time: '2025-05-20', maxSchools: 10, status: 'Completed' },
//     { id: 'school-comp-004', name: 'Spring Play Competition', location: 'Grand Theatre', time: '2026-03-01', maxSchools: 15, status: 'Upcoming' },
//   ]);

//   const [schoolRequests, setSchoolRequests] = useState<SchoolRequest[]>([]); // School's own requests
//   const [performances, setPerformances] = useState<Performance[]>([]); // School's own performances
//   const [scores, setScores] = useState<Score[]>([]); // Scores related to school's performances

//   // --- School Request Management Functions (local to School Dashboard) ---
//   const addSchoolRequest = (newRequestData: Omit<SchoolRequest, 'id' | 'status' | 'timestamp'>) => {
//     const newRequest: SchoolRequest = {
//       id: `req-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
//       status: 'pending', // Default status for new requests
//       timestamp: new Date().toISOString(),
//       ...newRequestData,
//     };
//     setSchoolRequests(prev => [...prev, newRequest]);
//     console.log('Added School Request (School):', newRequest);
//   };
//   const updateSchoolRequestStatus = (id: string, status: 'approved' | 'denied') => {
//     setSchoolRequests(prev =>
//       prev.map(req => (req.id === id ? { ...req, status } : req))
//     );
//     console.log(`Updated request ${id} status (School): ${status}`);
//     // If approved, create a placeholder performance for the school
//     const approvedRequest = schoolRequests.find(req => req.id === id);
//     if (status === 'approved' && approvedRequest) {
//       console.log(`Request approved for ${approvedRequest.schoolName}. Creating local performance placeholder...`);
//       addPerformance({
//         competitionId: approvedRequest.competitionId,
//         schoolId: approvedRequest.schoolId, // Use the schoolId from the request
//         schoolName: approvedRequest.schoolName,
//         performanceTitle: `Performance by ${approvedRequest.schoolName} in ${competitions.find(c => c.id === approvedRequest.competitionId)?.name || 'Unknown Competition'}`,
//       });
//     }
//   };

//   const deleteSchoolRequest = (id: string) => {
//     setSchoolRequests(prev => prev.filter(req => req.id !== id));
//     console.log(`Deleted request ${id} (School)`);
//   };

//   // --- Performance Management Functions (local to School Dashboard) ---
//   const addPerformance = (newPerfData: Omit<Performance, 'id'>) => {
//     const newPerformance: Performance = {
//       id: `perf-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
//       ...newPerfData,
//     };
//     setPerformances(prev => [...prev, newPerformance]);
//     console.log('Added Performance (School):', newPerformance);
//   };
//   const updatePerformance = (id: string, updatedFields: Partial<Performance>) => {
//     setPerformances(prev =>
//       prev.map(perf => (perf.id === id ? { ...perf, ...updatedFields } : perf))
//     );
//     console.log(`Updated performance ${id} (School):`, updatedFields);
//   };
//   const deletePerformance = (id: string) => {
//     setPerformances(prev => prev.filter(perf => perf.id !== id));
//     console.log(`Deleted performance ${id} (School)`);
//     setScores(prev => prev.filter(score => score.performanceId !== id)); // Remove related scores
//   };

//   // Dummy function for adding scores (these would normally come from judges via backend)
//   // This is here to allow MyPerformances and SchoolStatistics to potentially display data
//   const simulateScore = (newScoreData: Omit<Score, 'id' | 'timestamp' | 'judgeId' | 'judgeUsername'>) => {
//     const newScore: Score = {
//       id: `score-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
//       judgeId: `dummy-judge-${Math.floor(Math.random() * 1000)}`, // Simulated judge ID
//       judgeUsername: `Simulated Judge ${Math.floor(Math.random() * 5 + 1)}`, // Random judge name
//       timestamp: new Date().toISOString(),
//       ...newScoreData,
//     };
//     setScores(prevScores => {
//       // Check if score for this performance by this judge already exists
//       const existingScoreIndex = prevScores.findIndex(
//         s => s.performanceId === newScore.performanceId && s.judgeId === newScore.judgeId
//       );
//       if (existingScoreIndex !== -1) {
//         const updatedScores = [...prevScores];
//         updatedScores[existingScoreIndex] = newScore;
//         return updatedScores;
//       }
//       return [...prevScores, newScore];
//     });
//     console.log('Simulated Score Added to School View:', newScore);
//   };


//   const renderActiveComponent = () => {
//     // Filter data for the current school based on `user.username`
//     const currentSchoolId = user?.username || 'unknown_school_id'; // Using username as ID
//     const currentSchoolName = user?.username || 'Unknown School'; // Using username as name


//     // Filter available competitions (not already applied to by this school)
//     const availableCompsForSchool = competitions.filter(comp =>
//       (comp.status === 'Upcoming' || comp.status === 'Active') &&
//       !schoolRequests.some(req => req.competitionId === comp.id && req.schoolId === currentSchoolId)
//     );

//     // Filter requests for this school
//     const myRequestsForSchool = schoolRequests.filter(req => req.schoolId === currentSchoolId);

//     // Filter performances for this school
//     const myPerformancesForSchool = performances.filter(perf => perf.schoolId === currentSchoolId);

//     // Filter scores relevant to this school's performances
//     const scoresForMyPerformances = scores.filter(score =>
//       myPerformancesForSchool.some(perf => perf.id === score.performanceId)
//     );


//     switch (activeSection) {
//       case 'available-competitions':
//         return (
//           <AvailableCompetitions
//             competitions={availableCompsForSchool}
//             addSchoolRequest={addSchoolRequest}
//             schoolRequests={myRequestsForSchool} // Pass for filtering applied status
//             currentSchoolId={currentSchoolId}
//             currentSchoolName={currentSchoolName}
//           />
//         );
//       case 'my-requests':
//         return (
//           <MyRequests
//             schoolRequests={myRequestsForSchool}
//             competitions={competitions} // All competitions needed to get names
//             deleteSchoolRequest={deleteSchoolRequest}
//             updateSchoolRequestStatus={updateSchoolRequestStatus} // Pass to simulate Admin approval/denial
//           />
//         );
//       case 'my-performances':
//         return (
//           <MyPerformances
//             performances={myPerformancesForSchool}
//             scores={scoresForMyPerformances}
//             competitions={competitions} // All competitions needed to get names
//             updatePerformance={updatePerformance}
//             deletePerformance={deletePerformance}
//             simulateScore={simulateScore} // Pass dummy score function for testing
//           />
//         );
//       case 'school-statistics':
//         return (
//           <SchoolStatistics
//             competitions={competitions} // All competitions for context
//             schoolRequests={myRequestsForSchool}
//             performances={myPerformancesForSchool}
//             scores={scoresForMyPerformances}
//           />
//         );
//       default:
//         return (
//           <AvailableCompetitions
//             competitions={availableCompsForSchool}
//             addSchoolRequest={addSchoolRequest}
//             schoolRequests={myRequestsForSchool}
//             currentSchoolId={currentSchoolId}
//             currentSchoolName={currentSchoolName}
//           />
//         );
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row bg-gray-900 text-white min-h-[calc(100vh - 80px - 80px)]">

//       {/* Sidebar Navigation */}
//       <aside className="w-full lg:w-64 bg-gray-800 p-6 shadow-xl lg:flex-shrink-0">
//         <h2 className="text-3xl font-bold text-teal-400 mb-8 text-center lg:text-left">School Panel</h2>
//         <nav>
//           <ul>
//             <li className="mb-4">
//               <button
//                 onClick={() => setActiveSection('available-competitions')}
//                 className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3
//                             ${activeSection === 'available-competitions' ? 'bg-teal-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
//               >
//                 <i className="fas fa-search text-lg"></i>
//                 <span className="text-lg">Available Competitions</span>
//               </button>
//             </li>
//             <li className="mb-4">
//               <button
//                 onClick={() => setActiveSection('my-requests')}
//                 className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3
//                             ${activeSection === 'my-requests' ? 'bg-teal-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
//               >
//                 <i className="fas fa-clipboard-list text-lg"></i>
//                 <span className="text-lg">My Competition Requests</span>
//               </button>
//             </li>
//             <li className="mb-4">
//               <button
//                 onClick={() => setActiveSection('my-performances')}
//                 className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3
//                             ${activeSection === 'my-performances' ? 'bg-teal-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
//               >
//                 <i className="fas fa-theater-masks text-lg"></i>
//                 <span className="text-lg">My Performances</span>
//               </button>
//             </li>
//             <li className="mb-4">
//               <button
//                 onClick={() => setActiveSection('school-statistics')}
//                 className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3
//                             ${activeSection === 'school-statistics' ? 'bg-teal-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
//               >
//                 <i className="fas fa-chart-pie text-lg"></i>
//                 <span className="text-lg">School Statistics</span>
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content Area */}
//       <main className="flex-1 p-8 overflow-y-auto">
//         <h1 className="text-4xl font-extrabold text-gray-50 mb-6">
//           Welcome, <span className="text-teal-400">{user?.username || 'School'}</span>!
//         </h1>
//         {renderActiveComponent()}
//       </main>
//     </div>
//   );
// };

// export default SchoolDashboard;


import React, { useState } from 'react';
import { useAuth } from '../../context/ AuthContext';
import { useNavigate } from 'react-router-dom';

import AvailableCompetitions from '../../components/school/AvailableCompetitions';
import MyRequests from '../../components/school/MyRequests';
import MyPerformances from '../../components/school/MyPerformances';
import SchoolStatistics from '../../components/school/SchoolStatistics';

// Interfaces remain unchanged
interface Competition {
  id: string;
  name: string;
  location: string;
  time: string;
  maxSchools: number;
  status: 'Upcoming' | 'Active' | 'Completed';
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

const SchoolDashboard: React.FC = () => {
  const { user, logout } = useAuth(); // ✅ logout included
  const navigate = useNavigate(); // ✅ for back to home
  const [activeSection, setActiveSection] = useState<string>('available-competitions');

  const [competitions] = useState<Competition[]>([
    { id: 'school-comp-001', name: 'District Drama Festival', location: 'Community Theatre', time: '2025-10-01', maxSchools: 12, status: 'Upcoming' },
    { id: 'school-comp-002', name: 'Annual Talent Show', location: 'School Auditorium', time: '2025-11-15', maxSchools: 8, status: 'Active' },
    { id: 'school-comp-003', name: 'Youth Drama Challenge', location: 'City Arts Center', time: '2025-05-20', maxSchools: 10, status: 'Completed' },
    { id: 'school-comp-004', name: 'Spring Play Competition', location: 'Grand Theatre', time: '2026-03-01', maxSchools: 15, status: 'Upcoming' },
  ]);

  const [schoolRequests, setSchoolRequests] = useState<SchoolRequest[]>([]);
  const [performances, setPerformances] = useState<Performance[]>([]);
  const [scores, setScores] = useState<Score[]>([]);

  const addSchoolRequest = (data: Omit<SchoolRequest, 'id' | 'status' | 'timestamp'>) => {
    const newRequest: SchoolRequest = {
      id: `req-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      status: 'pending',
      timestamp: new Date().toISOString(),
      ...data,
    };
    setSchoolRequests(prev => [...prev, newRequest]);
  };

  const updateSchoolRequestStatus = (id: string, status: 'approved' | 'denied') => {
    setSchoolRequests(prev =>
      prev.map(req => (req.id === id ? { ...req, status } : req))
    );
    const req = schoolRequests.find(r => r.id === id);
    if (req && status === 'approved') {
      addPerformance({
        competitionId: req.competitionId,
        schoolId: req.schoolId,
        schoolName: req.schoolName,
        performanceTitle: `Performance by ${req.schoolName} in ${competitions.find(c => c.id === req.competitionId)?.name}`,
      });
    }
  };

  const deleteSchoolRequest = (id: string) => {
    setSchoolRequests(prev => prev.filter(req => req.id !== id));
  };

  const addPerformance = (data: Omit<Performance, 'id'>) => {
    const newPerformance: Performance = {
      id: `perf-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      ...data,
    };
    setPerformances(prev => [...prev, newPerformance]);
  };

  const updatePerformance = (id: string, updates: Partial<Performance>) => {
    setPerformances(prev => prev.map(perf => perf.id === id ? { ...perf, ...updates } : perf));
  };

  const deletePerformance = (id: string) => {
    setPerformances(prev => prev.filter(p => p.id !== id));
    setScores(prev => prev.filter(s => s.performanceId !== id));
  };

  const simulateScore = (data: Omit<Score, 'id' | 'timestamp' | 'judgeId' | 'judgeUsername'>) => {
    const newScore: Score = {
      id: `score-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      judgeId: `judge-${Math.floor(Math.random() * 1000)}`,
      judgeUsername: `Judge ${Math.floor(Math.random() * 10)}`,
      timestamp: new Date().toISOString(),
      ...data,
    };
    setScores(prev => [...prev, newScore]);
  };

  const currentSchoolId = user?.username || 'unknown_school_id';
  const currentSchoolName = user?.username || 'Unknown School';

  const availableComps = competitions.filter(c =>
    (c.status === 'Upcoming' || c.status === 'Active') &&
    !schoolRequests.some(r => r.competitionId === c.id && r.schoolId === currentSchoolId)
  );

  const myRequests = schoolRequests.filter(r => r.schoolId === currentSchoolId);
  const myPerformances = performances.filter(p => p.schoolId === currentSchoolId);
  const myScores = scores.filter(s => myPerformances.some(p => p.id === s.performanceId));

  const renderActiveComponent = () => {
    switch (activeSection) {
      case 'available-competitions':
        return (
          <AvailableCompetitions
            competitions={availableComps}
            addSchoolRequest={addSchoolRequest}
            schoolRequests={myRequests}
            currentSchoolId={currentSchoolId}
            currentSchoolName={currentSchoolName}
          />
        );
      case 'my-requests':
        return (
          <MyRequests
            schoolRequests={myRequests}
            competitions={competitions}
            deleteSchoolRequest={deleteSchoolRequest}
            updateSchoolRequestStatus={updateSchoolRequestStatus}
          />
        );
      case 'my-performances':
        return (
          <MyPerformances
            performances={myPerformances}
            scores={myScores}
            competitions={competitions}
            updatePerformance={updatePerformance}
            deletePerformance={deletePerformance}
            simulateScore={simulateScore}
          />
        );
      case 'school-statistics':
        return (
          <SchoolStatistics
            competitions={competitions}
            schoolRequests={myRequests}
            performances={myPerformances}
            scores={myScores}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 text-white min-h-[calc(100vh-80px)]">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-gray-800 p-6 shadow-xl flex flex-col justify-between min-h-[calc(100vh-80px)]">
        <div>
          <h2 className="text-3xl font-bold text-teal-400 mb-8 text-center lg:text-left">School Panel</h2>
          <nav>
            <ul>
              {[
                { id: 'available-competitions', icon: 'fas fa-search', label: 'Available Competitions' },
                { id: 'my-requests', icon: 'fas fa-clipboard-list', label: 'My Competition Requests' },
                { id: 'my-performances', icon: 'fas fa-theater-masks', label: 'My Performances' },
                { id: 'school-statistics', icon: 'fas fa-chart-pie', label: 'School Statistics' },
              ].map(section => (
                <li key={section.id} className="mb-4">
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-teal-600 text-white shadow-md'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <i className={`${section.icon} text-lg`}></i>
                    <span className="text-lg">{section.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Buttons */}
        <div className="space-y-4 mt-10">
          <button
            onClick={() => navigate('/')}
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition duration-200"
          >
            ← Back to Home
          </button>
          <button
            onClick={logout}
            className="w-full px-4 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-4xl font-extrabold text-gray-50 mb-6">
          Welcome, <span className="text-teal-400">{user?.username || 'School'}</span>!
        </h1>
        {renderActiveComponent()}
      </main>
    </div>
  );
};

export default SchoolDashboard;
