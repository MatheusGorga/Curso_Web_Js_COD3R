const { reject } = require("lodash");
const { resolve } = require("path");

function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('ocorreu um erro')
        }else{
            resolve(valor)
        }
    })
}

funcionarOuNao('testando', 0.2)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`erro: ${err}`))