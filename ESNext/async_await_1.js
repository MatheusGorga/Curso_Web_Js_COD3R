const { reject } = require("lodash")
const { resolve } = require("path")

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            //console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}
/*esperarPor(2000)
    .then(()=> console.log('Esperando'))
    .then(esperarPor)
    .then(()=> console.log('Esperando'))
    .then(esperarPor)
    .then(()=> console.log('Esperando'))
*/

function retornarValor (){
    return new Promise((resolve,reject) =>{
        setTimeout( () => resolve(10), 5000 )
    })
}

async function executar(){
        let valor = await retornarValor()

        await esperarPor(2000)
        console.log(`Asyn/Await ${valor}`)
        await esperarPor(2000)
        console.log(`Asyn/Await ${valor + 1}`)
        await esperarPor(2000)
        console.log(`Asyn/Await ${valor + 2}`)
    }

executar()
