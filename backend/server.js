import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/authroute.js'
import messageRoutes from './routes/messageRoute.js'
import cookieParser from 'cookie-parser'
const app = express()
import connectDB from './config/database.js'


dotenv.config()
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 5000;
connectDB()

app.use('/api/v1',userRoutes)
app.use('/api/v1/messages',messageRoutes)

app.listen(PORT,()=> console.log(`server is running in port no. ${PORT}`));