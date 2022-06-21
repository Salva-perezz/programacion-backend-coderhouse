const socket = io()
const formMessage = document.querySelector('#formMessage')
const inputMessage = document.querySelector('#inputMessage')
const div = document.querySelector('div')

formMessage.addEventListener('submit', event => {
    event.preventDefault()

    const message = inputMessage.value
    socket.emit('cliente:mensaje', message)
})


socket.on('server:mensaje', data => {
    div.innerHTML = ""

    data.forEach(message => {
        div.innerHTML += `<p>${message.id}: ${message.message}`
    })
})