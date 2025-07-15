import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
dotenv.config()
import cors from "cors"
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

let port = process.env.PORT || 6000

let app = express()


// middlewares
app.use(express.json())//isse jo data aayega body will be converted to json form
// Whenever a request sends some data in the body, like from a form or a frontend app (e.g., React), automatically convert it into a usable JSON object.
app.use(cookieParser())
// "Whenever someone sends cookies in a request, automatically read them and give them to me nicely in req.cookies.
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}))

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/product", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/order", orderRoutes)




app.listen(port, () => {
    console.log("Hello From Server")
    connectDb()
})


