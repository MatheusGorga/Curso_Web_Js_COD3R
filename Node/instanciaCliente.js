//como instancia nova é uma factory deve chamar a função junto ao require
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()


const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)


contadorC.inc()
console.log(contadorC.valor)
contadorD.inc()
contadorD.inc()
contadorD.inc()
console.log(contadorC.valor)
console.log(contadorD.valor)


