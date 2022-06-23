const express = require('express')
const { Server: IOServer } = require('socket.io')
const path = require('path')
const app = express()
const serverExpress = app.listen(8080, () => console.log('Servidor escuchando puerto 8080'))
const io = new IOServer(serverExpress)
const messages = []

app.use(express.static(path.join(__dirname, './public')))

io.on('connection', socket => {
    console.log(`Se conecto un usuario ${socket.id}`)
    io.emit('server:message', messages)

    socket.on('client:message', messageInfo => {
        messages.push(messageInfo)
        io.emit('server:message', messages)
    })
})