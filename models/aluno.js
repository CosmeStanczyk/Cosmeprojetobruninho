const {type}=require('express/lib/response')
const { sequelize, Sequelize } = require('./conexao');
const db=require('./conexao')

const Aluno = sequelize.define('alunos', {
    // Model attributes are defined here
    aluno_nome: {
      type: Sequelize.STRING
    }
})

//Aluno.sync()

module.exports=Aluno

