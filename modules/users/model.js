const mongoose = require('mongoose');

const UserSchema = {


    user: String,
    sen: String,
    cod: String,
    tipo: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    criado: {
        type: Date,
        default: Date.now()
    }
}

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel