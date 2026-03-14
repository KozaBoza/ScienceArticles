"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

export default function Navigation() {
  const [isSensoryTheme, setIsSensoryTheme] = useState(false);

  const toggleTheme = () => {
    setIsSensoryTheme(!isSensoryTheme);
  };

  useEffect(() => {
    if (isSensoryTheme) {
      document.documentElement.classList.add('theme-sensory');
    } else {
      document.documentElement.classList.remove('theme-sensory');
    }
  }, [isSensoryTheme]);

  return (
    <header className="w-full max-w-6xl mx-auto px-8 py-10 flex justify-between items-center text-[10px] tracking-[0.2em] uppercase font-medium z-50 bg-[var(--color-bg)] text-[var(--color-primary)] transition-colors duration-500 relative">
      
      {/* LEWA STRONA (Home, Articles, About) */}
      <div className="flex gap-10 items-center w-1/3">
        <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
        
        {/* DROPDOWN: ARTICLES */}
        <div className="relative group py-4">
          <span className="cursor-pointer hover:opacity-70 transition-opacity">Articles</span>
          
          {/* Animowany, lewitujący panel (bez tła) */}
          <div className="absolute top-full left-0 pt-4 w-[240px] opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-400 ease-out z-50 flex flex-col gap-2">
            
            {/* Wyszukiwarka z własnym tłem, żeby nie prześwitywała */}
            <div className="border border-[var(--color-primary)] bg-[var(--color-bg)] rounded-full px-4 py-2.5 flex items-center mb-2 shadow-sm transition-colors duration-500">
              <Search size={16} className="text-[var(--color-primary)] mr-3" />
              <input 
                type="text" 
                placeholder="SEARCH..." 
                className="bg-transparent outline-none w-full text-[10px] tracking-[0.2em] placeholder:text-[var(--color-primary)]/50" 
              />
            </div>
            
            {/* Lewitujące, węższe przyciski z animacją hover */}
            <Link href="/latest" className="bg-[var(--color-primary)] text-[var(--color-bg)] px-6 py-2.5 hover:scale-[1.02] hover:opacity-90 shadow-sm transition-all duration-300">
              Latest
            </Link>
            <Link href="/archives" className="bg-[var(--color-primary)] text-[var(--color-bg)] px-6 py-2.5 hover:scale-[1.02] hover:opacity-90 shadow-sm transition-all duration-300">
              Years
            </Link>
          </div>
        </div>

        {/* DROPDOWN: ABOUT */}
        <div className="relative group py-4">
          <span className="cursor-pointer hover:opacity-70 transition-opacity">About</span>
          
          <div className="absolute top-full left-0 pt-4 w-[240px] opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-400 ease-out z-50 flex flex-col gap-2">
            <Link href="/about" className="bg-[var(--color-primary)] text-[var(--color-bg)] px-6 py-2.5 hover:scale-[1.02] hover:opacity-90 shadow-sm transition-all duration-300">
              About The Magazine
            </Link>
            <Link href="/editorial-board" className="bg-[var(--color-primary)] text-[var(--color-bg)] px-6 py-2.5 hover:scale-[1.02] hover:opacity-90 shadow-sm transition-all duration-300">
              Editorial
            </Link>
          </div>
        </div>
      </div>

      {/* ŚRODEK (Review) */}
      <div className="w-1/3 flex justify-center items-center">
        {/* DROPDOWN: REVIEW */}
        <div className="relative group py-4">
          <span className="cursor-pointer hover:opacity-70 transition-opacity">Review</span>
          
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[240px] opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-400 ease-out z-50 flex flex-col gap-2 text-center">
            <Link href="/reviews" className="bg-[var(--color-primary)] text-[var(--color-bg)] px-6 py-2.5 hover:scale-[1.02] hover:opacity-90 shadow-sm transition-all duration-300">
              Reviews
            </Link>
            <Link href="/reviewers" className="bg-[var(--color-primary)] text-[var(--color-bg)] px-6 py-2.5 hover:scale-[1.02] hover:opacity-90 shadow-sm transition-all duration-300">
              Reviewers
            </Link>
            <Link href="/review-process" className="bg-[var(--color-primary)] text-[var(--color-bg)] px-6 py-2.5 hover:scale-[1.02] hover:opacity-90 shadow-sm transition-all duration-300">
              About The Process
            </Link>
          </div>
        </div>
      </div>

      {/* PRAWA STRONA (Kropki) */}
      <div className="flex gap-8 items-center w-1/3 justify-end">
        <div className="flex gap-3">
          <Link href="/admin/login" aria-label="Admin Panel">
            <div className="w-5 h-5 rounded-full bg-[var(--color-primary)] hover:opacity-70 transition-colors duration-500 shadow-sm"></div>
          </Link>
          <button onClick={toggleTheme} aria-label="Toggle Theme" type="button" className="focus:outline-none">
            <div className="w-5 h-5 rounded-full bg-[var(--color-secondary)] hover:opacity-70 transition-colors duration-500 shadow-sm"></div>
          </button>
        </div>
      </div>

    </header>
  );
}