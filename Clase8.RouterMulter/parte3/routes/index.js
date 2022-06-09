const { Router } = require('express')
const router = Router()


router.post('/mascotas', (req, res) => {
    const { nombre } = req.body
    res.send('Home')
})


module.exports = router