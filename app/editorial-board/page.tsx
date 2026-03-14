"use client";

import React, { useState, useEffect } from 'react';

// Przykładowa baza danych członków redakcji
const EDITORS = [
  {
    id: 1,
    name: "Dr. Eleanor Vance",
    role: "Editor-in-Chief",
    education: "Ph.D. in Cognitive Psychology, Oxford University",
    specialization: "Neuroplasticity & Behavioral Science",
    image: "" // Opcjonalnie: "/images/eleanor.jpg"
  },
  {
    id: 2,
    name: "Prof. Julian Asher",
    role: "Managing Editor",
    education: "Ph.D. in Computer Science, MIT",
    specialization: "Artificial Intelligence & Machine Learning",
    image: ""
  },
  {
    id: 3,
    name: "Dr. Sarah Lin",
    role: "Associate Editor",
    education: "Ph.D. in Mathematics, Stanford University",
    specialization: "Cryptography & Number Theory",
    image: ""
  },
  {
    id: 4,
    name: "Dr. Marcus Thorne",
    role: "Review Coordinator",
    education: "Ph.D. in Physics, Caltech",
    specialization: "Quantum Mechanics & Thermodynamics",
    image: ""
  }
];

export default function EditorialBoardPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Funkcje do zmiany osoby (z zabezpieczeniem przed spamowaniem kliknięć)
  const nextProfile = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % EDITORS.length);
  };

  const prevProfile = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + EDITORS.length) % EDITORS.length);
  };

  // Resetujemy blokadę animacji po krótkim czasie
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 400); // 400ms na animację
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Obliczanie indeksów dla lewego i prawego koła
  const prevIndex = (currentIndex - 1 + EDITORS.length) % EDITORS.length;
  const nextIndex = (currentIndex + 1) % EDITORS.length;

  const currentEditor = EDITORS[currentIndex];

  return (
    <div className="w-full max-w-5xl flex flex-col items-center pt-16 px-4">
      <h1 className="font-serif text-[4rem] md:text-[5rem] mb-20 uppercase tracking-tight text-center leading-none">
        Editorial<br/>Board
      </h1>
      
      {/* SEKCJA KARUZELI (Kółka ze zdjęciami) */}
      <div className="w-full flex items-center justify-center gap-8 md:gap-16 mb-16 relative h-64">
        
        {/* LEWE KÓŁKO (Poprzednia osoba) */}
        <div 
          onClick={prevProfile}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[var(--color-secondary)] transition-all duration-500 cursor-pointer hover:scale-105 hover:opacity-80 flex-shrink-0 bg-cover bg-center overflow-hidden border-2 border-transparent"
          style={{ backgroundImage: `url(${EDITORS[prevIndex].image})` }}
        >
          {/* Fallback jeśli nie ma zdjęcia */}
          {!EDITORS[prevIndex].image && <div className="w-full h-full bg-[var(--color-secondary)] opacity-50"></div>}
        </div>
        
        {/* ŚRODKOWE KÓŁKO (Główna osoba) */}
        <div 
          className={`w-48 h-48 md:w-64 md:h-64 rounded-full bg-[var(--color-primary)] transition-all duration-500 flex-shrink-0 shadow-lg bg-cover bg-center overflow-hidden border-4 border-[var(--color-bg)] z-10 ${isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}
          style={{ backgroundImage: `url(${currentEditor.image})` }}
        >
          {!currentEditor.image && <div className="w-full h-full bg-[var(--color-primary)]"></div>}
        </div>

        {/* PRAWE KÓŁKO (Następna osoba) */}
        <div 
          onClick={nextProfile}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[var(--color-secondary)] transition-all duration-500 cursor-pointer hover:scale-105 hover:opacity-80 flex-shrink-0 bg-cover bg-center overflow-hidden border-2 border-transparent"
          style={{ backgroundImage: `url(${EDITORS[nextIndex].image})` }}
        >
          {!EDITORS[nextIndex].image && <div className="w-full h-full bg-[var(--color-secondary)] opacity-50"></div>}
        </div>
      </div>

      {/* SEKCJA INFORMACYJNA (Płynne znikanie i pojawianie się tekstu) */}
      <div className={`flex flex-col items-center text-center max-w-2xl transition-all duration-400 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        
        <h2 className="font-serif text-3xl md:text-4xl uppercase mb-2">
          {currentEditor.name}
        </h2>
        
        <div className="inline-block border border-[var(--color-primary)] px-6 py-2 mb-8 mt-2 text-[10px] tracking-[0.2em] uppercase font-semibold">
          {currentEditor.role}
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col items-center border-b border-[var(--color-primary)]/20 pb-4">
            <span className="text-[9px] tracking-[0.2em] uppercase opacity-60 mb-1">Education</span>
            <span className="text-sm font-medium">{currentEditor.education}</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-[9px] tracking-[0.2em] uppercase opacity-60 mb-1">Specialization</span>
            <span className="text-sm font-medium">{currentEditor.specialization}</span>
          </div>
        </div>

      </div>
      
      {/* Instrukcja nawigacji */}
      <div className="mt-16 text-[9px] tracking-[0.2em] uppercase opacity-50">
        Click side circles to navigate
      </div>

    </div>
  );
}