//com promise
//http://files.cod3r.com.br/curso-js/turmaA.json


const { promises } = require('fs')
const http = require('http')
const { get, reject } = require('lodash')

const getTurma = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` 
    return new Promise((resolve, reject)=>{

        http.get(url, res =>{
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () =>{
                try{
                    resolve(JSON.parse(resultado))
                } catch{
                    //reject(e)
                }
            })
        })
    })
}
// recurso do ES8
// Ibjetico de simplificar o uso de promises..

let obterAlunos = async () =>{
    const tA = await getTurma('A')
    const tB = await getTurma('B')
    const tC = await getTurma('C')
    return [].concat(tA, tB, tC)
}// retorna um objeto AsyncFunction

    obterAlunos()
        .then(alunos => alunos.map(a => a.nome))
        .then(nomes => console.log(nomes) )


