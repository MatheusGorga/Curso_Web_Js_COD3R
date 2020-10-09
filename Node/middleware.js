//middleware patter (chain of responsability)
const passo1 = (ctx,next ) => {
    ctx.valor1 = 'mind1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mind2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mind3' 

const exec = (ctx, ...middlewares) => {
    const execPasso = i => {
        middlewares && i < middlewares.length &&
            middlewares[i](ctx, () => execPasso(i + 1))
    }

    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)