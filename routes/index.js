const Router = require('koa-router')

const dataaccess = require('../data/dataaccess')

const component = async (_path, ctx) => await ctx.render(_path, ctx.state)

module.exports = router => {
    router.get('/', async (ctx, next) => component('index', ctx))

    router.get('/login', (ctx, next) => component('admin/login', ctx))

    //ajax
    router.post('/ajax/admin/login', async ctx => {
        const { username, rememberMe } = ctx.request.body
        const data = await dataaccess.getUser(username)
        const { name, password } = data || { username: '', password: '' }
        if (username === name && ctx.request.body.password === password) ctx.body = { data: [data] }
        else {
            ctx.status = 400
            ctx.body = {
                message: '请输入正确的用户名和密码'
            }
        }
    })


    router.get('/ajax/admin/banner', async ctx => {
        const data = await dataaccess.getBanner()
        ctx.body = { data }
    })
}