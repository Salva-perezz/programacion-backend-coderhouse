const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
const path = require('path')
const messages = []

app.use(express.static(path.join(__dirname, '/public')))

io.on('connection', socket => {
    console.log('Se conecto un usuario - ID:', socket.id)
    io.emit('server:mensaje', messages)
    
    socket.on('cliente:mensaje', data => {  
        messages.push(data)    
        io.emit('server:mensaje', messages)
    })
})


httpServer.listen(8080, (err) => {
    if(err) {
        console.log(`Hubo un error al iniciar el servidor ${err}`)
    } else {
        console.log(`Servidor escuchando puerto 8080`)
    }
})