"use client";

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, FileText, CheckCircle, AlertTriangle, Archive, LayoutDashboard, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

// Kategorie zdefiniowane w specyfikacji [cite: 34-35]
const CATEGORIES = [
  { code: 'M', name: 'Matematyka' },
  { code: 'I', name: 'Informatyka' },
  { code: 'D', name: 'Dydaktyka' },
  { code: 'P', name: 'Popularyzacja nauki' },
];

export default function AdminDashboard() {
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    pageRange: '',
    publicationDate: '',
    categoryCode: 'M',
  });

  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [extraFile, setExtraFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Obsługa przeciągania pliku PDF [cite: 32]
  const onDropPdf = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      setErrors(prev => ({ ...prev, pdf: '' }));
    } else {
      setErrors(prev => ({ ...prev, pdf: 'Wymagany format PDF.' }));
    }
  }, []);

  const { getRootProps: getPdfRootProps, getInputProps: getPdfInputProps, isDragActive: isPdfDragActive } = useDropzone({ 
    onDrop: onDropPdf, 
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 1 
  });

  // Obsługa opcjonalnego pliku dodatkowego [cite: 31-32]
  const onDropExtra = useCallback((acceptedFiles: File[]) => {
    setExtraFile(acceptedFiles[0]);
  }, []);

  const { getRootProps: getExtraRootProps, getInputProps: getExtraInputProps, isDragActive: isExtraDragActive } = useDropzone({ 
    onDrop: onDropExtra,
    maxFiles: 1
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccessMsg('');
    
    // Walidacja danych przed wysłaniem [cite: 51]
    const newErrors: Record<string, string> = {};
    if (!formData.title.trim()) newErrors.title = 'Tytuł jest wymagany.';
    if (!formData.authors.trim()) newErrors.authors = 'Autorzy są wymagani.';
    if (!formData.pageRange.trim()) newErrors.pageRange = 'Podaj zakres stron.';
    if (!formData.publicationDate) newErrors.publicationDate = 'Wybierz datę.';
    if (!pdfFile) newErrors.pdf = 'Wgraj plik PDF artykułu.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => submitData.append(key, value));
      if (pdfFile) submitData.append('pdfFile', pdfFile);
      if (extraFile) submitData.append('extraFile', extraFile);

      const response = await fetch('/api/articles', {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Błąd serwera');
      
      setSuccessMsg(`Sukces! Artykuł zapisany jako: ${result.fileName}`);
      
      // Reset formularza po sukcesie [cite: 39]
      setFormData({ title: '', authors: '', pageRange: '', publicationDate: '', categoryCode: 'M' });
      setPdfFile(null);
      setExtraFile(null);
    } catch (err: any) {
      setErrors({ submit: err.message || 'Wystąpił błąd połączenia.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-5xl flex flex-col pt-12 px-8 pb-24 text-[var(--color-primary)]">
      {/* Nagłówek Panelu [cite: 49] */}
      <div className="flex justify-between items-end mb-16 border-b border-[var(--color-primary)] pb-8 transition-colors duration-500">
        <div>
          <h1 className="font-serif text-[2.5rem] uppercase leading-none tracking-tighter">
            Admin<br/>Dashboard
          </h1>
          <p className="text-[9px] tracking-[0.3em] uppercase opacity-60 mt-4 font-bold flex items-center gap-2">
            <LayoutDashboard size={12}/> Zarządzanie Zasobami Systemu [cite: 5]
          </p>
        </div>
        <button 
          onClick={() => signOut()}
          className="flex items-center gap-2 text-[9px] tracking-widest uppercase font-bold hover:opacity-70 transition-colors"
        >
          <LogOut size={14}/> Wyloguj
        </button>
      </div>

      {/* Komunikaty sukcesu i błędów [cite: 51] */}
      {successMsg && (
        <div className="w-full bg-[var(--color-primary)] text-[var(--color-bg)] p-6 mb-10 flex items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <CheckCircle size={24} />
          <span className="text-sm font-serif uppercase tracking-wider">{successMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-12">
        {/* Sekcja 1: Dane artykułu  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          <div className="flex flex-col">
            <label className="text-[9px] tracking-[0.2em] uppercase font-bold opacity-50 mb-3">Tytuł Artykułu</label>
            <input name="title" value={formData.title} onChange={handleInputChange} type="text" className="bg-transparent border-b border-[var(--color-primary)] py-2 outline-none focus:bg-[var(--color-muted)] transition-all px-2" placeholder="..." />
            {errors.title && <span className="text-red-500 text-[10px] mt-2 uppercase font-bold">{errors.title}</span>}
          </div>

          <div className="flex flex-col">
            <label className="text-[9px] tracking-[0.2em] uppercase font-bold opacity-50 mb-3">Autorzy</label>
            <input name="authors" value={formData.authors} onChange={handleInputChange} type="text" className="bg-transparent border-b border-[var(--color-primary)] py-2 outline-none focus:bg-[var(--color-muted)] transition-all px-2" placeholder="..." />
            {errors.authors && <span className="text-red-500 text-[10px] mt-2 uppercase font-bold">{errors.authors}</span>}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-[9px] tracking-[0.2em] uppercase font-bold opacity-50 mb-3">Zakres stron</label>
              <input name="pageRange" value={formData.pageRange} onChange={handleInputChange} type="text" className="bg-transparent border-b border-[var(--color-primary)] py-2 outline-none focus:bg-[var(--color-muted)] transition-all px-2" placeholder="np. 10-20" />
            </div>
            <div className="flex flex-col">
              <label className="text-[9px] tracking-[0.2em] uppercase font-bold opacity-50 mb-3">Data publikacji</label>
              <input name="publicationDate" value={formData.publicationDate} onChange={handleInputChange} type="date" className="bg-transparent border-b border-[var(--color-primary)] py-2 outline-none focus:bg-[var(--color-muted)] transition-all px-2" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[9px] tracking-[0.2em] uppercase font-bold opacity-50 mb-3">Kategoria [cite: 29]</label>
            <select name="categoryCode" value={formData.categoryCode} onChange={handleInputChange} className="bg-transparent border-b border-[var(--color-primary)] py-2 outline-none cursor-pointer">
              {CATEGORIES.map(c => <option key={c.code} value={c.code} className="text-black">{c.name}</option>)}
            </select>
          </div>
        </div>

        {/* Sekcja 2: Pliki (Drag & Drop)  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <label className="text-[9px] tracking-[0.2em] uppercase font-bold opacity-50 mb-3">Główny Plik (PDF) [cite: 47]</label>
            <div {...getPdfRootProps()} className={`border-2 border-dashed p-10 flex flex-col items-center justify-center transition-all cursor-pointer min-h-[180px] ${isPdfDragActive ? 'bg-[var(--color-primary)] text-[var(--color-bg)]' : 'border-[var(--color-primary)]/30 hover:bg-[var(--color-muted)]'} ${errors.pdf ? 'border-red-500' : ''}`}>
              <input {...getPdfInputProps()} />
              {pdfFile ? (
                <div className="flex flex-col items-center"><FileText size={32}/><span className="text-[10px] mt-4 font-bold uppercase text-center">{pdfFile.name}</span></div>
              ) : (
                <><UploadCloud size={32} className="opacity-40"/><p className="text-[10px] mt-4 uppercase tracking-widest font-bold text-center">Upuść PDF tutaj [cite: 32]</p></>
              )}
            </div>
            {errors.pdf && <span className="text-red-500 text-[10px] mt-2 uppercase font-bold">{errors.pdf}</span>}
          </div>

          <div className="flex flex-col">
            <label className="text-[9px] tracking-[0.2em] uppercase font-bold opacity-50 mb-3">Załącznik (Opcjonalnie) [cite: 31]</label>
            <div {...getExtraRootProps()} className={`border-2 border-dashed p-10 flex flex-col items-center justify-center transition-all cursor-pointer min-h-[180px] ${isExtraDragActive ? 'bg-[var(--color-secondary)]' : 'border-[var(--color-primary)]/30 hover:bg-[var(--color-muted)]'}`}>
              <input {...getExtraInputProps()} />
              {extraFile ? (
                <div className="flex flex-col items-center"><Archive size={32}/><span className="text-[10px] mt-4 font-bold uppercase text-center">{extraFile.name}</span></div>
              ) : (
                <><Archive size={32} className="opacity-40"/><p className="text-[10px] mt-4 uppercase tracking-widest font-bold text-center">Upuść dodatkowy plik</p></>
              )}
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-[var(--color-primary)] text-[var(--color-bg)] py-5 text-[11px] tracking-[0.4em] uppercase font-bold hover:scale-[1.01] transition-transform disabled:opacity-50"
        >
          {isSubmitting ? "Przesyłanie danych..." : "Zatwierdź i opublikuj"}
        </button>
      </form>
    </div>
  );
}