"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function VisionMissionPage() {
  return (
    <motion.div
      className="bg-[#daebf2] text-gray-900 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <header className="relative w-full h-[400px] md:h-[500px] flex flex-col items-center justify-center text-center px-6 bg-blue-500 shadow-lg rounded-b-3xl mt-16 md:mt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/AKS_University_logo.png"
            alt="University Logo"
            width={120}
            height={120}
            className="mb-6 drop-shadow-lg"
          />
        </motion.div>
        <motion.h1
          className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Vision & Mission
        </motion.h1>
        <p className="text-white text-lg mt-4 max-w-3xl px-4">
          Inspiring excellence and innovation for a brighter future in education and research.
        </p>
      </header>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {[ 
          {
            title: "Our Vision",
            text: "To be a globally recognized premier research university committed to fostering innovation, collaboration, and sustainable solutions for societal challenges.",
            icon: "🌍",
            bg: "bg-blue-100",
          },
          {
            title: "University Mission",
            text: [
              "Promote multidisciplinary sustainable research across all faculties.",
              "Encourage innovation, patents, incubation centers, and startups.",
              "Implement outcome-based curricula for a student-centric learning environment.",
              "Develop collaborations with national and international institutions.",
              "Emphasize lifelong learning, value-based education, and sustainability.",
              "Foster academic-industry collaboration and research-driven entrepreneurship.",
            ],
            icon: "🎓",
            bg: "bg-indigo-100",
          },
          {
            title: "Department Vision",
            text: "To promote excellence in education, research, and software innovation while fostering a cooperative, safe, and continually improving learning environment.",
            icon: "💡",
            bg: "bg-green-100",
          },
          {
            title: "Department Mission",
            text: [
              "Achieve academic excellence through an innovative teaching-learning process.",
              "Develop sustainable, high-quality software technology solutions.",
              "Instill technical competence and discipline for industry and higher education.",
              "Establish research groups focused on software complexity and optimization.",
            ],
            icon: "🚀",
            bg: "bg-yellow-100",
          },
        ].map((section, index) => (
          <motion.section
            key={index}
            className={`rounded-xl p-8 md:p-10 shadow-md hover:shadow-lg transition duration-500 flex flex-col items-center text-justify ${section.bg}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 + index * 0.1 }}
          >
            <span className="text-4xl sm:text-5xl md:text-6xl">{section.icon}</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4 text-center">{section.title}</h2>
            {Array.isArray(section.text) ? (
              <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed text-gray-800 mt-4">
                {section.text.map((item, i) => (
                  <motion.li key={i} whileHover={{ scale: 1.05, color: "#1d4ed8" }}>
                    {item}
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="text-lg leading-relaxed text-gray-800 mt-4">{section.text}</p>
            )}
          </motion.section>
        ))}
      </main>

      {/* Footer Section */}
      <Footer />
    </motion.div>
  );
}
