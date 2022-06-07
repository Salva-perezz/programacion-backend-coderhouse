// const express = require('express')
/*import express from 'express'
const app = express()
const users = [{id: 1, name: 'salva'}, {id: 2, name: 'pepe'}, {id: 3, name: 'salva'}]

app.get('/api/user', (req, res) => {
    const nombre = req.query.nombre
    if(nombre) {
        const userQuery = users.filter(user => {
            return user.name === nombre
        })
        res.json(userQuery)
    }
    res.json(users)
})

app.get('/api/user/:id', (req, res) => {
    const id = Number(req.params.id)
    const userParam = users.filter(user => {
        return user.id === id
    })
    res.json(userParam)
})




app.listen(8080, (err) => {
    if(err) {
        console.log(`Hubo un error al iniciar el servidor ${err}`)
    } else {
        console.log(`Servidor escuchando puerto 8080`)
    }
}) */

/*import express from 'express'
const app = express()
const puerto = 8080
const productos = [
    {
      "title": "Escuadra",
      "price": 123.45,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
      "id": 1
    },
    {
      "title": "Calculadora",
      "price": 234.56,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
      "id": 2
    },
    {
      "title": "Globo Terráqueo",
      "price": 345.67,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
      "id": 3
    }
   ]

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/productos', (req, res) => {
    res.json(productos)
})

app.get('/api/productos/:id', (req, res) => {
    const id = req.params.id

    if(isNaN(Number(id))) {
        return res.json({ error: "El parámetro no es un número" })
    }
    
    const productoFilter = productos.filter(producto => {
        return producto.id === Number(id)
    })

    if(!productoFilter.length) res.status(404).json({ error: "El contenido que solicito no existe" })
    console.log(productoFilter)
    res.json(productoFilter)
})

app.post('/api/productos', (req, res) => {
    const { title, price, thumbnail } = req.body
    const ultimoId = productos[productos.length - 1].id
    const producto = {title, price, thumbnail}

    producto.id = ultimoId + 1
    productos.push(producto)

    res.sendStatus(201)
})

app.put('/api/productos/:id', (req, res) => {
    const {title, price, thumbnail} = req.body
    const product = productos.filter(producto => {
        return producto.id === Number(req.params.id)
    })

    product.title = title
    product.price = price
    product.thumbnail = thumbnail

    productos.push(product)

    res.sendStatus(200)
})


app.listen(puerto, err => {
    if(err) {
        console.log(`Se produjo un error al iniciar el servidor ${err}`)
    } else {
        console.log(`El servidor esta escuchando el puerto: ${puerto}`)
    }
}) */
/*
import express from 'express'
const app = express()
const puerto = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/operacion/:oper', (req, res) => {
    const operArray = req.params.oper.split('')
    let operacion;
    switch (operArray[1]) {
        case '+':
            operacion = Number(operArray[0]) + Number(operArray[2])
            break;
        case '-':
            operacion = Number(operArray[0]) - Number(operArray[2])
            break;
    
        default:
            break;
    }

    res.json(operacion)
})
app.get('/api/sumar/:num1/:num2', (req, res) => {
    const suma = Number(req.params.num1) + Number(req.params.num2)
    res.json(suma)
})

app.get('/api/sumar', (req, res) => {
    const suma = Number(req.query.num1) + Number(req.query.num2)
    res.json(suma)
})



app.listen(puerto, (err) => {
    if(err) {
        console.log(`Se produjo un error al iniciar el servidor ${err}`)
    } else {
        console.log(`El servidor esta escuchando el puerto: ${puerto}`)
    }
}) */

import express from 'express'
const app = express()
const puerto = 8080
let frase = 'Frase Inicial'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/frase', (req, res) => {
    res.json({frase})
})

app.get('/api/frase/:pos', (req, res) => {
    const fraseArr = frase.split(' ')
    const response = fraseArr.filter(palabra => {
        console.log(palabra)
        return palabra == req.params.pos
    })
    res.json({buscada: response})
})

app.post('/api/frase', (req, res) => {
    const { palabra } = req.body
    frase = frase + ' ' + palabra
    res.json({agregada: palabra})
})

app.put('/api/frase', (req, res) => {
    const { fraseCliente } = req.body
    frase = fraseCliente
    res.json({actualizada: fraseCliente})
})

app.delete('/api/frase/:pos', (req, res) => {
    let fraseArr = frase.split(' ')
    const indice = fraseArr.indexOf(req.params.pos)
    fraseArr[indice] = ''
    frase = fraseArr.join(' ')

    res.sendStatus(200)
})


app.listen(puerto, (err) => {
    if(err) {
        console.log(`Se produjo un error al iniciar el servidor ${err}`)
    } else {
        console.log(`El servidor esta escuchando el puerto: ${puerto}`)
    }
})