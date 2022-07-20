import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: { type: String, require: true, max: 100 },
    lastname: { type: String, require: true, max: 100 },
    email: { type: String, unique: true, require: true, max: 100 },
    user: { type: String, unique: true, require: true, max: 100 },
    password: { type: Number, require: true }
})

const userModel = mongoose.model('user', userSchema)

export default userModel