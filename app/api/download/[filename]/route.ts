import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from "fs/promises";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    const filename = params.filename;

    // 1. Szukamy artykułu w bazie po nazwie pliku
    const article = await prisma.article.findFirst({
      where: { pdfPath: filename }
    });

    if (!article) return new NextResponse("Nie znaleziono pliku", { status: 404 });

    // 2. ZWIĘKSZAMY LICZNIK OTWARĆ (Wymóg F4 i F10)
    await prisma.article.update({
      where: { id: article.id },
      data: { views: { increment: 1 } }
    });

    // 3. Czytamy plik z bezpiecznego folderu
    const filePath = path.join(process.cwd(), "private_uploads", filename);
    const fileBuffer = await fs.readFile(filePath);

    // 4. Wysyłamy plik do przeglądarki
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${filename}"`,
      },
    });
  } catch (e) {
    return new NextResponse("Błąd serwera", { status: 500 });
  }
}