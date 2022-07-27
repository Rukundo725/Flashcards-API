import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    const newLink = await prisma.question.create({
        data: {
          topic: 'Fullstack tutorial for GraphQL',
          question: 'www.howtographql.com',
        },
      })

    const allQuestions = await prisma.question.findMany();
    console.log(allQuestions);
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });