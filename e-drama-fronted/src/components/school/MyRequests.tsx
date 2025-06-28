// src/components/school/MyRequests.tsx
import React from 'react';
// No Firebase-specific imports


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

interface Performance { // Needed for addPerformance
  id: string;
  competitionId: string;
  schoolId: string;
  schoolName: string;
  performanceTitle: string;
}

interface MyRequestsProps {
  schoolRequests: SchoolRequest[]; // Passed from SchoolDashboard
  competitions: Competition[]; // Passed from SchoolDashboard to get names
  deleteSchoolRequest: (id: string) => void; // Passed from SchoolDashboard
  updateSchoolRequestStatus: (id: string, status: 'approved' | 'denied') => void; // Passed from SchoolDashboard
}

const MyRequests: React.FC<MyRequestsProps> = ({
  schoolRequests,
  competitions,
  deleteSchoolRequest,
  updateSchoolRequestStatus,
}) => {
  const getCompetitionName = (competitionId: string) => {
    return competitions.find(comp => comp.id === competitionId)?.name || 'Unknown Competition';
  };

  const getStatusColor = (status: 'pending' | 'approved' | 'denied') => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'approved': return 'bg-green-500';
      case 'denied': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const handleDeleteRequest = (requestId: string, competitionName: string) => {
    if (window.confirm(`Are you sure you want to withdraw your application for "${competitionName}"?`)) {
      deleteSchoolRequest(requestId);
      alert(`Application for "${competitionName}" withdrawn.`);
    }
  };

  // This function simulates an Admin action changing the request status.
  // In a real application, this status would be updated by the Admin dashboard
  // and fetched by the school dashboard, not directly simulated here by the school.
  const handleSimulateAdminAction = (requestId: string, newStatus: 'approved' | 'denied') => {
    const request = schoolRequests.find(req => req.id === requestId);
    if (request) {
      if (window.confirm(`Simulate Admin ${newStatus} for "${getCompetitionName(request.competitionId)}"?`)) {
        // Call the parent's update function to change the status
        updateSchoolRequestStatus(requestId, newStatus);
        alert(`Admin has simulated ${newStatus} your request for "${getCompetitionName(request.competitionId)}"!`);
      }
    }
  };


  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-pink-300 mb-6">My Competition Requests</h2>
      <p className="text-gray-300 mb-4">
        Track the status of your school's applications to various competitions.
        (Note: Status updates are simulated here, in a real app an Admin would change them)
      </p>

      {schoolRequests.length === 0 ? (
        <p className="text-gray-400">You have not submitted any competition requests yet. Go to "Available Competitions" to apply!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-600">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Competition Name</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Status</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Applied On</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {schoolRequests.map(req => (
                <tr key={req.id} className="hover:bg-gray-700">
                  <td className="py-3 px-4 whitespace-nowrap text-gray-200">{getCompetitionName(req.competitionId)}</td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(req.status)} text-white`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap text-gray-200">{new Date(req.timestamp).toLocaleDateString()}</td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    {/* Actions for School: Withdraw pending, or remove non-pending */}
                    {req.status === 'pending' && (
                      <button
                        onClick={() => handleDeleteRequest(req.id, getCompetitionName(req.competitionId))}
                        className="text-red-400 hover:text-red-300 text-sm"
                      >
                        Withdraw
                      </button>
                    )}
                    {/* Add a button to simulate Admin Approval/Denial for testing purposes */}
                    {req.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleSimulateAdminAction(req.id, 'approved')}
                          className="ml-2 text-green-400 hover:text-green-300 text-sm"
                        >
                          Simulate Approve
                        </button>
                        <button
                          onClick={() => handleSimulateAdminAction(req.id, 'denied')}
                          className="ml-2 text-red-400 hover:text-red-300 text-sm"
                        >
                          Simulate Deny
                        </button>
                      </>
                    )}
                    {req.status !== 'pending' && (
                       <button
                        onClick={() => handleDeleteRequest(req.id, getCompetitionName(req.competitionId))}
                        className="ml-2 text-gray-400 hover:text-gray-300 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyRequests;