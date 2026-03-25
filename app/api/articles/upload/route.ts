import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import fs from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const categoryId = parseInt(formData.get("categoryId") as string);

  const category = await prisma.category.findUnique({ where: { id: categoryId } });
  if (!category) return NextResponse.json({ error: "Invalid category" }, { status: 400 });


  const year = new Date().getFullYear().toString().slice(-2); // "26" [cite: 9]
  const count = await prisma.article.count({
    where: { 
      categoryId: categoryId,
      createdAt: { gte: new Date(new Date().getFullYear(), 0, 1) } 
    }
  });
  
  const sequence = (count + 1).toString().padStart(3, '0');
  const fileName = `${category.code}${year}${sequence}.pdf`; 

  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(process.cwd(), "public/uploads", fileName);
  await fs.writeFile(filePath, buffer);

  const article = await prisma.article.create({
    data: {
      title: formData.get("title") as string,
      authors: formData.get("authors") as string,
      pageRange: formData.get("pageRange") as string,
      publicationDate: new Date(formData.get("publicationDate") as string),
      pdfPath: fileName,
      keywords: formData.get("keywords") as string,
      categoryId: categoryId,
    }
  });

  return NextResponse.json(article);
}