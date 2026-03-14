const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // 1. Zabezpieczamy hasło algorytmem bcrypt
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  // 2. Szukamy czy admin już istnieje, a jeśli nie, to go tworzymy
  const admin = await prisma.admin.upsert({
    where: { login: 'admin' },
    update: {},
    create: {
      login: 'admin',
      password: hashedPassword,
    },
  });

  console.log('✅ Utworzono konto administratora!');
  console.log('👉 Login:', admin.login);
  console.log('👉 Hasło:', 'admin123');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });