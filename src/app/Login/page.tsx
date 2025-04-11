"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Footer from "@/components/Footer";

export default function Login() {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { status } = useSession();
  const router = useRouter();

  if (status === 'authenticated') {
    router.push('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn("credentials", { email, password, redirect: false }).then((res) => {
      if (res.error) {
        setError("Invalid email/password.");
        setTimeout(() => setError(''), 3000); 
      } else {
        router.push("/");
      }
    });
  }

  return (
    <>
    <motion.div 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: isVisible ? 1 : 0, y: 0 }} 
      transition={{ duration: 0.9 }}
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full mt-32"
      >
        <div className="flex flex-col items-center">
          <Image 
            src="/AKS_University_logo.png" 
            alt="Login Logo"
            width={60} 
            height={60}
            className="w-16 h-16 object-contain mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Log in to your account</h2>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
              placeholder="Email address"
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
          >Sign in</button>
        </form>
        <p className="text-center mt-4">Don't have an account? <a href="/Signup" className="text-indigo-600">Sign Up</a></p>

        <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white">Or continue with</span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
              <button
              onClick={() => signIn("google")}
              className="w-full inline-flex justify-center py-2 px-4 border border-black rounded-md shadow-sm bg-white text-sm font-medium text-black hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with Google</span>
                <img src="https://w7.pngwing.com/pngs/344/344/png-transparent-google-logo-google-logo-g-suite-google-text-logo-symbol-thumbnail.png" alt="Google" className="h-5 w-5" />
              </button>
            </div>
           
            <div>
              <button
                onClick={() => signIn("github")}
                className="w-full inline-flex justify-center py-2 px-4 border border-black rounded-md shadow-sm bg-white text-sm font-medium text-black hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with GitHub</span>
                <img src="https://w7.pngwing.com/pngs/828/816/png-transparent-github-computer-icons-gitlab-github-white-cat-like-mammal-carnivoran-thumbnail.png" alt="GitHub" className="h-5 w-5" />
              </button>
            </div>
          </div>
      </div>
      </motion.div>
    </motion.div>
    <Footer/>
    </>
  );
}
