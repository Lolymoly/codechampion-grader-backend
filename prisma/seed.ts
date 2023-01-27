// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.task.upsert({
    where: { name: 'tasktest001' },
    update: {},
    create: {
      name: 'tasktest001',
      rating: 1200,
      timeLimit: 1000,
      memoryLimit: 1000,
      pdfLink: 'www.example.com',
    },
  });

  const post2 = await prisma.task.upsert({
    where: { name: 'tasktest002' },
    update: {},
    create: {
      name: 'tasktest002',
      rating: 1100,
      timeLimit: 1200,
      memoryLimit: 1400,
      pdfLink: 'www.example2.com/pdf',
    },
  });

  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
