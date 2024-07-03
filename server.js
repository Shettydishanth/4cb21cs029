const express=require('express')
const app= express()
const axios=require('axios')
require('dotenv').config()
const cors=require('cors')
app.use(cors())
const port=3000 || process.env.PORT

app.get('/numbers/',async(req,res)=>{
    console.log('Helo')
    console.log(req.params.id)
    const response=await axios('http://20.244.56.144/numbers/prime')
    res.json(response)
})
app.listen(port,()=>{
    console.log('Server Started')
})
