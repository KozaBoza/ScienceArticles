import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('--- START SEEDING ---');

  
 const categories = [
    { code: 'M', name: 'Mathematics' },
    { code: 'I', name: 'Computer Science' },
    { code: 'D', name: 'Education' },
    { code: 'P', name: 'Science Popularization' }, // <--- ZMIENIONE Z 'Physics'
  ];

  console.log('Seeding categories...');
  for (const cat of categories) {
    await prisma.category.upsert({
      where: { code: cat.code },
      update: {},
      create: cat,
    });
  }

  const editors = [
    { name: "Prof. Jan Kowalski", affiliation: "University of Warsaw", role: "Editor-in-Chief" },
    { name: "Dr. Anna Nowak", affiliation: "Jagiellonian University", role: "Technical Editor" },
    { name: "Prof. John Doe", affiliation: "Oxford University", role: "Section Editor" },
  ];

  console.log('Seeding editors...');
  for (const ed of editors) {
    await (prisma as any).editor.upsert({
      where: { name: ed.name },
      update: {},
      create: ed,
    });
  }

  const reviewers = [
    { name: "Dr. Jonathan Hayes", affiliation: "University of Cambridge", field: "Applied Mathematics" },
    { name: "Prof. Clara Mensah", affiliation: "MIT", field: "Machine Learning" },
    { name: "Dr. Yuki Tanaka", affiliation: "Tokyo Institute of Technology", field: "Quantum Computing" },
    { name: "Dr. Elena Rostova", affiliation: "CERN", field: "Particle Physics" },
    { name: "Prof. David Miller", affiliation: "Stanford University", field: "Cognitive Science" },
    { name: "Dr. Amira Khaled", affiliation: "University of Toronto", field: "Bioinformatics" },
    { name: "Prof. Simon Wright", affiliation: "Oxford University", field: "Educational Psychology" },
    { name: "Dr. Hannah Abbott", affiliation: "ETH Zurich", field: "Data Science" },
    { name: "Dr. Felipe Cortez", affiliation: "University of São Paulo", field: "Ecology & Climate Science" },
    { name: "Prof. Li Wei", affiliation: "Tsinghua University", field: "Nanotechnology" },
  ];

  console.log('Seeding reviewers...');
  for (const rev of reviewers) {
    await (prisma as any).reviewer.upsert({
      where: { name: rev.name },
      update: {},
      create: rev,
    });
  }

  const hashedPassword = await bcrypt.hash('admin123', 10);
  await prisma.admin.upsert({
    where: { login: 'admin' },
    update: {},
    create: {
      login: 'admin',
      password: hashedPassword,
    },
  });

  //przykladowy artykuł i recenzja, żeby mieć dane do testowania widoku artykułu
  console.log('Seeding sample article and review...');
  
  const mathCat = await (prisma as any).category.findUnique({ where: { code: 'M' } });
  
  if (mathCat) {
    const article = await prisma.article.upsert({
      where: { id: 1 }, 
      update: {},
      create: {
        title: "Non-Euclidean Geometry in Modern Physics",
        authors: "Prof. Albert Einstein",
        pageRange: "45-60",
        publicationDate: new Date("2026-02-15"),
        pdfPath: "M-26-001.pdf",
        categoryId: mathCat.id,
        views: 124,
        keywords: "geometry, physics, non-euclidean"
      },
    });

    // pobieramy pierwszego recenzenta z bazy, aby przypisać mu recenzję do tego artykułu
    const firstReviewer = await (prisma as any).reviewer.findFirst();
    if (firstReviewer) {
      const existingReview = await (prisma as any).review.findFirst({ // sprawdzamy, czy recenzja już istnieje, aby uniknąć duplikatów przy ponownym uruchomieniu seedera
        where: { articleId: article.id, reviewerId: firstReviewer.id }
      });

      if (!existingReview) {
        await (prisma as any).review.create({
          data: {
            articleId: article.id,
            reviewerId: firstReviewer.id,
            content: "Excellent methodology and clear results.",
            status: "Accepted"
          }
        });
      }
    }
  }

  console.log('--- SEEDING FINISHED SUCCESSFULLY ---');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect(); // odłączamy klienta  po zakończeniu pracy
  });