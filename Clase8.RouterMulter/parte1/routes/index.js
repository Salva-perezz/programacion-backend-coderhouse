const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send('Home')
})

router.get('/users', (req, res) => {
    res.send('Users')
})

module.exports = router