function gerarNumeros(min,max, numerosProibidos){
    if(min > max){
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        if(numerosProibidos.includes(aleatorio)){
            reject(`Numero Repetido!`)
        }else{
        resolve(aleatorio)
            }
    })
}

async function gerarMegSena(qntNumeros){
    try{
        const numeros = []
        for(let _ of Array(qntNumeros).fill()){
        numeros.push(await gerarNumeros(1,60, numeros))
        }
        return numeros
    } catch(e){
        throw "Que chato!"
    }
}

gerarMegSena(8)
    .then(console.log)
    .catch(console.log)

