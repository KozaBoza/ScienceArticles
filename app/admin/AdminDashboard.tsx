"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Trash2, FileText, BarChart3 } from "lucide-react";

export default function AdminDashboard({ initialCategories, initialArticles }: any) {
  const [status, setStatus] = useState("");
  const [articles, setArticles] = useState(initialArticles);
  
  // Stany formularza
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [pageRange, setPageRange] = useState("");
  const [pubDate, setPubDate] = useState("");
  const [categoryId, setCategoryId] = useState(initialCategories[0]?.id.toString() || "");
  const [keywords, setKeywords] = useState("");
  
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [zipFile, setZipFile] = useState<File | null>(null);

  const fetchArticles = async () => {
    const res = await fetch("/api/articles/search"); // Używamy stworzonego wcześniej API
    if (res.ok) {
      const data = await res.json();
      setArticles(data);
    }
  };

  const onDropPdf = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) setPdfFile(acceptedFiles[0]);
  }, []);

  const { getRootProps: getPdfProps, getInputProps: getPdfInput } = useDropzone({
    onDrop: onDropPdf,
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfFile) { setStatus("Błąd: Plik PDF jest wymagany!"); return; }

    setStatus("Wysyłanie...");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("authors", authors);
    formData.append("pageRange", pageRange);
    formData.append("publicationDate", pubDate);
    formData.append("categoryId", categoryId);
    formData.append("keywords", keywords);
    formData.append("file", pdfFile); // Klucz "file" musi pasować do API
    if (zipFile) formData.append("zipFile", zipFile);

    const res = await fetch("/api/articles/upload", { method: "POST", body: formData });

    if (res.ok) {
      setStatus("Sukces! Artykuł został dodany.");
      setTitle(""); setAuthors(""); setPageRange(""); setPubDate(""); setKeywords("");
      setPdfFile(null); setZipFile(null);
      fetchArticles();
    } else {
      setStatus("Wystąpił błąd podczas dodawania.");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Czy na pewno chcesz usunąć ten artykuł?")) return;
    const res = await fetch(`/api/articles/${id}`, { method: "DELETE" });
    if (res.ok) fetchArticles();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 text-black">
      <div className="mx-auto max-w-5xl space-y-8">
        
        {/* SEKCJA 1: FORMULARZ (Twój wygląd) */}
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center gap-2 border-b pb-4">
            <FileText className="text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Dodaj Nowy Artykuł</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input type="text" placeholder="Tytuł" required value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 rounded" />
              <input type="text" placeholder="Autorzy" required value={authors} onChange={(e) => setAuthors(e.target.value)} className="border p-2 rounded" />
              <input type="text" placeholder="Zakres stron" required value={pageRange} onChange={(e) => setPageRange(e.target.value)} className="border p-2 rounded" />
              <input type="date" required value={pubDate} onChange={(e) => setPubDate(e.target.value)} className="border p-2 rounded" />
              <input type="text" placeholder="Słowa kluczowe" required value={keywords} onChange={(e) => setKeywords(e.target.value)} className="border p-2 rounded" />
              
              <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="border p-2 rounded bg-white">
                {initialCategories.map((cat: any) => (
                  <option key={cat.id} value={cat.id}>{cat.name} ({cat.code})</option>
                ))}
              </select>
            </div>

            <div {...getPdfProps()} className="cursor-pointer rounded-lg border-2 border-dashed border-blue-400 bg-blue-50 p-6 text-center hover:bg-blue-100 transition">
              <input {...getPdfInput()} />
              {pdfFile ? <p className="text-blue-700">✓ {pdfFile.name}</p> : <p className="text-gray-600 text-sm">Przeciągnij tutaj PDF artykułu (wymagane)</p>}
            </div>

            <div className="rounded bg-gray-50 p-3 border">
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Opcjonalny ZIP (Dodatki)</label>
              <input type="file" accept=".zip" onChange={(e) => setZipFile(e.target.files?.[0] || null)} className="text-sm" />
            </div>

            {status && <div className={`p-3 rounded text-center text-sm font-bold ${status.includes("Sukces") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{status}</div>}

            <button type="submit" className="w-full rounded-lg bg-blue-600 py-3 font-bold text-white hover:bg-blue-700 transition">Zapisz Artykuł</button>
          </form>
        </div>

        {/* SEKCJA 2: TABELA (Statystyki F10) */}
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center gap-2 border-b pb-4">
            <BarChart3 className="text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">Statystyki i Zarządzanie</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-bold">
                <tr>
                  <th className="p-4">Kod Pliku</th>
                  <th className="p-4">Tytuł</th>
                  <th className="p-4">Statystyki</th>
                  <th className="p-4 text-center">Akcje</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {articles.map((art: any) => (
                  <tr key={art.id} className="hover:bg-gray-50 transition">
                    <td className="p-4 font-mono font-bold text-blue-600">{art.pdfPath}</td>
                    <td className="p-4 max-w-xs truncate">{art.title}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">{art.views}</span>
                        <span className="text-gray-400 text-xs uppercase">odsłon</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <button onClick={() => handleDelete(art.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-full"><Trash2 size={18} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}