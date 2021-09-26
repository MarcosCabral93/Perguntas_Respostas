const express=require('express');
const app=express();

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get("/", (req,res)=>{
res.render("index",{
    nome: "Marcos Paulo",
    linguagem: "python"
})
})

app.get("/perguntas", (req,res)=>{
    res.render("perguntar")
    })


app.listen(3000,()=>{
    console.log("App Rodando na porta 3000")

})