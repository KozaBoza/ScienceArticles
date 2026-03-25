import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { readFile } from 'fs/promises';
import path from 'path';

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } } // Next.js 14/15 standard
) {
  try {
    const articleId = parseInt(params.id);

    if (isNaN(articleId)) {
      return new NextResponse("Nieprawidłowe ID artykułu", { status: 400 });
    }

    const article = await prisma.article.update({
      where: { id: articleId },
      data: { views: { increment: 1 } },
    });

    if (!article || !article.pdfPath) {
      return new NextResponse("Artykuł nie istnieje.", { status: 404 });
    }

    const filePath = path.join(process.cwd(), 'public', 'uploads', article.pdfPath);
    
    const fileBuffer = await readFile(filePath);


    const response = new NextResponse(fileBuffer);
    response.headers.set('Content-Type', 'application/pdf');
    
    response.headers.set('Content-Disposition', `inline; filename="${article.pdfPath}"`);

    return response;

  } catch (error) {
    console.error("Błąd podczas serwowania PDF:", error);
    return new NextResponse("Plik nie został znaleziony na serwerze.", { status: 404 });
  }
}