// import React, { useState } from 'react';
// import { useAuth } from '../../context/ AuthContext';


// import AssignedCompetitions from '../../components/judge/AssignedCompetitions';
// import AwardMarksComments from '../../components/judge/AwardMarksComments';
// import JudgeStatistics from '../../components/judge/JudgeStatistics';

// interface JudgeAssignedCompetition {
//   id: string;
//   name: string;
//   date: string;
//   status: 'Upcoming' | 'Active' | 'Completed';
// }

// interface Performance {
//   id: string;
//   competitionId: string;
//   schoolName: string;
//   performanceTitle: string; 
// }

// interface Score {
//   id: string;
//   judgeUsername: string; 
//   performanceId: string;
//   competitionId: string;
//   marks: number;
//   comments: string;
//   timestamp: string;
// }

// const JudgeDashboard: React.FC = () => {
//   const { user } = useAuth(); // Get user information from AuthContext
//   const [activeSection, setActiveSection] = useState<string>('assigned-competitions');

//   // Simulate assigned competitions for this judge
//   const assignedCompetitions: JudgeAssignedCompetition[] = [
//     { id: 'jcomp-001', name: 'National Drama Finals 2025', date: '2025-08-15', status: 'Upcoming' },
//     { id: 'jcomp-002', name: 'Regional High School Play-offs', date: '2025-07-20', status: 'Active' },
//     { id: 'jcomp-003', name: 'Junior Theatre Showcase', date: '2025-06-01', status: 'Completed' },
//     { id: 'jcomp-004', name: 'Inter-County Drama Challenge', date: '2025-09-10', status: 'Upcoming' },
//   ];

//   const [performances] = useState<Performance[]>([
//     { id: 'perf-001', competitionId: 'jcomp-001', schoolName: 'Greenwood Academy', performanceTitle: 'A Midsummer Night\'s Dream (Act I)' },
//     { id: 'perf-002', competitionId: 'jcomp-001', schoolName: 'Riverside High', performanceTitle: 'The Importance of Being Earnest (Scene 2)' },
//     { id: 'perf-003', competitionId: 'jcomp-002', schoolName: 'City Arts College', performanceTitle: 'Hamlet (Soliloquy)' },
//     { id: 'perf-004', competitionId: 'jcomp-002', schoolName: 'Northridge School', performanceTitle: 'Our Town (Beginning Scene)' },
//   ]);

//   const [scores, setScores] = useState<Score[]>([]);

//   // Function to add a new score
//   const addScore = (performanceId: string, competitionId: string, marks: number, comments: string) => {
//     if (!user?.username) {
//       console.error("Judge username not found. Cannot submit score.");
//       alert("Error: Judge username not found. Please log in again.");
//       return;
//     }

//     const newScore: Score = {
//       id: `score-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
//       judgeUsername: user.username,
//       performanceId,
//       competitionId,
//       marks,
//       comments,
//       timestamp: new Date().toISOString(),
//     };

//     setScores(prevScores => [...prevScores, newScore]);
//     console.log('New Score Submitted:', newScore);
//     console.log('All Scores:', [...scores, newScore]); 
//     alert(`Score for performance ${performanceId} in competition ${competitionId} submitted!`);
//   };


//   // Function to render the active component
//   const renderActiveComponent = () => {
//     switch (activeSection) {
//       case 'assigned-competitions':
//         return <AssignedCompetitions competitions={assignedCompetitions} />;
//       case 'award-marks-comments':
//         return (
//           <AwardMarksComments
//             assignedCompetitions={assignedCompetitions}
//             performances={performances}
//             scores={scores.filter(s => s.judgeUsername === user?.username)} 
//             addScore={addScore}
//             currentJudgeUsername={user?.username || 'Unknown Judge'}
//           />
//         );
//       case 'judge-statistics':
//         return <JudgeStatistics
//           competitions={assignedCompetitions} 
//           scores={scores.filter(s => s.judgeUsername === user?.username)} 
//         />;
//       default:
//         return <AssignedCompetitions competitions={assignedCompetitions} />;
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row bg-gray-900 text-white min-h-[calc(100vh - 80px - 80px)]">

//       {/* Sidebar Navigation */}
//       <aside className="w-full lg:w-64 bg-gray-800 p-6 shadow-xl lg:flex-shrink-0">
//         <h2 className="text-3xl font-bold text-green-400 mb-8 text-center lg:text-left">Judge Panel</h2>
//         <nav>
//           <ul>
//             <li className="mb-4">
//               <button
//                 onClick={() => setActiveSection('assigned-competitions')}
//                 className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3
//                             ${activeSection === 'assigned-competitions' ? 'bg-green-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
//               >
//                 <i className="fas fa-trophy text-lg"></i>
//                 <span className="text-lg">Assigned Competitions</span>
//               </button>
//             </li>
//             <li className="mb-4">
//               <button
//                 onClick={() => setActiveSection('award-marks-comments')}
//                 className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3
//                             ${activeSection === 'award-marks-comments' ? 'bg-green-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
//               >
//                 <i className="fas fa-edit text-lg"></i>
//                 <span className="text-lg">Award Marks & Comments</span>
//               </button>
//             </li>
//             <li className="mb-4">
//               <button
//                 onClick={() => setActiveSection('judge-statistics')}
//                 className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3
//                             ${activeSection === 'judge-statistics' ? 'bg-green-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
//               >
//                 <i className="fas fa-chart-bar text-lg"></i>
//                 <span className="text-lg">Dashboard Statistics</span>
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       <main className="flex-1 p-8 overflow-y-auto">
//         <h1 className="text-4xl font-extrabold text-gray-50 mb-6">
//           Welcome, <span className="text-green-400">{user?.username || 'Judge'}</span>!
//         </h1>
//         {renderActiveComponent()}
//       </main>
//     </div>
//   );
// };

// export default JudgeDashboard;


import React, { useState } from 'react';
import { useAuth } from '../../context/ AuthContext';
import { useNavigate } from 'react-router-dom'; // 🔁 For "Back to Home"

import AssignedCompetitions from '../../components/judge/AssignedCompetitions';
import AwardMarksComments from '../../components/judge/AwardMarksComments';
import JudgeStatistics from '../../components/judge/JudgeStatistics';

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

const JudgeDashboard: React.FC = () => {
  const { user, logout } = useAuth(); // ✅ Include logout
  const navigate = useNavigate();     // ✅ For navigation
  const [activeSection, setActiveSection] = useState<string>('assigned-competitions');

  const assignedCompetitions: JudgeAssignedCompetition[] = [
    { id: 'jcomp-001', name: 'National Drama Finals 2025', date: '2025-08-15', status: 'Upcoming' },
    { id: 'jcomp-002', name: 'Regional High School Play-offs', date: '2025-07-20', status: 'Active' },
    { id: 'jcomp-003', name: 'Junior Theatre Showcase', date: '2025-06-01', status: 'Completed' },
    { id: 'jcomp-004', name: 'Inter-County Drama Challenge', date: '2025-09-10', status: 'Upcoming' },
  ];

  const [performances] = useState<Performance[]>([
    { id: 'perf-001', competitionId: 'jcomp-001', schoolName: 'Greenwood Academy', performanceTitle: 'A Midsummer Night\'s Dream (Act I)' },
    { id: 'perf-002', competitionId: 'jcomp-001', schoolName: 'Riverside High', performanceTitle: 'The Importance of Being Earnest (Scene 2)' },
    { id: 'perf-003', competitionId: 'jcomp-002', schoolName: 'City Arts College', performanceTitle: 'Hamlet (Soliloquy)' },
    { id: 'perf-004', competitionId: 'jcomp-002', schoolName: 'Northridge School', performanceTitle: 'Our Town (Beginning Scene)' },
  ]);

  const [scores, setScores] = useState<Score[]>([]);

  const addScore = (performanceId: string, competitionId: string, marks: number, comments: string) => {
    if (!user?.username) {
      alert("Error: Judge username not found. Please log in again.");
      return;
    }

    const newScore: Score = {
      id: `score-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      judgeUsername: user.username,
      performanceId,
      competitionId,
      marks,
      comments,
      timestamp: new Date().toISOString(),
    };

    setScores(prevScores => [...prevScores, newScore]);
    alert(`Score for performance ${performanceId} in competition ${competitionId} submitted!`);
  };

  const renderActiveComponent = () => {
    switch (activeSection) {
      case 'assigned-competitions':
        return <AssignedCompetitions competitions={assignedCompetitions} />;
      case 'award-marks-comments':
        return (
          <AwardMarksComments
            assignedCompetitions={assignedCompetitions}
            performances={performances}
            scores={scores.filter(s => s.judgeUsername === user?.username)} 
            addScore={addScore}
            currentJudgeUsername={user?.username || 'Unknown Judge'}
          />
        );
      case 'judge-statistics':
        return (
          <JudgeStatistics
            competitions={assignedCompetitions} 
            scores={scores.filter(s => s.judgeUsername === user?.username)} 
          />
        );
      default:
        return <AssignedCompetitions competitions={assignedCompetitions} />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 text-white min-h-[calc(100vh-80px)]">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 bg-gray-800 p-6 shadow-xl flex flex-col justify-between min-h-full">
        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center lg:text-left">Judge Panel</h2>
          <nav>
            <ul>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection('assigned-competitions')}
                  className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3 ${
                    activeSection === 'assigned-competitions' ? 'bg-green-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                >
                  <i className="fas fa-trophy text-lg"></i>
                  <span className="text-lg">Assigned Competitions</span>
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection('award-marks-comments')}
                  className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3 ${
                    activeSection === 'award-marks-comments' ? 'bg-green-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                >
                  <i className="fas fa-edit text-lg"></i>
                  <span className="text-lg">Award Marks & Comments</span>
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection('judge-statistics')}
                  className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3 ${
                    activeSection === 'judge-statistics' ? 'bg-green-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                >
                  <i className="fas fa-chart-bar text-lg"></i>
                  <span className="text-lg">Dashboard Statistics</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Controls */}
        <div className="mt-8 space-y-4">
          <button
            onClick={() => navigate('/')} // 🔁 Go to landing page
            className="w-full px-4 py-3 text-left bg-gray-700 text-white rounded-md hover:bg-gray-600"
          >
            ← Back to Home
          </button>
          <button
            onClick={logout}
            className="w-full px-4 py-3 text-left bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-4xl font-extrabold text-gray-50 mb-6">
          Welcome, <span className="text-green-400">{user?.username || 'Judge'}</span>!
        </h1>
        {renderActiveComponent()}
      </main>
    </div>
  );
};

export default JudgeDashboard;
