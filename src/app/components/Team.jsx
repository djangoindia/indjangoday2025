"use client";

import React from 'react';
import Image from 'next/image';
import { FaDiscord, FaLinkedinIn, FaTwitter, FaYoutube, FaGlobe } from 'react-icons/fa';
import ContactSection from './Footers';

// Helper function to convert name to image path
const getImagePath = (name, extension = 'jpg') => {
    if (!name) return '';
    return `/images/${name.toLowerCase().replace(/\s+/g, '_')}.${extension}`;
};

// Helper function to clean and format URLs
const cleanUrl = (url, isLinkedIn = false, isWebsite = false) => {
    if (!url || url === '' || url === 'No' || url === 'Not have atm') return '';
    
    // For LinkedIn, add https:// if missing
    if (isLinkedIn && !url.startsWith('http')) {
        if (url.startsWith('www.')) {
            return `https://${url}`;
        } else if (url.startsWith('linkedin.com')) {
            return `https://${url}`;
        } else {
            return `https://www.${url}`;
        }
    }
    
    // For website, add https:// if it's just a domain
    if (isWebsite && !url.startsWith('http') && url.includes('.')) {
        return `https://${url}`;
    }
    
    return url;
};

const teamCategories = [
    {
        name: 'Program Committee',
        members: [
            {
                name: 'Apoorv Garg',
                role: '',
                id: 'program-committee-0',
                image: getImagePath('Apoorv Garg'),
                links: {
                    discord: '',
                    linkedin: cleanUrl('https://www.linkedin.com/in/apoorv-garg-/', true),
                    twitter: '',
                    youtube: '',
                    website: '',
                },
            },
            {
                name: 'Kuldeep Pisda',
                role: '',
                id: 'program-committee-1',
                image: getImagePath('Kuldeep Pisda'),
                links: {
                    discord: '',
                    linkedin: cleanUrl('https://www.linkedin.com/in/kuldeep-pisda/', true),
                    twitter: cleanUrl('https://x.com/kdpisda'),
                    youtube: cleanUrl('https://www.youtube.com/@kdpisda'),
                    website: cleanUrl('https://kdpisda.in', false, true),
                },
            },
            {
                name: 'Yash Raj',
                role: '',
                id: 'program-committee-3',
                image: getImagePath('Yash Raj'),
                links: {
                    discord: '',
                    linkedin: cleanUrl('https://www.linkedin.com/in/yash-raj-83933922a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', true),
                    twitter: cleanUrl('https://x.com/Yash44207966?t=w-NZlDHJ9qgvTVODAt1hBQ&s=09'),
                    youtube: '',
                    website: '',
                },
            },
        ],
    },
    {
        name: 'Sponsorship',
        members: [
            {
                name: 'Bhuvnesh Sharma',
                role: '',
                id: 'sponsorship-0',
                image: getImagePath('Bhuvnesh Sharma', 'jpeg'),
                links: {
                    discord: '',
                    linkedin: cleanUrl('https://www.linkedin.com/in/devilsautumn', true),
                    twitter: cleanUrl('https://x.com/DevilsAutumn_', true),
                    youtube: '',
                    website: '',
                }
            }
        ],
    },
    {
        name: 'Design and Website',
        members: [
            {
                name: 'Akash Chaudhary',
                role: '',
                id: 'design-and-website-0',
                image: getImagePath('Akash Chaudhary'),
                links: {
                    discord: '',
                    linkedin: cleanUrl('https://www.linkedin.com/in/akash-chaudhary1808', true),
                    twitter: cleanUrl('https://x.com/AkashChaud6609'),
                    youtube: '',
                    website: '',
                },
            },
            {
                name: 'Rajan Jasani',
                role: '',
                id: 'design-and-website-1',
                image: getImagePath('Rajan Jasani'), 
                links: {
                    linkedin: cleanUrl('https://www.linkedin.com/in/rajanjasani', true),
                    twitter: '',
                    youtube: '',
                    website: 'https://rajanjasani.vercel.app',
                },
            },
        ],
    },
    {
        name: 'Social Media',
        members: [
            {
                name: 'Anshika Gupta',
                role: '',
                id: 'social-media-0',
                image: getImagePath('Anshika Gupta'),
                links: {
                    discord: '',
                    linkedin: cleanUrl('https://www.linkedin.com/in/anshika22?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', true),
                    twitter: cleanUrl('https://x.com/Anshika_770?t=Vtd-gCIqOzqU9E6uQd0zxg&s=09'),
                    youtube: '',
                    website: '',
                },
            },
            {
                name: 'Prakhar Mehrotra',
                role: '',
                id: 'social-media-1',
                image: getImagePath('Prakhar Mehrotra', 'png'),
                links: {
                    discord: 'prakkharn03',
                    linkedin: cleanUrl('www.linkedin.com/in/prakkharmehrotra', true),
                    twitter: cleanUrl('https://x.com/PrakkharN'),
                    youtube: '',
                    website: '',
                },
            },
        ],
    },
    {
        name: 'Community Partners',
        members: [
            {
                name: 'Utkarsh Upadhyay',
                role: '',
                id: 'community-partners-0',
                image: getImagePath('Utkarsh Upadhyay'),
                links: {
                    discord: '',
                    linkedin: cleanUrl('linkedin.com/in/utk2103', true),
                    twitter: cleanUrl('https://x.com/utk2103'),
                    youtube: '',
                    website: cleanUrl('Utkarshh.tech', false, true),
                },
            },
            {
                name: 'Anurag Yadav',
                role: '',
                id: 'community-partners-1',
                image: getImagePath('Anurag Yadav'),
                links: {
                    discord: '',
                    linkedin: cleanUrl('https://www.linkedin.com/in/yadavanurag13/', true),
                    twitter: cleanUrl('https://x.com/codeStunners'),
                    youtube: '',
                    website: '',
                },
            },
        ],
    },
    {
        name: 'Logistics',
        members: [
            {
                name: 'Tiyasha Banerjee',
                role: '',
                id: 'logistics-0',
                image: getImagePath('Tiyasha Banerjee'),
                links: {
                    discord: '',
                    linkedin: cleanUrl('https://www.linkedin.com/in/tiyasha-banerjee-06?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', true),
                    twitter: cleanUrl('https://x.com/TiyashaB06?t=C9SmranBr5QrZTduhjUSMw&s=09'),
                    youtube: '',
                    website: '',
                },
            },
            {
                name: 'Daksh Jain',
                role: '',
                id: 'logistics-1',
                image: getImagePath('Daksh Jain', 'png'),
                links: {
                    discord: '',
                    linkedin: cleanUrl('https://linkedin.com/in/daksh777', true),
                    twitter: cleanUrl('https://x.com/0xDPJ'),
                    youtube: '',
                    website: '',
                },
            },
        ],
    },
];

function MemberCard({ name, role, links, image }) {
    return (
        <div className="flex flex-col">
            {/* Photo area with overlapping socials */}
            <div className="relative rounded-[20px]">
                <div className="h-40 md:h-44 lg:h-48 rounded-[20px] overflow-hidden flex items-center justify-center bg-white shadow">
                    {image ? (
                        <Image
                            src={image}
                            alt={`${name} photo`}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover  border-[#0e6e6c] border-2 rounded-[20px]"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#94a3b8]">Image</div>
                    )}
                </div>

                {/* Social row (overlapping the bottom edge) */}
                <div className="absolute -bottom-5 left-3 flex items-center gap-3">
                    {[
                        { icon: FaDiscord, href: links && links.discord && links.discord.startsWith('http') ? links.discord : null },
                        { icon: FaLinkedinIn, href: links && links.linkedin },
                        { icon: FaTwitter, href: links && links.twitter },
                        { icon: FaYoutube, href: links && links.youtube },
                        { icon: FaGlobe, href: links && links.website },
                    ]
                        .filter((item) => !!item.href)
                        .map((item, idx) => (
                            <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 grid place-items-center rounded-full border border-[#0e6e6c] text-[#0e6e6c] bg-white hover:bg-[#0e6e6c] hover:text-white transition-colors shadow">
                                <item.icon size={16} />
                            </a>
                        ))}
                </div>
            </div>

            {/* Name and role */}
            <div className="flex items-center justify-between mt-6">
                <span className="text-xl text-black font-serif">{name}</span>
                <span className="text-[#158b8b]">{role}</span>
            </div>
        </div>
    );
}

export default function Team() {
    return (
        <div className="bg-[#fffbf1]">
            {/* Hero Section */}
            <div className="bg-[#158b8b] flex flex-col justify-between overflow-hidden h-[90vh]">
                <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-4 md:px-24 gap-4 md:gap-8 min-h-0 py-8 md:py-0">
                    <div className="relative z-10">
                        <h1 className="font-serif text-white text-3xl md:text-5xl lg:text-6xl leading-tight">
                            How It All Began
                        </h1>
                        <p className="mt-4 text-white text-base md:text-lg max-w-xl">
                            All About Django Day India
                        </p>
                        <p className="mt-4 text-white/90 text-sm md:text-base max-w-2xl">
                            Django Day India is volunteer-driven, and each year we seek passionate volunteers whose
                            efforts ensure the conference’s success.
                        </p>
                    </div>

                    {/* Hero Illustration */}
                    <div className="relative flex items-center justify-center w-full md:w-auto">
                        {/* Kites positioned on top right corner */}
                        <div className="absolute -top-8 -right-8 md:-top-12 md:-right-12 z-20 flex gap-2">
                            <Image
                                src="/images/greenkite.png"
                                alt="Green Kite"
                                width={60}
                                height={60}
                                className="object-contain drop-shadow-lg"
                            />
                            <Image
                                src="/images/Red Kite.png"
                                alt="Red Kite"
                                width={60}
                                height={60}
                                className="object-contain drop-shadow-lg"
                            />
                        </div>
                        <Image
                            src="/images/MentorTeamheropage.png"
                            alt="Code of Conduct Hero"
                            width={200}
                            height={200}
                            className="object-contain relative z-10"
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

            {/* Team Section */}
            <section className="relative flex flex-col md:flex-row items-start justify-center px-6 md:px-20 py-12 overflow-y-auto min-h-screen">
                <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-10 md:py-16 w-full">
                    <h2 className="font-serif text-2xl md:text-4xl text-[#14342B] mb-12">The Team</h2>

                    <div className="space-y-16">
                        {teamCategories.map((category) => (
                            <div key={category.name} className="space-y-6">
                                <h3 className="font-serif text-xl md:text-2xl text-[#158b8b] border-b-2 border-[#158b8b] pb-2">
                                    {category.name}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {category.members.map((member) => (
                                        <MemberCard key={member.id} name={member.name} role={member.role} links={member.links} image={member.image} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <ContactSection />
        </div>
    );
};
