const express = require('express')
const app = express()
require("express-async-errors")
const mongoose = require('mongoose')


const errorHandleMiddleware = require('./middleware/error_handler')
require("dotenv").config()


mongoose.connect(process.env.URL,{useNewUrlParser:true})
const con = mongoose.connection

con.on("open",()=>{
    console.log('connected..')
})
app.use(express.json())

const blockchainsRouter = require('./routes/blockchain')
app.use('/blockchain',blockchainsRouter)
app.use(errorHandleMiddleware)
const port=process.env.PORT||8000
app.listen(port, ()=>{
    console.log('server started')
})
