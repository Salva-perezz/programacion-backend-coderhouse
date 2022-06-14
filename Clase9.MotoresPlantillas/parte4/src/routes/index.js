const { Router } = require('express')
const router = Router()
const productos = [{ title: 'Lapiz', price: 125, thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.quieninvento.org%2Fwp-content%2Fuploads%2F2013%2F06%2FLapiz.jpg&f=1&nofb=1'}, { title: 'Goma', price: 10, thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcentralpapeleria.es%2F4795-thickbox_default%2Fgoma-de-borrar-milan-caucho-8020-tinta-y-lapiz-ud.jpg&f=1&nofb=1'}, { title: 'Regla', price: 123, thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsomosarte.cl%2Fwp-content%2Fuploads%2F2018%2F10%2FRegla20cm.jpg&f=1&nofb=1'}]

router.get('/', (req, res) => {
    res.render('mensaje', {nombre: 'Salva', edad: 20, apellido: 'Pérez', email: 'salva@mail.com', cel: '1234'})
})

router.get('/products/:id', (req, res) => {
    const indice = req.params.id
    res.render('product', productos[indice])
})

module.exports = router