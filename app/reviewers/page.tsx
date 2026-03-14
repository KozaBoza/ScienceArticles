"use client";

import React, { useState, useEffect } from 'react';

export default function ReviewersPage() {
  const [reviewers, setReviewers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviewers = async () => {
      try {
        const res = await fetch("/api/reviewers");
        const data = await res.json();
        setReviewers(data);
      } catch (err) {
        console.error("Failed to fetch reviewers", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviewers();
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-16 px-8 bg-[var(--color-bg)] min-h-screen">
      {/* NAGŁÓWEK - Twój design */}
      <h1 className="font-serif text-[3.5rem] md:text-[5rem] mb-20 uppercase text-center leading-none tracking-tight text-[var(--color-primary)]">
        Our<br/>Reviewers
      </h1>
      
      <div className="w-full max-w-2xl text-center mb-16 opacity-80 text-sm italic">
        We are deeply grateful to our esteemed panel of anonymous peer reviewers. Their dedication, rigorous analysis, and constructive feedback are the cornerstones of the scientific integrity upheld by Scientized Science Search.
      </div>

      {/* LISTA RECENZENTÓW (Grid) */}
      {loading ? (
        <div className="text-[10px] tracking-[0.3em] uppercase opacity-50">Loading database...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full max-w-4xl border-t border-[var(--color-primary)]/20 pt-16">
          {reviewers.map((reviewer) => (
            <div key={reviewer.id} className="flex flex-col border-b border-[var(--color-primary)]/10 pb-6 group">
              
              <div className="flex items-center gap-4 mb-2">
                <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] group-hover:bg-[var(--color-primary)] transition-colors duration-300"></div>
                <h3 className="font-serif text-2xl group-hover:translate-x-1 transition-transform duration-300">
                  {reviewer.name}
                </h3>
              </div>
              
              <div className="flex flex-col ml-6">
                <span className="text-[10px] tracking-widest uppercase opacity-70 mb-1">
                  {reviewer.affiliation}
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-[var(--color-primary)] opacity-90">
                  Area: {reviewer.field}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FOOTER STRONY */}
      <div className="mt-24 inline-flex flex-col items-center text-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[9px] tracking-[0.2em] uppercase mb-2">Interested in reviewing?</span>
        <div className="border-b border-[var(--color-primary)] pb-1 text-xs">Contact our editorial board</div>
      </div>
    </div>
  );
}