const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient;

const { UserSeeder } = require("./UserSeeder")
const { PostSeeder } = require("./PostSeeder")
const { CommentSeeder } = require("./CommentSeeder")

async function main() {
    try {
        await UserSeeder();
        await PostSeeder();
        await CommentSeeder();
    } catch (error) {
        console.log(error)
        process.exit(1);
    } finally {
        prisma.$disconnect()
    }
}

main()