"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Eye, Filter, ArrowDownWideNarrow } from 'lucide-react';

const ARTICLES_DB = [
  {
    id: 1,
    title: "Quantum Entanglement in Macroscopic Systems",
    authors: "Dr. Alan Turing, Sarah Connor",
    date: "2026-03-15",
    year: 2026,
    pages: "12-28",
    category: "Computer Science",
    description: "This paper explores the theoretical boundaries of quantum entanglement when applied to macroscopic physical systems, challenging traditional thermodynamic models.",
    views: 1240,
    imageUrl: "", //url na zdj
    pdfUrl: "/sample-article.pdf"
  },
  {
    id: 2,
    title: "Non-Euclidean Geometry in Modern Physics",
    authors: "Prof. Albert Einstein",
    date: "2026-02-10",
    year: 2026,
    pages: "45-60",
    category: "Mathematics",
    description: "A comprehensive review of how non-Euclidean geometric models are currently utilized to map gravitational waves in deep space anomalies.",
    views: 890,
    imageUrl: "",
    pdfUrl: "/sample-article.pdf"
  },
  {
    id: 3,
    title: "Cognitive Load Theory in Digital Learning Environments",
    authors: "Dr. Maria Montessori",
    date: "2025-11-05",
    year: 2025,
    pages: "01-11",
    category: "Education",
    description: "An empirical study measuring the cognitive exhaustion of students exposed to highly interactive digital interfaces compared to traditional brutalist web design.",
    views: 3420,
    imageUrl: "",
    pdfUrl: "/sample-article.pdf"
  },
  {
    id: 4,
    title: "Algorithmic Bias in Neural Networks",
    authors: "Ada Lovelace",
    date: "2025-08-20",
    year: 2025,
    pages: "112-130",
    category: "Computer Science",
    description: "Investigating the unintended sociological biases encoded within deep learning models trained on publicly available historical datasets.",
    views: 2100,
    imageUrl: "",
    pdfUrl: "/sample-article.pdf"
  }
];

const CATEGORIES = ["Mathematics", "Computer Science", "Education", "Popular Science"];
const YEARS = [2026, 2025, 2024];

export default function ArticlesSearchPage() {
  // STANY FORMULARZA I FILTRÓW
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [sortByLatest, setSortByLatest] = useState(true);

  // LOGIKA ZAZNACZANIA FILTRÓW
  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleYear = (year: number) => {
    setSelectedYears(prev => 
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };

  const filteredArticles = useMemo(() => {
    let result = [...ARTICLES_DB];

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(a => 
        a.title.toLowerCase().includes(q) || 
        a.description.toLowerCase().includes(q) ||
        a.authors.toLowerCase().includes(q)
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter(a => selectedCategories.includes(a.category));
    }
    if (selectedYears.length > 0) {
      result = result.filter(a => selectedYears.includes(a.year));
    }

    // 4. Sortowanie (Najnowsze lub Najpopularniejsze)
    result.sort((a, b) => {
      if (sortByLatest) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return b.views - a.views; // Najwięcej wyświetleń
      }
    });

    return result;
  }, [searchQuery, selectedCategories, selectedYears, sortByLatest]);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 pt-12 px-8 pb-24">

      <aside className="w-full md:w-1/4 flex flex-col gap-12 sticky top-12 h-fit">
        
        <div>
          <h1 className="font-serif text-4xl uppercase leading-none mb-2">Search<br/>Archive</h1>
          <p className="text-[9px] tracking-[0.2em] uppercase opacity-60">Find research papers</p>
        </div>

        <div className="flex items-center border-b border-[var(--color-primary)] pb-2 relative group">
          <Search size={16} className="opacity-50 group-focus-within:opacity-100 transition-opacity absolute left-0" />
          <input 
            type="text" 
            placeholder="TYPE KEYWORD..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none pl-8 text-xs tracking-widest uppercase placeholder:opacity-40"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold opacity-80 border-b border-[var(--color-primary)]/20 pb-2">
            <Filter size={12}/> Categories
          </div>
          <div className="flex flex-col gap-3">
            {CATEGORIES.map(cat => (
              <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-3 h-3 border border-[var(--color-primary)] flex items-center justify-center transition-colors ${selectedCategories.includes(cat) ? 'bg-[var(--color-primary)]' : 'bg-transparent group-hover:bg-[var(--color-muted)]'}`}>
                  {selectedCategories.includes(cat) && <div className="w-1.5 h-1.5 bg-[var(--color-bg)]"></div>}
                </div>
                <span className="text-[10px] tracking-wider uppercase opacity-80 group-hover:opacity-100">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold opacity-80 border-b border-[var(--color-primary)]/20 pb-2">
            <Filter size={12}/> Publication Year
          </div>
          <div className="flex flex-wrap gap-2">
            {YEARS.map(year => (
              <button 
                key={year}
                onClick={() => toggleYear(year)}
                className={`px-4 py-2 text-[9px] tracking-widest uppercase border transition-colors duration-300 ${selectedYears.includes(year) ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-bg)]' : 'border-[var(--color-primary)]/30 hover:border-[var(--color-primary)]'}`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

      </aside>
      <main className="w-full md:w-3/4 flex flex-col min-h-[500px]">
                <div className="flex justify-between items-center mb-8 border-b border-[var(--color-primary)] pb-4">
          <span className="text-[10px] tracking-[0.2em] uppercase opacity-60 font-bold">
            Showing {filteredArticles.length} results
          </span>
          
          <button 
            onClick={() => setSortByLatest(!sortByLatest)}
            className="flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase font-bold hover:opacity-70 transition-opacity"
          >
            <ArrowDownWideNarrow size={14}/>
            Sort by: {sortByLatest ? 'Latest' : 'Most Viewed'}
          </button>
        </div>

        <div className="flex flex-col gap-12">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div key={article.id} className="flex flex-col md:flex-row gap-8 items-center md:items-start group border-b border-[var(--color-primary)]/20 pb-8 last:border-0">
                
                <div 
                  className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full bg-[var(--color-secondary)] transition-all duration-500 group-hover:scale-105 shadow-sm bg-cover bg-center border-4 border-[var(--color-bg)] outline outline-1 outline-[var(--color-primary)]/20"
                  style={{ backgroundImage: `url(${article.imageUrl})` }}
                >
                  {!article.imageUrl && (
                    <div className="w-full h-full rounded-full opacity-30 flex items-center justify-center flex-col">
                       <div className="w-1/2 h-px bg-[var(--color-primary)] transform rotate-45"></div>
                       <div className="w-1/2 h-px bg-[var(--color-primary)] transform -rotate-45 -mt-px"></div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-1 w-full justify-between h-full py-2">
                  <div className="flex flex-col gap-3">
                    <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-[var(--color-primary)]/70">
                      {article.category} • {article.date}
                    </span>
                    
                    <h2 className="font-serif text-2xl md:text-3xl leading-snug group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                      {article.title}
                    </h2>
                    
                    <p className="opacity-80 text-sm leading-relaxed text-justify line-clamp-3">
                      {article.description}
                    </p>
                    
                    <span className="text-[10px] tracking-[0.1em] uppercase opacity-70 font-medium italic mt-1">
                      By {article.authors}
                    </span>
                  </div>

                  <div className="flex justify-between items-end mt-8">
                    
                    {/* STATYSTYKI */}
                    <div className="flex items-center gap-2 opacity-60 text-[10px] tracking-widest uppercase font-bold group-hover:opacity-100 transition-opacity">
                      <Eye size={14} />
                      {article.views.toLocaleString()} Views
                    </div>

                    {/*  PDF */}
                    <Link href={article.pdfUrl} target="_blank" className="relative inline-flex items-center justify-center w-28 h-8 cursor-pointer text-[var(--color-primary)] transition-colors duration-500 hover:opacity-70">
                      <svg className="absolute inset-0 w-full h-full fill-transparent" preserveAspectRatio="none" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 5 0 L 95 0 A 5 5 0 0 0 100 5 L 100 25 A 5 5 0 0 0 95 30 L 5 30 A 5 5 0 0 0 0 25 L 0 5 A 5 5 0 0 0 5 0 Z" stroke="currentColor" strokeWidth="0.8" />
                      </svg>
                      <span className="text-[8px] tracking-[0.2em] uppercase font-bold z-10">Read PDF</span>
                    </Link>

                  </div>
                </div>
                
              </div>
            ))
          ) : (
            <div className="w-full py-20 flex flex-col items-center justify-center opacity-40 text-center">
               <Search size={48} className="mb-4" />
               <span className="text-[10px] tracking-[0.3em] uppercase">No articles match your criteria.</span>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}