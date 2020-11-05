function gerarNumeros(min,max, tempo){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(function(){
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
        
    })
}

function gerarVariosNumeros(){
    return Promise.all([
        gerarNumeros(1,60,1000),
        gerarNumeros(1,60,500),
        gerarNumeros(1,60,4000),
        gerarNumeros(1,60,1500),
        gerarNumeros(1,60,200),
    ])
}

console.time('promise')
gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() =>{
        console.timeLog('promise')
        console.timeEnd('promise')
    })