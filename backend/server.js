import express from 'express'
import dotenv from 'dotenv'
const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000;
app.get('/',(req,res)=>{

    res.send('hello world')
})


app.listen(PORT,()=> console.log(`server is running in port no. ${PORT}`));