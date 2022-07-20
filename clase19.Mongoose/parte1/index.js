import mongoose from 'mongoose'
import user from './models/user.js'

const main = async () => {
    try {

        const URL = 'mongodb://localhost:27017/mibase'
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('Conexion establecida con la DB')


        // const userInModel = new user({ name: 'Salva', lastname: 'Perez', email: 'sp@mail.com', user: 'salvax', password: 123})
        // await userInModel.save()
        
        
        await user.updateOne({ name: 'Pepe' }, {
            $set: { password: 456 }
        })
        
        const usersFromDB = await user.find({ $and: [{password: {$gt: 123}, name: 'Pepe'}] })

        await user.deleteOne({name: 'Salva', password: 123})

        const updatedUsersFromDB = await user.find().sort({name: 1}).limit(1)

        console.log(updatedUsersFromDB)

    } catch(err) {
        console.log(err)
    }
}

main()