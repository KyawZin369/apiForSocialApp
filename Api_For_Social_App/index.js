const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const prisma = require("./PrismaClient")

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const { contentRouter } = require("./Router/content");
const { userRouter } = require("./Router/user");

app.use("/", contentRouter)
app.use("/" , userRouter)


app.get("/info", (req, res) => {
  res.json({ msg: "Yaycha API" });
});

const server = app.listen(8000, () => {
  console.log("Yaycha API started at 8000...");
});

const gracefulShutdown = async () => {
    await prisma.$disconnect();
    server.close(()=>{
        console.log("Api Closed");
        process.exit(0)
    })
}

process.on("SIGTERM", gracefulShutdown)
process.on("SIGINT", gracefulShutdown)