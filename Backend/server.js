import express from 'express'
import UserRoutes from './Routes/User.route.js'
import cors from 'cors'
import dotenv from 'dotenv'
import { connect } from './Config/db.js'
const app= express()
dotenv.config()
connect()
app.use(cors())
app.use(express.json())

app.use('/api/user',UserRoutes)

app.listen(3000,()=>{
    console.log("done");
    
})