const fs = require('fs')
const { connect } = require('http2')
const path = require('path')



function LeArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo ){
            resolve(conteudo.toString())
        })

        console.log('Depois de Ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt')
LeArquivo(caminho)
    .then(conteudo => console.log(conteudo))