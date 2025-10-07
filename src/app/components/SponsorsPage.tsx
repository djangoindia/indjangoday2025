"use client";

import React from 'react';
import Image from 'next/image';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import ContactSection from './Footers';
import Button from './Button';

const SponsorsPage = () => {
    return (
        <div className="bg-[#fffbf1]">
            {/* Hero Section */}
            <div className="bg-[#158b8b] flex flex-col justify-between overflow-hidden h-[90vh]">
                <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-4 md:px-24 gap-4 md:gap-8 min-h-0 py-8 md:py-0">
                    {/* Sponsor Illustration - Now visible on mobile too */}
                    <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
                        <div className="flex items-center">
                            <Image
                                src="/images/sponsor-illustration.png"
                                alt="Sponsors Illustration"
                                width={600}
                                height={600}
                                className="w-[250px] md:w-[400px] lg:w-[600px] object-contain"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-start w-full md:pl-12 max-w-4xl">
                        <div className='flex flex-row justify-start md:justify-end w-full'>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-2 md:mb-4 text-white leading-tight md:text-right">
                                Opportunities for Sponsors
                            </h1>
                        </div>
                        <div className='flex flex-row justify-start md:justify-end w-full'>
                            <p className="font-serif text-sm md:text-xl text-white mb-1 md:mb-2 leading-snug md:text-right">
                                Django Day India 2025 – Join the Celebration of the Django Community!
                            </p>
                        </div>
                        <div className='flex flex-row justify-start md:justify-end w-full'>
                            <Button
                                size="md"
                                className="bg-white text-[#095148] font-medium text-sm py-2 px-5"
                                onClick={() => {
                                if (process.env.NEXT_PUBLIC_PROSPECTUS_URL) {
                                    window.open(process.env.NEXT_PUBLIC_PROSPECTUS_URL, '_blank', 'noopener,noreferrer');
                                }
                                }}
                            >
                                <span>Download Prospectus</span>
                                <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:translate-x-1">
                                <FaRegArrowAltCircleRight />
                                </span>
                            </Button>
                        </div>
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

            {/* Introduction Text - Left Aligned */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-24">
                <div className="max-w-3xl">
                    <p className="font-serif text-base md:text-lg lg:text-xl mb-6 text-[#222] leading-relaxed">
                        Django Day India is back, bringing together developers, enthusiasts, and contributors from across the country to learn, share, and grow. It&apos;s not just a conference—it&apos;s a community-driven space where ideas turn into collaborations and friendships.
                    </p>
                    <p className="font-serif text-base md:text-lg lg:text-xl mb-6 text-[#222] leading-relaxed">
                        This event is made possible by our amazing sponsors and partners who support the Django community in India. Your sponsorship doesn&apos;t just power the event—it fuels the growth of the Django ecosystem and strengthens the network of developers who use it every day. As one of the largest Django gatherings in India, Django Day offers sponsors the chance to connect directly with passionate developers, rising talent, and potential collaborators. It&apos;s an opportunity to showcase your brand, engage with a diverse and skilled audience, and become part of the story of Django in India.
                    </p>
                    <p className="font-serif text-base md:text-lg lg:text-xl mb-6 text-[#222] leading-relaxed">
                        Explore our sponsorship benefits and discover how you can make an impact on the Django community while gaining visibility, connections, and goodwill that extend far beyond the conference.
                    </p>
                </div>
            </div>

            {/* Benefits Section - Scaled uniformly across all devices */}

            <div className="w-full py-8 md:py-16 mb-16 px-4 md:px-0 flex flex-row justify-end overflow-hidden">

                <div className="bg-white relative overflow-visible flex flex-col justify-start items-center py-4 border-[5px] border-[#a31955] rounded-[25px] h-[80%] w-full sm:w-[80%] right-[-10%] sm:right-[-10%] md:right-[-7%] lg:right-[-7%]">

                    {/* Top Left Border Decor */}
                    <Image
                        src="/images/border-decor.png"
                        alt="Border Decor"
                        width={224}
                        height={224}
                        className="absolute -top-20 -left-20 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 pointer-events-none select-none z-10"
                        style={{ objectFit: 'contain' }}
                    />

                    {/* Bottom Left Border Decor */}
                    <Image
                        src="/images/palesi.png"
                        alt="Palesi Decor"
                        width={144}
                        height={144}
                        className="hidden lg:block absolute bottom-8 left-8 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 pointer-events-none select-none z-10"
                        style={{ objectFit: 'contain' }}
                    />

                    {/* Content Overlay - scales proportionally with image */}
                    <div className="relative flex flex-col justify-center items-center py-[6%] md:py-[8%] border-[5px] border-[#f5c445] rounded-[25px] w-[100%] right-[-2%] ">

                        <div className='relative right-[5%] flex flex-col justify-start items-center'>

                            <h2 className="w-[80%] font-serif text-base md:text-lg lg:text-xl font-bold mb-[3%] md:mb-[4%] text-[#222] text-center leading-tight">
                                What You Gain by Sponsoring Django Day India:
                            </h2>

                            <ul className="space-y-[2%] md:space-y-[2.5%] lg:space-y-[3%] w-full max-w-[85%] md:max-w-3xl sm:w-[80%]">
                                <li className="flex items-start gap-[1.5%] md:gap-[2%]">
                                    <Image
                                        src="/images/flower-bullets.png"
                                        alt="Bullet"
                                        width={24}
                                        height={24}
                                        className="w-[3vw] h-[3vw] sm:w-[2.5vw] sm:h-[2.5vw] md:w-5 md:h-5 lg:w-6 lg:h-6 mt-[0.3vw] md:mt-1 shrink-0"
                                    />
                                    <span className="font-serif text-base md:text-lg lg:text-xl text-[#222] leading-relaxed">
                                        <strong>Visibility</strong> – Showcase your brand to a diverse audience of Django developers, tech professionals, and enthusiasts from across India.
                                    </span>
                                </li>
                                <li className="flex items-start gap-[1.5%] md:gap-[2%]">
                                    <Image
                                        src="/images/flower-bullets.png"
                                        alt="Bullet"
                                        width={24}
                                        height={24}
                                        className="w-[3vw] h-[3vw] sm:w-[2.5vw] sm:h-[2.5vw] md:w-5 md:h-5 lg:w-6 lg:h-6 mt-[0.3vw] md:mt-1 shrink-0"
                                    />
                                    <span className="font-serif text-base md:text-lg lg:text-xl text-[#222] leading-relaxed">
                                        <strong>Credibility</strong> – Align with one of the most recognized and community-driven Django events in the country, strengthening your brand within the developer ecosystem.
                                    </span>
                                </li>
                                <li className="flex items-start gap-[1.5%] md:gap-[2%]">
                                    <Image
                                        src="/images/flower-bullets.png"
                                        alt="Bullet"
                                        width={24}
                                        height={24}
                                        className="w-[3vw] h-[3vw] sm:w-[2.5vw] sm:h-[2.5vw] md:w-5 md:h-5 lg:w-6 lg:h-6 mt-[0.3vw] md:mt-1 shrink-0"
                                    />
                                    <span className="font-serif text-base md:text-lg lg:text-xl text-[#222] leading-relaxed">
                                        <strong>Connections</strong> – Engage directly with attendees, share your products or services, and build meaningful relationships with potential customers and collaborators.
                                    </span>
                                </li>
                                <li className="flex items-start gap-[1.5%] md:gap-[2%]">
                                    <Image
                                        src="/images/flower-bullets.png"
                                        alt="Bullet"
                                        width={24}
                                        height={24}
                                        className="w-[3vw] h-[3vw] sm:w-[2.5vw] sm:h-[2.5vw] md:w-5 md:h-5 lg:w-6 lg:h-6 mt-[0.3vw] md:mt-1 shrink-0"
                                    />
                                    <span className="font-serif text-base md:text-lg lg:text-xl text-[#222] leading-relaxed">
                                        <strong>Talent Access</strong> – Meet skilled developers and rising talent—an excellent opportunity if you&apos;re looking to hire or grow your tech team.
                                    </span>
                                </li>
                                <li className="flex items-start gap-[1.5%] md:gap-[2%]">
                                    <Image
                                        src="/images/flower-bullets.png"
                                        alt="Bullet"
                                        width={24}
                                        height={24}
                                        className="w-[3vw] h-[3vw] sm:w-[2.5vw] sm:h-[2.5vw] md:w-5 md:h-5 lg:w-6 lg:h-6 mt-[0.3vw] md:mt-1 shrink-0"
                                    />
                                    <span className="font-serif text-base md:text-lg lg:text-xl text-[#222] leading-relaxed">
                                        <strong>Extended Impact</strong> – Your support goes beyond the event, contributing to the long-term growth of the Django community in India while keeping your brand presence alive even after the conference.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>

            <ContactSection />
        </div>
    );
};

export default SponsorsPage;