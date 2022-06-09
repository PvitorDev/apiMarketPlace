const mongoose = require('mongoose')
const token = require("../token")
mongoose.connect(token) //token para conectar ao banco de dados

let db = mongoose.connection

module.exports = db;