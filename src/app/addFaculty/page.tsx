'use client';
import Image from "next/image";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AddFaculty() {
  const [form, setForm] = useState({ name: '', email: '', employeeId: '', department: '', designation: '' });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    setError('');

    try {
      const res = await fetch('/api/addFaculty', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus('Faculty Added Successfully!');
        setForm({ name: '', email: '', employeeId: '', department: '', designation: '' });
        setTimeout(() => setStatus(''), 2000);
      } else {
        setError(result.error || 'An unexpected error occurred.');
        setTimeout(() => setError(''), 2000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setError('An error occurred. Please try again later.');
      setTimeout(() => setError(''), 2000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="min-h-screen  text-[#2C2C2C] "
    >
      <div className="min-h-screen flex items-center justify-center py-10 sm:px-6 lg:px-8 text-[#2C2C2C] ">
        <div className="max-w-2xl w-full space-y-8 bg-white p-10 rounded-xl shadow-xl mt-24 text-[#2C2C2C] ">
          <h2 className="text-center text-3xl font-bold flex items-center justify-center gap-3">
            <Image 
              src="/AKS_University_logo.png"
              alt="Add Faculty Logo"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            />
            Add Faculty Member
          </h2>
          <p className="text-center mt-2">Fill in the details to add a new faculty member to the system.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <input 
              type="text" 
              name="name" 
              placeholder="Faculty Name" 
              value={form.name} 
              onChange={handleChange} 
              required 
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Faculty Email" 
              value={form.email} 
              onChange={handleChange} 
              required 
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input 
              type="text" 
              name="employeeId" 
              placeholder="Employee ID" 
              value={form.employeeId} 
              onChange={handleChange} 
              required 
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input 
              type="text" 
              name="department" 
              placeholder="Department" 
              value={form.department} 
              onChange={handleChange} 
              required 
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input 
              type="text" 
              name="designation" 
              placeholder="Designation" 
              value={form.designation} 
              onChange={handleChange} 
              required 
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Add Faculty
            </button>
          </form>

          {status && (
            <div className="mt-4 text-center text-green-600">{status}</div>
          )}

          {error && (
            <div className="mt-4 text-center text-red-600">{error}</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
