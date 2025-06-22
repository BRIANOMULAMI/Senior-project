// // src/pages/dashboards/AdminDashboard.tsx
// import React, { useState } from 'react';
// import { useAuth } from '../../context/ AuthContext';

// // Import the new sub-components for admin tasks
// import CompetitionManagement from '../../components/admin/CompetitionManagement';
// import JudgeManagement from '../../components/admin/JudgeManagement';
// import StatisticsAnalytics from '../../components/admin/StatisticsAnalytics';
// import SchoolRequests from '../../components/admin/SchoolRequests';

// // Define types for your data structures
// interface Competition {
//   id: string;
//   name: string;
//   location: string;
//   time: string; // Could be Date object in real app
//   maxSchools: number;
// }

// interface Judge {
//   id: string;
//   name: string;
//   email: string;
//   password?: string; // ADDED: Optional password field for creation
//   assignedCompetitions: string[]; // Array of competition IDs
// }

// interface SchoolRequest {
//   id: string;
//   schoolName: string;
//   competitionId: string;
//   status: 'pending' | 'approved' | 'denied';
// }

// const AdminDashboard: React.FC = () => {
//   const { user } = useAuth();
//   const [activeSection, setActiveSection] = useState<string>('competitions');

//   // In-memory state for data
//   const [competitions, setCompetitions] = useState<Competition[]>([]);
//   const [judges, setJudges] = useState<Judge[]>([]);
//   const [schoolRequests, setSchoolRequests] = useState<SchoolRequest[]>([]);

//   // --- Competition Management Functions ---
//   const addCompetition = (newCompData: Omit<Competition, 'id'>) => {
//     const newCompetition: Competition = {
//       id: `comp-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
//       ...newCompData,
//     };
//     setCompetitions(prevCompetitions => [...prevCompetitions, newCompetition]);
//     console.log('Competitions after adding:', [...competitions, newCompetition]);
//   };
//   const updateCompetition = (id: string, updatedFields: Partial<Competition>) => {
//     setCompetitions(prev =>
//       prev.map(comp => (comp.id === id ? { ...comp, ...updatedFields } : comp))
//     );
//     console.log(`Updated competition ${id}:`, updatedFields);
//   };
//   const deleteCompetition = (id: string) => {
//     setCompetitions(prev => prev.filter(comp => comp.id !== id));
//     console.log(`Deleted competition ${id}`);
//     setJudges(prev => prev.map(judge => ({
//       ...judge,
//       assignedCompetitions: judge.assignedCompetitions.filter(comp_id => comp_id !== id)
//     })));
//     setSchoolRequests(prev => prev.filter(req => req.competitionId !== id));
//   };

//   // --- Judge Management Functions ---
//   // MODIFIED: Omit 'id' and 'password' as password is set by admin and not part of the initial data judge brings
//   const addJudge = (newJudgeData: Omit<Judge, 'id'>) => {
//     const newJudge: Judge = {
//       id: `judge-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
//       // Ensure password is included when adding
//       password: newJudgeData.password,
//       ...newJudgeData,
//     };
//     setJudges(prevJudges => [...prevJudges, newJudge]);
//     console.log('Judges after adding:', [...judges, newJudge]);
//   };
//   const updateJudge = (id: string, updatedFields: Partial<Judge>) => {
//     setJudges(prev =>
//       prev.map(judge => (judge.id === id ? { ...judge, ...updatedFields } : judge))
//     );
//     console.log(`Updated judge ${id}:`, updatedFields);
//   };
//   const deleteJudge = (id: string) => {
//     setJudges(prev => prev.filter(judge => judge.id !== id));
//     console.log(`Deleted judge ${id}`);
//   };

//   // --- School Request Management Functions ---
//   const addSchoolRequest = (newRequestData: Omit<SchoolRequest, 'id' | 'status'>) => {
//     const newRequest: SchoolRequest = {
//       id: `req-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
//       status: 'pending',
//       ...newRequestData,
//     };
//     setSchoolRequests(prevRequests => [...prevRequests, newRequest]);
//     console.log('Requests after adding:', [...schoolRequests, newRequest]);
//   };
//   const updateSchoolRequestStatus = (id: string, status: 'approved' | 'denied') => {
//     setSchoolRequests(prev =>
//       prev.map(req => (req.id === id ? { ...req, status } : req))
//     );
//     console.log(`Updated request ${id} status to ${status}`);
//   };
//   const deleteSchoolRequest = (id: string) => {
//     setSchoolRequests(prev => prev.filter(req => req.id !== id));
//     console.log(`Deleted request ${id}`);
//   };


//   const renderActiveComponent = () => {
//     switch (activeSection) {
//       case 'competitions':
//         return (
//           <CompetitionManagement
//             competitions={competitions}
//             addCompetition={addCompetition}
//             updateCompetition={updateCompetition}
//             deleteCompetition={deleteCompetition}
//           />
//         );
//       case 'judges':
//         return (
//           <JudgeManagement
//             judges={judges}
//             competitions={competitions}
//             addJudge={addJudge}
//             updateJudge={updateJudge}
//             deleteJudge={deleteJudge}
//           />
//         );
//       case 'statistics':
//         return (
//           <StatisticsAnalytics
//             competitions={competitions}
//             judges={judges}
//             schoolRequests={schoolRequests}
//           />
//         );
//       case 'requests':
//         return (
//           <SchoolRequests
//             schoolRequests={schoolRequests}
//             competitions={competitions}
//             updateSchoolRequestStatus={updateSchoolRequestStatus}
//             deleteSchoolRequest={deleteSchoolRequest}
//             addSchoolRequest={addSchoolRequest}
//           />
//         );
//       default:
//         return (
//           <CompetitionManagement
//             competitions={competitions}
//             addCompetition={addCompetition}
//             updateCompetition={updateCompetition}
//             deleteCompetition={deleteCompetition}
//           />
//         );
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row bg-gray-900 text-white min-h-[calc(100vh - 80px - 80px)]">

//       {/* Sidebar Navigation */}
//       <aside className="w-full lg:w-64 bg-gray-800 p-6 shadow-xl lg:flex-shrink-0">
//         <h2 className="text-3xl font-bold text-indigo-400 mb-8 text-center lg:text-left">Admin Panel</h2>
//         <nav>
//           <ul>
//             <li className="mb-4">
//               <button
//                 onClick={() => setActiveSection('competitions')}
//                 className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3
//                             ${activeSection === 'competitions' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
//               >
//                 <i className="fas fa-trophy text-lg"></i>
//                 <span className="text-lg">Competition Management</span>
//               </button>
//             </li>
//             <li className="mb-4">
//               <button
//                 onClick={() => setActiveSection('judges')}
//                 className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3
//                             ${activeSection === 'judges' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
//               >
//                 <i className="fas fa-gavel text-lg"></i>
//                 <span className="text-lg">Judge Management</span>
//               </button>
//             </li>
//             <li className="mb-4">
//               <button
//                 onClick={() => setActiveSection('statistics')}
//                 className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3
//                             ${activeSection === 'statistics' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
//               >
//                 <i className="fas fa-chart-line text-lg"></i>
//                 <span className="text-lg">Statistics & Analytics</span>
//               </button>
//             </li>
//             <li className="mb-4">
//               <button
//                 onClick={() => setActiveSection('requests')}
//                 className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3
//                             ${activeSection === 'requests' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
//               >
//                 <i className="fas fa-clipboard-list text-lg"></i>
//                 <span className="text-lg">School Requests</span>
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content Area */}
//       <main className="flex-1 p-8 overflow-y-auto">
//         <h1 className="text-4xl font-extrabold text-gray-50 mb-6">
//           Welcome, <span className="text-indigo-400">{user?.username || 'Admin'}</span>!
//         </h1>
//         {renderActiveComponent()}
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;


// src/pages/dashboards/AdminDashboard.tsx
import React, { useState } from 'react';
import { useAuth } from '../../context/ AuthContext';

// Import the new sub-components for admin tasks
import CompetitionManagement from '../../components/admin/CompetitionManagement';
import JudgeManagement from '../../components/admin/JudgeManagement';
import StatisticsAnalytics from '../../components/admin/StatisticsAnalytics';
import SchoolRequests from '../../components/admin/SchoolRequests';

// Define types for your data structures
interface Competition {
  id: string;
  name: string;
  location: string;
  time: string; // Could be Date object in real app
  maxSchools: number;
  status: 'Upcoming' | 'Active' | 'Completed'; // ADDED: Status field
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

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState<string>('competitions');

  // In-memory state for data
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [judges, setJudges] = useState<Judge[]>([]);
  const [schoolRequests, setSchoolRequests] = useState<SchoolRequest[]>([]);

  // --- Competition Management Functions ---
  const addCompetition = (newCompData: Omit<Competition, 'id'>) => {
    const newCompetition: Competition = {
      id: `comp-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      ...newCompData,
    };
    setCompetitions(prevCompetitions => [...prevCompetitions, newCompetition]);
    console.log('Competitions after adding:', [...competitions, newCompetition]);
  };
  const updateCompetition = (id: string, updatedFields: Partial<Competition>) => {
    setCompetitions(prev =>
      prev.map(comp => (comp.id === id ? { ...comp, ...updatedFields } : comp))
    );
    console.log(`Updated competition ${id}:`, updatedFields);
  };
  const deleteCompetition = (id: string) => {
    setCompetitions(prev => prev.filter(comp => comp.id !== id));
    console.log(`Deleted competition ${id}`);
    setJudges(prev => prev.map(judge => ({
      ...judge,
      assignedCompetitions: judge.assignedCompetitions.filter(comp_id => comp_id !== id)
    })));
    setSchoolRequests(prev => prev.filter(req => req.competitionId !== id));
  };

  // --- Judge Management Functions ---
  const addJudge = (newJudgeData: Omit<Judge, 'id'>) => {
    const newJudge: Judge = {
      id: `judge-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      password: newJudgeData.password,
      ...newJudgeData,
    };
    setJudges(prevJudges => [...prevJudges, newJudge]);
    console.log('Judges after adding:', [...judges, newJudge]);
  };
  const updateJudge = (id: string, updatedFields: Partial<Judge>) => {
    setJudges(prev =>
      prev.map(judge => (judge.id === id ? { ...judge, ...updatedFields } : judge))
    );
    console.log(`Updated judge ${id}:`, updatedFields);
  };
  const deleteJudge = (id: string) => {
    setJudges(prev => prev.filter(judge => judge.id !== id));
    console.log(`Deleted judge ${id}`);
  };

  // --- School Request Management Functions ---
  const addSchoolRequest = (newRequestData: Omit<SchoolRequest, 'id' | 'status'>) => {
    const newRequest: SchoolRequest = {
      id: `req-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      status: 'pending',
      ...newRequestData,
    };
    setSchoolRequests(prevRequests => [...prevRequests, newRequest]);
    console.log('Requests after adding:', [...schoolRequests, newRequest]);
  };
  const updateSchoolRequestStatus = (id: string, status: 'approved' | 'denied') => {
    setSchoolRequests(prev =>
      prev.map(req => (req.id === id ? { ...req, status } : req))
    );
    console.log(`Updated request ${id} status to ${status}`);
  };
  const deleteSchoolRequest = (id: string) => {
    setSchoolRequests(prev => prev.filter(req => req.id !== id));
    console.log(`Deleted request ${id}`);
  };


  const renderActiveComponent = () => {
    switch (activeSection) {
      case 'competitions':
        return (
          <CompetitionManagement
            competitions={competitions}
            addCompetition={addCompetition}
            updateCompetition={updateCompetition}
            deleteCompetition={deleteCompetition}
          />
        );
      case 'judges':
        return (
          <JudgeManagement
            judges={judges}
            competitions={competitions}
            addJudge={addJudge}
            updateJudge={updateJudge}
            deleteJudge={deleteJudge}
          />
        );
      case 'statistics':
        return (
          <StatisticsAnalytics
            competitions={competitions}
            judges={judges}
            schoolRequests={schoolRequests}
          />
        );
      case 'requests':
        return (
          <SchoolRequests
            schoolRequests={schoolRequests}
            competitions={competitions}
            updateSchoolRequestStatus={updateSchoolRequestStatus}
            deleteSchoolRequest={deleteSchoolRequest}
            addSchoolRequest={addSchoolRequest}
          />
        );
      default:
        return (
          <CompetitionManagement
            competitions={competitions}
            addCompetition={addCompetition}
            updateCompetition={updateCompetition}
            deleteCompetition={deleteCompetition}
          />
        );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 text-white min-h-[calc(100vh - 80px - 80px)]">

      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 bg-gray-800 p-6 shadow-xl lg:flex-shrink-0">
        <h2 className="text-3xl font-bold text-indigo-400 mb-8 text-center lg:text-left">Admin Panel</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <button
                onClick={() => setActiveSection('competitions')}
                className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3
                            ${activeSection === 'competitions' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                <i className="fas fa-trophy text-lg"></i>
                <span className="text-lg">Competition Management</span>
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => setActiveSection('judges')}
                className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3
                            ${activeSection === 'judges' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                <i className="fas fa-gavel text-lg"></i>
                <span className="text-lg">Judge Management</span>
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => setActiveSection('statistics')}
                className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3
                            ${activeSection === 'statistics' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                <i className="fas fa-chart-line text-lg"></i>
                <span className="text-lg">Statistics & Analytics</span>
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => setActiveSection('requests')}
                className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 flex items-center gap-3
                            ${activeSection === 'requests' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                <i className="fas fa-clipboard-list text-lg"></i>
                <span className="text-lg">School Requests</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-4xl font-extrabold text-gray-50 mb-6">
          Welcome, <span className="text-indigo-400">{user?.username || 'Admin'}</span>!
        </h1>
        {renderActiveComponent()}
      </main>
    </div>
  );
};

export default AdminDashboard;