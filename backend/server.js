import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/authroute.js'
const app = express()
import connectDB from './config/database.js'

dotenv.config()
app.use(express.json())
const PORT = process.env.PORT || 5000;
connectDB()

app.use('/api/v1',userRoutes)


app.listen(PORT,()=> console.log(`server is running in port no. ${PORT}`));