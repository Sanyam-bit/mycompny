const express=require ('express')
const app=express()

app.get('/',(req, res) =>{
    res.sendFile('public/Index.html',{root:__dirname})
})

app.get('/home',(req, res) =>{
    res.sendFile('public/parth.html',{root:__dirname})
})

app.listen(3000,()=>{
    console.log("hi this is sanyam")
})