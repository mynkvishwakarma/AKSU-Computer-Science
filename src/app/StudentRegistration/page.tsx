 'use client';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function StudentRegistration() {
  const { status } = useSession();
  const router = useRouter();

  // If the user is not authenticated, redirect to the home page
  if (status !== 'authenticated') {
    router.push('/');
  }

  // Form state
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // To handle loading state
  const [serverError, setServerError] = useState(''); // To handle server errors

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form
    const errors = {};
    if (!studentName) errors.name = 'Name is required';
    if (!studentEmail) errors.email = 'Email is required';
    if (!studentPhone) errors.phone = 'Phone number is required';
    if (!selectedCourse) errors.course = 'Please select a course';
  
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
  
    setIsSubmitting(true);
    setServerError(''); // Reset server error message
  
    try {
      // Send form data to the backend (API)
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: studentName,
          email: studentEmail,
          phone: studentPhone,
          course: selectedCourse,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Student Registered:', data);
        // Optionally clear the form fields or show a success message
        setStudentName('');
        setStudentEmail('');
        setStudentPhone('');
        setSelectedCourse('');
        setFormErrors({});
      } else {
        console.error('Error:', data.error);
        setServerError(data.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
      setServerError('Failed to connect to the server');
    } finally {
      setIsSubmitting(false); // Reset the submitting state
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center mb-6 mt-32">Student Registration</h1>

      {serverError && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          <p>{serverError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter full name"
          />
          {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter email address"
          />
          {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
        </div>

        {/* Phone Field */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            value={studentPhone}
            onChange={(e) => setStudentPhone(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter phone number"
          />
          {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
        </div>

        {/* Course Selection */}
        <div className="mb-4">
          <label htmlFor="course" className="block text-sm font-medium text-gray-700">
            Select Course
          </label>
          <select
            id="course"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select a course</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
          </select>
          {formErrors.course && <p className="text-red-500 text-xs mt-1">{formErrors.course}</p>}
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600'} text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Register Student'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentRegistration;
