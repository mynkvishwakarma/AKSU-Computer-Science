"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= lastScrollY || window.scrollY <= 100);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/Course" },
    { label: "University MoU's", path: "/universityMous" },
    { label: "Vision & Mission", path: "/visionMission" },
    { label: "Club", path: "/ADSCPage" },
    { label: "Contact Us", path: "/ContactUs" },
    { label: "About", path: "/About" },
  ];

  const authMenuItems = status === "authenticated" && session?.user?.email === "admin@gmail.com" ? [
    { label: "Admin", path: "/Admin" },
    { label: "Faculty Information", path: "/FacultyInformation" },
    { label: "Student Information", path: "/Work" },
    { label: "Block Information", path: "/Assignment" },
  ] : [];

  return (
    <nav
      className={`bg-[#daebf2] p-4 transition-all duration-300 ease-in-out fixed top-0 left-0 right-0 z-50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="flex items-center">
          <img src="/akslogo.png" alt="AKS University Logo" className="h-10 md:h-12" />
          <div className="hidden md:block text-[#141414] text-xs md:text-sm ml-4">
            <p>Phone: +91 9311656688</p>
            <p>Email: education@aksuniversity.com</p>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 text-2xl">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <div className={`md:flex md:items-center w-full md:w-auto mt-4 md:mt-0 text-center md:text-left ${menuOpen ? "block" : "hidden"}`}>
          {status !== "authenticated" ? (
            <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-3 md:gap-4">
              <div className="relative w-full md:w-auto" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium w-full md:w-auto">
                  Register Now
                </button>
                {dropdownOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white border rounded-lg shadow-lg text-left">
                    <Link href="/facultyRegistration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Faculty</Link>
                    <Link href="/Signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Student</Link>
                  </div>
                )}
              </div>
              <Link href="/Login" className="w-full md:w-auto">
                <h1 className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium w-full md:w-auto">
                  Login
                </h1>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-2 md:gap-4">
              <div className="text-[#141414] text-sm text-center md:text-left md:flex md:flex-col md:mr-4">
                <p className="font-semibold">Welcome, {session?.user?.name}</p>
                <p className="text-xs">Email: {session?.user?.email}</p>
              </div>
              <button className="text-[#141414] hover:bg-blue-200 px-4 py-2 rounded-md text-sm font-medium w-full md:w-auto" onClick={() => signOut()}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
      <div className={`container mx-auto flex flex-col md:flex-row items-center mt-4 ${menuOpen ? "block" : "hidden md:flex"}`}>
        {[...menuItems, ...authMenuItems].map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`text-[#141414] font-bold relative group px-3 py-2 text-sm ${pathname === item.path ? "underline-effect" : ""}`}
          >
            {item.label}
            <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-[2px] bg-blue-600 transition-all duration-300 ${pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
          </Link>
        ))}
      </div>
    </nav>
  );
}