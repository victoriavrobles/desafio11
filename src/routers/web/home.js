import { Router } from 'express'

const productosWebRouter = new Router()

productosWebRouter.get('/home', (req, res) => {
    res.render(process.cwd() + '/views/pages/home.ejs', { nombre : req.session.nombre })
})

productosWebRouter.get('/productos-vista-test', (req, res) => {
    res.sendFile(process.cwd() + '/views/productos-vista-test.html')
})

export default productosWebRouter