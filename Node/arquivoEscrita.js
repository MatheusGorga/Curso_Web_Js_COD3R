const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFileSync(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arqiuvo salvo')
})