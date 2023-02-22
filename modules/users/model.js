const mongoose = require('mongoose');

const UserSchema = {

    email: String,
    cpf: String,
    senha: String,
    telefone: String,
    codigo: String,
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