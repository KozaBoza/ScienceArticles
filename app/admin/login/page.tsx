"use client"
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Funkcja z biblioteki NextAuth
    const res = await signIn("credentials", {
      redirect: false,
      login,
      password,
    });

    if (res?.error) {
      setError("Błędny login lub hasło.");
      setIsLoading(false);
    } else {
      // Jeśli się powiodło, przenosimy do panelu z formularzem Drag&Drop
      router.push("/admin/dashboard");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-32 p-12 border border-[var(--color-primary)] bg-[var(--color-bg)] transition-colors duration-500 shadow-sm relative">
      {/* Elementy dekoracyjne, jak w reszcie designu */}
      <div className="absolute -top-1 -left-1 w-3 h-3 border-b border-r border-[var(--color-primary)] bg-[var(--color-bg)]"></div>
      <div className="absolute -top-1 -right-1 w-3 h-3 border-b border-l border-[var(--color-primary)] bg-[var(--color-bg)]"></div>
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-t border-r border-[var(--color-primary)] bg-[var(--color-bg)]"></div>
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-t border-l border-[var(--color-primary)] bg-[var(--color-bg)]"></div>

      <h1 className="font-serif text-3xl mb-8 text-center text-[var(--color-primary)]">Admin Panel</h1>
      
      {error && (
        <div className="bg-red-50 text-red-600 border border-red-500 text-[10px] tracking-wider uppercase p-3 mb-6 text-center font-bold">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="relative">
          <label className="text-[9px] tracking-[0.2em] uppercase font-semibold opacity-70 absolute -top-5 left-0">Login</label>
          <input 
            type="text" 
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="w-full border-b border-[var(--color-primary)]/50 p-2 bg-transparent outline-none focus:border-[var(--color-primary)] transition-colors text-sm" 
            placeholder="Wpisz login..."
          />
        </div>
        
        <div className="relative mt-2">
          <label className="text-[9px] tracking-[0.2em] uppercase font-semibold opacity-70 absolute -top-5 left-0">Hasło</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-b border-[var(--color-primary)]/50 p-2 bg-transparent outline-none focus:border-[var(--color-primary)] transition-colors text-sm" 
            placeholder="Wpisz hasło..."
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className={`mt-6 px-8 py-3 text-[10px] tracking-[0.2em] uppercase transition-all duration-300 font-bold border border-[var(--color-primary)]
            ${isLoading ? 'bg-[var(--color-muted)] text-[var(--color-primary)] opacity-50 cursor-not-allowed' : 'bg-[var(--color-primary)] text-[var(--color-bg)] hover:bg-[var(--color-bg)] hover:text-[var(--color-primary)]'}`}
        >
          {isLoading ? "Autoryzacja..." : "Login"}
        </button>
      </form>
    </div>
  );
}