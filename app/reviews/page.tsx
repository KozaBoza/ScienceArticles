import React from 'react';

// Przykładowe dane ostatnich recenzji
const RECENT_REVIEWS = [
  {
    id: 1,
    articleTitle: "Quantum Entanglement in Macroscopic Systems",
    reviewer: "Anonymous Reviewer #124",
    date: "March 10, 2026",
    verdict: "Accepted with minor revisions",
    snippet: "The methodology applied in section 3 is highly innovative. However, the author must clarify the boundary conditions used in the simulation before final publication. The statistical analysis is robust and well-documented."
  },
  {
    id: 2,
    articleTitle: "Cognitive Load Theory in Digital Learning",
    reviewer: "Dr. Jonathan Hayes",
    date: "March 05, 2026",
    verdict: "Accepted",
    snippet: "An outstanding contribution to educational psychology. The experimental design completely isolates the variable of screen-time fatigue. I recommend immediate publication. This will be highly cited."
  },
  {
    id: 3,
    articleTitle: "Algorithmic Bias in Predictive Policing",
    reviewer: "Anonymous Reviewer #089",
    date: "February 28, 2026",
    verdict: "Major revisions required",
    snippet: "While the premise is fascinating, the dataset used for training the model lacks diversity, which inadvertently proves the paper's point but weakens the proposed solution. The authors need to expand their sample size."
  }
];

export default function ReviewsPage() {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center pt-16 px-4">
      <h1 className="font-serif text-[3.5rem] md:text-[5rem] mb-20 uppercase text-center leading-none tracking-tight">
        Recent<br/>Reviews
      </h1>
      
      <div className="w-full text-center mb-16 opacity-80 text-sm max-w-2xl px-4">
        In the spirit of open science and absolute transparency, we publish snippets of recent peer reviews. This ensures our rigorous standards remain visible to the academic community.
      </div>

      <div className="w-full flex flex-col gap-12">
        {RECENT_REVIEWS.map((review) => (
          <div key={review.id} className="w-full flex flex-col border-t border-[var(--color-primary)]/30 pt-8 group">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="flex flex-col">
                <span className="text-[9px] tracking-[0.2em] uppercase opacity-60 mb-2">Reviewed Article</span>
                <h2 className="font-serif text-2xl group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                  {review.articleTitle}
                </h2>
              </div>
              
              {/* Box z werdyktem */}
              <div className="border border-[var(--color-primary)] px-4 py-2 text-[9px] tracking-widest uppercase font-semibold text-center whitespace-nowrap bg-[var(--color-muted)] transition-colors duration-500">
                {review.verdict}
              </div>
            </div>

            <p className="opacity-90 leading-relaxed text-sm text-justify mb-6 bg-[var(--color-bg)] p-6 border-l-2 border-[var(--color-secondary)] italic transition-colors duration-500">
              "{review.snippet}"
            </p>

            <div className="flex justify-between items-center text-[10px] tracking-[0.2em] uppercase opacity-50 font-medium">
              <span>{review.reviewer}</span>
              <span>{review.date}</span>
            </div>

          </div>
        ))}
      </div>

      <div className="mt-20 relative inline-flex items-center justify-center w-48 h-12 text-[9px] tracking-[0.2em] uppercase font-medium group hover:opacity-70 transition-opacity cursor-pointer text-[var(--color-bg)]">
        <svg className="absolute inset-0 w-full h-full text-[var(--color-primary)] transition-colors duration-500" preserveAspectRatio="none" viewBox="0 0 100 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M 5 0 L 95 0 A 5 5 0 0 0 100 5 L 100 25 A 5 5 0 0 0 95 30 L 5 30 A 5 5 0 0 0 0 25 L 0 5 A 5 5 0 0 0 5 0 Z" />
        </svg>
        <span className="z-10">Load More</span>
      </div>

    </div>
  );
}