/*
const express= require('express')
const app=express();

const insereAluno=require('./inserir')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/cadastro',function(req,res){
    res.sendFile(__dirname+'/cadastro.html')
})


app.post('/add-aluno',function(req,res){
    insereAluno.inserirAluno(req.body.nome).then(function(){
        res.send("Aluno cadastrado")
    }).catch(function(erro){
        res.send("Não cadastrou "+erro)
    })
    
    
    //res.send("Nome do aluno "+req.body.nome)
})

app.post('/add-curso',function(req,res){
    insereAluno.inserirCurso(req.body.curso).then(function(){
        res.send("Curso cadastrado")
    }).catch(function(erro){
        res.send("Não cadastrou "+erro)
    })
    
})*/

const express = require('express')
const app = express()
const handlebars=require('express-handlebars')
const Aluno=require('./models/Aluno')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.engine('handlebars',handlebars.engine({defaultLayout:'main',
  runtimeOptions:{
    allowProtoMethodsByDefault:true,
    allowProtoPropertiesByDefault:true,
  },
}))
app.set('view engine','handlebars')
app.set('views','./views')

app.get('/',function(req,res){
  res.send("Hello word")
})

app.get('/cadastro',function(req,res){
  res.render('cad-alunos',{layout:false})
})

app.post('/add-aluno',function(req,res){
  Aluno.create({
    aluno_nome:req.body.nome_aluno
  }).then(function(){
    res.send("Aluno Cadastrado")
  }).catch(function(erro){
    res.send("Aluno não cadastrado"+erro)
  })

  //res.send(req.body.nome_aluno)
})

app.get('/alunos',function(req,res){
    Aluno.findAll({order:[['aluno_nome','ASC']]}).then(function(alunos){
      res.render('alunos',{layout:false,alunos:alunos})
    })
})

app.get('/deletar/:id',function(req,res){
    Aluno.destroy({
      where:{'id':req.params.id}
    }).then(function(){
      res.send("Registro foi apagado")
    }).catch(function(erro){
      res.send("Não apagou"+erro)
    })
})

app.get('/edicao/:aluno_nome', function(req,res){
  res.render('edt-alunos',{layout:false,aluno_nome:req.params.aluno_nome})
})

app.get('/editar/:')
app.listen(8080)