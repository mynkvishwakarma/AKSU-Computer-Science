'use client';
import React from 'react'
import { useEffect, useState } from 'react';
function ourPrograms() {
      const [inView, setInView] = useState(false);
  return (
    <>
    <section
        id="programs"
        className={`py-20 relative overflow-hidden transition-all duration-700 ease-in-out transform ${
          inView ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-[#DAEBF2] p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Undergraduate</h3>
              <p className="text-[#94BDCF]">
                A comprehensive curriculum designed to build a strong foundation in computer science.
              </p>
            </div>
            <div className="bg-[#DAEBF2] p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Graduate</h3>
              <p className="text-[#94BDCF]">
                Advanced studies to develop expertise in cutting-edge research and technology.
              </p>
            </div>
            <div className="bg-[#DAEBF2] p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Doctoral</h3>
              <p className="text-[#94BDCF]">
                Join a community of scholars pushing the boundaries of technology and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ourPrograms