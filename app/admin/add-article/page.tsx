"use client";

import { useState } from 'react';

export default function ArticleUploadForm({ categories }: { categories: any[] }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/articles/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage("Article uploaded successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        setMessage("Error during upload.");
      }
    } catch (error) {
      setMessage("Connection error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8"> {/* Minimalny padding dla czytelności */}
      <h1 className="mb-4 uppercase tracking-widest text-sm">Add New Article</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl">
        {/* Pola tekstowe zgodne z modelem Prisma [cite: 1] */}
        <input name="title" type="text" placeholder="Title" required className="p-2 border" />
        <input name="authors" type="text" placeholder="Authors (e.g. Jan Kowalski, Anna Nowak)" required className="p-2 border" />
        <input name="pageRange" type="text" placeholder="Page Range (e.g. 10-20)" required className="p-2 border" />
        <input name="publicationDate" type="date" required className="p-2 border" />
        <input name="keywords" type="text" placeholder="Keywords (comma separated)" required className="p-2 border" />

        {/* Dynamiczne kategorie z bazy */}
        <select name="categoryId" required className="p-2 border">
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name} ({cat.code})</option>
          ))}
        </select>

        {/* Wybór pliku PDF [cite: 30] */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] uppercase">Article PDF</label>
          <input name="file" type="file" accept="application/pdf" required />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="bg-black text-white p-3 uppercase text-xs tracking-widest disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Save Article"}
        </button>

        {message && <p className="text-xs mt-2 uppercase">{message}</p>}
      </form>
    </div>
  );
}