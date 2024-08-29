const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Alice",
      username: "Alice123",
      profile: "User Profile",
      password: "password",
      posts: {
        create: [
          {
            content: "Alice is posting Content",
          },
          {
            content: "Another Post By Alice",
          },
        ],
      },
    },
  });

  console.log("Done ....")
}


main()