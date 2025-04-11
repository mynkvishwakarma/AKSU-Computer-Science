"use client";
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const FDPData = [
  {
    title: "One-Week FDP on Capacity Development for Assessment and Accreditation",
    date: "3-7 July 2023",
    organization: "IQAC - AKS University in association with VIGNAN University"
  },
  {
    title: "One-Week FDP on Virtual Labs",
    date: "03-07 Aug 2021",
    organization: "Department of CSE AKS University, SATNA"
  },
  {
    title: "One-Week FDP on Emerging Threats and Trends against Digital Defenses",
    date: "17-22 June 2023",
    organization: "Department of CSE AKS University, SATNA"
  }
];

export default function FDPSection() {
  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
  >
    <div className="py-10 px-6 bg-[#daebf2] mt-32">
      <h2 className="text-4xl font-extrabold text-blue-900  mb-8 text-center">
        Faculty Development Programs (FDP)
      </h2>
      <div className="space-y-6">
        {FDPData.map((fdp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 rounded-lg bg-white shadow-lg border-l-4 border-blue-500"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {fdp.title}
            </h3>
            <p className="text-gray-700 font-medium">{fdp.date}</p>
            <p className="text-gray-600 italic">{fdp.organization}</p>
          </motion.div>
        ))}
      </div>
    </div>
    <Footer/>
    </motion.div>
  );
}
