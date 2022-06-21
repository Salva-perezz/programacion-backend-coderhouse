const socket = io()
const formMessage = document.querySelector('#formMessage')
const usernameInput = document.querySelector('#usernameInput')
const messageInput = document.querySelector('#messageInput')
const messagePool = document.querySelector('#messagePool')

formMessage.addEventListener('submit', event => {
    event.preventDefault()

    const username = usernameInput.value
    const message = messageInput.value

    socket.emit('cliente:mensaje', { username, message })
})


socket.on('server:mensaje', data => {
    messagePool.innerHTML = ""
    
    data.forEach(message => {
        messagePool.innerHTML += `<h2>${message.username}: ${message.message}</h2>`
    })
})