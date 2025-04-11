'use client';
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categoryLogos = {
    "Computer Science and Engineering": "/cse.png",
    "Computer Science and Application": "/computer-application-logo.png",
  };

  const courses = {
    "Computer Science and Engineering": [
      {
        id: 1,
        title: "BTech CSE",
        description: "Learn core computer science concepts, programming, and system design.",
        fullDescription: "BTech in Computer Science Engineering at AKS University offers in-depth knowledge in programming, software development, and networking, preparing students for advanced roles in the IT industry.",
        image: "/courses/btech_cse.jpg",
      },
      {
        id: 2,
        title: "BTech CSE AI/DS",
        description: "Master artificial intelligence and data science with industry-oriented curriculum.",
        fullDescription: "The BTech in Artificial Intelligence and Data Science at AKS University focuses on AI, machine learning, and data analytics, preparing students for advanced careers in technology and innovation.",
        image: "/courses/btech-ai-ds.jpg",
      },
      {
        id: 3,
        title: "BTech CSE AI/ML with IBM",
        description: "Master artificial intelligence with IBM industry-oriented curriculum.",
        fullDescription: "The BTech in Artificial Intelligence at AKS University focuses on AI, machine learning, preparing students for advanced careers in technology and innovation.",
        image: "/courses/btech-aids-ibm.jpg",
      },
      {
        id: 4,
        title: "BTech CSE Cyber",
        description: "Explore cybersecurity principles, ethical hacking, and digital forensics.",
        fullDescription: "The BTech in Cyber Security at AKS University focuses on safeguarding digital systems, teaching students critical skills in network security, cryptography, and threat management for a secure digital future.",
        image: "/courses/btech-cyber.jpg",
      },
      {
        id: 5,
        title: "MTech CSE",
        description: "MTech (Master of Technology) is a postgraduate engineering degree focusing on specialization and research.",
        fullDescription: "MTech is a postgraduate engineering degree offered by AKS University, providing specialized knowledge, research opportunities, and practical skills in various engineering fields, preparing graduates for advanced technical roles.",
        image: "/courses/MTech.jpg",
      },
      {
      id: 6,
      title: "PhD CSE",
      description: "The PhD in CSE at AKS University fosters research in advanced technologies like AI and machine learning.",
      fullDescription: "The PhD in Computer Science Engineering at AKS University provides advanced research opportunities in areas like AI, machine learning, and software development, fostering innovation and expertise.",
      image: "/courses/phdcse.jpg",
      }
    ],
    "Computer Science and Application": [
      {
        id: 7,
        title: "BCA Hons.",
        description: "Get hands-on experience in software development, databases, and networking.",
        fullDescription: "BCA in Computer Science 4 year dgree program at AKS University provides foundational knowledge in programming, algorithms, and software development, preparing students for careers in the dynamic tech industry.",
        image: "/courses/bca.jpg",
      },
      {
        id: 8,
        title: "BCA Hons. AI/ML with IBM",
        description: "Gain hands-on experience in AI, Machine Learning, software development, and data analytics with BCA Hons. AI/ML in collaboration with IBM.",
        fullDescription: "The BCA Hons. AI/ML 4 year dgree program with IBM offers in-depth knowledge and hands-on experience in Artificial Intelligence, Machine Learning, software development, data analytics, and cloud computing, preparing students for cutting-edge careers in the tech industry.",
        image: "/courses/bcaaiml.jpg",
      },
      {
        id: 9,
        title: "BSc. IT Hons.",
        description: "Focus on information technology, web development, and cloud computing.",
        fullDescription: "BSc in Information Technology 4 year dgree program at AKS University offers a strong foundation in IT concepts, programming, and networking, preparing students for diverse roles in the technology sector.",
        image: "/courses/bsc-it.png",
      },
      {
        id: 10,
        title: "MCA",
        description: "Advance your career with expertise in programming, analytics, and enterprise applications.",
        fullDescription: "MCA at AKS University offers advanced knowledge in computer applications, software development, and IT management, equipping students for leadership roles in the evolving tech industry.",
        image: "/courses/mca.jpg",
      },
      {
      id: 11,
      title: "PhD CS",
      description: "The Ph.D. program in Computer Science at AKS University fosters advanced research in AI, Machine Learning, and emerging technologies.",
      fullDescription: "The Department of Computer Science at AKS University offers a research-driven Ph.D. program, fostering innovation in AI, Machine Learning, and emerging technologies to advance academic and industrial excellence.",
      image: "/courses/phdcse.jpg",
      }
    ],
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="min-h-screen bg-[#DAEBF2] text-white"
    >
      {/* Modal for Expanded Course Details */}
      {selectedCourse && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-[#DAEBF2] bg-opacity-50 z-50"
        >
          <div className="bg-white text-gray-900 rounded-lg shadow-xl max-w-lg w-full p-6 relative">
            <h2 className="text-2xl font-bold mb-4">{selectedCourse.title}</h2>
            <Image
              src={selectedCourse.image}
              alt={selectedCourse.title}
              width={500}
              height={250}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700">{selectedCourse.fullDescription}</p>
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}

      {/* Header */}
      <div className="py-12 text-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4 mt-20">Our Courses</h1>
        <p className="text-gray-700 text-lg">
          Discover courses designed to help you succeed academically and beyond.
        </p>
      </div>

      {/* Course Categories */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
      {Object.entries(courses).map(([category, courseList]) => (
        <motion.div 
          key={category}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold mb-6 border-b-2 pb-2 text-[#3A4F7A] flex items-center gap-3">
            <Image 
              src={categoryLogos[category]}  // Dynamically fetch the logo
              alt={`${category} Logo`}
              width={40} 
              height={40}
              className="w-10 h-10 object-contain"
            />
            {category}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseList.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                {/* Course Image */}
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
      </div>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}
