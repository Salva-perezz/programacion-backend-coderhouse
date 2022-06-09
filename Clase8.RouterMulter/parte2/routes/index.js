const { Router } = require('express')
const router = Router()
const personas = []
const mascotas = []
const express = require('express')


function chequeadadorRolAdmin(req, res, next) {
    const rol = req.body.rol
    if(rol == 'admin') {
        next()
    } else {
        res.status(401).send('NO PODES ACCEDER')
    }
}

router.get('/productos', chequeadadorRolAdmin, (req, res) => {
    res.json(mascotas)
})

router.post('/mascotas', (req, res) => {
    const { nombre, raza, edad } = req.body
    if(isNaN(Number(edad))) {
        const error = new Error('La edad tiene que ser un numero')
        error.httpStatusCode(400)
        next(error, req, res)
    }
    mascotas.push({ nombre, raza, edad })

    res.sendStatus(201)
})



router.use((req, res, next) => {
    console.log('Yendo a personas')
    next()
})

router.get('/personas', (req, res, next) => {
    const { nombre, apellido, edad } = req.body
    
    personas.push({ nombre, apellido, edad })

    res.sendStatus(201)
})

router.post('/personas', (req, res, next) => {
    const { nombre, apellido, edad } = req.body

    if(isNaN(Number(edad))) {
        const error = new Error('La edad tiene que ser un numero')
        error.httpStatusCode = 400
        return next(error, req, res)
    }
    personas.push({ nombre, apellido, edad })

    res.sendStatus(201)
})

module.exports = router