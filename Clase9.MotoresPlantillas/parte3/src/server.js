const express = require('express')
const app = express()
const rutas = require('../routes/index')
const { engine } = require('express-handlebars')
const path = require('path')

app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: path.join(__dirname, '../views/layouts/main.hbs'),
  layoutsDir: path.join(__dirname, '../views/layouts'),
  partialsDir: path.join(__dirname, '../views/partials')
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../views'))

app.use('/', rutas)

app.listen(8080, () => {
    console.log('Servidor escuchando puerto 8080')
})