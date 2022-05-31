/*let objeto = {}

for(let i = 0; i <= 10000; i++) {
    const numeroAleatorio = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    if(objeto[numeroAleatorio]) {
        objeto[numeroAleatorio] = objeto[numeroAleatorio] + 1
    } else {
        objeto[numeroAleatorio] = 1
    }
}

console.log(objeto)

const productos = [
    { id:1, nombre:'Escuadra', precio:335.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const nombreProductos = []
let precioTotal = 0
let precioMenor = productos[0].precio
let precioMayor = 0

productos.map(item => {
    nombreProductos.push(item.nombre)
    precioTotal += item.precio
    if(item.precio > precioMayor) precioMayor = item.precio
    if(item.precio < precioMayor) precioMayor = item.precio
})

const objetoMostrar = {
    nombreProductos: nombreProductos.join(', '),
    precioTotal,
    precioMenor,
    precioMayor,
    precioPromedio: precioTotal / 6
}

console.log(objetoMostrar)



const moment = require('moment')
moment.locale('es')

console.log(`
    Hoy es ${moment().format('DD/MM/YYYY')}
    Naci el: ${moment('2001-10-25').format('DD/MM/YYYY')}
    Desde mi nacimiento han pasado ${moment().diff("2001-10-25", 'years')} años
    Desde mi nacimiento han pasado ${moment().diff("2001-10-25", 'days')} dias
`) */







// GUIÑO GUIÑO

/*

const fs = require('fs')

class Contenedor {
    constructor(fileName) {
        this.fileName = fileName
        fs.promises.writeFile(`./${fileName}`, '')
    }

    async save(objeto) {
        let data = await fs.promises.readFile(`./${this.fileName}`, 'utf-8')

        if(!data) {
            objeto.id = 1
            const arr = [objeto]
            await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(arr))
            return objeto.id
        } else {
            data = JSON.parse(data);
            objeto.id = data.length + 1
            data.push(objeto)
            await fs.promises.writeFile(`./${this.fileName}`, JSON.stringify(data))
            return objeto.id
        }
    }
}

const productos = new Contenedor('productos.txt')

*/