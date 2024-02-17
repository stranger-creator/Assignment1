import express from "express";
import authRouter from './routers/auth.router.js'
import blogRouter from './routers/blog.router.js'

const app = express()

app.use(express.json())

app.use("/auth", authRouter)
app.use("/blog", blogRouter)

const PORT = 4000

app.listen(PORT, () => console.log("server started running at the PORT:", PORT))