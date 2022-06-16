const { Router } = require('express')
const router = Router()

router.get('/datos', (req, res) => {
    res.render('main.pug', req.query)
})

module.exports = router