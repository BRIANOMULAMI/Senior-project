import React, { useState } from 'react';
import { useAuth } from '../../context/ AuthContext';

import CompetitionManagement from '../../components/admin/CompetitionManagement';
import JudgeManagement from '../../components/admin/JudgeManagement';
import StatisticsAnalytics from '../../components/admin/StatisticsAnalytics';
import SchoolRequests from '../../components/admin/SchoolRequests';

interface Competition {
  id: string;
  name: string;
  location: string;
  time: string;
  maxSchools: number;
  status: 'Upcoming' | 'Active' | 'Completed';
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
  const { user, logout } = useAuth();
  const [activeSection, setActiveSection] = useState<string>('competitions');

  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [judges, setJudges] = useState<Judge[]>([]);
  const [schoolRequests, setSchoolRequests] = useState<SchoolRequest[]>([]);

  const addCompetition = (newCompData: Omit<Competition, 'id'>) => {
    const newCompetition: Competition = {
      id: `comp-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      ...newCompData,
    };
    setCompetitions(prev => [...prev, newCompetition]);
  };

  const updateCompetition = (id: string, updatedFields: Partial<Competition>) => {
    setCompetitions(prev => prev.map(c => c.id === id ? { ...c, ...updatedFields } : c));
  };

  const deleteCompetition = (id: string) => {
    setCompetitions(prev => prev.filter(c => c.id !== id));
    setJudges(prev => prev.map(j => ({
      ...j,
      assignedCompetitions: j.assignedCompetitions.filter(cid => cid !== id)
    })));
    setSchoolRequests(prev => prev.filter(r => r.competitionId !== id));
  };

  const addJudge = (newJudgeData: Omit<Judge, 'id'>) => {
    const newJudge: Judge = {
      id: `judge-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      password: newJudgeData.password,
      ...newJudgeData,
    };
    setJudges(prev => [...prev, newJudge]);
  };

  const updateJudge = (id: string, updatedFields: Partial<Judge>) => {
    setJudges(prev => prev.map(j => j.id === id ? { ...j, ...updatedFields } : j));
  };

  const deleteJudge = (id: string) => {
    setJudges(prev => prev.filter(j => j.id !== id));
  };

  const addSchoolRequest = (newRequestData: Omit<SchoolRequest, 'id' | 'status'>) => {
    const newRequest: SchoolRequest = {
      id: `req-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      status: 'pending',
      ...newRequestData,
    };
    setSchoolRequests(prev => [...prev, newRequest]);
  };

  const updateSchoolRequestStatus = (id: string, status: 'approved' | 'denied') => {
    setSchoolRequests(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  const deleteSchoolRequest = (id: string) => {
    setSchoolRequests(prev => prev.filter(r => r.id !== id));
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
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 text-white min-h-screen">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-gray-800 p-6 shadow-xl flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-indigo-400 mb-8 text-center lg:text-left">Admin Panel</h2>
          <nav>
            <ul>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection('competitions')}
                  className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 ${
                    activeSection === 'competitions'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <i className="fas fa-trophy text-lg"></i>
                  <span className="text-lg">Competition Management</span>
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection('judges')}
                  className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 ${
                    activeSection === 'judges'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <i className="fas fa-gavel text-lg"></i>
                  <span className="text-lg">Judge Management</span>
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection('statistics')}
                  className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 ${
                    activeSection === 'statistics'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <i className="fas fa-chart-line text-lg"></i>
                  <span className="text-lg">Statistics & Analytics</span>
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection('requests')}
                  className={`w-full text-left px-4 py-3 rounded-md flex items-center gap-3 ${
                    activeSection === 'requests'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <i className="fas fa-clipboard-list text-lg"></i>
                  <span className="text-lg">School Requests</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* ✅ Bottom Buttons */}
        <div className="mt-10 flex flex-col gap-3">
          <button
            onClick={() => (window.location.href = '/')}
            className="w-full text-left px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            ⬅️ Back to Home
          </button>
          <button
            onClick={logout}
            className="w-full text-left px-4 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
          >
            🔒 Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
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
