import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "";

  const articles = await prisma.article.findMany({
    where: {
      OR: [
        { title: { contains: query, mode: 'insensitive' } }, 
        { authors: { contains: query, mode: 'insensitive' } },
        { keywords: { contains: query, mode: 'insensitive' } }
      ]
    },
    include: { category: true }
  });

  return NextResponse.json(articles);
}