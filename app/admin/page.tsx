"use client";

import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/navigation";
import { Trash2, FileText, BarChart3 } from "lucide-react"; // Jeśli masz lucide-react (widziałem w package.json)

export default function AdminDashboard() {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [articles, setArticles] = useState([]);
  
  // Stany dla pól formularza
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [pageRange, setPageRange] = useState("");
  const [pubDate, setPubDate] = useState("");
  const [categoryId, setCategoryId] = useState("1");
  
  // Stany dla plików
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [zipFile, setZipFile] = useState<File | null>(null);

  // --- FUNKCJE POBIERANIA DANYCH ---

  const fetchArticles = async () => {
    try {
      const res = await fetch("/api/articles");
      if (res.ok) {
        const data = await res.json();
        setArticles(data);
      }
    } catch (error) {
      console.error("Błąd pobierania:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // --- OBSŁUGA PLIKÓW ---

  const onDropPdf = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setPdfFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps: getPdfProps, getInputProps: getPdfInput } = useDropzone({
    onDrop: onDropPdf,
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
  });

  // --- AKCJE (DODAWANIE I USUWANIE) ---

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfFile) {
      setStatus("Błąd: Plik PDF jest wymagany!");
      return;
    }

    setStatus("Wysyłanie...");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("authors", authors);
    formData.append("pageRange", pageRange);
    formData.append("publicationDate", pubDate);
    formData.append("categoryId", categoryId);
    formData.append("pdfFile", pdfFile);
    if (zipFile) formData.append("zipFile", zipFile);

    const res = await fetch("/api/articles", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setStatus("Sukces! Artykuł został dodany.");
      setTitle(""); setAuthors(""); setPageRange(""); setPubDate("");
      setPdfFile(null); setZipFile(null);
      fetchArticles(); // Odśwież tabelę
    } else {
      setStatus("Wystąpił błąd podczas dodawania.");
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("Czy na pewno chcesz usunąć ten artykuł z systemu?")) {
      const res = await fetch("/api/articles", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" }
      });

      if (res.ok) {
        fetchArticles();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-5xl space-y-8">
        
        {/* SEKCJA 1: FORMULARZ DODAWANIA */}
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center gap-2 border-b pb-4">
            <FileText className="text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Dodaj Nowy Artykuł (F5)</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-semibold">Tytuł artykułu</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded border p-2" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">Autorzy</label>
                <input type="text" required value={authors} onChange={(e) => setAuthors(e.target.value)} className="w-full rounded border p-2" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">Zakres stron (np. 1-15)</label>
                <input type="text" required value={pageRange} onChange={(e) => setPageRange(e.target.value)} className="w-full rounded border p-2" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">Data publikacji</label>
                <input type="date" required value={pubDate} onChange={(e) => setPubDate(e.target.value)} className="w-full rounded border p-2" />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-semibold">Kategoria</label>
                <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="w-full rounded border p-2 bg-white">
                  <option value="1">Matematyka (M)</option>
                  <option value="2">Informatyka (I)</option>
                  <option value="3">Dydaktyka (D)</option>
                  <option value="4">Popularyzacja nauki (P)</option>
                </select>
              </div>
            </div>

            <div {...getPdfProps()} className="cursor-pointer rounded-lg border-2 border-dashed border-blue-400 bg-blue-50 p-6 text-center transition hover:bg-blue-100">
              <input {...getPdfInput()} />
              {pdfFile ? (
                <p className="font-medium text-blue-700">✓ Wybrano: {pdfFile.name}</p>
              ) : (
                <p className="text-gray-600 font-medium text-sm">Przeciągnij tutaj PDF artykułu (wymagane)</p>
              )}
            </div>

            <div className="rounded bg-gray-50 p-3 border">
              <label className="mb-1 block text-xs font-bold uppercase text-gray-500">Opcjonalny ZIP</label>
              <input type="file" accept=".zip" onChange={(e) => setZipFile(e.target.files?.[0] || null)} className="text-sm" />
            </div>

            {status && (
              <div className={`rounded p-3 text-center text-sm font-bold ${status.includes("Sukces") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                {status}
              </div>
            )}

            <button type="submit" className="w-full rounded-lg bg-blue-600 py-3 font-bold text-white hover:bg-blue-700 transition shadow-md">
              Zapisz Artykuł
            </button>
          </form>
        </div>

        {/* SEKCJA 2: TABELA STATYSTYK (Wymóg F10) */}
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center gap-2 border-b pb-4">
            <BarChart3 className="text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">Statystyki i Zarządzanie</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-bold">
                <tr>
                  <th className="p-4">Nazwa Pliku</th>
                  <th className="p-4">Tytuł</th>
                  <th className="p-4">Kategoria</th>
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
                        <span className="px-2 py-1 rounded bg-gray-100 text-gray-600 text-xs">{art.category.name}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">{art.views}</span>
                        <span className="text-gray-400 text-xs uppercase">otwarć</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <button 
                        onClick={() => handleDelete(art.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition"
                        title="Usuń artykuł"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
                {articles.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-400">Brak artykułów w bazie danych.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}