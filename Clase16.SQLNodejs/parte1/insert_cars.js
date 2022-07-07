const database = require('./db')

const insertCars = async () => {
    try {
        const cars = [
        { brand: 'Volkswagen', model: 'Gol', year: 2019, price: 1000 },
        { brand: 'Volkswagen', model: 'Gol Trend', year: 2020, price: 1500 },
        { brand: 'Ferrari', model: 'Formula 1', year: 2022, price: 65000 },
        { brand: 'Chevrolet', model: 'Corsa', year: 2011, price: 500 }
        ]
    
    await database('car').insert(cars)

    console.log('Cars inserter into Car table!')

    database.destroy()
    } catch(err) {
        console.log(err)
        database.destroy()
    }
}

insertCars()