'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Link from 'next/link';

const coordinators = [
  { name: 'Dr. Pinki Sharma', role: 'CR1', img: '/faculty/Pinki.png' },
  { name: 'Dr. Pramod Singh', role: 'CR7', img: '/faculty/pramod_sir.png' },
  { name: 'Mr. Shankar Bera', role: 'CR2', img: '/faculty/Sankar.png' },
  { name: 'Ms. Pragya Shrivastava', role: 'CR4', img: '/faculty/Pragya.png' },
  { name: 'Dr. Virendra Tiwari', role: 'CR5', img: '/faculty/Virendra.png' },
  { name: 'Mr. Vinay Dwivedi', role: 'CR3', img: '/faculty/Vinay.png' },
  { name: 'Dr. Chandra Shekhar Gautam', role: 'CR6', img: '/faculty/Chandra sekhar.png' },
];

const labFaculty = [
  { name: 'Mr. Arunendra Soni', designation: 'Lab Instructor', img: '/faculty/Arunendra.png' },
  { name: 'Mr. Vinod Kumar Tripathi', designation: 'Lab Assistant', img: '/faculty/Vinod.png' },
  { name: 'Mr. Pramod Mishra', designation: 'Lab Assistant', img: '/faculty/Pramod Mishra.png' },
  { name: 'Mr. Uday Prakash Mishra', designation: 'Lab Assistant', img: '/faculty/Uday.png' },
  { name: 'Ms. Madhvi Soni', designation: 'Lab Assistant', img: '/faculty/Madhvi.png' },
  { name: 'Ms. Ekta Anchal Patel', designation: 'Lab Assistant', img: '/faculty/Ekta.png' },
  { name: 'Ms. Smita Gupta', designation: 'Lab Assistant', img: '/faculty/Smita.png' },
];

const facultyData = [
  {
    category: 'Associate & Assistant Professors',
    color: 'bg-green-200',
    members: [
      { name: 'Dr. Pramod Singh', designation: 'Associate Professor', experience: '15 years', img: '/faculty/Pramod_sir.png', intro: 'Passionate about teaching and advanced research.' },
      { name: 'Dr. Virendra Tiwari', designation: 'Assistant Professor', experience: '12 years', img: '/faculty/Virendra.png', intro: 'Focusing on AI and ML breakthroughs.' },
      { name: 'Dr. Pinki Sharma', designation: 'Assistant Professor', experience: '2 years', img: '/faculty/Pinki.png', intro: 'Dedicated to mentoring and student growth.' },
      { name: 'Dr. Chandra Sekhar Shukla', designation: 'Assistant Professor', experience: '6 years', img: '/faculty/Chandra Sekhar.png', intro: 'Dedicated to mentoring and student growth.' },
      { name: 'Dr. Shwan Payasi', designation: 'Assistant Professor', experience: '2 years', img: '/faculty/Shwan.png', intro: 'Dedicated to mentoring and student growth.' },
      { name: 'Ms. Prgya Shrivastav', designation: 'Assistant Professor', experience: '6 years', img: '/faculty/Pragya.png', intro: 'Dedicated to mentoring and student growth.' },
      { name: 'Mr. Sankar Bera', designation: 'Assistant Professor', experience: '10 years', img: '/faculty/Sankar.png', intro: 'Dedicated to mentoring and student growth.' },    
      { name: 'Mr. Vinay Dwivedi', designation: 'Assistant Professor', experience: '8 years', img: '/faculty/Vinay.png', intro: 'Dedicated to mentoring and student growth.' },
      { name: 'Mr. Anurag Tiwari', designation: 'Assistant Professor', experience: '6 years', img: '/faculty/Anurag Tiwari.png', intro: 'Enthusiastic about coding and software engineering.' },
      { name: 'Ms. Shruti Gupta', designation: 'Assistant Professor', experience: '3 years', img: '/faculty/Shurti.png', intro: 'Dedicated to mentoring and student growth.' },
      { name: 'Mr. Puspendra Bhatt', designation: 'Assistant Professor', experience: '1 years', img: '/faculty/Puspendra.png', intro: 'Dedicated to mentoring and student growth.' },
      { name: 'Mr. Rajneesh Shriwastav', designation: 'Assistant Professor', experience: '1 years', img: '/faculty/Rajneesh Sir.png', intro: 'Dedicated to mentoring and student growth.' },


    ],
  },
  {
    category: 'Lab Administrator',
    color: 'bg-yellow-200 ',
    members: [ 
      { name: 'Mr. Ashish Kushwaha', designation: 'Network & Hardware Engineer/Lab  Administrator', experience: '10+ years', img: '/faculty/Aasish Kushwaha.png', intro: 'Expert in network and hardware.' },
      { name: 'Mr. Uttam Singh', designation: 'Lab  Administrator', experience: '5 years', img: '/faculty/Uttam.png', intro: 'Expert in practical applications and hands-on training.' },
    ],
  },
  {
    category: 'Lab Faculty',
    color: ' bg-purple-200 ',
    members: [
      { name: 'Mr. Arunendra Soni', designation: 'Lab Instructor', experience: '8 years', img: '/faculty/Arunendra.png', intro: 'Expert in practical applications and hands-on training.' },
      { name: 'Mr. Pramod Mishra', designation: 'Lab Assistant', experience: '8 years', img: '/faculty/Pramod Mishra.png', intro: 'Committed to supporting technical education.' },
      { name: 'Mr. Vinod Kumar Tripathi', designation: 'Lab Assistant', experience: '3 years', img: '/faculty/Vinod.png', intro: 'Committed to supporting technical education.' },
      { name: 'Mr. Uday Prakash Mishra', designation: 'Lab Assistant', experience: '3 years', img: '/faculty/Uday.png', intro: 'Committed to supporting technical education.' },
      { name: 'Ms. Madhvi Soni', designation: 'Lab Assistant', experience: '2 years', img: '/faculty/Madhvi.png', intro: 'Committed to supporting technical education.' },
      { name: 'Ms. Ekta Anchal Patel', designation: 'Lab Assistant', experience: '2 years', img: '/faculty/Ekta.png', intro: 'Committed to supporting technical education.' },
      { name: 'Ms. Smita Gupta', designation: 'Lab Assistant', experience: '1 years', img: '/faculty/Smita.png', intro: 'Committed to supporting technical education.' },
      { name: 'Mr. Mayank Vishwakarma', designation: 'Lab Assistant', experience: '1 years', img: '/faculty/Mayank.png', intro: 'Committed to supporting technical education.' },
      { name: 'Ms. Aashu Tiwari', designation: 'Lab Assistant', experience: '1 years', img: '/faculty/Aashu.png', intro: 'Committed to supporting technical education.' },
      { name: 'Ms. Himanshi Kushwaha', designation: 'Lab Assistant', experience: '6 Months', img: '/faculty/Himanshi.png', intro: 'Committed to supporting technical education.' },
    ],
  },
];

export default function About() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [scrollPosition, setScrollPosition] = useState(0); // Track the scroll position

  let lastScrollY = 0;

  const handleReadMore = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scroll direction (up/down)
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }

      setScrollPosition(currentScrollY); // Update scroll position
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div       initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }} className="min-h-screen bg-gray-100 text-gray-900">
      <div className="min-h-screen bg-[#daebf2] text-white pt-28">
        <section id="about" className="py-20 bg-white text-[#2C2C2C] ">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-16 mt-5 ">
              About Department of Computer Science
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-12">
              {/* Profile Section */}
              <div className="w-full lg:w-1/3">
                <Image
                  src="/founder.png" // Add path for image here
                  alt="Department Image"
                  className={`rounded-full shadow-xl mx-auto mb-6 transition-all duration-500 ease-in-out transform ${scrollDirection === 'down' ? 'scale-95' : 'scale-105'} ${scrollPosition > 100 ? 'blur-sm' : ''}`}
                  width={200}
                  height={200}
                />
                <h3 className="text-2xl font-semibold text-[#2C2C2C] ">
                  {/* Add Name of Founder */}
                </h3>
                <p className="text-gray-600">Founders & Educators</p>
              </div>

              {/* About Us Text Section */}
              <div className="w-full lg:w-2/3 space-y-6">
                <div className="bg-gradient-to-r from-indigo-100 to-teal-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <p className="text-lg text-gray-800">
                    Welcome to the Department of Computer Science, where innovation meets technology in the dynamic fields of Artificial Intelligence (AI) and Machine Learning (ML). Our department is at the forefront of cutting-edge research and education...
                  </p>
                  <button
                    className="mt-4 text-white bg-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300 ease-in-out"
                    onClick={handleReadMore}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Modal for Full Content */}
        {modalVisible && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: isVisible ? 1 : 0 }} 
            transition={{ duration: 1 }}
          >
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 animate-opacityIn">
              <div className="bg-white text-[#2C2C2C]  rounded-lg shadow-xl max-w-lg w-full p-6 relative animate-fadeIn mt-32">
                <h2 className="text-2xl font-bold mb-4">Department of Computer Science - Artificial Intelligence & Machine Learning</h2>
                <p className="text-[#2C2C2C] ">
                 Welcome to the Department of Computer Science, where innovation meets technology in the dynamic fields of Artificial Intelligence (AI) and Machine Learning (ML). Our department is at the forefront of cutting-edge research and education, offering a rigorous curriculum designed to shape the next generation of leaders in AI and ML.

                  Our program blends traditional computer science principles with advanced techniques in AI and ML, empowering students to solve complex real-world problems. From data analytics and neural networks to robotics and autonomous systems, we provide a comprehensive education in the technologies transforming industries worldwide.

                  Through hands-on learning, collaborative research projects, and industry partnerships, our students gain the practical skills needed to excel in AI and ML applications. With an emphasis on innovation, ethical considerations, and future trends, we ensure our graduates are equipped with the knowledge and expertise to drive technological advancement and make a meaningful impact across sectors including healthcare, finance, and beyond.
                </p>
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300 ease-in-out"
                >
                  ✕
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="min-h-screen bg-gray-100 text-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[#2C2C2C] mb-12 text-center">Department Criteria Coordinators</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Teaching Faculty */}
          <div>
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-6 text-center">Teaching Faculty</h3>
            <div className="space-y-6">
              {coordinators.map((coordinator, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-4 rounded-lg shadow-lg flex items-center"
                >
                  <Image src={coordinator.img} alt={coordinator.name} className="rounded-full" width={80} height={80} />
                  <div className="ml-4 text-left">
                    <h4 className="text-xl font-semibold">{coordinator.name}</h4>
                    <p className="text-gray-600">{coordinator.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Lab Faculty */}
          <div>
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-6 text-center">Lab Faculty</h3>
            <div className="space-y-6">
              {labFaculty.map((faculty, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-4 rounded-lg shadow-lg flex items-center"
                >
                  <Image src={faculty.img} alt={faculty.name} className="rounded-full" width={80} height={80} />
                  <div className="ml-4 text-left">
                    <h4 className="text-xl font-semibold">{faculty.name}</h4>
                    <p className="text-gray-600">{faculty.designation}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="min-h-screen bg-gray-100 text-gray-900">
        <section id="about" className="py-10">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <hr className="w-full mx-auto mt-8 border-t-4 border-indigo-400 shadow-lg shadow-indigo-300 hover:scale-110 transition-transform duration-300" />

            <h2 className="text-4xl font-extrabold text-[#2C2C2C]  mb-10 mt-10">Meet Our Faculty</h2>

            {/* Dean and HoD Section */}
          <div className="flex flex-col items-center justify-center space-y-8 py-10">
            {[
              {
                name: 'Dr. G.K. Pradhan',
                designation: 'Dean',
                experience: '20+ years',
                img: '/pradhanji.jpg',
                intro: 'Leading the department with excellence in research and education.',
                bgColor: 'bg-red-200',
                link: '/dean'
              },
              {
                name: 'Prof. (Dr.) Akhilesh A. Waoo',
                designation: 'Head of Department',
                experience: '24+ years',
                img: '/HOD_WAOO_SIR.png',
                intro: 'Dedicated to academic leadership and innovation.',
                bgColor: 'bg-blue-200',
                link: '/Hod'
              }
            ].map((person, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`w-full max-w-7xl h-60 flex flex-col md:flex-row items-center ${person.bgColor} p-6 rounded-lg shadow-lg`}
              >
                <Image
                  src={person.img}
                  alt={person.name}
                  className="rounded-lg shadow-md"
                  width={150}
                  height={150}
                />

                <div className="ml-6 text-center md:text-left">
                  <Link href={person.link}>
                    <h3 className="text-2xl font-semibold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors">
                      {person.name}
                    </h3>
                  </Link>

                  <p className="text-gray-700 font-medium">{person.designation}</p>
                  <p className="text-gray-600">Experience: {person.experience}</p>
                  <p className="text-gray-500 italic">{person.intro}</p>
                </div>
              </motion.div>
            ))}
          </div>


            <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                >
                {facultyData.map((category, index) => (
                  <div key={index} className="mb-12">
                    <h3 className={`text-2xl font-semibold mb-4 px-4 py-2 rounded-lg ${category.color} text-gray-800 text-center`}>{category.category}</h3>
                    <div className={`grid gap-6 ${category.category === 'Associate Professors' ? 'flex justify-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                      {category.members.map((member, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, y: 20 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          transition={{ duration: 0.5, delay: idx * 0.2 }}
                          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all transform hover:scale-105"
                        >
                          <Image
                            src={member.img}
                            alt={member.name}
                            className="rounded-xl mx-auto mb-4 "
                            width={100}
                            height={100}
                          />
                          <h4 className="text-xl font-semibold text-gray-900">{member.name}</h4>
                          <p className="text-gray-700">{member.designation}</p>
                          <p className="text-gray-600">Experience: {member.experience}</p>
                          <p className="text-gray-500 italic">{member.intro}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}

            </motion.div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </motion.div>
  );
}
