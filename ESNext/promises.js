function FalarDepoisDe(sn, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(frase)
        }, sn *1000)
    })
}

FalarDepoisDe(3, 'que legal')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(console.log('ue'))