
let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['matheus','ana', 'bia', 'carlos'])
})

p
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toUpperCase())
    .then(letra => console.log(letra))

console.log(typeof Promise)