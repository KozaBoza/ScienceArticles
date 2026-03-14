"use client";

import React, { useState, useEffect } from 'react';

interface Editor {
  id: number;
  name: string;
  affiliation: string;
  role: string;
}

// 2. KLUCZOWE: export default function ...
export default function EditorialBoardPage() {
  const [editors, setEditors] = useState<Editor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEditors = async () => {
      try {
        const res = await fetch("/api/editors");
        if (!res.ok) throw new Error("Błąd pobierania");
        const data = await res.json();
        setEditors(data);
      } catch (error) {
        console.error("Error fetching editors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEditors();
  }, []);

  return (
    <div className="w-full max-w-5xl flex flex-col items-center pt-16 px-8 bg-[var(--color-bg)] min-h-screen mx-auto">
      {/* NAGŁÓWEK */}
      <h1 className="font-serif text-[3.5rem] md:text-[5rem] mb-20 uppercase text-center leading-none tracking-tight text-[var(--color-primary)]">
        Editorial<br/>Board
      </h1>

      {loading ? (
        <div className="opacity-50 text-[10px] tracking-widest uppercase animate-pulse">
          Loading board from database...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full max-w-4xl border-t border-[var(--color-primary)]/20 pt-16">
          {editors.map((editor) => (
            <div key={editor.id} className="flex flex-col border-b border-[var(--color-primary)]/10 pb-6 group">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] group-hover:bg-[var(--color-primary)] transition-colors duration-300"></div>
                <h3 className="font-serif text-2xl group-hover:translate-x-1 transition-transform duration-300">
                  {editor.name}
                </h3>
              </div>
              
              <div className="flex flex-col ml-6">
                <span className="text-[10px] tracking-widest uppercase opacity-70 mb-1">
                  {editor.affiliation}
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase font-semibold text-[var(--color-primary)] opacity-90">
                  Role: {editor.role}
                </span>
              </div>
            </div>
          ))}
          
          {editors.length === 0 && !loading && (
            <p className="col-span-2 text-center opacity-40 text-xs uppercase tracking-widest">
              No editors found in the database. Run your seed command.
            </p>
          )}
        </div>
      )}

      {/* STOPKA  */}
      <div className="mt-24 mb-16 inline-flex flex-col items-center text-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[9px] tracking-[0.2em] uppercase mb-2">Want to join the board?</span>
        <div className="border-b border-[var(--color-primary)] pb-1 text-xs font-serif">
          Inquire with the Editor-in-Chief
        </div>
      </div>
    </div>
  );
}