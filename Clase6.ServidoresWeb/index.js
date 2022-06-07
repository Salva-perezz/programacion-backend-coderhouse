/*const http = require('http')
const puerto = 8080

const server = http.createServer((req, res) => {
    const hora = new Date().getHours()
    
    if(hora >= 6 &&  hora <= 12) {
        res.end('Buenos dias')
    } else if(hora >= 13 && hora <= 19) {
        res.end('Buenas tardes')
    } else if(hora >= 20 || hora <= 5) {
        res.end('Buenas noches')
    }

})

server.listen(puerto, () => {
    console.log(`Servidor escuchando puerto: ${puerto}`)
}) */
/*
const express = require('express')
const app = express()
const puerto = 8080

app.get('/', (req, res) => {
    res.send('holaaaa')
})

app.get('/user', (req, res) => {
    const { nombre, apellido, edad } = req.query

    console.log(req.query)
    res.send(`Hola ${nombre} ${apellido} ${edad} bienvenido!`)
})

app.listen(puerto, () => {
    console.log(`Servidor escuchando puerto: ${puerto}`) 
}) */

const express = require('express')
const app = express()
let visitas = 0

app.use((req, res, next) => {
    visitas++
    next()
})

app.get('/', (req, res) => {
    res.send('<h1 style="color: blue">Bienvenido al servidor express</h1>')
})

/* app.use((req, res, next) => {
    console.log('Estoy yendo a visitas')
    next()
}) */

app.get('/visitas', (req, res) => {
    res.send(`El servidor tuvo ${visitas} visitas`)
})

app.get('/fyh', (req, res) => {
    const data = new Date()

    res.send({Fecha: data.getDate(), Hora: data.getHours()})
})

app.listen(8080, () => {
    console.log('Servidor escuchando puerto 8080')
})