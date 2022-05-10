const {type}=require('express/lib/response')
const { sequelize, Sequelize } = require('./conexao');
const db=require('./conexao')

const Curso = sequelize.define('curso', {
    // Model attributes are defined here
    Curso_nome: {
      type: Sequelize.STRING
    }
    
  });

 // Curso.sync() --Criação de tabela

 const novoRegistro=Curso.create({
     Curso_nome:"Fisioterapia"
 })





















































































































