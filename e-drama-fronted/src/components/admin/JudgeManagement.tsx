
import React, { useState } from 'react';


interface Competition {
  id: string;
  name: string;
}

interface Judge {
  id: string;
  name: string;
  email: string;
  password?: string; 
  assignedCompetitions: string[]; 
}

interface JudgeManagementProps {
  judges: Judge[];
  competitions: Competition[]; 
  addJudge: (newJudge: Omit<Judge, 'id'>) => void;
  updateJudge: (id: string, updatedFields: Partial<Judge>) => void;
  deleteJudge: (id: string) => void;
}

const JudgeManagement: React.FC<JudgeManagementProps> = ({
  judges,
  competitions,
  addJudge,
  updateJudge,
  deleteJudge,
}) => {

  const [form, setForm] = useState({ name: '', email: '', password: '', assignedCompetitions: [] as string[] });
  const [editingId, setEditingId] = useState<string | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Handler for competition multi-select dropdown
  const handleCompetitionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    setForm(prev => ({ ...prev, assignedCompetitions: selectedOptions }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || (!editingId && !form.password)) { // Password required only for new judges
      alert('Please fill in judge Name, Email, and Password (for new judges).');
      return;
    }

    const judgeData: Omit<Judge, 'id'> = { // Ensure this matches the Omit type for addJudge
      name: form.name,
      email: form.email,
      assignedCompetitions: form.assignedCompetitions,

      ...(editingId ? {} : { password: form.password }), 
    };

    if (editingId) {
      updateJudge(editingId, judgeData);
      setEditingId(null);
    } else {
      addJudge(judgeData);
    }

    // Clear the form
    setForm({ name: '', email: '', password: '', assignedCompetitions: [] });
  };

  
  const handleEdit = (judge: Judge) => {
    setForm({
      name: judge.name,
      email: judge.email,
      password: '', 
      assignedCompetitions: judge.assignedCompetitions,
    });
    setEditingId(judge.id);
  };

  // delete a judge
  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this judge?')) {
      deleteJudge(id);
    }
  };

  //get competition name from ID
  const getCompetitionName = (competitionId: string) => {
    return competitions.find(comp => comp.id === competitionId)?.name || 'N/A';
  };

  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-green-300 mb-6">Judge Management</h2>

      {/* Judge Creation/Edit Form */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-inner mb-8">
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">{editingId ? 'Edit Judge' : 'Add New Judge'}</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Judge Name */}
          <div>
            <label htmlFor="judgeName" className="block text-gray-300 text-sm font-medium mb-1">Judge Name</label>
            <input
              type="text"
              id="judgeName"
              name="name"
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g., John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="judgeEmail" className="block text-gray-300 text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="judgeEmail"
              name="email"
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={form.email}
              onChange={handleChange}
              placeholder="e.g., john.doe@example.com"
            />
          </div>

        
          {!editingId && (
            <div>
              <label htmlFor="judgePassword" className="block text-gray-300 text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                id="judgePassword"
                name="password"
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={form.password}
                onChange={handleChange}
                placeholder="Set initial password"
              />
            </div>
          )}

          {editingId && <div className="md:col-span-1"></div>}


        
          <div className="md:col-span-2">
            <label htmlFor="assignedCompetitions" className="block text-gray-300 text-sm font-medium mb-1">Assign Competitions</label>
            <select
              multiple
              id="assignedCompetitions"
              name="assignedCompetitions"
              value={form.assignedCompetitions}
              onChange={handleCompetitionChange}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
            >
              {competitions.length === 0 ? (
                <option value="" disabled>No competitions available</option>
              ) : (
                competitions.map(comp => (
                  <option key={comp.id} value={comp.id}>{comp.name}</option>
                ))
              )}
            </select>
            <p className="text-gray-400 text-xs mt-1">Hold Ctrl/Cmd to select multiple competitions.</p>
          </div>

          {/* Submit/Cancel Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-4">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200 shadow-md"
            >
              {editingId ? 'Update Judge' : 'Add Judge'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setForm({ name: '', email: '', password: '', assignedCompetitions: [] }); // Clear form including password
                }}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200 shadow-md"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>

      {/* List of Judges */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-inner">
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">All Judges ({judges.length})</h3>
        {judges.length === 0 ? (
          <p className="text-gray-400">No judges added yet. Use the form above to add one.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-gray-600">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Name</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Email</th>
                 
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Assigned Competitions</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {judges.map((judge) => (
                  <tr key={judge.id} className="hover:bg-gray-650">
                    <td className="py-3 px-4 whitespace-nowrap text-gray-200">{judge.name}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-gray-200">{judge.email}</td>
                    <td className="py-3 px-4 text-gray-200">
                      {judge.assignedCompetitions.length > 0 ? (
                        judge.assignedCompetitions.map(comp_id => (
                          <span key={comp_id} className="inline-block bg-indigo-500 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                            {getCompetitionName(comp_id)}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-400">None</span>
                      )}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button onClick={() => handleEdit(judge)} className="text-blue-400 hover:text-blue-300">Edit</button>
                        <button onClick={() => handleDelete(judge.id)} className="text-red-400 hover:text-red-300">Delete</button>
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

export default JudgeManagement;