"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Usuwamy statyczne LATEST_ARTICLES, będziemy je pobierać z bazy
const FAQS = [
  { q: "How do I submit my manuscript?", a: "You can submit your manuscript via the 'About -> Information for Authors' page. Ensure it is in PDF format and follows our strict double-blind review guidelines." },
  { q: "Are all published articles open access?", a: "Yes, we strongly believe in open science. All articles published in Scientized Science Search are entirely free to read, download, and cite." },
  { q: "How long does the peer review process take?", a: "Our rigorous peer review process typically takes between 4 to 6 weeks, depending on the availability of our specialized reviewers." },
  { q: "Is there an Article Processing Charge (APC)?", a: "Currently, we do not charge any publication fees. The operation of the journal is sustained by our funding partners and academic grants." }
];

const ScallopedButton = () => (
  <div className="relative inline-flex items-center justify-center w-32 h-8 group-btn cursor-pointer text-[var(--color-primary)] transition-colors duration-500 hover:opacity-70">
    <svg className="absolute inset-0 w-full h-full fill-transparent" preserveAspectRatio="none" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
      <path d="M 5 0 L 95 0 A 5 5 0 0 0 100 5 L 100 25 A 5 5 0 0 0 95 30 L 5 30 A 5 5 0 0 0 0 25 L 0 5 A 5 5 0 0 0 5 0 Z" stroke="currentColor" strokeWidth="0.8" />
    </svg>
    <span className="text-[8px] tracking-[0.2em] uppercase font-bold z-10">Read PDF</span>
  </div>
);

export default function Home() {
  const [articles, setArticles] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
// Wewnątrz komponentu Home
const [yearFilter, setYearFilter] = useState<string | null>(null);

const fetchData = async () => {
  let url = "/api/articles?";
  if (activeCategory) url += `category=${activeCategory}&`;
  if (yearFilter) url += `year=${yearFilter}`;

  const res = await fetch(url);
  const data = await res.json();
  setArticles(data);
};

useEffect(() => {
  fetchData();
}, [activeCategory, yearFilter]);
  // POBIERANIE DANYCH Z BAZY (Integracja z Prisma)
  useEffect(() => {
    const fetchData = async () => {
      // Pobieramy artykuły
      const artRes = await fetch("/api/articles");
      const artData = await artRes.json();
      setArticles(artData);

      // Pobieramy kategorie (dynamicznie, żeby kółka zgadzały się z bazą)
      const catNames = Array.from(new Set(artData.map((a: any) => a.category.name)));
      setCategories(catNames);
    };
    fetchData();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleCategory = (catName: string) => {
    setActiveCategory(prev => prev === catName ? null : catName);
  };

  const filteredArticles = activeCategory 
    ? articles.filter(article => article.category.name === activeCategory)
    : articles;

  return (
    <div className="w-full flex flex-col items-center pb-0">
      
      {/* SEKCJA 1: HERO - Zachowujemy Twój genialny brutalizm */}
      <section className="relative w-full max-w-5xl h-[500px] flex justify-center mt-12">
        <div className="absolute inset-0 flex justify-center items-start gap-3 md:gap-6 z-0 mt-20 opacity-90 pointer-events-none">
          <div className="w-24 h-80 bg-[var(--color-muted)] transform -rotate-3 transition-colors duration-500"></div>
          <div className="w-20 h-72 bg-[var(--color-muted)] transform rotate-6 mt-6 transition-colors duration-500"></div>
          <div className="w-10 h-72 bg-[var(--color-muted)] transform -rotate-12 mt-12 transition-colors duration-500"></div>
          <div className="w-24 h-96 bg-[var(--color-muted)] transform rotate-3 -mt-4 transition-colors duration-500"></div>
          <div className="w-24 h-80 bg-[var(--color-muted)] transform -rotate-6 mt-8 transition-colors duration-500"></div>
          <div className="w-10 h-72 bg-[var(--color-muted)] transform rotate-2 mt-2 transition-colors duration-500"></div>
          <div className="w-24 h-80 bg-[var(--color-muted)] transform -rotate-3 mt-12 transition-colors duration-500"></div>
          <div className="w-20 h-72 bg-[var(--color-muted)] transform rotate-12 mt-4 transition-colors duration-500"></div>
        </div>

        <h1 className="font-serif text-[4.5rem] md:text-[7rem] leading-[0.75] z-10 flex flex-col items-center mix-blend-multiply tracking-tight mt-10 text-[var(--color-primary)] transition-colors duration-500">
          <span className="transform -translate-x-12">SCIENTIZED</span>
          <span className="transform translate-x-4">SCIENCE</span>
          <span className="transform translate-x-28">SEARCH</span>
        </h1>
      </section>

      {/* SEKCJA 2: LATEST ARTICLES - Teraz zasilane z API */}
      <section className="w-full max-w-[900px] flex flex-col gap-12 px-6 mt-10 min-h-[400px]">
        <h2 className="text-[10px] tracking-[0.3em] uppercase opacity-60 text-center mb-4">
          {activeCategory ? `Filtered by: ${activeCategory}` : "Latest Articles"}
        </h2>
        
        <div className="flex flex-col gap-12">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div key={article.id} className="flex flex-col md:flex-row min-h-[160px] w-full gap-6 md:gap-8 group animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                <div className="w-full md:w-[25%] bg-[var(--color-secondary)] transition-colors duration-500 flex flex-col items-center justify-center p-6 shadow-sm">
                   <span className="text-[10px] tracking-[0.2em] uppercase opacity-80 mb-2">Category</span>
                   <span className="text-[var(--color-bg)] font-serif text-2xl text-center leading-tight">
                     {article.category.name}
                   </span>
                </div>
                
                <div className="w-full md:w-[75%] border border-[var(--color-primary)] flex flex-col justify-between p-8 transition-colors duration-500 relative bg-[var(--color-bg)] shadow-sm hover:shadow-md">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-primary)]"></div>
                  
                  <div className="flex flex-col gap-4">
                    <h3 className="font-serif text-2xl md:text-3xl leading-snug group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <div className="flex flex-col gap-1 text-[9px] tracking-[0.15em] uppercase opacity-80 font-medium">
                      <span><strong className="opacity-100">Authors:</strong> {article.authors}</span>
                      <div className="flex gap-6 mt-2">
                        {/* Formatujemy datę z bazy danych */}
                        <span><strong className="opacity-100">Date:</strong> {new Date(article.publicationDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                        <span><strong className="opacity-100">Pages:</strong> {article.pageRange}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    {/* KLUCZOWE: Link kieruje do naszego API download, które nabija statystyki! */}
                    <Link href={`/api/download/${article.pdfPath}`} target="_blank">
                      <ScallopedButton />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center opacity-50 text-[10px] tracking-[0.2em] uppercase py-20">
              No articles found.
            </div>
          )}
        </div>
      </section>

      {/* SEKCJA 3: KATEGORIE (Dynamiczne kółka) */}
      <section className="flex flex-col items-center mt-32 px-6">
        <h2 className="text-[10px] tracking-[0.3em] uppercase opacity-60 text-center mb-16">Filter by Category</h2>
        
        <div className="flex flex-wrap gap-12 justify-center items-center">
          {categories.map((catName, index) => {
            const isActive = activeCategory === catName;
            
            return (
              <button 
                key={index}
                onClick={() => toggleCategory(catName)}
                className={`flex items-center justify-center rounded-full transition-all duration-500 cursor-pointer shadow-sm hover:scale-105 hover:shadow-lg focus:outline-none
                  ${isActive 
                    ? 'w-48 h-48 bg-[var(--color-primary)] text-[var(--color-bg)] ring-4 ring-[var(--color-primary)]/20 scale-105' 
                    : 'w-40 h-40 bg-[var(--color-secondary)] text-[var(--color-bg)] opacity-90 hover:opacity-100'}`}
              >
                <span className={`font-serif uppercase text-center px-4 transition-all duration-300 ${isActive ? 'text-2xl font-bold' : 'text-xl'}`}>
                  {catName}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* SEKCJA 4: FAQ (Zostaje bez zmian) */}
      <section className="w-full max-w-[600px] flex flex-col gap-4 mt-32 px-6 mb-20">
        <h2 className="text-[10px] tracking-[0.3em] uppercase opacity-60 text-center mb-8">Frequently Asked Questions</h2>
        {FAQS.map((faq, index) => (
          <div key={index} className="w-full bg-[var(--color-muted)] transition-colors duration-500 overflow-hidden">
            <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center p-6 text-left hover:bg-[var(--color-primary)]/5 transition-colors focus:outline-none">
              <span className="font-serif text-lg md:text-xl pr-8">{faq.q}</span>
              <span className="text-[18px] font-light relative w-4 h-4 flex items-center justify-center flex-shrink-0">
                <span className="absolute w-full h-[1px] bg-[var(--color-primary)]"></span>
                <span className={`absolute w-[1px] h-full bg-[var(--color-primary)] transition-transform duration-300 ${openFaqIndex === index ? 'rotate-90 scale-0' : ''}`}></span>
              </span>
            </button>
            <div className={`transition-all duration-500 ease-in-out px-6 ${openFaqIndex === index ? 'max-h-[200px] pb-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
              <p className="text-sm opacity-80 leading-relaxed pt-4 text-justify ">{faq.a}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}