'use client';

import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const mousData = [
  {
    name: 'Certiport',
    description: 'Certiport is a leading provider of certification exams designed to validate essential digital skills and software proficiency for academic and career success.',
    logo: '/moulogo/certiport.png',
    signDate: 'July 25, 2022' ,
    additionalInfo: 'Certiport offers certifications in partnership with industry leaders like Microsoft, Adobe, and Autodesk, empowering students and professionals with recognized credentials to excel in the global workforce.',
  },
  {
    name: 'Infosys',
    description: 'Infosys is a global leader in technology services and consulting, empowering businesses with innovative solutions and digital transformation strategies.',
    logo: '/moulogo/infosys.png',
    signDate: 'July 25, 2022' ,
    additionalInfo: 'Infosys collaborates with educational institutions to provide industry-relevant training, skill development programs, and internship opportunities, preparing students for successful careers in the IT sector.',
  },
  {
    name: 'Google',
    description: 'Google Digital Campus: Advanced AI, Cloud Computing, and Digital Technologies training.',
    logo: '/moulogo/google.png',
    signDate: 'March 5, 2023',
    additionalInfo: 'This partnership enables students to access Google’s cutting-edge AI, cloud computing, and digital certifications.',
  },
  {
    name: 'Microsoft',
    description: 'Empowering students with cutting-edge tools, certifications, and software solutions.',
    logo: '/moulogo/microsoft.png',
    signDate: 'March 5, 2023',
    additionalInfo: 'Microsoft provides training on Azure, AI, and cybersecurity, along with student certifications and learning programs.',
  },
  {
    name: 'TCS',
    description: 'Industry-integrated programs and placement opportunities for holistic development.',
    logo: '/moulogo/tcs.png',
    signDate: 'March 5, 2023',
    additionalInfo: 'TCS collaborates with universities to provide industry-relevant training, internship opportunities, and career guidance.',
  },
  {
    name: 'Accenture',
    description: 'Specialized technical and non-technical training aligned with industry standards.',
    logo: '/moulogo/accenture.png',
    signDate: 'August 18, 2022' ,
    additionalInfo: 'Accenture provides specialized training in digital transformation, cloud solutions, and AI-driven business processes to bridge the gap between academia and industry.',
  },
  {
    name: 'RedHat',
    description: 'Expertise in open-source technologies and global certifications for enhanced employability.',
    logo: '/moulogo/redhat.png',
    signDate: 'May 30, 2021' ,
    additionalInfo: 'Through this collaboration, students gain hands-on experience with open-source technologies, Linux certifications, and enterprise-grade software solutions.',
  },
  {
    name: 'IBM',
    description: 'Empowering innovation through cutting-edge training and research with IBM University Collaboration.',
    logo: '/moulogo/ibm.png',
    signDate: 'September 14, 2023' ,
    additionalInfo: 'IBM’s partnership focuses on AI, quantum computing, and enterprise technology training, empowering students with real-world innovation skills.',
  },
  {
    name: 'CSC Council',
    description: 'Excellence in cybersecurity education and research through collaboration with the CSC Council USA.',
    logo: '/moulogo/csc.png',
    signDate: 'July 25, 2022' ,
    additionalInfo: 'CSC Council USA provides expertise in cybersecurity, ethical hacking, and information security to prepare students for global cybersecurity challenges.',
  },

];

const bookData = [
  { title: 'Operating System', author: 'Dr. Akhilesh A. Waoo', publishedDate: '2021', image: '/books/book1.jpg' },
  { title: 'Advance Computer Network', author: 'Dr. Akhilesh A. Waoo & Team', publishedDate: '2020', image: '/books/book2.jpg' },
  { title: 'Communication Network', author: 'Dr. Akhilesh A. Waoo & Team', publishedDate: '2023', image: '/books/book3.jpg' },
  { title: 'THEETAS 2022', author: 'Dr. Akhilesh A. Waoo & Team', publishedDate: '2019', image: '/books/book4.jpg' },
  { title: 'c#', author: 'Dr. Akhilesh A. Waoo & Team', publishedDate: '2022', image: '/books/book5.jpg' },
  { title: 'Data Science for Biginners', author: 'Dr. Akhilesh A. Waoo & Team', publishedDate: '2022', image: '/books/book6.jpg' },
  { title: 'Wireless Sensor Network a Network Perspective', author: 'Dr. Akhilesh A. Waoo & Team', publishedDate: '2022', image: '/books/book7.jpg' },
  { title: 'Challenges in Cyber Security', author: 'Dr. Akhilesh A. Waoo & Team', publishedDate: '2022', image: '/books/book8.jpg' },
  { title: 'Computer Intelligence & Its Application', author: 'Dr. Akhilesh A. Waoo & Team', publishedDate: '2022', image: '/books/book9.jpg' },
  { title: 'Advance Computer Science', author: 'Dr. Akhilesh A. Waoo & Team', publishedDate: '2022', image: '/books/book10.jpg' },
  { title: 'Architecting The Cloud', author: 'Dr. Akhilesh A. Waoo & Team', publishedDate: '2022', image: '/books/book11.jpg' },
  { title: 'The principles of Software Engoneering', author: 'Dr. Akhilesh A. Waoo & Team', publishedDate: '2022', image: '/books/book12.jpg' },
  { title: 'Fundamental of Computer Network', author: 'Dr. Akhilesh A. Waoo & Team', publishedDate: '2022', image: '/books/book13.jpg' },
];

const bookChapterPdfUrl = '/departmentData/Book chapter.xlsx'; 
const researchPaperPdfUrl = '/departmentData/research paper.xlsx'; 
const booksPdfUrl = '/departmentData/Book List.xlsx';

const patentData = {
  patents: { national: 3, design: 10 },
  research: { books: 19 , chapters: 291, papers: 282 },
  scholars: 17,
};

export default function UniversityMous() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeBookIndex, setActiveBookIndex] = useState<number | null>(null);
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="bg-[#daebf2] py-16 px-6 lg:px-20 min-h-screen"
    >

      {/* MoUs Grid */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="bg-[#daebf2] py-16 px-6 lg:px-20 min-h-screen"
      >
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">National & International MoUs</h2>
          <p className="text-gray-700 text-lg">Building a future-ready workforce with Global Tech Leaders!</p>
        </div>

        {/* MoUs Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {mousData.map((mou, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600 hover:border-yellow-500 cursor-pointer overflow-visible"
            >
              {/* Logo & Title */}
              <div className="flex items-center space-x-4">
                <div className="w-32 h-12 relative">
                  <Image src={mou.logo} alt={mou.name} layout="fill" objectFit="contain" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{mou.name}</h3>
              </div>
              <p className="text-gray-600 text-sm mt-2">{mou.description}</p>

              {/* Expanded Popup */}
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: -20, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 w-full bg-white p-6 rounded-xl shadow-2xl border border-blue-300 z-10"
                >
              <div className="flex items-center space-x-4">
                <div className="w-32 h-12 relative">
                  <Image src={mou.logo} alt={mou.name} layout="fill" objectFit="contain" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{mou.name}</h3>
              </div>
                  <p className="text-gray-700 text-sm mt-2">{mou.additionalInfo}</p>
                  <p className="text-sm font-semibold text-blue-600 mt-2">MoU Signed: {mou.signDate}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Research & Innovation Section */}
      <motion.div
      className="max-w-6xl mx-auto text-center mt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
  <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Research & Innovation</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      { 
        label: 'Indian National Patents', 
        value: patentData.patents.national, 
        color: 'from-blue-500 to-blue-700',
        link: 'https://drive.google.com/drive/folders/your-indian-national-patents-link'
      },
      { 
        label: 'Design Patents', 
        value: patentData.patents.design, 
        color: 'from-yellow-400 to-yellow-600',
        link: 'https://drive.google.com/drive/folders/your-design-patents-link'
      },
      { 
        label: 'Registered Research Scholars', 
        value: patentData.scholars, 
        color: 'from-green-500 to-green-700',
        link: 'https://drive.google.com/drive/folders/your-research-scholars-link'
      }
    ].map((item, index) => (
      <a 
        key={index} 
        href={item.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`bg-gradient-to-br ${item.color} p-8 rounded-xl shadow-lg relative`}
        >
          <h3 className="text-6xl font-extrabold text-white">{item.value}</h3>
          <p className="text-lg text-gray-100 mt-2">{item.label}</p>
        </motion.div>
      </a>
    ))}
  </div>
      </motion.div>


      {/* Research Contributions Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="bg-[#daebf2] py-16 px-6 lg:px-20"
      >
        {/* Research Contributions Section */}
        <motion.div
          className="max-w-6xl mx-auto text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Research Contributions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.a
              href={booksPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-blue-500 p-6 rounded-2xl shadow-md cursor-pointer"
            >
              <h3 className="text-5xl font-bold text-white">{patentData.research.books}</h3>
              <p className="text-lg mt-2 text-white">Books</p>
            </motion.a>
            <motion.a
              href={bookChapterPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-red-500 p-6 rounded-2xl shadow-md cursor-pointer"
            >
              <h3 className="text-5xl font-bold text-white">{patentData.research.chapters}</h3>
              <p className="text-lg mt-2 text-white">Book Chapters</p>
            </motion.a>
            <motion.a
              href={researchPaperPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-600 p-6 rounded-2xl shadow-md cursor-pointer"
            >
              <h3 className="text-5xl font-bold text-white">{patentData.research.papers}</h3>
              <p className="text-lg mt-2 text-white">Research Papers</p>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Published Research Books Section */}
      <motion.div className="bg-[#daebf2] py-16 px-6 lg:px-20 mt-20 mb-16">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Published Research Books</h2>
        </div>

        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto relative">
          {bookData.map((book, index) => (
            <div key={index} className="relative" onMouseEnter={() => setActiveBookIndex(index)} onMouseLeave={() => setActiveBookIndex(null)}>
              <div className="w-8/12 h-52 bg-gray-200 rounded-xl overflow-hidden shadow-md flex justify-center items-center relative">
                <Image src={book.image} alt={book.title} width={150} height={220} className="rounded-lg object-cover" />
              </div>
              {activeBookIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: -20, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 w-full bg-white p-6 rounded-xl shadow-2xl border border-blue-300 z-10"
                >
              <div className="w-full h-56 bg-gray-200 rounded-xl overflow-hidden shadow-md flex justify-center items-center relative">
                <Image src={book.image} alt={book.title} width={150} height={220} className="rounded-lg object-cover" />
              </div>
              <div className="flex items-center space-x-4">
                <h3 className="text-xl font-semibold text-gray-900">{book.title}</h3>
              </div>
              <p className="text-sm font-semibold text-blue-600 mt-2">Author: {book.author}</p>
                  <p className="text-sm font-semibold text-blue-600 mt-2">Published: {book.publishedDate}</p>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
    <Footer/>
    </>
  );
}
