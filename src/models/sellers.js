const mongoose = require('mongoose')

const sellerSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },

}, {
    id: new Date,
    versionKey: false,
})

const sellers = mongoose.model("sellers",sellerSchema)

module.exports = sellers
