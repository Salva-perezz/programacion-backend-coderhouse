const { Router } = require('express')
const router = Router()
const personas = ["Salva", "Pepe", "Juan", "Martina"]

router.get('/', (req, res) => {
    res.render('main.ejs', { personas })
})

router.get('/datos', (req, res) => {
    res.render('ejercicio.ejs', req.query)
})

module.exports = router