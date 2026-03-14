import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { readFile } from 'fs/promises';
import path from 'path';

// Inicjalizujemy klienta poza główną funkcją dla lepszej wydajności
const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> } // Struktura zgodna z najnowszym Next.js
) {
  try {
    // 1. Oczekujemy na parametry i pobieramy ID artykułu z paska URL
    const { id } = await context.params;
    const articleId = parseInt(id);

    if (isNaN(articleId)) {
      return new NextResponse("Nieprawidłowe ID artykułu", { status: 400 });
    }

    // 2. BEZPIECZEŃSTWO I STATYSTYKI: 
    // Dodajemy +1 do licznika wyświetleń i jednocześnie pobieramy dane artykułu
    const article = await prisma.article.update({
      where: { id: articleId },
      data: { views: { increment: 1 } }, // Magia Prisma: automatyczne +1 do bazy!
    });

    if (!article || !article.pdfPath) {
      return new NextResponse("Artykuł nie posiada przypisanego pliku PDF.", { status: 404 });
    }

    // 3. ODCZYT PLIKU Z UKRYTEGO FOLDERU:
    // Pobieramy ścieżkę z bazy (np. /uploads/2026/M/M-26-001.pdf)
    const filePath = path.resolve(article.pdfPath);
    
    // Odczytujemy plik z dysku serwera do pamięci (Buffer)
    const fileBuffer = await readFile(filePath);

    // 4. PRZESYŁANIE DO PRZEGLĄDARKI:
    // Ustawiamy nagłówki, by przeglądarka zrozumiała, że to PDF
    const response = new NextResponse(fileBuffer);
    response.headers.set('Content-Type', 'application/pdf');
    
    // 'inline' sprawia, że PDF otworzy się w karcie przeglądarki. 
    // Gdybyśmy użyli 'attachment', wymusiłoby to od razu pobieranie na dysk.
    const fileName = path.basename(filePath);
    response.headers.set('Content-Disposition', `inline; filename="${fileName}"`);

    return response;

  } catch (error) {
    console.error("Błąd podczas otwierania pliku PDF:", error);
    return new NextResponse("Plik nie został znaleziony na serwerze lub wystąpił błąd odczytu.", { status: 500 });
  }
}