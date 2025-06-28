import React, { useState } from 'react';


interface Competition {
  id: string;
  name: string;
  location: string;
  time: string;
  maxSchools: number;
  status: 'Upcoming' | 'Active' | 'Completed'; 
  
}

interface CompetitionManagementProps {
  competitions: Competition[];
  addCompetition: (newComp: Omit<Competition, 'id'>) => void;
  updateCompetition: (id: string, updatedFields: Partial<Competition>) => void;
  deleteCompetition: (id: string) => void;
}

const CompetitionManagement: React.FC<CompetitionManagementProps> = ({
  competitions,
  addCompetition,
  updateCompetition,
  deleteCompetition,
}) => {

  const [form, setForm] = useState({ name: '', location: '', time: '', maxSchools: '', status: 'Upcoming' as Competition['status'] });
  const [editingId, setEditingId] = useState<string | null>(null);

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.location || !form.time || !form.maxSchools || !form.status) {
      alert('Please fill in all fields.');
      return;
    }

    const newCompetitionData = {
      name: form.name,
      location: form.location,
      time: form.time,
      maxSchools: parseInt(form.maxSchools),
      status: form.status, // Include status
    };

    if (editingId) {
      updateCompetition(editingId, newCompetitionData);
      setEditingId(null);
    } else {
      addCompetition(newCompetitionData);
    }
    // Clear form and reset status to default
    setForm({ name: '', location: '', time: '', maxSchools: '', status: 'Upcoming' });
  };

  const handleEdit = (comp: Competition) => {
    setForm({
      name: comp.name,
      location: comp.location,
      time: comp.time,
      maxSchools: comp.maxSchools.toString(),
      status: comp.status,
    });
    setEditingId(comp.id);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this competition?')) {
      deleteCompetition(id);
    }
  };

 
  const getStatusColor = (status: Competition['status']) => {
    switch (status) {
      case 'Upcoming': return 'bg-indigo-500';
      case 'Active': return 'bg-green-500';
      case 'Completed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };


  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-indigo-300 mb-6">Competition Management</h2>

      {/* Competition Creation/Edit Form */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-inner mb-8">
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">{editingId ? 'Edit Competition' : 'Create New Competition'}</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Competition Name */}
          <div>
            <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-1">Competition Name</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., Annual Drama Fest" />
          </div>

      
          <div>
            <label htmlFor="location" className="block text-gray-300 text-sm font-medium mb-1">Location</label>
            <input type="text" id="location" name="location" value={form.location} onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., City Auditorium" />
          </div>

       
          <div>
            <label htmlFor="time" className="block text-gray-300 text-sm font-medium mb-1">Date/Time</label>
            <input type="text" id="time" name="time" value={form.time} onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., 2025-12-01 10:00 AM" />
          </div>

      
          <div>
            <label htmlFor="maxSchools" className="block text-gray-300 text-sm font-medium mb-1">Max Schools</label>
            <input type="number" id="maxSchools" name="maxSchools" value={form.maxSchools} onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., 20" min="1" />
          </div>

          {/* Status Select Field */}
          <div>
            <label htmlFor="status" className="block text-gray-300 text-sm font-medium mb-1">Status</label>
            <select
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Upcoming">Upcoming</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
            </select>
          </div>


          <div className="md:col-span-1"></div>

          {/* Submit/Cancel Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-4">
            <button type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200 shadow-md">
              {editingId ? 'Update Competition' : 'Add Competition'}
            </button>
            {editingId && (
              <button type="button" onClick={() => { setEditingId(null); setForm({ name: '', location: '', time: '', maxSchools: '', status: 'Upcoming' }); }}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200 shadow-md">
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>

      {/* List of Competitions */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-inner">
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">All Competitions ({competitions.length})</h3>
        {competitions.length === 0 ? (
          <p className="text-gray-400">No competitions created yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-gray-600">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Name</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Location</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Time</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Max Schools</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Status</th> {/* ADDED */}
                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {competitions.map((comp) => (
                  <tr key={comp.id} className="hover:bg-gray-650">
                    <td className="py-3 px-4 whitespace-nowrap text-gray-200">{comp.name}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-gray-200">{comp.location}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-gray-200">{comp.time}</td>
                    <td className="py-3 px-4 whitespace-nowrap text-gray-200">{comp.maxSchools}</td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(comp.status)} text-white`}>
                        {comp.status}
                      </span>
                    </td> {/* ADDED */}
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button onClick={() => handleEdit(comp)} className="text-blue-400 hover:text-blue-300">Edit</button>
                        <button onClick={() => handleDelete(comp.id)} className="text-red-400 hover:text-red-300">Delete</button>
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

export default CompetitionManagement;