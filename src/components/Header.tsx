'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0b0c0c] text-white border-b-[8px] border-[#1d70b8] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Simple Government-style Icon Placeholder */}
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <Link href="/" className="text-2xl font-bold tracking-tight hover:underline underline-offset-4 decoration-2 px-1">
            Deed Poll UK
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 font-bold text-sm">
          <Link href="/before-you-start" className="hover:underline underline-offset-4 decoration-2 px-1">Before you start</Link>
          <Link href="/faq" className="hover:underline underline-offset-4 decoration-2 px-1">FAQ</Link>
          <Link href="/change-name-in-uk-by-deedpoll" className="hover:underline underline-offset-4 decoration-2 px-1">Create Deed Poll</Link>
        </nav>
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-gray-300 p-1"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open menu</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0b0c0c] border-t border-gray-700">
          <nav className="flex flex-col px-4 py-4 space-y-4 font-bold">
            <Link href="/before-you-start" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline underline-offset-4 decoration-2 w-max px-1">Before you start</Link>
            <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline underline-offset-4 decoration-2 w-max px-1">FAQ</Link>
            <Link href="/change-name-in-uk-by-deedpoll" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline underline-offset-4 decoration-2 w-max px-1">Create Deed Poll</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
