"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: '// home', path: '#home', number: '01', section: 'home' },
  { name: '// expertise', path: '#expertise', number: '02', section: 'expertise' },
  { name: '// work', path: '#work', number: '03', section: 'work' },
  { name: '// experience', path: '#experience', number: '04', section: 'experience' },
  { name: '// contact', path: '#contact', number: '05', section: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const observer = useRef(null);

  useEffect(() => {
    const sectionIds = navItems
      .filter(item => item.path.startsWith('#'))
      .map(item => item.section);
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    if (observer.current) observer.current.disconnect();
    observer.current = new window.IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );
    sections.forEach(section => {
      if (section) observer.current.observe(section);
    });
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  // Smooth scroll for anchor links
  const handleNavClick = (e, path) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const id = path.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              AP .&gt;
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1">
            <div className="flex items-center justify-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={e => handleNavClick(e, item.path)}
                  className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors group relative ${activeSection === item.section ? 'text-white underline underline-offset-8 decoration-2' : ''}`}
                >
                  <span className={`${activeSection === item.section ? 'text-white' : ""} absolute -top-2 -right-2 text-[8px] text-gray-400 group-hover:text-gray-300 transition-colors`}>
                    {item.number}
                  </span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="md:hidden fixed top-16 right-0 w-64 h-screen bg-black/90 backdrop-blur-md"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={e => handleNavClick(e, item.path)}
                  className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium relative group ${activeSection === item.section ? 'text-white underline underline-offset-8 decoration-2' : ''}`}
                >
                  <span className="absolute -top-2 -right-2 text-[8px] text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.number}
                  </span>
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 