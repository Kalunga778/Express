const express = require('express');
const { parse } = require('path');
const app = express();
const path =require('path')


const logger=require('./middelware/logger')

// app.use(logger)

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended:false}))

const PORT= process.env.PORT || 5000;

// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })

// static folder 
app.use(express.static(path.join(__dirname,'public')))

// members api routes
app.use('/api/members',require('./routes/api/members'))

// get members from json files
app.listen(PORT,()=> console.log(`server running on ${PORT}`))
