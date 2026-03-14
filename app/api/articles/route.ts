import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import fs from "fs";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Pobieramy teksty z formularza
    const title = formData.get("title") as string;
    const authors = formData.get("authors") as string;
    const pageRange = formData.get("pageRange") as string;
    const publicationDateStr = formData.get("publicationDate") as string;
    const categoryId = parseInt(formData.get("categoryId") as string);
    
    // Pobieramy pliki
    const pdfFile = formData.get("pdfFile") as File;
    const zipFile = formData.get("zipFile") as File | null;

    if (!pdfFile || !title || !authors || !publicationDateStr || !categoryId) {
      return NextResponse.json({ error: "Brakujące dane" }, { status: 400 });
    }

    // Weryfikacja typu pliku (Wymóg NF4)
    if (pdfFile.type !== "application/pdf") {
      return NextResponse.json({ error: "Tylko pliki PDF są dozwolone!" }, { status: 400 });
    }

    const pubDate = new Date(publicationDateStr);
    const year = pubDate.getFullYear();
    const shortYear = year.toString().slice(-2); // Ostatnie dwie cyfry roku (np. "26" z 2026)

    // 1. Pobieramy kategorię z bazy, by poznać literkę (M, I, D, P)
    const category = await prisma.category.findUnique({ where: { id: categoryId } });
    if (!category) return NextResponse.json({ error: "Kategoria nie istnieje" }, { status: 400 });

    // 2. Szukamy, ile było już artykułów w tej kategorii w tym samym roku (Wymóg F5 - numer NNN)
    // UWAGA: Szukamy w dacie od 1 stycznia do 31 grudnia danego roku
    const startOfYear = new Date(year, 0, 1);
    const endOfYear = new Date(year, 11, 31, 23, 59, 59);

    const articleCount = await prisma.article.count({
      where: {
        categoryId: category.id,
        publicationDate: {
          gte: startOfYear,
          lte: endOfYear,
        },
      },
    });

    // 3. Generujemy nazwę pliku X-YY-NNN.pdf
    const nextNumber = (articleCount + 1).toString().padStart(3, "0"); // np. "001"
    const pdfFileName = `${category.code}-${shortYear}-${nextNumber}.pdf`;

    // 4. Zapisujemy plik bezpiecznie na dysku (Wymóg NF4)
    const uploadDir = path.join(process.cwd(), "private_uploads");
    
    // Jeśli folder private_uploads nie istnieje, twórzymy go
    if (!fs.existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Konwertujemy plik na format zjadliwy dla serwera (Buffer)
    const pdfBuffer = Buffer.from(await pdfFile.arrayBuffer());
    const pdfPath = path.join(uploadDir, pdfFileName);
    
    await writeFile(pdfPath, pdfBuffer);

    // Opcjonalny plik ZIP
    let zipPathStr = null;
    if (zipFile) {
      const zipFileName = `${category.code}-${shortYear}-${nextNumber}-kod.zip`;
      const zipBuffer = Buffer.from(await zipFile.arrayBuffer());
      const zipPath = path.join(uploadDir, zipFileName);
      await writeFile(zipPath, zipBuffer);
      zipPathStr = zipFileName;
    }

    // 5. Zapisujemy rekord w bazie danych Prisma
    const newArticle = await prisma.article.create({
      data: {
        title,
        authors,
        pageRange,
        publicationDate: pubDate,
        categoryId: category.id,
        pdfPath: pdfFileName, // Zapisujemy tylko nazwę, reszta jest chroniona
        extraFilePath: zipPathStr,
      },
    });

    return NextResponse.json({ success: true, article: newArticle });

  } catch (error) {
    console.error("Błąd podczas zapisywania artykułu:", error);
    return NextResponse.json({ error: "Wewnętrzny błąd serwera" }, { status: 500 });
  }
}

// Metoda GET: Pobiera wszystkie artykuły do tabeli statystyk
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const year = searchParams.get("year");

  let where: any = {};

  if (category) {
    where.category = { name: category };
  }

  if (year) {
    const start = new Date(`${year}-01-01`);
    const end = new Date(`${year}-12-31`);
    where.publicationDate = { gte: start, lte: end };
  }

  const articles = await prisma.article.findMany({
    where,
    include: { category: true },
    orderBy: { publicationDate: 'desc' }
  });

  return NextResponse.json(articles);
}

// Metoda DELETE: Usuwa artykuł (Wymóg F9)
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.article.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Błąd usuwania" }, { status: 500 });
  }
}