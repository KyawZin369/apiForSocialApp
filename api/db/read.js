const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    const data = await prisma.user.findMany({
        include: {
            posts: false,
        }
    })
    console.log(data)
}

main()