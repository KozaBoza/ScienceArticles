import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const editors = await (prisma as any).editor.findMany({
      orderBy: { id: 'asc' } // Kolejność według dodania
    });
    return NextResponse.json(editors);
  } catch (error) {
    return NextResponse.json({ error: "Błąd pobierania redaktorów" }, { status: 500 });
  }
}