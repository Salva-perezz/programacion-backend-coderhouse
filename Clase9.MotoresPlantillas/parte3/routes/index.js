const { Router } = require('express')
const router = Router()
const champs = [{ name: 'salva', lastname: "perez"},{ name: 'jose', lastname: "perez"},{ name: 'pepe', lastname: "perez"}]

router.get('/', (req, res) => {
    res.render('champs', { champs, hasAny: true})
})



module.exports = router