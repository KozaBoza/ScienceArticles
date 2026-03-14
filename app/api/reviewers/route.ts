import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const reviewers = await (prisma as any).reviewer.findMany({ orderBy: { name: 'asc' } });
  return NextResponse.json(reviewers);
}

// Opcjonalnie dodaj POST, aby móc ich dodawać z panelu admina