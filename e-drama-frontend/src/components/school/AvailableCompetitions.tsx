// src/components/school/AvailableCompetitions.tsx
import React from 'react';
// No Firebase-specific imports

// Define types (Local to SchoolDashboard's components)
interface Competition {
  id: string;
  name: string;
  location: string;
  time: string;
  maxSchools: number;
  status: 'Upcoming' | 'Active' | 'Completed';
}

interface SchoolRequest { // Needed to check if already applied
  id: string;
  schoolId: string;
  schoolName: string;
  competitionId: string;
  status: 'pending' | 'approved' | 'denied';
  timestamp: string;
}

interface AvailableCompetitionsProps {
  competitions: Competition[]; // Passed from SchoolDashboard
  addSchoolRequest: (newRequest: Omit<SchoolRequest, 'id' | 'status' | 'timestamp'>) => void; // Passed from SchoolDashboard
  schoolRequests: SchoolRequest[]; // Passed from SchoolDashboard to filter already applied
  currentSchoolId: string; // Passed from SchoolDashboard (user.username)
  currentSchoolName: string; // Passed from SchoolDashboard (user.username)
}

const AvailableCompetitions: React.FC<AvailableCompetitionsProps> = ({
  competitions,
  addSchoolRequest,
  schoolRequests,
  currentSchoolId,
  currentSchoolName,
}) => {

  // Filter competitions to show only 'Upcoming' or 'Active' ones that the school hasn't already applied to
  const availableCompetitions = competitions.filter(comp =>
    (comp.status === 'Upcoming' || comp.status === 'Active') &&
    !schoolRequests.some(req => req.competitionId === comp.id && req.schoolId === currentSchoolId)
  );

  const handleApply = (competitionId: string, competitionName: string) => {
    if (!currentSchoolId || !currentSchoolName) {
      alert("Error: School ID or Name not found. Cannot submit application. Please ensure you are logged in.");
      return;
    }

    if (window.confirm(`Are you sure you want to apply to "${competitionName}"?`)) {
      addSchoolRequest({
        schoolId: currentSchoolId, // Using username as ID
        schoolName: currentSchoolName, // Using username as name
        competitionId: competitionId,
      });
      alert(`Application submitted for "${competitionName}". You can check its status in "My Requests".`);
    }
  };

  const getStatusColor = (status: 'Upcoming' | 'Active' | 'Completed') => {
    switch (status) {
      case 'Upcoming': return 'bg-indigo-500';
      case 'Active': return 'bg-green-500';
      case 'Completed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };


  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-teal-300 mb-6">Available Competitions</h2>
      <p className="text-gray-300 mb-4">
        Explore the competitions currently open for applications. Apply to participate in your school's next big drama event!
      </p>

      {availableCompetitions.length === 0 ? (
        <p className="text-gray-400">No available competitions to apply for at the moment, or you've already applied to all of them.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableCompetitions.map(comp => (
            <div key={comp.id} className="bg-gray-800 p-5 rounded-lg shadow-inner border border-gray-700 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-2xl font-semibold text-white mb-2">{comp.name}</h3>
              <p className="text-gray-300 mb-1">Location: {comp.location}</p>
              <p className="text-gray-300 mb-1">Date: {comp.time}</p>
              <p className="text-gray-300 mb-4">Max Schools: {comp.maxSchools}</p>
              <p className="text-gray-300 mb-4">Status:
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(comp.status)}`}>
                  {comp.status}
                </span>
              </p>
              <button
                onClick={() => handleApply(comp.id, comp.name)}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 shadow-md w-full"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailableCompetitions;