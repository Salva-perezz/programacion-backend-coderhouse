const socket = io()
const formMessage = document.querySelector('#formMessage')
const usernameInput = document.querySelector('#usernameInput')
const messageInput = document.querySelector('#messageInput')
const messagesPool = document.querySelector('#messagesPool')

function sendMessage() {
    try {
        const username = usernameInput.value
        const message = messageInput.value
    
        socket.emit('client:message', { username, message })
    } catch(error) {
        console.log(`Hubo un error ${error}`)
    }
}

function renderMessages(messagesArray) {
    try {
        const html = messagesArray.map(messageInfo => {
            return(`<div>
                <strong>${messageInfo.username}</strong>:
                <em>${messageInfo.message}</em> </div>`)
        }).join(" ");

        messagesPool.innerHTML = html
    } catch(error) {
        console.log(`Hubo un error ${error}`)
    }
}

formMessage.addEventListener('submit', event => {
    event.preventDefault()
    sendMessage()
    messageInput.value = "" 
})


socket.on('server:message', renderMessages);