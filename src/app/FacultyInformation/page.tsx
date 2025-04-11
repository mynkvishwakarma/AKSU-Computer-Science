'use client';
import React, { useState } from 'react';
import AddFaculty from '../addFaculty/page';
import FacultyList from '../manageFaculty/page';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


export default function FacultyManagement() {
  const [showForm, setShowForm] = useState(false);
    const { status } = useSession();
    const router = useRouter();

    if (status !== 'authenticated') {
      router.push('/');
    }
    
  return (
    <>
    <div className="min-h-screen p-6 bg-[#daebf2]">
      {/* Button to toggle Add Faculty form */}
      <div className="flex justify-start mb-6 mt-32">
        <motion.button
          onClick={() => setShowForm(!showForm)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600  text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          {showForm ? 'Hide Add Faculty' : 'Add Faculty'}
        </motion.button>
      </div>

      {/* Conditional rendering of AddFaculty form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <AddFaculty />
        </motion.div>
      )}

      {/* Faculty List Table */}
      <FacultyList />

    </div>
          <Footer/>
    </>
  );
}
