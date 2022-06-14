const { Router } = require('express')
const router = Router()


router.get('/cte1', (req, res) => {
    res.render('plantilla1', { titulo: 'Mensaje importante', mensaje: 'Importante', autor: 'salva', version: '1.0.0'})
})

router.get('/cte2', (req, res) => {
    res.render('plantilla2', { nombre: 'salva', apellido: 'perez', fechaYhora: Date() })
})


module.exports = router