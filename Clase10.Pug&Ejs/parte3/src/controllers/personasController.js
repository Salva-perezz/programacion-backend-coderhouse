const personas = []


const getPersonas = (req, res) => {
    res.render('main.ejs', { personas })
}

const postPersonas = (req, res) => {
    personas.push(req.body)
    res.redirect('/personas')
}


module.exports = {
    getPersonas,
    postPersonas
}