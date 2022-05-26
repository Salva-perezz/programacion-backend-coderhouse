const fs = require('fs')

// fs.readFile('./prueba.txt', 'utf-8', (error, resultado) => {
//     if(error) {
//         console.log(`Hubo un error: ${error}`)
//     } else {
//         console.log(resultado)
//     }
// })

// fs.mkdir('./prueba', error => {
//     if(error) {
//         console.log(`Hubo un error: ${error}`)
//     } else {
        
//     }
// })

// fs.writeFile('./prueba/prueba.txt', 'PRUEBA', error => {
//     if(error) {
//         console.log(`Hubo un error: ${error}`)
//     } else {
//         console.log('Se escribio el archivo')
//     }
// })

// fs.readdir('./prueba', (error, resultado) => {
//     if(error) {
//         console.log(`Hubo un error: ${error}`)
//     } else {
//         console.log(`Resultado: ${resultado}`)
//     }
// })

// const escribir = async texto => {
//     try {
//         await fs.promises.writeFile('./prueba.txt', texto)
//         console.log("Archivo escriot con exito")
//     } catch(error) {
//         console.log(`Hubo un error: ${error}`)
//     }
// }

// escribir('ESTO ES PRUEBA')

// const leerArchivo = async ruta => {
//     try {
//         const resultado = await fs.promises.readFile(ruta, 'utf-8')
//         console.log(resultado)
//     } catch(error) {
//         console.log(`Hubo un error: ${error}`)
//     }
// }

// leerArchivo('./prueba.txt')

// const agregar = async ruta => {
//     try {
//         await fs.promises.appendFile(ruta, 'agregado')
//         console.log("Archivo escrito con exito")
//     } catch(error) {
//         console.log(`Hubo un error: ${error}`)
//     }
// }

// agregar('./prueba.txt')

// const renombrar = async (ruta) => {
//     try {
//         await fs.promises.rename(ruta, './pruebaCambiada.txt')
//         console.log("Archivo renombrado con exito")
//     } catch(error) {
//         console.log(`Hubo un error: ${error}`)
//     }
// }

// renombrar('./prueba.txt')


// EJERCICIOS

//Asincronismo y callbacks

function mostrarLetras(string) {
    let contador = 0
    const intervalo = setInterval(() => {
        console.log(string[contador])
        contador++
        if(contador === string.length) clearInterval(intervalo)
    }, 1000)
}

mostrarLetras("hola")

//Fecha y Hora

try {
    fs.writeFileSync('./fyh.txt', JSON.stringify(new Date()))
    console.log(fs.readFileSync('./fyh.txt', 'utf-8'))
} catch(e) {
    console.log(`Hubo un error ${e}`)
}

/*
        A) Crear una carpeta llamada "ciudades"
    
        B) Guardar en un archivo llamado "ciudades.txt" dentro de la carpeta "ciudades" un arreglo de objetos que tengan este formato: { nombre: "Buenos Aires", poblacion: 12000 }. Como minimo el arreglo debe contar con tres objetos de ciudades

        C) Obtener la informacion del archivo y guardarla parseada, para que se transforme en un arreglo, en una variable

        D) Iterar el arreglo de ciudades para que en cada ciudad nos muestre la informacion de la siguiente manera: Ciudad: Buenos Aires  (Usar template strings)
                                                                                                                    Pobalcion: 12000
*/

fs.mkdir('./ciudades', error => {
    error && console.log(`Hubo un error ${error}`) // No se asusten jeje, este operador nos permite chequear una condicion y si es verdadera nos ejecuta lo que pongamos despues de los &&, si la condicion no se cumple no se ejecuta, imaginenselo como un if pero sin la posibilidad del else
})
const arregloCiudades = [{ nombre: "Buenos Aires", poblacion: 12000 }, { nombre: "Sao Pablo", poblacion: 12000 }, { nombre: "Caracas", poblacion: 12000 }]
fs.writeFile('./ciudades/ciudades.txt', JSON.stringify(arregloCiudades), error => {
    error && console.log(`Hubo un error ${error}`) 
    fs.readFile('./ciudades/ciudades.txt', 'utf-8', (error, resultado) => {
        if(error) {
            console.log(`Hubo un error ${error}`)
        } else {
            const resultadoParseado = JSON.parse(resultado)
            for(let i = 0; i < resultadoParseado.length; i++) {
                console.log(`
                    Ciudad: ${resultadoParseado[i].nombre}
                    Poblacion: ${resultadoParseado[i].poblacion}
                `)
            }
        }
    })
})


//MISMA CONSIGNA PERO CON PROMESAS
//Presten atencion en la diferencia de la legibilidad de este codigo hecho con promeasa que al hecho con callbacks
const ejercicio = async () => {
    try{
        const arregloCiudades = [{ nombre: "Buenos Aires", poblacion: 12000 }, { nombre: "Sao Pablo", poblacion: 12000 }, { nombre: "Caracas", poblacion: 12000 }]
        await fs.promises.mkdir('./ciudades')
        await fs.promises.writeFile('./ciudades/ciudades.txt', JSON.stringify(arregloCiudades))
        const ciudadesParseadas = JSON.parse(await fs.promises.readFile('./ciudades/ciudades.txt', 'utf-8'))
        for(let i = 0; i < ciudadesParseadas.length; i++) {
            console.log(`
                Ciudad: ${ciudadesParseadas[i].nombre}
                Poblacion: ${ciudadesParseadas[i].poblacion}
            `)
        }
    } catch(error) {
        console.log(`Hubo un error ${error}`)
    }
}

ejercicio()