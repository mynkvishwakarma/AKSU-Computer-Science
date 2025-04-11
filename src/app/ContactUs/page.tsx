'use client';
import Image from "next/image";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setError('');

    try {
      const res = await fetch('/api/contactUs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus('Message Sent!');
        setForm({ name: '', email: '', message: '' });

        // Hide message after 2 seconds
        setTimeout(() => setStatus(''), 2000);
      } else {
        setError(result.error || 'An unexpected error occurred.');
        setTimeout(() => setError(''), 2000); // Hide error after 2 seconds
      }
    } catch (error) {
      console.error('Submission error:', error);
      setError('An error occurred. Please try again later.');
      setTimeout(() => setError(''), 2000); // Hide error after 2 seconds
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-600 text-[#2C2C2C]"
    >
      <div className="min-h-screen bg-[#daebf2] flex items-center justify-center py-10 px-6 sm:px-8 lg:px-10 text-[#2C2C2C]">
        <div className="max-w-lg w-full space-y-8 bg-white p-8 rounded-xl shadow-xl mt-16 sm:mt-24 lg:mt-32">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#2C2C2C] flex items-center justify-center gap-3">
            <Image 
              src="/AKS_University_logo.png" // Replace with the actual path to your logo
              alt="Contact Us Logo"
              width={40} // Adjust the size as needed
              height={40}
              className="w-10 h-10 object-contain"
            />
            Contact Us
          </h2>
          <p className="text-center text-[#2C2C2C] mt-2 text-sm sm:text-base md:text-lg">We'd love to hear from you!</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6 text-[#2C2C2C]">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={form.name} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-[#2C2C2C]"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={form.email} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-[#2C2C2C]"
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows="4" 
              value={form.message} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none text-[#2C2C2C]"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>

          {status && (
            <div className="mt-4 text-center text-green-600">{status}</div>
          )}

          {error && (
            <div className="mt-4 text-center text-red-600">{error}</div>
          )}

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-6 sm:mt-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
              <FaFacebook size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition">
              <FaTwitter size={28} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition">
              <FaInstagram size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition">
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
