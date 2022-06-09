const express = require('express')
const app = express()
const rutas = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static(`${__dirname}/public`))
app.use('/html', express.static(`${__dirname}/html`))


app.use('/', rutas)

app.use((error, req, res) => {
    res.status(error.httpStatusCode).send(error)
})

app.listen(8080, () => {
    console.log('Servidor escuchando puerto: 8080')
})