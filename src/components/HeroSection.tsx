'use client';
import Footer from '@/components/Footer';

export default function HeroSection() {
  return (
    <div id="hero" className="relative h-screen flex items-center justify-center">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/CS Video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 text-white leading-tight">
          Welcome to Computer Science Department
        </h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8 text-white leading-relaxed">
          Your Gateway to Excellence in Computer Science & AI/ML
        </p>
        <a
          href="/Course"
          className="inline-block bg-[#80CCE3] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-medium hover:bg-[#94BDCF] transition"
        >
          Explore Courses
        </a>
      </div>
      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
    </div>
  );
}