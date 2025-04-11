"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const leadsData = [
  {
    role: "Head",
    name: "Dr. Akhilesh A. Waoo",
    description:
      "Dr. Akhilesh A. Waoo, the Head of the Department of Computer Science Engineering at AKS University, serves as the mentor for the AKS Developer Student Club (ADSC). His insights help shape our activities and ensure they are impactful.",
    image: "/faculty/HOD_WAOO_SIR.png",
    link: "/Hod",
  },
  {
    role: "Mentor",
    name: "Anurag Garg Sir",
    description:
      "Anurag Garg, a dedicated faculty member at AKS University, provides guidance and practical experience to our ADSC members, helping them develop problem-solving skills.",
    image: "/images/anurag.png",
    link: "#",
  },
];

export default function ADSCPage() {
  return (
    <>
      <motion.div
        className="bg-[#daebf2] text-black min-h-screen p-6 md:p-10 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/ADSC.jpeg"
              alt="ADSC Logo"
              width={300}
              height={300}
              className="mx-auto mb-6 rounded-lg shadow-lg mt-24"
            />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4 mt-6">
            AKS Developer Student Club
          </h1>
          <p className="text-lg text-gray-700 mb-8 px-4 sm:px-6">
            Empowering students through hands-on technical knowledge, collaboration, and innovation.
          </p>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            { label: "Workshops & Events", link: "#" },
            { label: "Projects & Collaboration", link: "#" },
            { label: "Community & Networking", link: "#" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{item.label}</h3>
              <Link href={item.link} passHref>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="mt-4 bg-white text-blue-700 px-4 py-2 rounded-lg shadow-md hover:bg-blue-100 transition"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Leads Section */}
        <div className="mt-32">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">ADSC LEADS</h1>
          <div className="space-y-8">
            {leadsData.map((lead, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-2xl p-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image
                  src={lead.image}
                  alt={lead.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div className="ml-0 sm:ml-6 mt-4 sm:mt-0">
                  <h2 className="text-lg sm:text-xl font-semibold">{lead.role}</h2>
                  <Link href={lead.link}>
                    <h3 className="text-lg sm:text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
                      {lead.name}
                    </h3>
                  </Link>
                  <p className="text-gray-700 mt-2">{lead.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
