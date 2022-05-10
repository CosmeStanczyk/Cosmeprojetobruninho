const db=require('./conexao')

exports.inserirAluno = function(parametro){

async function inserir(parametro){
    await db.connect()
    const novoNome = "insert into pessoas (nome_pessoa) values ($1)"
    await db.query(novoNome,[parametro])
    await db.end()
}
    return(inserir(parametro))
}

exports.inserirCurso = function(parametro){

    async function inserir(parametro){
        await db.connect()
        const novoCurso = "insert into curso (nome_curso) values ($1)"
        await db.query(novoCurso,[parametro])
        //await db.end()
    }
        return(inserir(parametro))
    }
    


