'use client';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';

export default function FacultyList() {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('All');

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await fetch('/api/addFaculty', { cache: 'no-store' });
        const data = await res.json();
        if (res.ok) {
          setFaculty(data);
        } else {
          setError(data.error || 'Failed to fetch faculty data');
        }
      } catch (err) {
        setError('An error occurred. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, []);

  // Get unique designations for the dropdown menu
  const designations = ['All', ...new Set(faculty.map((member) => member.designation))];

  // Filter faculty based on the selected designation
  const filteredFaculty =
    selectedDesignation === 'All'
      ? faculty
      : faculty.filter((member) => member.designation === selectedDesignation);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Faculty Members</h2>
        {/* Dropdown for selecting designation */}
        <select
          value={selectedDesignation}
          onChange={(e) => setSelectedDesignation(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-blue-400"
        >
          {designations.map((designation) => (
            <option key={designation} value={designation}>
              {designation}
            </option>
          ))}
        </select>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      
      {!loading && !error && filteredFaculty.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Employee ID</th>
                <th className="py-3 px-6 text-left">Department</th>
                <th className="py-3 px-6 text-left">Designation</th>
              </tr>
            </thead>
            <tbody>
              {filteredFaculty.map((member) => (
                <tr key={member.id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6">{member.name}</td>
                  <td className="py-3 px-6">{member.email}</td>
                  <td className="py-3 px-6">{member.employeeId}</td>
                  <td className="py-3 px-6">{member.department}</td>
                  <td className="py-3 px-6">{member.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <p className="text-center text-gray-500">No faculty found for this designation.</p>
      )}
    </div>
  );
}
