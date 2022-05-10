/*//const pg=require('pg')
const {Pool}=require('pg') // utilizando pool de conexao
const {database, password} =require('pg/lib/defaults')

//const client=new pg.Client({
const pool =new Pool({ //criando a conexao atraves do Pool
    user:'postgres',
    host:'localhost',
    database:'cadastro',
    password:'admin',
    port:5432
})


module.exports=client
*/

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cadastro', 'postgres', 'admin', {
    host: 'localhost',
    dialect:'postgres'
  });

  module.exports={
      Sequelize:Sequelize,
      sequelize:sequelize
  }
