for (let letra of "Cod3r"){
    console.log(letra)
}

const assuntosEcma = ['map', 'set', 'promise']

for(let i in assuntosEcma){
    console.log(i)
}

for (let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntoMap = new Map([
    ['map', {abordado:true}],
    ['set', {abordado:true}],
    ['promise', {abordado:false}]

])


for (let chave of assuntoMap.keys()){
    console.log(chave)
}

for (let valor of assuntoMap.values()){
    console.log(valor)
}

for (let [ch, vl] of assuntoMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a','b','c'])
for( let letra of s){
    console.log(letra)
}