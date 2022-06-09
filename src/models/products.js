const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
        
            nome: {
                type: String,
                required: true
            },
            valor: {
                type: Number,
                required: true
            },
            quantidade: {
                type: Number,
                required: true
            },
            descricao: {
                type: String,
                required: true
            }
    }, {
        id: new Date,
        versionKey: false,     
    }

)

const products = mongoose.model("products", productSchema)

module.exports = products