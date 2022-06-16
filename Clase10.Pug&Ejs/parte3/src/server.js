const express = require('express')
const app = express()
const rutas = require('./routes/index')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.use('/', rutas)


app.listen(8080, () => {
    console.log("Servidor escuchando puerto 8080")
})