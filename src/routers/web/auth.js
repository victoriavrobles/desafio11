import { Router } from 'express'

import path from 'path'

const authWebRouter = new Router()

authWebRouter.get('/', (req, res) => {
    if (!req.session.nombre) {
        res.redirect('/login')
    } else {
        res.redirect('/home')
    }
})

authWebRouter.get('/login', (req, res) => {
    if (!req.session.nombre) {
        res.sendFile(process.cwd() + '/views/login.html')
    } else {
        res.redirect('/home')
    }
})

authWebRouter.get('/logout', (req, res) => {

    const nombre = req.session.nombre;
    if (!nombre) {
      return res.send(`Logout ya efectuado anteriormente`);
    }
    req.session.destroy((err) => {
      if (!err) {
        return res.render(process.cwd() + '/views/pages/logout.ejs', { nombre: nombre })
      }
    });
})


authWebRouter.post('/login', (req, res) => {
    console.log(req.body);
    req.session.nombre = req.body.nombre;
    res.redirect('/home')
})



export default authWebRouter