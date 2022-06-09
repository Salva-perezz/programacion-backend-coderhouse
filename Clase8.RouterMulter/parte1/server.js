const express = require('express')
const app = express()
const puerto = 8080
const rutas = require('./routes/index')

app.use('/', rutas)


app.listen(puerto, (err) => {
    if(err) {
        console.log(`Se produjo un error al iniciar el servidor ${err}`)
    } else {
        console.log(`El servidor esta escuchando el puerto ${puerto}`)
    }
})