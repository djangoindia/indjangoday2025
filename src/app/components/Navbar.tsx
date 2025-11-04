'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Schedule', href: '/schedule' },
  // { label: 'Venue', href: '/venue' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'CoC', href: '/coc' },
];


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ease-in-out hidden lg:flex ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-safari shadow-2xl' 
            : 'bg-neutral-900/95 backdrop-blur-safari shadow-lg'
        } text-white rounded-full px-6 xl:px-8 py-3 gap-6 xl:gap-8 items-center`}
        style={{ minWidth: 'fit-content', maxWidth: '90vw' }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (item.href === '/' && pathname === '/');
          return (
            <Link href={item.href} key={item.label} legacyBehavior>
              <a
                className={`group flex items-center gap-1 text-sm xl:text-base font-medium cursor-pointer transition-all duration-200 hover:scale-105 ${
                  isActive ? 'text-yellow-400' : ''
                }`}
              >
                <span className="transition-colors duration-200">{item.label}</span>
              </a>
            </Link>
          );
        })}
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-4 right-4 z-50 lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className={`p-3 rounded-full transition-all duration-300 ${
            isScrolled || isMobileMenuOpen
              ? 'bg-black/90 backdrop-blur-safari shadow-2xl'
              : 'bg-neutral-900/95 backdrop-blur-safari shadow-lg'
          } text-white`}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
          >
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 right-0 bg-black/95 backdrop-blur-safari rounded-2xl shadow-2xl p-4 min-w-[200px]">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href === '/' && pathname === '/');
              return (
                <Link href={item.href} key={item.label} legacyBehavior>
                  <a
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-white/10 ${
                      isActive ? 'text-yellow-400' : 'text-white'
                    }`}
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                  </a>
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
}
