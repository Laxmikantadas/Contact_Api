const express = require('express')
const mongoose = require('mongoose')
const {engine}=require('express-handlebars')
const {PORT,MONGODB_URI}=require('./config/index.js')
const routing=require('./router/router.js')
const fs=require('fs')
const { title } = require('process')

const app = express()
app.engine('hbs',engine({extname:'.hbs'}))
app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))

let connectdb = async () => {
    await mongoose.connect(MONGODB_URI)
    console.log('mongodb connected');
}

app.get("/",)

app.get('/home',(req,res)=>{
   res.render('home',{title:"Home Page"})
})
app.use('/api',routing)
app.listen(PORT, err => {
    if (err) throw err
    console.log(`server is running port in ${PORT}`);
    connectdb()
})

