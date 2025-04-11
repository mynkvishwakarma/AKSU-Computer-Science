'use client';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import { motion } from "framer-motion";

export default function Home() {
  const [inView, setInView] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const target = document.querySelector('#programs');
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (   
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: isVisible ? 1 : 0 }} 
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-600 text-white"
    >
      <div className="min-h-screen bg-[#DAEBF2] text-[#141414]">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* Programs Section */}
        <section
          id="programs"
          className={`py-20 px-4 md:px-8 lg:px-16 xl:px-24 relative overflow-hidden transition-all duration-700 ease-in-out transform ${
            inView ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
          }`}
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1A3A5F]">Our Programs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Undergraduate", text: "AKS University offers a dynamic undergraduate curriculum designed to build a strong foundation in computer science and emerging technologies." },
                { title: "Graduate", text: "Elevate your expertise with AKS University's graduate programs, focusing on advanced research and innovation in computer science." },
                { title: "Doctoral", text: "Join the prestigious doctoral program at AKS University and contribute to groundbreaking research in technology and innovation." }
              ].map((program, index) => (
                <div key={index} className="bg-[#E3F2FD] p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#1A3A5F]">{program.title}</h3>
                  <p className="text-[#4A6FA5] text-sm md:text-base">{program.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-[#94BDCF]">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">What Our Alumni Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { text: "Studying here has been an incredible experience. The faculty and opportunities are unparalleled.", name: "Alumni A" },
                { text: "The Department of Computer Science provided the foundation I needed to launch my career.", name: "Alumni B" }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="italic text-[#141414]">"{testimonial.text}"</p>
                  <h3 className="mt-4 font-bold">- {testimonial.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-[#80CCE3] text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-6">
              Have questions? Contact us for more information about our programs and research.
            </p>
            <a
              href="ContactUs"
              className="inline-block bg-white text-[#80CCE3] px-6 py-3 rounded-lg font-medium hover:bg-[#DAEBF2] transition"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </motion.div>
  );
}