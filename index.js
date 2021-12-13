import express from "express"
import path from "path"
import serverRoutes from "./routes/router.js"
import mongoose from "mongoose"


const __dirname = path.resolve()
const PORT = process.env.PORT || 80
const app = express()
const DB_URL = "mongodb+srv://user:user@cluster0.586yh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


app.use(express.json())
app.use(express.static(path.resolve(__dirname, "static")))
app.use(serverRoutes)

async function startApp () {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log(`Сервер запущен на порту ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

startApp()




