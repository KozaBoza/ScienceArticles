import AdminDashboard from "./AdminDashboard";
import { PrismaClient } from "@prisma/client";

// Wzorzec Singleton dla Prisma, aby uniknąć zbyt wielu otwartych połączeń w trybie dev
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default async function AdminPage() {
  // Pobieranie danych bezpośrednio z bazy po stronie serwera 
  
  // 1. Pobieramy wszystkie kategorie [cite: 71]
  const categories = await prisma.category.findMany({
    orderBy: { name: 'asc' }
  });

  // 2. Pobieramy artykuły wraz z ich kategoriami do tabeli statystyk [cite: 70, 71]
  const articles = await prisma.article.findMany({
    include: { 
      category: true 
    },
    orderBy: { 
      createdAt: 'desc' 
    }
  });

  // Przekazujemy dane do komponentu AdminDashboard ("use client")
  return (
    <AdminDashboard 
      initialCategories={categories} 
      initialArticles={articles} 
    />
  );
}