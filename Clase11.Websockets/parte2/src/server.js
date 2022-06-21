require('dotenv').config()
const express = require('express')
const app = express()
const puerto = process.env.PUERTO
const { Server: IOServer } = require('socket.io') // Server es la clase que estamos importando y IOServer es el nombre de la variable en el que la almacenamos, seria el equivalente a hacer: const IOServer = require(socket.io).Server
const expressServer = app.listen(puerto, (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log(`Servidor escuchando puerto: ${puerto}`)
    }
})
const io = new IOServer(expressServer)
const messages = []

app.use(express.static(__dirname + '/public'))


io.on('connection', socket => {
    console.log('Se conecto un usuario:', socket.id)
    io.emit('server:mensaje', messages)

    socket.on('cliente:mensaje', message => {
        messages.push({id: socket.id, message})
        io.emit('server:mensaje', messages)
    })
})