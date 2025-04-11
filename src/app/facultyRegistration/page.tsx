"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function FacultyRegistration() {
  const [employeeId, setEmployeeId] = useState(""); 
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const router = useRouter();

  // Handler for verifying employee code and email
  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/verifyFaculty", { // Call new API
        employeeId,  // Updated to employeeId
        email,
      });
      if (response.data.success) {
        setIsVerified(true);
      } else {
        setError("Invalid Employee ID or Email");
        setTimeout(() => setError(""), 3000);
      }
    } catch (error) {
      setError("Error verifying details");
      setTimeout(() => setError(""), 3000);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/updateFaculty", {
        employeeId, // Using the same verified ID
        mobileNumber,
        password,
      });
  
      if (response.data.success) {
        alert("Details updated successfully!");
        router.push("/Login"); // Redirect after Register
      } else {
        setError(response.data.message);
        setTimeout(() => setError(""), 3000);
      }
    } catch (error) {
      setError("Error updating details");
      setTimeout(() => setError(""), 3000);
    }
  };
  
  

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full mt-32">
          <div className="flex flex-col items-center">
            <Image
              src="/AKS_University_logo.png"
              alt="Faculty Registration"
              width={60}
              height={60}
              className="w-16 h-16 object-contain mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">
              Faculty Registration
            </h2>
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </div>

          {!isVerified ? (
            <form className="mt-6" onSubmit={handleVerify}>
                <input
                type="text"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                placeholder="Employee ID"
                required
                />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 mt-4"
                placeholder="Email"
                required
              />
              <button
                type="submit"
                className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
              >
                Verify
              </button>
            </form>
          ) : (
            <form className="mt-6" onSubmit={handleUpdate}>
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                placeholder="New Mobile Number"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 mt-4"
                placeholder="New Password"
                required
              />
              <button
                type="submit"
                className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
              >
                Register
              </button>
            </form>
          )}
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
