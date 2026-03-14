import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const REVIEWERS_LIST = [
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

async function main() {
  console.log('Start seeding reviewers...');
  for (const r of REVIEWERS_LIST) {
    await (prisma as any).reviewer.create({
      data: r,
    });
  }    
  console.log('Seeding finished!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });