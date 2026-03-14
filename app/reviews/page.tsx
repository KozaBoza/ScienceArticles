"use client";

import React, { useState, useEffect } from 'react';

interface Review {
  id: number;
  content: string;
  status: string;
  article: {
    title: string;
    pdfPath: string;
  };
  reviewer: {
    name: string;
  };
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error("Failed to fetch reviews", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className="w-full max-w-5xl flex flex-col items-center pt-16 px-8 bg-[var(--color-bg)] min-h-screen mx-auto">
      <h1 className="font-serif text-[3.5rem] md:text-[5rem] mb-20 uppercase text-center leading-none tracking-tight text-[var(--color-primary)]">
        Peer Review<br/>Process
      </h1>

      <div className="w-full max-w-2xl text-center mb-16 opacity-80 text-sm italic">
        Transparency in science is paramount. Below is the status of the peer-review process for our latest publications, maintaining the rigorous standards of Scientized Science Search.
      </div>

      {loading ? (
        <div className="text-[10px] tracking-[0.3em] uppercase opacity-50">Fetching review data...</div>
      ) : (
        <div className="w-full max-w-4xl border-t border-[var(--color-primary)]/20 pt-16 flex flex-col gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="border border-[var(--color-primary)] p-8 relative bg-white shadow-sm hover:shadow-md transition-all">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-primary)]"></div>
              
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <span className="text-[9px] tracking-[0.2em] uppercase opacity-50 block mb-2">Article Subject</span>
                  <h3 className="font-serif text-xl mb-4 leading-tight">{review.article.title}</h3>
                  
                  <div className="flex gap-6 text-[9px] tracking-[0.15em] uppercase font-bold">
                    <span>Ref: {review.article.pdfPath}</span>
                    <span className="text-[var(--color-secondary)]">Reviewer: {review.reviewer.name}</span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className="text-[9px] tracking-[0.2em] uppercase opacity-50">Outcome</span>
                  <div className={`px-4 py-1 text-[10px] font-bold uppercase tracking-widest border ${
                    review.status === 'Accepted' ? 'border-green-500 text-green-600 bg-green-50' : 'border-orange-400 text-orange-600 bg-orange-50'
                  }`}>
                    {review.status}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-dashed border-gray-200">
                <p className="text-sm italic opacity-70 leading-relaxed">
                  "{review.content}"
                </p>
              </div>
            </div>
          ))}

          {reviews.length === 0 && (
            <div className="text-center py-20 opacity-30 text-[10px] tracking-widest uppercase italic">
              No public review records available in this cycle.
            </div>
          )}
        </div>
      )}
    </div>
  );
}