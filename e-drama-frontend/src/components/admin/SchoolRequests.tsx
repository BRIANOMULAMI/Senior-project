
import React from 'react';

// Define types
interface Competition {
  id: string;
  name: string;
}

interface SchoolRequest {
  id: string;
  schoolName: string;
  competitionId: string;
  status: 'pending' | 'approved' | 'denied';
}

interface SchoolRequestsProps {
  schoolRequests: SchoolRequest[];
  competitions: Competition[]; 
  updateSchoolRequestStatus: (id: string, status: 'approved' | 'denied') => void;
  deleteSchoolRequest: (id: string) => void;
  addSchoolRequest: (newRequest: Omit<SchoolRequest, 'id' | 'status'>) => void; 
}

const SchoolRequests: React.FC<SchoolRequestsProps> = ({
  schoolRequests,
  competitions,
  updateSchoolRequestStatus,
  deleteSchoolRequest,
  addSchoolRequest, 
}) => {
  const getCompetitionName = (id: string) => {
    return competitions.find(comp => comp.id === id)?.name || 'Unknown Competition';
  };

  const getStatusColor = (status: 'pending' | 'approved' | 'denied') => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'approved': return 'bg-green-500';
      case 'denied': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-yellow-300 mb-6">School Requests</h2>

 
      <div className="mb-6">
        <button
          onClick={() => {
          
            const randomComp = competitions[Math.floor(Math.random() * competitions.length)];
            const targetCompetitionId = randomComp ? randomComp.id : 'comp-default-for-request';
            const dummySchoolName = `School Alpha-${Math.floor(Math.random() * 1000)}`;

 
            if (competitions.length === 0) {
              alert("Please create at least one competition in 'Competition Management' first for better request simulation.");
            }

          
            addSchoolRequest({
              schoolName: dummySchoolName,
              competitionId: targetCompetitionId,
            });
            console.log(`Simulated new request from ${dummySchoolName} for competition ID: ${targetCompetitionId}`);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
        >
          Simulate New School Request
        </button>
      </div>

      {/* List of School Requests */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-inner">
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">All School Requests ({schoolRequests.length})</h3>
        {schoolRequests.length === 0 ? (
          <p className="text-gray-400">No school requests received yet. Click "Simulate New School Request" to add one.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-gray-600">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">School Name</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Competition</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Status</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {schoolRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-gray-650">
                    <td className="py-3 px-4 whitespace-nowrap text-gray-200">{req.schoolName}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-gray-200">{getCompetitionName(req.competitionId)}</td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(req.status)} text-white`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        {req.status === 'pending' && (
                          <>
                            <button onClick={() => updateSchoolRequestStatus(req.id, 'approved')} className="text-green-400 hover:text-green-300">Approve</button>
                            <button onClick={() => updateSchoolRequestStatus(req.id, 'denied')} className="text-red-400 hover:text-red-300">Deny</button>
                          </>
                        )}
                        <button onClick={() => deleteSchoolRequest(req.id)} className="text-gray-400 hover:text-gray-300">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolRequests;