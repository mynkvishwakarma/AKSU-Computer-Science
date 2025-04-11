"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function CreateAccount() {
  // Form 1: Basic signup state
  const [isVisible, setIsVisible] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  // Form 2: Course selection state
  const [courseCategory, setCourseCategory] = useState("");
  const [course, setCourse] = useState("");
  const [showCourseForm, setShowCourseForm] = useState(false);
  
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/");
  }

  // Handler for first signup form
  const handleSignupSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users", {
        name,
        email,
        mobileNumber,
        password,
      });
      // After successful signup, show the course selection form
      setShowCourseForm(true);
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        setError("Email already exists.");
      } else {
        setError("An error occurred.");
      }
      setTimeout(() => setError(""), 3000);
    }
  };

  // Handler for the course selection form
  const handleCourseSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Send all user data along with course info to your backend.
      // This could be a separate endpoint like '/api/users/course' 
      // or you can modify your user creation API to accept course data.
      const response = await axios.post("/api/course", {
        email, // you might use email or an id to update the same user
        courseCategory,
        course,
      });
      // After successful submission, redirect or notify the user.
      router.push("/dashboard");
    } catch (error: any) {
      setError("An error occurred while saving course selection.");
      setTimeout(() => setError(""), 3000);
    }
  };

  // Options based on course category
  const courseOptions = {
    CSE: ["BTech CSE", "BTech CSE AI/ML", "BTech CSE AI/DS"],
    CS: ["BCA", "BSC IT", "MCA"],
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
        transition={{ duration: 0.9 }}
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full mt-32"
          >
            <div className="flex flex-col items-center">
              <Image
                src="/AKS_University_logo.png"
                alt="Create Account Logo"
                width={60}
                height={60}
                className="w-16 h-16 object-contain mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800">
                {showCourseForm ? "Select your course" : "Create your account"}
              </h2>
              {error && <p className="text-red-600 mt-2">{error}</p>}
            </div>

            {showCourseForm ? (
              // Form 2: Course selection form
              <form className="mt-6" onSubmit={handleCourseSubmit}>
                <div className="space-y-4">
                  <select
                    value={courseCategory}
                    onChange={(e) => {
                      setCourseCategory(e.target.value);
                      // Reset course selection if the category changes
                      setCourse("");
                    }}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                    required
                  >
                    <option value="">Select Course Category</option>
                    <option value="CSE">CSE</option>
                    <option value="CS">CS</option>
                  </select>

                  {courseCategory && (
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                      required
                    >
                      <option value="">Select Course</option>
                      {courseOptions[courseCategory].map((courseItem) => (
                        <option key={courseItem} value={courseItem}>
                          {courseItem}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
                >
                  Submit Course
                </button>
              </form>
            ) : (
              // Form 1: Basic signup form
              <form className="mt-6" onSubmit={handleSignupSubmit}>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                    placeholder="Email address"
                    required
                  />
                  <input
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                    placeholder="Mobile Number"
                    required
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                    placeholder="Password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
                >
                  Sign Up
                </button>
              </form>
            )}
            {!showCourseForm && (
              <p className="text-center mt-4">
                Already have an account?{" "}
                <a href="/Login" className="text-indigo-600">
                  Log In
                </a>
              </p>
            )}
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
