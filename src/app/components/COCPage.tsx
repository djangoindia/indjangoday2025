"use client";

import React from "react";
import Image from "next/image";
import ContactSection from "./Footers";

const COCPage = () => {
    return (
        <div className="bg-[#fffbf1]">
            {/* Hero Section */}
            <div className="bg-[#158b8b] flex flex-col justify-between overflow-hidden h-[90vh]">
                <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-4 md:px-24 gap-4 md:gap-8 min-h-0 py-8 md:py-0">
                    <div className="flex flex-col items-center md:items-start w-full md:pl-12 max-w-4xl text-center md:text-left">
                        <div className="flex flex-row justify-center md:justify-start w-full">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4 text-white leading-tight">
                                Code Of Conduct
                            </h1>
                        </div>
                        <p className="font-serif text-sm md:text-xl text-white mb-1 leading-snug">
                            Refer to our Code of Conduct (CoC) Transparency Report for Django
                            Day India 2025 to understand how we uphold community standards.
                            Transparency and accountability are vital to fostering an
                            inclusive environment, and your feedback is invaluable for our
                            continuous improvement.
                        </p>
                    </div>

                    {/* Hero Illustration */}
                    <div className="flex items-center justify-center w-full md:w-auto">
                        <Image
                            src="/images/CodeOfConductHero.png"
                            alt="Code of Conduct Hero"
                            width={600}
                            height={600}
                            className="w-[250px] md:w-[400px] lg:w-[600px] object-contain"
                        />
                    </div>
                </div>


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
                    <div className="py-2 md:py-3 bg-[#4b8b8b] flex flex-col sm:flex-row justify-center sm:justify-between items-center px-6 md:px-36 text-white text-sm md:text-base lg:text-xl font-semibold gap-2 sm:gap-0">
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

            {/* Code of Conduct Section */}
            {/* Code of Conduct Section */}
            <section className="relative flex flex-col md:flex-row items-start justify-center px-6 md:px-20 py-12 overflow-y-auto min-h-screen">
                {/* Text Content */}
                <div className="w-full md:w-2/3 lg:w-1/2 pr-0 md:pr-16 space-y-6 font-serif text-gray-800 leading-relaxed z-10">
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-[#158b8b]">Purpose</h2>
                        <p>
                            Django Day India 2025 is committed to providing a safe, welcoming,
                            and inclusive environment for all participants, regardless of gender,
                            sexual orientation, disability, physical appearance, race, religion,
                            or background.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-[#158b8b]">Expected Behavior</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Be respectful and considerate in speech and actions.</li>
                            <li>Listen actively and value differing perspectives.</li>
                            <li>Use inclusive language and avoid demeaning comments or jokes.</li>
                            <li>Comply with event rules, staff instructions, and venue guidelines.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-[#158b8b]">Unacceptable Behavior</h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Harassment, intimidation, or discrimination in any form.</li>
                            <li>Unwelcome sexual attention or inappropriate physical contact.</li>
                            <li>Disruptive, disrespectful, or aggressive behavior.</li>
                            <li>Sharing others’ private information without consent.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-[#158b8b]">Reporting Incidents</h2>
                        <p>
                            If you experience or witness any misconduct, please contact the CoC team immediately at{" "}
                            <a href="mailto:coc@djangoday.in" className="text-[#158b8b] underline">
                                coc@djangoday.in
                            </a>{" "}
                            or speak with an event organizer onsite. All reports will be handled discreetly and confidentially.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-[#158b8b]">Consequences</h2>
                        <p>
                            Participants found violating the Code of Conduct may be warned, removed from the event,
                            or banned from future Django Day events at the discretion of the organizing committee.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-[#158b8b]">Acknowledgement</h2>
                        <p>
                            By attending Django Day India 2025, you agree to abide by this Code of Conduct
                            and contribute to a positive community experience.
                        </p>
                        <p className="text-sm italic text-gray-600 mt-8">
                            *This Code of Conduct is inspired by the PyCon India 2025 Code of Conduct.*
                        </p>

                    </div>
                </div>

                {/* Right-side Decorative Image */}
                <div className="hidden md:flex justify-end items-center md:w-1/3 lg:w-1/2">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                        <Image
                            src="/images/CodeofConductdesign.png"
                            alt="Code of Conduct Design"
                            width={300}
                            height={300}
                            className="object-contain opacity-90"
                        />
                    </div>
                </div>
            </section>


            <ContactSection />
        </div>
    );
};

export default COCPage;
