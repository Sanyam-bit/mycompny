const express=require ('express')
const app=express()

app.get('/',(req, res) =>{
    res.sendFile('Public/index.html',{root:__dirname})
})

app.get('/home',(req, res) =>{
    res.sendFile('Public/parth.html',{root:__dirname})
})

app.listen(3000,()=>{
    console.log("hi this is sanyam")
})