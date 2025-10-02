"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaInstagram,
  FaLinkedin,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FEF6F3] flex flex-col font-sans">
      <header className="bg-[#C1E0C9] px-6 flex justify-between items-center py-4 md:py-0">
        <div className="flex items-center ">
          <Link href="/">
            <Image
              src="/images/django-india-logo.png"
              alt="Django India Logo"
              width={150}
              height={50}
              className="object-contain hidden md:block"
            />
          </Link>
        </div>
        <nav className="flex items-center justify-between w-full md:justify-end md:w-auto md:gap-4">
          <Link href="/story" scroll={false} className="text-[#14342B] text-lg">
            Read Story
          </Link>
          <a
            href={process.env.NEXT_PUBLIC_REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#14342B] text-white px-6 py-3 rounded-md flex items-center gap-2 transition-all hover:bg-[#0a231c]"
          >
            Attend <FaArrowRight />
          </a>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#14342B] text-xl md:text-2xl mb-4">
              Welcome to the first ever
            </p>
            <h1 className="text-[#14342B] text-5xl sm:text-7xl md:text-8xl font-bold mb-6 relative z-10">
              DjangoDay
              <span className="absolute bottom-0 left-0 max-w-[79%] sm:max-w-[81%] lg:max-w-[85%] w-full h-1 bg-[#C1E0C9] z-[-1]"></span>
              <span className="text-[#14342B] text-xl sm:text-3xl font-bold bg-[#C1E0C9] p-[0.19rem] md:p-[0.55rem] ">
                India
              </span>
            </h1>
            <p className="text-[#14342B] text-xl mb-10">
              A day all about Django, it&#39;s community and open source
            </p>

            <div className="flex flex-wrap w-full gap-6 mb-12">
              <div className="flex items-center gap-2">
                <div className="bg-[#C1E0C9] rounded-full p-3 mr-1">
                  <FaCalendarAlt className="text-[#14342B]" />
                </div>
                <span className="text-[#14342B] font-bold text-sm md:text-lg">
                  8 Nov, 2025
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-[#C1E0C9] rounded-full p-3 mr-1">
                  <FaMapMarkerAlt className="text-[#14342B]" />
                </div>
                <span className="text-[#14342B] font-bold text-sm md:text-lg">
                  Scaler Institute of Technology, Bangalore, India
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={process.env.NEXT_PUBLIC_SPONSOR_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#14342B] text-white px-6 py-3 rounded-md flex items-center gap-2 transition-all hover:bg-[#0a231c]"
              >
                Sponsor <FaArrowRight />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_VOLUNTEER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#14342B] text-[#14342B] px-6 py-3 rounded-md flex items-center gap-2"
              >
                Volunteer <FaArrowRight />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative mx-auto">
              <Image
                src="/images/india-monuments.png"
                alt="Indian Landmarks"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-6 py-6 border-t border-[#C1E0C9]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#14342B] mb-4 md:mb-0">
            Organized by{" "}
            <a
              href="https://djangoindia.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>Django India Community</u>
            </a>
          </p>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/djangoindiaa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C1E0C9] p-3 rounded-full text-[#14342B] hover:bg-[#b0d8c1] transition-all"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com/djangoindia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C1E0C9] p-3 rounded-full text-[#14342B] hover:bg-[#b0d8c1] transition-all"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com/company/djangoindia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C1E0C9] p-3 rounded-full text-[#14342B] hover:bg-[#b0d8c1] transition-all"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
