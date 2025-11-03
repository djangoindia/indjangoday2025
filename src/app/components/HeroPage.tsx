

'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Button from './Button';
import ScrollIndicator from './ScrollIndicator';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ContactSection from './Footers';
import KeynoteSpeakers from './KeyNote';
import Sponsors from './Sponsors';


export default function HeroPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollIndicator />

      {/* Floating Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-gradient-to-br from-[#f8f6f2] via-[#f1f0ed] to-[#e6f0fa] overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-30"></div>

        {/* Django Logo - Top Left with equal padding */}
        {/* <div className={`absolute top-2 left-4 sm:top-6 sm:left-8 md:left-12 lg:left-16 z-10 transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="relative group">
            <Image
              src="/images/django-india-logo.png"
              alt="Django India Logo"
              width={120}
              height={120}
              className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </div>
        </div> */}

        {/* India Map - Top Right with 0 padding */}
        <div className={`absolute top-0 right-0 z-10 transition-all duration-1000 ease-out delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          <Image
            src="/images/india-map.png"
            alt="India Map"
            width={600}
            height={1000}
            className="object-contain w-64 sm:w-64 md:w-64 lg:w-[28rem] h-auto"
          />
        </div>

        {/* Lantern - floating decoration, properly positioned */}
        <div className={`absolute left-1/4 top-2 sm:top-0 -translate-x-1/2 z-10 transition-all duration-1500 ease-out delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div className="relative ">
            <Image
              src="/images/lantern.png"
              alt="Lantern"
              width={40}
              height={80}
              className="object-contain w-6 h-10 sm:w-8 sm:h-16 md:h-24 lg:w-10 lg:h-48"
            />
            <div className="absolute inset-0 bg-yellow-400/20 blur-md rounded-full scale-75"></div>
          </div>
        </div>

        {/* Center Content: Landing Logo - Perfectly Centered */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-all duration-1000 ease-out delay-500 ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} pb-16 sm:pb-24`}>
          <div className="relative group w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative w-full aspect-[4/1] max-w-6xl mx-auto">
              <Image
                src="/images/django-india-logo.png"
                alt="Django Day India 2025"
                fill
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 80vw"
                className="object-contain transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-[#2c5530] italic font-serif transition-opacity duration-500">
            A Journey Through Diversity, Heritage & Culture
          </p>

          {/* Date and Venue */}
          <div className="mt-4 sm:mt-6 mb-6 sm:mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[#2c5530]">
            <div className="flex items-center gap-2">
              <div className="bg-white/80 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#205c4b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs sm:text-sm font-medium uppercase tracking-wider">Date</p>
                <p className="text-sm sm:text-base font-bold">November 8, 2025</p>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-[#2c5530]/20"></div>
            
            <div className="flex items-center gap-2">
              <div className="bg-white/80 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#205c4b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-center sm:text-left max-w-[200px] sm:max-w-[240px]">
                <p className="text-xs sm:text-sm font-medium uppercase tracking-wider">Venue</p>
                <p className="text-xs sm:text-sm font-bold leading-tight">
                  Scaler School of Technology<br />
                  <span className="text-xs">Electronic City, Bangalore</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-[800px] mt-6 sm:mt-0 text-center max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-row justify-center gap-6">
            <Link
              href={process.env.NEXT_PUBLIC_CFP_URL || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg hover:shadow-xl hover:scale-105 gap-2 bg-white text-[#095148] font-medium text-sm py-2 px-5 cursor-pointer"
            >
              <span>Call For Proposals</span>
              <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:translate-x-1">
                <FaRegArrowAltCircleRight />
              </span>
            </Link>

            <Link
              href={process.env.NEXT_PUBLIC_TICKETS_URL || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg hover:shadow-xl hover:scale-105 gap-2 bg-[#095148] text-white font-medium text-sm py-2 px-5 cursor-pointer"
            >
              <span>Buy Tickets</span>
              <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:translate-x-1">
                <FaRegArrowAltCircleRight />
              </span>
            </Link>

          </div>
        </div>

        {/* Lady - Left side, larger */}
        <div className={`absolute bottom-0 left-2 sm:left-4 md:left-8 transition-all duration-1000 ease-out delay-800 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="relative group">
            <Image
              src="/images/lady.png"
              alt="Cultural Lady"
              width={225}
              height={562}
              className="w-24 h-48 sm:w-32 sm:h-64 md:w-40 md:h-80 lg:w-48 lg:h-96 xl:w-56 xl:h-[28rem] transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Border - Restored and properly aligned */}
        <div className="absolute bottom-0 left-0 w-full z-10" style={{ pointerEvents: 'none' }}>
          <div className={`w-full transition-all duration-1000 ease-out delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Image
              src="/images/section-1-border.png"
              alt="Cultural Border"
              width={1920}
              height={400}
              className="w-full h-8 sm:h-16 md:h-32 lg:h-56 z-10"
              style={{ verticalAlign: 'bottom', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section
        id="about-section"
        className="relative w-full h-screen bg-gradient-to-b from-[#f6b93b] via-[#f4c344] to-[#fdfcf8] overflow-hidden"

        style={{ marginTop: '-1px' }}
      >
        {/* Top border pattern */}
        <div
          className="absolute top-0 left-0 w-full h-4 sm:h-8 md:h-12 lg:h-16 z-10 "
          style={{
            backgroundImage: "url('/images/sec-2-upper-border.png')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-2 sm:h-4 md:h-6 lg:h-8 z-20"
          style={{
            backgroundImage: "url('/images/sec-2-upper-border-2.png')",
            // backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
        ></div>

        {/* Decorative corners */}
        <div className="absolute top-0 right-0 w-24 sm:w-32 lg:w-48 xl:w-64 opacity-80">
          <Image
            src="/images/sec-2-right-top.png"
            alt="Decorative Corner"
            width={300}
            height={300}
            className="object-contain w-full h-auto"
          />
        </div>
        <div className="absolute top-0 left-0 w-24 sm:w-32 lg:w-48 xl:w-64 opacity-80">
          <Image
            src="/images/sec-2-left-top.png"
            alt="Decorative Corner"
            width={300}
            height={300}
            className="object-contain w-full h-auto"
          />
        </div>

        {/* Content area */}
        <div className="relative top-4 sm:text-left sm:top-8 md:top-10 z-20 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-4 sm:gap-8 lg:gap-16 py-8 sm:py-16 lg:py-24">
          {/* Left content */}
          <div className="flex-1 flex flex-col sm:text-left items-center lg:items-start gap-4 sm:gap-6  lg:text-left">

            {/* section - 2 : landing logo */}
            <div className="relative group">
              <Image
                src="/images/sec-2-django-logo.png"
                alt="Django Day India 2025"
                width={1600}
                height={300}
                className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-xl transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>

            <p className="text-sm sm:text-left md:text-left md:text-lg lg:text-xl xl:text-2xl text-gray-900 max-w-xs sm:max-w-xl md:max-w-2xl font-medium leading-relaxed">
              Django Day India 2025 is the premier conference for Django
              enthusiasts and professionals, offering an unparalleled opportunity
              to dive deep into the world of Django and explore its limitless
              potential. <span className="font-semibold text-green-800">Stay tuned for updates!</span>
            </p>

            <div className='flex flex-row align-left w-full'>
              <Button className="mt-2 sm:mt-4">
                <span>View Schedule</span>
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1"><FaRegArrowAltCircleRight /></span>
              </Button>
            </div>
          </div>

        </div>
        {/* Right lady image */}
        <div className="flex-1 flex justify-center lg:justify-end absolute bottom-0 right-2 sm:right-8 lg:right-16 z-10">
          <div className="">
            <Image
              src="/images/sec-2-lady-right.png"
              alt="Cultural Dancer"
              width={1200}
              height={800}
              className="object-contain w-32 sm:w-48 md:w-32 lg:w-64 xl:w-256 h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-1/2 w-20 h-4 bg-black/20 rounded-full blur-md -translate-x-1/2"></div>
          </div>
        </div>

        {/* Django logo floating decoration */}
        <div className="absolute bottom-2 left-2 sm:bottom-8 sm:left-8 lg:left-20 z-0 opacity-5">
          <Image
            src="/images/sec-2-django-logo.png"
            alt="Django Logo"
            width={200}
            height={200}
            className="object-contain w-16 sm:w-32 md:w-48 lg:w-64 h-auto animate-pulse"
          />
        </div>

        {/* Floating particles - Only render on client to avoid hydration mismatch */}
        {isLoaded && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-yellow-300/30 rounded-full animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>
        )}
      </section>

      <KeynoteSpeakers />


      {/* Section 4 - Event Sponsors */}
      <section
        id="sponsors-section"
        className="relative w-full min-h-screen overflow-hidden"
        style={{
          background: "#ed9a15",
        }}
      >
        {/* Clouds positioned to match the image */}
        <div className="absolute top-16 right-8 sm:top-24 sm:right-48 w-16 sm:w-24 md:w-32 lg:w-36 opacity-90 z-20">
          <Image
            src="/images/cloud1.png"
            alt="Cloud"
            width={150}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="absolute top-32 right-2 sm:top-64 sm:right-96 w-12 sm:w-20 md:w-24 lg:w-28 opacity-80 z-20">
          <Image
            src="/images/cloud2.png"
            alt="Cloud"
            width={120}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Main content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-16 md:pt-24 pb-8">
          <div className="flex flex-row gap-8">
            {/* Content */}
            <div className="w-full">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2c5530] mb-4 sm:mb-6 leading-tight">
                Event Sponsors
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-6 sm:mb-8 font-medium max-w-full lg:max-w-xl">
                DjangoDay India is powered entirely by volunteers,
                reflecting the spirit of the Django community. Sponsorship
                is essential to sustain and grow the conference, ensuring it
                remains accessible and affordable. By sponsoring, you not
                only support event logistics and resources but also help
                strengthen the Django ecosystem in India.
              </p>

              <Button
                size="lg"
                className="mt-2 text-sm py-2 px-5"
                onClick={() => {
                  if (process.env.  NEXT_PUBLIC_PROSPECTUS_URL) {
                    window.open(process.env.NEXT_PUBLIC_PROSPECTUS_URL, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <span>Download Prospectus</span>
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1"><FaRegArrowAltCircleRight /></span>
              </Button>
            </div>

            {/* Peacock decoration - visible on all screens */}
            <div className="hidden lg:block absolute bottom-0 right-0 flex flex-col items-center justify-end w-[400px] h-[300px]" style={{ pointerEvents: 'none'  }}>
              <div className="relative flex flex-col items-center justify-end w-full max-w-[300px] sm:w h-[200px] sm:h-[250px] lg:h-[300px] z-40">
                {/* Multi-layered semi-circles behind the peacock */}
                <div className="absolute bottom-[-12%] left-1/2 -translate-x-1/2 flex items-end justify-center z-10 md:z-10">
                  {/* Outer semicircle */}
                  <div
                    className="absolute"
                    style={{
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: "300px",
                      height: "150px",
                      borderTopLeftRadius: "150px",
                      borderTopRightRadius: "150px",
                      backgroundColor: "#eb8616",
                      zIndex: -1,
                    }}
                  ></div>
                  {/* Middle semicircle */}
                  <div
                    className="absolute"
                    style={{
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: "240px",
                      height: "120px",
                      borderTopLeftRadius: "120px",
                      borderTopRightRadius: "120px",
                      backgroundColor: "#ea7c17",
                    }}
                  ></div>
                  {/* Inner semicircle */}
                  <div
                    className="absolute"
                    style={{
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: "180px",
                      height: "90px",
                      borderTopLeftRadius: "90px",
                      borderTopRightRadius: "90px",
                      backgroundColor: "#ea7218",
                      zIndex: 55,
                    }}
                  ></div>
                </div>
                {/* Peacock image */}
                <Image
                  src="/images/peacock.png"
                  alt="Peacock"
                  width={200}
                  height={300}
                  className="bottom-[-99%] w-32 sm:w-40 md:w-48 lg:w-48 xl:w-48 h-auto z-[41] overflow-visible"
                  style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom cream/yellow section */}
        <div className="absolute bottom-0 left-0 w-full h-[40vh] z-39 border-t-[13px] border-[#514027]"
          style={{
            background: "linear-gradient(to bottom, #f4d03f 0%, #f7dc6f 50%, #f9e79f 100%)",
          }}
        >
        </div>
      </section>

      <Sponsors/>
      
      <section
      id="participating-communities-section"
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background: "#ed9a15",
      }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen flex flex-col justify-center">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-16 sm:mb-20 lg:mb-72">

          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2c5530] mb-4 sm:mb-6 leading-tight">
                PARTICIPATING
              </h2>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2c5530] mb-6 sm:mb-8 leading-tight">
                COMMUNITIES
              </h2>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-6 sm:mb-8 font-medium max-w-xl mx-auto lg:mx-0">
              Join Django India&apos;s Community Partner Program to support and
              empower developers. As a partner, you contribute to growth,
              learning, and collaboration, helping the Django community
              thrive across India.
            </p>

            {/* Button */}
            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="mt-2 text-sm py-2 px-5"
                onClick={() => {
                  if (process.env.NEXT_PUBLIC_PARTNER_FORM_URL) {
                    window.open(process.env.NEXT_PUBLIC_PARTNER_FORM_URL, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <span>Become a partner</span>
                <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:translate-x-1">
                  <FaRegArrowAltCircleRight />
                </span>
              </Button>
            </div>    </div>

          {/* Right Content - Community Cards Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto lg:ml-auto lg:mr-0">
            <div className="rounded-lg p-4 sm:p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-black" style={{ backgroundColor: 'rgba(255, 255, 255, 0.47)' }}>
              <Image
                src='/images/pydelhi_logo_horizontal_nobg.png'
                alt='PyDelhi Community'
                width={800}
                height={800}
                className="object-contain max-h-24 sm:max-h-28"
              />
            </div>

            <div className="rounded-lg p-4 sm:p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-black" style={{ backgroundColor: 'rgba(255, 255, 255, 0.47)' }}>
              <Image
                src='/images/bangpypers-square-large.png'
                alt='Bangpypers Community'
                width={800}
                height={800}
                className="object-contain max-h-24 sm:max-h-28"
              />
            </div>
            <div className="rounded-lg p-4 sm:p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-black" style={{ backgroundColor: 'rgba(255, 255, 255, 0.47)' }}>
              <Image
                src='/images/djangogirlsblr.png'
                alt='Djangogirlsblr Community'
                width={800}
                height={800}
                className="object-contain max-h-24 sm:max-h-28"
              />
            </div>
            <div className="rounded-lg p-4 sm:p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-black" style={{ backgroundColor: 'rgba(255, 255, 255, 0.47)' }}>
              <Image
                src='/images/hydpy.png'
                alt='Hydpy Community'
                width={800}
                height={800}
                className="object-contain max-h-24 sm:max-h-28"
              />
            </div>
            <div className="rounded-lg p-4 sm:p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-black" style={{ backgroundColor: 'rgba(255, 255, 255, 0.47)' }}>
              <Image
                src='/images/IDC_Logo (3) - Indian Data Club.png'
                alt='IDC Community'
                width={800}
                height={800}
                className="object-contain max-h-24 sm:max-h-28"
              />
            </div>
             <div className="rounded-lg p-4 sm:p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-black" style={{ backgroundColor: 'rgba(255, 255, 255, 0.47)' }}>
              <Image
                src='/images/keploy.png'
                alt='Keploy Community'
                width={800}
                height={800}
                className="object-contain max-h-24 sm:max-h-28"
              />
            </div>

          </div>
        </div>

        {/* Bottom Decorative Mandala Image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 flex flex-col items-center w-full" style={{ pointerEvents: 'none' }}>
          {/* India text - centered, large, clipped */}
          <div
            className="absolute w-full bottom-0"
            style={{ height: '120px', overflow: 'hidden' }}
          >
            <span
              className="bottom-[-11%] sm:bottom-[-11%] lg:bottom-[-25%] absolute left-1/2 transform -translate-x-1/2 text-center font-serif text-white text-[2rem] sm:text-[2rem] md:text-[2rem] lg:text-[5rem] xl:text-[5rem]"
              style={{
                lineHeight: '1',
                zIndex: 1,
                width: '100%',
                textShadow: '0 4px 32px rgba(0,0,0,0.15)',
                overflow: 'hidden',
              }}
            >
              India
            </span>
          </div>
          {/* Mandala image - overlaps and sits on top of India text */}
          <div className="relative flex justify-center w-full" style={{ zIndex: 2, marginTop: 'clamp(-60px, -10vw, -120px)' }}>
            <Image
              src="/images/section4-mandala-bottom.png"
              alt="Mandala Bottom Decoration"
              width={768}
              height={400}
              className="w-64 sm:w-80 md:w-96 lg:w-[48rem] h-auto object-contain"
              style={{ position: 'relative', zIndex: 2 }}
            />
          </div>
        </div>
      </div>
    </section>

      {/* Section 7 - Django India Past Meetups */}
      <section
        id="past-meetups-section"
        className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col items-center justify-start"
        style={{ zIndex: 10 }}
      >
        {/* Background Title */}
        <div className="absolute w-full " style={{ height: '190px', overflow: 'hidden' }}>
          <span
            className="top-[-15%] sm:top-[-15%] lg:top-[-40%] absolute left-1/2 transform -translate-x-1/2 text-center font-serif text-[#ed9a15] text-[2rem] sm:text-[2rem] md:text-[2rem] lg:text-[5rem] xl:text-[5rem]"
            style={{
              zIndex: 1,
              width: '100%',
              overflow: 'hidden',
            }}
          >
            India
          </span>
        </div>

        <div className="max-w-7xl bg-gradient-to-b from-transparent to-white w-[90%] sm:w-[85%] md:w-[80%] mt-8">
          {/* Section Title */}
          <h2 className="mt-8 mb-8 text-3xl sm:text-4xl md:text-5xl font-serif text-[#205c4b] text-left">
            Django India Community Past Meetups
          </h2>

          {/* Meetups Image Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* First row - large image */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3">
              <div className="relative overflow-hidden rounded-xl shadow-lg h-64 sm:h-80 w-full">
                <Image
                  src="https://djangoindia-prod-s3.s3.amazonaws.com/media/event_images/c38f2af8-2fb1-423b-86f8-9a43b10.jpeg"
                  alt="Django India Meetup 1"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
            </div>

            {/* Second row - 2 medium images */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="relative overflow-hidden rounded-xl shadow-lg h-64 sm:h-80 w-full">
                <Image
                  src="https://djangoindia-prod-s3.s3.amazonaws.com/media/event_images/bffc4f29-d7fb-42a7-9aee-9a209abcc6c5.JPG"
                  alt="Django India Meetup 2"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg h-64 sm:h-80 w-full">
                <Image
                  src="https://djangoindia-prod-s3.s3.amazonaws.com/media/event_images/IMG-20250118-WA0035.jpg"
                  alt="Django India Meetup 3"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
            </div>

            {/* Third row - 3 equal images */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="relative overflow-hidden rounded-xl shadow-lg h-48 sm:h-64 w-full">
                <Image
                  src="https://djangoindia-prod-s3.s3.amazonaws.com/media/event_images/1U9A0141.jpeg"
                  alt="Django India Meetup 4"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg h-48 sm:h-64 w-full">
                <Image
                  src="https://djangoindia-prod-s3.s3.amazonaws.com/media/event_images/group_photo_first.png"
                  alt="Django India Meetup 5"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg h-48 sm:h-64 w-full">
                <Image
                  src="https://djangoindia-prod-s3.s3.amazonaws.com/media/event_images/group_photo.png"
                  alt="Django India Meetup 6"
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* See More Button */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://www.djangoindia.org/events"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-[#205c4b] text-[#205c4b] font-semibold text-lg flex items-center gap-2 hover:bg-[#205c4b] hover:text-white transition-all duration-200"
            >
              See More
              <span className="inline-block">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>    </div>
        </div>
      </section>


      <ContactSection />
    </div>
  );
}
