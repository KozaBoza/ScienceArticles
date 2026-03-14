import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const reviews = await (prisma as any).review.findMany({
      include: {
        article: { select: { title: true, pdfPath: true } },
        reviewer: { select: { name: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({ error: "Błąd pobierania recenzji" }, { status: 500 });
  }
}