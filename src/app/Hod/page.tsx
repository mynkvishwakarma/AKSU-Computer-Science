"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

export default function HOD() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="bg-[#daebf2] py-16 px-6 lg:px-20 mt-28 min-h-screen"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="bg-white text-black p-8 rounded-lg shadow-lg flex items-center gap-6 border-l-4 border-blue-500"
      >
        <Image src="/faculty/HOD_WAOO_SIR.png" alt="Prof. Akhilesh A. Waoo" width={120} height={120} className="rounded-full border-4 border-blue-500" />
        <div>
          <h1 className="text-3xl font-bold text-blue-700">Prof. Akhilesh A. Waoo</h1>
          <p className="text-lg">Associate Dean and Professor</p>
          <p>Faculty of Computer Application & IT and Sciences</p>
          <p>AKS University, SATNA, MP, India</p>
          <p className="italic text-blue-500">akhileshwaoo@gmail.com</p>
        </div>
      </motion.div>

      {/* Qualifications Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="bg-white p-6 mt-6 rounded-lg shadow-md border-l-4 border-blue-500"
      >
        <h2 className="text-xl font-semibold text-blue-700">Qualifications</h2>
        <p className="mt-2">Dr. Akhilesh A. Waoo has been involved in academics and research for 23 years. Besides a doctorate and M. Tech. (CSE), he holds UGC-NET, RHCSA, Microsoft Azure, and NPTEL certifications.</p>
      </motion.div>

      {/* Coordinator Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="bg-white p-6 mt-6 rounded-lg shadow-md border-l-4 border-blue-500"
      >
        <h2 className="text-xl font-semibold text-blue-700">Coordinator</h2>
        <p className="mt-2">He is a coordinator for IIT-Bombay, IIT-Delhi’s Virtual Lab, IBM, Microsoft, Red Hat, Google, ISRO, and SWAYAM/MOOC. Prof. Akhilesh A. Waoo is an IQAC member, NAAC at AKS University, SATNA. His academic experience was greatly enhanced by hosting and organizing many national and international events, workshops, and seminars.</p>
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="bg-white p-6 mt-6 rounded-lg shadow-md border-l-4 border-blue-500"
      >
        <h2 className="text-xl font-semibold text-blue-700">Achievements</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>Best Research Supervisor Award</li>
          <li>Best Faculty Award</li>
          <li>Best Research Paper Award</li>
        </ul>
      </motion.div>

      {/* Research & Contributions Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="bg-white p-6 mt-6 rounded-lg shadow-md border-l-4 border-blue-500"
      >
        <h2 className="text-xl font-semibold text-blue-700">Research and Academic Contributions</h2>
        <p className="mt-2">Prof. Akhilesh A. Waoo is associated with various professional organizations such as Easy Chair, CSI-Secretary, IAENG, IBM, ISRO, Microsoft, and IFERP. He has published over 170 research papers with 400+ citations in international journals.</p>
        <p className="mt-2">In addition to eight Ph.D. students (3 Ph.D. guided), he has supervised numerous dissertations at the UG and PG levels and has edited 15+ books and authored 13 patents.</p>
      </motion.div>
    </motion.div>
          <Footer/>
    </>
  );
}
