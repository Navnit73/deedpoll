'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0b0c0c] text-white border-b-[6px] border-[#1d70b8] w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <svg className="w-7 h-7 text-[#ffdd00] fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tight hover:underline underline-offset-4 decoration-2">
            Deed Poll UK
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 font-bold text-sm">
          <Link href="/checklist" className="hover:text-blue-300 transition-colors">
            Checklist
          </Link>
          <Link href="/name-change-letters-generator" className="hover:text-blue-300 transition-colors">
            Letters Generator
          </Link>
          <Link href="/free-deed-poll-template-uk" className="hover:text-blue-300 transition-colors">
            Templates
          </Link>
          <Link href="/faq" className="hover:text-blue-300 transition-colors">
            FAQ
          </Link>
          
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="bg-[#00703c] hover:bg-[#005a30] text-white px-4 py-2 rounded font-bold text-sm transition-colors shadow-sm flex items-center gap-1.5"
          >
            <span>Create Free Deed Poll</span>
            <span className="text-[10px] bg-emerald-800 text-emerald-100 px-1.5 py-0.5 rounded font-extrabold uppercase">100% Free</span>
          </Link>
        </nav>

        {/* Medium Screen Menu (Tablets) */}
        <nav className="hidden md:flex lg:hidden items-center gap-4 font-bold text-sm">
          <Link href="/checklist" className="hover:text-blue-300">
            Checklist
          </Link>
          <Link href="/name-change-letters-generator" className="hover:text-blue-300">
            Letters
          </Link>
          <Link
            href="/change-name-in-uk-by-deedpoll"
            className="bg-[#00703c] hover:bg-[#005a30] text-white px-3 py-1.5 rounded font-bold text-xs"
          >
            Create Deed Poll
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-gray-300 p-1.5 rounded focus:outline-none focus:ring-2 focus:ring-[#ffdd00]"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#161718] border-t border-gray-800 px-4 py-5 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 font-bold text-base">
            <Link
              href="/change-name-in-uk-by-deedpoll"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#00703c] text-white text-center py-2.5 px-4 rounded-lg flex items-center justify-center gap-2"
            >
              <span>Create Free Deed Poll</span>
              <span className="text-[10px] bg-emerald-800 text-emerald-100 px-1.5 py-0.5 rounded font-extrabold">FREE</span>
            </Link>
            <Link
              href="/name-change-letters-generator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-blue-300 py-1.5 border-b border-gray-800"
            >
              ✉️ Name Change Letters Generator
            </Link>
            <Link
              href="/checklist"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-blue-300 py-1.5 border-b border-gray-800"
            >
              📋 Name Change Checklist
            </Link>
            <Link
              href="/free-deed-poll-template-uk"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-blue-300 py-1.5 border-b border-gray-800"
            >
              📄 Free Deed Poll Template (Word/PDF)
            </Link>
            <Link
              href="/child-deed-poll-uk"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-blue-300 py-1.5 border-b border-gray-800"
            >
              👶 Child Deed Poll & Consent Guide
            </Link>
            <Link
              href="/change-name-on-driving-licence-dvla-uk"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-blue-300 py-1.5 border-b border-gray-800"
            >
              🚗 DVLA Driving Licence Name Change
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-blue-300 py-1.5"
            >
              ❓ Frequently Asked Questions
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
