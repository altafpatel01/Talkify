import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/authroute.js'
import messageRoutes from './routes/messageRoute.js'
import usersRoute from './routes/userRoute.js'
import cookieParser from 'cookie-parser'
const app = express()
app.use(cookieParser())
import connectDB from './config/database.js'


dotenv.config()
app.use(express.json())

const PORT = process.env.PORT || 5000;
connectDB()

app.use('/api/v1',userRoutes)
app.use('/api/v1/messages',messageRoutes)
app.use('/api/v1/users',usersRoute)

app.listen(PORT,()=> console.log(`server is running in port no. ${PORT}`));