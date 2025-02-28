"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Story = () => {
  return (
    <div className="min-h-screen bg-[#FEF6F3] flex flex-col font-sans">
      <header className="bg-[#C1E0C9] px-6 flex justify-between items-center py-4 md:py-0">
        <div className="flex items-center">
          <Link href="/home">
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
          <Link href="/home" scroll={false} className="text-[#14342B] text-lg">Home</Link>
          <a 
            href={process.env.NEXT_PUBLIC_REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#14342B] text-white px-6 py-3 rounded-md flex items-center gap-2 transition-all hover:bg-[#0a231c]"
          >
            Register <FaArrowRight />
          </a>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-6 py-14 md:py-18 flex items-start justify-start">
        <div className="flex flex-col items-start ">
        <h1 className="text-[#14342B] text-4xl sm:text-5xl md:text-6xl font-bold relative z-10">
          Complete Story
          <span className="absolute bottom-0 left-0 w-[99%] h-1 bg-[#C1E0C9] z-[-1]"></span>
        </h1>
        <p className="text-[#14342B] text-lg md:text-xl w-full md:w-3/4 py-4 leading-relaxed font-bold">
          By: The Django India Team
        </p>
        <p className="text-[#14342B] text-lg md:text-xl w-full md:w-3/4 py-6 leading-relaxed">
          When we started Django India, We had a simple vision: to create a space where Django developers across the country could connect, learn, and grow together. Despite Django being one of the most powerful and widely used web frameworks, India lacked a centralized community where developers—whether beginners or experienced professionals—could collaborate, share experiences, and contribute to Django&#39;s open-source ecosystem.
        </p>

        <p className="text-[#14342B] text-lg md:text-xl w-full md:w-3/4 py-4 leading-relaxed">
          The journey began in August 2024, when we <a href="https://www.linkedin.com/posts/devilsautumn_django-djangoindia-gsoc-activity-7229883635984654337-xw-A" target="_blank"><u>officially launched Django India</u></a> as an online community. The response was immediate—developers across different cities resonated with the idea. Soon after, we set up a <a href="https://www.linkedin.com/feed/update/urn:li:activity:7238534167351771137" target="_blank"><u>booth at FOSS India 2024</u></a> and then <a href="https://www.linkedin.com/feed/update/urn:li:activity:7243269511645126656" target="_blank"><u>PyCon India 2024</u></a>to introduce Django India to the broader open-source community. The event was a turning point. People from various backgrounds—students, professionals, and open-source contributors—came forward, expressing their interest in Django and the need for a strong community in India. This gave us the confidence to take Django India beyond just an online presence and into the real world with in-person meetups.
        </p>

        <h2 className="text-[#14342B] text-2xl md:text-3xl font-bold mt-8 mb-4">The First Meetups & Community Growth</h2>

        <p className="text-[#14342B] text-lg md:text-xl w-full md:w-3/4 py-4 leading-relaxed">
          The momentum built up quickly. We hosted our <a href="https://www.linkedin.com/feed/update/urn:li:activity:7253981171942862848" target="_blank"><u>first-ever Django India meetup</u></a> in Bengaluru at the Zelthy office in October 2024. The turnout exceeded expectations, and the discussions ranged from Django&#39;s core development to best practices, industry use cases, and real-world challenges faced by developers. The success of this event confirmed that the Django community in India was eager for more.
        </p>

        <p className="text-[#14342B] text-lg md:text-xl w-full md:w-3/4 py-4 leading-relaxed">
          From there, we expanded.In November 2024, We organized <a href="https://www.linkedin.com/feed/update/urn:li:activity:7263793986035691521" target="_blank"><u>Django India X PyDelhi meetup</u></a> in Gurugram, India in collaboration with PyDelhi Community.Then, In December 2024, we hosted <a href="https://www.linkedin.com/feed/update/urn:li:activity:7271154517658742784" target="_blank"><u>Django Decode meetup</u></a> in Pune, bringing together Django enthusiasts from Pune. This was followed by the <a href="https://www.linkedin.com/feed/update/urn:li:activity:7286387349419175937" target="_blank"><u>Django India Surat Meetup</u></a> in January 2025 and <a href="https://www.linkedin.com/feed/update/urn:li:activity:7294344083148263424" target="_blank"><u>Django India X Kolkata FOSS Meetup</u></a> in February 2025, each of them reinforcing the power of in-person community engagement.
        </p>

        <p className="text-[#14342B] text-lg md:text-xl w-full md:w-3/4 py-4 leading-relaxed">
          These meetups were not just about technical talks; they became platforms for mentorship, collaboration, and networking. Many attendees, especially students and early-career developers, got introduced to open-source contributions, Django&#39;s role in large-scale applications, and career opportunities in backend development.
        </p>

        <h2 className="text-[#14342B] text-2xl md:text-3xl font-bold mt-8 mb-4">Django Day India: A National-Level Celebration</h2>

        <p className="text-[#14342B] text-lg md:text-xl w-full md:w-3/4 py-4 leading-relaxed">
          With the rapid growth of Django India, we realized it was time to take things to the next level. The meetups were great, but we needed a larger event—something that could truly establish India as a significant hub for Django developers. That&#39;s when we conceptualized Django Day India.
        </p>

        <p className="text-[#14342B] text-lg md:text-xl w-full md:w-3/4 py-4 leading-relaxed">
          Django Day India isn&#39;t just another tech conference—it&#39;s a celebration of Django in India. It aims to bring together developers, contributors, industry professionals, and open-source advocates for a full day of learning, networking, and innovation. The event will feature expert talks, booths,panel discussions, and, most importantly, opportunities for attendees to get involved in Django&#39;s global ecosystem.
        </p>

        <h2 className="text-[#14342B] text-2xl md:text-3xl font-bold mt-8 mb-4">The Future of Django India</h2>

        <p className="text-[#14342B] text-lg md:text-xl w-full md:w-3/4 py-4 leading-relaxed">
          Django India is no longer just a community; it&#39;s an ecosystem. From open-source contributions to career guidance, from local meetups to a national conference, we are shaping how Django is perceived and adopted in India. The success of Django India has also put a spotlight on India&#39;s potential in the global Django ecosystem.
        </p>

        <p className="text-[#14342B] text-lg md:text-xl w-full md:w-3/4 py-4 leading-relaxed">
          The journey has just begun. With Django Day India, we are taking a big step towards making Django more accessible, inclusive, and widely adopted in India. We hope to see more contributors emerge from India, more companies adopting Django for their products, and a stronger presence in the global Django community.
        </p>

        <p className="text-[#14342B] text-lg md:text-xl w-full md:w-3/4 py-4 leading-relaxed font-bold">
          Django India started as an idea, but today, it&#39;s a movement. And this is just the beginning. 🚀
        </p>
        </div>
      </main>

      <footer className="container mx-auto px-6 py-6 border-t border-[#C1E0C9]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#14342B] mb-4 md:mb-0">Organized by <a href="https://djangoindia.org" target="_blank" rel="noopener noreferrer"><u>Django India Community</u></a></p>
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

export default Story;