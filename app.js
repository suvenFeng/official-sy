const path = require('path')

const Koa = require('koa')
const Router = require('koa-router')
const views = require('koa-views')
const bodyparser = require('koa-bodyparser')

const config = require('./config')
const routes = require('./routes')

const app = new Koa()
const router = new Router()

routes(router)

app.use(async (ctx, next) => {
    await next()
    const rt = ctx.response.get('X-Response-Time')
    console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})

app
    .use(bodyparser({ jsonLimit: '10mb' }))
    .use(require('koa-static')(__dirname + '/assets', { maxAge: 24 * 60 * 60 * 1000 }))
    .use(views(path.join(__dirname, 'views'), {
        options: { setting: { views: path.join(__dirname, 'views') } },
        map: { 'pug': 'pug' },
        extension: 'pug'
    }))
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(config.port)

console.log('current env is ' + process.env.NODE_ENV)