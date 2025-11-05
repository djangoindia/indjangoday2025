"use client";

import React from 'react';
import Image from 'next/image';
import ContactSection from './Footers';

const SchedulePage = () => {
    // Structured schedule JSON
    const scheduleData = [
        { start: '08:00', end: '09:00', type: 'Networking', title: 'Registration & Networking' },
        { start: '09:10', end: '09:20', type: 'address', title: 'Opening Address' },
        { start: '09:30', end: '10:15', type: 'keynote', title: 'Building Temples: My Journey from Dreamer to Builder', speaker: 'Sarah Abderemane' },
        { start: '10:30', end: '11:00', type: 'talk', title: 'Stop N+1s: Practical Django ORM Query Optimisation (with Before/After Wins)', speaker: 'Mahesh Varma & Dheeraj' },
        { start: '11:10', end: '11:40', type: 'talk', title: 'Tool Time with Django:Crafting AI-Agent Interactions One Tool at a Time', speaker: 'Viraj Sharma' },
        { start: '11:50', end: '12:20', type: 'talk', title: 'Organizing Djangonaut Space: A Toolkit for Inclusive Events', speaker: 'Priya Pahwa' },
        { start: '12:20', end: '13:45', type: 'break', title: 'Lunch (1h 25m)' },
        { start: '13:45', end: '14:10', type: 'lightning', title: 'Lightning Talks (5×5 min)', speaker: 'Various' },
        { start: '14:20', end: '14:50', type: 'talk', title: 'Immutable Audit Trails in Django: SOC2/CFTC-Grade Without the Pain', speaker: 'Himanshu Shankar' },
        { start: '15:00', end: '15:30', type: 'talk', title: 'Talk Title - TBD', speaker: 'TBD' },
        { start: '15:40', end: '16:10', type: 'talk', title: 'Accessibility for the Django Community', speaker: 'Saptak S' },
        { start: '16:10', end: '16:30', type: 'break', title: 'Tea & Networking Break' },
        { start: '16:30', end: '17:00', type: 'talk', title: 'Migrations That Bite: Hard-Learned Lessons from Django in Production', speaker: 'Sheesh Mohsin & Mahendra Yadav' },
        { start: '17:10', end: '17:55', type: 'keynote', title: 'Django’s unfair AI advantage', speaker: 'Thibaud Colas' },
        { start: '18:00', end: '18:10', type: 'address', title: 'Closing Address' },
    ];

    // Derived rows used by renderer
    const scheduleRows = scheduleData.map((item) => {
        const time = `${item.start} – ${item.end}`;
        return { time, type: item.type, title: item.title, speaker: item.speaker };
    });

    return (
        <div className="min-h-screen bg-[#ffd476] relative overflow-hidden ">
            {/* Kites in upper-left corner */}
            <div className="absolute top-8 left-8 md:top-16 md:left-16 z-10 ">
                {/* Green kite slightly behind */}
                <Image
                    src="/images/greenkite.png"
                    alt="Green Kite"
                    width={150}
                    height={150}
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain pointer-events-none select-none rotate-[-8deg] opacity-90"
                    style={{ objectFit: 'contain' }}
                />
                {/* Red kite up and right */}
                <Image
                    src="/images/Red Kite.png"
                    alt="Red Kite"
                    width={140}
                    height={140}
                    className="absolute -top-4 left-10 sm:left-16 md:left-20 lg:left-24 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain pointer-events-none select-none rotate-[10deg]"
                    style={{ objectFit: 'contain' }}
                />
            </div>

            {/* Decorative border-decor in upper-right */}
            <div className="absolute top-12 right-8 md:top-20 md:right-16 z-10">
                <Image
                    src="/images/border-decor.png"
                    alt="Border Decor"
                    width={224}
                    height={224}
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 object-contain pointer-events-none select-none opacity-80"
                    style={{ objectFit: 'contain' }}
                />
            </div>

            {/* Main content area */}
            <div className="relative z-10 pt-24 md:pt-32 flex flex-col items-center justify-center">
                {/* Schedule Title - centered */}
                <div className="mb-8 md:mb-12 relative text-center">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-black leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                        Schedule
                    </h1>
                </div>

                {/* Date Box */}
                <div className="mb-12 md:mb-16 relative inline-block">
                    <div className="relative border-2 border-[#262626] rounded-xl bg-[#F7E8A3] p-6 md:p-8 shadow-lg">
                        {/* Teal Banner on top - extends beyond box width */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 w-full">
                            <div className="relative bg-[#40B0B0] px-8 md:px-12 py-2 rounded-full mx-6 md:mx-8 shadow-md border border-[#155E5E]/30 flex items-center justify-center text-center">
                                <span className="text-white font-semibold text-sm md:text-base whitespace-nowrap">Conference Day</span>
                                {/* Flower image on left corner of banner */}
                                <Image
                                    src="/images/flower-bullets.png"
                                    alt="Flower"
                                    width={28}
                                    height={28}
                                    className="absolute -left-3 -top-3 w-7 h-7 select-none pointer-events-none"
                                />
                            </div>
                        </div>

                        <div className="mt-6 space-y-2 text-center">
                            <div className="text-2xl md:text-3xl font-bold text-black">8th November</div>
                            <div className="text-lg md:text-xl font-semibold tracking-wide text-[#3B82F6]">Saturday</div>
                        </div>
                    </div>
                </div>

                {/* Horizontal Divider with borders - matching SponsorsPage style */}
                <div className="my-12 md:my-16 relative w-full">
                    {/* Upper Border */}
                    <div
                        className="w-full h-2 sm:h-4 md:h-6 lg:h-8"
                        style={{
                            backgroundImage: "url('/images/sec-2-upper-border-2.png')",
                            backgroundSize: "auto 100%",
                        }}
                    />

                    {/* Date Banner */}
                    <div className="w-full">
                        <div className="py-2 md:py-3 bg-[#40B0B0] flex flex-col sm:flex-row justify-center sm:justify-between items-center px-6 md:px-36 text-white text-sm md:text-base lg:text-xl font-semibold gap-2 sm:gap-0">
                            <span>Conference Day: Saturday</span>
                            <span>Date: 8<sup>th</sup> November, 2025</span>
                        </div>
                    </div>

                    {/* Lower Border */}
                    <div
                        className="w-full h-2 sm:h-4 md:h-6 lg:h-8"
                        style={{
                            backgroundImage: "url('/images/sec-2-upper-border-2.png')",
                            backgroundSize: "auto 100%",
                        }}
                    />
                </div>

                {/* Timeline header moved inside the timeline container below for connection */}

                {/* Unique Vertical Timeline */}
                <div className="w-full px-4 md:px-10 lg:px-24">
                    <div className="relative mx-auto max-w-5xl py-10 md:py-16">
                        {/* Timeline header inside container so the line can connect to it */}
                        <div className="mb-8 md:mb-10 text-center">
                            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#092E20] text-white text-sm md:text-base font-semibold shadow-sm">
                                <span>Conference Day Timeline</span>
                            </div>
                        </div>

                        {/* central vertical line spanning between header and footer note */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-[#092E20]/25 top-16 md:top-20 bottom-24 md:bottom-28" />

                        <ul className="space-y-10 md:space-y-16">
                            {scheduleRows.map((row, idx) => {
                                const isLeft = idx % 2 === 0;
                                const badge =
                                    row.type === 'keynote'
                                        ? 'bg-[#7A1F1F] text-white'
                                        : row.type === 'address'
                                        ? 'bg-[#0E3A5A] text-white'
                                        : row.type === 'lightning'
                                        ? 'bg-[#155E5E] text-white'
                                        : row.type === 'break'
                                        ? 'bg-[#5F4306] text-white'
                                        : row.type === 'networking'
                                        ? 'bg-[#1F4D1A] text-white'
                                        : 'bg-[#092E20] text-white';
                                const ring =
                                    row.type === 'keynote'
                                        ? 'ring-[#E57373]/30'
                                        : row.type === 'address'
                                        ? 'ring-[#5AA6D6]/30'
                                        : row.type === 'lightning'
                                        ? 'ring-[#40B0B0]/30'
                                        : row.type === 'break'
                                        ? 'ring-[#F3C34A]/40'
                                        : row.type === 'networking'
                                        ? 'ring-[#7AC66E]/40'
                                        : 'ring-[#092E20]/15';
                                return (
                                    <li key={`tl-${idx}`} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:items-center">
                                        {/* left card */}
                                        <div className={`md:flex ${isLeft ? 'justify-end' : 'opacity-0 md:pointer-events-none md:select-none'}`}>
                                            {isLeft && (
                                                <div className={`w-full max-w-md rounded-2xl bg-white/85 backdrop-blur border border-[#092E20]/15 shadow-md ring-2 ${ring} p-5 md:p-6`}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${badge}`}>{row.type}</span>
                                                        <div>
                                                            <div className="text-[#092E20] font-semibold">{row.time}</div>
                                                            <div className="mt-1">
                                                                <div className="text-[#1B1B1B] font-semibold text-base md:text-lg leading-snug">{row.title}</div>
                                                                {row.speaker && (
                                                                    <div className="text-[#1B1B1B] italic text-sm mt-0.5">{row.speaker}</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* center marker */}
                                        <div className="relative hidden md:flex justify-center items-center my-2 md:my-0">
                                            <div className="z-10 w-9 h-9 -mt-1">
                                                <Image src="/images/flower-bullets.png" alt="marker" width={36} height={36} className="w-9 h-9" />
                                            </div>
                                        </div>

                                        {/* right card */}
                                        <div className={`md:flex ${!isLeft ? 'justify-start' : 'opacity-0 md:pointer-events-none md:select-none'}`}>
                                            {!isLeft && (
                                                <div className={`w-full max-w-md rounded-2xl bg-white/85 backdrop-blur border border-[#092E20]/15 shadow-md ring-2 ${ring} p-5 md:p-6`}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${badge}`}>{row.type}</span>
                                                        <div>
                                                            <div className="text-[#092E20] font-semibold">{row.time}</div>
                                                            <div className="mt-1">
                                                                <div className="text-[#1B1B1B] font-semibold text-base md:text-lg leading-snug">{row.title}</div>
                                                                {row.speaker && (
                                                                    <div className="text-[#1B1B1B] italic text-sm mt-0.5">{row.speaker}</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Timeline footer note */}
                        <div className="mt-8 md:mt-12 text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[#092E20]/15 shadow-sm">
                                <span className="text-[#092E20] font-medium">Hope you have a good time.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactSection primaryColor="#ffd476" />
        </div>
    );
};

export default SchedulePage;
