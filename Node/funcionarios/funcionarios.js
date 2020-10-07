const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const pais = funcionarios => funcionarios.pais === 'China'
const genero = funcionarios => funcionarios.genero === 'F'
const salario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }

axios.get(url).then(response => {
    const funcionarios = response.data
    
    
    
    const resultado = funcionarios.filter(pais).filter(genero).reduce(salario)
    console.log(resultado)
    
})

